
export const state = () => ({
	diagnosticData: {},
	testData: []
});



export const mutations = {
	
	SET_DIAGNOSTIC_DATA (state, diagnosticData) {
		state.diagnosticData = diagnosticData;
	},
	SET_TEST (state, testData) {
		state.testData = testData;
	}
  
};

export const actions = {
  
	async setDiagnosticData ({commit}, {qs}) {
		await this.$axios.$get(`/pc-diagnostic-services?${qs}`)
			.then(response =>  {
				// handle success
				commit("SET_DIAGNOSTIC_DATA", response);
			})
			.catch((e) => {
				// handle error
				// commit("SET_DIAGNOSTIC_DATA", error);
			})
			.finally(function () {
				// always executed
			});
	},

	async setTest ({commit}, {qs}) {
		await this.$axios.$get(`/pc-diagnostic-tests?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_TEST", response);
			})
			.catch((e) => {
			// handle error
			// commit("SET_TEST", error);
			})
			.finally(function () {
			// always executed
			});
	},


	async addDiagnostic ({commit}, payload) {
		await this.$axios.$post('/pc-diagnostic-services', payload)
			.then(response =>  {
			// handle success
				// commit("SET_DIAGNOSTIC_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_DIAGNOSTIC_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},

	async updateDiagnostic ({commit}, payload) {
		await this.$axios.$put(`/pc-diagnostic-services/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				// commit("SET_DIAGNOSTIC_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_DIAGNOSTIC_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	}
};

