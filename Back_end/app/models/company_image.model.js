module.exports = (sequelize, Sequelize) => {
  const CompanyImage = sequelize.define("company_image", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
 
    company_image: {
      type: Sequelize.BLOB,
    },
  });
  return CompanyImage;
};
