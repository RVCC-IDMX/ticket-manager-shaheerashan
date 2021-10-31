const chalk = require('chalk');
const TicketManager = require('./ticketManager');

const ticketManager = new TicketManager(10);

ticketManager.on('buy', () => {
  console.log(chalk.cyan.bgWhite('Someone bought a ticket!'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);

ticketManager.once('buy', () => {
  console.log(chalk.black.bgGreen('This is only called once'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);
