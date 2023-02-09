import logo from './logo.svg';
import Item from './components/Item';
import './App.css';

function App() {

  const para = document.createElement('p');
  para.textContent = 'basic js text file content';
  document.getElementById('root').append(para);
  return (
    <div>
      <h2>Basic reactjs application</h2>
      <Item></Item>
    </div>
  );
}


// const displayEmojiName = event => alert(event.target.id);
// const emojis = [
//   {
//     emoji: '😀',
//     name: "test grinning face"
//   },
//   {
//     emoji: '🎉',
//     name: "party popper"
//   },
//   {
//     emoji: '💃',
//     name: "woman dancing"
//   }
// ];

// function App() {
//   const greeting = "greeting";
//   const displayAction = false;
//   return(
//     <div className="container">
//       <h1 id={greeting}>Hello, World</h1>
//       {displayAction && <p>I am writing JSX</p>}
//       <ul>
//         {
//           emojis.map(emoji => (
//             <li key={emoji.name}>
//               <button
//                 onClick={displayEmojiName}
//               >
//                 <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
//               </button>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }


export default App;
