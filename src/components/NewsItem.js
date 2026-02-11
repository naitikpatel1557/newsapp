import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        // Props destructuring
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;

        return (
            <div className='container my-3'>
                <div className="card">
                    
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '80%', zIndex: '3' }}>
                        {source}
                    </span>

                    <img src={!imageUrl ? "https://static.toiimg.com/thumb/width-800,height-450,imgsize-93402,msid-127888776/127888776.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} <br></br>Written on  {new Date(publishedAt).toGMTString()}</small></p>     {/* Here we can Convert Date into GMT Time  */}
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
