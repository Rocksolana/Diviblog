import React from 'react'
import blogs, {getProductsObject} from '../Blog/Blog'

const BlogNews = ({
 match,
 blogsItem = getProductsObject(blogs)
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