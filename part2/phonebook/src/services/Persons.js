import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => (
    axios.get(baseURL)
    .then((result) => result.data)
)

const deletePerson = (id) => (
    axios.delete(baseURL+'/'+id)
    .then((res) => res.data)
)

const updatePerson = (id,personObject) => (
    axios
    .put(baseURL+'/'+id,personObject)
    .then(res=>res.data)
)

const postPerson = (personObject) =>(
    axios
    .post('http://localhost:3001/persons',personObject)
    .then((result) => (result.data))
)


export default {
    getAll: getAll,
    deletePerson: deletePerson,
    postPerson: postPerson,
    updatePerson: updatePerson
}