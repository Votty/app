import React from 'react';

export class Register extends React.Component {
    render() {
        return (
            <div>
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-md-6 text-light">
                            <div>
                                <h2 className="text-light text-uppercase">Start here</h2>
                                <hr className="bg-light line mt-0"/>
                                <p>Before choosing your candidate enter your id, next you can simply click on candidate's avatar, that's it.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                        <form>
                            <h2 className="text-light text-uppercase">Login / Register</h2>
                            <hr className="bg-light line mt-0"/>
                            <div>
                                <div className="input-group input-group-lg">
                                    <input type="email" className="form-control" placeholder="@" required="required"/>
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn  btn-primary btn-lg">Submit</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
