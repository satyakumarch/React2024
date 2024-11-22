// import React, { Component } from 'react';
// import './App.css';
// import {Greet} from './component/Greet.js';
// import Welcome from './component/Welcome.js';
// import Hello from './component/Hello.js';
// import Navbar from './component/Navbar.js';
// import Body from './component/Body.js';

// import CounterApp from './component/CounterApp.js';
// import Table from './component/Table.js';
// // import Form from './component/Form.js';
// import Stateful from './component/Stateful.js';
// import Stateless from './component/Stateless.js'
// import App1 from './component/App1.js';


// import Myform from './component/Myform.js';


// class App extends Component{
//   render(){
//     return (
//       <div className="App">
//         <Navbar/>
         
//           {/* <UseCounter/> */}
//         <Body/>
//         {/* <Form/> */}
//         <App1/>
//         <Greet/>
        
//         <Welcome/>
//         <Hello/>
//         <CounterApp/>
//         <Stateful/>
//         <Stateless/>
//         <Table/>
//         <Myform/>
        
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
// import useFetch from './UseFetch';
import useFetch from './component/UseFetch'

const Posts = () => {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts && posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;

