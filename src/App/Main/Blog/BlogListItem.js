import React, { Component } from 'react'
import {connect} from 'react-redux'
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
            image,
            isLiked=false,
            addLike,
            removeLike
        } = this.props;
        
        return (
            <>
       
        <div className="take_item">
            <div className="col-sm-6">
               <div>
                 <img src={image} alt={name} className="blog_image"/>
                 </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="take_desr">
                <div><a href="/" className="category">{category}</a></div>
               <button className="like_item" onClick={() => isLiked ? removeLike(id) : addLike(id)}>
                  {isLiked ? <span>&#128156;</span> : <span> &#128155;</span> } 
               </button>
                <div className="red_title">
                <Link to={`/blogs/${id}`}>{name}</Link></div>
                <ColoredLine color="rgb(209, 127, 127)"/>
                <div className="text_item">{description}</div>
                <button className="btn" id="btn-place"> Read more </button>
                </div>
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

const mapState = (state,props) => ({
    isLiked:state[props.id]
})

const mapDispatch = (dispatch,{id}) => ({
    addLike: () => dispatch({
        type:"LIKE",
        id
    }),
    removeLike:() => dispatch({
        type:"DISLIKE",
        id
    }),
    addLikeToCart:(id,count) => dispatch({
        type:"ADD_LIKE_TO_CART",
        id
    })


})

export default connect (
 mapState,
 mapDispatch
)(BlogListItem)

