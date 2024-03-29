const INCREMENT = "icrement"; // define a constant for increment action types
const DECREMENT = "decrement"; // define a constant for decrement action types
let state = 0;
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state+1
    break
    case DECREMENT:
      return state-1
    break 
  }
}; // define the counter reducer which will increment or decrement the state based on the action it receives

const incAction =()=> { 
  return {
    type: INCREMENT
  }
}; // define an action creator for incrementing

const decAction = () =>{ 
  return {
    type: DECREMENT
  }
}; // define an action creator for decrementing

const store = Redux.createStore(counterReducer); // define the Redux store here, passing in your reducers

store.dispatch(incAction());

store.dispatch(decAction());