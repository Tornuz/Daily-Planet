import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - DailyPlanet`;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async update() {
    this.props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let newsData = await data.json();
    this.props.setProgress(70)
    // console.log(newsData);
    this.setState({
      articles: newsData.articles,
      loading: false,
      totalResults: newsData.totalResults
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.update();
  }

  fetchMoreData = async() => {
    
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let newsData = await data.json();
    // console.log(newsData);
    this.setState({
      articles: this.state.articles.concat(newsData.articles),
      loading: false,
      totalResults: newsData.totalResults,
      page: this.state.page +1
    });
  };


  render() {
    return (
      <>
        <h1 className="text-center my-4">
          Daily Planet - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
        {this.state.loading && <Loading />}
        <div className="container">
        <div className="row">
          {this.state.articles.map((e) => {
              return (
                <div key={e.url} className="col-md-4 my-1">
                  <NewsItem title={e.title} description={e.description}
                    imgUrl={e.urlToImage} newsUrl={e.url}
                    author={e.author} date={e.publishedAt}
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
}

export default News;
