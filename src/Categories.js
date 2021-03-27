import React from 'react';

const Categories = ({filterItems , categories}) => {
  
  return <div>
    <div className="btn-container" >
      {
        categories.map((category , index ) => {
           return <button className="filter-btn" key={index} onClick={()=> filterItems(category)} >
            {category}
          </button>
        })
      }
    </div>
  </div>;
};

export default Categories;
