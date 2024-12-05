import '@/app/ui/Styles/CSS/FAQPageComponent.css';
import { Suspense } from 'react';
import FAQList from '@/app/ui/Utilities/faqlist'
import Loading from './Loading';

export default async function FAQPage() {

  return (
    <Suspense>
      <div className="FAQPage">
        <div className="MainContainer" id="FAQMainContainer">
          <Suspense fallback={<Loading/>}>
            <FAQList />
          </Suspense>
        </div>
      </div>
    </Suspense>
  );
}