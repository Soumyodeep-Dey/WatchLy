import PropTypes from "prop-types";

function SortFunction({ watches, sortOrder, onSort }) {
  const handleSort = () => {
    const sortedWatches = [...watches].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    onSort(sortedWatches); // Pass the sorted watches back to the parent
  };

  return (
    <button
      onClick={handleSort}
      className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold-light transition"
    >
      Sort by Price ({sortOrder === "asc" ? "Low to High" : "High to Low"})
    </button>
  );
}

SortFunction.propTypes = {
  watches: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired, // Price as a string (e.g., "$299.99")
    })
  ).isRequired,
  sortOrder: PropTypes.oneOf(["asc", "desc"]).isRequired, // Sorting order
  onSort: PropTypes.func.isRequired, // Callback to return sorted watches
};

export default SortFunction;