import React, { Component } from 'react'
import "./AdminPanel.css"
import axios from 'axios'
import TableRow from './TableRow'
import InformationWrapper from './InformationWrapper'

export default class AdminPanel extends Component {

    state = {
        users: [],
        activeUsers: 2,
        typedUserName: "",
        filteredUsers: [],
        activeUsersID : ""
    }

    HandleValueChange = (e) => {
        let typedUserName = e.target.value
        var filteredUsers = this.state.users.filter((user, i) => {
            if (user.firstName.toLowerCase().includes(typedUserName.toLowerCase())) {
                return true
            }
        })
        console.log(filteredUsers)
        this.setState({ typedUserName, filteredUsers })
    }

    componentDidMount() {
        axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
            .then((response) => {
                console.log(response.data)
                this.setState({ users: response.data, activeUsersID : response.data[2].id })
                console.log("Updated users", this.state.users)
            })
            .catch((err) => { console.log(err) })
    }

    changeActiveUser = (id) => {
        let activeUsers = this.state.users.findIndex((user,i)=>{
            if(user.id == id){
                return true
            }
        })
        this.setState({activeUsersID : id,activeUsers})
    }

    render() {
        return (
            <div>
                <div id="overlay">
                    <img src="./img/preloader.gif" alt="Preloader icon" />
                </div>

                <main>

                    <div id="table-section">

                        <form action="/">
                            <img src='./img/search-icon.svg' alt="Search Icon" />
                            <input type="text" onChange={this.HandleValueChange} placeholder="Enter something" name="search-box" id="search-box" value={this.state.typedUserName} />
                        </form>

                        <div id="table-wrapper">

                            <div id="table-headers">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="column1">Id</th>
                                            <th className="column2">FirstName</th>
                                            <th className="column3">LastName</th>
                                            <th className="column4">Email</th>
                                            <th className="column5">Phone</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>



                            <div id="table-data">
                                <table>
                                    <tbody>

                                        {this.state.filteredUsers.length < 1 && this.state.typedUserName == "" ?
                                            this.state.users.map((users, i) => {
                                                return <TableRow firstName={users.firstName}
                                                    changeActiveUser = {this.changeActiveUser}
                                                    activeUsersID = {this.state.activeUsersID}
                                                    LastName={users.lastName}
                                                    id={users.id}
                                                    mail={users.email}
                                                    phone={users.phone} />
                                            }) : this.state.filteredUsers.map((users, i) => {
                                                return <TableRow firstName={users.firstName}
                                                    changeActiveUser = {this.changeActiveUser}
                                                    activeUsersID = {this.state.activeUsersID}
                                                    LastName={users.lastName}
                                                    id={users.id}
                                                    mail={users.email}
                                                    phone={users.phone} />
                                            })}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                    <div id="info-wrapper">
                        {
                            this.state.users.length > 0 ?
                                <InformationWrapper
                                    activeUsers={this.state.users[this.state.activeUsers]} /> : ""}
                    </div>

                </main>
            </div>
        )
    }
}








// <tr class="data-row">
// <td class="column1">28</td>
// <td class="column2">Larisa</td>
// <td class="column3">Llaneza</td>
// <td class="column4">SCallison@non.org</td>
// <td class="column5">(763)248-9034</td>
// </tr>
// <tr class="data-row">
// <td class="column1">835</td>
// <td class="column2">Marcellin</td>
// <td class="column3">Shrestha</td>
// <td class="column4">ARose@sagittis.ly</td>
// <td class="column5">(801)653-7547</td>
// </tr>
// <tr class="data-row active">
// <td class="column1">654</td>
// <td class="column2">Xiumei</td>
// <td class="column3">Jongco</td>
// <td class="column4">AKoprowski@vitae.ly</td>
// <td class="column5">(773)391-2969</td>
// </tr>
// <tr class="data-row">
// <td class="column1">70</td>
// <td class="column2">Tanya</td>
// <td class="column3">Gonshor</td>
// <td class="column4">PPervaiz@nullam.io</td>
// <td class="column5">(376)035-7184</td>
// </tr>
// <tr class="data-row">
// <td class="column1">943</td>
// <td class="column2">Sritharan</td>
// <td class="column3">Worden</td>
// <td class="column4">DLencowski@tortor.ly</td>
// <td class="column5">(714)779-2847</td>
// </tr>
// <tr class="data-row">
// <td class="column1">796</td>
// <td class="column2">Josephine</td>
// <td class="column3">Geouque</td>
// <td class="column4">KChristopher@amet.io</td>
// <td class="column5">(421)120-7963</td>
// </tr>
// <tr class="data-row">
// <td class="column1">339</td>
// <td class="column2">Yu</td>
// <td class="column3">Ferreira</td>
// <td class="column4">KHeppelmann@amet.com</td>
// <td class="column5">(101)002-6875</td>
// </tr>
// <tr class="data-row">
// <td class="column1">25</td>
// <td class="column2">Kathy</td>
// <td class="column3">Hansen</td>
// <td class="column4">MJacobs@lacus.io</td>
// <td class="column5">(984)584-1749</td>
// </tr>
// <tr class="data-row">
// <td class="column1">833</td>
// <td class="column2">Deitric</td>
// <td class="column3">Whitman</td>
// <td class="column4">JRamsey@tortor.io</td>
// <td class="column5">(301)556-8434</td>
// </tr>
// <tr class="data-row">
// <td class="column1">856</td>
// <td class="column2">Yeqing</td>
// <td class="column3">Elshoff</td>
// <td class="column4">RKimmel@tincidunt.com</td>
// <td class="column5">(230)488-3157</td>
// </tr>