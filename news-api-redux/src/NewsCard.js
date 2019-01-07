import React, {Component} from 'react';

class NewsCard extends Component{
  render(){
    return (
      <div className = "news__card">
        <img src = {this.props.data.urlToImage} alt="newscard"></img>
        <div className = "news__card__data">
          <a href = {this.props.data.url}>{this.props.data.title}</a>
          <h4>Published:{this.props.data.publishedAt}</h4>
          <h4>Author:{this.props.data.author}</h4>
          <p>{this.props.data.content}</p>
        </div>
      </div>
    )
  }
}
export default NewsCard;