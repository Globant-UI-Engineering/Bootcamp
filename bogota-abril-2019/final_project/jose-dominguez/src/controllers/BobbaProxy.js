import NProgress from 'nprogress';

const API_URL = 'http://api.bobba.io:1232/';
const FAKE_DELAY = 250;
const DELAY = 0;

export const tryLoginFake = (username, password) => {
    return new Promise((resolve, reject) => {
        NProgress.start();
        setTimeout(() => {
            const okResponse = {
                username,
                motto: 'it actually works!',
                look: 'ca-1811-62.lg-3018-81.hr-836-45.ch-669-1193.hd-600-10',
                token: 'yoloswag1337xd'
            };

            const failedResponse = { error: 'password' };

            NProgress.done();
            if (username === 'fail') {
                resolve(failedResponse);
            }
            resolve(okResponse);
        }, FAKE_DELAY);
    });
};

export const patchUserFake = (token, data) => {
    return new Promise((resolve, reject) => {
        NProgress.start();
        setTimeout(() => {
            const okResponse = {
                username: 'Jose',
                motto: data.motto,
                look: 'ca-1811-62.lg-3018-81.hr-836-45.ch-669-1193.hd-600-10',
                token,
            };

            NProgress.done();
            resolve(okResponse);
        }, FAKE_DELAY);
    });
};

export const tryGetOnlineCountFake2 = () => {
    return new Promise((resolve, reject) => {
        NProgress.start();
        setTimeout(() => {
            const okResponse = {
                count: 2
            };

            NProgress.done();
            resolve(okResponse);
        }, FAKE_DELAY);
    });
};

export const tryGetNewsFake2 = (id) => {
    return new Promise((resolve, reject) => {
        NProgress.start();
        setTimeout(() => {
            const okResponse = {
                id,
                title: '¿Qué ha pasado?' + id,
                description: 'Algunos extraños sucesos han aparecido en el hotel...',
                image: 'https://i.imgur.com/M0MvbVO.png',
                link: '4-que-ha-pasado',
                content: '',
            };

            NProgress.done();
            resolve(okResponse);
        }, FAKE_DELAY);
    });
};

export const tryGetLastNewsFake2 = () => {
    return new Promise((resolve, reject) => {
        NProgress.start();
        setTimeout(() => {
            const okResponse = [{
                id: 4,
                title: 'Un nuevo comienzo',
                description: 'Bobba abre sus puertas una vez más para ti, ¿estás preparado?',
                image: 'https://i.imgur.com/Pa5j9VS.png',
                link: '4-un-nuevo-comienzo',
                content: '',
            },
            {
                id: 5,
                title: 'Extraños sucesos',
                description: '¿Alguien es capaz de explicar estos extraños comportamientos?',
                image: 'https://i.imgur.com/M0MvbVO.png',
                link: '5-extranos-sucesos',
                content: '',
            }];

            NProgress.done();
            resolve(okResponse);
        }, FAKE_DELAY);
    });
};

export const tryGetLastArticles = () => {
    NProgress.start();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const options = {
                method: 'GET',
                mode: 'cors',
                headers,
            };

            fetch(API_URL + 'articles', options)
                .then(response => response.json())
                .then(data => {
                    NProgress.done();
                    resolve(data);
                })
                .catch(err => {
                    NProgress.done();
                    reject(err);
                });
        }, DELAY);
    });
};

export const tryGetArticle = (id) => {
    NProgress.start();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const options = {
                method: 'GET',
                mode: 'cors',
                headers,
            };

            fetch(API_URL + 'articles/' + id, options)
                .then(response => response.json())
                .then(data => {
                    NProgress.done();
                    resolve(data);
                })
                .catch(err => {
                    NProgress.done();
                    reject(err);
                });
        }, DELAY);
    });
};

export const tryGetOnlineCount = () => {
    NProgress.start();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const options = {
                method: 'GET',
                mode: 'cors',
                headers,
            };

            fetch(API_URL + 'onlines', options)
                .then(response => response.json())
                .then(data => {
                    NProgress.done();
                    resolve({ count: data });
                })
                .catch(err => {
                    NProgress.done();
                    reject(err);
                });
        }, DELAY);
    });
};

export const tryLogin = (username, password) => {
    NProgress.start();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const body = JSON.stringify({
                username,
                password
            });

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const options = {
                method: 'POST',
                mode: 'cors',
                headers,
                body
            };

            fetch(API_URL + 'login', options)
                .then(response => response.json())
                .then(data => {
                    NProgress.done();
                    resolve(data);
                })
                .catch(err => {
                    NProgress.done();
                    reject(err);
                });
        }, DELAY);
    });
};

export const tryRegister = (username, email, password) => {
    NProgress.start();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const body = JSON.stringify({
                username,
                password,
                email
            });

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');

            const options = {
                method: 'POST',
                mode: 'cors',
                headers,
                body
            };

            fetch(API_URL + 'register', options)
                .then(response => response.json())
                .then(data => {
                    NProgress.done();
                    resolve(data);
                })
                .catch(err => {
                    NProgress.done();
                    reject(err);
                });
        }, DELAY);
    });
};


export const tryGetUserData = (token) => {
    NProgress.start();
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('token', token);

            const options = {
                method: 'GET',
                mode: 'cors',
                headers,
            };

            fetch(API_URL + 'user', options)
                .then(response => response.json())
                .then(data => {
                    NProgress.done();
                    resolve(data);
                })
                .catch(err => {
                    NProgress.done();
                    reject(err);
                });
        }, DELAY);
    });
};

export const tryPatchUser = (token, data) => {
    NProgress.start();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const body = JSON.stringify(data);

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('token', token);

            const options = {
                method: 'PATCH',
                mode: 'cors',
                headers,
                body
            };

            fetch(API_URL + 'user', options)
                .then(response => response.json())
                .then(data => {
                    NProgress.done();
                    resolve(data);
                })
                .catch(err => {
                    NProgress.done();
                    reject(err);
                });
        }, DELAY);
    });
};

export const tryChangePassword = (token, currentPassword, newPassword) => {
    NProgress.start();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const body = JSON.stringify({
                currentPassword,
                newPassword
            });

            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('token', token);

            const options = {
                method: 'POST',
                mode: 'cors',
                headers,
                body
            };

            fetch(API_URL + 'changePassword', options)
                .then(response => response.json())
                .then(data => {
                    NProgress.done();
                    resolve(data);
                })
                .catch(err => {
                    NProgress.done();
                    reject(err);
                });
        }, DELAY);
    });
};

export const getClientUrl = (username, look) => {
    return 'https://bobba.io/?username=' + username + '&look=' + look;
};