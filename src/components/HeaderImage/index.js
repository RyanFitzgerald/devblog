import React from 'react';
import Link, { withPrefix } from 'gatsby-link';

import Wrapper from './Wrapper';
import imgSrc from '../../main.jpg';

function HeaderImage() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={imgSrc} />
      </Link>
    </Wrapper>
  );
}

export default HeaderImage;