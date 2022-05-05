import api from "./manager"


const getData = async (login_source, email) =>
    api.get('api/users?page=2', {}, {});
const UpdateData = async (email, password) =>
    api.post('admin/login', { email, password });

export {
    getData, UpdateData
};