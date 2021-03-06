import firebase from './firebase';

const storageRef = firebase.storage().ref();
const file = '';

// Create the file metadata
const metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
const uploadTask = storageRef.child(`products/${file.name}`).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log(`Upload is ${progress}% done`);
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED:
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING:
      console.log('Upload is running');
      break;
    default:
      console.log('Upload status');
      break;
  }
}, (error) => {
  switch (error.code) {
    case 'storage/unauthorized':
      console.log('User doesn\'t have permission to access the object');
      break;
    case 'storage/canceled':
      console.log('User canceled the upload');
      break;
    case 'storage/unknown':
      console.log('Unknown error occurred, inspect error.serverResponse');
      break;
    default:
      console.log('Upload Error');
      break;
  }
}, () => {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    console.log('File available at', downloadURL);
  });
});

function saveFile(url) {
  // Get file name from url.
  var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function () {
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
    a.download = filename; // Set the file name.
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    delete a;
  };
  xhr.open('GET', url);
  xhr.send();
}
