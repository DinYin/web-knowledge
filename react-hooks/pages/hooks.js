import React, { useState, useEffect } from "react";
import styles from "./index.css";

function HooksOne() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
	  // 类似于componentDidMount 和 componentDidUpdate:
	useEffect(() => {
    setTimeout(()=>{
      console.log('1:',count)
    },5000)
    return ()=>{
      console.log('1:return')
    }
  },[count]);
  useEffect(()=>{
    console.log('2:')
    return ()=>{
      console.log('2:return')
    }
  },[count2])

  return (
    <div className={styles.hooksDome}>
      <h1>Hooks Dome</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(c=>c+1)}>Click me</button>
      <button onClick={() => {
        setCount(count + 1)
        setCount2(count2 + 1)
      }}>Click me</button>
    </div>
  );
}
export default HooksOne;
