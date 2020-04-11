
export const state = () => ({
	
	participationsData: {
		success: false,
		result: [],
		error: {},
	},
	participationsCount: 0
});

export const getters =  {
	participationsData (state) {
		return state.participationsData;
	}
};

export const mutations = {
	
	SET_PARTICIPATIONSDATA (state, participationsData) {
		if (participationsData && Array.isArray(participationsData)) {
			state.participationsData.success = true;
			state.participationsData.result = participationsData;
			state.participationsData.error = {};
		} else {
			console.log('error'+participationsData);
			state.participationsData.success = false;
			state.participationsData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},
	SET_PARTICIPATIONS_COUNT (state, participationsCount) {
		state.participationsCount = participationsCount;
	}
};

export const actions = {
	async setParticipationsData ({commit}, {qs}) {
		 await this.$axios.$get(`/participations?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_PARTICIPATIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PARTICIPATIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});

		  
	},
	async countParticipations ({commit}, {qs}) {
		await this.$axios.$get(`/participations/count?${qs}`)
		 .then(response =>  {
		 // handle success
			 commit("SET_PARTICIPATIONS_COUNT", response);
		 })
		 .catch((e) => {
		 // handle error
			 commit("SET_PARTICIPATIONS_COUNT", error);
		 })
		 .finally(function () {
		 // always executed
		 });
 },
	async participationAdd ({commit}, payload) {
		await this.$axios.$post('/participations', payload)
			.then(response =>  {
			// handle success
				commit("SET_PARTICIPATIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PARTICIPATIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});
		
	},
	async updateParticipation ({commit}, payload) {
		await this.$axios.$put('/participations', payload)
			.then(response =>  {
			// handle success
				commit("SET_PARTICIPATIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PARTICIPATIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	},
	async deleteParticipation ({commit}, {id}) {
		await this.$axios.$delete(`/participations/${id}`)
			.then(response =>  {
			// handle success
				commit("SET_PARTICIPATIONSDATA", response);
				//console.log(response);
			})
			.catch((e) => {
			// handle error
				//console.log(error);
				commit("SET_PARTICIPATIONSDATA", error);
			})
			.finally(function () {
			// always executed
				//console.log('finally');
			});
	}
};

