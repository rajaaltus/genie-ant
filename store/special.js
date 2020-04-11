
export const state = () => ({
	specialData: {}
});



export const mutations = {
	
	SET_SPECIAL_DATA (state, specialData) {
		state.specialData = specialData;
	}
  
};

export const actions = {
  
	async setSpecialData ({commit}, {qs}) {
		await this.$axios.$get(`/pc-special-services?${qs}`)
			.then(response =>  {
				// handle success
				commit("SET_SPECIAL_DATA", response);
			})
			.catch((e) => {
				// handle error
				commit("SET_SPECIAL_DATA", error);
			})
			.finally(function () {
				// always executed
			});
	},


	async addSpecial ({commit}, payload) {
		await this.$axios.$post('/pc-special-services', payload)
			.then(response =>  {
			// handle success
				// commit("SET_SPECIAL_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_SPECIAL_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},

	async updateSpecial ({commit}, payload) {
		await this.$axios.$put(`/pc-special-services/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				// commit("SET_SPECIAL_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_SPECIAL_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	}
};

