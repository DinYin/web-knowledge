import React from "react";

/**
  onMouseOver和onMouseEnter是两个在编程中，特别是在JavaScript中，用于处理鼠标事件的不同事件。以下是它们之间的主要区别：

触发时机：

onMouseEnter：当鼠标指针进入元素的边界时触发。此事件只在鼠标从元素外部进入到元素内部时触发一次，不会因鼠标在元素内部移动而再次触发。
onMouseOver：当鼠标指针进入元素的边界或者从元素内的子元素移动到父元素时都会触发。事件在鼠标在元素内移动时会多次触发。

冒泡行为：

onMouseEnter：不会冒泡。如果鼠标指针进入了元素的子元素，不会触发父元素的onMouseEnter事件。
onMouseOver：会冒泡。如果鼠标指针进入了元素的子元素，会触发父元素的onMouseOver事件。

子元素影响：

onMouseEnter：不受子元素影响，只关注鼠标是否进入当前元素。
onMouseOver：会受子元素影响，即鼠标从子元素移入父元素时也会触发onMouseOver。

用途：

onMouseEnter：在需要追踪鼠标进入事件的时候，推荐使用onMouseEnter，它不会因为子元素的移动而触发多次，也可以减少不必要的性能消耗。
onMouseOver：在需要追踪鼠标在元素内部的移动时，可以使用onMouseOver。

Unity中的使用（不同于JavaScript，但作为额外信息）：

在Unity中，OnMouseEnter、OnMouseDown和OnMouseUp是用于处理鼠标事件的函数。其中，OnMouseEnter是在鼠标进入该对象的区域时执行的函数。
 */
export default function HooksOne() {


    return (
        <div style={{ width: 200, height: 200, background: 'red' }}
            onMouseEnter={() => console.log('onMouseEnter')}
            onMouseOver={() => console.log('onMouseOver')}
            onMouseOut={() => console.log('onMouseOut')}
        >

            鼠标移入试试
            <div style={{ width: 100, height: 100, background: 'blue' }}>
                子元素

            </div>

        </div>
    );
}
