const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./utlis/Database');

const Company = require('./models/companyModel');
const Department = require('./models/departmentModel');
const Staff = require('./models/staffModel');

const StaffRoutes = require('./routes/staffRoutes');
const DepartmentRoutes = require('./routes/departmentRoutes');
const CompanyRoutes = require('./routes/companyRoutes');
const error = require("./middleware/errorController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up associations
Department.belongsTo(Company, {foreignKey: "companyId"})
Company.hasMany(Department, {foreignKey: "companyId"})

Staff.belongsTo(Department, {foreignKey: "departmentId"})
Department.hasMany(Staff, {foreignKey: "departmentId"})

Staff.belongsTo(Company, {foreignKey: "companyId"})
Company.hasMany(Staff, {foreignKey: "companyId"})

// Use routes
app.use('/api', DepartmentRoutes);
app.use('/api', CompanyRoutes);
app.use('/api', StaffRoutes);
app.use('/api', error);

sequelize.sync({alter: true})
.then(() => {
    app.listen(process.env.PORT, () => {
    console.log('Server started...');
    });
}).catch((err) => {
   console.log(err);
});
// const express=require('express');
// const app=express();
// const bodyParser=require('body-parser');
// const StaffRoutes=require('./routes/staffRoutes');
// const DepartmentRoutes=require('./routes/departmentRoutes');
// const CompanyRoutes=require('./routes/companyRoutes');
// const error=require("./middleware/errorController");
// const Company=require('./models/companyModel');
// const Department=require('./models/departmentModel');
// const Staff=require('./models/staffModel');
// const sequelize = require('./utlis/Database');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

// app.use('/api',DepartmentRoutes);
// app.use('/api',CompanyRoutes);
// app.use('/api',StaffRoutes);
// app.use('/api',error);
// //Company
// Department.belongsTo(Company,{foreignKey:"companyId"})
// Company.hasMany(Department,{foreignKey:"companyId"})
// //Department
// Staff.belongsTo(Department,{foreignKey:"departmentId"})
// Department.hasMany(Staff,{foreignKey:"departmentId"})
// //Staffs
// Staff.belongsTo(Company,{foreignKey:"companyId"})
// Company.hasMany(Staff,{foreignKey:"companyId"})

// sequelize.sync()
// .then(() => {
//     app.listen(process.env.PORT,()=>{
//     console.log('Server started...');
// })
// }).catch((err) => {
//    console.log(err) 
// })


