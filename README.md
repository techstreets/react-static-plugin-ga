# react-static-plugin-ga

A react-static plugin allowing you to add the GA script tag to your page.

## Installation

In an existing react-static site run:

```bash
$ yarn add react-static-plugin-ga
```

Then add the plugin to your `static.config.js`:

```javascript
export default {
  plugins: [
    [
      'react-static-plugin-ga',
      {
        id: 'your-ga-id'
      }
    ]
  ]
};
```
