
export const state = () => ({
	// programmesData: []
	programmesData: {
		success: false,
		result: [],
		error: {},
	},
	programmesCount: 0,
	programNames: []
});

export const getters =  {
	programmesData (state) {
		return state.programmesData;
	}
};

export const mutations = {
	
	SET_PROGRAMMESDATA (state, programmesData) {
		if (programmesData && Array.isArray(programmesData)) {
			state.programmesData.success = true;
			state.programmesData.result = programmesData;
			state.programmesData.error = {};
		} else {
			state.programmesData.success = false;
			state.programmesData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},
	SET_PROGRAMMES_COUNT (state, programmesCount) {
		state.programmesCount = programmesCount;
	},
	SET_PROGRAM_NAMES (state, programNames) {
		state.programNames = programNames.programmes;
	}
};


export const actions = {
	async setProgrammesData ({commit}, {qs}) {
		 await this.$axios.$get(`/programmes?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_PROGRAMMESDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PROGRAMMESDATA", error);
			})
			.finally(function () {
			// always executed
				
			});
	},
	async setProgramNames ({commit}) {
		const query = `
			query {
				programmes(sort: "id:desc", where:{annual_year: 2020, department: {id: 6}}) {
					name
				}
			}
		`;
		const programNames = await this.$graphql.request(query);
		commit('SET_PROGRAM_NAMES', programNames);
	},
	async countProgrammes ({commit}, {qs}) {
		await this.$axios.$get(`/programmes/count?${qs}`)
		 .then(response =>  {
		 // handle success
			 commit("SET_PROGRAMMES_COUNT", response);
		 })
		 .catch((e) => {
		 // handle error
			 commit("SET_PROGRAMMES_COUNT", error);
		 })
		 .finally(function () {
		 // always executed
		 });
 },
	async addProgram ({commit}, payload) {
		await this.$axios.$post('/programmes', payload)
			.then(response =>  {
				commit("SET_PROGRAMMESDATA", response);
			})
			.catch((e) => {
			// handle error
			
				// commit("SET_PROGRAMMESDATA", error);
			})
			.finally(function () {
			// always executed
			
			});
		// commit('SET_PROGRAMMESDATA', programmesData)
	},
	async updateProgram ({commit}, payload) {
		await this.$axios.$put(`/programmes/${payload.id}`, payload)
			.then(response =>  {
		
			})
			.catch((e) => {
	
			})
			.finally(function () {
		
			});
	
	},
	async deleteProgram ({commit}, {id}) {
		await this.$axios.$delete(`/programmes/${id}`)
			.then(response =>  {
			// handle success
				// commit("SET_PROGRAMMESDATA", response);
				// console.log(response);
			})
			.catch((e) => {
			// handle error
				console.log(error);
				// commit("SET_PROGRAMMESDATA", error);
			})
			.finally(function () {
			// always executed
				console.log('finally');
			});
	}
};

