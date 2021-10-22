import { ENTRYPOINT } from "../../config/entrypoint";
const authProvider = {
    login: ({ email, password }) =>  {
        const request = new Request(ENTRYPOINT+'/authentication_token', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
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
            })
            .catch(() => {
                throw new Error('Network error')
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
    checkAuth: () => localStorage.getItem('auth')
        ? Promise.resolve()
        : Promise.reject({ redirectTo: '/login' })
        //redirecte to login with message no acces or no connected
    ,
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve({ redirectTo: '/login' });
    },
    getIdentity: () => {
        try {
            const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName, avatar });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    // authorization
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};

export default authProvider