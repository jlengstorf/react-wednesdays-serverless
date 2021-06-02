const corgis = {
  boop: {
    name: 'Boop',
    favoriteToy: 'peanut butter puzzle thing',
  },
  beep: {
    name: 'Beep',
    favoriteToy: 'stick',
  },
};

exports.handler = async (event) => {
  const { path } = event;
  const [, , , id] = path.split('/');

  const corgi = corgis[id];

  return {
    statusCode: 200,
    body: JSON.stringify(corgi),
  };
};
