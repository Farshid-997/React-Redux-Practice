# Getting Started with Create React App -practising redux

=> Redux is used sate management

=> There are 3 things in redux- Store,Action and reducer

# Store

1. We can store our state in the State
2. Maintain our application state in a single object which would be manage by the redux store.
3. Allow your state store in a single object.

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
