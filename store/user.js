export const state = () => ({
	busy: false,
	loggedIn: false,
	strategy: "local",
	user: false,
	fullUser: {},
	avatarUrl: null,
	userProfile: {
		success: false,
		result: [],
		error: {},
	},
	departments: {
		success: false,
		result: [],
		error: {},
	},
	
});

export const getters = {
	authenticated (state) {
		return state.loggedIn;
	},

	user (state) {
		return state.user;
	}
};

export const mutations = {
	SET_FULL_USER (state, fullUser) {
		state.fullUser = fullUser;
		state.avatarUrl = fullUser.avatar.url;
	}
};


export const actions = {
	async setFullUser ({commit}, {id}) {
		await this.$axios.$get(`/users/${id}`)
			.then(response =>  {
			// handle success
				commit("SET_FULL_USER", response);
			})
			.catch((e) => {
			// handle error
				//commit("SET_FULL_USER", error);
			})
			.finally(function () {
			// always executed
				// console.log('finally');
			});
	}
};

	