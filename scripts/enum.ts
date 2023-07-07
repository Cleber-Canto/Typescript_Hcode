enum Permission {
    ADMIN = 1,
    USERPERMISSION = "USER",
    READONLY = "READONLY",
}

console.log(Permission.ADMIN);
console.log(Permission.USERPERMISSION);
console.log(Permission.READONLY);
console.log(Permission["USERPERMISSION"]);