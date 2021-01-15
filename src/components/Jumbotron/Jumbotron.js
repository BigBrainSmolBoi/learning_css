import React from 'react';

import classes from './Jumbotron.module.css';

export default function Jumbotron(props) {
  return (
    <>
      <section className={classes.titleBar}>
        <h1 className={classes.title}>Get the Freedom you deserve</h1>
      </section>
    </>
  );
}
