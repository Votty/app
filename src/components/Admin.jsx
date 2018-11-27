import React from 'react';
import TimePicker from 'react-bootstrap-time-picker';

export class Admin extends React.Component {

    constructor(props) {

        //used to set the starting day
        const today = new Date(Date.now());
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        super(props);
        this.state = {

            //selection : choose between create or manage a voting
            // create : creation mode
            // manage : manage mode
            mode: "selection",

            //current step in the voting creation 
            step: 1,

            //Step 1 
            title: 'Title',
            startingDay: date,
            endingDay: date,
            endTime: 36000,
            startTime: 36000,

            //Step 2
            candidates: [],

            //popup for candidate creation
            popup: false,
            newCandidate_description: 'Enter here a short description...',
            newCandidate_image: '',
            newCandidate_name: 'Name',

            //notify the user when the voting has been created
            success: false
        };

        //Set the mode and the step
        this.setMode = this.setMode.bind(this);
        this.setStep = this.setStep.bind(this);

        //Set state in step 1
        this.setTitle = this.setTitle.bind(this);
        this.setStartingDay = this.setStartingDay.bind(this);
        this.setEndingDay = this.setEndingDay.bind(this);
        this.setStartTime = this.setStartTime.bind(this);
        this.setEndTime = this.setEndTime.bind(this);

        //Manage candidates
        this.createNewCandidate = this.createNewCandidate.bind(this); //create a new candidate 
        this.addNewCandidate = this.addNewCandidate.bind(this); //add a new candidate to the candidates list
        this.removeCandidate = this.removeCandidate.bind(this); //delete a candidate

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
        this.resetStep2 = this.resetStep2.bind(this); //reset Step 2
        this.resetStep1 = this.resetStep1.bind(this); //reset Step 1
    }

    setMode(e) {
        this.setState({ mode: e.target.value });
    }

    setStep(e) {
        this.setState((prevState) => {
            if (prevState.step === 1) {
                return { step: 2 };
            }
            else {
                return { step: 1 };
            }
        })
    }

    //step 1 methods

    setTitle(e) {
        this.setState({ title: e.target.value });
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

    //step 2 methods

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
        var newCandidate = '{"name": "' + this.state.newCandidate_name + '", "description": "' + this.state.newCandidate_description + '", "image" :"' + this.state.newCandidate_image + '"}';
        var newCandidate = newCandidate.replace(/\\/g, '\\\\');
        temp.push(JSON.parse(newCandidate));
        this.setState({ candidates: temp });
        this.resetCandidateForm();
        this.closePopup();
    }

    //Methods once the creation is over

    finishCreation() {
        this.reset();
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
        this.resetStep2();
        this.resetStep2();
        this.setState({ step: 1 })
    }

    resetStep1() {
        //used to set the starting day
        const today = new Date(Date.now());
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.setState({ startingDay: date, endingDay: date, endTime: 36000, startTime: 36000, title: 'Title' });
    }

    resetStep2() {
        this.resetCandidateForm();
        this.setState({ candidates: [] });
    }

    resetCandidateForm() {
        this.setState({ popup: false, newCandidate_description: "Enter here a short description...", newCandidate_image: '', newCandidate_name: 'Name' });
    }

    render() {

        switch (this.state.mode) {

            //Display buttons so that the admin can either choose to create a new voting or manage an existing one
            case "selection":
                return (
                    <div className="App">
                    <div id= "image" className="container zindex-modal"> <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Postech_Logotype.svg/2000px-Postech_Logotype.svg.png"
      alt="new" 
      />                     </div>


      <div id='text' className="container zindex-modal">
             <a href="#" style={{ textDecoration: "none" }} onClick={this.reset}>
 
                    <h1 className="my-4 text-center">
                        Blockchain-based voting platform
                </h1>
                </a>
                    <hr className="bg-light" />

                            

                            {/*Notification displayed when a voting is created*/}
                            <div className={this.state.success ? "alert alert-success" : "d-none"} role="alert">
                                <button type="button" onClick={this.setSuccess} className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <strong>Success!</strong> Your voting has been created !
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
                                        <input type="text" name="Name" id="Name" value={this.state.newCandidate_name} onChange={this.setName} />
                                        <textarea name="Description" cols="40" rows="5" value={this.state.newCandidate_description} onChange={this.setDescription}></textarea>
                                        <div className="custom-file-upload">
                                            <input type="file" id="image" name="image" value={this.state.newCandidate_image} onChange={this.setImage} />
                                        </div>
                                    </fieldset>
                                </form>
                                <button className="button" onClick={this.addNewCandidate}>Create candidate</button>
                            </div>

                        </div>
             <div id= "image" className="container zindex-modal"> <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Postech_Logotype.svg/2000px-Postech_Logotype.svg.png"
      alt="new" 
      />                     </div>
                        {/* Form for voting creation */
                        /* First div is used to blur the whole screen when the candaidate creation pop-up is displayed */}
                        <div id="text" className={(this.state.popup ? "blur-in container zindex-modal" : " container zindex-modal")}>

                            {/* Application Header */}
                                        <a href="#" style={{ textDecoration: "none" }} onClick={this.reset}>
 
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
                                    </ul>

                                    <form className="form-wrapper">

                                        {/* Step 1 */}
                                        <fieldset className={(this.state.step === 1) ? "section is-active" : "section"}>
                                            <h3>Details</h3>
                                            <input type="text" name="title" id="title" value={this.state.title} onChange={this.setTitle} />
                                            <input type="date" name="start" id="start" value={this.state.startingDay} min={this.state.startingDay} onChange={this.setStartingDay} />
                                            <TimePicker start="10:00" end="21:00" value={this.state.startTime} step={30} onChange={this.setStartTime} />
                                            <input type="date" name="end" id="end" value={this.state.endingDay} min={this.state.endingDay} onChange={this.setEndingDay} />
                                            <TimePicker start="10:00" end="21:00" value={this.state.endTime} step={30} onChange={this.setEndTime} />
                                            <div className="button" onClick={this.setStep}>Next</div>
                                        </fieldset>

                                        {/* Step 2 */}
                                        <fieldset className={(this.state.step === 2) ? "section is-active" : "section"}>
                                            <table id="candidateList">
                                                <tbody>
                                                    {this.state.candidates.map((candidate, index) =>
                                                        <tr key={index}>
                                                            <td>{index}. </td>
                                                            <td>{candidate.name}</td>
                                                            <td><a onClick={() => this.removeCandidate(index)}><i className="fa fa-minus"></i></a></td>
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
                return (
                    <div className="App">
                    <div id= "image" className="container zindex-modal"> <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Postech_Logotype.svg/2000px-Postech_Logotype.svg.png"
      alt="new" 
      />                     </div>


      <div id='text' className="container zindex-modal">
             <a href="#" style={{ textDecoration: "none" }} onClick={this.reset}>
 
                    <h1 className="my-4 text-center">
                        Blockchain-based voting platform
                </h1>
                </a>
                    <hr className="bg-light" />
                        </div>
                    </div>
                );
            default:
                return (<div>null</div>);
        }

    }
}
