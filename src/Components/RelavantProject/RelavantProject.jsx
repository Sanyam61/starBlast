import React from 'react';
import './RelavantProject.scss';
import codeIcon from "../../assets/images/codeIcon.png";
import Slider from "react-slick";

function RelavantProject(props) {
    var projectSlider = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='relavantProjectWrapper'>
                <h4 className='mainTitle'>Relavant Project</h4>
                <div className='carouselWrapper px-lg-0 px-md-3'>
                    <Slider {...projectSlider}>
                        <div className='p-3'>
                            <div className='cardWrapper'>
                                <div className='cardTitleWrapper'>
                                    <h6 className='cardTitle'>HeirWealth</h6>
                                </div>
                                <div className='cardBody'>
                                    <div className='cardImgWrapper'>
                                        <img alt='CardImg' />
                                    </div>
                                    <p>User authentication is a crucial feature in software applications and systems that ensures that users are who they claim to be before granting them access to certain resources or functionalities.</p>
                                    <p>User authentication is a crucial feature in software applications and systems that ensures that users are who they claim to be before granting them access to certain resources or functionalities.</p>
                                    <div className='techModules d-flex justify-content-start flex-lg-row flex-column gap-lg-5 gap-2'>
                                        <h6>Tech Modules</h6>
                                        <div className='chipWrapper'>
                                            <div className='chip d-flex justify-content-center align-items-center gap-2'>
                                                <div className='chipImg d-flex justify-content-center align-items-center'>
                                                    <img src={codeIcon} alt='CodeImg' />
                                                </div>
                                                <span>BACKEND</span>
                                            </div>
                                            <div className='chip d-flex justify-content-center align-items-center gap-2'>
                                                <div className='chipImg d-flex justify-content-center align-items-center'>
                                                    <img src={codeIcon} alt='CodeImg' />
                                                </div>
                                                <span>FRONTEND</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='cardWrapper'>
                                <div className='cardTitleWrapper'>
                                    <h6 className='cardTitle'>HeirWealth</h6>
                                </div>
                                <div className='cardBody'>
                                    <div className='cardImgWrapper'>
                                        <img alt='CardImg' />
                                    </div>
                                    <p>User authentication is a crucial feature in software applications and systems that ensures that users are who they claim to be before granting them access to certain resources or functionalities.</p>
                                    <p>User authentication is a crucial feature in software applications and systems that ensures that users are who they claim to be before granting them access to certain resources or functionalities.</p>
                                    <div className='techModules d-flex justify-content-start flex-lg-row flex-column gap-lg-5 gap-2'>
                                        <h6>Tech Modules</h6>
                                        <div className='chipWrapper'>
                                            <div className='chip d-flex justify-content-center align-items-center gap-2'>
                                                <div className='chipImg d-flex justify-content-center align-items-center'>
                                                    <img src={codeIcon} alt='CodeImg' />
                                                </div>
                                                <span>BACKEND</span>
                                            </div>
                                            <div className='chip d-flex justify-content-center align-items-center gap-2'>
                                                <div className='chipImg d-flex justify-content-center align-items-center'>
                                                    <img src={codeIcon} alt='CodeImg' />
                                                </div>
                                                <span>FRONTEND</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='cardWrapper'>
                                <div className='cardTitleWrapper'>
                                    <h6 className='cardTitle'>HeirWealth</h6>
                                </div>
                                <div className='cardBody'>
                                    <div className='cardImgWrapper'>
                                        <img alt='CardImg' />
                                    </div>
                                    <p>User authentication is a crucial feature in software applications and systems that ensures that users are who they claim to be before granting them access to certain resources or functionalities.</p>
                                    <p>User authentication is a crucial feature in software applications and systems that ensures that users are who they claim to be before granting them access to certain resources or functionalities.</p>
                                    <div className='techModules d-flex justify-content-start flex-lg-row flex-column gap-lg-5 gap-2'>
                                        <h6>Tech Modules</h6>
                                        <div className='chipWrapper'>
                                            <div className='chip d-flex justify-content-center align-items-center gap-2'>
                                                <div className='chipImg d-flex justify-content-center align-items-center'>
                                                    <img src={codeIcon} alt='CodeImg' />
                                                </div>
                                                <span>BACKEND</span>
                                            </div>
                                            <div className='chip d-flex justify-content-center align-items-center gap-2'>
                                                <div className='chipImg d-flex justify-content-center align-items-center'>
                                                    <img src={codeIcon} alt='CodeImg' />
                                                </div>
                                                <span>FRONTEND</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='cardWrapper'>
                                <div className='cardTitleWrapper'>
                                    <h6 className='cardTitle'>HeirWealth</h6>
                                </div>
                                <div className='cardBody'>
                                    <div className='cardImgWrapper'>
                                        <img alt='CardImg' />
                                    </div>
                                    <p>User authentication is a crucial feature in software applications and systems that ensures that users are who they claim to be before granting them access to certain resources or functionalities.</p>
                                    <p>User authentication is a crucial feature in software applications and systems that ensures that users are who they claim to be before granting them access to certain resources or functionalities.</p>
                                    <div className='techModules d-flex justify-content-start flex-lg-row flex-column gap-5'>
                                        <h6>Tech Modules</h6>
                                        <div className='chipWrapper'>
                                            <div className='chip d-flex justify-content-center align-items-center gap-2'>
                                                <div className='chipImg d-flex justify-content-center align-items-center'>
                                                    <img src={codeIcon} alt='CodeImg' />
                                                </div>
                                                <span>BACKEND</span>
                                            </div>
                                            <div className='chip d-flex justify-content-center align-items-center gap-2'>
                                                <div className='chipImg d-flex justify-content-center align-items-center'>
                                                    <img src={codeIcon} alt='CodeImg' />
                                                </div>
                                                <span>FRONTEND</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default RelavantProject;