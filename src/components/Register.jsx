import React from 'react';
import logo from '../imgs/logo.png';
import Countdown from './Countdown.jsx';
import defaultUser from './img/default_candidate.jpeg';
import $ from 'jquery';

//Cookie for session key
import Cookies from 'universal-cookie';
const cookies = new Cookies();

//server address
const server = "http://d1.init.votty.net:7049";

//Get the voting seed
//const votingURL = new URLSearchParams(window.location.search);
//const seed = votingURL.get('seed');
const seed = "zj52rd7erd6pt9jrw21hk7yzd5m1jf32lduj19usvz2stifv4cjozcmk3ez6oco2qbt0favidmaqw37idn5bycgh00pb9yoa9z7q96l43263e1c6wxquvx2p01owxyyc9rf3i7x90kqhmmszn3dg4chixjnyigblwsbw2la7zd6ql10bduq29tguq4j4hg57l4trmpw7eaaz2zp11c1843687uc66tfs21y5r1kq5zvi8lbwhin9r2310w5a9msm";
export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            //Logging box
            userId: '',
            emptyInput: true,
            step: 1, // 1 : waiting for address mail || 2 : waiting for authentication code || 3 : waiting for logout
            authentication_code: '',
            warning : false, //Print the warning message once the user is logged

            //session key from cookie
            session_key: '',

            //popup
            popup: false,

            //Voting infos
            candidates: [],
            title: "",
            description: "",
            docType: "",
            start: "", //millisecond unix timestamp
            end: "", //millisecond unix timestamp
            permitLiveRate: "",
            participantsCount: 0,
            voteCount: 0,
            voteRate: "", //[0,1]
            result: [],

            //vote
            selected_candidate: '',
            public_key :'',
            path : ''

        };

        //Logging box
        this.updateInputIcon = this.updateInputIcon.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.setRegistrationSubtitle = this.setRegistrationSubtitle.bind(this);
        this.setRegistrationPlaceholder = this.setRegistrationPlaceholder.bind(this);
        this.setAuthenticationField = this.setAuthenticationField.bind(this);
        this.setWarning = this.setWarning.bind(this);

        //Voting information and candidates list
        this.setDate = this.setDate.bind(this);
        this.setCandidates = this.setCandidates.bind(this);

        //Vote by clicking on a candidate 
        this.vote = this.vote.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.confirmVote = this.confirmVote.bind(this);
    }

    //get the information of the current voting session
    componentDidMount() { //Trigger the request once the page is loaded
        const api = "/info?"; //call the /info function to fetch the data
        fetch(server + api + "seed=" + seed)
            .then(res => {
                return res.json() //parse result into json file
            }
            )
            .then(
                (result) => {
                    var info = result.data;
                    this.setState( //Put the information on the state
                        {
                            candidates: info.candidates,
                            title: info.title,
                            description: info.description,
                            docType: info.docType,
                            start: info.start,
                            end: info.end,
                            permitLiveRate: info.permitLiveRate,
                            participantsCount: info.ptcpCount,
                            voteCount: info.votedCount,
                            voteRate: info.rate,
                            result: info.result,
                            loaded: true
                        }
                    )
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    //Logging box
    //set the logging box subtitle depending on the step
    setRegistrationSubtitle() {
        switch (this.state.step) {
            case 1: //user hasn't filled his webmail address
                return "Please enter your ID to access the ballot";
            case 2: //User need to give the authentication code
                return "Please enter the authentication code";
            case 3: // user is logged
                return "Please quit if this ID is not yours";
            default:
                break;
        }
    }

    //set the logging placeholder depending on the step
    setRegistrationPlaceholder() {
        switch (this.state.step) {
            case 1: //user hasn't filled his webmail address
                return "ENTER HERE YOU ID";
            case 2: //User need to give the authentication code
                return "AUTHENTICATION CODE";
            default:
                break;
        }
    }

    updateInputIcon(event) { //set the userID and check if the field is empty or not
        this.setState(
            { emptyInput: (!event.target.value > 0) ? true : false}
        )
        if (this.state.step === 1){ //edit the right variable depending on the step
            this.setState({userId: event.target.value })
        }
        else {
            this.setState({authentication_code : event.target.value})
        }
    }

    setAuthenticationField(event) {
        $("#inputField").val(""); //Clean the field 
        var _this = this;

        console.log('try parameters : \n');
        console.log('mail address : ' + this.state.userId);
        console.log('seed : ' + seed);

        fetch(server + '/try', { //Request the server to receive an authentication code by email
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([
                this.state.userId,
                seed
            ])
        })
        .then(response => response.json())
        .then(function(response){

            //Put the session key in the cookies and in the state
            var session_key = JSON.parse(response);
            console.log("response from try request : \n");
            console.log("authentication code : " + session_key.answer)
            console.log("session key : " + session_key.session)
            cookies.set('session_key',session_key.session);
            _this.setState({ session_key : session_key.session });
        })
        
        //Put this in the callback of the fetch
        this.setState({ step: 2, emptyInput: true });
    }

    logIn(e) {

        var _this = this;

        //Set the authentication code variable with the value filled in
        this.setState({ step: 3, emptyInput: true, authentication_code: e.target.value, warning: true })
        console.log("Verify parameters : \n")
        console.log("mail : " + this.state.userId);
        console.log("seed : " + seed);
        console.log("authentication code : " + this.state.authentication_code);
        console.log("session key : " + this.state.session_key);

        fetch(server + '/verify', { //Send a request to verify the authentication code and the session key 
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([
                this.state.userId,
                seed,
                this.state.authentication_code,
                this.state.session_key
            ])
        })
            .then(response => response.json())
            .then((response) => { //callback function to get the public key which is used to send the vote
                var res = JSON.parse(response);
                var path = res.path;
                var key = res.key;
                _this.setState({public_key : key, path : path});
                console.log("answer from request : ");
                console.log("path : " + path);
                console.log("key : " + key);
            })
        document.getElementById("form").reset();
    }

    setWarning() {
        this.setState((prevState) => {
            if (this.state.warning) {
                return { warning: false }
            }
            else {
                return { warning: true };
            }
        })
    }

    logOut() {
        this.setState({ step: 1, emptyInput: true, authentication_code: '' });
    }

    //Set voting information 

    //Set candidates list 
    setCandidates() {
        var html = [];
        var candidates = this.state.candidates;
        candidates.forEach(candidate => {
            const id = candidate.id
            var currentCandidate = [];
            var img = [];
            var name = [];
            var desc = [];
            var img_load = "data:image/png;base64, " + candidate.media;
    

            //set name
            name.push(<h2 key={candidate.id} className="text-uppercase my-1 font-weight-light ">{candidate.name} ({this.state.result[id]})</h2>);

            //set img
            if (candidate.media === "") {
                img.push(<figure key={candidate.id} id={candidate.id} className="snip1566" onClick={this.vote} ><img key={candidate.id} src={defaultUser} alt="sq-sample14" /><figcaption><i className="ion-checkmark"></i>{/*<a href="#"></a>*/}</figcaption></figure>);
            }
            else {
                img.push(<figure key={candidate.id} id={candidate.id} className="snip1566" onClick={this.vote}><img key={candidate.id} src={img_load} alt="sq-sample14" /><figcaption><i className="ion-checkmark"></i>{/*<a href="#"></a>*/}</figcaption></figure>);
            }

            //set description
            desc.push(<p key={candidate.id} className=" my-1 font-weight-light ">{candidate.short}</p>)

            currentCandidate.push(<div key={candidate.id} className="col text-center candidate mb-4 px-5">{name}{img}{desc}</div>);

            //add candidate to candidates
            html.push(currentCandidate);
        });
        return html;
    }

    //Set date to display starting and ending day
    setDate() {
        var date = new Date(this.state.end);
        var year = date.getFullYear();
        var month = this.addLeadingZeros(date.getMonth() + 1);
        var day = this.addLeadingZeros(date.getDate());
        var hours = this.addLeadingZeros(date.getHours());
        var min = this.addLeadingZeros(date.getMinutes());
        var sec = this.addLeadingZeros(date.getSeconds());
        var iso = year + "-" + month + "-" + day + "T" + hours + ":" + min + ":" + sec;
        return iso;
    }

    //Used to set date format 
    addLeadingZeros(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }

    setDateFormat(date) {
        //Set date format MM/DD
        var options = { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timezone: 'Asia/Seoul' };
        const dateFormat = new Intl.DateTimeFormat('en-US', options);
        return dateFormat.format(date);
    }

    //Vote for a candidate
    vote(e) {
        var candidate_id = $(e.target).closest("figure").attr("id");
        e.preventDefault();
        $("#text").addClass('blur-in');
        $("#image").addClass('blur-in');
        $("#fork").addClass('blur-in');

        this.setState({ popup: true, selected_candidate: candidate_id });
    }

    //close popup
    closePopup() {
        $("#text").removeClass('blur-in');
        $("#image").removeClass('blur-in');
        $("#fork").removeClass('blur-in');
        this.setState({ popup: false });
    }

    //confirm the vote 
    confirmVote() {
        console.log("request parameters : ");
        console.log("path : " + this.state.path );
        console.log("public key : " + this.state.public_key );
        console.log("seed : " + seed );
        console.log("selected candidate : " + this.state.selected_candidate );
        fetch(server + '/vote', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([
                this.state.path,
                this.state.public_key,
                seed,
                this.state.selected_candidate
            ])
        })
            .then(response => response.json())
            .then(response => console.log(response));

        this.closePopup();
    }

    render() {

        //Content of the logging box
        const registrationTitle = (this.state.step === 3) ? "Logout" : "Login";
        const registrationSubtitle = this.setRegistrationSubtitle();
        const registrationPlaceholder = this.setRegistrationPlaceholder();
        const logged = "logged as " + this.state.userId + " !";

        //login or wait for authentication code
        const next = (this.state.step === 1) ? this.setAuthenticationField : this.logIn;

        //Display Candidate list and voting information only if the user is logged
        let candidates;
        (this.state.step === 3) ? candidates = this.setCandidates() : candidates = <br />;

        //set countdown
        var now = new Date();
        var countdown = (this.state.end !== "" && now < this.state.end) ? <Countdown date={this.setDate()} /> : <br />;

        return (
            <div className="App">

                {/*Link to Github*/}
                <div id="fork">
                    <a href="https://github.com/Votty/" target="_Blank" rel="noopener noreferrer">
                        <img src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt="Fork me on GitHub" />
                    </a>
                </div>

                {/* Div which contains the popup to display when the user want confirm his vote */}
                <div className={this.state.popup ? 'pop-up' : 'd-none'} >
                    <div id="popup" className="box ">
                        <button onClick={this.closePopup} href="#" className="close-button">
                            <i className="fa fa-times"></i>
                        </button>
                        <p>Are you sure to vote for this candidate?</p>
                        <button className="button" onClick={this.confirmVote}>Vote</button>
                    </div>
                </div>


                {/** title */}
                <div id="image" className="container zindex-modal">
                    <img src={logo} alt="new" />
                </div>

                {/** Text */}
                <div id='text' className="container zindex-modal">

                    {/** Subtitle*/}
                    <h1 className="my-4 text-center">
                        Hyperledger voting
                    </h1>
                    <hr className="bg-light" />

                    <h2>
                        Take a look at a interactive demo on Hyperledger Voting that you can set up yourself
                    </h2>

                    {/*Notification displayed when a  user is logged*/}
                    <div className={(this.state.warning) ? "alert alert-primary" : "d-none"} style={{backgroundColor :'ghostwhite'}} role="alert">
                        <button type="button" onClick={this.setWarning} className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <strong>Warning!</strong> Once your browser is closed, you can't access the voting <br />
                    </div>

                    {/*Display voting information and candidates list if a user is logged*/}
                    <div id="votingpage" className={(this.state.step === 3) ? '' : 'd-none'}>

                        {/*Voting information*/}
                        <h1 className="text-center">{this.state.title}</h1>
                        <p className="text-center">{this.state.description}</p>
                        <p className="text-center">{this.setDateFormat(this.state.start)} - {this.setDateFormat(this.state.end)}</p>
                        <div className="text-center">{countdown}</div>
                        <p className="text-center">Vote rate : {this.state.voteRate}</p>
                        <p className="text-center">Number of participant : {this.state.participantsCount}</p>
                        <p className="text-center">Votes count : {this.state.voteCount}</p>

                        {/*Candidate list*/}
                        <div id='canditatelist' className="candidates-list">
                            <div className="loadContent">
                                <div className="container">
                                    <div className="row">
                                        {candidates}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/** Logging Box */}
                    <div id="registration-form" className= {this.state.step === 3? "d-none" : "py-3"}>
                        <div>
                            <h1>{registrationTitle}</h1>
                            <p>{registrationSubtitle}</p>
                        </div>
                        <form id="form">

                            {/* Input field to log in*/}
                            <div className={(this.state.step === 3) ? 'input-section email-section fold-up' : 'input-section email-section'}  >
                                <input id="inputField" className="email" onChange={this.updateInputIcon} type="text" placeholder={registrationPlaceholder} autoComplete="off" />
                                <div className="animated-button">
                                    <span className={this.state.emptyInput ? 'icon-paper-plane' : 'icon-paper-plane next'}>
                                        <i className="fa fa-envelope-o" />
                                    </span>
                                    {/** Depending on the value of state.step, next will either login or set the field for authentication code*/}
                                    <span className="next-button email" onClick={next}>
                                        <i className="fa fa-arrow-up"></i>
                                    </span>
                                </div>
                            </div>

                            {/* Input field to log out */}
                            <div className={(this.state.step === 3) ? "input-section password-section folded" : "input-section password-section fold-up"} >
                                <input className="password" type="text" placeholder={logged.toUpperCase()} />
                                <div className="animated-button">
                                    <span onClick={this.logOut} >
                                        <i className="fa fa-times"></i>
                                    </span>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}