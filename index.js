'use strict';
const BootBot = require('./lib/BootBot');

module.exports = BootBot;

const bot = new BootBot({
  accessToken: 'EAADf5gkrFowBAMZCXBwZB1ShGZAhdzROLdFCc3ee0ugg1hfs8iirxhtOnC7j9RKN7uiUea4xPeylm7jKKwTsEcfb6WGHKF1pjGZAw3C41Vu6HHjxpkOVzTjWZCNYyi7ZAHG9mKyUstm1xTbgOD0qhkMcCXuD2Wdaf1ZAanFwffamittECpRfpBy',
  verifyToken: 'EAADf5gkrFowBAMZCXBwZB1ShGZAhdzROLdFCc3ee0ugg1hfs8iirxhtOnC7j9RKN7uiUea4xPeylm7jKKwTsEcfb6WGHKF1pjGZAw3C41Vu6HHjxpkOVzTjWZCNYyi7ZAHG9mKyUstm1xTbgOD0qhkMcCXuD2Wdaf1ZAanFwffamittECpRfpBy',
  appSecret: 'f95850abd8beea252a2c9778c3865f9a'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  //chat.say(`Echo: ${text}`);
});


bot.hear('hi', (payload, chat) => {
  chat.say(`Hello Friend!`);
});

bot.start(process.env.PORT || 3000);