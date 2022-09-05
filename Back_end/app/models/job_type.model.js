module.exports = (sequelize, Sequelize) => {
  const JobType= sequelize.define("job_type", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    job_type: {
      type: Sequelize.STRING,
    }
   
  });
  return JobType;
};
