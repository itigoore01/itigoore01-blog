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
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
