import React from 'react';
import Link from 'gatsby-link';

// import Wrapper from './Wrapper';
// import ButtonWrapper from './ButtonWrapper';
// import Container from '../Container';
// import Date from './Date';
// import H2 from './H2';
// import Link from './Link';
// import Button from '../Button';

function Summary({date, title, excerpt, slug}) {
  return (
    <div>
        <h2><Link to={slug}>{title}</Link></h2>
        <span>{date}</span>
        <p>{excerpt}</p>
    </div>
  );
}

export default Summary;