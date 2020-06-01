import React from 'react';
import './Photos.less';

export const Photos = () => {
    return (
        <div className="photos">
            <div className="main">
                <img
                    src="https://odis.homeaway.com/odis/listing/0bf854e7-7102-4377-bffd-485a5bf6f1b8.f10.jpg"
                    className="photo"
                />
                <img
                    src="https://odis.homeaway.com/odis/listing/13bf835e-11f2-4844-b759-c6b8b8d881b7.f10.jpg"
                    className="photo"
                />
                <img
                    src="https://odis.homeaway.com/odis/listing/2974d419-a707-46bc-a3f4-e2c86f897ebd.f10.jpg"
                    className="photo"
                />
            </div>
        </div>
    );
};
