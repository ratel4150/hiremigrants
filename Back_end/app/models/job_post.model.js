module.exports = (sequelize, Sequelize) => {
  const JobPost = sequelize.define("job_posts", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    job_description: {
      type: Sequelize.STRING,
    },
    job_category: {
      type: Sequelize.STRING,
    },
    modality: {
      type: Sequelize.INTEGER,
    },
    created_date: {
      type: Sequelize.DATE,
    },
    is_active: {
      type: Sequelize.CHAR,
    },
  });
  return JobPost;
};
