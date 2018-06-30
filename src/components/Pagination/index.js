import React from 'react';

import Wrapper from './Wrapper';
import Button from '../Button';

function Pagination({previousUrl, nextUrl, isFirst = false, isLast = false}) {
  return (
    <Wrapper>
      {!isFirst &&
        <Button to={previousUrl}>&larr; Newer Posts</Button>
      }
      {!isLast &&
        <Button to={nextUrl}>Older Posts &rarr;</Button>
      }
    </Wrapper>
  );
}

export default Pagination;