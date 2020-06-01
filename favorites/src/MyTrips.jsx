import React from 'react';
import './MyTrips.less';

export const MyTrips = () => {
    return (
        <div className="my-trips">
            <div className="trip">
                <p>Summer Trip</p>
                <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1_Img1.png" />
            </div>
            <div className="trip">
                <p>Winter Trip</p>
                <img src="https://csvcus.homeaway.com/rsrcs/traveler-tripboards-ui/onboarding/Scene-5/S1C3_Img1.png" />
            </div>
        </div>
    );
}