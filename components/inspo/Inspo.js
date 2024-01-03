import React from "react";

const Inspo = ({
    inspo
}) => {
    return (
        <div className="inspo-item-info">
            <img
                //src={`${process.env.REACT_APP_STRAPI_API_URL}${inspo.image330x330 && inspo.image330x330.url}`}
                src={`${inspo.image330x330 && inspo.image330x330.url}`}
                width='500'
                height='328'
            />
            <div className="overly-info">
                <label>{inspo.createDate}</label>
                <h1>{inspo.title}</h1>
                <div className="hide-info">
                    <h3>{inspo.description}</h3>
                    <a
                        className="btn_white"
                        href={`/MyMerchInspoDetails/${inspo.slug}`}
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Inspo;
