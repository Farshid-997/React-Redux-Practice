# Getting Started with Create React App -practising redux

=> Redux is used as a sate management system.

=> There are 3 things in redux- Store,Action and reducer.
=> we can use reducer in vanilla js,angular and react
-> here we use use redux with reactjs.

# Store

1. We can store our state in the State
2. Maintain our application state in a single object which would be manage by the redux store.
3. Allow your state store in a single object.
4. for entire application we have only one state.
5. we can access current state via getState().
6. allow state to be updated via dispatch(action)
7. register listener via subscribe method .it accept function as its parameter.
8. handle unregistering the listerner via the function returned by subscribe(listener).

# Action

1.  Our application can't change the state directly,the only way to change state is to emit an action
    or dispatch an action

    For example, In a cake shop we are not allowed to take cake, rather ask the shopkeeper to give that

    1.It is simple object where we define type property of an action .

    2. the type property is typically defined as string constants.
    3. it is a plain js object.
       4.besides 'type' property we can write any property name in action object.

    4. we can define our action object in a function and it will called action creator funtion the name of the function can be anything.

    {
    type:BUY_CAKE
    }
    --> so seeing this type the reducer handle this action an upate the current state.

    --> so action can only interact with the store
    --> carry some info from your app to the redux store.

# Reducers

1. specify how the apps state changes in response to actions sent to the store.

function that accept state and action as arguments and returns the next state of the application

(previousState,action)=>newState.

2.In reducer we define initial sate and we pass the intial state as the default value of arguments of a function
3.then we have action and it comes from action 4. at first we copy all the state because in initial state object we have other object property rather than "type" property so
copy and it remain unchanged.

5. then we use switch case and from this switch case we take relevant action.

6. we can have multiple reducers and for that we need multiple initial state to define, we can do it with one reducer but in the long run when have larger projects it is difficult to manage.

7. but there is a catch that we have put single reducer in store but if have two reducer how we supposed to put it? so we can solve this by combinedReducer function.
8. in combined reducer function we have put object as a parameter and we have a key and value. the value is the action creator .
9. and we call combinedReducer to rootReducer.

# Middleware

1. Provides a third party extension point between dispatching an action and the moments it reaches the reducer.

2. We can add Extra freatures with middleware. basically middleware is used for it.

3. use middleware for logging,crash reporting, performing async task etc.

4. we can use thunk middleware for using async approach like api calls to show data in UI.

# MapStateToProps

1. It is basically used to use state from redux to react client side
2. take state as an argument
3. return an object and it is a state
4. use props to pass data to the react client

# MapDispatchToProps

1.It is basically dispatch an action from redux to react client side
2.take dispatch as an argument.
3.return an object and it is a dispatch function.
4.use props to pass data to the react client.

# Connect

1. This method is connecting redux with react and we pass MapStateToProps and MapDispatchToProps as argument

# useSelector Hooks

1. It is basicaaly simmilar to the MapStateToProps
2. we don't need to pass props if we use this.
3. return a value and it is going to be a state. but useselector can return any value but MapStateToProps return an object.

4. https://react-redux.js.org/api/hooks#:~:text=React's%20new%20%22hooks%22%20APIs%20give,of%20React's%20built%2Din%20hooks.

# useDispatch

1. useDispatch hooks returns a refrence to the dispatch function from the redux store.
2. for example, const dispatch= useDispatch().
3. Now we can pass this any eventListener and pass the action creator in it.

# Async Action

1. When you try to fetch data from api endpoint 3 things will happen, first loading will be false, second an empty where we can store our fetched data,
   then if any error will come it will show us initialy it will empty string.

2. We can use Redux thunk to fetch api data easily and in action creator we can return a function who has an argument called dispatch
3. In react UI we can show them by using mapStateToProps and mapDispatchToProps and pass them as an argument of connect function.
4. Also we can pass the function as a props in our react client side. We can call that action creator function in useEffect.
