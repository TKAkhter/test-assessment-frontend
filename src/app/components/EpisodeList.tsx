import { Episode } from "../types";
import EpisodeCard from "./EpisodeCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface EpisodeProps {
  episodes: Episode[];
  showId: string;
}

const EpisodeList: React.FC<EpisodeProps> = ({ episodes, showId }) => {
  var settings = {
    dots: false,
    draggable: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 1,
  };

  return (
    <div className="flex gap-4 flex-wrap">
      {episodes && episodes.length > 0 ? (
        <Slider {...settings} className="w-full">
          {episodes.map((episode) => (
            <EpisodeCard
              key={episode._id} // Add a unique key for each EpisodeCard
              episodeNumber={episode.episode as number}
              title={episode.title}
              description={episode.plot ?? ""}
              watched={episode.watched}
              season={episode.season as number}
              poster={episode.poster}
              showId={showId}
            />
          ))}
        </Slider>
      ) : (
        <p>No episodes to display</p>
      )}
    </div>
  );
};

export default EpisodeList;
