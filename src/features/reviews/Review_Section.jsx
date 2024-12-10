{/*Displays a section where users can see existing reviews. 
    Include a section for user reviews, allowing users to 
        see overall ratings, 
        read individual reviews, and 
        possibly leave a review themselves if authenticated.*/}

{/*Each review should have:
    profile name, rating, date written, title, description*/}

function ReviewSection() {
    return (
        <div>
            <h2 className="reviews">Reviews</h2>
            <div>
                <h3 className="profile_name">Profile Name</h3>
            </div>
            <div>
                <h3 className="review_title">Title</h3>
            </div>
            <div>
                <h3 className="profile_nname">Profile Name</h3>
            </div>
        </div>
    )
}

export default ReviewSection