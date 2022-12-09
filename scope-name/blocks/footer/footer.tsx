import React, { ReactNode } from 'react';
import {
  Footer as DesignFooter,
  FooterProps as DesignFooterProps,
} from '@teambit/design.blocks.footer';
import { footerLinks } from './footer-links';

export type FooterProps = {
  /**
   * children to be rendered on the footer bottom section.
   */
  children?: ReactNode;
} & Omit<DesignFooterProps, 'categoryList'>;

export function Footer({ children, ...rest }: FooterProps) {
  return (
    <DesignFooter {...rest} categoryList={footerLinks}>
      {children}
    </DesignFooter>
  );
}
