import React from 'react';
import { CandidateList } from './CandidateList.jsx';
import logo from '../imgs/Selection_009.png';

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
            <div id="fork"><a href="https://github.com/Votty/" target="_Blank">
<img src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub"/> </a></div>
                {/*App title */}
                <div id="image" className="container zindex-modal">
                    <img src={logo} alt="new" />                     </div>
                <div id='text' className="container zindex-modal">
                    <h1 className="my-4 text-center">
                        Hyperledger voting
                </h1>
                    <hr className="bg-light" />
                    <h2> Take a look at a interactive demo on Hyperledger Voting that you can 
                    set up yourself</h2>

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
<footer id="footer" className="my-4 text-center" >
        <ul class="icons" >
          
          
          <li><a href="https://github.com/Votty/home" class="icon fa-github"><span class="label">GitHub</span></a></li>
          <li><a href="mailto:support@votty.net" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
        </ul>
        <ul class="copyright">
          <li>&copy; Creative Commons</li><li>Votty</li>
        </ul>
      </footer>
                    </div>
                </div>
            </div>
        );
    }
}