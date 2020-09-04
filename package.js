Package.describe({
  name: 'mkhitar:accounts-sms',
  version: '1.0.2',
  summary: 'Allow users to login with their phone number.',
  git: 'https://github.com/mkhitar-h/meteor-accounts-sms.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use([
    'random',
    'jperl:match-ex@1.0.0',
    'mongo'
  ], 'server');

  api.use([
    'accounts-base',
    'check',
    'dispatch:twilio@1.0.1'
  ], ['client', 'server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.addFiles('sms.js', ['client', 'server']);

  api.addFiles('sms_server.js', 'server');
  api.addFiles('sms_client.js', 'client');
});
