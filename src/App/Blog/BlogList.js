import React from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import BlogListItem from "./BlogListItem"
import blogs from "./Blog"
import BlogNews from "./BlogNews/BlogNews"




const BlogList = () => {
    return (
        <>
    <div className="blog_item">
        <div className="conteiner">
            <div className="row header-row">
                <div className="col-sm-12">
                {
                    blogs.map(({
                        id,
                        category,
                        name,
                        description,
                        image
                    }) => (
                    
                        <div className="col-sm-12" key={id}>
                            <BlogListItem
                                id ={id}
                                name={name}
                                category={category}
                                description={description}
                                image={image}
                            />
                        </div>    
                    ))
                }
              
              
            </div>
         </div>
      </div>
  </div>

</>

    )
}

export default BlogList