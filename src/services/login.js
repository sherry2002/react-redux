import { useDispatch } from 'react-redux';
import { useState } from "react";
import { setUser } from '../redux/action';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      console.log('login')
      const user = {
        email:email,
        password:password
      }
       await axios.post('http://localhost:8000/api/auth/login', user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        dispatch(setUser(res.data));
      } )


      // var myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");

      // var raw = JSON.stringify({
      //   email: email,
      //   password: password,
      // },
      // );

      // var requestOptions = {
      //   method: 'POST',
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: 'follow'
      // };

      // let user = await fetch("http://localhost:8000/api/auth/login", requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));
      // dispatch(setUser({ payload: user }))

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form className="loginBox1" onSubmit={handleClick}>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          className="loginInput"
          onChange={event => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="loginInput"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
          minLength="5"
        />
        <br />
        <button className="loginButton" >
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;
