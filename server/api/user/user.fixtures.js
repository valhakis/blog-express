'use strict';
var converter = require('number-to-words');

/*
module.exports = [
   {
      model: 'User',
      data: {
         name: 'user one',
         username: 'username1',
         email: 'user1@site.com',
         password: 'default15'
      }
   },
   {
      model: 'User',
      data: {
         name: 'user two',
         username: 'username2',
         email: 'user2@site.com',
         password: 'default15'
      }
   },
   {
      model: 'User',
      data: {
         name: 'user three',
         username: 'username3',
         email: 'user3@site.com',
         password: 'default15'
      }
   },
   {
      model: 'User',
      data: {
         name: 'user four',
         username: 'username4',
         email: 'user4@site.com',
         password: 'default15'
      }
   }
];
*/

var users = [];

for (var i=1; i<5; i++) {
   var user = {
      model: 'User',
      data: {
         name: 'user ' + converter.toWords(i).replace('-', ' '),
         username: `username${i}`,
         email: `username${i}@name.com`,
         password: 'nopassword'
      }
   };
   users.push(user);
}

module.exports = users;
