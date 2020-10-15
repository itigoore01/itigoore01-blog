/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

const Bio = () => {
  const data = useStaticQuery<GatsbyTypes.BioQueryQuery>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site!.siteMetadata!.author;
  const social = data.site!.siteMetadata!.social;

  const avatar = data.avatar!.childImageSharp!.fixed;

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author!.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <div>
          <a href={`https://twitter.com/${social!.twitter}`} target="_new">{author.name}</a>
          
          <p>{author?.summary || null}</p>
        </div>
      )}
    </div>
  );
};

export default Bio;