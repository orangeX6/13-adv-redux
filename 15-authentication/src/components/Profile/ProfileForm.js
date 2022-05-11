import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);
  const idToken = authCtx.token;

  const submitHandler = (e) => {
    e.preventDefault();

    const newPassword = newPasswordInputRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`,
      {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify({
          idToken,
          password: newPassword,
          returnSecureToken: false,
        }),
      }
    )
      .then((res) => {
        if (!res.ok)
          throw new Error(
            'Invalid Password. Please should have at least 7 characters'
          );
        history.replace('/');
        return res.json();
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
