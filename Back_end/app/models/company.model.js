module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
 
    company_name: {
      type: Sequelize.STRING,
    },
    profile_description: {
      type: Sequelize.STRING,
    },
    establishment_date: {
      type: Sequelize.DATE,
    },
    contact_number: {
      type: Sequelize.INTEGER,
    },
    company_website_url: {
      type: Sequelize.STRING,
    },
  });
  return Company;
};
