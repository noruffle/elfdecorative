module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'pl', 'es'],
  },
  backend: {
    loadPath: 'http://localhost:9000/api/translations/{{language}}',
  },
};
