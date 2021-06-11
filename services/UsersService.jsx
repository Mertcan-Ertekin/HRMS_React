import axios from "axios"

export default class UsersSevice{
    getUsers(){
        return axios.get("http://localhost:8080/api/users/getAll")
    }

}