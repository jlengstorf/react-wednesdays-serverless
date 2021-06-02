const fetch = require('node-fetch');

exports.handler = async (event) => {
  const response = await fetch('https://www.learnwithjason.dev/api/schedule');

  if (!response.ok) {
    return {
      statusCode: 500,
      body: 'oh no',
    };
  }

  const schedule = await response.json();

  const { path } = event;
  const [, , , , term = ''] = path.split('/');

  const filtered = schedule.filter((episode) =>
    episode.title.match(new RegExp(term, 'i')),
  );

  return {
    statusCode: 200,
    body: JSON.stringify(filtered),
  };
};
