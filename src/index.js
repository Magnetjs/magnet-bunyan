import Base from 'magnet-core/base'
import bunyan from 'bunyan'
import defaultConfig from './config/bunyan'

export default class Bunyan extends Base {
  async setup () {
    const config = Object.assign(defaultConfig, this.config.bunyan, this.options)
    this.app.bunyan = bunyan.createLogger(config)
    this.app.log = this.app.bunyan
  }
}
