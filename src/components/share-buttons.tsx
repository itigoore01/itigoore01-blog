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
import styled from 'styled-components';

const Wrapper = styled.div`
  .share-button {
    margin: 0 4px;
  }
`;

interface Props {
  slug: string;
  title: string;
}

const ShareButtons: FC<Props> = ({ slug, title: postTitle }) => {
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
    <Wrapper>
      <TwitterShareButton
        className="share-button"
        url={url}
        title={title}
        via={data.site!.siteMetadata!.social!.twitter}
      >
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <FacebookShareButton className="share-button" url={url}>
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <HatenaShareButton className="share-button" url={url}>
        <HatenaIcon size={iconSize} round />
      </HatenaShareButton>
    </Wrapper>
  );
};

export default ShareButtons;
