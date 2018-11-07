import React from 'react';

export class List extends React.Component {
    render() {
        return (
            <div className="listVotes container text-light mt-4">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="text-uppercase text-light">Last votes</h2>
                            </div>
                            <div className="col-md-2">
                                <div className="input-group  mb-1">
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="input-group mb-1">
                                </div>
                            </div>
                        </div>
                        <hr className="bg-light line mt-0"/>
                    </div>
                </div>
            </div>
        );
    }
}