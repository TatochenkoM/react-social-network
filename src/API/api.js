import * as axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "f4b3be99-083d-422f-9848-e889f96255e7"
    } 
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
};

export const authUser = () => {
    return instance.get(`auth/me`)
    .then(response => {
        return response.data;
    })
};

export const onFollow = (id) => {
    return instance.post(`follow/${id}`, {} )
    .then(response => {
        return response.data;
    });
};

export const onUnFollow = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data;
        });
    };