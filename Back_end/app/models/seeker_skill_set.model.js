



module.exports = (sequelize, Sequelize) => {
    const SeekerSkillSet = sequelize.define("seekerSkillSet", {
   

        
          skill_level: {
            type: Sequelize.INTEGER
          }

    });
    return SeekerSkillSet;
  };