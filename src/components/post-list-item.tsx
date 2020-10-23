import React, { FC } from 'react';
import { Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';

interface Props {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: FluidObject;
}

export const PostListItem: FC<Props> = ({
  slug,
  title,
  date,
  description,
  image,
}) => {
  return (
    <article className="py-4" itemScope itemType="http://schema.org/Article">
      <Link to={slug!} itemProp="url" className="flex">
        <div className="flex-1">
          <header>
            <h2 className="font-semibold text-lg" itemProp="headline">
              {title}
            </h2>
            <span className="text-xs text-gray-500">{date}</span>
          </header>
          <section className="mt-1">
            <p
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              itemProp="description"
            />
          </section>
        </div>
        {image && (
          <GatsbyImage
            className="rounded-md ml-4 w-16 h-16 sm:w-24 sm:h-24"
            fluid={image}
          />
        )}
      </Link>
    </article>
  );
};
