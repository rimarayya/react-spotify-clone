import { Link } from 'react-router-dom';
import { useGetAlbumDetailsQuery } from '../redux/services/deezer';
import Loader from './Loader';

const DetailsHeader = ({ artistId, artistData, songData, topTrack }) => {
  const artist = artistData?.artist || artistData || songData?.artist;

  const albumId = songData?.album?.id || topTrack?.album?.id;
  const { data: albumData, isFetching: isFetchingAlbum } = useGetAlbumDetailsQuery({ albumid: albumId }, { skip: !albumId });

  const genreName = albumData?.genres?.data?.[0]?.name
    || topTrack?.album?.genre?.name
    || 'Unknown Genre';

  if (isFetchingAlbum) return <Loader title="Loading album details..." />;
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={artistId ? artist?.picture_xl : songData?.album?.cover_xl}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          {songData?.title && (
            <p className="font-bold sm:text-3xl text-xl text-white">
              {songData.title}
            </p>
          )}
          <Link to={`/artists/${artist?.id}`}>
            <p className="text-base text-gray-400 mt-2">
              {artist?.name || 'Unknown Artist'}
            </p>
          </Link>
          <p className="text-base text-gray-400 mt-2">{genreName}</p>
        </div>
      </div>

      <div className="w-fu sm:h-44 h-24" />
    </div>
  );
};
export default DetailsHeader;
