const { sequelize } = require('../../db/models');

module.exports = function(_, res) {
  sequelize
    .query('SELECT current_database()')
    .then(current_database => {
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
