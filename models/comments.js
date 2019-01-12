module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    comment_body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  });

  Comment.associate = function(models) {
    
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });

  };

  return Comment;
};