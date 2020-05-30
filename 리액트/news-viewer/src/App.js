// import React , { useState , useCallback} from 'react';
import React from 'react'; // 테스트 용
//useState 함수의 인자에는 state의 초기값을 넣어줌 null이겠지  data=현재상태 setData =state를 변경시켜주는 setter함수
// import axios from 'axios'; //http 요청을 프로미스로 받는 모듈
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';



const App = () => {
  return <Route path="/:category?" component={NewsPage} /> //z카테고리 값이 선택적이다는 뜻 
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);
  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const response  = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=addcdab2a76a4d5eb229e948752cdf20',);//발급 받은 api키

  //       setData(response.data); //클릭이 일어날시에 .get으로 api 호출하고 비동기처리된 결과 값을  data에 집어넣는다
  //     } catch (e) {
  //       console.log(e);
  //     }
  // };
  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data &&
  //       <textarea
  //         rows={7}
  //         value={JSON.stringify(data, null, 2)} //값을 정해준다 data= 문자열로 반환될 값, null=모든 속성들이 JSON 문자열 결과에 포함, 2=space
  //       />
  //     }
  //   </div>
  // );
};

export default App;
