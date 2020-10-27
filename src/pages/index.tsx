import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { PostListItem } from '../components/post-list-item';

type Props = PageProps<GatsbyTypes.BlogIndexQuery>;

const BlogIndex: FC<Props> = ({ data, location }) => {
  const siteTitle = data.site!.siteMetadata!.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="投稿一覧" />
      {posts.map((post) => (
        <PostListItem
          key={post.fields!.slug}
          slug={post.fields!.slug!}
          title={post.frontmatter!.title!}
          date={post.frontmatter!.date!}
          description={post.frontmatter!.description ?? post.excerpt!}
          image={post.frontmatter!.image?.childImageSharp?.fluid}
        />
      ))}
      <Bio className="my-4" />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt(truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 100, maxHeight: 100, quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
