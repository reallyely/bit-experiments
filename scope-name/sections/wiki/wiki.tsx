import React, { ReactNode } from 'react';
import { Docs } from '@teambit/docs.ui.docs';
import { primaryRoutes, categories } from './wiki-contents';
import { wideColumn } from '@teambit/base-ui.layout.page-frame';
import styles from './wiki.module.scss';

export type WikiProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Wiki({ children }: WikiProps) {
  return (
    <Docs
      className={wideColumn}
      primaryLinks={primaryRoutes}
      contents={categories}
      baseUrl="/"
    >
      {children}
    </Docs>
  );
}
