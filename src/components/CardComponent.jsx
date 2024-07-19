import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CardComponent.css";

const CardComponent = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  //NOTE:  using then and catch

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  //Note: using async await

  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <h1>Axios - My Data</h1>
      {isError ? (
        <h2>{isError}</h2>
      ) : (
        <div className="grid">
          {myData.slice(0, 12).map((post) => {
            const { id, title, body } = post;
            return (
              <div key={id} className="card">
                <h2>{title.slice(0, 15).toUpperCase()}</h2>
                <p>{body.slice(0, 100)}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardComponent;
