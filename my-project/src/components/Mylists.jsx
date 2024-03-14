import React from 'react';
import Header from './Header';




const MyList = ({ items, name, detail}) => {
   const he= ()=>{
    alert('')
   }


return (
    
    
    <div className='p-10 bg-gray-100 h-screen'>
    <ul  className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((items,index) => (
        <li onClick={he} key={items.id || items.key} className= " hover:bg-slate-300 bg-white p-4 rounded-lg shadow-md">
          {/* Access item properties based on your data structure */}
          <h3 className="text-lg font-medium">{name[index]}</h3>
          <h6 className="text-sm font-serif">{detail[index]}</h6>

          {/* <p>{item.description || item.content}</p> */}
          
        </li>
        
      ))}
    </ul>
    </div>
  );
};

export default MyList;


// import React, { useState, useEffect } from 'react';
// import ''; // Import your CSS file

// const MyList = ({ items, name, detail }) => {
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Initial window width

//   const handleClick = (itemId) => {
//     setSelectedItemId(itemId);
//   };

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="list-container">
//       <ul className="list">
//         {items.map((item, index) => (
//           <li
//             key={item.id || item.key}
//             className={`list-item ${
//               selectedItemId === item.id ? 'selected' : ''
//             }`}
//             onClick={() => handleClick(item.id)}
//           >
//             <h3 className="text-lg font-medium">{name[index]}</h3>
//             <h6 className="text-sm font-serif">{detail[index]}</h6>
//           </li>
//         ))}
//       </ul>
//       {/* Optionally display additional details or perform actions based on selectedItemId */}
//       {selectedItemId && (
//         <div className="selected-item-details">
//           {/* Show details for the selected item here */}
//           <p>Selected item ID: {selectedItemId}</p>
//           {/* You can access other item properties based on selectedItemId */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyList;

