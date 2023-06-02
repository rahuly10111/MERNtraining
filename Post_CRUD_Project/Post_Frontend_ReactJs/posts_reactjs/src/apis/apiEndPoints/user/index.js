export const userEndPoints = {
    REGISTRATION_USER: `/postuserdetail`,
    LOGIN_USER: `/postlogin`,
    GET_ALL_USER: `/getalluserdetail`,
    VIEW_USER: (userId) => `/viewuserdetail/${userId}`,
    DELETE_USER: (userId) => `/deleteuserdetail/${userId}`,
    PUT_USER: (userId) => `/putuserdetail/${userId}`,
    GET_ID_USER: `/getuserdetail`

};
