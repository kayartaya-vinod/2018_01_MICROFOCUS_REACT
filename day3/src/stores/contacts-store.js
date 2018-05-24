import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';
import axios from 'axios';

export const events = {
    NEW_CONTACT_SAVED: 'newcontactsaved',
    SELECTION_CHANGED: 'selectionchanged',
    CONTACT_DELETED: 'contactdeleted'
};

const URL = 'http://localhost:4000/contacts/';

class ContactsStore extends EventEmitter {
    constructor() {
        super();
        this.selectedContact = null;
    }

    getSelectedContact() {
        return new Promise((resolve, reject) => {
            resolve(this.selectedContact);
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            axios.get(URL).then(resp => {
                resolve(resp.data);
            });
        });
    }

    addNewContact(contact) {
        let medium, large, thumbnail;
        contact.picture = { medium, large, thumbnail }
        axios.post(URL, contact)
            .then(resp => {
                console.log(resp);
                this.emit(events.NEW_CONTACT_SAVED);
            });
    }

    deleteContact(id) {
        axios.delete(URL + id)
            .then(resp => {
                this.selectedContact = resp.data;
                this.emit(events.CONTACT_DELETED);
            });
    }

    changeSelection(id) {
        axios.get(URL + id)
            .then(resp => {
                this.selectedContact = resp.data;
                this.emit(events.SELECTION_CHANGED);
            });

    }

    handleActions(action) {
        switch (action.type) {
            case 'ADD_NEW_CONTACT':
                this.addNewContact(action.data);
                break;
            case 'SELECTION_CHANGED':
                this.changeSelection(action.data.id);
                break;
            case 'DELETE_CONTACT':
                this.deleteContact(action.data.id);
                break;
        }
    }
}

export const contactStore = new ContactsStore();
dispatcher.register(contactStore.handleActions.bind(contactStore));
