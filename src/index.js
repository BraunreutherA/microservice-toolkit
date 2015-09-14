import logger from './lib/logger.js';

logger.info('test');

const microserviceToolkit = {
  greet() {
    return 'hello';
  }
};

export default microserviceToolkit;
