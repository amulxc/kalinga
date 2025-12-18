import React from 'react'
import MediaCardSlider from '../general/media-card-slider';

function Sportsandwellnessevents() {
    const imageItems = [
        {
            id: 1,
            title: "Video 1",
            description: "Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
        },
    ];

    return (
        <>
            <MediaCardSlider
                categoryTitle="Sports Events"
                title="Lorem ipsum dolor sit amet, consectetur"
                imageItems={imageItems}
                swiperClassName="ccrc-video-slider"
            />

        </>
    )
}

export default Sportsandwellnessevents