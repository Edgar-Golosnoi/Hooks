// import React, { useRef, useState } from 'react';
// import useScroll from '../hooks/useScroll';

// function List() {
//   const [todos, setTodos] = useState([]);
//   const [page, setPage] = useState(1);
//   const limit = 15;
//   const parentRef = useRef();
//   const childRef = useRef();
//   const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit));

//   function fetchTodos(page, limit) {
//     fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
//       .then((response) => response.json())
//       .then((json) => {
//         setTodos((prev) => [...prev, ...json]);
//         setPage((prev) => prev + 1);
//       });
//   }

//   return (
//     <div ref={parentRef} style={{ height: '80vh', overflow: 'auto' }}>
//       {todos.map((todo) => (
//         <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
//           {todo.id}
//           .
//           {todo.title}
//         </div>
//       ))}
//       <div ref={childRef} style={{ height: 20, background: 'green' }} />
//     </div>
//   );
// }

// export default List;

// import React, { useRef, useState } from 'react';
// import useScroll from './MyHooks/useScroll';

// function AllNews() {
//   const [news, setNews] = useState([]);
//   const [page, setPage] = useState(1);
//   const limit = 15;
//   const parentRef = useRef();
//   const childRef = useRef();
//   const intersected = useScroll(parentRef, childRef, () => fetchNews(page, limit));

//   function fetchNews(page, limit) {
//     fetch('https://www.kommersant.ru/RSS/news.xml')
//       .then((response) => response.json())
//       .then((json) => {
//         setNews((prev) => [...prev, ...json]);
//         setPage((prev) => prev + 1);

//         return (
//           <div ref={parentRef} style={{ height: '80vh', overflow: 'auto' }}>
//             {news.map((e) => (
//               <div key={e.id} style={{ padding: 30, border: '2px solid black' }}>
//                 {e.id}
//                 .
//                 {e.title}
//               </div>
//             ))}
//             <div ref={childRef} style={{ height: 20, background: 'green' }} />
//           </div>
//         );
//       });
//   }
// }

// export default AllNews;


