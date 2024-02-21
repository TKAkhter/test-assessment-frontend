import ToggleMarkWatched from "./ToggleMarkWatched";

interface EpisodeCardProps {
  episodeNumber: number;
  season: number;
  title: string;
  description: string;
  watched: boolean;
  showId: string;
  poster?: string;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episodeNumber,
  season,
  title,
  description,
  watched,
  poster,
  showId,
}) => {
  const seasonEpisodeFormat: string = `S${season.toString().padStart(2, "0")}E${episodeNumber.toString().padStart(2, "0")}`;

  return (
    <div className="bg-gray-800 text-white overflow-hidden m-3 min-h-[320px]">
      {poster ? (
        <img src={poster} alt={`${title} poster`} className="w-full h-48 object-cover" />
      ) : (
        <div className="bg-gray-700 h-48"></div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">
            {seasonEpisodeFormat} · {title}
          </h3>

          <ToggleMarkWatched showId={showId} episodeIndex={episodeNumber - 1} watch={watched} />
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
