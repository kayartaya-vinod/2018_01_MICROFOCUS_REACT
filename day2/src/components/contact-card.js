import React from 'react';

export class ContactCard extends React.Component {

    constructor() {
        super();
    }

    setSelectedContact() {
        // triggering the custom event
        this.props.onSelectedContactChange(this.props.contact);
    }

    render() {
        let c = this.props.contact;

        return (
            <div className="list-group-item row"
                onClick={this.setSelectedContact.bind(this)}
                style={{ cursor: "pointer" }}>
                <div className="col-md-4">
                    <img src={c.picture.medium} className="img img-circle" />
                </div>
                <div className="col-md-8">
                    <strong>{c.gender == 'male' ? 'Mr.' : 'Ms.'} {c.name.first} {c.name.last}</strong>

                    <br /><br />
                    {c.email}
                    <br />
                    {c.phone}
                </div>
            </div>
        );
    }
}