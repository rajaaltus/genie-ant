
export const state = () => ({
	otservicesData: {}
});

export const mutations = {
	
	SET_OTSERVICES_DATA (state, otservicesData) {
		state.otservicesData = otservicesData;
	}
  
};

export const actions = {
  
	async setOTServicesData ({commit}, {qs}) {
		await this.$axios.$get(`/pc-ot-other-services?${qs}`)
			.then(response =>  {
				// handle success
				commit("SET_OTSERVICES_DATA", response);
			})
			.catch((e) => {
				// handle error
				commit("SET_OTSERVICES_DATA", error);
			})
			.finally(function () {
				// always executed
			});
	},


	async addOTService ({commit}, payload) {
		await this.$axios.$post('/pc-ot-other-services', payload)
		// await this.$axios.$post('/pc-diagnostic-activities', payload)
			.then(response =>  {
			// handle success
				// commit("SET_OTSERVICES_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_OTSERVICES_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},

	async updateOTService ({commit}, payload) {
		await this.$axios.$put(`/pc-ot-other-services/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				// commit("SET_OTSERVICES_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_OTSERVICES_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	}
};

