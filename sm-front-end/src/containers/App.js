import React, { Component } from 'react';
import Navigation from '../components/navigation/navigation';
import Signin from '../components/signin/signin'
import Rejester from '../components/rejester/regester'
import Logo from '../components/navigation/logo/logo';
import FaceRecognitor from '../components/faceRecognition/faceRecognition'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import ImageLinkForm from '../components/navigation/imageLinkForm/linkForm';
import './app.css';
import Rank from '../components/rank/rank'

/*particles.js access*/
const particlesOption = {
    "particles": {
        "number": {
            "value": 60
        },
        "size": {
            "value": 1
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
};
/*cclarifai API calling*/
const app = new Clarifai.App({
    apiKey: '9ca099225d9a433b9695978474727807'
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
            route: 'signin',
            isSignedIn: false,
            user: {
                id: '',
                email: "",
                name: "",
                entries: 0,
                joined: new Date()
            }

        }
    }
    loadUser = (inputUser) => {
        this.setState({
            user: {
                id: inputUser.id,
                email: inputUser.email,
                name: inputUser.name,
                entries: inputUser.entries,
                joined: inputUser.joined
            }
        })
    }

    /*making face borders*/
    faceLocation = (data) => {
        const clarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height)

        return (
            {
                leftCol: clarifaiData.left_col * width,
                topRow: clarifaiData.top_row * height,
                rightCol: width - (clarifaiData.left_col * width),
                bottomRow: height - (clarifaiData.top_row * height)
            }
        )
    }
    faceBox = (box) => {
        this.setState({ box: box })
    }
    /* this is event handeler for inputform from image link form*/
    onInputChange = (event) => {
        this.setState({ input: event.target.value })
    }
    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({ isSignedIn: false, route: 'signin' })
        } else if (route === 'home') {
            this.setState({ isSignedIn: true, route })
        } else {
            this.setState({ route: route })
        }

    }
    /*this is event handeler for detect button in image link from*/
    onButtonSubmit = () => {
        this.setState({ imageUrl: this.state.input })

        app.models
            .predict(
                Clarifai.FACE_DETECT_MODEL,
                this.state.input)
            .then((response) => {
                if (response) {
                    fetch('http://localhost:3005/image', {
                        method: 'put',
                        headers: { 'content-Type': 'application/json' },
                        body: JSON.stringify(
                            {
                                id: this.state.user.id
                            }
                        )
                    })
                        .then(response => {
                            response.json()
                        })
                        .then(count => {
                            this.setState(Object.assign(this.state.user, { entries: count }))
                        })
                }
                this.faceBox(this.faceLocation(response))
            },
                function (err) {
                    // there was an error
                })

    }

    render() {
        return (
            <div>
                <Particles
                    params={particlesOption}
                    className='particles'
                />
                <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />

                {this.state.route === 'home' ?
                    <div>
                        <Logo />
                        <Rank username={this.state.user.name} entries={this.state.user.entries} />
                        <ImageLinkForm
                            inputChange={this.onInputChange}
                            onSubmit={this.onButtonSubmit}
                        />
                        <FaceRecognitor
                            box={this.state.box}
                            imageUrl={this.state.imageUrl}
                        />
                    </div>
                    : (
                        this.state.route === 'signin' ?
                            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                            :
                            <Rejester loadUser={this.loadUser} onRouteChange={this.onRouteChange} />

                    )
                }
            </div>
        )
    }
}
export default App;