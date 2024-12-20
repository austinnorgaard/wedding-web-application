'use client';

import '@/app/ui/Styles/CSS/TopOfPage.css';

export default function TopOfPage() {
  return (
    <div className="TopOfPage">
      <div className="MainContainer" id="TopOfPageMainContainer">
        <button id="toTop" className={"w-[100px] md:w-[150px] md:h-[50px] rounded-xl fixed z-50 right-6 bottom-10"} onClick={() => window.scrollTo(0, 0)}>
            Scroll to Top ^
        </button>
      </div>
    </div>
  );
}
