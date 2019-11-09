const db = require('../../../db');

module.exports = function(_, res) {
  db
    .raw('SELECT current_database()')
    .then(({ rows: [{ current_database }] }) => {
      return res.send({
        message: 'Welcome to Mephys Physiotherapy mothership',
        current_database,
      });
    })
    .catch(err => {
      return res.json({
        message: 'Welcome to Mephys Physiotherapy mothership',
        err,
      });
    });
}
