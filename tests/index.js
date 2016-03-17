import test from 'tape';
import MagnetBunyan from '../src';

(async function () {
  let magnetBunyan = new MagnetBunyan();
  await magnetBunyan.setup();

  let magnetBunyanWithConfig = new MagnetBunyan({
    config: {
      bunyan: {
        name: 'test'
      }
    }
  });
  await magnetBunyanWithConfig.setup();

  test('setup is run properly', function (t) {
    t.true(typeof magnetBunyan.app.log.info === 'function');
    t.true(typeof magnetBunyan.app.log.error === 'function');
    t.true(typeof magnetBunyan.app.log.warn === 'function');
    t.end();
  });

  test('set config', function (t) {
    t.equal(magnetBunyanWithConfig.app.log.fields.name, 'test');
    t.end();
  });
})();
