import React from 'react';

import classes from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={classes.mainHeader}>
      <div>
        <a href='#' className={classes.mainHeaderBrand}>
          uHost
        </a>
      </div>
      <nav className={classes.mainNav}>
        <ul className={classes.mainNavItems}>
          <li className={classes.mainNavItem}>
            <a href='#'>Packages</a>
          </li>
          <li className={classes.mainNavItem}>
            <a href='#'>Customers</a>
          </li>
          <li className={`${classes.mainNavItem} ${classes.mainNavItemCta}`}>
            <a href='#'>Start Hosting</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
