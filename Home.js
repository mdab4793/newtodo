import { useState, useEffect } from "react";
import "./Home.css";
const Home = () => {
  const [todos, setTodos] = useState(["할일1", "할일2", "할일3", "할일4"]);
  const [post, setPost] = useState("");
  const [postDelete, setPostDelete] = useState(false);
  const [writePopup, setWritePopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [editValue, setEditValue] = useState(todos[1].text);
  return (
    <body>
      <div className="container">
        <h1 className="header">Todo List</h1>
        <button
          className="todo-write"
          onClick={() => {
            setWritePopup(!writePopup);
          }}
        >
          글쓰기
        </button>{" "}
        {todos.map((a, i) => {
          return (
            <main key={i}>
              <p>{todos[i]}</p>
              <button
                className="todo-delete"
                onClick={() => {
                  if (window.confirm("정말 삭제합니까?")) {
                    let copy = [...todos];
                    copy.splice(i, 0);
                    setTodos(copy);
                    alert("삭제되었습니다.");
                  } else {
                    alert("취소합니다.");
                  }
                }}
              >
                휴지통
              </button>
              <button
                onClick={() => {
                  setEditPopup(!editPopup);
                }}
              >
                수정
              </button>
            </main>
          );
        })}
        {editPopup == true ? (
          <TodoWEditPopup
            todos={todos}
            setEditPopup={setEditPopup}
            editPopup={editPopup}
            post={post}
            setTodos={setTodos}
            setPost={setPost}
            editValue={editValue}
          />
        ) : null}
        {writePopup == true ? (
          <TodoWritePopup
            setWritePopup={setWritePopup}
            writePopup={writePopup}
            post={post}
            setTodos={setTodos}
            todos={todos}
            setPost={setPost}
          />
        ) : null}
      </div>
    </body>
  );
};

const TodoWritePopup = (props) => {
  return (
    <body>
      <div className="write-popup-background">
        <div className="write-popup-head">
          <h4>할일을 입력하세요.</h4>
          <button
            onClick={() => {
              props.setWritePopup(!props.writePopup);
            }}
          >
            X
          </button>
        </div>
        <input
          className="write-popup-input"
          type="text"
          onChange={(e) => {
            props.setPost(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (window.confirm("작성하시겠습니까?")) {
              let copy = [...props.todos];
              copy.unshift(props.post);
              props.setTodos(copy);
              alert("작성되었습니다.");
            } else {
              alert("취소합니다.");
            }
          }}
        >
          글쓰기
        </button>
      </div>
    </body>
  );
};
const TodoWEditPopup = (props) => {
  const [text, setText] = useState(props.todos[1]);

  return (
    <body>
      <div className="write-popup-background">
        <div className="write-popup-head">
          <h4>수정해주세요.</h4>
          <button
            onClick={() => {
              props.setEditPopup(!props.editPopup);
            }}
          >
            X
          </button>
        </div>
        <input
          className="write-popup-input"
          type="text"
          value={text}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let copy = [...props.todos];
            copy.slice(1, 0, "할일없음");
            props.setTodos(copy);
          }}
        >
          수정하기
        </button>
      </div>
    </body>
  );
};
export default Home;
