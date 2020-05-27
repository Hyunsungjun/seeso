const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../models');

//passport가 변수인줄 알았더니 모듈이었다. 로그인에 필요한 모듈이다.
// serializeUser는 로그인시 실행되는 인자 값에서 user 객체를 전달 받아 로그인 성공시 실행되는 user객체를 받아 
// req.session.passport.user에 저장합니다. 세션이 있어야 페이지 이동시에 로그인 정보가 유지된다!! 
module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id); //첫번째 인자는 디비서버에 에러를 내는 코드이므로 null 필수 
  });
// deserializeUser는 실제 서버로 들어오는 요청마다 세션정보에서(serializeUser)에서 실제 DB의 데이터와 비교한다
// 유저정보가 있으면 done의 두번째 인자를 req.user에 저장하고 요청을 처리할 때 유저의 정보를 req.user를 통해서 넘겨준다

  passport.deserializeUser((id, done) => {
    User.find({
      where: { id },
      include: [{
        model: User,
        attributes: ['id', 'nick'],
        as: 'Followers',
      }, {
        model: User,
        attributes: ['id', 'nick'],
        as: 'Followings',
      }],
    })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local(passport);
  kakao(passport);
};
