import LoginForm from '@/app/ui/login-form';
import '@/app/ui/Styles/CSS/LoginPageComponent.css'

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="MainContainer" id="LoginMainContainer">
        <div className="login-wrapper">
          <h1 className='mb-[3%]'>Please Log In</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}