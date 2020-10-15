import React, { FC } from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

type Props = PageProps<
  GatsbyTypes.BlogPostBySlugQuery,
  GatsbyTypes.MarkdownRemarkEdge
>;

const BlogPostTemplate: FC<Props> = ({ data, pageContext, location }) => {
  const post = data.markdownRemark!;
  const siteTitle = data.site!.siteMetadata!.title ?? `Title`;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post!.frontmatter!.title ?? ''}
        description={post.frontmatter!.description ?? post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter!.title}</h1>
          <p>{post.frontmatter!.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post?.html ?? '' }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous?.fields!.slug && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter!.title}
              </Link>
            )}
          </li>
          <li>
            {next?.fields!.slug && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter!.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
      }
    }
  }
`;