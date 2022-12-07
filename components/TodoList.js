import { useRef, useState } from "react";
import TodoEditForm from "./TodoEditForm";
import "../TodoList.css";
const TodoList = ({ todos, setTodos, writeWindowClose, editWindowClose }) => {
  const [edit, setEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  console.log("todos ", todos);
  return (
    <div className="todo-list">
      <ul>
        {todos.map((item, index) => (
          // {checked : false, title : "title"}
          <li key={index}>
            <input type="checkbox" defaultChecked={item.checked} />
            {item.title}
            <button
              className="todo-list-delete"
              onClick={() => {
                if (window.confirm("삭제하시겠습니까?")) {
                  // console.log("remove ", item);
                  const removeTargetIndex = todos.findIndex(
                    (element) => element.id === item.id
                  );
                  console.log(removeTargetIndex);
                  let copy = [...todos];
                  copy.splice(removeTargetIndex, 1);
                  setTodos(copy);
                } else {
                  alert("삭제취소.");
                }
              }}
            >
              삭제
            </button>
            <button
              className="todo-list-edit"
              onClick={() => {
                setEdit(!edit);
                setSelectedItem(item);
              }}
            >
              수정
            </button>
          </li>
        ))}
      </ul>
      {edit == true ? (
        <TodoEditForm
          setTodos={setTodos}
          item={selectedItem}
          writeWindowClose={writeWindowClose}
          edit={edit}
          setEdit={setEdit}
        />
      ) : null}
    </div>
  );
};

export default TodoList;
