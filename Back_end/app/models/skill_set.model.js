module.exports = (sequelize, Sequelize) => {
    const SkillSet = sequelize.define("skill_sets", {
        
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
          skill_set_name: {
            type: Sequelize.STRING(50)
          }

    });
    return SkillSet;
  };