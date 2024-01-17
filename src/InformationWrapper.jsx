import React, { Component } from 'react'

export class InformationWrapper extends Component {

    render() {
        return (
            <div>
                
                <h1>Details</h1>
                <p>Click on a table item to get detailed information</p>
                <div id="info-content">
                    <div><b>User selected:</b> {this.props.activeUsers.firstName} {this.props.activeUsers.lastName}</div>
                    <div>
                        <b>Description: </b>
                        <textarea cols="50" rows="5" readonly>
                        {this.props.activeUsers.description}
                        </textarea>
                    </div>
                    <div><b>Address:</b> {this.props.activeUsers.address.streetAddress}</div>
                    <div><b>City:</b> {this.props.activeUsers.address.city}</div>
                    <div><b>State:</b> {this.props.activeUsers.address.state}</div>
                    <div><b>Zip:</b> {this.props.activeUsers.address.zip}</div>



                </div>
            </div>
        )
    }
}

export default InformationWrapper