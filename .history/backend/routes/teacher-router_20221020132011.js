import express from "express";
const router = express.Router();

import getCompanyAssess from "../controllers/teacher-controllers/get-company-assess.js";
import assessResult from "../controllers/teacher-controllers/assess-result.js";
import getAllTasks from "../controllers/global/get-all-tasks.js";
import getAllAccount from "../controllers/other/get-all-account.js";

router.put("/assess-result", assessResult);

router.get("/get-company-assess/:studentId", getCompanyAssess);

router.get("/get-tasks/:studentId", getAllTasks);

//Temp
router.get("/get-all-account", getAllAccount);

export default router;
