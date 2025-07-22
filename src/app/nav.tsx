'use client';
import React from 'react';
import { NavItem } from '@/_shared/namespace';

export type Nav = {
  menuNavitem: NavItem[];
  resourcesNavItem: NavItem[];
  connectNavItem: NavItem[];
};

const menuNavItem: NavItem[] = [
  { key: 'explore', label: 'Explore', icon: <i className="ri-compass-3-line"></i> },
  { key: 'about', label: 'About', icon: <i className="ri-user-line"></i> },
  {
    key: 'certification',
    label: 'Certification',
    icon: <i className="ri-graduation-cap-line"></i>,
  },
  { key: 'stacks', label: 'Stacks', icon: <i className="ri-stack-line"></i> },
  { key: 'projects', label: 'Projects', icon: <i className="ri-task-line"></i> },
  { key: 'experience', label: 'Work Experience', icon: <i className="ri-briefcase-line"></i> },
];

const resourcesNavItems: NavItem[] = [
  // { key: 'feeds', label: 'Feeds', icon: <i className="ri-layout-4-line"></i> },
  // { key: 'boutique', label: 'Boutique', icon: <i className="ri-shopping-cart-line"></i> },
  { key: 'blog', label: 'Blog', icon: <i className="ri-message-3-line"></i> },
  // { key: 'courses', label: 'Courses', icon: <i className="ri-graduation-cap-line"></i> },
  { key: 'services', label: 'Services', icon: <i className="ri-service-line"></i> },
];

const connectNavItems: NavItem[] = [
  {
    key: 'facebook',
    label: 'Facebook',
    icon: <i className="ri-facebook-circle-line"></i>,
    url: 'https://web.facebook.com/profile.php?id=100015212311430',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: <i className="ri-instagram-line"></i>,
    url: 'https://www.instagram.com/ifeanyiemmanuel_ng/',
  },
  {
    key: 'whatsapp',
    label: 'Whatsapp',
    icon: <i className="ri-whatsapp-line"></i>,
    url: 'https://wa.me/09076141362',
  },
  {
    key: 'x',
    label: 'X',
    icon: <i className="ri-twitter-x-line"></i>,
    url: 'https://x.com/IfeanyiOdogwu_',
  },
  {
    key: 'linkedIn',
    label: 'LinkedIn',
    icon: <i className="ri-linkedin-line"></i>,
    url: 'https://www.linkedin.com/in/ifeanyi-ogbonna-ba64b61a5/',
  },
];

const appNav: Nav = {
  menuNavitem: menuNavItem,
  resourcesNavItem: resourcesNavItems,
  connectNavItem: connectNavItems,
};

export { appNav };
