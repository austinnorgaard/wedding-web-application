import '@/app/ui/Styles/CSS/StoryPageComponent.css';
import StoryBoard from '@/app/ui/Utilities/storyboard';

export default async function StoryPage() {
  return (
    <div className="StoryPage">
      <div className="MainContainer" id="StoryMainContainer">
        <StoryBoard />
      </div>
    </div>
  );
}