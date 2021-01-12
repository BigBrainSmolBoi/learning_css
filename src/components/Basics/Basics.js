import React from 'react';

import classes from './Basics.module.css';

export default function Basics(props) {
  return (
    <>
      {props.title && (
        <section className={classes.titleBar}>
          <h1 className={classes.title}>Get the Freedom you deserve</h1>
        </section>
      )}
      {props.subTitle && (
        <section>
          <h1 className={classes.subTitle}>I am another h1 </h1>
        </section>
      )}
    </>
  );
}
