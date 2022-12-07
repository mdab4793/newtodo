import { useEffect, useState } from "react";
import "../TodoEditForm.css";

const TodoEditForm = ({ setTodos, item, edit, setEdit, writeWindowClose }) => {
  const [inputEdit, setInputEdit] = useState("");

  useEffect(() => {
    console.log("useEffect", item);
    setInputEdit(item.title);
  }, [item]);

  const onClickBtn = () => {
    if (window.confirm("수정하시겠습니까??")) {
      console.log(item, inputEdit);
      const newData = { ...item };
      newData.title = inputEdit;

      console.log(newData);
    } else {
      alert("수정취소.");
    }
  };

  const showMessage = () => {
    alert("test");
  };

  return (
    <div className="todoEditForm-background">
      <input
        type="text"
        value={inputEdit}
        onChange={(e) => {
          setInputEdit(e.target.value);
          console.log(inputEdit);
        }}
      />
      <button
        onClick={() => {
          onClickBtn();
          setEdit(false);
          writeWindowClose();
        }}
      >
        수정하기
      </button>{" "}
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        닫기
      </button>
    </div>
  );
};

{
}

export default TodoEditForm;
