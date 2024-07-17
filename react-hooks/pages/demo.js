import React, { useState, useEffect } from "react";

function HooksOne() {

  useEffect(() => {
    p1()
  },[]);
  const p1 = async() => {
    console.time('aa')
    const delF = await delay(2000)
    console.timeEnd('aa')
    console.log('delF:',delF)
  }
  // delay  return  在delay时间结束以后返回这个promise 的结果
  // delay 函数的实现
  const delay = (time) => {
    return new Promise((resolve) => {
      setTimeout(()=>{
        resolve(8)
      },time)
    })
  }


  return (
    <div>

    </div>
  );
}
export default HooksOne;
