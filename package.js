Package.describe({
  name: 'rgnevashev:angular-bootstrap-slider',
  version: '0.1.26',
  summary: 'An angular directive for seiyria-bootstrap-slider',
  git: 'https://github.com/seiyria/angular-bootstrap-slider',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  //api.versionsFrom('1.2.1');
  api.use(['rgnevashev:bootstrap-slider@6.0.14']);
  api.addFiles([
    "slider.js"
  ], 'client');
});
