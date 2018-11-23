import React from 'react';
import { runInThisContext } from 'vm';
import TimePicker from 'react-bootstrap-time-picker';

export class Admin extends React.Component {

    constructor(props) {

        const today = new Date(Date.now());
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        super(props);
        this.state = {
            mode: "create",
            section: 2,
            startingDay: date,
            endingDay: date,
            popup: true,
            candidates: []
        };
        this.setMode = this.setMode.bind(this);
        this.setSection = this.setSection.bind(this);
        this.timeChange = this.timeChange.bind(this);
        this.startChange = this.startChange.bind(this);
        this.endChange = this.endChange.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.addCandidate = this.addCandidate.bind(this);
        this.newCandidate = this.newCandidate.bind(this);
    }

    setMode(e) {
        this.setState({ mode: e.target.value });
    }

    setSection(e) {
        this.setState((prevState) => {
            if (prevState.section === 1) {
                return { section: 2 };
            }
            else {
                return { section: 1 };
            }
        })
    }


    timeChange(time) {
        this.setState({ time });
    }

    endChange(event) {
        this.setState({ endingDay: event.target.value });
    }

    startChange(event) {
        this.setState({ startingDay: event.target.value });
    }

    closePopup() {
        this.setState({ popup: false });
    }

    addCandidate(){
        let temp = this.state.candidates.slice();

        this.setState({candidates : temp})
    }

    newCandidate(){
        this.setState({popup : true})
    }


    render() {

        switch (this.state.mode) {
            case "selection": // Selection mode 
                return (
                    <div className="App">
                        <div className="container zindex-modal">
                            <h1 className="my-4 text-light">
                                VOTTY <br /> Blockchain-based voting platform
                            </h1>
                            <hr className="bg-light" />
                            <div id="Selection" className='container'>
                                <button value="create" className="btn-3" onClick={this.setMode}>Create a ballot</button>
                                <button value="manage" className="btn-3" onClick={this.setMode}>Manage your ballot</button>
                            </div>
                        </div>
                    </div>
                );
            case "create": // Create mode

                return (
                    <div className="App">

                        <div className={(this.state.popup) ? "pop-up " : "d-none"} >
                            <div id="popup" className="box ">
                                <a onClick={this.closePopup} className="close-button">
                                    <i className="fa fa-times"></i>
                                </a>
                                <h3>New candidate</h3>
                                <form >
                                    <fieldset className="section is-active">
                                        <input type="text" name="Name" id="Name" placeholder="Name" />
                                        <textarea name="Description" cols="40" rows="5">Description</textarea>
                                        <div class="custom-file-upload">
                                            <input type="file" id="photo" name="photo" />
                                        </div>
                                    </fieldset>
                                </form>
                                <button className="button">Learn More</button>
                            </div>
                        </div>


                        <div className={(this.state.popup ? "blur-in container zindex-modal" : "blur-out container zindex-modal")}>
                            <h1 className="my-4 text-light">
                                VOTTY <br /> Blockchain-based voting platform
                        </h1>
                            <hr className="bg-light" />
                            <div className="container container-form">
                                <div className="wrapper">
                                    <ul className="steps">
                                        <li className={(this.state.section === 1) ? "is-active" : ""}>Step 1</li>
                                        <li className={(this.state.section === 2) ? "is-active" : ""}>Step 2</li>
                                    </ul>
                                    <form className="form-wrapper">
                                        <fieldset className={(this.state.section === 1) ? "section is-active" : "section"}>
                                            <h3>Details</h3>
                                            <input type="text" name="title" id="title" placeholder="Title" />
                                            <input type="date" name="start" id="start" value={this.state.startingDay} min={this.state.startingDay} onChange={this.startChange} />
                                            <TimePicker start="10:00" end="21:00" step={30} onChange={this.timeChange} />
                                            <input type="date" name="end" id="end" value={this.state.endingDay} min={this.state.endingDay} onChange={this.endChange} />
                                            <TimePicker start="10:00" end="21:00" step={30} onChange={this.timeChange} />
                                            <div className="button" onClick={this.setSection}>Next</div>
                                        </fieldset>
                                        <fieldset className={(this.state.section === 2) ? "section is-active" : "section"}>
                                        <button className="add" onClick={this.newCandidate}>New candidate</button>
                                            <div className="button" onClick={this.setSection}>Reset Form</div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "manage":
                return (
                    <div>2</div>
                );
            default:
                return (<div>null</div>);
        }

    }
}
