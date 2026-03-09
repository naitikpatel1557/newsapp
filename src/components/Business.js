import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.props.headline} - DailyNews`;          //TO get the headline name in the title of the page

    }

    //Uodate the news
    async updateNews() {
        this.props.setProgress(10); // Set progress to 10% when the updateNews function is called

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f73d57001d954a6485fa01a376091876&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });                 //Setting loading to true before fetching the data to show the spinner while the data is being fetched

        let data = await fetch(url);                  //async is used to wait for the fetch to complete
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100); // Set progress to 100% when the news update is complete
    }


    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f73d57001d954a6485fa01a376091876&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });                 //Setting loading to true before fetching the data to show the spinner while the data is being fetched

        // let data = await fetch(url);                  //async is used to wait for the fetch to complete
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ 
        //     articles: parsedData.articles, 
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // });
        this.updateNews();

    }

    handleNextClick = async () => {

        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    handlePrevClick = async () => {

        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }



    render() {
        return (
            <div className='container my-3'>
                <h2 className="text-center">Daily {this.props.headline} News - Top Headlines</h2>
                {this.state.loading && <Spinner />}

                <div className="row">
                    {this.state.articles?.map((element) => {

                        return <div className="col-md-3" key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0, 50) + "..." : ""} description={element.description ? element.description.slice(0, 90) + "..." : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}></NewsItem>
                        </div>
                    }
                    )}
                </div>

                <div className="container center-div d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>
            </div>
        )
    }
}
export default News

