import { useState } from "react";
import PropTypes from "prop-types";

function SortingButton({ onSort }) {
  const [showOptions, setShowOptions] = useState(false); // State to toggle options visibility

  const handleSort = (order) => {
    onSort(order); // Pass the selected sort order to the parent component
    setShowOptions(false); // Hide options after selection
  };

  return (
    <div className="relative inline-block text-left w-64"> {/* Increased width */}
      {/* Main Sort Button */}
      <button
        onClick={() => setShowOptions((prev) => !prev)} // Toggle options visibility
        className="bg-gold text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-light transition w-full"
      >
        Sort
      </button>

      {/* Dropdown Options */}
      {showOptions && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-full">
          <button
            onClick={() => handleSort("lowToHigh")}
            className="block px-4 py-3 text-black hover:bg-gray-100 w-full text-left"
          >
            Price (Low to High)
          </button>
          <button
            onClick={() => handleSort("highToLow")}
            className="block px-4 py-3 text-black hover:bg-gray-100 w-full text-left"
          >
            Price (High to Low)
          </button>
        </div>
      )}
    </div>
  );
}

SortingButton.propTypes = {
  onSort: PropTypes.func.isRequired, // Callback to handle sorting
};

export default SortingButton;