import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

type Props = PageProps<GatsbyTypes.PrivacyPolicyPageQuery>;

const PrivacyPolicy: FC<Props> = ({ data, location }) => {
  const siteTitle = data.site!.siteMetadata!.title ?? '';
  const privacyPolicy = data.markdownRemark!;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="プライバシーポリシー" />
      <section
        className="prose py-8"
        dangerouslySetInnerHTML={{ __html: privacyPolicy.html ?? '' }}
      />
    </Layout>
  );
};

export default PrivacyPolicy;

export const pageQuery = graphql`
  query PrivacyPolicyPage {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      fields: {
        sourceName: { eq: "privacy-policy" }
        slug: { eq: "/privacy-policy/" }
      }
    ) {
      html
    }
  }
`;
