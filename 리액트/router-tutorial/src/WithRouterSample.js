import React from "react";
import { withRouter } from "react-router-dom";//라우터로 사용된 컴포넌트가 아니여도 매치,로케이션,히스토리 등을 접근할수있게 해준다 

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
};
export default withRouter(WithRouterSample);
