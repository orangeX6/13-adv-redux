/*

----------------------------------------------------------------
# Where should the code go ? 
-> Synchronous, side-effect free code(i.e data transformations)
>> Prefer reducers 
>> avoid action creators or components

-> Async code or code with side effects 
>> Prefer action creators or components
>> Never use reducers


# REDUX THUNK 
-> What is a thunk? 
>> A function that delays an action until later 
>> An action creator function that does NOT return the action itself but another function which eventually returns the action

>> When using redux with redux toolkit, it does not just accept action objects with a type property, instead it also accepts action creators that return functions

*/
