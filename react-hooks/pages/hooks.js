import React, { useState, useEffect } from "react";
import styles from "./index.css";

function HooksOne() {
  const [count, setCount] = useState(0);
	  // 类似于componentDidMount 和 componentDidUpdate:
	useEffect(() => {
    alert(`hooks ${count} `)
  });

  return (
    <div className={styles.hooksDome}>
      <h1>Hooks Dome</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default HooksOne;
