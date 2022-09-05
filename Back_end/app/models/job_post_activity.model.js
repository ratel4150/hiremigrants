module.exports = (sequelize, Sequelize) => {
    const JobPostActivity = sequelize.define("job_post_activity", {
      
      apply_date: {
        type: Sequelize.DATE
      }
    });
    return JobPostActivity;
  };
  