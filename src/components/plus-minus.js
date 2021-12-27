// import React,{useState} from "react";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import './plus-minus.css'
// const Count =() => {
//     const [dataState, setDataState] = useState(
//         {
//             count:0
//         }
//     );

// const plusHandler =() => {
//     setDataState({
//         count:dataState.count + 1
//     });
// }
// const minusHandler =() => {
//     setDataState({
//         count: dataState.count - 1
//     })
// }

// return (
//     // <div className ="col-4 mx-auto mt-4">
//     //     <div className="card text-center">
//     //         <div className="card-header">
//     //             <button className="btn btn-sm btn-success mr-1"
//     //                 onClick={plusHandler}>+</button>
//     //             <button className="btn btn-sm btn-warning mr-1"
//     //                 onClick={minusHandler}>-</button>
//     //         </div>
//     //         <div className="card-body">Price: {dataState.count}</div>
//     //     </div>
//     // </div>
       
// <div>
// <Header/>
//         <button className="plus"
//             onClick={plusHandler}>+</button>
//         <button className="minus"
//             onClick={minusHandler}>-</button>
//         <div className="asp">Price: {dataState.count}</div>
//                     </div>
// );
// }


// function Header({ dataState }) {
//     return (
//       <header className="container">
//         <h1>Shopping Cart</h1>
  
//         <ul className="breadcrumb">
//           <li>Home</li>
//           <li>Shopping Cart</li>
//         </ul>
  
//         <span className="count">{dataState.count} items in the bag</span>
//       </header>
//     );
//   }

// export default Count;