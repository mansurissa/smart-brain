import React from 'react'


class siginin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signinEmail: '',
            signinPassword: '',
            username: ''

        }
    }
    onEmailChange = (event) => {
        this.setState({ signinEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ signinPassword: event.target.value })
    }
    onSubmit = () => {
        fetch('http://localhost:3005/signin', {
            method: 'post',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    email: this.state.signinEmail,
                    password: this.state.signinPassword,

                }
            )

        })
            .then(response => response.json())
            .then(data => {
                if (data === "success") {
                    console.log(data)
                }
            })
        this.props.onRouteChange('home')

    }



    render() {
        const { onRouteChange } = this.props
        return (
            <div >
                <article className="br2 ba dark-gray shadow-5 white b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                    <main className="pa4 black-80">
                        <form className="measure ">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6  ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}
                                    />
                                </div>

                            </fieldset>
                            <div className="">
                                <input
                                    onClick={this.onSubmit}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit" value="Sign in"
                                /> or
                        </div>
                            <div className="lh-copy mt3">
                                <p
                                    onClick={() => onRouteChange('rejester')}
                                    className="f5 link dim black br2 shadow-5 db pointer">Register</p>

                            </div>
                        </form>
                    </main>
                </article>
            </div>
        )
    }
};
export default siginin;