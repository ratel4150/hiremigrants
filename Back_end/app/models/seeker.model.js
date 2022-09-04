module.exports = (sequelize, Sequelize) => {
    const SeekerProfile = sequelize.define("sekeer", {
        
          first_name: {
            type: Sequelize.STRING
          },
          last_name: {
            type: Sequelize.STRING
          },
          date_of_birth: {
            type: Sequelize.INTEGER
          },
          gender: {
            type: Sequelize.STRING
          },
          contact_number: {
            type: Sequelize.INTEGER
          },
          current_salary: {
            type: Sequelize.INTEGER
          },
           is_annually_monthly: {
            type: Sequelize.STRING
          },
          currency: {
            type: Sequelize.STRING
          }

    });
    return SeekerProfile;
  };