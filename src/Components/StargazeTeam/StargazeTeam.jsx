import React from 'react';
import './StargazeTeam.scss';
import userTeam from '../../assets/images/userTeam.png';

function StargazeTeam(props) {
    return (
        <>
            <div className='stargazeTeamWrapper'>
                <div className='stargazeWrap'>
                    <h4 className='mainTitle'>With the power of <span>Stargaze</span>...</h4>
                    <ul>
                        <li>
                            <b>Less of what you don’t:</b> Curate the team size to the project needs. Each line of code is validated against high industry standards to avoid budget overhead for maintenance.
                        </li>
                        <li>
                            <b>More of what you need:</b> Latest technology. Apply scalable architecture so new ideas can be plugged in seamlessly.
                        </li>
                    </ul>
                </div>
                <div className='dreamTeamWrapper'>
                    <h4 className='mainTitle'>Let’s meet your <span>dream team</span> ... </h4>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='horizontalCardWrapper d-flex justify-content-center align-items-center gap-3'>
                                <div className='cardImg'>
                                    <img src={userTeam} alt='CardImg' />
                                </div>
                                <div className='cardBody d-flex flex-column align-items-start'>
                                    <h6>Build your own team</h6>
                                    <span>Browse through our list of experienced talents, discover and find the most suitable ones for your team</span>
                                    <button type='button'>Choose Talents</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='horizontalCardWrapper d-flex justify-content-center align-items-center gap-3'>
                                <div className='cardImg'>
                                    <img src={userTeam} alt='CardImg' />
                                </div>
                                <div className='cardBody d-flex flex-column align-items-start'>
                                    <h6>Get recommendations</h6>
                                    <span>From your dream products’ description, we’ll suggest the most suitable talents with skills that fit the project</span>
                                    <button type='button'>See The Team</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StargazeTeam;