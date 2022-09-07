const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const { Pool } = require("pg");

var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
const db = require("./app/models");
const Role = db.role;
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hiremigrants",
  password: "Laura@@2009080220",
  port: 5432,
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to hiremigrants application." });
});

/* get */

/*  */
app.post("/record-job-post", (req, res) => {
  const id = req.body.nuevoId;
  const description=req.body.description
  const category=req.body.category
  const modality=req.body.modality
  const create=req.body.create
  const state=req.body.state
  const created = req.body.createdAt;
  const updated = req.body.updatedAt;
  const typeId=req.body.typeId
  const jobLocationId=req.body.jobLocationId
  const compnayId=req.body.companyId

  const query =
    'INSERT INTO job_posts (id,job_description,job_category,modality,created_date,is_active,"createdAt","updatedAt",job_typeId,job_locationId,companyId) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)';

  pool
    .query(query, [id,description,category,modality,create,state, created, updated,typeId,jobLocationId,compnayId])
    .then(() => res.send("job type created!"))
    .catch((e) => console.error(e));
});


app.post("/record-job-type", (req, res) => {
  const id = req.body.nuevoId;
  const trabajo=req.body.trabajo
  const created = req.body.createdAt;
  const updated = req.body.updatedAt;

  const query =
    'INSERT INTO job_types (id,job_type,"createdAt","updatedAt") VALUES ($1,$2,$3,$4)';

  pool
    .query(query, [id,trabajo, created, updated])
    .then(() => res.send("job type created!"))
    .catch((e) => console.error(e));
});
app.get("/jobs", function (req, res) {
  pool.query("SELECT * FROM job_posts", (error, result) => {
    res.json(result.rows);
  });
});


app.post("/record-job-locations", (req, res) => {
  const id = req.body.nuevoId;
  const street = req.body.calle;
  const province = req.body.provincia;
  const city = req.body.ciudad; 
  const zip = req.body.codigo;
  const created = req.body.createdAt;
  const updated = req.body.updatedAt;

  const query =
    'INSERT INTO job_locations (id,street_address,province,city,zip,"createdAt","updatedAt") VALUES ($1,$2,$3,$4,$5,$6,$7)';

  pool
    .query(query, [id,street,province,city,zip, created, updated])
    .then(() => res.send("job location created!"))
    .catch((e) => console.error(e));
});


app.post("/business-stream", (req, res) => {
  const id = req.body.nuevoId;
  const businessStreamName = req.body.business_stream_name;
  const created = req.body.createdAt;
  const updated = req.body.updatedAt;

  const query =
    'INSERT INTO business_streams (id,business_stream_name,"createdAt","updatedAt") VALUES ($1,$2,$3,$4)';

  pool
    .query(query, [id, businessStreamName, created, updated])
    .then(() => res.send("Business stream created!"))
    .catch((e) => console.error(e));
});
/*  */

app.post("/company-image-register", (req, res) => {
  const id = req.body.nuevoId;
  const url = req.body.url;
  const created = req.body.createdAt;
  const updated = req.body.updatedAt;

  const query =
    'INSERT INTO company_images (id,company_image,"createdAt","updatedAt") VALUES ($1,$2,$3,$4)';

  pool
    .query(query, [id, url, created, updated])
    .then(() => res.send("url company  created!"))
    .catch((e) => console.error(e));
});

app.post("/company-register", (req, res) => {
  const newCompany = req.body.newIdCompany;
  const newCompanyName = req.body.name;
  const newProfileDescription = req.body.description;
  const newEstablishmentDate = req.body.date;
  const newContactNumber = req.body.contact;
  const newWebsiteUrl = req.body.url;
  const created = req.body.createdAt;
  const updated = req.body.updatedAt;
  const businessId = req.body.business;

  const query =
    'INSERT INTO companies (id,company_name,profile_description,establishment_date,contact_number,company_website_url,"createdAt","updatedAt","business_stream_Id") VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9)';

  pool
    .query(query, [
      newCompany,
      newCompanyName,
      newProfileDescription,
      newEstablishmentDate,
      newContactNumber,
      newWebsiteUrl,
      created,
      updated,
      businessId,
    ])
    .then(() => res.send("Company created!"))
    .catch((e) => console.error(e));
});

app.get("/iniciarsesion", function (request, response) {
  //me dirige a la ruta del index.html
  response.sendFile(__dirname + "/index.html");
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
// set port, listen for requests

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "empresa",
  });

  Role.create({
    id: 3,
    name: "reclutador",
  });

  Role.create({
    id: 4,
    name: "admin",
  });
}
