// import React from 'react';
// import Header from './Header';




// const MyList = ({ items, name, detail}) => {
//    const he= ()=>{
//     alert('')
//    }


// return (
    
    
//     <div className='p-10 bg-gray-100 h-screen'>
//     <ul  className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {items.map((items,index) => (
//         <li onClick={he} key={items.id || items.key} className= " hover:bg-slate-300 bg-white p-4 rounded-lg shadow-md">
//           {/* Access item properties based on your data structure */}
//           <h3 className="text-lg font-medium">{name[index]}</h3>
//           <h6 className="text-sm font-serif">{detail[index]}</h6>

//           {/* <p>{item.description || item.content}</p> */}
          
//         </li>
        
//       ))}
//     </ul>
//     </div>
//   );
// };

// export default MyList;


import React, { useState } from 'react';
import Header from './Header';
import Popdetails from './Popdetails'

const MyList = ({ items, name, detail }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item, index) => {
    setSelectedItem({ name: name[index], detail: detail[index] });
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="p-10 bg-gray-100 h-screen">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <li
            key={item.id || item.key}
            className="hover:bg-slate-300 bg-white p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleItemClick(item, index)}
          >
            <h3 className="text-lg font-medium">{name[index]}</h3>
            <h6 className="text-sm font-serif">{detail[index]}</h6>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {selectedItem && (
        // <Popdetails name={selectedItem.name}/>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-lg font-medium mb-2">{selectedItem.name}</h3>
            <p className="text-sm">{selectedItem.detail}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyList;


