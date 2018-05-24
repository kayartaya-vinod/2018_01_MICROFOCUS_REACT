import React from 'react';
import dispatcher from '../dispatcher';
import { contactStore } from '../stores/contacts-store';
import {NavLink} from 'react-router-dom';

export class ViewContact extends React.Component {

    constructor() {
        super();
        this.state = {
            contact: undefined
        };
    }

    componentWillMount() {
        contactStore.on('selectionchanged', () => {
            contactStore.getSelectedContact().then(data => {
                this.setState({
                    contact: data
                })
            });
        });
    }

    render() {
        let c = this.state.contact;
        if (!c) {
            return (
                <div style={{ marginTop: "50px" }}>
                    <h3>Please click on an image on the sidebar</h3>
                </div>
            );
        }
        return (
            <div style={{ marginTop: "50px" }}>
                <img src={c.picture.medium} className="img img-thumbnail" />
                <h3>{c.gender == 'male' ? 'Mr' : 'Ms.'}
                    {c.name.first} {c.name.last}</h3>
                <div className="row">
                    <label className="col-md-4">Email</label>
                    <div className="col-md-8">{c.email}</div>
                </div>
                <div className="row">
                    <label className="col-md-4">Phone number</label>
                    <div className="col-md-8">{c.phone}</div>
                </div>

                <div>
                    <NavLink to={"/edit/"+c.id} 
                        className="btn btn-primary">Edit</NavLink>
                </div>

            </div>
        );
    }
}