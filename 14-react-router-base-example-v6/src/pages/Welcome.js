// import { Route, Routes } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* We can also define the below outside as well */}
      {/* <Routes>
        <Route path="new-user" element={<p>Welcome, new user!</p>} />
      </Routes> */}
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
