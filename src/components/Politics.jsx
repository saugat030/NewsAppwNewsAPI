import { useState, useEffect } from "react";
import Loading from "./Loading.jsx";
const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=news&apiKey=16bf82667c414864849b17634fe10a55`
        );
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-slate-200">
      <h1 className="text-4xl p-2 m-2 container mx-auto">Top Headlines</h1>
      <div className="flex gap-4 justify-center flex-wrap container mx-auto p-10">
        {articles.map((article, index) => (
          <section
            key={index}
            className="flex flex-col justify-between gap-2 items-center bg-slate-100 p-3 w-96 rounded-lg m-2 shadow-lg shadow-slate-400"
          >
            <h2 className="text-xl font-bold">{article.title}</h2>
            <figure className="">
              <img
                src={
                  article.urlToImage ||
                  "https://i.pinimg.com/originals/b2/a7/8b/b2a78b7520577fc3664213e22bffd2c3.jpg"
                }
                alt="PHOTO"
                className="object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://i.pinimg.com/originals/b2/a7/8b/b2a78b7520577fc3664213e22bffd2c3.jpg";
                }}
              />
            </figure>
            <p className="text-sm">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </section>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
