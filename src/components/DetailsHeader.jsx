import { Link } from "react-router-dom";
import { useGetAlbumDetailsQuery } from "../redux/services/deezer";
import { Loader } from "../components";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artist || songData?.artist;

  const albumId = songData?.album?.id;
  const { data: albumData, isFetching: isFetchingAlbum } =
    useGetAlbumDetailsQuery({ albumid: albumId }, { skip: !albumId });

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
          <p className="font-bold sm:text-3xl text-xl text-white">
            {songData?.title}
          </p>
          <Link to={`/artists/${artist?.id}`}>
            <p className="text-base text-gray-400 mt-2">
              {songData?.artist?.name}
            </p>
          </Link>
          <p className="text-base text-gray-400 mt-2">
            <p className="text-base text-gray-400 mt-2">
              {albumData?.genres?.data[0]?.name || "Unknown Genre"}
            </p>
          </p>
        </div>
      </div>

      <div className="w-fu sm:h-44 h-24" />
    </div>
  );
};
export default DetailsHeader;
