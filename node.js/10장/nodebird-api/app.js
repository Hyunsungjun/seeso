//필요한 모듈 임포트 
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const morgan = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();

const { sequelize } = require('./models');
const passportConfig = require('./passport');
const authRouter = require('./routes/auth');
const indexRouter = require('./routes');
const v1 = require('./routes/v1');
const v2 = require('./routes/v2');

// express 클래스의 인스턴스에 연결됨 
const app = express();
sequelize.sync(); // 해당 코드로 테이블을 생성 하는것임
passportConfig(passport); //상속 받았다고 보면 될 것 같다.

//__dirname 경로까지만 표시 __filename 파일이름 포함한 경로표시 
// node의 모듈 path 경로를 표시해 주는 것이며 .join은 path값과 views의 값을 하나의 문자열로 반환한다는 뜻이다. 
// 그러나 views가 왜 필요한지는 모르겠다. 
app.set('views', path.join(__dirname, 'views')); //더 찾아보니 템플릿의 위치를 알려주는 것이라고 한다. 생각해보니 장고에서도 이랬었다. 
app.set('view engine', 'pug');
// process.env는 컴퓨터 환경과 관련된 정보를 가진 객체라고 한다. 그럼 그 객체에 port를 주겠다는 것이 되는 것이고 ||는 or인데 디폴트 값이 3000이니까 두개의 값을 안전하게 넣는줄 알았더니 더 찾아보니 ||는 값 대입하는 연산이라고 한다. 추리를 하면 안될듯 하다.
app.set('port', process.env.PORT || 8002);

app.use(morgan('dev'));//dev라는 이름에서 추측 할수있었지만 개발용이다. 정의로 이동도 해보았고 정의된곳 없나 아무리 살펴봐도 없길래 알고보니 인자값이었고 여러가지 설정을 할수 있었다.
app.use(express.static(path.join(__dirname, 'public'))); //정적인 파일 경로주는 내용 
app.use(express.json()); //bodyparser라고 한다. body값을 가져오며 익스프레스에 내장되어 있다고 한다.
app.use(express.urlencoded({ extended: false })); // 내장값인 쿼리스트링을 사용하는 것이고 값을 true로 주면 외부 라이브러리를 설치해야 하는 상황이 온다. 
// 쿠키파서는 쿠키를 추출하는 미들웨어이고 
app.use(cookieParser(process.env.COOKIE_SECRET));//한참 찾았는데 쿠키시크릿은.env에 있는 값이고 nodebirds가 뭔지는 모르겠다.
app.use(session({ //세션에 관한 설정인듯 하다 
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(flash());
app.use(passport.initialize()); // 비밀번호 첫글자 비교 
app.use(passport.session()); // 세션에 대한 처리 

app.use('/v1', v1);
app.use('/v2', v2);
app.use('/auth', authRouter); //라우터 연결 
app.use('/', indexRouter); // 인덱스 연결 

app.use((req, res, next) => { // 에러가 났을 경우의 처리 
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//app.use 미들웨어 호출하는 역할을 한다
app.use((err, req, res, next) => {
  res.locals.message = err.message; //사람이 읽을 수 있는 에러 메세지 
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
app.listen(app.get('port'), () => { //서버 실행 포트 알려주기 
  console.log(app.get('port'), '번 포트에서 대기중');
});
