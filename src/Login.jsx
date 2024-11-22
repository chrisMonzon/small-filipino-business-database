<<<<<<< HEAD
function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}

export default Login;
=======
import './Login.css'
function Login() {
  return (
    <div className='square'>
      <h1 className='login-text'>
        Login
        <br />
        <img className='Login_logo' src="https://www.psauiuc.org/wp-content/uploads/2024/09/Logo-no-words-no-circle-300x300.png"></img>
      </h1>
      <h2 className='username'>
        Username
        <br />
        <input type="text" id="Username"
      name="Username"></input>
      </h2>
      <h2 className='password'>
        Password
        <br />
        <input type="text" id="Password"
      name="Password"></input>
      </h2>
    </div>
  );
}

export default Login;

>>>>>>> b81d6c17a139db0f5ce04c4b1ea768e0d1b3a9a5
