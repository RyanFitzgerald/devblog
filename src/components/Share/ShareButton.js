import styled from 'styled-components';

const ShareButton = styled.a`
  border: 1px solid #bfc8d2;
  border-radius: 15px;
  display: inline-block;
  margin: 5px;
  padding: 5px 15px;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 20px;
    stroke: #6e849c;
    vertical-align: middle;
    width: 20px;
  }

  &:hover {
    border-color: #3e465b;
  }
`;

export default ShareButton;