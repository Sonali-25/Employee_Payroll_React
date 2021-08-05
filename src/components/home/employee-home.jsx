import React from 'react';
import logo from '../../assets/images/logo.png';
import addIcon from '../../assets/icons/add-24px.svg';
import searchIcon from '../../assets/icons/search_icon.svg';
import './employee-home.scss';
import {Link} from 'react-router-dom';
import Display from '../employee-display/display';
import EmployeeService from '../../services/employee-service';

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        allEmployeeArray: [],
        employeeArray: [],
        searchExpand: false
      };
      this.employeeService = new EmployeeService();    
    }
    openSearch = () => {
      this.setState({ searchExpand: true });
    }
    componentDidMount() {
      this.getEmployeeList();
    }
    search = async (event) => {
        let searchName = event.target.value;
        await this.setState({employeeArray: this.state.allEmployeeArray});
        let employeeList = this.state.employeeArray;
        if (searchName.trim().length > 0)
        employeeList = employeeList.filter((employee) => 
              employee.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1 );
        this.setState({ employeeArray: employeeList });
      }
      getEmployeeList = () => {
        this.employeeService.getAllEmployees()
        .then(responseData => {
          console.log("Data received after GET Call :\n" + responseData.data);
          this.setState({allEmployeeArray: responseData.data});
          this.setState({employeeArray: responseData.data});
        }).catch(errror => {
          console.log("Error while fetching Employee List\nError : " + JSON.stringify(errror));
        })
      }
      render () {
        return (
          <div className="body">
            <header className="header-content header">
                <div className="logo-content">
                    <img className = "logo-content-img" src={logo} alt="Logo" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span><br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
            <div className="main-content">
                <div className="header-content">
                    <div className="heading">
                        Employee Details
                        <div className="emp-count">
                            {this.state.employeeArray.length}
                        </div>
                    </div>
                    <div className="search-box" onClick={this.openSearch}>
                      <input className={"search-input " + (this.state.searchExpand && "input-expand")}
                        onChange={this.search} type="text" placeholder="" />
                      <img className="search-icon" src={searchIcon} alt="Search Icon" />
                    </div>
                    <Link to="payroll-form" className="add-button">
                      <img src={addIcon} alt="Add Button" />Add User
                    </Link>
                </div>
                <div className="table-main">
                    <Display employeeArray = {this.state.employeeArray} />
                </div>
            </div>
          </div>
        );
      }
    }
    
    export default HomePage;    