module.exports = (sequelize, Sequelize) => {
  const BusinessStream = sequelize.define("business_stream", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
 
    business_stream_name: {
      type: Sequelize.STRING,
    },
  });
  return BusinessStream;
};
