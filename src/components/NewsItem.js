import React from "react";
import "./NewsItem.css"

 function NewsItem (props) {
    return (
      <>
        <figure className="snip1237">
  <div className="image">
  <a href={props.newsUrl} target="_blank" rel="noreferrer">
    <img src={!props.imgUrl ? "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg" : props.imgUrl} alt="sample74"/><i className="ion-ios-clock-outline"></i>
          </a>
    <div className="date"><span className="day">{new Date(props.date).getDate()}</span><span className="month">{new Date(props.date).toLocaleString('default', { month: 'short' })}</span></div>
  </div>
  <i>{props.source}</i>
  <figcaption>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <p className="card-text">
       <small className="text-muted">
         By {!props.author ? "Unknown" : props.author}
            </small>
           </p>
    <a href={props.newsUrl} target="_blank" rel="noreferrer" className=" read-more">
            Read more
          </a>
  </figcaption>
</figure>
      </>
    );
  }

export default NewsItem;
