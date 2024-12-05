import '@/app/ui/Styles/CSS/AccountPageComponent.css';
import { auth, signOut } from '@/auth';
import type { User } from '@/app/lib/definitions';
import { getUser } from '@/app/query/user';

export default async function AccountPage() {
  const session = await auth().then((session) => {return session?.user?.email});
  var userData: any;
  var user: User;
  if (session != null) {
    userData = await getUser(session);
    user = {
      id: '0',
      email: userData.email,
      password: '',
      name: userData.username,
      phoneNumber: userData.phonenumber
    };
  }
  else {
    user = {
      id: '',
      email: '',
      password: '',
      name: '',
      phoneNumber:''
    };
  }

  return (
    <div className="AccountPage">
      <div className="MainContainer" id="AccountMainContainer">
        <div id="account-wrapper">
          <h1>Account Settings</h1>
          <div id="account-tables">
            <div id="account-selections">
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button id="signout">Sign Out</button>
              </form>
            </div>
            <form id="account-data">
              <label>Username:</label>
              <input defaultValue={user.name} name="username" type="text"></input>
              <label>Password:</label>
              <input name="password" type="password"></input>
              <label>Email:</label>
              <input defaultValue={user.email} name="email" type="email"></input>
              <label>Phone Number:</label>
              <input defaultValue={user.phoneNumber} name="phone" type="tel"></input>
              <button type='submit'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
