import React from 'react'


class rejester extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''

        }
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onSubmit = () => {
        fetch('http://localhost:3005/register', {
            method: 'post',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    email: this.state.email,
                    password: this.state.password,
                    name: this.state.name
                }
            )
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    this.props.loadUser()
                    this.props.onRouteChange('home')
                }
            })

    }

    render() {
        // const { onRouteChange } = this.props
        return (
            <div >
                <article className="br2 ba dark-gray shadow-5 white b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                    <main className="pa4 black-80">
                        <form className="measure ">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6  ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6">Full names</label>
                                    <input
                                        onChange={this.onNameChange}
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6">Email</label>
                                    <input
                                        onChange={this.onEmailChange}
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        onChange={this.onPasswordChange}
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                    />
                                </div>

                            </fieldset>
                            <div className="lh-copy mt3">
                                <p className="f6 link dim black db pointer" onClick={this.onSubmit}>Register</p>

                            </div>
                        </form>
                    </main>
                </article>
            </div>

        )
    }
};
export default rejester;