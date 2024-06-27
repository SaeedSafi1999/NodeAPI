const ServiceResult = require("../Utils/ServiceResult");
const Role = require("../models/Role");
const {getUserById} = require("./UserServices");


const CreateRole = async (RoleData) =>{
    const operation = new ServiceResult();
    const roleExist = await Role.findOne({Name: RoleData.Name});
    if(roleExist != null)
       return operation.Fail("Duplicate role");
    const role = new Role(RoleData);
    const result = await role.save();
    return operation.Ok(result);
};



const GetAllRoles = async ()=>{
    const operation = new ServiceResult();
    const roles = await Role.find({}).populate('User');
    return operation.Ok(roles);
}


const DeleteUser = async (id) => {
    const operation = new ServiceResult();
    const result = await Role.findByIdAndDelete({id});
    return operation.Ok(result);
}


module.exports = {
  CreateRole,
  GetAllRoles,
    DeleteUser,
};