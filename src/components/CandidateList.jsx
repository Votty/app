import React from 'react';
import logo_voldemort from './img/voldemort.jpg'
import logo_darkvador from './img/darkvador.jpg'
import logo_thanos from './img/thanos.jpg'

//Used to display the candidate list

export class CandidateList extends React.Component {
    render() {
    return (
        <div className="candidates-list">
            <div className="loadContent">
                <div className="container">
                    <div className="row">
                        <div className="col text-center candidate mb-4 px-5">
                            <h2 className="text-uppercase my-1 font-weight-light ">
                                Dark Vador                                       
                            </h2>
                            <div className="img-block mt-2 mb-2">
                                <img  src={logo_darkvador} alt="Dark Vador"/>
                            </div>
                            <div>
                                <div className="hover false">
                                    <div className="loadedContent"></div>
                                </div> 
                            </div>
                        </div>
                        <div className="col text-center candidate mb-4 px-5">
                        <h2 className=" text-uppercase my-1 font-weight-light">
                            Thanos                                       
                        </h2>
                        <div className="img-block mt-2 mb-2">
                            <img  src={logo_thanos} alt="Thanos"/>
                        </div>
                        <div>
                            <div className="hover false">
                                <div className="loadedContent"> </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col text-center candidate mb-4 px-5">
                        <h2 className=" text-uppercase my-1 font-weight-light">
                            Voldemort                                       
                        </h2>
                        <div className="img-block mt-2 mb-2">
                            <img  src={logo_voldemort} alt="Voldemort"/>
                        </div>
                        <div>
                            <div className="hover false">
                                <div className="loadedContent"></div>
                            </div> 
                        </div>
                    </div>  
                    </div>                   
                </div>
            </div>
        </div>
    );
  }
}
