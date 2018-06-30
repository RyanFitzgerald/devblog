import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import userConfig from '../../../config';

const ContinueReading = styled(GatsbyLink)`
  color: #666d71;
  display: inline-block;
  font-size: 14px;
  margin-top: 50px;
  text-decoration: none;

  &:hover {
    color: ${userConfig.primaryColor};
  }  
`;

export default ContinueReading;