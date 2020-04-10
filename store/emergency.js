
export const state = () => ({
	
	emergencyData: {},
	
});


export const mutations = {
	SET_EMERGENCY_DATA (state, emergencyData) {
		state.emergencyData = emergencyData;
	},
};

export const actions = {
	
	async setEmergencyData ({commit}, {qs}) {
		 await this.$axios.$get(`/pc-emergency-services?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_EMERGENCY_DATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_EMERGENCY_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
  
	async addEmergency ({commit}, payload) {
		await this.$axios.$post('/pc-emergency-services', payload)
			.then(response =>  {
			// handle success
				// commit("SET_EMERGENCY_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_EMERGENCY_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async updateEmergency ({commit}, payload) {
		await this.$axios.$put(`/pc-emergency-services/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				// commit("SET_EMERGENCY_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_EMERGENCY_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	}
};

