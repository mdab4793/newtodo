import { useState } from "react";
import "../TodoForm.css";
let nextId = 4;
const TodoForm = ({ todos, setTodos, writeWindowClose }) => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onClickBtn = (text) => {
    if (window.confirm("작성하시겠습니까??")) {
      // let copy = [...todos];
      // copy.unshift(input);
      // setTodos(copy);

      setCount((prev) => prev + 1);
      const newData = { checked: false, title: input };
      setTodos((p) => {
        console.log("prev", p);
        p.push(newData);
        return p;
      });
    } else {
      alert("작성취소.");
    }
  };
  return (
    <div className="todoForm-background">
      <input
        value={input}
        onChange={onChange}
        placeholder="할일을 입력해주세요."
      />
      <button
        onClick={() => {
          onClickBtn();
          writeWindowClose();
        }}
      >
        할일 추가
      </button>{" "}
      <button
        onClick={() => {
          writeWindowClose();
        }}
      >
        닫기
      </button>
    </div>
  );
};
export default TodoForm;
