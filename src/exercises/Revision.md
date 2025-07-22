# useCallBack:
1. useCallBack is used to avoid child component re-rendering by callBack call from child to parent.
2. Child component will re-render when parent componet state update since callBack reference always changes.

# useReducer:
1. *syntax*: useReducer(callbackFuntion,intialState); 
    - callBackFunction = (state,action)=>{}
2. To manage complex state should use useReducer
3. useReducer will return an array of containing state and dispatch callback function