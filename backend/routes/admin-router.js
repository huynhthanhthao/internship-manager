import express from "express";

import addCompanyController from "../controllers/admin-controllers/add-company.js";

import checkRule from "../middleware/check-rule.js";

import deleteCompany from "../controllers/admin-controllers/delete-company.js";
import getInforTeacher from "../controllers/admin-controllers/get-infor-teacher.js";
import searchCompany from "../controllers/admin-controllers/search-company.js";
import searchTeacher from "../controllers/admin-controllers/search-teacher.js";
import updateCompany from "../controllers/admin-controllers/update-company.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin");
});

router.post(
  "/add-company",
  (req, res, next) => checkRule(req, res, next, "ADMIN"),
  addCompanyController
);

// Create New Company
router.post("/company", addCompanyController);

//Update Infor Company
router.patch("/company", updateCompany);

//Delete Company By Id.
router.delete("/company", deleteCompany);

//Get infor teacher by username.
router.get("/teacher/:username", getInforTeacher);

//Search Teacher By username or name
router.get("/search-teacher/:searchData", searchTeacher);

//Search Company By username or name
router.get("/search-company/:searchData", searchCompany);

export default router;
