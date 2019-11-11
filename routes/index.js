/*
main server js file
*/
var express = require('express');//express 모듈 가져오기
var router = express.Router(); //express의 라우터를 router에 저장

/* GET home page. */
router.get('/', function(req, res, next) {//router를 실행하여 login.html 가져오기, login.html에 title 변수에 'Express' 값을 넣어서 res해줌
  res.render('login.html', { title: 'S\'Tempress' });
});

module.exports = router;//router 모듈 export
