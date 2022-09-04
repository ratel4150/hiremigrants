module.exports = (sequelize, Sequelize) => {
  const ExperienceDetail = sequelize.define("experience_details", {
   
    is_current_job: {
      type: Sequelize.CHAR,
    },
    start_date: {
      type: Sequelize.DATE,
    },
    end_date:{
      type:Sequelize.DATE
    },
    job_title:{
      type:Sequelize.STRING
    },
    description:{
      type:Sequelize.STRING
    },
    company_name:{
      type:Sequelize.STRING
    },
    job_location_city:{
      type:Sequelize.STRING
    },
    job_location_state:{
      type:Sequelize.STRING
    },
    job_location_country:{
      type:Sequelize.STRING
    }
  });
  return ExperienceDetail;
};
