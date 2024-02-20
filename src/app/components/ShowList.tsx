import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { StoreRootState } from "../types";

function ShowList() {
  const [shows, setShows] = useState<any[]>([]);
  const user = useSelector((state: StoreRootState) => state.user);
  console.log("🚀 ~ ShowList ~ user:", user);

  useEffect(() => {
    async function fetchShowList() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_APP_URL}/api/showlist`, {
          params: {
            userId: user.userId,
          },
        });
        setShows(response.data.shows);
      } catch (error) {
        console.error("Error fetching show list:", error);
      }
    }

    fetchShowList();
  }, []);

  return (
    <div>
      <h2>Show List</h2>
      <ul>
        {shows.map((show) => (
          <li key={show._id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
