import './HomePageComponent.scss';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';
import bgimage from '../../../bg.jpg';

function HomePage() {
    var scrollEffect = function (ev) {
      try {
        const image = document.querySelector('.HomeImageContainer img');
        const imageSection = document.querySelector('.HomeImageContainer');
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

      // Calculate the image section offset and its height
      const imageTop = imageSection.offsetTop;
      const imageHeight = imageSection.offsetHeight;
      
      // Determine the amount of scroll within the image section
      const scrollInImageSection = scrollPosition - imageTop + windowHeight;
      
      // Calculate scaling and width
      if (scrollInImageSection > 0 && scrollInImageSection <= windowHeight) {
        const scale = Math.min(1, scrollInImageSection / windowHeight);
        const width = 50 + scale * 50; // Scale from 50vw to 100vw
        image.style.width = `${width}vw`;
      } else if (scrollInImageSection > windowHeight) {
        image.style.width = `100vw`; // Ensure it stays at 100vw after scrolling past
      } else {
        image.style.width = `50vw`; // Revert to 50vw before reaching the section
      }
    } catch (Err) {
     
    }

  };
  document.addEventListener('scroll', scrollEffect);

  window.onunload = function() {
    console.log("about to clear event listeners prior to leaving page");
    document.removeEventListener('scroll', scrollEffect);
    return;
}


  return (
    <div className="HomePage">

      <div className="MainContainer" id="HomeMainContainer">
        <MenuBar id="homemenu"/>
        <div className="HomeImageContainer" id="homeImage">
          <img id="bgimage" src={bgimage} alt="bgImage"/>
        </div>
        <div id="homefooter">
          <h1 id="homefootertext">Wedding Day</h1>
          <h1 id="homefooterdate">Friday, February 14, 2025</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
