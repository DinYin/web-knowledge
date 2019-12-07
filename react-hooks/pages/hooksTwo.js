import { useState, useEffect } from "react";
import styles from "./index.css";

let firstRender = true;

function HooksTwo() {
  const [count, setCount] = useState(0);
//   if(firstRender){
    const [fruit, setFruit] = useState('banana');
    firstRender = false;
//   }
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  return (
    <div className={styles.classDome}>
      <h1>Hooks：多个状态</h1>
      <p>You clicked {count} times</p>
      {/* <p>水果：{fruit} </p> */}
      <p>todos：{todos[0].text} </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default HooksTwo;