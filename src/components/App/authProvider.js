import jwtDecode from "jwt-decode";
import { ENTRYPOINT } from "../../config/entrypoint";
const authProvider = {
    login: ({ email, password }) =>  {
        const request = new Request(ENTRYPOINT+'/authentication_token', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/ld+json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
                console.log('Authentication success redirect...');
                return true
            })
            .catch(() => {
                return false
            });
    },
    register : ({ email, password, username }) =>{
        const request = new Request(ENTRYPOINT+'/users', {
            method: 'POST',
            body: JSON.stringify({ email,  username, roles: [], password }),
            headers: new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(() => {
                console.log('register succefully');
                return authProvider.login({email, password})
            })
            .catch(() => {
                return false
            }); 
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject({ redirectTo: '/login' });
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () => {
        try {
            const auth = JSON.parse(localStorage.getItem('auth'))
            const decodedToken = jwtDecode(auth.token)
            if (decodedToken.exp > parseInt(+new Date()/1000)) {
                // console.log('date ok');
                return Promise.resolve(decodedToken)
            } else {
                console.log('token expiré');
                authProvider.refreshToken(auth)
            }
        } catch (e) {
            console.log('not connected');
            return false
        }
        //redirecte to login with message no acces or no connected
    },
    logout: () => {
        console.log('ici');
        localStorage.removeItem('auth');
        return Promise.resolve({ redirectTo: '/login' });
    },
    getIdentity: () => {
        try {
            const auth = JSON.parse(localStorage.getItem('auth'))
            const decodedToken = jwtDecode(auth.token)
            return Promise.resolve(decodedToken);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    // authorization
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },

    refreshToken: (auth)=>{
        console.log(auth);
        const request = new Request(ENTRYPOINT+'/authentication_token/refresh', {
            method: 'POST',
            body: JSON.stringify(auth.refresh_token),
            headers: new Headers({ 'Content-Type': 'application/ld+json', 'Authorization': "Bearer " + auth.token }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
                return authProvider.checkAuth()
            })
            .catch((e) => {
                console.error(e)
            });
    }

};

export default authProvider