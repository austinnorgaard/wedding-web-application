import Link from 'next/link';
import '@/app/ui/Styles/CSS/RegistrationPageComponent.css';

export default async function RegistrationPage() {

  return (
    <div className="RegistrationPage">
      <div className="MainContainer" id="RegistrationMainContainer">
        <div className="registration-wrapper">
          {/* isExisting &&
            <label>
              <p id="badRegister">User Already Exists! Need Help? Contact Austin or Jess :)</p>
            </label>
          }
          {isMissing &&
            <label>
              <p id="badRegister">Please Enter All Fields! Need Help? Contact Austin or Jess :)</p>
            </label>
          */}
          <h1>Sign Up:</h1>
          <form id="registrationForm">
            <label>
              <p>Email</p>
              <input type="email" name="email"/>
            </label>
            <label>
              <p>Username</p>
              <input type="text" name="username"/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" name="password" autoComplete="new-password"/>
            </label>
            <label>
              <p>Phone Number (optional)</p>
              <input type="phone" name="phone"/>
            </label>
            <div id="buttonArea">
              <button type="submit">Submit</button>
              <Link href="/login" id="loginInstead">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}