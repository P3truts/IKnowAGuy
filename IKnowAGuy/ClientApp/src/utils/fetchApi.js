const fetchapi = {
    get: async (url) => {
        const request = await fetch(url);
        try {
            return await request.json();
        } catch (error) {
            console.error(error);
        }
    },
    post: async (url, data) => {
        const request = await fetch(url, {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        try {
            return await request.json();
        } catch (error) {
            console.error(error);
        }
    },
    put: async (url, data) => {
        const request = await fetch(url, {
            method: 'PUT',
            headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        try {
            return await request.json();
        } catch (error) {
            console.error(error);
        }
    },
    delete: async (url) => {
        const request = await fetch(url, {
            method: 'DELETE',
            headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            'Content-Type': 'application/json' },
            credentials: 'include',
        });
        try {
            return await request;
        } catch (error) {
            console.error(error);
        }
    },
    includeCredentialsPost: async (url, data) => {
        const request = await fetch(url, {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        try {
            return await request.json();
        } catch (error) {
            console.error(error);
        }
    },
    includeCredentialsGet: async (url) => {
        const request = await fetch(url, {
            headers: { Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            'Content-Type': 'application/json' },
            credentials: 'include',
        });
        try {
            return await request.json();
        } catch (error) {
            console.error(error);
        }
    },
};

export default fetchapi;
