import axios from "axios";

const API_URL = "http://49.0.198.122:3000/noyvilaijid/api/users/";

class AuthService {
    login(userName, userPassword) {
        return axios
            .post(API_URL + "login", {
                userName,
                userPassword
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(userName, email, userPassword) {
        return axios.post(API_URL + "signup", {
            userName,
            email,
            userPassword
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();
