import React from 'react'
import './style.css'

function Faq() {
    return (
        <section id="faq">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div class="title_cyan_dark text-center">
                            <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "0" }}>Frequently Asked Questions</h4>
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "0" }}> Questions and Answers (Q&amp;A), are listed
                                questions and answers, all supposed to be commonly asked in some context</p>
                        </div>
                    </div>
                </div>
                <div class="row small_space">
                    <div class="col-lg-8 col-md-12 offset-lg-2">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="tab1" role="tabpanel">
                                <div id="accordion1" class="faq_question">
                                    <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "0" }}>
                                        <div class="card-header" id="headingOne">
                                            <h6 class="mb-0"> <a data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">What is
                                                cryptocurrency?</a> </h6>
                                        </div>
                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion1">
                                            <div class="card-body"> The best cryptocurrency to buy is one we are willing
                                                to hold onto even if it goes down. For example, I believe in Steem
                                                enough that I am willing to hold it even if it goes down 99% and would
                                                start buying more of it if the price dropped.</div>
                                        </div>
                                    </div>
                                    <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "0" }}>
                                        <div class="card-header" id="headingTwo">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">Which
                                                cryptocurrency is best to buy today?</a> </h6>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                            <div class="card-body"> The best cryptocurrency to buy is one we are willing
                                                to hold onto even if it goes down. For example, I believe in Steem
                                                enough that I am willing to hold it even if it goes down 99% and would
                                                start buying more of it if the price dropped.</div>
                                        </div>
                                    </div>
                                    <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s" style={{ animationDelay: "0.8s", opacity: "0" }}>
                                        <div class="card-header" id="headingThree">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">How about day
                                                trading crypto?</a> </h6>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion1">
                                            <div class="card-body"> While profits are possible trading cryptocurrencies,
                                                so are losses. My first year involved me spending hundreds of hours
                                                trading Bitcoin with a result of losing over $5,000 with nothing to show
                                                for it. Simply trading digital currencies is very similar to gambling
                                                because no one really knows what is going to happen next although anyone
                                                can guess! While I was lucky to do nothing expect lose money when I
                                                started, the worst thing that can happen is to get lucky right away and
                                                get a big ego about what an amazing cryptocurrency trader we are. </div>
                                        </div>
                                    </div>
                                    <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: "1s", opacity: "0" }}>
                                        <div class="card-header" id="headingFour">
                                            <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="collapseFour">When to sell a
                                                cryptocurrency?</a> </h6>
                                        </div>
                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion1">
                                            <div class="card-body"> Before Steem I was all in an another altcoin and
                                                really excited about it. When I first bought the price was low and made
                                                payments to me every week just for holding it. As I tried to participate
                                                in the community over the next several months, I was consistently met
                                                with a mix of excitement and hostility. When I began talking openly
                                                about this, the negative emotions won over in the community and in me.
                                                Originally I had invested and been happy to hold no matter what the
                                                price which quickly went up after I bought it. </div>
                                        </div>
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