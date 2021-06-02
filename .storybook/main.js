// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ]
// }

// 僅顯示components中的stories
// module.exports = {
//   stories: ['../src/components/**/*.stories.js'],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],
// };

module.exports = {
  "stories": ['../src/**/*.stories.js'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
};