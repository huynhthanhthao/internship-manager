import express from "express";
import addCompany from "../controllers/admin-controllers/add-company.js";
import addStudent from "../controllers/admin-controllers/add-student.js";
import addTeacher from "../controllers/admin-controllers/add-teacher.js";
import deleteCompany from "../controllers/admin-controllers/delete-company.js";
import getAllAccount from "../controllers/admin-controllers/get-account.js";
import getAllCompany from "../controllers/admin-controllers/get-all-company.js";
import getInforTeacher from "../controllers/admin-controllers/get-infor-teacher.js";
import searchCompany from "../controllers/admin-controllers/search-company.js";
import searchTeacher from "../controllers/admin-controllers/search-teacher.js";
import updateCompany from "../controllers/admin-controllers/update-company.js";
import { validateBody, schema, validateParam } from "../middleware/validate.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin");
});

router
  .route("/company")
  //GET All Company
  .get(getAllCompany)
  // Create New Company
  .post(validateBody(schema.accountSchema), addCompany);

router
  .route("/company/:companyID")
  //Update Infor Company
  .patch(
    validateParam(schema.idSchema, "companyID"),
    validateBody(schema.updateSchema),
    updateCompany
  )
  //Delete Company By Id.
  .delete(validateParam(schema.idSchema, "companyID"), deleteCompany);

router
  .route("/teacher/:username")
  //Get infor teacher by username.
  .get(validateParam(schema.usernameSchema, "username"), getInforTeacher);

//Search Teacher By username or name
router.route("/teacher/search/:searchData").get(searchTeacher);

//Search Company By username or name
router.route("/company/search/:searchData").get(searchCompany);

// Router Add Tam Thoi Mot Teacher De Test Data.
router.route("/teacher").post(validateBody(schema.accountSchema), addTeacher);

// Router Add Tam Thoi Mot Student De Test Data.
router.route("/student").post(validateBody(schema.accountSchema), addStudent);

// Router Tam Thoi De Test Account
router.get("/account", getAllAccount);

export default router;
