import React from 'react';
import Countdown from './Countdown.jsx';
import defaultUser from './img/default_candidate.jpeg';
import $ from 'jquery';
//const server = "http://d1.init.votty.net:7049";


export class CandidateList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //popup
            popup: false,

            //Voting infos
            candidates: [],
            title: "",
            description: "",
            docType: "",
            start: "", //millisecond unix timestamp
            end: "",
            permitLiveRate: "",
            participantsCount: 0,
            voteCount: 0,
            voteRate: "", //[0,1]
            result: []
        }

        this.setDate = this.setDate.bind(this);
        this.setCandidates = this.setCandidates.bind(this);
        this.vote = this.vote.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    //call the info API
    /*componentDidMount() {
        const api = "/info?";
        const votingId = "4096b633cad5224ee7d553af2b2300";
        fetch(server + api + "seed=" + votingId)
            .then(res => {
                return res.json()
            }
            )
            .then(
                (result) => {
                    var info = result.data;
                    console.log(info);
                    this.setState(
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
    }*/

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
                img.push(<div key={candidate.id} className="img-block mt-2 mb-2"><i className="fa fa-user" /></div>);
            }
            else {
                img.push(<div key={candidate.id} className="img-block mt-2 mb-2"><img src={candidate.media} alt="#" /></div>);
            }

            //set description
            desc.push(<p key={candidate.id} className=" my-1 font-weight-light ">{candidate.short}</p>)

            currentCandidate.push(<div key={candidate.id} className="col text-center candidate mb-4 px-5">{name}{img}{desc}</div>);

            //add candidate to candidates
            html.push(currentCandidate);
        });
        return html;
    }

    //Used to set date format 
    addLeadingZeros(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }

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

    setDateFormat(date) {
        //Set date format MM/DD
        var options = { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timezone: 'Asia/Seoul' };
        const dateFormat = new Intl.DateTimeFormat('en-US', options);
        return dateFormat.format(date);
    }


    //Vote for a candidate
    vote(e) {
        e.preventDefault();
        $("#text").addClass('blur-in');
        $(".pop-up").removeClass('d-none');
        this.setState({ popup: true })
    }

    //close popup
    closePopup() {
        $("#text").removeClass('blur-in');        
        $(".pop-up").addClass('d-none');        
        this.setState({ popup: false });
    }

    render() {
        //Set candidates list
        var candidates = this.setCandidates();

        //set countdown
        var now = new Date();
        var countdown = (this.state.end !== "" && now < this.state.end) ? <Countdown date={this.setDate()} /> : <br />;

        return (
            <div>


                {/*Voting information*/}
                <h1 className="text-center">{this.state.title}</h1>
                <p className="text-center">{this.state.description}</p>
                <p className="text-center">{this.setDateFormat(this.state.start)} - {this.setDateFormat(this.state.end)}</p>
                <div className="text-center">{countdown}</div>
                <p className="text-center">Vote rate : {this.state.voteRate}</p>
                <p className="text-center">Number of participant : {this.state.participantsCount}</p>
                <p className="text-center">Votes count : {this.state.voteCount}</p>

                {/*Candidate list*/}
                <div className="candidates-list">
                    <div className="loadContent">
                        <div className="container">
                            <div className="row">
                                {candidates}
                                <div className="col text-center candidate mb-4 px-5">
                                    <h2 className="text-uppercase my-1 font-weight-light ">Madis (5)</h2>
                                    <figure className="snip1566" onClick={this.vote}>
                                        <img src={defaultUser} alt="sq-sample14" />
                                        <figcaption><i className="ion-checkmark"></i></figcaption>
                                        <a href="#"></a>
                                    </figure>
                                    <p className=" my-1 font-weight-light ">Here is a short description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
