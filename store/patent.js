
export const state = () => ({
	
	patentsData: {
		success: false,
		result: [],
		error: {},
	},
	patentsCount: 0
});

export const getters =  {
	patentsData (state) {
		return state.patentsData;
	}
};

export const mutations = {
	
	SET_PATENTSDATA (state, patentsData) {
		if (patentsData && Array.isArray(patentsData)) {
			state.patentsData.success = true;
			state.patentsData.result = patentsData;
			state.patentsData.error = {};
		} else {
			console.log('error'+patentsData);
			state.patentsData.success = false;
			state.patentsData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},
	SET_PATENTS_COUNT (state, patentsCount) {
		state.patentsCount = patentsCount;
	}
};

export const actions = {
	async setPatentsData ({commit}, {qs}) {
		 await this.$axios.$get(`/patents?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_PATENTSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PATENTSDATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async countPatents ({commit}, {qs}) {
		await this.$axios.$get(`/patents/count?${qs}`)
		 .then(response =>  {
		 // handle success
			 commit("SET_PATENTS_COUNT", response);
		 })
		 .catch((e) => {
		 // handle error
			 commit("SET_PATENTS_COUNT", error);
		 })
		 .finally(function () {
		 // always executed
		 });
 },
	async patentAdd ({commit}, payload) {
		await this.$axios.$post('/patents', payload)
			.then(response =>  {
			// handle success
				commit("SET_PATENTSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PATENTSDATA", error);
			})
			.finally(function () {
			// always executed
			});
		
	},
	async updatePatent ({commit}, payload) {
		await this.$axios.$put('/patents', payload)
			.then(response =>  {
			// handle success
				commit("SET_PATENTSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PATENTSDATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async deletePatent ({commit}, {id}) {
		await this.$axios.$delete(`/patents/${id}`)
			.then(response =>  {
			// handle success
				commit("SET_PATENTSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PATENTSDATA", error);
			})
			.finally(function () {
			// always executed
			});
	}
};

