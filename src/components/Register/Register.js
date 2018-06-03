import React from 'react';

class Register extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }
        onEmailChange = (event) => {
            this.setState({email: event.target.value})
        }
        onPasswordChange = (event) => {
            this.setState({password: event.target.value})
        }
        onNameChange = (event) => {
            this.setState({name: event.target.value})
        }

        // onSubmitSignin = () => {
        //     fetch('http://localhost:3001/signin', {
        //         method: 'post',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify({
        //             email: this.state.email,
        //             password: this.state.password,
        //             name: this.state.name
        //         })
        //     }).then(response => response.json())
        //         .then(user => {
        //             if (user) {
        //                 this.props.loadUser(user)
        //                 this.props.onRouteChange('home');
        //             } else {
        //                 alert("Username or password were incorrect.")
        //             }
        //         })
        // }


        onSubmitRegistration = () => {
            fetch('http://localhost:3001/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                })
            }).then(response => response.json())
                .then(user => {
                    if (user) {
                        this.props.loadUser(user)
                        this.props.onRouteChange('home');
                    } else {
                        alert("Username or password were incorrect.")
                    }
                })
        }


    render() {
            return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                <main className="pa4 black-80">
                <div className="measure">
                <fieldset id="sign_up" className="a b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                </fieldset>
                <div className="">
                <input onClick={ this.onSubmitSignin } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                </div>
                <div className='1h-copy mt3'>
                    <p  onClick={ this.onSubmitRegistration } className='f6 link dim black db'>Register</p>
                </div>
                </div>
                </main>
            </article>
        );
    }
}

export default Register;