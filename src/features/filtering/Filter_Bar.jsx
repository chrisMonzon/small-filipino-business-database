import { useState } from 'react'
import './Filter_Bar.css'
function Filter_Bar() {    
      return (
        <div className='filter'>
          <div className='margins'>
          <h1>Filter</h1>
          <h3>Business Type</h3>
          <br></br>

          <div className='types'>
            <label > Food/Drink </label>
            <input type="checkbox"></input>
          </div>

          <div className='types'>
            <label> Clothing/Accessories </label>
            <input type="checkbox"></input>
          </div>

          <div className='types'>
            <label> Arts/Crafts/Decor </label>
            <input type="checkbox"></input>
          </div>

          <div className='types'>
            <label> ETC </label>
            <input type="checkbox"></input>
          </div>
          <h3>Rating</h3>
            <div className='types'>
              <label> 5 Stars </label>
              <input type="checkbox"></input>
            </div>

            <div className='types'>
              <label>4 Stars</label>
              <input type="checkbox"></input>
            </div>

            <div className='types'>
              <label>3 Stars</label>
              <input type="checkbox"></input>
            </div>

            <div className='types'>
              <label>2 Stars</label>
              <input type="checkbox"></input>
            </div>

            <div className='types'>
              <label> 1 Stars </label>  
              <input type="checkbox"></input>
            </div>


            <div className='types'>

            <label> 0 Stars </label>
            <input type="checkbox"></input>

            </div>
            
            {/* Do this for more types */}
            {/* Clean up the filter bar */}
            {/* Add functionality with JavaScript */}
            </div>
        </div>
      );
}

export default Filter_Bar;