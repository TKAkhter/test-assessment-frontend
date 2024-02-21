import { Show } from "../types";
import EpisodeList from "./EpisodeList";
import RemoveShow from "./RemoveShow";

const ShowCard: React.FC<Show> = ({
  _id,
  title,
  userId,
  episodes,
  year,
  genre,
  plot,
  poster,
  imdburl,
  totalSeasons,
}) => {
  return poster ? (
    <div className="flex-col w-[45%]">
      <div className="flex gap-4">
        <a className="flex-1 block" href={imdburl}>
          <img className="" src={poster} alt="Show Poster" />
        </a>
        <div className="flex-1">
          <div className="flex items-stretch justify-between flex-col h-full">
            <div>
              <h2>
                <a href={imdburl}>{title}</a>
              </h2>
              <span>{year}</span>
              <span>{` · `}</span>
              <span>{genre}</span>
              <span>{` · `}</span>
              <span>
                {totalSeasons} Season {totalSeasons! > 1 ? "s" : null}{" "}
              </span>
              <h2>{plot}</h2>
            </div>
            <RemoveShow showId={_id} />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold my-8">Episodes ({episodes.length})</h2>
      <EpisodeList episodes={episodes} showId={_id} />
    </div>
  ) : null;
};

export default ShowCard;
