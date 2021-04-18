import React from 'react'

import './form.css'

const Form = () => {
    return (
        <section className="sign_up">
          <div className="dark_item">
            <div className="conteiner">
                <div className="row header-row">
                    <div className="col-sm-12">
                        <div className="sign_up_item">
                            <div className="sign_title">
                                Sign Up Here To Hear About Our Divi Theme Launches, Discounts And More!
                            </div>
                            <div className="arrow"> </div>
                            <div className="sign_text">
                                EXCLUSIVE DISCOUNTS ON THEME RELEASES JUST FOR MEMBERS
                            </div>
                            <div className="take_text">
                                I don't often send newsletters, but when I do, it will contain something to really pique
                                your interest.
                            </div>
                            <form className="form-search">
                                <input type="text" className="input-search-text" placeholder="Name"/>
                                <input type="text" className="input-search-text" placeholder="Email"/>
                            </form>
                            <button className="btn_form">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}
export default Form