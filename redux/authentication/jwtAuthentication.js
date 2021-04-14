import jwtConfig from '@iso/config/jwt.config';
import jwtDecode from 'jwt-decode';

let resStatus = 0

class JwtAuth {
    login = async userInfo => {
        return await fetch(jwtConfig.fetchUrl, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .catch(res => {
                console.log("___", res)
                if (res instanceof Error) {
                    throw Error('Network error');
                }

                let error = new Error();
                // res.json().then((responseJson) => {
                //     error = {
                //         status: res.status,
                //         statusText: res.statusText,
                //         message: responseJson.detail || 'Application Error'
                //     }
                //     throw error
                // })
                if (res.status >= 400 && res.status < 500) {
                    console.log(res.text())
                    error = {
                        status: res.status,
                        statusText: res.statusText,
                        message: res.detail || 'Application Error'
                    }
                    throw error
                }

                if (res.status >= 500) {
                    error = {
                        status: res.status,
                        statusText: res.statusText,
                        message: res.detail || 'Server Error'
                    }
                    throw error
                }

                error = {
                    ...error,
                    status: res.status,
                    statusText: res.statusText,
                    message: res.detail || 'Error'
                }
                throw error
            });
    };
}

export default new JwtAuth();
