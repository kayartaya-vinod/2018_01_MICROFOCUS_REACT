import React from 'react';
import ReactDOM from 'react-dom';
import { AppHeader } from './app-header';
import { Sidebar } from './sidebar';
import { contactStore } from '../stores/contacts-store';
import { ViewContact } from './view-contact';
import { ContactForm } from './contact-form';
import { EditContactForm } from './edit-form';
import { Route, HashRouter } from 'react-router-dom';

class App extends React.Component {

    componentWillMount() {
        // contactStore.on('selectionchanged', () => {});

        // this listener is not used at all; can be deleted.
        contactStore.on('selectionchanged', () => {
            console.log('From App component, got the "selectionchanged" notification');
            contactStore.getSelectedContact().then(data => console.log(data));
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <AppHeader />
                <div style={{ marginTop: "60px" }}>
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                    <div className="col-md-4">
                        <ViewContact />
                    </div>
                    <div className="col-md-4">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

let routes = (
    <HashRouter>
        <App>
            <Route exact path="/" component={() => null} />
            <Route path="/add-new" component = {ContactForm} />
            <Route path="/edit/:id" component = {EditContactForm} />
        </App>
    </HashRouter>
);


ReactDOM.render(routes, document.getElementById('app'));
