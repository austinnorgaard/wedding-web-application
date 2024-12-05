import Link from 'next/link';
import '@/app/ui/Styles/CSS/AccountPageComponent.css';

export default async function AccountPage() {
  return (
    <div className="AccountPage">
      <div className="MainContainer" id="AccountMainContainer">
        <div id="account-wrapper">
          <h1>Account Settings</h1>
          <div id="account-tables">
            <div id="account-selections">
              <Link href="/login" id="signout">Sign Out</Link>
            </div>
            <form id="account-data">
              <label>Username:</label>
              <input name="username" type="text"></input>
              <label>Password:</label>
              <input value="" name="password" type="password"></input>
              <label>Email:</label>
              <input name="email" type="email"></input>
              <label>Phone Number:</label>
              <input name="phone" type="tel"></input>
              <button type='submit'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
