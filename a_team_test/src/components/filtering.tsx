import react, { useState } from "react";

function Filtering() {
  return (
    <div className="filtering">
      <button>
        가공방식<i className="fas fa-caret-down"></i>
      </button>
      <button>
        재료<i className="fas fa-caret-down"></i>
      </button>
    </div>
  );
}

export default Filtering;
