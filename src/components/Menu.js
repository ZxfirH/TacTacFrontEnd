import React from "react";

const Menu = () => {
    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'feed', label: 'Feed' },
        { id: 'login', label: 'Login' },
        // Add more menu items as needed
    ];

    return (
        <div className="menu">
            <ul className="hnavbar">
                {menuItems.map((menuItem) => (
                    <li key={menuItem.id}>
                        <button>{menuItem.label}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;