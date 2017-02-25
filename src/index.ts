import { Module } from 'magnet-core/module'
import bunyan from 'bunyan'
import defaultConfig from './config/bunyan'

export default class Bunyan extends Module {
  async setup () {
    const config = this.prepareConfig('bunyan', defaultConfig)
    this.app.bunyan = bunyan.createLogger(config)
    this.app.log = this.app.bunyan
  }
}
