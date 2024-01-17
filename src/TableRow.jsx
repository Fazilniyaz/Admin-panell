import React, { Component } from 'react'

export class TableRow extends Component {
    render() {
        return (
            <div >
                <tr onClick={() =>{
                    this.props.changeActiveUser(this.props.id)
                }} className= {`data-row ${this.props.activeUsersID == this.props.id ? `active` : ""}` }>
                    <td className="column1">{this.props.id}</td>
                    <td className="column2">{this.props.firstName}</td>
                    <td className="column3">{this.props.LastName}</td>
                    <td className="column4">{this.props.mail}</td>
                    <td className="column5">{this.props.phone}</td>
                </tr>
            </div>
        )
    }
}

export default TableRow