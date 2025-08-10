import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { IconButton, Tooltip, Stack } from "@mui/material";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => {
  const hasSongs = currentSongs?.tracks?.data?.length > 0;

  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      justifyContent="center"
      sx={{ width: { xs: "100%", md: 400 } }}
    >
      <Tooltip title="Repeat">
        <IconButton
          onClick={() => setRepeat((prev) => !prev)}
          sx={{
            color: repeat ? "red" : "white",
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "red",
            },
            display: { xs: "none", sm: "inline-flex" },
          }}
          aria-label="Repeat"
        >
          <BsArrowRepeat size={20} />
        </IconButton>
      </Tooltip>

      {hasSongs && (
        <Tooltip title="Previous">
          <IconButton
            onClick={handlePrevSong}
            sx={{
              color: "white",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
            aria-label="Previous"
          >
            <MdSkipPrevious size={30} />
          </IconButton>
        </Tooltip>
      )}

      <Tooltip title={isPlaying ? "Pause" : "Play"}>
        <IconButton
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.6)" },
            width: 55,
            height: 55,
          }}
        >
          {isPlaying ? (
            <BsFillPauseFill size={35} />
          ) : (
            <BsFillPlayFill size={35} />
          )}
        </IconButton>
      </Tooltip>

      {hasSongs && (
        <Tooltip title="Next">
          <IconButton
            onClick={handleNextSong}
            sx={{
              color: "white",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
            aria-label="Next"
          >
            <MdSkipNext size={30} />
          </IconButton>
        </Tooltip>
      )}

      <Tooltip title="Shuffle">
        <IconButton
          onClick={() => setShuffle((prev) => !prev)}
          sx={{
            color: shuffle ? "red" : "white",
            "&:hover": {
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "red",
            },
            display: { xs: "none", sm: "inline-flex" },
          }}
          aria-label="Shuffle"
        >
          <BsShuffle size={20} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default Controls;
