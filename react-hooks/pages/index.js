import React, { useEffect } from 'react';
import Hooks from './hooks';
import HooksTwo from './hooksTwo';
import Class from './class';
import HooksAllApi from './hooksAllApi';
import UseLayoutEffect from './useLayoutEffect';

import './index.css';

export default function() {
  useEffect(()=>{
    var root = document.getElementById('rootDiv');
    // 如果你还希望在冒泡阶段处理事件，可以再添加一个处理程序
    root.addEventListener('click', function(event) {
        console.log('冒泡阶段的点击事件：', event);
    }, false); // 默认是false，或在省略时


    // 添加点击事件的捕获处理程序
    root.addEventListener('click', function(event) {
        console.log('捕获阶段的点击事件：', event);
    }, true); // 注意这里的第三个参数是true
  },[])
  return (
    <div id='rootDiv'>
      <h1>class Component VS function Component</h1>
      <Class />
      <Hooks />
      <HooksTwo />
       <HooksAllApi />
       <UseLayoutEffect /> 
      <button  onClick={()=>console.log('react 合成事件')}>dianji</button>
    </div>
  );
}
