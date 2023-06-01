import { isBoolean } from 'lodash';
import {useState} from 'react';

const useOnChangInput = (initValue = '') => {
  const [user, setUser] = useState({fullname :'',username: '', policy : false, password: '',checkPassword :'',email:''});
  const onChangeText = (value: string | boolean, key: string) => {
    setUser({...user, [key]: value});
  };
  
  return {user, onChangeText};
};

export default useOnChangInput;
