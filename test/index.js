import test from 'ava';
import MagnetBunyan from '../dist';

test('setup is run properly', async function (t) {
  let magnetBunyan = new MagnetBunyan();
  await magnetBunyan.setup();

  t.true(typeof magnetBunyan.app.log.info === 'function');
  t.true(typeof magnetBunyan.app.log.error === 'function');
  t.true(typeof magnetBunyan.app.log.warn === 'function');
});

test('set config', async function (t) {
  let magnetBunyanWithConfig = new MagnetBunyan({
    config: {
      bunyan: {
        name: 'test'
      }
    }
  });
  await magnetBunyanWithConfig.setup();

  t.is(magnetBunyanWithConfig.app.log.fields.name, 'test');
});
