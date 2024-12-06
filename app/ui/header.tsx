import '@/app/ui/Styles/CSS/HeaderComponent.css'
import leaves from '@/app/ui/Resources/Photos/bgleaves.png';
import logo from '@/app/ui/Resources/Photos/logo.png';
import Image from 'next/image';
import Link from 'next/link';

var saveTheDate = new Date(Date.UTC(2025, 1, 14, 19))
var today = new Date (Date.now())

var countdownDate = ((saveTheDate.valueOf()/1000) / 86400) - (((today.valueOf())/1000) / 86400);

export default function Header() {

  return (
    <div className="Header">
      <div className="MainContainer" id="HeaderMainContainer">
        <Image id="bgleaves" src={leaves} alt="bgleaves"/>
        <Link href="/" className="HeaderText" id="mobileText">
          <p id="headernames">Austin &amp; Jessica</p>
        </Link>
        <Link href="/" id="bglogoLink"><Image id="bgLogo" src={logo} alt="bgLogo"/></Link>
        <div className='HeaderText' id="desktopText">
          <h1 id="headernames">Austin &amp; Jessica</h1>
          <div id="headersavethedate">Friday, February 14, 2025</div>
          <div id="countdown">{countdownDate.toFixed(0)} Days To Go!</div>
        </div>
      </div>
    </div>
  );
}
