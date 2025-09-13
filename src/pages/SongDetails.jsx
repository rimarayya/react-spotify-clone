import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
  useGetSongDetailsQuery,
  useGetArtistTopTracksQuery,
} from '../redux/services/deezer';

// Helper: format seconds into mm:ss
// const formatDuration = (seconds) => {
//   const mins = Math.floor(seconds / 60);
//   const secs = seconds % 60;
//   return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
// };

// Helper: generate structured fake lyrics (verse + chorus)
const generateFakeLyrics = (title, artist) => {
  const verses = [
    'Walking down the road, thinking of you\nUnder moonlit skies, we knew it was true',
    'Every step I take brings me back to that night\nYour voice in my head makes the darkness bright',
    'The city lights fade but our hearts still glow\nEvery beat in my chest lets the whole world know',
  ];

  const chorus = `🎵 ${title}, oh ${artist}\nWe keep singing till the morning light\n${title}, oh ${artist}\nHold me close, never say goodbye 🎵`;

  const fakeLyrics = [];
  fakeLyrics.push(verses[Math.floor(Math.random() * verses.length)]);
  fakeLyrics.push(chorus);
  fakeLyrics.push(verses[Math.floor(Math.random() * verses.length)]);
  fakeLyrics.push(chorus);
  fakeLyrics.push(verses[Math.floor(Math.random() * verses.length)]);
  fakeLyrics.push(chorus);

  return fakeLyrics.join('\n\n');
};
const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error: songError,
  } = useGetSongDetailsQuery({ songid });

  const artistId = songData?.artist?.id;

  const {
    data: relatedSongsData,
    isFetching: isFetchingRelatedSongs,
    error: relatedSongsError,
  } = useGetArtistTopTracksQuery(artistId);

  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    if (songData?.artist?.name && songData?.title) {
      setLyrics(generateFakeLyrics(songData.title, songData.artist.name));
    }
  }, [songData]);

  const handlePlayClick = (song, data, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Loading song details..." />;
  if (songError || relatedSongsError) return <Error />;

  return (
    <div className="flex flex-col px-6 py-8  min-h-screen text-white">
      {/* Song & Artist Info */}
      <DetailsHeader artistId={songData?.artist?.id} songData={songData} />

      {/* Lyrics Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
          Lyrics
        </h2>
        <div
          className="text-gray-300 text-base leading-relaxed whitespace-pre-line max-w-3xl"
          style={{ whiteSpace: 'pre-line' }}
        >
          {lyrics}
        </div>
      </div>

      <RelatedSongs
        data={relatedSongsData?.data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
