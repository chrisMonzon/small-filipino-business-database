{/*Displays a section where users can see existing reviews.
    Include a section for user reviews, allowing users to 
        see overall ratings, 
        read individual reviews, and 
        possibly leave a review themselves if authenticated.*/}

{/*Each review should have:
    profile name, rating, title, date written, description*/}

    function ReviewSectionComponent() {
        return (
            <div>
                <h2 className="reviews_section">Reviews</h2>
                <div className="a_review_example">
                    <div>
                        <h3>PROFILE NAME</h3>
                    </div>
                    <div className="rating">
                        
                    </div>
                    <div>
                        <h3>TITLE: Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div>
                        <h3 className="date_written">DATE WRITTEN</h3>
                        <h3 className="review_description">DESCRIPTION: Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Maecenas convallis sem in ex varius, eget 
                            lacinia turpis placerat. Nam elit ligula, sodales eu odio non, aliquet 
                            ultricies diam. Aenean ullamcorper, ligula sit amet egestas maximus, 
                            eros ipsum viverra tellus, sed euismod nulla felis et magna. Praesent 
                            porttitor a eros eget fringilla. Maecenas faucibus tortor at nisi vulputate, 
                            et fermentum diam dignissim. In vulputate elementum nunc, a mattis quam 
                            interdum eu. Sed faucibus elementum risus, at imperdiet mauris imperdiet at. 
                            Nulla pretium blandit dui, eget efficitur purus tincidunt ut. Integer ultrices 
                            rutrum leo, eu condimentum lectus laoreet sit amet. Ut luctus massa quis 
                            consequat fermentum. Cras sed metus in magna pellentesque luctus.
                        </h3>
                    </div>
                </div>
           </div>
        )
    }

export default ReviewSectionComponent