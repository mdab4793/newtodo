import { useState } from "react";
import styles from "../src/Main.module.css";
import TodoWrite from "./components/TodoWrite";
import TodoUpdate from "./components/TodoUpdate";
import { Link } from "react-router-dom";
const Main = () => {
  const [nextId, setNextID] = useState(4);
  const [todos, setTodos] = useState([
    { id: 1, text: "통장사본", checked: false },
    { id: 2, text: "헤드폰가져가기", checked: true },
    { id: 3, text: "보조배터리가져가기", checked: false },
  ]);
  const [post, setPost] = useState("");
  const [del, setDel] = useState(false);
  // const [color, setColor] = useState("black");
  const [write, setWrite] = useState(false);
  const [edit, setEdit] = useState(false);

  const delHandler = () => {
    setDel(true);
  };
  const delClose = () => {
    setDel(false);
  };
  // const colorChange = () => {
  //   setColor(color === "brown" ? "black" : "brown");
  // };

  return (
    <div>
      <h2 className={styles.title}>Todo List</h2>
      {todos.map((a, i) => {
        return (
          <main className={styles.container} key={i}>
            <p
              className={styles.content}
              onClick={() => {
                // colorChange();
              }}
              // style={{ color: color }}
            >
              {todos[i].text}
            </p>
            <button
              onClick={() => {
                setEdit(!edit);
              }}
            >
              수정하기
            </button>{" "}
            <button
              onClick={() => {
                let copy = [...todos];
                copy.splice(i, 1);
                setTodos(copy);
                delClose();
              }}
            >
              삭제
            </button>
          </main>
        );
      })}{" "}
      {edit == true ? (
        <TodoUpdate
          todos={todos}
          post={post}
          setPost={setPost}
          setTodos={setTodos}
        />
      ) : null}
      <button
        onClick={() => {
          setWrite(!write);
        }}
      >
        글쓰기입력창
      </button>
      {write == true ? (
        <TodoWrite
          todos={todos}
          post={post}
          setPost={setPost}
          setTodos={setTodos}
        />
      ) : null}
    </div>
  );
};

// const DelModal = ({ i, todo, delClose, setTodo }) => {
//   return (
//     <div className={styles.modalContainer}>
//       <section className={styles.modalBox}>
//         <h4>정말 삭제하시겠습니까?</h4>
//         <button>삭제하기</button>
//         <button
//           onClick={() => {
//             delClose();
//           }}
//         >
//           닫기
//         </button>
//       </section>
//     </div>
//   );
// };
export default Main;
