const chalk = require('chalk');

class DatabaseService {
  // eslint-disable-next-line class-methods-use-this
  save(email, price, timestamp) {
    console.log(
      // eslint-disable-next-line comma-dangle
      chalk.white.bold.bgCyanBright(
        `Running query: \nINSERT INTO orders VALUES (email, price, created) \nVALUES (${email}, ${price}. ${timestamp})`
      )
    );
  }
}

module.exports = DatabaseService;
