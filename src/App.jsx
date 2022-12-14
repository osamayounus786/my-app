// import "./index.js";
// // import logo from './logo.svg';
// import "./App.css";
// function ReactDocumentation() {
//   return (
//     <div>
//       <h1>What is React</h1>
//       <p>
//         <ul>
//           <li>
//             {" "}
//             React is a software development library for helping developers to
//             build user interfaces like a tree of small pieces known as
//             components. A component is a combination of JavaScript and HTML that
//             captures all the logic needed to display a small part of a larger
//             user interface. It encourages the development of reusable UI
//             components which show data that changes with time. Although it is
//             not like a complete application framework such as angular, it is a
//             view layer. Airbnb, Pinterest, Instagram, Twitter, Udemy, Uber,
//             Netflix, and Facebook are some of the popular companies using React
//             software development library. Features of React Library- One-way
//             data binding, Virtual DOM, Diverse components, JSX available, Simple
//             and easy, Conditional statements, Fast and efficient.
//           </li>
//         </ul>
//       </p>
//       <h1>What is SPA?</h1>
//       <p>
//         <ul>
//           <li>
//             A Single Page Application, also known as SPA, is a type of web
//             application that allows you to work on one HTML page.
//           </li>
//           <li>
//             Thanks to AJAX technology, it’s possible to display content without
//             reloading the page when a person uses it. When employed, this code,
//             which typically depends on JavaScript frameworks, guarantees the
//             high speed of the SPA.
//           </li>
//           <li>
//             Some typical examples of SPAs can be listed as navigation apps, many
//             social media platforms and email providers, etc
//           </li>
//         </ul>
//       </p>

// const { useState } = require("react");

// import { useState } from "react";

// import Card from "./components/datas";

//       <h1>What is MPA?</h1>
//       <p>
//         <ul>
//           <li>
//             As the name implies, a multi-page application (or MPA) comprises
//             numerous web pages downloaded when users access various website
//             areas.
//           </li>
//           <li>
//             This is a standard web app development approach for websites that
//             need to handle large amounts of content.
//           </li>
//           <li>
//             Specifically, the server provides all the necessary resources (HTML,
//             CSS, and JavaScript) for a new page when the user clicks. A loading
//             symbol spins in the browser during this transition, after which the
//             new one replaces the entire application flashes and the old page.
//             You can be familiar with this from eBay or Amazon
//           </li>
//         </ul>
//       </p>

//       <h1>What is DOM?</h1>
//       <ul>
//         <li>
//           The DOM represents the web page often called a document with a logical
//           tree and each branch of the tree ends in a node and each node contains
//           object programmers can modify the content of the document using a
//           scripting language like javascript and the changes and updates to the
//           dom are fast because of its tree-like structure but after changes, the
//           updated element and its children have to be re-rendered to update the
//           application UI so the re-rendering of the UI which make the dom slow
//           all the UI components you need to be rendered for every dom update so
//           real dom would render the entire list and not only those item that
//           receives the update
//         </li>
//       </ul>

//       <h1>What is Virtual DOM?</h1>
//       <ul>
//         <li>
//           VDOM is the virtual representation of Real DOM React update the state
//           changes in Virtual DOM first and then it syncs with Real DOM Virtual
//           DOM is just like a blueprint of a machine, can do the changes in the
//           blueprint but those changes will not directly apply to the machine.
//           Virtual DOM is a programming concept where a virtual representation of
//           a UI is kept in memory synced with “Real DOM ” by a library such as
//           ReactDOM and this process is called reconciliation
//         </li>
//       </ul>

//       <h1> One-way binding </h1>
//       <p>
//         <ul>
//           <li>
//             In one-way binding, the flow is one-directional. This means that the
//             flow of code is from ts file to Html file.
//           </li>
//         </ul>
//       </p>

//       <h1> Two-way binding </h1>
//       <p>
//         <ul>
//           <li>
//             In a two-way binding, the flow is two-directional. This means that
//             the flow of code is from ts file to Html file as well as from Html
//             file to ts file.
//           </li>
//         </ul>
//       </p>

//       <h1>Angular</h1>
//       <p>
//         <ul>
//           <li>
//             Angular is a structural, full-fledged framework for building mobile
//             and desktop web apps Angular has a steeper learning curve, so it
//             takes more time initially, Angular specialize in if your application
//             is enterprise-grade and you need to incorporate complex
//             functionalities like progressive, single-page, and native web apps
//           </li>
//         </ul>
//       </p>

//       <h1>React</h1>
//       <p>
//         <ul>
//           <li>
//             React is a javascript library for creating interactive and complex
//             user interfaces. React has a shorter learning curve due to its
//             simple structure and small package size. React specializes in
//             creating UI components and can be used in any application, including
//             single-page apps.
//           </li>
//         </ul>
//       </p>
//     </div>
//   );
// }

// export default ReactDocumentation;
// import logo from './reactlogo.png'
// import './App.css'
// function Header(){
//     return(
//         <header>
//         <nav className='nav'>

//         <img className='logo' src={logo} alt="react logo"  />
//         <ul className='nav-items'>
//             <li> <a href="#">Pricing</a> </li>
//             <li> <a href="#">About</a> </li>
//             <li><a href="#">Help</a></li>
//         </ul>
//         </nav>
//         </header>
//     )

// }
// function MainContent(){
//     return(
//     <div>

    
//     <h1>Reason's I'm excited to learn React</h1>
//     <ol>
//         <li>It's a popular library so i will be fit in with the cool kids</li>
//         <li>I'm more likely to get a Developer job if know react</li>
//     </ol>
//     <footer>
//         <small>2022 Osama Younus</small>
//     </footer>
//     </div>
    
//     )
// }
// function Page(){
//     return(
//         <div>
//           <Header />
//          <MainContent />

//         </div>
//     )
// }

// export default Page;

// import {jokes} from './components/jokesdata'
// import {Joke} from './components/jokes'
// function App(){
 
//   // console.log(jokes)
//   const jokesElement = jokes.map(jk =>  <Joke setup={jk.setup} punchline={jk.punchline}/>
//   )
//  return(
  
//     <div>
//       {jokesElement}
//     </div>
//  )
// }
// export default App;

// import { useState } from "react";

// function App(){
//   const [count,setCount] = useState(0);
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=> setCount(count + 1)}>Add</button>
//     <button onClick={()=> setCount(count - 1)}>Sub</button>
//     </>
//   )
// }
// export default App;











/* <Joke setup= {false}
      punchline= "gura mir na are"  />
      <Joke setup= "Brazil a haar daata"
      punchline= "7-1"  />
    <Joke setup= "kai dema haare data "
      punchline= "Germany e dema haare daata"  />
      <Joke setup= "Fifa World cup a kae katti"
      punchline= "Costa-Rica"  />
      <Joke setup= "Tir kae daratkaga"
      punchline= "Argentina e filhal"  /> */




  // import {useState} from "react";
  // import Count from './components/count'
  //     function Counter(){
  //      const  [count,setCount] = useState(0);
  //         return(
  //           <>
  //           <Count number = {count}/>
  //           <button onClick={()=> setCount(count - 1)}>-</button>
  //           <button onClick={()=> setCount(count + 1)}>+</button>
  //           <button onClick={()=> setCount(0)}>Clear</button>
  //           </>
  //         )
  //     }
  //     export default Counter;


  // Box Challange

// import './App.css'
// import { useState } from 'react'
// import boxes from './components/boxes'
// import Box from './components/Box'
//   function App(){

//     const [squares,setSquares] = useState(boxes);

//     function toggle(id){
//       setSquares(prevSquares => {
//         return prevSquares.map((square) => {
//           return square.id === id ? {...square, on: !square.on} : square
//         })
//       })
//     }
    
//     const squareElements = squares.map(square=>(
//       <Box 
//       key={square.id}
//       on={square.on}
//       toggle={()=>toggle(square.id)}
//       />
        
      
//     ))
    
//     return(
//       <>
//       <main>
//        {squareElements}
//       </main>
//       </>
//     )
//   }

//   export default App;







  //Box challenge revision
//  import './App.css'
//  import { useState } from 'react'
//  import boxes from './components/boxes'
//  import Box from './components/Box'

// function App(){
//   const [squares, setSquare] = useState(boxes);

//   function toggle(){
//     console.log("clicked")
//   }
 
//   const squareElements = squares.map((square) =>(
//     <Box 
//     key={square.id}
//     on={square.on}
//     toggle={toggle}
//       />
//   ))


//   return(
//   <main>
//     {squareElements}
//   </main>
//   )
// }
// export default App;
  // revision of props
// import Component from './components/propsrev'
// import {data} from './components/datarev'
//   function App(){
    
//     const arrayData = data.map(newArray => <Component name={newArray.name} fName ={newArray.fName} age={newArray.age} />)
//     // const carInfo = { name: "Ford", model: "Mustang" };
//     return(
//       <>
//       <h1>
//         Hello props
//       </h1>

//       {arrayData}
      

      
//       {/* <Data brand = {carInfo}/> */}
//       </>
//     )
//   }

//   export default App;





//props with card
// if you have multiple cards and want to render in single component 
// import Data from "./components/datas";
// import './App.css'

// function App(){
//   return(
//     <>
//    <Data img = "https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png"
//         type= "Sticker"
//         price= "RS 50 Dollars"/>
//         <Data img = "https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png"
//         type= "Nutmeg"
//         price= "RS 70 Dollars"/>
//     </>
//   )
// }

// export default App;

// Jokes
// import {jokes} from './components/jokesdata'
// import Jokes from './components/jokes'
// function App(){
//   const jokesELement = jokes.map(jk =>
//      <Jokes 
//      setup={jk.setup}
//       punchline={jk.punchline}
//       />)
//   return(
//     <>
//     {jokesELement}
//     </>
//   )
// }
// export default App;

// import Card from './components/card'
// import {data} from './components/carddata'
// function App(){
//   const renderData = data.map(cData=> <Card  {...cData} key={cData.id}/>)
//   return(
//     <>
    
//     {renderData}
//     </>
//   )
// }
// export default App;

// import { useState } from "react";
// function App(){
//   const [count, setCount] = useState(0)
//   // function add(){
//   //   setCount(oldValue => oldValue + 1)
//   // }
//   // function sub(){
//   //   setCount(oldValue => oldValue - 1)
//   // }
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(oldValue => oldValue - 1)}>-</button>
//     <button onClick={()=>setCount(oldValue => oldValue + 1)}>+</button>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import {data} from './components/memedata'
// function App(){
//   const [memeImg, setmemeImg] = useState("");

//   function getImageUrl(){

//     let randomImg = Math.floor(Math.random()*data.length);
//     setmemeImg(data[randomImg].url)
    
//   }
//   return(
//     <>
//       <button onClick={getImageUrl}>Generate Random Meme Image</button>
//       <img src={memeImg} alt="" />
//     </>
//   )
// }
// export default App;





//conditional rendering 



// import  { useState }  from "react";

// function App(){
//   const [messages, setMessages] = useState(['a','b'])
  
//   return(
//     <>
//     {
//       messages.length === 0 ?
//       <h1>You are all caught up</h1> :
//       <h1>you have {messages.length} unread {messages.length > 1 ? "messages" :"message"} </h1>
//     }
//     </>
//   )
// }

// export default App;





//from