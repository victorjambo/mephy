import firebase from './firebase';

export default (collection, filter) => {
  if (!filter.fields.value) {
    return { collection };
  }

  let query = {
    collection,
    where: [
      filter.fields.fields,
      filter.fields.operator,
      filter.fields.value
    ]
  };

  if (filter.collection) {
    query.where.pop();
    query = {
      ...query,
      where: [
        ...query.where,
        firebase.firestore().collection(filter.collection).doc(filter.fields.value)
      ]
    };
  }

  return query;
};
