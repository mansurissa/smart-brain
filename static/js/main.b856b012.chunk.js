(this["webpackJsonpsmart-brain"]=this["webpackJsonpsmart-brain"]||[]).push([[0],{276:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(45),i=a.n(r),o=a(15),l=a(16),c=a(17),m=a(18),u=function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link grow br2 shadow-5 ma3 pointer pa3"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("regester")},className:"f3 link dim underline pointer pa3"},"Register"),s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim underline pointer pa3"},"Sign In"))},p=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signinEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signinPassword:e.target.value})},n.onSubmit=function(e){e.preventDefault(),fetch("https://powerful-depths-04800.herokuapp.com/signin",{method:"post",headers:{"content-Type":"application/json"},body:JSON.stringify({email:n.state.signinEmail,password:n.state.signinPassword})}).then((function(e){return e.json()})).then((function(e){"object"===typeof e&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signinEmail:"",signinPassword:"",username:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("div",null,s.a.createElement("article",{className:"br2 ba dark-gray shadow-5 white b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6  ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmit,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})," or"),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("rejester")},className:"f5 link dim black br2 shadow-5 db pointer"},"Register"))))))}}]),a}(s.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onSubmit=function(){fetch("https://powerful-depths-04800.herokuapp.com/register",{method:"post",headers:{"content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("article",{className:"br2 ba dark-gray shadow-5 white b--black-10 mv4 w-100 w-50-m w-25-l mw6 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6  ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Full names"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"email-address",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{className:"f6 link dim black db pointer",onClick:this.onSubmit},"Register"))))))}}]),a}(s.a.Component),d=a(82),g=a.n(d),A=(a(90),a(83)),b=a.n(A),w=function(){return s.a.createElement("div",{className:"ma4 mt0 "},s.a.createElement(g.a,{className:"Tilt br3 shadow-3 b--black ",options:{max:775,transition:!0},style:{height:100,width:100}},s.a.createElement("div",{className:"Tilt-inner"}," ",s.a.createElement("img",{src:b.a,alt:"Logo",style:{color:"green",width:"90%",paddingTop:"5%",paddingLeft:"5%",height:"90%"}}))))},f=(a(91),function(e){var t=e.imageUrl,a=e.box;return s.a.createElement("div",{className:"center ma "},s.a.createElement("div",{className:"absolute mt2 br3 mb4 "},s.a.createElement("img",{alt:"",id:"inputImage",src:t,width:"500px",height:"Auto"}),s.a.createElement("div",{className:"bounding",style:{top:a.topRow,right:a.rightCol,left:a.leftCol,bottom:a.bottomRow}})),console.log(a.topRow,a.rightCol,a.leftCol,a.bottomRow))}),E=a(84),v=a.n(E),C=a(46),N=a.n(C),y=(a(276),function(e){var t=e.inputChange,a=e.onSubmit;return s.a.createElement("div",{className:"pa2 "},s.a.createElement("p",{className:"f3 center"},"This App will Detect Face in your Picture. Try It!!"),s.a.createElement("div",{className:"center  "},s.a.createElement("div",{className:"center bg pa4 shadow-5 br4"},s.a.createElement("input",{type:"text",className:"f4 w-70 pa2 bn br2 center",onChange:t}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 bn br2 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),j=(a(277),function(e){var t=e.username,a=e.entries;return s.a.createElement("div",{className:" white "},s.a.createElement("div",{className:"f3 center"},"Dear, ".concat(t," you have checked ...")),s.a.createElement("div",{className:"f1 center pt3"},"# ".concat(a)))}),R={particles:{number:{value:40},size:{value:5}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},k=new N.a.App({apiKey:"9ca099225d9a433b9695978474727807"}),S={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",email:"",name:"",entries:0,joined:new Date}},B=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,email:t.email,name:t.name,entries:t.entries,joined:t.joined}})},e.faceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.left_col*n,bottomRow:s-t.top_row*s}},e.faceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onRouteChange=function(t){"signout"===t?e.setState(S):"home"===t?e.setState({isSignedIn:!0,route:t}):e.setState({route:t})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),k.models.predict(N.a.FACE_DETECT_MODEL,e.state.input).then((function(t){t&&fetch("http://localhost:3005/image",{method:"put",headers:{"content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.faceBox(e.faceLocation(t))}),(function(e){}))},e.state=S,e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(v.a,{params:R,className:"particles"}),s.a.createElement(u,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(j,{username:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(y,{inputChange:this.onInputChange,onSubmit:this.onButtonSubmit}),s.a.createElement(f,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?s.a.createElement(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(h,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);a(278),a(279),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t){e.exports="data:image/png;base64,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"},85:function(e,t,a){e.exports=a(280)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.b856b012.chunk.js.map