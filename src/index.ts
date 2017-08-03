import { Module } from 'magnet-core/module'
import * as bunyan from 'bunyan'
import defaultConfig from './config/bunyan'

export default class Bunyan extends Module {
  init () {
    this.moduleName = 'bunyan'
    this.defaultConfig = __dirname
  }

  async setup () {
    this.app.bunyan = bunyan.createLogger(this.config)
    this.app.log = this.app.bunyan
  }
}
