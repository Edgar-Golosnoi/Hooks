import React from 'react'; // 1 // 3
import ReactPlayer from 'react-player';
import useInput from '../hooks/useInput'; // 1
// import React, { useRef } from 'react'; // 2
// import useHover from '../hooks/useHover'; // 2
// import Hover from './Hover'; // 2
// import List from './List'; // 3

function App() { // 1
  const username = useInput('');
  const password = useInput('');

  return (
    <div>
      <input {...username} type="text" plaseholder="Username" />
      <input {...password} type="text" plaseholder="Password" />
      <button type="button" onClick={() => console.log(username.value, password.value)}>Click</button>
      <ReactPlayer width="150" url="https://www.youtube.com/watch?v=qQzdAsjWGPg&list=RDEMDaSUSUVu68QDj2nSmWsorA&start_radio=1&rv=ydzjigoq8Ns" />
    </div>
  );
}
export default App;

// function App() { // 2
//   const ref = useRef();
//   const isBlackHovering = useHover(ref);
//   return (
//     <div>
//       <Hover />
//       <div ref={ref} style={{ width: 250, height: 250, background: isBlackHovering ? 'blue' : 'black' }} />
//     </div>
//   );
// }
// export default App;

// // 3
// function App() {
//   return (
//     <div>
//       <List />
//     </div>
//   );
// }
// export default App;



// установить музыку 
// npm i react-audio-player
// import React from 'react'; // 1 // 3
// import ReactPlayer from 'react-player';