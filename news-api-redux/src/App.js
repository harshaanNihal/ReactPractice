import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import {fetchData} from './action';
import NewsCard from './NewsCard';
import { Link } from 'react-router-dom';




let mapStateToProps = state => {
  return state;
}

class App extends Component {
  state = {
    inputValue : "",
    country : "",
    category : ""
  }


  handleKeyword = (e)=>{
    if(e.keyCode === 13){
      this.props.history.push(`q=${e.target.value}`);
      fetch(`https://newsapi.org/v2/top-headlines?q=${e.target.value}&apiKey=2ab6440e10204a3fb01f476d610877eb`)
      .then(res => res.json())
      .then(data => this.props.dispatch(fetchData(data)))
    }
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleCountry = (e) => {
    let key = Object.keys(this.props.country).find(key => this.props.country[key] === e.target.value);
    this.setState({
      country: key
    })
  }
  handleCategory = (e) => {
    this.setState({
      category: e.target.value
    })
  }
  handleSubmit = () => {
    this.props.history.push(`/${this.props.country[this.state.country]}/${this.state.category}`);
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=2ab6440e10204a3fb01f476d610877eb`)
    .then(res => res.json())
    .then(data => this.props.dispatch(fetchData(data)))
  }
  render() {
    return (
      <div className="App">
        <header className = "header">
        <Link to = "/"><h1>News App</h1></Link>
        <input type = "text" placeholder = "search keyword" onKeyDown = {this.handleKeyword}></input>
        </header>
        <div className="news__filter">
          <select className = "country__list" onChange = {(e)=>this.handleCountry(e)}>
            <option>select country</option>
            {
              Object.values(this.props.country).map((v,i)=>{
                return <option key = {i}>{v}</option>
              })
            }
          </select>
          <select className = "category__list" onChange = {(e)=>this.handleCategory(e)}>
            <option>select category</option>
            {
              this.props.category.map((v,i)=>{
                return <option key = {i}>{v}</option>
              })
            }
          </select>
          <button className = "submit" onClick = {this.handleSubmit}>SUBMIT</button>
        </div>
        <div className = "news__data">
          {
            this.props.newsData.map((v,i)=>{
              return <NewsCard data = {v} key = {i} />
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
