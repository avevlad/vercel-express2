'use strict';

import fastify from 'fastify';

interface IQuerystring {
  name: string;
}

function build() {
  const app = fastify({
    logger: true
  });

  app.get<{ Querystring: IQuerystring }>('/', async (req, res) => {
    const { name = 'World' } = req.query;
    // req.log.info({ name }, 'hello world!');
    return `Hello TS ${name}!`;
  });
  app.get<{ Querystring: IQuerystring }>('/another/kek', async (req, res) => {
    const { name = 'World' } = req.query;
    // req.log.info({ name }, 'hello world!');
    return `Hello TS ${name}!`;
  });

  return app;
}

module.exports = build;
