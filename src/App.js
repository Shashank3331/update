// import React from 'react'
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Header from './components/Header'
// import logo from './logo.svg'


// function App() {
//   return (
//     <div>
      
//       <BrowserRouter>
//       <Header/>
//       <Routes>
       
//         <Route path='/' element={<Home img={logo}/>}></Route>
//         <Route path='/about' element={<About/>}></Route>
//       </Routes>
//       </BrowserRouter>

     
//     </div>
//   )
// }

// export default App


// import React, { Component } from 'react'

// export class App extends Component {

//   render() {
//     const DesignElement = {
//       textAlign: "center",
//       color: "green"
//     } 
//     return (
//       <div>
//            <h1 style={DesignElement}>Lorem ipsum dolor sit.</h1>
//       </div>
//     )
//   }
// }

// export default App
// import React from 'react'
// import A from './components/A'
// import './App.css'
// import ClassState from './components/ClassState'

// function App() {
//   const food = "Pizza"
//   return (
//     <div className='App'>
//          <A myFood ={food}/>
//          <ClassState/>
//     </div>
//   )
// }

// export default App



// import React, { useState, useEffect } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
// // import '../node_modules/bootstrap/dist/css/bootstrap.css'
// // import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// function App() {
//     const [ user, setUser ] = useState([]);
//     const [ profile, setProfile ] = useState([]);

//     const login = useGoogleLogin({
//         onSuccess: (codeResponse) => setUser(codeResponse),
//         onError: (error) => console.log('Login Failed:', error)
//     });

//     useEffect(
//         () => {
//             if (user) {
//                 axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
//                         headers: {
//                             Authorization: `Bearer ${user.access_token}`,
//                             Accept: 'application/json'
//                         }
//                     })
//                     .then((res) => {
//                         setProfile(res.data);
//                     })
//                     .catch((err) => console.log(err));
//             }
//         },
//         [ user ]
//     );

//     // log out function to log the user out of google and set the profile array to null
//     const logOut = () => {
//         googleLogout();
//         setProfile(null);
//     };

//     return (
//         <div>
//             <h2>React Google Login</h2>
//             <br />
//             <br />
//             {profile ? (
//                 <div>
//                     <img src={profile.picture} alt="user image" />
//                     <h3>User Logged in</h3>
//                     <p>Name: {profile.name}</p>
//                     <p>Email Address: {profile.email}</p>
//                     <br />
//                     <br />
//                     <button onClick={logOut}>Log out</button>
//                 </div>
//             ) : (
//                 <button onClick={() => login()}>Sign in with Google 🚀 </button>
//             )}
//         </div>
        
//     );
// }
// export default App;

import React from 'react'
import Other from './components/Other'
import StateInClass from './components/StateInClass'
import FuntionState from './components/funtionState'
import Lifecycle from './components/Lifecycle'

function App() {
  return (
    <div>
         <h2>hello</h2>
         <Other/>
         <StateInClass/>
         <FuntionState/>
         <Lifecycle/>
    </div>
  )
}

export default App
