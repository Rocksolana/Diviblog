import React from 'react'
import blogs, {getBlogsObject} from '../Blog/Blog'
import './BlogNews.css'

const BlogNews = ({
 match,
 blogsItem = getBlogsObject(blogs)
}) => {
 console.log(match)
 const id =match.params.id;

    return (
        <>
        <h1 className="page-title">{blogsItem[id].name}</h1>
            <p dangerouslySetInnerHTML={{
                __html:blogsItem[id].fullDesc
            }}></p>

        </>
    )
}
export default BlogNews