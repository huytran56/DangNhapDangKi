import axios from 'axios';
export const signin = async (usernameOrEmail, password) => {
    console.log({axios})
    try {
        const res = await axios.post('http://localhost:8080/api/auth/signin', JSON.stringify({usernameOrEmail, password}), {headers: {'Content-Type': 'application/json'}})
        // console.log(res)
        return res
    } catch (error) {
        console.log(error);
    }
}