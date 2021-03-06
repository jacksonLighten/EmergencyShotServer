var sequelize = require('../database/database_connection.js')

module.exports = function getCallsSince (request, response, next) {
  console.log('GET CALLS')

  var startTime = request.params.startTime
  var startDate = request.params.startDate

  /*
  Date database format
  show datestyle;                                                      DateStyle
  -----------
   ISO, MDY
  (1 row)

  test_node=# select current_date
  date
  ------------
  2015-12-31
  (1 row)
  */
  /* select id, to_char(chamada.data, 'MM-DD-YYYY') as data, horario, lat, lon, id_sinistro, midia
from chamada where data>='11-27-2015' and horario > '14:00:00' ORDER BY chamada.data, horario;*/
  var query = `SELECT id, to_char(chamada.data, 'MM-DD-YYYY') as data, horario, lat, lon, id_sinistro, endereco, midia
FROM chamada WHERE data>='${startDate}' AND horario > '${startTime}' ORDER BY chamada.data, horario;`

  sequelize.query(query, {type: sequelize.QueryTypes.SELECT})
    .then(function (result) {
      console.log(result)
      response.send(result)
    })
    .catch(function (error) {
      console.log('ERROR --------------------------')
      response.send('ERROR')
    })
}
