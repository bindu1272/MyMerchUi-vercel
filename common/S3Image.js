
"use client";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import Image from "next/image";

const S3Image = (props) => {
    const backendUrl = process.env.NEXT_APP_IMAGES_SRC_URL;
    const [loaded, setLoaded] = useState(false);
    let imageUrl = "https://dev-assets.mymerch.com.au/src/images"+`${props?.src}`;
    var attributes = {};
    Object.keys(props).forEach((key) => {
        if (key !== "src") {
            attributes[key] = props[key];
        }
    });
    return (
        <>
            {!loaded && <LoadingOutlined style={{ fontSize: "50px" }} />}
            {!props?.width ?
                props?.layout == "auto" ?
                    <Image
                        className="img-fluid"
                        src={imageUrl}
                        onLoad={() => setLoaded(true)}
                        {...attributes}
                        alt=""
                        width={0}
                        height={0}
                        style={{ width: 'auto', height: 'auto' }}
                    />
                :
                <Image
                    className="img-fluid"
                    src={imageUrl}
                    onLoad={() => setLoaded(true)}
                    {...attributes}
                    alt=""
                    fill
                />
            :
            <Image
                className="img-fluid"
                src={imageUrl}
                onLoad={() => setLoaded(true)}
                {...attributes}
                width={props?.width}
                height={props?.height}
                alt=""
            />
            }

        </>
    );
}
export default S3Image;
