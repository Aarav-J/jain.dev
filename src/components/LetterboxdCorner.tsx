import Letterboxd from './Letterboxd';
import { useMediaQuery } from 'usehooks-ts';

const LetterboxdCorner = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  
  if (!isLargeScreen) return null;
  
  return (
    <div className="fixed bottom-8 left-8 z-10">
      <Letterboxd />
    </div>
  );
};

export default LetterboxdCorner;
