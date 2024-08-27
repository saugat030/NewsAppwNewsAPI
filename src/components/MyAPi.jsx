import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";
const MyAPi = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://localhost:7161/WeatherForecast`);
        const data = await response.json();
        setWeather(data);
        setLoading(false);
        alert(data);
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {" "}
      {weather?.[0]?.date}
      <h1>SECKS</h1>{" "}
    </div>
  );
};

export default MyAPi;
