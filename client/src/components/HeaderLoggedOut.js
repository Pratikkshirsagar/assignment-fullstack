import React, { useEffect, useState } from 'react';

function HeaderLoggedOut(props) {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const userData = await fetch('http://localhost:5000/api/v1/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const userDataJSON = await userData.json();
      if (userDataJSON.success === true) {
        console.log(userDataJSON);
        props.setUserdate(userDataJSON);
        props.setLoggedIn(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="name"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="name"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  );
}

export default HeaderLoggedOut;
