import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import userConfig from '../../../config';

const Link = styled(GatsbyLink)`
  color: ${userConfig.primaryColor};
  text-decoration: none;
`;

export default Link;