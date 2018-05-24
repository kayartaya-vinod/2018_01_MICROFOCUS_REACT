import dispatcher from './dispatcher';

export function changeSelection(id) {
    dispatcher.dispatch({
        type: 'SELECTION_CHANGED',
        data: {
            id: id
        }
    });
}
export function addNewContact(contact){
    dispatcher.dispatch({
        type: 'ADD_NEW_CONTACT',
        data: contact
    });
}
export function deleteContact(id){
    dispatcher.dispatch({
        type: 'DELETE_CONTACT',
        data: {
            id: id
        }
    });
}