import { useState, useEffect } from "react";
import styles from "./index.css";

function Example() {
  const [count, setCount] = useState(0);
	console.log('useState(0):', count, setCount)
	  // 类似于componentDidMount 和 componentDidUpdate:
	useEffect(() => {
		// 更新文档的标题
		document.title = `clicked ${count} times`;
	});
  return (
    <div className={styles.hooksDome}>
      <h1>Hooks Dome</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Example;
