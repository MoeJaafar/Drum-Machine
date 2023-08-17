import React from 'react';

const DrumPad = ({ id, keyTrigger, src, onClick }) => {
  const handleClick = () => {
    onClick(keyTrigger);
  };

  return (
    <div className="drum-pad" id={`drum-pad-${keyTrigger}`} onClick={handleClick}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={src}></audio>
    </div>
  );
};

export default DrumPad;
