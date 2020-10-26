import { Link } from 'gatsby';
import React, { FC } from 'react';

interface Props {
  className: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={`container mx-auto px-4 ${className}`}>
      <div className="flex flex-col text-center justify-center h-20 w-full text-gray-600 text-sm border-t border-gray-800 space-y-2">
        <div className="space-x-4">
          <Link to="/privacy-policy/" className="underline">
            プライバシーポリシー
          </Link>
          <a
            className="underline"
            href="https://github.com/itigoore01/itigoore01-blog"
            target="_new"
          >
            Source Code
          </a>
        </div>
        <div>© {new Date().getFullYear()} shota</div>
      </div>
    </footer>
  );
};

export default Footer;
