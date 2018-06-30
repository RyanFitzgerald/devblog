import React from 'react';
import Link, { withPrefix } from 'gatsby-link';

import Wrapper from './Wrapper';
import imgSrc from '../../../static/main.jpg';

function HeaderImage() {
  return (
    <Wrapper>
      <Link to="/">
        <img src="main.jpg" />
      </Link>
    </Wrapper>
  );
}

export default HeaderImage;