let jsonStr = '{"dataObject":[{"myInput":"json형태의 데이터를 HTML에 출력해보기"}]}'; //확인용 기존 데이터
//함수 내에선 json,string 데이터를 생성 해낼수있다 함수 밖에서 써야 데이터가 추가가 되므로
const PrintOb1 = JSON.parse(jsonStr);
console.log('함수밖에선 어떻게 나오는지 봅시다', jsonStr);


function newElement() { //다시 분석해봄
    const newTask = document.getElementById("myInput").value; //입력값 
    let ToDo = {}; //데이터 넣어볼 그라운드
    ToDo.myInput = newTask;
    //Debug
    console.log('Todo 내가 방금 입력한 값', ToDo);

    const PrintOb = JSON.parse(jsonStr); //MDN기준으로 분석해주는 명령어 
    PrintOb['dataObject'].push(ToDo);
    jsonStr = JSON.stringify(PrintOb);
    console.log('json 전체 데이터 보기', PrintOb);
    console.log('json 특정 데이터 보기', PrintOb.dataObject[1]);
    console.log('json 문자 데이터 보기', jsonStr);
};