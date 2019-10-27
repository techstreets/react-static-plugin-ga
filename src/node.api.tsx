import React from 'react';
import cheerio from 'cheerio';

export default ({ id }) => ({
  afterExport: ({ stage }) => {
    if (stage === 'prod') {
      if (!id) {
        console.warn(
          'Warning: react-static-plugin-google-analytics - No Google Analytics ID was provided, will not insert GA script.'
        );
      }
    }
  },
  headElements: (elements: React.ReactNodeArray, { stage }) => {
    if (stage === 'prod' && id) {
      return [
        <script
          key="ga"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        />,
        ...elements
      ];
    }
    return elements;
  }
});
