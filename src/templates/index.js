import React, { Component } from "react";
import Helmet from 'react-helmet';
import userConfig from '../../config';

import Card from '../components/Card';
import Container from '../components/Container';
import Summary from '../components/Summary';
import Pagination from '../components/Pagination';
 
const IndexPage = ({ pathContext }) => {
  const { group, index, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return (
    <Container>
      <Helmet title={`${userConfig.title} | ${userConfig.author}`} />
      {group.map(({ node }) => (
        <Card key={node.fields.slug}>
          <Summary 
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            image={node.frontmatter.featuredImage}
            slug={node.fields.slug}
          />
        </Card>
      ))}
      <Pagination 
        isFirst={index === 1}
        isLast={index === pageCount}
        nextUrl={nextUrl}
        previousUrl={previousUrl}
      />
    </Container>
  );
};
export default IndexPage;