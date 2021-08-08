import config from '../config/config';
import AxiosService from './axios-service';

const URL = config.baseUrl;


export default class EmployeeService {  
  addEmployee(employeeData) {
    return AxiosService.postService(`${URL}/emp/create`, employeeData);
  }
  getAllEmployees() {
    return AxiosService.getService(`${URL}/emp/get`);
  }
  getEmployeeById(id) {
    return AxiosService.getService(`${URL}/emp/get/${id}`);
  }
  updateEmployee(data) {
    return AxiosService.putService(`${URL}/emp/update/${data.id}`, data);
  }
  deleteEmployee(id) {
    return AxiosService.deleteService(`${URL}/emp/delete/${id}`);
  }
}