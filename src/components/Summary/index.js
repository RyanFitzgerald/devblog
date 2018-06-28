import React from 'react';
import Link from 'gatsby-link';

import Wrapper from './Wrapper';

function Summary({date, title, excerpt, slug}) {
  return (
    <Wrapper>
        <h2><Link to={slug}>{title}</Link></h2>
        <span>{date}</span>
        <p>{excerpt}</p>
    </Wrapper>
  );
}

export default Summary;