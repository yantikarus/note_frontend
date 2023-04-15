import Axios from "axios"
const baseUrl = "http://localhost:3001/api/notes"

const getAll = () => {
    const request = Axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = Axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) =>{
    const request = Axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const allServices = { getAll, create, update}
export default allServices