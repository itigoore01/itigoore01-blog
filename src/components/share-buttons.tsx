import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

interface Props {
  slug: string;
  title: string;
  className?: string;
}

const ShareButtons: FC<Props> = ({
  slug,
  title: postTitle,
  className = '',
}) => {
  const data = useStaticQuery<GatsbyTypes.ShareQuery>(graphql`
    query Share {
      site {
        siteMetadata {
          title
          siteUrl
          social {
            twitter
          }
        }
      }
    }
  `);

  const url = `${data.site!.siteMetadata!.siteUrl}${slug}`;
  const title = `${postTitle} | ${data.site!.siteMetadata!.title}`;

  const iconSize = 40;

  return (
    <div className={`space-x-2 ${className}`}>
      <TwitterShareButton
        url={url}
        title={title}
        via={data.site!.siteMetadata!.social!.twitter}
      >
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <HatenaShareButton url={url}>
        <HatenaIcon size={iconSize} round />
      </HatenaShareButton>
    </div>
  );
};

export default ShareButtons;
