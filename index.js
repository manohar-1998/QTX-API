const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const { testDatabaseConnection } = require("./utils/db.util");

testDatabaseConnection();

const app = express();
// Allows to setup middleware to respond http requests
app.use(express.json());
// Allows us to relax with the security applied to an API
app.use(cors());
// A typical Middelware used to provide logs and requests along with some info
app.use(morgan("dev"));


const rule01Routes = require("./routes/rule01.routes");
const projectRoutes = require("./routes/projects.routes");
const employeeRoutes = require("./routes/employee.routes");
const fieldTypeRoutes = require("./routes/fieldType.routes");
const documentTypeRoutes = require("./routes/documentType.routes");

app.use("/api/rule01",rule01Routes);
app.use("/api/project",projectRoutes);
app.use("/api/employee",employeeRoutes);
app.use("/api/fieldType",fieldTypeRoutes);
app.use("/api/documentType",documentTypeRoutes);


const PORT = process.env.DB_API_PORT;

app.listen(PORT, ()=> console.log(`Port running on ${PORT}`));