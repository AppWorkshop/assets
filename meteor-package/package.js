Package.describe({
  name: 'hybrid:assets',
  summary: 'Resize and optimize images for web, mobile, and desktop (icons/retina/favicons/etc)',
  version: '0.2.3',
  git: 'https://github.com/meteorhybrid/asset-builder'
});

Package.registerBuildPlugin({
  name: "buildAssets",
  use: ['meteor'],
  sources: [
    'plugin/build-assets.js'
  ],
  npmDependencies: {"hybrid-assets": "0.1.5"}
});