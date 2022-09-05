const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.seeker = require("./seeker.model.js")(sequelize, Sequelize);
db.education = require("./education_detail.model.js")(sequelize, Sequelize);
db.experienceDetail = require("./experience_detail.model.js")(
  sequelize,
  Sequelize
);
db.seekerSkillSet = require("./seeker_skill_set.model")(sequelize, Sequelize);
db.skillSet = require("./skill_set.model")(sequelize, Sequelize);
db.companyImage = require("./company_image.model")(sequelize, Sequelize);
db.businessStream = require("./business_stream.model")(sequelize, Sequelize);
db.company = require("./company.model")(sequelize, Sequelize);
db.jobPost = require("./job_post.model")(sequelize, Sequelize);
db.jobLocation = require("./job_location.model")(sequelize, Sequelize);
db.jobType = require("./job_type.model")(sequelize, Sequelize);


/* belongsToMany */

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.seeker.belongsToMany(db.skillSet, {
  through: "seekerSkillSet",
  foreignKey: "userId",
  otherKey: "skill_set_id",
});

db.skillSet.belongsToMany(db.seeker, {
  through: "seekerSkillSet",
  foreignKey: "skill_set_id",
  otherKey: "userId",
});

db.user.belongsToMany(db.jobPost, {
  through: "job_post_activity",
  foreignKey: "userId",
  otherKey: "job_postId",
});

db.jobPost.belongsToMany(db.user, {
  through: "job_post_activity",
  foreignKey: "job_postId",
  otherKey: "userId",
});

/* belongs TO */


db.jobPost.belongsTo(db.jobType, {
  foreignKey: "job_typeId",
});


db.jobPost.belongsTo(db.jobLocation, {
  foreignKey: "job_locationId",
});


db.jobPost.belongsTo(db.company, {
  foreignKey: "companyId",
});

db.companyImage.belongsTo(db.company, {
  foreignKey: "companyId",
});

db.company.belongsTo(db.businessStream, {
  foreignKey: "business_stream_Id",
});

db.seeker.belongsTo(db.user, {
  foreignKey: "id",
});
db.education.belongsTo(db.user, {
  foreignKey: "id",
});
db.experienceDetail.belongsTo(db.user, {
  foreignKey: "id",
});

/* db.user.belongsTo(jobPost,{
  foreignKey:"id"

}) */
db.ROLES = ["user", "admin", "empresa"];
module.exports = db;
