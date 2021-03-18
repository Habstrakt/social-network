import * as axios from "axios";

const instance = axios.create({
		withCredentials: true,
		baseURL: "https://social-network.samuraijs.com/api/1.0/",
		headers: {
				"API-KEY": "0901725d-d6e7-40d7-a7ec-4ae94c627b77"
		}
});

export const usersAPI = {
		getUsers(currentPage = 1, pageSize = 10) {
				return (
						instance.get(`users?page=${currentPage}&count=${pageSize}`)
				).then(response => response.data);
		},
		follow(userId) {
				return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
		},
		unfollow(userId) {
				return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
		},

		login(userId) {
				instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
		},

}
