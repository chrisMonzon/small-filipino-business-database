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
        //   border: "1px solid #ccc",
        //   padding: "10px",
        //   borderRadius: "20%",
          maxWidth: "300px"
        }}
      >
        {previewData.image?.url && (
          <img
            src={previewData.image.url}
            alt="Preview"
            style={{ width: "250px", height: "250px",borderRadius: "100%", marginBottom: "10px" }}
          />
        )}
        {/* <h3>{previewData.title || "No title available"}</h3> */}
        {/* <p>{previewData.description || "No description provided."}</p> */}
        {/* <a href={websiteURL} target="_blank" rel="noopener noreferrer">
          Visit Site
        </a> */}
      </div>
    );
  }

  
function WebsiteIsInvalid(businessName) {
    let invalid = [
        "Adeling", "Amber Agave", "Bongga Co.", "Filipinta", "HaribyArt", "Kilig Candles Co.",
        "Masiramon Chicago", "Pinny Planet", "Sage Rose Co.", "Unreleased Grounds", "Wounded Healing Art",
        "YPArtistry", "Carina\'s Cupcakery", "Fernwood Barbers", "Ampilfied Apparel", "Chorva Co."
    ]
    return invalid.includes(businessName)
}

function AddedIG(businessName) {
    let valid = [
        "Adeling", "Amber Agave", "Bongga Co.", "Carina\'s Cupcakery", 
        "Filipinta", "Kilig Candles Co.","Masiramon Chicago", "Pinny Planet", 
        "Sage Rose Co.", "Chorva Co.", "Wounded Healing Art", "YPArtistry",
        "Ampilfied Apparel", "Tita Mia\'s", "FOR US, DEAR", "Morena Collective",
        "Fernwood Barbers","Mutuc Clay Earrings", "Crochet Cama","Emma\'s Projects",
        "Tita Bun Collective"
        // "Andreen\'s Cookies", broken
        // "Loren\'s Macarons", err
    ]
    return valid.includes(businessName)
}

function NoWebsiteOrIG(businessName) { 
    let l = [
        "Andreen\'s Cookies", "Loren\'s Macarons", "HaribyArt", "Unreleased Grounds"
    ]
    return l.includes(businessName)

}

function InstagramBlockquoteEmbed({url}) {
    // Instagram's embed script only processes new blockquotes once when initially loaded
    // When the card is re-rendered due to sorting or filtering, those blockquotes are in
    // the DOM but Instagram doesn’t reprocess them.

    // Allows cards to re-render Instagram embeds after sorting
    useEffect(() => {
        // Load Instagram embed script if not already loaded
        if (!window.instgrm) {
          const script = document.createElement("script");
          script.src = "//www.instagram.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        } else {
          // Process the embed if the script is already loaded
          window.instgrm.Embeds.process();
        }
    
        // Also reprocess after a delay to make sure the DOM is ready
        const timeout = setTimeout(() => {
          if (window.instgrm?.Embeds?.process) {
            window.instgrm.Embeds.process();
          }
        }, 500); // Delay can help when rendering dynamically
    
        return () => clearTimeout(timeout);
      }, [url]);

    const html = `
      <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/${url}/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; margin: 1px; max-width:540px; min-width:326px; padding:0; width:100%;">
      <div style="padding:16px;">
        <a href="https://www.instagram.com/${url}/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank" rel="noopener noreferrer">
        Loading Instagram...
        </a>
      </div>
      </blockquote>
    `;
  
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
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
    let addOne = (name.length + 1) % 3; 
    return '★'.repeat(5 - addOne) + '☆'.repeat(addOne);
    }
    // const cleanedInstagram = instagram.substring(1);
    const cleanedInstagram = instagram?.toLowerCase().replace(/^@/, "").trim();
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
          {/* <p className="card-business-rating">Rating: {rating}</p> */}
          {/* <WebsitePreview websiteURL={website} /> */}
          {NoWebsiteOrIG(businessName) && (<div className="rotating">
          {(!website || WebsiteIsInvalid(businessName)) && (<WebsitePreview websiteURL={website} />)}
          </div>)}

          {instagram && AddedIG(businessName) && (
            <div>
                <InstagramBlockquoteEmbed url={`${cleanedInstagram}`}/>
                <div class="loader"></div>
            </div>
            )}

          {website && !WebsiteIsInvalid(businessName) && businessName != "Tita Bun Collective" && (


            <iframe 
            src={website}
            title={`${businessName} Preview`}
            width="101%"
            height="400px"
            zIndex="0"
            // transform="scale(0.1)"
            ></iframe>
            )}

          {/* <p className="card-business-rating">Rating: {getStars(businessName)}</p> */}
          {/* {description.length >= 225 && <p className="card-business-description">
            {description?.substring(0, 225) + "... learn more"}
          </p>}
          {description.length < 225 && <p className="card-business-description">
            {description}
          </p>}
           */}
        </div>
      </div>
    //   </Link>
    );
  }
  
export default CardComponent;