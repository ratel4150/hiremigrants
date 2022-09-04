module.exports = (sequelize, Sequelize) => {
    const EducationDetail = sequelize.define("education_details", {
        
          certificate_degree_name: {
            type: Sequelize.STRING,
           
          },
          major:{
            type:Sequelize.STRING,
            


          },
          school_name: {
            type: Sequelize.STRING
          },
          starting_date: {
            type: Sequelize.DATE
          },
          completion_date: {
            type: Sequelize.DATE
          },
         

    });
    return EducationDetail;
  };