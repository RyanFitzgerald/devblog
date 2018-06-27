import styled from 'styled-components';
import Link from 'gatsby-link';

const Button = styled(Link)`
  border: 1px solid #000;
  border-radius: 25px;
  color: #000;
  display: inline-block;
  font-size: 0.75em;
  font-weight: 700;
  padding: 5px 25px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    border-color: #000;
  }
`;

export default Button;