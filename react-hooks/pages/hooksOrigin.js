
function useState(initState) {
    let currentHook = workInProgressHook.next ? workInProgressHook.next : {memoizedState: initState, next: null};
    console.log('enter');
    console.log('currentHook:', JSON.stringify(currentHook));
    console.log('workInProgressHook:', JSON.stringify(workInProgressHook));console.log('firstWorkInProgressHook:', JSON.stringify(firstWorkInProgressHook));
    function setState(newState) {
        currentHook.memoizedState = newState;
        console.log('set before');
        console.log('currentHook:', JSON.stringify(currentHook));console.log('workInProgressHook:', JSON.stringify(workInProgressHook));console.log('firstWorkInProgressHook:', JSON.stringify(firstWorkInProgressHook));
        render();
    }
    // 这就是为什么 useState 书写顺序很重要的原因
    // 假如某个 useState 没有执行，会导致指针移动出错，数据存取出错
    if (workInProgressHook.next) {
        console.log('next');
        console.log('currentHook:', JSON.stringify(currentHook));console.log('workInProgressHook:', JSON.stringify(workInProgressHook));console.log('firstWorkInProgressHook:', JSON.stringify(firstWorkInProgressHook));
        // 这里只有组件刷新的时候，才会进入
        // 根据书写顺序来取对应的值
        // console.log(workInProgressHook);
        workInProgressHook = workInProgressHook.next;
    } else {
        console.log('init');
        console.log('currentHook:', JSON.stringify(currentHook));console.log('workInProgressHook:', JSON.stringify(workInProgressHook));console.log('firstWorkInProgressHook:', JSON.stringify(firstWorkInProgressHook));
        // 只有在组件初始化加载时，才会进入
        // 根据书写顺序，存储对应的数据
        // 将 firstWorkInProgressHook 变成一个链表结构
        workInProgressHook.next = currentHook;
        console.log('将 firstWorkInProgressHook 变成一个链表结构')
        console.log('currentHook:', JSON.stringify(currentHook));console.log('workInProgressHook:', JSON.stringify(workInProgressHook));console.log('firstWorkInProgressHook:', JSON.stringify(firstWorkInProgressHook));

        // 将 workInProgressHook 指向 {memoizedState: initState, next: null}
        workInProgressHook = currentHook;
        // console.log(firstWorkInProgressHook);
    }
    console.log('end');
    console.log('currentHook:', JSON.stringify(currentHook));console.log('workInProgressHook:', JSON.stringify(workInProgressHook));console.log('firstWorkInProgressHook:', JSON.stringify(firstWorkInProgressHook));
    return [currentHook.memoizedState, setState];

}

function Counter() {
    // 每次组件重新渲染的时候，这里的 useState 都会重新执行
    const [name, setName] = useState('计数器');
    const [number, setNumber] = useState(0);
    window.setName=setName;
    window.setNumber=setNumber;
    console.log('name:', name);console.log('number:', number);
}

function render() {
    // 每次重新渲染的时候，都将 workInProgressHook 指向 firstWorkInProgressHook
    workInProgressHook = firstWorkInProgressHook;
    console.log('render');
    console.log('workInProgressHook:', JSON.stringify(workInProgressHook));
    console.log('firstWorkInProgressHook:', JSON.stringify(firstWorkInProgressHook));
    Counter();
}

var firstWorkInProgressHook = {memoizedState: null, next: null};
var workInProgressHook;

// render(); 



// setName('AWDW');
// setNumber(22);

