import styled from 'styled-components';

const PostContent = styled.div`
color: #65738c;
  
a {
  color: #3b62ed;
  font-weight: 700;
  text-decoration: none;
  
  &:hover {
    color: #1d3793;
  }
}

h1 {
  color: #3e465b;
  font-size: 3em;
  font-weight: 700;
  line-height: 1.5;
  margin: 25px 50px 15px;
}

h2 {
  color: #3e465b;
  font-size: 2.2em;
  font-weight: 700;
  line-height: 1.5;
  margin: 25px 50px 15px;
}

h3 {
  color: #3e465b;
  font-size: 1.7em;
  font-weight: 700;
  line-height: 1.5;
  margin: 25px 50px 15px;
}

h4 {
  color: #3e465b;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.5;
  margin: 25px 50px 15px;
}

p {
  font-size: 1.5em;
  line-height: 1.7;
  margin: 15px 50px;
}

blockquote {
  border-left: 5px solid #e0e6ed;
  font-size: 1.5em;
  line-height: 1.7;
  margin: 15px 50px 15px 75px;
  padding: 10px 10px 10px 15px;
}

ul,
ol {
  font-size: 1.5em;
  line-height: 1.7;
  margin: 15px 0;
  padding: 0 50px 0 100px;
}

img {
  margin: 15px 0;
}
`;

export default PostContent;