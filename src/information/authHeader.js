// the server now identifies the user from this token, not from an email in the request body
export const getAuthHeader = () => {
    const token = localStorage.getItem("trenders-user");
    return token ? { Authorization: `Bearer ${token}` } : {};
}
