import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CommunityHighlighter } from '@teambit/community.ui.community-highlighter';
import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import { Header } from '@org/scope-name.blocks.header';
import { Footer } from '@org/scope-name.blocks.footer';
import { Wiki } from '@org/scope-name.sections.wiki';
import { centerColumn } from '@teambit/base-ui.layout.page-frame';
import { ScrollableSection } from '@teambit/community.layout.scrollable-section';
import styles from './wiki.module.scss';

export function WikiApp() {
  return (
    <ThemeSwitcher defaultTheme="dark" className={styles.fixHeight}>
      <CommunityHighlighter>
        {/* header component */}
        <div className={styles.app}>
          <Header className={styles.sticky} />
          <ScrollableSection>
            <Routes>
              <Route path="/*" element={<Wiki />} />
            </Routes>
            <Footer className={styles.centerBottom} />
          </ScrollableSection>
        </div>
      </CommunityHighlighter>
    </ThemeSwitcher>
  );
}
