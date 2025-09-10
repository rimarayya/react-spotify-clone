import { Slider, Stack, Typography, IconButton } from '@mui/material';
import { MdReplay5, MdForward5 } from 'react-icons/md';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  const formatTime = (time) => `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{ width: { xs: 200, md: 500 }, color: 'white' }}
    >
      {/* Skip backward 10s */}
      <IconButton
        onClick={() => setSeekTime(appTime - 5)}
        sx={{
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
        }}
      >
        <MdReplay5 size={28} />
      </IconButton>

      {/* Current time */}
      <Typography variant="body2">
        {value === 0 ? '0:00' : formatTime(value)}
      </Typography>

      {/* MUI Slider */}
      <Slider
        value={value}
        min={min}
        max={max}
        step={0.01}
        onChange={(_, newValue) => onInput(newValue)}
        sx={{
          flexGrow: 1,
          color: '#fff',
          '& .MuiSlider-thumb': { backgroundColor: '#fff' },
          '& .MuiSlider-track': { backgroundColor: '#fff' },
          '& .MuiSlider-rail': { backgroundColor: 'rgba(255,255,255,0.3)' },
        }}
      />

      {/* Total duration */}
      <Typography variant="body2">
        {max === 0 ? '0:00' : formatTime(max)}
      </Typography>

      {/* Skip forward 5s */}
      <IconButton
        onClick={() => setSeekTime(appTime + 5)}
        sx={{
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
        }}
      >
        <MdForward5 size={28} />
      </IconButton>
    </Stack>
  );
};

export default Seekbar;
