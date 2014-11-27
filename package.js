Package.describe({
  name:     'horka:swipebox',
  summary:  'Swipebox image viewer plugin for Meteor.',
  version:  '1.0.0',
  git:      'https://github.com/horka/swipebox-meteor'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Swipebox');
  api.addFiles([
  	'horka:swipebox.js',
  	'swipebox/css/swipebox.min.css',
  	'swipebox/js/jquery.swipebox.min.js',
    'swipebox/img/loader.gif',
    'swipebox/img/icons.png',
    'swipebox/img/icons.svg'
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('horka:swipebox');
  api.addFiles('horka:swipebox-tests.js');
});
