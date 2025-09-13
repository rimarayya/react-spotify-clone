import React from 'react';
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs';
import Slider from '@mui/material/Slider';

const VolumeBar = ({
  value = 1,
  min = 0,
  max = 1,
  onChange = () => {},
  setVolume = () => {},
}) => {
  const getVolumeIcon = () => {
    if (value === 0) return <BsFillVolumeMuteFill />;
    if (value <= 0.5) return <BsVolumeDownFill />;
    return <BsFillVolumeUpFill />;
  };

  const handleIconClick = () => {
    setVolume(value === 0 ? 1 : 0);
  };

  return (
    <div className="hidden lg:flex flex-1 items-center justify-end gap-2">
      <button
        type="button"
        onClick={handleIconClick}
        className="text-white hover:text-gray-300 transition-colors"
        aria-label={value === 0 ? 'Unmute' : 'Mute'}
      >
        {React.cloneElement(getVolumeIcon(), { size: 25 })}
      </button>

      <Slider
        size="small"
        value={value}
        min={min}
        max={max}
        step={0.01}
        onChange={(_, newValue) => onChange({ target: { value: newValue } })}
        valueLabelDisplay="auto"
        sx={{
          width: 160,
          color: '#fff',
          '& .MuiSlider-thumb': {
            backgroundColor: '#fff',
          },
          '& .MuiSlider-track': {
            backgroundColor: '#fff',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'rgba(255,255,255,0.3)',
          },
        }}
      />
    </div>
  );
};

export default VolumeBar;
