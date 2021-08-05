import FETCH from 'axios'
const axios = (method,url,data) =>{
    return FETCH({
        url: url,
        method,
        data,
        headers: {'Content-Type': 'application/json'}
    });
}
export default axios
