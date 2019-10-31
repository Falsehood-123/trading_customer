export function getToken() {
    return localStorage.getItem("token");
}
export function setToken(token) {
    return localStorage.setItem("token",token);
}
export function removeToken() {
    return localStorage.removeItem("token");
}
export function getCategoryId() {
    return localStorage.getItem("categoryId");
}
export function setCategoryId(id) {
    return localStorage.setItem("categoryId",id);
}
export function setCategoryName(name) {
    return localStorage.setItem("categoryName",name);
}
export function getCategoryName(name) {
    return localStorage.getItem("categoryName",name);
}