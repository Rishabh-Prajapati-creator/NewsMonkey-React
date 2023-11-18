import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='my-3'>
       <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
              <img src={!imageUrl?"https://static.toiimg.com/photo/105260608.cms":imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title} <span className=' badge rounded-pill bg-danger'> {source} </span> </h5>

                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
                <a  rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
              </div>
</div>
      </div>
      </div>
    )
  }
}

export default NewsItem
