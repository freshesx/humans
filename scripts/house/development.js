const DevelopmentRunner = require('@freshes/house/src/Runners/DevelopmentRunner')

new DevelopmentRunner()
  .setOptions(require('./options'))
  .extend(require('./extend'))
  .run()
