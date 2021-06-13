import axios from 'axios' 

export class EmployeesService{
    getEmployees(){
        return axios.get("http://localhost:8080/api/employees/getall")
    }
}