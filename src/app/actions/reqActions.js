const axios = require('axios');
axios.defaults.baseURL = ('http://localhost:3000/api');

const doPost = async(url, data={}) => {
    try{
        const res = await axios.post(url, data);
        return res.data;
    }
    catch(error){
        console.log('Your data has not posted');
    }
}

const doPatch = async(url, data) => {
    try{
        const res = await axios.patch(url, data);
        return res;
    }
    catch(error){
        console.log('your data has not updated');
    }
}

const doDelete = async(url, data) => {
    try{
        const res = await axios.delete(url, data);
        return res.data;
    }
    catch(error){
        console.log('your data has not deleted');
    }
}


export {doPost, doPatch, doDelete}