import { useState } from "react"


const Popdetails = ({name}) => {
  const [selectedItem, setSelectedItem] = useState({name})
  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  return (
    <>
    
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg">
          <h3 className="text-lg font-medium mb-2">{name}</h3>
          {/* <p className="text-sm">{selectedItem.detail}</p> */}
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    
    </>
  )
}

export default Popdetails