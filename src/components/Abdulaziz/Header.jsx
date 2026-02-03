import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <span className="green">Shop</span>per
                </div>

                <div className="search-box">
                    <input type="text" placeholder="Search Items" />
                    <button className="s-btn">
                        <Search size={20} strokeWidth={2.5} />
                    </button>
                </div>

                <div className="actions">
                    <div className="cart-link">
                        <ShoppingBag size={20} className="green" />
                        <span>0 Items Added</span>
                    </div>

                    <button className="auth-btn">
                        <User size={20} />
                        <span>Login or Sign Up</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;