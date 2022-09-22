export const useLogin = async () => {
    try {
        localStorage.setItem('isAuth', 'true');
        return true;
    } catch {
        return false;
    }
}


export const useLogout = async () => {
    try {
        localStorage.removeItem('isAuth');
        return true;
    } catch {
        return false;
    }
}