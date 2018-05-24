import React from 'react';
import { ContactCard } from './contact-card';

export class Sidebar extends React.Component {

    handleSelectedContactChange(selectedContact){
        console.log('inside Sidebar.handleSelectedContactChange()...', selectedContact);
    }
    render() {
        let contacts = this.props.contactList;

        let contactCards = contacts.map(c => {
            return <ContactCard 
                onSelectedContactChange={this.handleSelectedContactChange.bind(this)}  
                key={c.phone} contact={c} />;
        });

        return (
            <div className="list-group">
                {contactCards}
            </div>
        );
    }
}