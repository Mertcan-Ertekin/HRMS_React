import axios from 'axios' 

export class JobTitlesService{
    getTitles(){
        return axios.get("http://localhost:8080/api/jobTitles/getall")
    }
}