const timestamp = new Date();
const defaults = {
  createdAt: timestamp,
  updatedAt: timestamp
}

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Test', [
    {
      id: 1234,
      title: 'how to train a dragon',
      description: 'guys how do i really train a dragon?',
      ...defaults
    },
    {
      id: 1235,
      title: 'Cooking show',
      description: 'how can i start a cooking show?',
      ...defaults
    },
    {
      id: 1236,
      title: 'Movies and stuff',
      description: 'Any one know a great movie i can watch tonight',
      ...defaults
    },
    {
      id: 1237,
      title: 'Remotes and tvs',
      description: 'Why does my remote always gets lost when i want to use it',
      ...defaults
    },
    {
      id: 1238,
      title: 'ORM Dilect',
      description: 'What is a dilect in orms',
      ...defaults
    }
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Test', timestamp, {})
};
