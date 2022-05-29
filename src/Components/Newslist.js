import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

function Newslist(props) {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const apiCall = async () => {
    console.log(page);
    let api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(api);
    let parsedData = await data.json();
    setLoading(false);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    let api = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.catagory}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(api);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    // setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2 style={{ marginTop: "90px" }}>
        NewsBaazi - Top{" "}
        {props.catagory.charAt(0).toUpperCase() + props.catagory.slice(1)}{" "}
        Headlines of India
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row my-5">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={
                      element.title
                        ? element.title.slice(0, 45)
                        : "No title available."
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : "No description available."
                    }
                    urlToImage={element.urlToImage}
                    url={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Newslist;
