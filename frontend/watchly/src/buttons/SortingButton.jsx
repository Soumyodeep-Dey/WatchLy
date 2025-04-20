import PropTypes from "prop-types";

function SortingButton({ onSort }) {
  const handleSort = (order) => {
    onSort(order); // Pass the selected sort order to the parent component
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleSort("lowToHigh")}
        className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition"
      >
        Price (Low to High)
      </button>
      <button
        onClick={() => handleSort("highToLow")}
        className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition"
      >
        Price (High to Low)
      </button>
    </div>
  );
}

SortingButton.propTypes = {
  onSort: PropTypes.func.isRequired, // Callback to handle sorting
};

export default SortingButton;