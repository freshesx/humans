const ProductionRunner = require('@freshes/house/src/Runners/ProductionRunner')

new ProductionRunner()
  .setOptions(require('./options'))
  .extend(require('./extend'))
  .run()
