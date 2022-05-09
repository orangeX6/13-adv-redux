/*

----------------------------------------------------------------
# Where should the code go ? 
-> Synchronous, side-effect free code(i.e data transformations)
>> Prefer reducers 
>> avoid action creators or components

-> Async code or code with side effects 
>> Prefer action creators or components
>> Never use reducers

*/
