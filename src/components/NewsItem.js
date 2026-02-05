import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        // Props destructuring
        let {title, description,imageUrl, newsUrl} = this.props;

        return (
            <div className='container my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://static.toiimg.com/thumb/width-800,height-450,imgsize-93402,msid-127888776/127888776.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
