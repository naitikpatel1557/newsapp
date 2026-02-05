import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f73d57001d954a6485fa01a376091876&pageSize20";
      let data = await fetch(url);                  //async is used to wait for the fetch to complete
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    

    }

    handleNextClick = async() => {
        console.log("Next");
        
        
        if(this.state.page+1 >= Math.ceil(this.state.totalResults/20)) {
            return;
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f73d57001d954a6485fa01a376091876&page=${this.state.page+1}&pageSize20`;
            let data = await fetch(url);                  //async is used to wait for the fetch to complete
            let parsedData = await data.json();
            console.log(parsedData);
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            });

        }

    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f73d57001d954a6485fa01a376091876&page=${this.state.page - 1}&pageSize20`;
        let data = await fetch(url);                  //async is used to wait for the fetch to complete
        let parsedData = await data.json();
        console.log(parsedData);
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
    }



    render() {
        return (
            <div className='container my-3'>
                <h2>DailyNews - Top Headlines</h2>



                <div className="row">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-3" key={element.url} >
                            <NewsItem title={element.title?element.title.slice(0, 50) + "...":""} description={element.description?element.description.slice(0, 90) + "...":""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                        </div>
                    }
                    )}
                </div>

                <div className="container center-div d-flex justify-content-between">
                    <button disabled={this.state.page <= 1}  type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>
            </div>
        )
    }
}
export default News

