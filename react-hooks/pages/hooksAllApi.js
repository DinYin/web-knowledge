/**
 * 必须要react和react-dom 16.8以上
 */

<<<<<<< HEAD
import React, {
  memo,
  createContext,
  forwardRef,

  useState,
  useEffect,
  useCallback,
  useContext,
  useRef,
  useImperativeHandle,

  useReducer,
  useMemo,
=======
import React, { memo, createContext, forwardRef,
  useState, useEffect, useCallback, useContext, useRef, useImperativeHandle
>>>>>>> a52e1fdf18adb5c0a1c1da6d388123ba485ea391
} from 'react'
import "./index.css";


const TestContext = createContext('default')

const Comp = memo((props) => {
  useEffect(() => {
    console.log('memo comp updated')
  })

  const updateValue = () => {
    props.onClick(props.name + ' + 1 ')
  }

  return <button onClick={updateValue}>button {props.name}</button>
})

// 只要context变化 子组件都重新渲染,用 useMemo 优化
// react.memo 不能优化，React.memo 默认情况下仅仅对传入的 props 做浅比较，如果是内部自身状态更新(useState, useContext等)，依然会重新渲染，在上面的例子中，useContext 返回的 state 一直在变化，导致就算被 memo 包裹的组件依然触发更新了

const ContextComp = forwardRef((props, ref) => {
  const [name] = useState('123')
  const { state, name: contextName, dispatch } = useContext(TestContext)
  console.log('state:', state)

  useEffect(() => {
    console.log('Ref context comp updated')
  })

  useImperativeHandle(ref, () => ({
    method() {
      console.log('method invoked')
    }
  }))

  return <p> {name}-{contextName} {state.count}
    <button onClick={() => dispatch({ type: 'addCount' })}> AddCount </button>

  </p>
})
const ContextCompT = () => {
  const { dispatch, state } = useContext(TestContext)
  console.log('stateNum:', state)
  useEffect(() => {
    console.log('stateNum context comp updated')
  })

  return <p>{state.num}
    <button onClick={() => dispatch({ type: 'addNum' })}> AddNum </button>
  </p>
}

const ContextCompThree = () => {
  const { dispatch, state } = useContext(TestContext)
  useEffect(() => {
    console.log('ContextCompThree context comp updated')
  })

  return useMemo(() => {
    console.log('ContextCompThree:', state)
    return <p>ContextCompThree:{state.num}
      <button onClick={() => dispatch({ type: 'addNum' })}> AddNum </button>
    </p>
  }, [state.num,dispatch])
}


function reducer(state, action) {
  switch (action.type) {
    case 'addCount': {
      return ({ ...state, count: state.count + 1 })
    }
    case 'addNum': {
      return ({ ...state, num: state.num + 10 })
    }
    default: return state
  }

}

export default function App() {
  const [name, setName] = useState('jokcy')
  const [compName, setCompName] = useState('compName')
  const [state, dispatch] = useReducer(reducer, { count: 1, num: 2 });
  const ref = useRef()

  useEffect(() => {
    console.log('component update')

    ref.current.method()

    // api.sub

    return () => {
      console.log('unbind')
    }
  }, []) // 去掉这个数组就会每次都调用

  const compCallback = useCallback((value) => {
    setCompName(value)
  }, [compName])
  // 演示没有`[compName]`每次Comp都会调用effect
  // const compCallback = (value) => {
  //   setCompName(value)
  // }
  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <Comp name={compName} onClick={compCallback} />
      <TestContext.Provider value={{ name, state, dispatch }}>
        <ContextComp ref={ref} />
        <ContextCompT />
        <ContextCompThree />
      </TestContext.Provider>
    </>
  )
}
