import React from 'react';
import logo_voldemort from './img/voldemort.jpg'
import logo_darkvador from './img/darkvador.jpg'
import logo_thanos from './img/thanos.jpg'

export class CandidateList extends React.Component {
    render() {
    return (
        <div className="candidates-list my-4">
            <div className="loadContent">
                <div className="container">
                    <div className="row">
                    <div className="col text-center candidate mb-4 px-5">
                            <img  className="img-block mb-3" src={logo_darkvador}/>
                                <div className="hover false">
                                    <div className="loadedContent">
                                    </div>
                                </div>
                            <h2 className="text-light text-uppercase text-left mb-0">
                                Dark Vador
                                <small className="float-right mt-2">43</small>               
                            </h2>
                            <hr className="bg-light line mt-0"></hr>
                        </div>
                        <div className="col text-center candidate mb-4 px-5">
                            <img  className="img-block mb-3" src={logo_thanos}/>
                                <div className="hover false">
                                    <div className="loadedContent">
                                    </div>
                                </div>
                            <h2 className="text-light text-uppercase text-left mb-0">
                                Thanos
                                <small className="float-right mt-2">57</small>               
                            </h2>
                            <hr className="bg-light line mt-0"></hr>
                        </div>
                        <div className="col text-center candidate mb-4 px-5">
                            <img  className="img-block mb-3" src={logo_voldemort}/>
                                <div className="hover false">
                                    <div className="loadedContent">
                                    </div>
                                </div>
                            <h2 className="text-light text-uppercase text-left mb-0">
                                Voldemort
                                <small className="float-right mt-2">57</small>               
                            </h2>
                            <hr className="bg-light line mt-0"></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
