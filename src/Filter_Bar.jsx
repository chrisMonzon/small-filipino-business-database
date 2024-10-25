import { useState } from 'react'

function Filter_Bar() {
    // return (
    //     <div className="">
    //         <h1 className="filter_bar">Filter Bar</h1>
    //         <button type="radio"></button>
    //     </div>
    // );
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
    
      return (
        <div>
            <button type='checkbox'>Restaurant</button>
            <button type='checkbox'>Arts</button>
        </div>
      );
}

export default Filter_Bar;