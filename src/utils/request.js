import axios from 'axios'


export default function request (options) {
  options.method = options.method || 'get'
 switch (options.method) {
   case 'get':
     return axios.get(options.url,{
       params: options.data
     }).then((response) => {
       console.log(response.data)
       return response.data
     }).catch( (err) =>{
       console.log(err)
     })
   case 'post':
     return axios.get(options.url,options.data).then( (response) => {
       console.log(response)
     }).catch( (err) => {
       console.log(err)
     })
   default :
     break
 }
}
