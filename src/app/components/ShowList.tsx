import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootState } from "../types";
import ShowCard from "./ShowCard";

function ShowList() {
  const dispatch = useDispatch();
  const user = useSelector((state: StoreRootState) => state.user);

  useEffect(() => {
    async function fetchShowList() {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/showlist`, {
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
    <div className="container mx-auto mb-10">
      <main className="px-5">
        <h3 className="text-4xl font-bold my-8">My Shows</h3>
        <div className="flex gap-32 justify-between flex-wrap">
          {user.shows
            ? user.shows.map((show, index) => <ShowCard key={show._id} {...show} />)
            : null}
        </div>
      </main>
    </div>
  );
}

export default ShowList;
