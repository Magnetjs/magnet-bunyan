[![Build Status](https://travis-ci.org/Magnetjs/magnet-bunyan.svg?branch=master)](https://travis-ci.org/Magnetjs/magnet-bunyan)

### Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/Magnetjs/magnet-bunyan.svg)](https://greenkeeper.io/)
Basic
```
import magnet from 'magnet-core';
import Logger from 'magnet-bunyan';

magnet([
  Logger,
]);
```

With Adapter
```
import magnet from 'magnet-core';
import Logger from 'magnet-bunyan';

let app = await magnet([Logger]);
app.log.info('Some useful info');
```
server/config/bunyan.js
```
import Bunyan2Loggly from 'bunyan-loggly';

export default {
  name: 'magnetBunyan',
  streams: [
    {
      type: 'raw',
      stream: new Bunyan2Loggly({
        token: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        subdomain: 'magnet',
        tags: ['production', 'api']
      })
    }
  ]
}
```
