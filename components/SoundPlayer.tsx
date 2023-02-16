import { useState } from 'react';
import useSound from 'use-sound';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

const SoundPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, exposedData] = useSound('/backgroundMusic.mp3');
  const handleClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) exposedData.pause();
    else play();
  };
   
  return (
    <div className="fixed rounded-full bg-[#ee9492] text-white bottom-0 left-0 w-10 h-10 p-2 mb-5 ml-5 text-center">
      <button onClick={handleClick} aria-label="speaker">
        {isPlaying ? <SpeakerWaveIcon className="w-5 h-5" /> : <SpeakerXMarkIcon className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default SoundPlayer;
