import React, { useState, useEffect } from 'react';
import './App.css';
import DrumPad from './components/DrumPad';

const drumPadData = [
  { id: 'Q', keyTrigger: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { id: 'W', keyTrigger: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { id: 'E', keyTrigger: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { id: 'A', keyTrigger: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { id: 'S', keyTrigger: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { id: 'D', keyTrigger: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { id: 'Z', keyTrigger: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { id: 'X', keyTrigger: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { id: 'C', keyTrigger: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];
const App = () => {
  const [displayText, setDisplayText] = useState('');

  const handlePadClick = (keyTrigger) => {
    const audio = document.getElementById(keyTrigger);
    audio.currentTime = 0;
    audio.play();
    setDisplayText(keyTrigger);
  };

  const handleKeyPress = (e) => {
    const keyTrigger = e.key.toUpperCase();
    const drumPad = drumPadData.find((pad) => pad.keyTrigger === keyTrigger);
    if (drumPad) {
      handlePadClick(keyTrigger);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div className="drum-pads">
        {drumPadData.map((pad) => (
          <DrumPad
            key={pad.id}
            id={pad.id}
            keyTrigger={pad.keyTrigger}
            src={pad.src}
            onClick={handlePadClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;