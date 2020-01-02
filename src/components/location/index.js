import React from 'react';


const Location = () => {
    
        return (
            <div className="location_wrapper">
                <iFrame
                src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.1767701863314!2d7.557384815629714!3d47.58380367918312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9432a9e34e1%3A0x97dbbfc514136061!2sI%20TECH%20GSM!5e0!3m2!1sfr!2sfr!4v1577902301975!5m2!1sfr!2sfr" width="100%" height="500px" frameBorder="0" Style="border:0;" allowFullScreen=""
                ></iFrame>
                <div className="location_tag">
                    <div>Location</div>
                </div>
                
            </div>
        );
    };

export default Location;
