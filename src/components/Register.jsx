import React from 'react';
import {CandidateList} from './CandidateList.jsx';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '', //user id 'email'
            session: localStorage.getItem('session'), // if logged this will contail the userId email
            voted: localStorage.getItem('voted'), // user voted or not
            votedFor: localStorage.getItem('votedFor'), // candidate voted for
            loaded: true,
            emptyInput: true,
            isHovered: false,
            clickOnMail : false,
            accountCreated : false,
            loadCandidateList : false,
            isDone : false,
        };

        this.updateInputIcon = this.updateInputIcon.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.clickOnMail = this.clickOnMail.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    updateInputIcon(event) {
        this.setState(
            {emptyInput: (!event.target.value > 0) ? true : false,userId:event.target.value}
        )
    }

    handleHover(){
        this.setState(prevState => ({isHovered: !prevState.isHovered}))
    }

    clickOnMail(event){
        this.setState({clickOnMail:true,accountCreated:true,loadCandidateList:true,emptyInput:true})
        document.getElementById("form").reset();
    }

    logOut(){
        this.setState({clickOnMail:false,accountCreated:false,loadCandidateList:false,emptyInput:true});
    }

    render() {
        const text1 = !this.state.clickOnMail ? "Login" : "Logout";
        const text2 = !this.state.clickOnMail ? "Please enter your ID to access the ballot" : "Please quit if this ID is not yours";
        const logged = "logged as " + this.state.userId + " !";
        const btnStyle = this.state.isHovered ? {cursor: 'pointer'} : {};
        const candidatesLoaded = this.state.loadCandidateList;
        let candidates;
        if (candidatesLoaded){
            candidates = <CandidateList />;
        }
        else{
            candidates = <br/>
        }

        if(this.state.session){ 

        }
        else {//No previous user
            return (
                <div>
                    <div id="registration-form" className="py-3">
                        <div>
                            <h1>{text1}</h1>
                            <p>{text2}</p>
                        </div>
                        <form id="form">
                            <div className={this.state.clickOnMail ? 'input-section email-section fold-up' : 'input-section email-section'}  >
                                <input className="email" onChange={this.updateInputIcon} type="email" placeholder="ENTER YOUR ID HERE" autoComplete="off"/>
                                <div className="animated-button">
                                    <span className={this.state.emptyInput ? 'icon-paper-plane': 'icon-paper-plane next'}>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    <span className="next-button email" style={btnStyle} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={this.clickOnMail}>
                                        <i className="fa fa-arrow-up"></i>
                                    </span>
                                </div>
                            </div>
                            <div className={this.state.clickOnMail ? "input-section password-section folded" : "input-section password-section fold-up" } >
                                <input className="password" type="text" placeholder={logged.toUpperCase()}/>
                                <div className="animated-button">
                                    <span className="icon-cross" onClick={this.logOut} >
                                        <i className="fa fa-times"></i>
                                    </span>
                                </div>
                            </div>

                        </form>
                    </div>              
                {candidates}
                </div>                
            );
        }
    }
}
