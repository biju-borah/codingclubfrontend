import React from 'react'
import './style.css'

function Faq() {
    return (
        <section id="faq" className='faq_question'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div className="title_cyan_dark text-center">
                            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Frequently Asked Questions</h4>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}> Questions and Answers (Q&amp;A), are listed
                                questions and answers, all supposed to be commonly asked in some context</p>
                        </div>
                    </div>
                </div>
                <div className="row small_space">
                    <div className="col-lg-8 col-md-12 offset-lg-2">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h6 className="mb-0">
                                        <a data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                            If the roses are red, why are violets blue? <i className="fa-solid fa-arrow-down"></i>
                                        </a>
                                    </h6>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h6 className="mb-0">
                                        <a data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                            How do you hang toilet paper: over or under? <i className="fa-solid fa-arrow-down"></i>
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h6 className="mb-0">
                                        <a data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                            Why is it that round pizzas come in square boxes? <i className="fa-solid fa-arrow-down"></i>
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq