// import { useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/Card_Component.css";

import axios from "axios";


function WebsitePreview({ websiteURL }) {
    const [previewData, setPreviewData] = useState(null);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchPreview = async () => {
        try {
          // First attempt: Microlink
          const response = await axios.get(`https://api.microlink.io/?url=${websiteURL}`);
          if (response.data.status === "success" && response.data.data) {
            setPreviewData(response.data.data);
          } else {
            throw new Error("Microlink failed");
          }
        } catch (err) {
          console.warn("Microlink failed, falling back to LinkPreview:", err);
          try {
            // Fallback to LinkPreview
            const fallback = await axios.get(
              `https://api.linkpreview.net/?key=e5bdca318829c276ac3af7f898e07602&q=${encodeURIComponent(websiteURL)}`
            );
            setPreviewData({
              title: fallback.data.title,
              description: fallback.data.description,
              image: { url: fallback.data.image },
              url: fallback.data.url,
            });
          } catch (fallbackErr) {
            console.error("Both previews failed:", fallbackErr);
            setError(true);
          }
        }
      };
  
      fetchPreview();
    }, [websiteURL]);
  
    if (error) {
      return <p>Preview not available.</p>;
    }
  
    if (!previewData) return <p>Loading preview...</p>;
  
    return (
      <div
        className="website-preview"
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
          maxWidth: "300px"
        }}
      >
        {previewData.image?.url && (
          <img
            src={previewData.image.url}
            alt="Preview"
            style={{ width: "100%", borderRadius: "4px", marginBottom: "10px" }}
          />
        )}
        <h3>{previewData.title || "No title available"}</h3>
        <p>{previewData.description || "No description provided."}</p>
        <a href={websiteURL} target="_blank" rel="noopener noreferrer">
          Visit Site
        </a>
      </div>
    );
  }

function WebsiteIsInvalid(businessName) {
    let invalid = [
        "Adeling", "Amber Agave", "Bongga Co.", "Filipinta", "HaribyArt", "Kilig Candles Co.",
        "Masiramon Chicago", "Pinny Planet", "Sage Rose Co.", "Unreleased Grounds", "Wounded Healing Art",
        "YPArtistry"
    ]
    return invalid.includes(businessName)
}

function CardComponent({ businessName, rating, description, website, instagram}) {
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate();
    const handleCardClick = () => {
        if (businessName[0] == "8") {
            navigate(`/business/${"843%2FEight%20Four%20Three"}`);
        } else {
            navigate(`/business/${businessName}`);
        }
        
      };

      function getStars(name) {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
          hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const normalized = Math.abs(hash) % 3; // 0 to 2
        const stars = normalized + 3; // 3 to 5
        return '★'.repeat(stars) + '☆'.repeat(5 - stars);
      }

    return (
        // <Link to={`/business/${businessName}`}>
      <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        {/* Top section with different background */}
        <div className="card-top">
        <img
            className="card-image"
            src="https://img.icons8.com/ios-filled/50/shop.png"
            alt="Shop Icon"
            width="40"
            height="40"
        />
        <h1 className="card-business-name-top"><i>{businessName}</i></h1>
        </div>

  
        {/* Divider line */}
        <hr className="card-divider" />
  
        {/* Bottom section with business info */}
        <div className="card-content">
          {/* <h1 className="card-business-name"><i>{businessName}</i></h1> */}
          {/* <p className="card-business-rating">Rating: {rating}</p> */}
          {/* <WebsitePreview websiteURL={website} /> */}
          {/* {!website && (<WebsitePreview websiteURL={website} />)} */}
          {/* {website && !WebsiteIsInvalid(businessName) && (
        <div className="card-website-preview">
            <iframe 
            src={website}
            title={`${businessName} Preview`}
            width="100%"
            height="150"
            style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            ></iframe>
        </div>
        )} */}
        {/* {instagram && (
        <WebsitePreview websiteURL={instagram} />
        )} */}
          <p className="card-business-rating">Rating: {getStars(businessName)}</p>
          <p className="card-business-description">
            {description?.substring(0, 250) + "... learn more"}
          </p>
          
        </div>
      </div>
    //   </Link>
    );
  }
  
// function CardComponent({ businessName, rating, description }) {
//   const [menuVisible, setMenuVisible] = useState(false);

//   return (
//     // <Link to={`/business/${businessName}`}>
//       <div className="card">
//         {/* <img
//           className="card-image"
//           src="https://www.psauiuc.org/wp-content/uploads/2024/09/Logo-no-words-no-circle-300x300.png"
//           alt="Philippine Student Association Logo"
//         /> */}
//         <img className="card-image" src="https://img.icons8.com/ios-filled/50/shop.png" alt="Shop Icon" width="50" height="50" />
//         {/* Settings Button */}
        
        

//         {/* Content */}
//         <h1 className="card-business-name">{businessName}</h1>
//         <p className="card-business-rating">Rating: {rating}</p>
//         <p className="card-business-description">
//           {description?.substring(0, 110)}...
//         </p>
//       </div>
//     // </Link>
//   );
// }

export default CardComponent;


// import { Link } from "react-router-dom";
// import "../assets/Card_Component.css";

// function CardComponent( {buisnessName, rating, description} ) {
//     return (
//         <Link to={`/business/${buisnessName}`}>
//         <button className="card" type="button" onclick="document.getElementById('card-settings-menu').style.display='block'">
//             <div>
//                 <img className='card-image' src="https://www.psauiuc.org/wp-content/uploads/2024/09/Logo-no-words-no-circle-300x300.png" alt="Philippine Student Association Logo" style={{width: '100%'}}/>
//                 <button id="card-settings-button" class="card-settings-button" aria-label="Settings" type="button" onclick="document.getElementById('card-settings-menu').style.display='block'">
//                     <span class="card-settings-button-dot"></span>
//                     <span class="card-settings-button-dot"></span>
//                     <span class="card-settings-button-dot"></span>
//                 </button>
//                 <div id="card-settings-menu" class="card-settings-menu">
//                     <h3>Settings</h3>
//                     <button id="close-button">Close</button>
//                 </div>
//                 <script>
//                     {/* const card-settings-button = document.getElementById('card-settings-button');
//                     const settingsmenu = document.getElementById('settings-menu');
//                     const close-button = document.getElementById('close-button');

//                     settings-button.addEventListener('click', () => {
//                         settingsmenu.style.display = settings-menu.style.display === 'block' ? 'none' : 'block'
//                     });

//                     close-button.addEventListener('click', () => {
//                         settingsmenu.style.display = 'none'
//                     }); */}
//                 </script>
//                 <div>
//                     <h1 className="card-business-name">
//                         {buisnessName}
//                     </h1>
//                 </div>
//                 <div>
//                     <p className="card-business-rating">
//                         Rating: {rating}
//                     </p>
//                 </div>
//                 <div>
//                     <p className="card-business-description">
//                         {description.substring(0, 110)}...
//                     </p>
//                 </div>
//             </div>
//         </button>
//         </Link>
//     );
// }

// export default CardComponent;
// <div className="card-settings-wrapper">
//           <button
//             className="card-settings-button"
//             onClick={(e) => {
//               e.preventDefault(); // prevent Link click
//               setMenuVisible(!menuVisible);
//             }}
//           >
//             {/* <span className="card-settings-button-dot"></span>
//             <span className="card-settings-button-dot"></span>
//             <span className="card-settings-button-dot"></span> */}
//           </button>
// 
//           {menuVisible && (
//             <div className="card-settings-menu">
//               <h3>Settings</h3>
//               <button onClick={() => setMenuVisible(false)}>Close</button>
//             </div>
//           )}
//         </div>