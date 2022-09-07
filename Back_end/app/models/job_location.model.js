module.exports = (sequelize, Sequelize) => {
  const JobLocation = sequelize.define("job_locations", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    street_address: {
      type: Sequelize.STRING,
    },
     province: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    zip: {
      type: Sequelize.STRING,
    },
   
  });
  return JobLocation;
};
