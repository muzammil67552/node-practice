import chalk from 'chalk';
import validator from 'validator';


// for email 
const res = validator.isEmail("yoursmuzammil@gmail.com.com");
console.log(res?chalk.green.inverse(res) : chalk.red.inverse(res));
