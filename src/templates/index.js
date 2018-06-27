import React, { Component } from "react";
import Helmet from 'react-helmet';
import Link from "gatsby-link";

import Article from '../components/Article';
import Summary from '../components/Summary';
import Pagination from '../components/Pagination';
 
const IndexPage = ({ data, pathContext }) => {
  const { group, index, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <section>
      <Helmet title="Dev Blog | Ryan Fitzgerald" />
      {group.map(({ node }) => (
        <Article>
          <Summary 
            key={node.frontmatter.path}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            slug={node.fields.slug}
          />
        </Article>
      ))}
      <Pagination 
        isFirst={index === 1}
        isLast={index === pageCount}
        nextUrl={nextUrl}
        previousUrl={previousUrl}
      />
    </section>
  );
};
export default IndexPage;