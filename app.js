var express = require('express');
var indexRouter = require('./routes/index');
var path = require('path');

var app = express();

// view engine setup
app.set('view engine', 'ejs');//express template view engine을 설정 cf) app.set('view engine', 'pug');

app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'/')));//정적인 디렉토리 위치 설정
app.use(express.json());//json타입으로 파싱되어 반환
app.use('/', indexRouter);//'/'와 indexRouter와 마운트함으로써 '/'path 호출 시 './routes/index'가 호출된다. 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});

module.exports = app;
