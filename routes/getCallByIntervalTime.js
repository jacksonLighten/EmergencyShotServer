module.exports = function getCallByIntervalTime (request, response, next) {
  var time = request.params.time;
  var intervalTime = request.params.intervalTime;
  console.log(time, intervalTime);
  response.render('index', { title: 'Create Call By Time' });
  
};