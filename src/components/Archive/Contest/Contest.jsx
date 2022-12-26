import React from 'react'
import './style.css'

function Contest() {
    return (
        <div className='contest_bg section_gradiant3'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                        <div class="title_default_light text-center">
                            <h4 class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Token Structure</h4>
                            <p class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>Join the industry leaders to discuss where the
                                markets are heading. We accept token payments. </p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>
                            <h5>Private Pre-Sale</h5>
                            <span>June 20, 2018</span>
                        </div>
                        <div class="bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                            <h5>Pre-Sale</h5>
                            <span>July 18, 2018</span>
                        </div>
                        <div class="bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                            <h5>Crowdsale</h5>
                            <span>February 20, 2018</span>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="token_sale res_md_mt_20">
                            <div class="tk_countdown bg-white-tran text-center animation animated fadeIn" data-animation="fadeIn" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                                <div class="tk_counter_inner">
                                    <div class="tk_countdown_time box_shadow_none transparent_bg animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" data-time="2021/12/08 00:00:00" style={{ animationDelay: "0.7s", opacity: "1" }}><span class="counter_box"><span class="tk_counter days">00 </span><span class="tk_text">Days</span></span><span class="counter_box"><span class="tk_counter hours">00</span><span class="tk_text">Hours</span></span><span class="counter_box"><span class="tk_counter minutes">00</span><span class="tk_text">Minutes</span></span><span class="counter_box"><span class="tk_counter seconds">00</span><span class="tk_text">Seconds</span></span></div>
                                    <div class="progress animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{ animationDelay: "0.8s", opacity: "1" }}>
                                        <div class="progress-bar progress-bar-striped gradient_box" role="progressbar" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" style={{ left: "46%" }}> 46%
                                        </div>
                                        <span class="progress_label bg-white" style={{ left: "30%" }}> <strong> 46,000 BCC
                                        </strong></span>
                                        <span class="progress_label bg-white" style={{ left: "75%" }}> <strong> 90,000 BCC
                                        </strong></span>
                                        <span class="progress_min_val">Sale Raised</span>
                                        <span class="progress_max_val">Soft-caps</span>
                                    </div>
                                    <a href="https://bestwebcreator.com/cryptocash/demo/index-cyan-blue-modern.html#" class="btn btn-default animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.9s" style={{ animationDelay: "0.9s", opacity: "1" }}>Buy Tokens <i class="ion-ios-arrow-thin-right"></i></a>
                                    <ul class="icon_list list_none d-flex justify-content-center">
                                        <li class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: "1s", opacity: "1" }}><i class="fa fa-cc-visa"></i></li>
                                        <li class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.1s" style={{ animationDelay: "1.1s", opacity: "1" }}><i class="fa fa-cc-mastercard"></i></li>
                                        <li class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.2s" style={{ animationDelay: "1.2s", opacity: "1" }}><i class="fa fa-bitcoin"></i></li>
                                        <li class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.3s" style={{ animationDelay: "1.3s", opacity: "1" }}><i class="fa fa-paypal"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>
                            <h5>Low - High 24h</h5>
                            <span>$ 6,455.83 - $ 7,071.42</span>
                        </div>
                        <div class="bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                            <h5>Total Token Sale</h5>
                            <span>855,000 BCC (8.2%)</span>
                        </div>
                        <div class="bg-white-tran radius_box token_sale_box_white text_white text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                            <h5>Acceptable Currency </h5>
                            <span>BTC, ETH, LTC</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contest