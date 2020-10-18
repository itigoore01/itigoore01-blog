import React, { FC } from 'react';
import styled from 'styled-components';

const FooterContent = styled.footer`
  text-align: center;
`;

const Footer: FC = () => {
  return (
    <FooterContent>
      <div>
        <a href="https://github.com/itigoore01/itigoore01-blog" target="_new">
          Source Code
        </a>
      </div>
      <div>© {new Date().getFullYear()} shota</div>
    </FooterContent>
  );
};

export default Footer;
