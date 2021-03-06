import React from 'react'
import BlogListItem from "./BlogListItem"
import blogs from "./blogs"



const BlogList = (category) => {
    return (
        <>
    <div className="blog_item">
        <div className="conteiner">
            <div className="row header-row">
            <div className="col-sm-12">
             
                {
                 /*  blogs.filter(item => item.category === "Our latest").map(({*/
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