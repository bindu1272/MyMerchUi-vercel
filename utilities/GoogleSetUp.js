import { Helmet } from "react-helmet";
import React from "react";
import ReactGA from 'react-ga';

export const initGA = trackingID => {
    // trackingID && ReactGA.initialize(trackingID); //? trackingID : process.env.REACT_APP_GA_ID);
};

function GoogleSetup({
    title,
    description
}) {
    return (
      
        <Helmet>
            <title>{title ? title : 'Home'} | MyMerch</title>
            <meta name="description" content={description} />
        </Helmet>
    )
}

export const trackPageViewInGoogle = additionalText => {
    // ReactGA.pageview(
    //     window.location.pathname +
    //     (additionalText ? additionalText : '') +
    //     window.location.search
    // );
};

export const trackEventInGoogle = (category, action, label) => {
    // ReactGA.event({
    //     category,
    //     action,
    //     label
    // });
};

export default GoogleSetup;
