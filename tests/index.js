import test from 'tape';
import MagnetBunyan from '../src';

(async function () {
  let magnetBunyan;
  try {
    magnetBunyan = new MagnetBunyan({});
    await magnetBunyan.setup();
  } catch (err) {
    console.log(err);
  }

  test('Module load sequence setup', function (t) {
    t.true(typeof magnetBunyan.app.log.info === 'function');
    t.true(typeof magnetBunyan.app.log.error === 'function');
    t.true(typeof magnetBunyan.app.log.warn === 'function');
    t.end();
  });
})();
