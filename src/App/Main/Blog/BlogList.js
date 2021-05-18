import React from 'react'
import BlogListItem from "./BlogListItem"
import blogs from "./blogs"



const BlogList = (category) => {
    return (
        <>
    <div className="blog_item">
        <div className="conteiner">
            <div className="row header-row">
             
                {
                    blogs.filter(item => item.category === "Our latest").map(({
                        id,
                        category,
                        name,
                        description,
                        image
                    }) => (
                    
                        <div key={id}>
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

</>

    )
}

export default BlogList