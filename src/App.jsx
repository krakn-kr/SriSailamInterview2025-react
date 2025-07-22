import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseReducerR from './08_Hooks_UseContext_UseReducer/useReducer/useReducerR'
import UseCallBackParent from './09_Hooks_UseCallBack_UseRef_UseMemo/UseCallBackParent'
import UseMemo from './09_Hooks_UseCallBack_UseRef_UseMemo/UseMemo'
import UseRef from './09_Hooks_UseCallBack_UseRef_UseMemo/UseRef'
import Tooltip from './09_Hooks_UseCallBack_UseRef_UseMemo/Tooltip'
import UseLayout from './09_Hooks_UseCallBack_UseRef_UseMemo/UseLayout'
function App() {
  const buttonRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      {/* <UseReducerR/> */}
      {/* <UseCallBackParent/> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
    {/* <div style={{ padding: "80px", textAlign: "center" }}>
      <button
        ref={buttonRef}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        style={{ fontSize: 16, padding: "10px 24px" }}
      >
        Hover me
      </button>
      <Tooltip targetRef={buttonRef} visible={showTooltip}>
        I'm a tooltip placed with <b>useLayoutEffect</b>!
      </Tooltip>
    </div> */}
    <UseLayout/>
    </>
  )
}

export default App
