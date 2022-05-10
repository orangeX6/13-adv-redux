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


# HighLighting active link ? 
>> NavLink takes an activeClassName proc and we can define a css className here which should be added to the link when its active
>> <NavLink/>

-> <Switch> </Switch> component
>> Wrapping Routes in switch makes it so that only one component will be active at a time

# React Router Hooks 
-> useParams
-> useHistory - allows us to change the history. 
-> useLocation 
-> useRouteMatch 

#useHistory
? what changes the history?
>> If we add a new page and if we go to a new page, we navigate around with the push method to the new page, which pushes the new page on the stack of pages, so a new page on our history of pages,  
!or we can navigate with a replace method that replaces the current page.
->The difference is that with push,we can go back with the back button to the page we're coming from, with replace we can't.


-> history.push() vs history.replace()
?? If you want the user to be able to use the browser's back button come back to the current webpage;  use push(). 
-------------------------------
?? If you don't want the user to be able to use the browser's back button come back to the current webpage;  use replace(). Because the current webpage won't be in the browser's history stack.

-> Prompt Component
>> prompt takes two props 
>> 1 when - returns true or false to find whether this form should be shown when the user tries to change URL


#useLocation
-> useLocation gives us access to a location object which has information about the currently loaded URL. 

#useRouteMatch 
-> useRouteMatch provides information about the location

const match = useRouteMatch();
console.log(match);
----------------
outputs ----> 
----------------
{path: '/quotes/:quoteId', url: '/quotes/q2', isExact: false, params: {…}}
isExact: false
params:
quoteId: "q2"
[[Prototype]]: Object
path: "/quotes/:quoteId"
url: "/quotes/q2"


-> With React router history.push and Link can take an object or a string
>>EXAMPLE

>> history.push
  // -> OBJECT EXAMPLE
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
    });
    //-> STRING EXAMPLE
    // history.push(
    //   `${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`
    // );
  };

>> Link
  <li>
    <NavLink
      to={{ pathname: '/quotes' }}
      activeClassName={classes.active}
    >
      All Quotes
    </NavLink>
  </li>
  <li>
    <NavLink to="/new-quote" activeClassName={classes.active}>
      Add a Quote
    </NavLink>
  </li>      
*/
