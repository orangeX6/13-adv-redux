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


 #React Router DOM v5 vs v6 (Refer to 291. upgrading to React Router v6 for rest)
 
 -> 1. SWITCH - Switch doesn't exist in v6. We instead use Routes
 -> 2. We use -  
 #   <Route path="/products" element={<Products />} />
 -> instead of passing the component as a prop
 -> 3. EXACT PROP - With React Router version 5, we needed to add exact here because without exact, this would match if a path started with /products. With version 6, this behavior is gone and hence, the exact prop is gone.
 -> 4. We can add * after path to get the behavior which was present without adding exact
 >>  path='/welcome/*'
 -> 5. React router uses a better algorithm and order of paths doesn't matter anymore
 -> 6. activeClassName prop is removed from <NavLink>. You have to manually find out whether link is active or not
 This can be done by - 
  <li>
    <NavLink
      className={(navData) => (navData.isActive ? classes.active : '')}
      to="/welcome"
    >
      Welcome
    </NavLink>
  </li>
 ? navData argument is provided by React Router to the function, when the function is executed. The function is executed by react-router when it evaluates navLink and whenever your navigation changes.
 -> 7. Redirect is gone. use Navigate instead
>> EG - <Route path="/" element={<Navigate replace to="/welcome" />} />
-> replace prop specifies that we need to replace the page
-> 8. It is mandatory to wrap Route with Routes
-> 9. Instead of defining the routes in the component where you want to load the nested route content, you can define them in main route definition file as well. For this we can use opening and closing route component tags and put our nested routes between those opening and closing tags as children. With this we can have all route definitions in one place
>> EXAMPLE - 
  <Route path="/welcome/*" element={<Welcome />}>
    <Route path="new-user" element={<p>Welcome, new user!</p>} />
  </Route> 
  
  >>Now, if you use this pattern though, you have to tell React Router where this nested content should be inserted into the DOM because it was clear when we had the route definition in the nested component, now that we have the route definition in App.js, it's not clear where exactly in Welcome.js this paragraph should be added.
  -> 10 - To let React Router know where that nested content should be inserted, there is another new component, which you can import from react-router-dom. And that's the Outlet component
      <Outlet />
  >> This simply is a placeholder telling React Router where nested route content should be inserted
  ->11. useHistory doesn't exist. useNavigate is alternative
  -> <Prompt> doesn't exist and theres no alternative. You will have to make your own logic. Will probably come back later
--------------------------------------------------------------------
 >>> In addition to these changes, it's also worth noting that there were some internal changes with React Router version 6. Specifically, the internal logic for evaluating these paths and then picking a route to load changed.
 

 # React transition group 
  Transition 
  <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>

  CSSTransition 
   <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClose',
        // appear:
        // appearActive:
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition> 

      <CSSTransition key={index} classNames="fade" timeout={300}>
        <li className="ListItem" onClick={() => this.removeItemHandler(index)}>
          {item}
        </li>
      </CSSTransition>

  TransitionGroup
   <TransitionGroup component="ul" className="List">
          {listItems}
   </TransitionGroup>


 ? Alternatives - react-motion, react-move(inspired by d3 js transitions), react-router-transition (animations between different routes)
*/
