
export const state = () => ({
	
	hrdData: {
		success: false,
		result: [],
		error: {},
	}
});



export const mutations = {
	
	SET_HRD_DATA (state, hrdData) {
		if (hrdData && Array.isArray(hrdData)) {
			state.hrdData.success = true;
			state.hrdData.result = hrdData;
			state.hrdData.error = {};
		} else {
			console.log('error'+hrdData);
			state.hrdData.success = false;
			state.hrdData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	}
  
};

export const actions = {
  
	async setHRDData ({commit}, {qs}) {
		await this.$axios.$get(`/hrds?${qs}`)
			.then(response =>  {
				// handle success
				commit("SET_HRD_DATA", response);
			})
			.catch((e) => {
				// handle error
				commit("SET_HRD_DATA", error);
			})
			.finally(function () {
				// always executed
			});
	},


	async addHRD ({commit}, payload) {
		await this.$axios.$post('/hrds', payload)
			.then(response =>  {
			// handle success
				commit("SET_HRD_DATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_HRD_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},

	async updateHRD ({commit}, payload) {
		await this.$axios.$put('/hrds', payload)
			.then(response =>  {
			// handle success
				commit("SET_HRD_DATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_HRD_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	}
};

