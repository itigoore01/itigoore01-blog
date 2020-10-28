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
import { sendShareEvent } from '../utils/gtag/share-event';

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

  function onShareClick(media: string) {
    sendShareEvent({
      method: media,
      contentType: 'post',
      contentId: slug,
    });
  }

  return (
    <div className={`space-x-2 ${className}`}>
      <TwitterShareButton
        url={url}
        title={title}
        via={data.site!.siteMetadata!.social!.twitter}
        onClick={() => onShareClick('Twitter')}
      >
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <FacebookShareButton url={url} onClick={() => onShareClick('Facebook')}>
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <HatenaShareButton url={url} onClick={() => onShareClick('Hatena')}>
        <HatenaIcon size={iconSize} round />
      </HatenaShareButton>
    </div>
  );
};

export default ShareButtons;
