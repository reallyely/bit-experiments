import React from 'react';
import {
  Header as DesignHeader,
  HeaderProps as DesignHeaderProps,
} from '@teambit/design.blocks.header';
import { Toggler } from '@teambit/community.ui.community-highlighter';
import { ThemeToggler } from '@teambit/design.themes.theme-toggler';
import { headerLinks } from './links';

export type HeaderProps = {} & DesignHeaderProps;

export function Header(props: HeaderProps) {
  return (
    <DesignHeader
      {...props}
      menuLinks={headerLinks}
      plugins={[Toggler, ThemeToggler]}
    />
  );
}
