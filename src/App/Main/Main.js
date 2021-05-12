import React from 'react'
import {Route} from 'react-router-dom' 
import DesignerImage from './DesignerImage'
import DesignerItem from './DesignerItem'
import BlogList from './Blog/BlogList'
import Form from './Form/Form'
import BlogNews from './BlogNews/BlogNews'




import './main.css'


const Main = () => {
    return (
    
      <>
     <section className="designers">
        <div className="conteiner">
            <div className="row header-row">
                <div className="col-sm-12">
                    <div className="wrapper">
                        <div className="col-sm-4">
                            <DesignerImage/>
                        </div>
                        <div className="col-sm-8">
                            <DesignerItem/>
                        </div>
                        
  
                        <div className="col-sm-12">
                    <Route path="/" exact render={() => <BlogList/>}/>
                    
                   
                    <Route path="/blogs/:id" component={BlogNews}/>
                    </div>
                    </div>
                    <Route path="/" exact render={() => <Form/>}/>
                </div>
            </div>
        </div>
    </section>

   
       
 </>

    )
}

export default Main