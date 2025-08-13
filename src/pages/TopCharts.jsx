import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/deezer";

const TopCharts = () => {
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading top charts" />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-left text-white mt-4 mb-10 ">
        Discover Top Charts
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.data?.map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data.tracks.data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
