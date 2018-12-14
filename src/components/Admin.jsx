import React from 'react';
import TimePicker from 'react-bootstrap-time-picker';
import Countdown from './Countdown.jsx';
import defaultUser from './img/default_candidate.jpeg';
import logo from '../imgs/logo.png';
import $ from 'jquery';

//server address
const server = "http://d1.init.votty.net:7049";

//Get the voting seed
//const votingURL = new URLSearchParams(window.location.search);
//const seed = votingURL.get('seed');
const seed = "i6dzmdi6z17gt788xy5rniib19ss1batf53k85tg0os3n9g1droyw6e9y12pltdfvwa4w1r4b37sqtd38gwj31zi6crbpp14u3a3izdw3x7grl5sduu43fw1ysivnhwftmy2gndw6nyq18v2nv7jvn13gd3w30kbfrulk3szvf60najo0e17cipoz83wl97bxzjtf2g0m0wtbcnpq8ls27qx838multpb4x00avd71ddzkwauye10d6koy14he71";

$(document).ready(function(){
    var file = $("#image");
    var reader = new FileReader(file[0]);
    console.log(file);
    reader.onload = function(){
        console.log(reader.result);
    }
})

export class Admin extends React.Component {

    constructor(props) {

        //used to set the starting day
        const today = new Date(Date.now());
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        super(props);
        this.state = {

            //selection : choose between create or manage a voting
            mode: "selection", // create a voting || manage an existing voting

            //current step in the voting creation 
            step: 1,

            //Step 1 
            title: '',
            description: '',
            startingDay: date,
            endingDay: date,
            endTime: 36000,
            startTime: 36000,

            //Step 2
            voters: [],
            new_voter: '',

            //Step 3
            candidates: [],

            //popup for candidate creation
            popup: false,
            newCandidate_description: '',
            newCandidate_image: '',
            newCandidate_name: '',

            //notify the user when the voting has been created
            success: false,
            participation_link: '',

            //Voting infos
            voting_title: "",
            voting_description: "",
            docType: "",
            start: "", //millisecond unix timestamp
            end: "", //millisecond unix timestamp
            permitLiveRate: "",
            participantsCount: 0,
            voteCount: 0,
            voteRate: "", //[0,1]
            result: [],
        };

        //Set the mode and the step
        this.setMode = this.setMode.bind(this);
        this.setStep = this.setStep.bind(this);

        //Set state in step 1
        this.setTitle = this.setTitle.bind(this);
        this.setDesc = this.setDesc.bind(this);
        this.setStartingDay = this.setStartingDay.bind(this);
        this.setEndingDay = this.setEndingDay.bind(this);
        this.setStartTime = this.setStartTime.bind(this);
        this.setEndTime = this.setEndTime.bind(this);

        //Manage candidates
        this.createNewCandidate = this.createNewCandidate.bind(this); //create a new candidate 
        this.addNewCandidate = this.addNewCandidate.bind(this); //add a new candidate to the candidates list
        this.removeCandidate = this.removeCandidate.bind(this); //delete a candidate

        //Manager voters
        this.setNewVoter = this.setNewVoter.bind(this); //set new_voter with input field value
        this.removeVoter = this.removeVoter.bind(this); //delete a voter 
        this.createNewVoter = this.createNewVoter.bind(this); //add a new voter to the voter list 

        //Set state in candidate form
        this.setDescription = this.setDescription.bind(this);
        this.setName = this.setName.bind(this);
        this.setImage = this.setImage.bind(this);
        this.closePopup = this.closePopup.bind(this);

        //set state once the creation is over
        this.finishCreation = this.finishCreation.bind(this);
        this.setSuccess = this.setSuccess.bind(this);

        //State reset methods
        this.reset = this.reset.bind(this); //reset everything
        this.resetForm = this.resetForm.bind(this); //reset the creation form
        this.resetCandidateForm = this.resetCandidateForm.bind(this); //reset the candidate form 
        this.resetStep3 = this.resetStep3.bind(this); //reset Step 2
        this.resetStep1 = this.resetStep1.bind(this); //reset Step 1

        //Voting information and candidates list
        this.setDate = this.setDate.bind(this);
        this.setCandidates = this.setCandidates.bind(this);
        this.getVotingInfo = this.getVotingInfo.bind(this);

    }

    setMode(e) {
        this.setState({ mode: e.target.value });
    }

    setStep(e) {
        this.setState((prevState) => {
            return { step: prevState.step + 1 % 3 };
        })
    }

    //step 1 methods

    setTitle(e) {
        this.setState({ title: e.target.value });
    }

    setDesc(e) {
        this.setState({ description: e.target.value });
    }

    setStartTime(time) {
        this.setState({ startTime: time });
    }

    setEndTime(time) {
        this.setState({ endTime: time });
    }

    setEndingDay(e) {
        this.setState({ endingDay: e.target.value });
    }

    setStartingDay(e) {
        this.setState({ startingDay: e.target.value });
    }

    //Step 2 methods

    createNewVoter(e) {
        e.preventDefault();
        let temp = this.state.voters.slice();
        var newVoter = this.state.new_voter;
        temp.push(newVoter);
        this.setState({ voters: temp });

    }

    removeVoter(index) {
        let temp = this.state.voters.slice();
        temp.splice(index, 1);
        this.setState({ voters: temp });
    }

    setNewVoter(e) {
        this.setState({ new_voter: e.target.value });
    }

    //step 3 methods

    createNewCandidate(e) {
        e.preventDefault();
        this.setState({ popup: true })
    }

    removeCandidate(index) {
        let temp = this.state.candidates.slice();
        temp.splice(index, 1);
        this.setState({ candidates: temp });
    }

    //Methods in candidate form

    setName(e) {
        this.setState({ newCandidate_name: e.target.value });
    }

    setImage(e) {
        console.log(e.target);
        this.setState({ newCandidate_image: e.target.value });
    }

    setDescription(e) {
        this.setState({ newCandidate_description: e.target.value });
    }

    closePopup() {
        this.setState({ popup: false });
    }

    addNewCandidate(e) {
        e.preventDefault();
        let temp = this.state.candidates.slice();
        console.log(temp);
        var newCandidate = '["' + this.state.newCandidate_name + '","' + this.state.newCandidate_description + '","' + this.state.newCandidate_image + '"]';
        newCandidate = newCandidate.replace(/\\/g, '\\\\');
        newCandidate = JSON.parse(newCandidate);
        temp.push(newCandidate);
        this.setState({ candidates: temp });
        this.resetCandidateForm();
        this.closePopup();
    }

    //Methods once the creation is over

    finishCreation() {
        this.reset();
        var startingDay = new Date(this.state.startingDay).getTime();
        var endingDay = new Date(this.state.endingDay).getTime();
        var startTime = this.state.startTime;
        var endTime = this.state.endTime;

        console.log('parameters for create : \n');
        console.log('title : ' + this.state.title);
        console.log('description : ' + this.state.description);
        console.log('starting timestamp (ms) : ' + startingDay + startTime);
        console.log('ending timestamp (ms) : ' + endingDay + endTime);
        console.log('candidates : ' + this.state.candidates);
        console.log('voters : ' + this.state.voters);

        fetch(server + '/create', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([
                this.state.title,
                this.state.description,
                startingDay + startTime,
                endingDay + endTime,
                this.state.candidates,
                this.state.voters
            ])
        })
            .then(response => response.json())
            .then((res) => { //callback function to get seed
                this.setState({ participation_link: res })
            })

        this.setSuccess();
    }

    setSuccess() {
        this.setState((prevState) => {
            if (this.state.success) {
                return { success: false }
            }
            else {
                return { success: true };
            }
        })
    }

    //reset methods

    reset() {
        this.resetForm();
        this.setState({ mode: "selection" });
    }

    resetForm() {
        this.resetStep3();
        this.resetStep2();
        this.resetStep1();
        this.setState({ step: 1 })
    }

    resetStep1() {
        //used to set the starting day
        const today = new Date(Date.now());
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.setState({ startingDay: date, endingDay: date, endTime: 36000, startTime: 36000, title: 'Title' });
    }

    resetStep2() {
        this.setState({ voters: [], new_voter: 'Enter new voter mail address' });
    }

    resetStep3() {
        this.resetCandidateForm();
        this.setState({ candidates: [] });
    }

    resetCandidateForm() {
        this.setState({ popup: false, newCandidate_description: "Enter here a short description...", newCandidate_image: '', newCandidate_name: 'Name' });
    }

    //For the Manage section

    //get the information of the current voting session
    getVotingInfo() { //Trigger the request once the page is loaded
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
                            voting_title: info.title,
                            voting_description: info.description,
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

    //Set candidates list 
    setCandidates() {
        var html = [];
        var candidates = this.state.candidates;
        candidates.forEach(candidate => {
            const id = candidate.id;
            var currentCandidate = [];
            var img = [];
            var name = [];
            var desc = [];

            //set name
            name.push(<h2 key={candidate.id} className="text-uppercase my-1 font-weight-light ">{candidate.name} ({this.state.result[id]})</h2>);

            //set img
            if (candidate.media === "") {
                img.push(<figure key={candidate.id} id={candidate.id} className="snip1566"  ><img src={defaultUser} alt="sq-sample14" /><figcaption><i className="ion-checkmark"></i>{/*<a href="#"></a>*/}</figcaption></figure>);
            }
            else {
                img.push(<figure key={candidate.id} id={candidate.id} className="snip1566" ><img src={candidate.media} alt="sq-sample14" /><figcaption><i className="ion-checkmark"></i>{/*<a href="#"></a>*/}</figcaption></figure>);
            }

            //set description
            desc.push(<p key={candidate.id} className=" my-1 font-weight-light ">{candidate.short}</p>)

            currentCandidate.push(<div key={candidate.id} className="col text-center candidate mb-4 px-5">{name}{img}{desc}</div>);

            //add candidate to candidates
            html.push(currentCandidate);
        });
        return html;
    }


    render() {

        //Display Candidate list and voting information only if the user is logged
        let candidates = this.setCandidates();

        //set countdown
        var now = new Date();
        var countdown = (this.state.end !== "" && now < this.state.end) ? <Countdown date={this.setDate()} /> : <br />;

        switch (this.state.mode) {

            //Display buttons so that the admin can either choose to create a new voting or manage an existing one
            case "selection":
                return (
                    <div className="App">
                        <div id="image" className="container zindex-modal">
                            <img src={logo} alt="new" />
                        </div>

                        <div id='text' className="container zindex-modal">
                            <a href="/admin" style={{ textDecoration: "none" }} onClick={this.reset}>

                                <h1 className="my-4 text-center">
                                    Blockchain-based voting platform
                </h1>
                            </a>
                            <hr className="bg-light" />



                            {/*Notification displayed when a voting is created*/}
                            <div className={this.state.success ? "alert alert-success" : "d-none"} role="alert">
                                <button type="button" onClick={this.setSuccess} className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <strong>Success!</strong> Your voting has been created ! Here is the participation link : <br /> {this.state.participation_link}
                            </div>

                            {/*Buttons to select the mode*/}
                            <div id="Selection" className='container'>
                                <button value="create" className="btn-3" onClick={this.setMode}>Create a ballot</button>
                                <button value="manage" className="btn-3" onClick={this.setMode}>Manage your ballot</button>
                            </div>
                        </div>
                    </div>
                );

            //Display the form to create a new voting
            case "create":
                return (
                    <div className="App">

                        {/* Div which contains the popup to display when the user want to create a new candidate */}
                        <div className={(this.state.popup) ? "pop-up " : "d-none"} >

                            {/* Form for voting creation */}
                            <div id="popup" className="box ">
                                <button onClick={this.closePopup} href="#" className="close-button">
                                    <i className="fa fa-times"></i>
                                </button>
                                <h3>New candidate</h3>
                                <form >
                                    <fieldset className="section is-active">
                                        <input type="text" name="Name" id="Name" placeholder="Name" value={this.state.newCandidate_name} onChange={this.setName} />
                                        <textarea name="Description" cols="40" rows="5" placeholder="Enter here a short description..." value={this.state.newCandidate_description} onChange={this.setDescription}></textarea>
                                        <div className="custom-file-upload">
                                            <input type="file" id="image" name="image" value={this.state.newCandidate_image} onChange={this.setImage} />
                                        </div>
                                    </fieldset>
                                </form>
                                <button className="button" onClick={this.addNewCandidate}>Create candidate</button>
                            </div>

                        </div>

                        <div id="image" className="container zindex-modal"> <img src={logo} alt="null" />
                        </div>
                        {/* Form for voting creation */
                        /* First div is used to blur the whole screen when the candaidate creation pop-up is displayed */}
                        <div id="text" className={(this.state.popup ? "blur-in container zindex-modal" : " container zindex-modal")}>

                            {/* Application Header */}
                            <a href="/admin" style={{ textDecoration: "none" }} onClick={this.reset}>

                                <h1 className="my-4 text-center">
                                    Blockchain-based voting platform
                </h1>
                            </a>
                            <hr className="bg-light" />

                            {/* Form for voting creation */}
                            <div className="container container-form">
                                <div className="wrapper">


                                    {/* Voting creation is split into two steps */
                                    /* Step 1 : Voting informations */
                                    /* Step 2 : Candidates informations */}
                                    <ul className="steps">
                                        <li className={(this.state.step === 1) ? "is-active" : ""}>Step 1</li>
                                        <li className={(this.state.step === 2) ? "is-active" : ""}>Step 2</li>
                                        <li className={(this.state.step === 3) ? "is-active" : ""}>Step 3</li>
                                    </ul>

                                    <form className="form-wrapper">

                                        {/* Step 1 */}
                                        <fieldset className={(this.state.step === 1) ? "section is-active" : "section"}>
                                            <h3>Details</h3>
                                            <input type="text" name="title" id="title" placeholder="Title" value={this.state.title} onChange={this.setTitle} />
                                            <textarea name="description" value={this.state.description} placeholder="Description" onChange={this.setDesc} cols="40" rows="5"></textarea>
                                            <input type="date" name="start" id="start" value={this.state.startingDay} min={this.state.startingDay} onChange={this.setStartingDay} />
                                            <TimePicker start="10:00" end="21:00" value={this.state.startTime} step={30} onChange={this.setStartTime} />
                                            <input type="date" name="end" id="end" value={this.state.endingDay} min={this.state.endingDay} onChange={this.setEndingDay} />
                                            <TimePicker start="10:00" end="21:00" value={this.state.endTime} step={30} onChange={this.setEndTime} />
                                            <div className="button" onClick={this.setStep}>Next</div>
                                        </fieldset>

                                        {/* Step 2 */}
                                        <fieldset className={(this.state.step === 2) ? "section is-active" : "section"}>
                                            <h3>Voters</h3>
                                            <input type="text" name="newVoter" id="newVoter" placeholder="Enter new voter mail address" value={this.state.new_voter} onChange={this.setNewVoter} />
                                            <button onClick={this.createNewVoter}>+</button>
                                            <table id="voterList">
                                                <tbody>
                                                    {this.state.voters.map((voter, index) =>
                                                        <tr key={index}>
                                                            <td>{index}. </td>
                                                            <td>{voter}</td>
                                                            <td><button onClick={() => this.removeVoter(index)}><i className="fa fa-minus"></i></button></td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                            <div className="reset" onClick={this.resetForm}>Reset Form</div>
                                            <div className="button" onClick={this.setStep}>Next</div>
                                        </fieldset>

                                        {/* Step 3 */}
                                        <fieldset className={(this.state.step === 3) ? "section is-active" : "section"}>
                                            <table id="candidateList">
                                                <tbody>
                                                    {this.state.candidates.map((candidate, index) =>
                                                        <tr key={index}>
                                                            <td>{index}. </td>
                                                            <td>{candidate[0]}</td>
                                                            <td><button onClick={() => this.removeCandidate(index)}><i className="fa fa-minus"></i></button></td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                            <button onClick={this.createNewCandidate} className="add-candidate">+</button>
                                            <div className="reset" onClick={this.resetForm}>Reset Form</div>
                                            <div className="button" onClick={this.finishCreation}>Create</div>
                                        </fieldset>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "manage":
                this.getVotingInfo();
                return (
                    <div className="App">
                        <div id="image" className="container zindex-modal">
                            <img src={logo} alt="new" />
                        </div>

                        <div id='text' className="container zindex-modal">
                            <a href="/admin" style={{ textDecoration: "none" }} onClick={this.reset}>

                                {/** Subtitle */}
                                <h1 className="my-4 text-center">
                                    Hyperledger voting
                                </h1>
                            </a>
                            <hr className="bg-light" />

                            <h2>
                                Take a look at a interactive demo on Hyperledger Voting that you can set up yourself
                            </h2>

                        </div>
                        <br />
                        <br />
                        <div id="votingpage">
                            {/*Voting information*/}
                            <h1 className="text-center">{this.state.voting_title}</h1>
                            <p className="text-center">{this.state.voting_description}</p>
                            <p className="text-center">{this.setDateFormat(this.state.start)} - {this.setDateFormat(this.state.end)}</p>
                            <div className="text-center">{countdown}</div>
                            <p className="text-center">Vote rate : {this.state.voteRate}</p>
                            <p className="text-center">Number of participant : {this.state.participantsCount}</p>
                            <p className="text-center">Votes count : {this.state.voteCount}</p>

                            <div id='canditatelist' className="candidates-list"></div>
                            <div className="loadContent">
                                <div className="container">
                                    <div className="row">
                                        {candidates}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (<div>null</div>);
        }

    }
}
