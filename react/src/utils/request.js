import axios from 'axios'


export default function request (options) {
 switch (options.method) {
   case 'get':
     return axios.get(options.url,{
       params: options.data
     }).then(function (response) {
       console.log(response)
     }).catch(function (err) {
       console.log(err)
     })
   case 'post':
     return axios.get(options.url,options.data).then(function (response) {
       console.log(response)
     }).catch(function (err) {
       console.log(err)
     })
 }
}
