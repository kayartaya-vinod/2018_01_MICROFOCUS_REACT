import React from 'react';
import { changeSelection, deleteContact } from '../actions';

export class ContactCard extends React.Component {

    render() {
        let c = this.props.contact;

        return (
            <div className="list-group-item row" >
                <div className="col-md-4">
                    <img  style={{cursor: 'pointer'}}
                    onClick={() => { changeSelection(c.id) }}
                    src={c.picture.medium} className="img img-circle" />
                </div>
                <div className="col-md-8">
                    <strong>{c.gender == 'male' ? 'Mr.' : 'Ms.'} {c.name.first} {c.name.last}</strong>

                    <span style={{cursor: 'pointer', color: 'red'}} 
                        className="pull-right"
                        onClick={(e) => { deleteContact(c.id);}} > x </span>

                    <br /><br />
                    {c.email}
                    <br />
                    {c.phone}
                </div>
            </div>
        );
    }
}