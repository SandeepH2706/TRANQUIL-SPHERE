import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Consult', href: '/consult' },
    { label: 'Health Record', href: '/healthcare' },
    { label: 'Health Support', href: '/health-support' },
    { label: 'Know Yourself', href: '/know-yourself' },
    { label: 'Donations', href: '/donations' },
    { label: 'Sign In', href: '/signin' },
    { label: 'Login', href: '/login' },
  ];

  return (
    <nav className="header">
      <Link to="/" className="logo">TRANQUIL SPHERE</Link>
      <div className="nav-buttons">
        {navItems.map((item, index) => (
          <Link key={index} to={item.href} className="nav-btn">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
