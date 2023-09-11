import React, { Component } from "react";
import "./NewsItem.css"

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <figure className="snip1237">
  <div className="image">
  <a href={newsUrl} target="_blank" rel="noreferrer">
    <img src={!imgUrl ? "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg" : imgUrl} alt="sample74"/><i className="ion-ios-clock-outline"></i>
          </a>
    <div className="date"><span className="day">{new Date(date).getDate()}</span><span className="month">{new Date(date).toLocaleString('default', { month: 'short' })}</span></div>
  </div>
  <i>{source}</i>
  <figcaption>
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="card-text">
       <small className="text-muted">
         By {!author ? "Unknown" : author}
            </small>
           </p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className=" read-more">
            Read more
          </a>
  </figcaption>
</figure>
      </>
    );
  }
}

export default NewsItem;
