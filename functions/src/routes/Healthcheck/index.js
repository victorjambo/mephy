const db = require('../../../db');

module.exports = function(_, res) {
  db
    .query('SELECT version()')
    .then(({ rows: [{ version }] }) => {
      return res.send({
        message: 'Welcome to Mephys Physiotherapy mothership',
        db: version
      });
    })
    .catch(err => {
      return res.json({
        message: 'Welcome to Mephys Physiotherapy mothership',
        db: err
      });
    });
}
