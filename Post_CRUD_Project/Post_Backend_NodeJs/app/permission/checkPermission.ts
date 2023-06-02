export default function CheckPermission(Permission: string, dbpermission: any) {
    const permissions = dbpermission;
    if (permissions != null) {
        return permissions?.role?.permission?.some((gotPermission: { permission_name: string; }) => gotPermission.permission_name === Permission)
    } else {
        return false
    }

}



