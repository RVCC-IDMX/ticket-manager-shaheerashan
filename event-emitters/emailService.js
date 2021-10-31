const chalk = require('chalk');

class EmailService {
  // eslint-disable-next-line class-methods-use-this
  send(email) {
    console.log(
      chalk.black.bgWhite('Sending email to') + chalk.greenBright(` ${email}`)
    );
  }
}

module.exports = EmailService;
