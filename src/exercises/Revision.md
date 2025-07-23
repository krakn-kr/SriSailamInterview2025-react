# useCallBack:
1. useCallBack is used to avoid child component re-rendering by callBack call from child to parent.
2. Child component will re-render when parent componet state update since callBack reference always changes.

# useReducer:
1. *syntax*: useReducer(callbackFuntion,intialState); 
    - callBackFunction = (state,action)=>{}
2. To manage complex state should use useReducer
3. useReducer will return an array of containing state and dispatch callback function

# useContext:
1. used to avoid propdrilling

# useMemo:
1. used to perform expensive calculation only when certain dependent values will change

# useRef:
1. used to accessing and iinteracting with DOM elements
2. useRef persists across *renders* does not trigger re-renders when it changes

# useLayoutEffect:
1. The useLayoutEffect hook in React should be used when you need to perform actions that involve   manipulating the layout of the DOM based on side effects, such as data fetching.
2. In other words, you want the layout changes to be reflected before the browser paints the updated UI
