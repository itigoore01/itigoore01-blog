/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Bio: FC<Props> = ({ className = '' }) => {
  const data = useStaticQuery<GatsbyTypes.BioQuery>(graphql`
    query Bio {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp
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
    <div
      className={classNames(
        'flex shadow-sm bg-gray-800 rounded-lg p-6',
        className
      )}
    >
      {avatar && (
        <Image
          fixed={avatar}
          alt={author!.name || ``}
          className="mr-4 w-32 h-32 rounded-full"
        />
      )}
      {author?.name && (
        <div className="flex-1">
          <a
            className="text-base font-semibold"
            href={`https://twitter.com/${social!.twitter}`}
            target="_new"
          >
            {author.name}
          </a>

          <p className="text-sm">{author?.summary || null}</p>
        </div>
      )}
    </div>
  );
};

export default Bio;
