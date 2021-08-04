import config from '../config/config';
const axios = require('axios').default;

export default class EmployeeService {
  baseUrl = config.baseUrl;
  addEmployee(employeeData) {
    return axios.post(`${this.baseUrl}employee-payroll`, employeeData);
  }
}