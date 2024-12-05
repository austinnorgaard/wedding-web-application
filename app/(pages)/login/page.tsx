import Link from 'next/link';
import '@/app/ui/Styles/CSS/LoginPageComponent.css';

export default async function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="MainContainer" id="LoginMainContainer">
        <div className="login-wrapper">
          {/* isBadLogin &&
            <label>
              <p id="badLogin">Incorrect Login!</p>
            </label>
          */}
          <h1>Please Log In</h1>
          <form id="loginForm">
            <label>
              <p>Username</p>
              <input type="text" name="username"/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" name="password"/>
            </label>
            <div id="buttonArea">
              <button type="submit">Submit</button>
              <Link href="/register" id="registerInstead">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}