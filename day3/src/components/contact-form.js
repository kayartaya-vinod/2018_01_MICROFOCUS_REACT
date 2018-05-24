import React from 'react';
import { addNewContact } from '../actions';
import { contactStore } from '../stores/contacts-store';

export class ContactForm extends React.Component {
    constructor() {
        super();
        let first, last, gender, email, phone;
        this.state = {
            contact: { name: { first, last }, gender, email, phone }
        }
    }

    saveButtonHandler() {
        let first = this.refs.firstname.value;
        let last = this.refs.lastname.value;
        let email = this.refs.email.value;
        let phone = this.refs.phone.value;
        let gender = this.refs.genderMale.checked ? 'male' : 'female';

        if(!first) {
            alert('Firstname is required, but missing!');
            this.refs.firstname.focus();
            return;
        }
        let c = { name: { first, last }, gender, email, phone };
        
        // trigger the action
        addNewContact(c);
    }

    componentDidMount() {
        this.refs.firstname.focus();
    }

    componentWillMount(){
        let re = /edit/;
        console.log('re.test(this.props.match.url) is', re.test(this.props.match.url));
        if(re.test(this.props.match.url)){
            // edit
            contactStore.getSelectedContact().then(c=>{
                console.log('done')
                this.setState({
                    contact: c
                });
            });
        }
        else {
            // add
        }
    }

    render() {
        console.log('selected contact is', this.state.contact);
        let c = this.state.contact;
        if(c==null){
            let first, last, gender, email, phone;
            c = { name: { first, last }, gender, email, phone };
        }
        return (
            <div>
                <h3>Contact details</h3>
                <form>
                    <div className="form-group">
                        <label>Firstname</label>
                        <input type="text" className="form-control" ref="firstname" value={c.name.first} />
                    </div>
                    <div className="form-group">
                        <label>Lastname</label>
                        <input type="text" className="form-control" ref="lastname" value={c.name.last} />
                    </div>
                    <div className="form-group">
                        <label>Gender: </label>
                        <label><input type="radio" name="gender" value="male" ref="genderMale" /> Male</label>
                        <label><input type="radio" name="gender" value="female" ref="genderFemale" /> Female</label>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="text" className="form-control" ref="email" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" ref="phone" />
                    </div>

                    <button type="button" onClick={this.saveButtonHandler.bind(this)} className="btn btn-default">Save</button>
                </form>
            </div>
        );
    }
}