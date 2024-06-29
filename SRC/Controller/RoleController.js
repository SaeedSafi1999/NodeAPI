const RoleServices = require('../Services/RoleService');

//create role
const CreateRole = async (req,res) =>{
    const role = await RoleServices.CreateRole(req.body);
    res.json(role);
}

//Get Roles
const GetAllRoles = async (req,res) => {
    const roles = await RoleServices.GetAllRoles();
    res.json(roles);
}
//export
module.exports = {
  CreateRole,
  GetAllRoles
};