import React from 'react'
import blogs, {getBlogsObject} from '../Blog/blogs'
import mainimage from './collaborate-divi-child-theme.png'



const BlogNews = ({
 match,
 blogsItem = getBlogsObject(blogs)
}) => {
 console.log(match)
 const id = match.params.id;

    return (
        
        <>   
        <div className="blog_item">
          <div className="conteiner">
            <div className="row header-row">
                <div className="col-sm-12">     
           <div className="red_title">{blogsItem[id].name}</div>
           <div className="col-sm-5"> 
           <div className="blognews_pict">
          <img src={mainimage} alt="img" className="blognews_image" />
        </div>
        </div>
        <div className="col-sm-7"> 
        <div className="blognews_text">
           <p dangerouslySetInnerHTML={{
                __html:blogsItem[id].fullDesc}}>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
        </>
    )
}
export default BlogNews