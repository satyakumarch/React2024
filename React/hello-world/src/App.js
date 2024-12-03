import React, { Component } from 'react';
import './App.css';

import { AuthProvider } from './AuthContext'; // Adjust the import path as necessary
import DataDisplay from './DataDisplay'; // Adjust the import path as necessary
import WelcomeForm from './WelcomeForm'; // Ensure this path is correct

// import ReactDOM from 'react-dom';
import {Greet} from './component/Greet.js';
import Welcome from './component/Welcome.js';
import Hello from './component/Hello.js';
import Navbar from './component/Navbar.js';
import Body from './component/Body.js';

import CounterApp from './component/CounterApp.js';
import Table from './component/Table.js';
import Stateful from './component/Stateful.js';
import Stateless from './component/Stateless.js'
import App1 from './component/App1.js';

import Myform from './component/Myform.js';
import HotelHomepage from './component/HotelHomePage.js';
import WelcomeForm from './WelcomeForm.js';
// import { AuthProvider } from './component/AuthContext.js';
// import DataDisplay from '//DataDisplay.js';


ReactDOM.render(<WelcomeForm />, document.getElementById('root'));

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar/>
         
          {/* <UseCounter/> */}
        <Body/>
        {/* <Form/> */}
        <App1/>
        <Greet/>
        
        <Welcome/>
        <Hello/>
        <CounterApp/>
        <Stateful/>
        <Stateless/>
        <Table/>
        <Myform/>
        <HotelHomepage/>
        <WelcomeForm/>
        <AuthProvider>
      <div className="App">
        <DataDisplay />
        <WelcomeForm /> {/* Add the WelcomeForm component */}
      </div>
    </AuthProvider>
        
      </div>
    );
  }
}

export default App;

// import React from 'react';
// // import useFetch from './UseFetch';
// import useFetch from './component/UseFetch'

// const Posts = () => {
//   const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts && posts.map((post) => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <Posts />
//     </div>
//   );
// }

// export default App;

