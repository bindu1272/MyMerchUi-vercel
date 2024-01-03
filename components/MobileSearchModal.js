import React from 'react';
import  Link  from "next/link";
import { CloseOutlined } from "@ant-design/icons";
import { Input } from 'antd';

const MobileSearchModal = ({
    searchText,
    navigationOptions,
    setSearchText,
    handleSearch,
    onClose,
}) => {
    return (
        <>
            <div className="search_modal">
                <div className="search_header">
                    Search
                    <Link href=""
                        onClick={onClose}
                        className="close_btn"
                    >
                        <CloseOutlined />
                    </Link>
                </div>
                <div>
                    <Input
                        placeholder="Type something..."
                        value={searchText}
                        onChange={e => {
                            setSearchText(e.target.value)
                        }}
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
                                onClose();
                                handleSearch();
                            }
                        }}
                    />
                </div>
                {/* <div className="search_suggestions">
                    <h2>Search Suggestions</h2>
                    <ul>
                        {navigationOptions &&
                            navigationOptions.length > 0 &&
                            navigationOptions.map((option) =>
                                option.children.map((child) => (
                                    (<li>{child.name}</li>)
                                ))
                            )
                        }
                    </ul>
                </div> */}
            </div>
        </>
    )
}

export default MobileSearchModal;