import React from "react";
import Link  from "next/link";
import { Menu } from "antd";

const Navigator = ({
  active
}) => {
  
  return (
    <div className="top_title_bar p-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Menu mode="inline" className="admin_nav">
              <Menu.Item
                className="admin-nav-item"
                style={active == "products" ? { backgroundColor: "#0072CE", color: '#fff', fontWeight: 'bold' } : {}}
              >
                <Link href="/admin">Products </Link>
              </Menu.Item>
              <Menu.Item
                className="admin-nav-item"
                style={active == "sizeguides" ? { backgroundColor: "#0072CE", color: '#fff', fontWeight: 'bold' } : {}}
              >
                <Link href="/admin/sizeguides">Size Guides</Link>
              </Menu.Item>
              <Menu.Item
                className="admin-nav-item"
                style={active == "users" ? { backgroundColor: "#0072CE", color: '#fff', fontWeight: 'bold' } : {}}
              >
                <Link href="/admin/users">Users</Link>
              </Menu.Item>             
              <Menu.Item
                className="admin-nav-item"
                style={active == "settings" ? { backgroundColor: "#0072CE", color: '#fff', fontWeight: 'bold' } : {}}
              >
                <Link href="/admin/settings">Settings</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
