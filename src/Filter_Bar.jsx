import { useState } from 'react'
import './Filter_Bar.css'
function Filter_Bar() {
    // return (
    //     <div className="">
    //         <h1 className="filter_bar">Filter Bar</h1>
    //         <button type="radio"></button>
    //     </div>
    // );
    // const [isOpen, setIsOpen] = useState(false)
    // const toggleSidebar = () => {
    //     setIsOpen(!isOpen);
    //   };
    
      return (
        <div className='filter'>
            <input type="checkbox"></input>
            <label for="vehicle1"> Restaurant</label>

            {/* Do this for more types */}
            {/* Clean up the filter bar */}
            {/* Add functionality with JavaScript */}
        </div>
      );
}

export default Filter_Bar;