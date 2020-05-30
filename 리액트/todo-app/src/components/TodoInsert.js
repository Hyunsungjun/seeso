import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // 값 초기화
      //서브밋 이벤트는 브라우저에서 새로고침을 발생시키고 이를 방지시키기위해 이함수를 부른다
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
