import React, { useState } from "react";
import  Link  from "next/link";

// import "../common/customJquery";

const WebHeaderNavigation = ({
    navigationOptions = []
}) => {
    const [currentParentKey, setCurrentParentKey] = useState({});

    return (
        <nav className="nav-section">
            <div className="navigation">
                <ul>
                    {navigationOptions &&
                        navigationOptions.map((option,index) => (
                            <li className="has-children navigation-item" key={option?.key || index} >
                                <Link href="" style={{textDecoration:"none"}} key={index}>
                                    {option.name}
                                </Link>
                                <ul className="dropdown-menu">
                                    <div className="mega-menu">
                                        <div className="mega-dropdown-menu">
                                            {option.children && option.children.map((child,index) => (
                                                <ul key={index}>
                                                    <li
                                                        className={child.key === currentParentKey ? "active" : ""}
                                                        key={"child" + child.key}
                                                    >
                                                        <Link href={child.url}>
                                                            {child.name}
                                                        </Link>
                                                        {child.children &&
                                                            child.children.length > 0 &&
                                                            <ul className="child_nav">
                                                                {child.children.map((grandChild,index) => (
                                                                    <li
                                                                        key={"grandChild" + grandChild.key}
                                                                        onMouseEnter={() => {
                                                                            setCurrentParentKey(grandChild.parent_product_category_key);
                                                                        }}
                                                                        onMouseLeave={() => {
                                                                            setCurrentParentKey({});
                                                                        }}
                                                                    >
                                                                        <Link href={grandChild.url}>
                                                                            {grandChild.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        }
                                                    </li>
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        ))}
                </ul>
            </div>
        </nav>
    );
}

export default WebHeaderNavigation;
