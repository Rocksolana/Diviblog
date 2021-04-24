import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './blog.css'



const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            marginTop: '15px'
        }}
    />
)

class BlogListItem extends Component {

    render() {
        const {
            id,
            category,
            name,
            description,
            image
        } = this.props;
        
        return (
            <>
            <div className="take_item">
               <div>
                 <img src={image} alt={name} className="blog_image"/>
                 </div>
                   <div className="take_desr">
                <div><a href="/" className="category">{category}</a></div>
                <div className="red_title">
                    <Link to={`/blogs/${id}`}>{name}</Link></div>
                <ColoredLine color="rgb(209, 127, 127)"/>
                <div className="text_item">{description}</div>
                <button className="btn" id="btn-place"> Read more </button>
                
                  </div>
                </div>
            </>
        )
    }
}

BlogListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
}


export default BlogListItem

