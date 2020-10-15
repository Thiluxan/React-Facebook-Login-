import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    state = {
        isLoggedIn: false,
        userID:'',
        name: '',
        email: '',
        picture: ''
    }

    componentClicked = () => {
        console.log('componentClicked')
    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div style={{ 
                    width: '400px',
                    margin: 'auto',
                    background:'lightgrey',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt = {this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            )
        }
        else{
            fbContent = (
                <FacebookLogin
                appId=""
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            )
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
