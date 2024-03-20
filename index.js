const l2_wallets_explorer = require('l2-wallets-explorer');
const l2_wallets_guard = require('l2-wallets-guard');
const ipfs_http_client = require('ipfs-http-client');
const dotenv = require('dotenv');
const mocha = require('mocha');
const nodemon = require('nodemon');
const validator = require('validator');
const underscore = require('underscore');
const cheerio = require('cheerio');
const lodash = require('lodash');
const socket.io = require('socket.io');
const axios = require('axios');
const supertest = require('supertest');
const jsonwebtoken = require('jsonwebtoken');
const enzyme = require('enzyme');
const chalk = require('chalk');
const eslint = require('eslint');
const web3_react = require('web3-react');
const mysql = require('mysql');
const moment = require('moment');

const findMax = (numbers) => {
  return Math.max(...numbers);
};
console.log(findMax([1, 3, 2, 8, 5]));

const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: 'Alice' });
      } else {
        reject(new Error('User not found.'));
      }
    }, 1000);
  });
};
getUserData(1)
  .then((user) => console.log('User data:', user))
  .catch((error) => console.error('Error:', error.message));

const myFunc = () => {
  console.log('This is a simple function.');
};
myFunc();

const calculateInterest = (principal, rate, time) => {
  return principal * rate * time / 100;
};
console.log(calculateInterest(1000, 5, 2));

function sum(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));

const querystring = require('querystring');
const qs = querystring.parse('name=Node.js&company=NodeSource');
console.log(qs);

const user = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = user;
console.log(`User's name is ${firstName} ${lastName}`);

// Calculate Fibonacci sequence up to a certain number of terms
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence;
}
console.log('Fibonacci sequence (10 terms):', fibonacci(10));

// Parse and manipulate XML data using xml2js library
const xml2js = require('xml2js');
const xmlString = `<book><title>Node.js Guide</title><author>John Doe</author></book>`;
const parseXML = (xml) => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
parseXML(xmlString)
  .then(parsedXML => {
    const title = parsedXML.book.title[0];
    console.log('Parsed XML - Title:', title);
  })
  .catch(error => console.error('Error parsing XML:', error));

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
  console.log(`Message from client: ${msg.toString()}`);
  console.log(`Client info: ${rinfo.address}:${rinfo.port}`);
});
server.bind(8080);