import Base from 'magnet-core/dist/base';
import bunyan from 'bunyan';
import defaultConfig from './config/bunyan';

export default class Bunyan extends Base {
  async setup() {
    let bunyanConfig = {};
    if (this.config && this.config.bunyan) {
      bunyanConfig = this.config.bunyan;
    }
    console.log(bunyanConfig);
    const config = Object.assign(defaultConfig.bunyan, bunyanConfig);
    this.app.log = bunyan.createLogger(config);
  }
};
