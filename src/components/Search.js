import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import Card from "./Card";
import "./style.css";

class Search extends Component {
  state = {
    employees: [],
    search: "",
    sort: "ascend"
  };

  componentDidMount() {
    this.searchEmployee();
  }
  searchEmployee = () => {
    API.search()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    // console.log(event.target);
    const search = event.target.name;
    const value = event.target.value;
    this.setState({ [search]: value });
  };
  employeeArray = () => {
    const newArr = [...this.state.employees].sort((a,b) => a.name.last > b.name.last ? 1 : -1)
    this.setState({
      ...this.state,
      employees: newArr,
    });
  };

  render() {
    // console.log(this.state.employees);
    return (
      <div>
        <h1>List of Employees</h1>
        <h3>To search for an employee, enter their name below:</h3>
        <div className="searchForm">
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          </div>
          <div className = "forms">
          <Card
            employees={this.state.employees}
            search={this.state.search}
            employeeArray={this.employeeArray}
            sort = {this.state.sort}
          />
        </div>
      </div>
    );
  }
}

export default Search;
