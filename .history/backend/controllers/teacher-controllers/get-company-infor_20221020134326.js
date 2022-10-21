import Account from "../../models/Account.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import { ObjectId } from "mongodb";
import StudentAccount from "../../models/StudentAccount.js";

const getCompanyInfor = async (req, res, next) => {
  const { studentId } = req.body;
  console.log(studentId);
  try {
    const x = StudentAccount.findOne({
      studentId: ObjectId(studentId),
    });

    if (x) {
      const { name, email, phone } = Account.findOne({ _id: companyId });
      const { address } = CompanyAccount.findOne({ _id: companyId });
      const result = { name, email, phone, address };
      return res.json({
        status: true,
        message: "Lấy thông tin đơn vị thực tập của sinh viên thành công!",
        result,
      });
    } else {
      return res.json({
        status: false,
        message: "Sinh viên không có đơn vị thực tập!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default getCompanyInfor;
