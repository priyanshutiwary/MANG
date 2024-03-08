import React from 'react';
import Header from './Header';




const MyList = ({ items, name, detail}) => {
    // console.log(items)
    
//   const listItems = Array.from({ length: Items }, (_, index) => ({
//     id: index + 1,
//     text: `Item ${index + 1}`,
//   }));
// try {
//     const item = JSON.parse(items);
//     console.log(item);
//   } catch (error) {
//     console.error('Error parsing JSON:', error);
//     // Handle the error gracefully, e.g., display an error message or use default data
//   }
  


return (
    // <>hello</>
    <div className='p-10 bg-gray-100 h-screen'>
    <ul  className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((items) => (
        <li key={items.id || items.key} className= " hover:bg-slate-300 bg-white p-4 rounded-lg shadow-md">
          {/* Access item properties based on your data structure */}
          <h3 className="text-lg font-medium">{name}</h3>
          <h6 className="text-sm font-serif">{detail}</h6>

          {/* <p>{item.description || item.content}</p> */}
          
        </li>
      ))}
    </ul>
    </div>
  );
};

export default MyList;
