import AlbumSlider from './AlbumSlider';
import GroomAndBride from './GroomAndBride';
import Hero from './Hero';
import Introduction from './Introduction';
import OurStory from './OurStory';
import Rsvp from './Rsvp';
import type { ImageProps } from '../../utils/types';
import WeddingInfo from './WeddingInfo';

const LandingPage = ({images}: { images: ImageProps[] }) => {
  return (
    <>
      <Hero />
      <Introduction />
      <GroomAndBride />
      <OurStory />
      <WeddingInfo />
      <AlbumSlider slides={images} />
      <Rsvp />
    </>
  );
};

export default LandingPage;
  