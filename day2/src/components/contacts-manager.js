import React from 'react';
import { Sidebar } from './sidebar';
import { AppHeader } from './app-header';
import $ from 'jquery';

export class ContactsManager extends React.Component {

    constructor() {
        super();
        this.state = {
            contactList: []
        };
    }

    componentWillMount() {
        let contactsCount = 10;
        $.ajax({
            method: 'GET',
            url: 'https://randomuser.me/api',
            dataType: 'json',
            data: {
                results: contactsCount
            },
            success: response => {
                console.log(response);
                this.setState({
                    contactList: response.results
                })
            },
            error: err => {
                console.error('something went wrong', err);
            }
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <AppHeader />
                <div className="row" style={{marginTop: "50px"}}>
                    <div className="col-md-4">
                        <Sidebar contactList={this.state.contactList} />
                    </div>
                    <div className="col-md-8">
                        {/* Yet to be done */}
                    </div>
                </div>
            </div>
        );
    }


}