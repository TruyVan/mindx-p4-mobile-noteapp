import request from "./request";

export const loginRequest = ( ) => {
    request.post('/login', {username : 'Nguyen Quoc Cuong'})
}