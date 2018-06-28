import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
 
injectGlobal`
  ${styledNormalize}
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    background: #f9fafc;
    font-family: 'Open Sans', sans-serif; 
    line-height: 1.5;
    padding: 50px 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;