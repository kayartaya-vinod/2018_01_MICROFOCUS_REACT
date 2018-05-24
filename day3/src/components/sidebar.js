import React from 'react';
import { ContactCard } from './contact-card';
import { contactStore, events } from '../stores/contacts-store';

export class Sidebar extends React.Component {

    constructor() {
        super();
        this.state = {
            contactList: []
        };
        contactStore.getAll()
            .then(data => {
                this.setState({ contactList: data });
            });
    }

    componentWillMount() {
        contactStore.on(events.NEW_CONTACT_SAVED, () => {
            contactStore.getAll()
                .then(data => {
                    this.setState({ contactList: data });
                });
        });
        contactStore.on(events.CONTACT_DELETED, () => {
            contactStore.getAll()
                .then(data => {
                    this.setState({ contactList: data });
                });
        });
    }

    render() {
        let contacts = this.state.contactList;

        let contactCards = contacts.map(c => {
            return <ContactCard
                key={c.id} contact={c} />;
        });

        return (
            <div className="list-group">
                {contactCards}
            </div>
        );
    }
}