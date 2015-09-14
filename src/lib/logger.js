/**
 * Created by braunreu on 14.09.15.
 */
import util from 'util';

/**
 * Logging should be as lightweight as possible.
 * That's why we use console.log() internally which logs to stdout.
 * Dockers fluentd log driver will log anyhow to our centralized logging server.
 * Todo: find out how logrotate works with docker..
 *
 * Here you can read further on:
 * https://strongloop.com/strongblog/automatic-node-js-clustering-with-log-aggregation/
 */
const logLevels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];

for (let level of logLevels) {
  /*eslint-disable */
  module.exports[level.toLowerCase()] = function() {
    console.log('%s %s', level, util.format.apply(util, arguments));
  };
  /*eslint-enable */
}
