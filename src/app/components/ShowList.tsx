import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootState } from "../types";

function ShowList() {
  const dispatch = useDispatch();
  const user = useSelector((state: StoreRootState) => state.user);

  useEffect(() => {
    async function fetchShowList() {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_APP_URL}/api/showlist`, {
          params: {
            userId: user.userId,
          },
        });
        dispatch({
          type: "SHOW_LIST",
          payload: data.shows,
        });
      } catch (error) {
        console.error("Error fetching show list:", error);
      }
    }

    fetchShowList();
  }, [user.userId]);

  return (
    <div>
      <h2>Show List</h2>
      <ul>
        {user.shows
          ? user.shows.map((show) => (
              <>
                <li key={show._id} id={show._id}>
                  {show.title}
                </li>
                <ul>
                  {show.episodes.map((episode) => (
                    <li key={episode._id}>
                      {episode.title}, Watched = {episode.watched ? "Yes" : "No"}
                    </li>
                  ))}
                </ul>
              </>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ShowList;
