import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ShareButtons from '../components/share-buttons';
import GatsbyImage from 'gatsby-image';

type Props = PageProps<
  GatsbyTypes.BlogPostBySlugQuery,
  GatsbyTypes.MarkdownRemarkEdge
>;

const BlogPostTemplate: FC<Props> = ({ data, location }) => {
  const post = data.markdownRemark!;
  const siteTitle = data.site!.siteMetadata!.title ?? `Title`;

  const imagePath = post.frontmatter?.image?.publicURL;
  const image = post.frontmatter?.image?.childImageSharp?.fluid;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post!.frontmatter!.title ?? ''}
        description={post.frontmatter!.description ?? post.excerpt}
        image={imagePath}
      />
      <article itemScope itemType="https://schema.org/BlogPosting">
        <header className="py-4">
          <h1 className="text-xl font-bold" itemProp="headline">
            {post.frontmatter!.title}
          </h1>
          <time className="text-gray-500 text-sm">
            {post.frontmatter!.date}
          </time>
          {image && (
            <GatsbyImage fluid={image} itemProp="image" className="mt-4" />
          )}
        </header>
        <section
          className="py-8 prose"
          dangerouslySetInnerHTML={{ __html: post?.html ?? '' }}
          itemProp="articleBody"
        />
        <ShareButtons
          className="mb-8"
          slug={post!.fields!.slug!}
          title={post!.frontmatter!.title!}
        />
        <footer>
          <Bio />
        </footer>
      </article>
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
    markdownRemark(
      fields: { slug: { eq: $slug }, sourceName: { eq: "blog" } }
    ) {
      id
      excerpt(truncate: true, pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        category
        image {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
