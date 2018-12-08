import * as express from 'express';

import { environment } from './environment';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/secret-message', (req, res) => {
  res.send(environment.secretMessage);
});

const server = app.listen(environment.port);
console.log(`Server running on port: ${environment.port}. `);

// Hot module replacement.
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
