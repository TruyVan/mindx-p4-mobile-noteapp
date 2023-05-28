import axios from "axios";

const request = axios.create({
    baseURL : 'localhost:3000',
    timeout : 8000
});

request.interceptors.request.use(
    async (config: any) => {
      const token = 'abcdefj';
      config.headers.token = token;
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error: any) => {
      console.log('------ request error----->', error);
      return error;
    },
  );


request.interceptors.response.use(
    (response : any) => {
        console.log('--------success-------->',response);
        return response;
    },
    async (error : any ) => {
        console.log('---------response Error--->',error);

        return error
        
    },
)

export default  request
