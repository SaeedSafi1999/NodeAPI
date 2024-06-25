const RoleServices = require('../Services/RoleService');


const CreateRole = async (req,res) =>{
    const role = await RoleServices.CreateRole(req.body);
    res.json(role);
}

const GetAllRoles = async (req,res) => {
    const roles = await RoleServices.GetAllRoles();
    res.json(roles);
}

module.exports = {
  CreateRole,
  GetAllRoles
};