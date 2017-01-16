'use strict';

// User.sync();
// User.drop();

module.exports = function(sequelize, DataTypes) {
   var User = sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            is: ["^[a-z ]+$",'i'], 
         }
      },
      email: {
         type: DataTypes.STRING,
         unique: true,
         validate: {
            isEmail: true,
         },
         allowNull: false
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            is: ["^[a-z0-9 ]+$",'i'], 
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      //example: {
      //type: DataTypes.INTEGER,
      //references: {
      //model: Another,
      //key: 'id'
      //}
      //},
      //example: {
      //type: Sequelize.ENUM,
      //valuse: ['active', 'pending', 'deleted']
      //}
   }, {
      timestamps: true,
      // paranoid: true,
      // underscored: true, // updated_at not updatedAt
      classMethods: {
         associate: function(/*models*/) {
            // associations can be defined here
         }
      }
   });
   return User;
};
