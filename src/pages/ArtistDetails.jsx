import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import {
  useGetArtistDetailsQuery,
  useGetArtistTopTracksQuery,
} from '../redux/services/deezer';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error: artistError,
  } = useGetArtistDetailsQuery({ artistId });

  const {
    data: artistTopTracksData,
    isFetching: isFetchingArtistTopTracks,
    error: artistTopTracksError,
  } = useGetArtistTopTracksQuery(artistId);

  if (isFetchingArtistDetails || isFetchingArtistTopTracks) return <Loader title="Loading artist details..." />;

  if (artistError || artistTopTracksError) return <Error />;

  return (
    <div className="flex flex-col px-6 py-8 min-h-screen text-white">
      <DetailsHeader
        artistId={artistData?.id}
        artistData={artistData}
        topTrack={artistTopTracksData?.data?.[0]}
      />
      <RelatedSongs
        data={artistTopTracksData?.data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        artistId={artistId}
      />
    </div>
  );
};

export default ArtistDetails;
