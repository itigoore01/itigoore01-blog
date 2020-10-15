import React, { FC } from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

type Props = PageProps<GatsbyTypes.BlogIndexQuery>;

const BlogIndex: FC<Props> = ({ data, location }) => {
  const siteTitle = data.site!.siteMetadata!.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="投稿一覧" />
      {posts.map((post) => {
        const title = post.frontmatter!.title || post.fields!.slug;
        return (
          <article
            key={post.fields!.slug}
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2>
                <Link to={post.fields!.slug!} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>
              <small>{post.frontmatter!.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter!.description || post.excerpt!,
                }}
                itemProp="description"
              />
            </section>
          </article>
        );
      })}
      <Bio />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
        }
      }
    }
  }
`;