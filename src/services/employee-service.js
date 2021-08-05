import config from '../config/config';
import AxiosService from './axios-service';

const URL = config.baseUrl;

export default class EmployeeService {  
  addEmployee(employeeData) {
    return AxiosService.postService(`${URL}employee-payroll`, employeeData);
  }
  getAllEmployees() {
    return AxiosService.getService(`${URL}employee-payroll`);
  }
}