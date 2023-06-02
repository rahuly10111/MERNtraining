import React from 'react'

export default function CheckPermission(permission) {

    const permissionLocalStorage = JSON.parse(localStorage.getItem("permission"))
    console.log("", permissionLocalStorage.role.permission[0].permission_name);
    console.log(permissionLocalStorage.role.permission);

    if (permissionLocalStorage != null) {
        return permissionLocalStorage?.role?.permission.some(gotPermission => gotPermission.permission_name === permission)
    } else {
        return false;
    }



}
