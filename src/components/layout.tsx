import React, { FC } from 'react';
import { Link, PageRendererProps } from 'gatsby';
import Footer from './footer';

interface Props extends PageRendererProps {
  title: string;
}

const Layout: FC<Props> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="flex flex-col min-h-screen" data-is-root-path={isRootPath}>
      <header className="flex w-screen h-16 border-b border-gray-800 items-center flex-shrink-0">
        <div className="container mx-auto px-4">
          <Link className="text-lg font-bold" to="/">
            {title}
          </Link>
        </div>
      </header>
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default Layout;
