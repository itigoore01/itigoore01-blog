import classNames from 'classnames';
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
    <div
      className={classNames(
        'flex flex-col text-center items-center',
        className
      )}
    >
      <div className="font-extrabold text-2xl mb-2 font-display">SHARE</div>
      <div className="space-x-4">
        <TwitterShareButton
          url={url}
          title={title}
          via={data.site!.siteMetadata!.social!.twitter}
          onClick={() => onShareClick('Twitter')}
          className="transition-transform duration-200 ease-out transform hover:scale-110 hover:-translate-y-1"
        >
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>
        <FacebookShareButton
          url={url}
          onClick={() => onShareClick('Facebook')}
          className="transition-transform duration-200 ease-out transform hover:scale-110 hover:-translate-y-1"
        >
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>
        <HatenaShareButton
          url={url}
          onClick={() => onShareClick('Hatena')}
          className="transition-transform duration-200 ease-out transform hover:scale-110 hover:-translate-y-1"
        >
          <HatenaIcon size={iconSize} round />
        </HatenaShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
