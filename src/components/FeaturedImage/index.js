import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';

function FeaturedImage({ image }) {
  return (
    <Wrapper>
      {image?.childImageSharp?.fixed && <Img fixed={image.childImageSharp.fixed} alt="" />}
      {image?.childImageSharp?.fluid && <Img fluid={image.childImageSharp.fluid} alt="" />}
    </Wrapper>
  );
}

export default FeaturedImage;
