import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
      const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let newsData = await data.json();
        props.setProgress(70);
        // console.log(newsData);
        setArticles(newsData.articles);
        setLoading(false);
        setTotalResults(newsData.totalResults);
        props.setProgress(100);
      };

  useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - DailyPlanet`;
    updateNews();
    // eslint-disable-next-line
  }, []);


  const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let newsData = await data.json()
    setArticles(articles.concat(newsData.articles))
    setTotalResults(newsData.totalResults)
    setPage(page+1)
  };

  return (
    <>
      <h1 className="text-center" style={{marginTop: '90px'}}>
        Daily Planet - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        {loading && <Loading />}
        <div className="container">
          <div className="row">
            {articles.map((e) => {
              return (
                <div key={e.url} className="col-md-4 my-1">
                  <NewsItem
                    title={e.title}
                    description={e.description}
                    imgUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
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

export default News;
