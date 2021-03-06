import React from 'react';

import classes from './Plans.module.css';

export default function Plans() {
  return (
    <div>
      <div id='plans'>
        <h2 className={classes.plansTitle}>Choose your plan</h2>
        <article className={classes.plan}>
          <h1>FREE</h1>
          <h2>$0/month</h2>
          <h3>For hobby projects or small teams.</h3>
          <ul className={classes.planFeatures}>
            <li>1 Workspace</li>
            <li>Unlimited Traffic</li>
            <li>10GB Storage</li>
            <li>Basic Support</li>
          </ul>
          <div>
            <button>CHOOSE PLAN</button>
          </div>
        </article>
        <article className={`${classes.plan} ${classes.planHighlighted}`}>
          <h1 className={classes.highlightedAnnotation}>RECOMMENDED</h1>
          <h1>PLUS</h1>
          <h2>$29/month</h2>
          <h3>For ambitious projects.</h3>
          <ul className={classes.planFeatures}>
            <li>5 Workspaces</li>
            <li>Unlimited Traffic</li>
            <li>100GB Storage</li>
            <li>Plus Support</li>
          </ul>
          <div>
            <button>CHOOSE PLAN</button>
          </div>
        </article>
        <article className={classes.plan}>
          <h1>PREMIUM</h1>
          <h2>$99/month</h2>
          <h3>Your enterprise solution.</h3>
          <ul className={classes.planFeatures}>
            <li>10 Workspaces</li>
            <li>Unlimited Traffic</li>
            <li>Unlimited Storage</li>
            <li>Priority Support</li>
          </ul>
          <div>
            <button>CHOOSE PLAN</button>
          </div>
        </article>
      </div>
    </div>
  );
}
