import React from 'react';
import { CandidateList } from './CandidateList.jsx';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            emptyInput: true,
            logIn: false,
        };

        this.updateInputIcon = this.updateInputIcon.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    updateInputIcon(event) {
        this.setState(
            { emptyInput: (!event.target.value > 0) ? true : false, userId: event.target.value }
        )
    }

    logIn() {
        this.setState({ logIn: true, emptyInput: true })
        document.getElementById("form").reset();
    }

    logOut() {
        this.setState({ logIn: false, emptyInput: true });
    }

    render() {

        //Content of the registration panel 
        const registrationTitle = !this.state.logIn ? "Login" : "Logout";
        const registrationSubtitle = !this.state.logIn ? "Please enter your ID to access the ballot" : "Please quit if this ID is not yours";
        const logged = "logged as " + this.state.userId + " !";

        //Display Candidate list only if the user is logged and candidates information are set
        let candidates;
        (this.state.logIn) ? candidates = <CandidateList candidates={this.state.candidates} /> : candidates = <br />;

        return (
            <div className="App">

                {/*App title */}
                <div id="image" className="container zindex-modal">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Postech_Logotype.svg/2000px-Postech_Logotype.svg.png" alt="new" />                     </div>
                <div id='text' className="container zindex-modal">
                    <h1 className="my-4 text-center">
                        Blockchain-based voting platform
                </h1>
                    <hr className="bg-light" />

                    <div>


                        {/*Display candidates list if a user is logged*/}
                        {candidates}


                        <div id="registration-form" className="py-3">
                            <div>
                                <h1>{registrationTitle}</h1>
                                <p>{registrationSubtitle}</p>
                            </div>
                            <form id="form">

                                {/* Input field to log in*/}
                                <div className={this.state.logIn ? 'input-section email-section fold-up' : 'input-section email-section'}  >
                                    <input className="email" onChange={this.updateInputIcon} type="email" placeholder="ENTER YOUR ID HERE" autoComplete="off" />
                                    <div className="animated-button">
                                        <span className={this.state.emptyInput ? 'icon-paper-plane' : 'icon-paper-plane next'}>
                                            <i className="fa fa-envelope-o" />
                                        </span>
                                        <span className="next-button email" onClick={this.logIn}>
                                            <i className="fa fa-arrow-up"></i>
                                        </span>
                                    </div>
                                </div>

                                {/* Input field to log out */}
                                <div className={this.state.logIn ? "input-section password-section folded" : "input-section password-section fold-up"} >
                                    <input className="password" type="text" placeholder={logged.toUpperCase()} />
                                    <div className="animated-button">
                                        <span className="icon-cross" onClick={this.logOut} >
                                            <i className="fa fa-times"></i>
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