
export const state = () => ({
	
	hrdTrainings: {
		success: false,
		result: [],
		error: {},
	}
});



export const mutations = {
	
	SET_HRD_TRAININGS (state, hrdTrainings) {
		if (hrdTrainings && Array.isArray(hrdTrainings)) {
			state.hrdTrainings.success = true;
			state.hrdTrainings.result = hrdTrainings;
			state.hrdTrainings.error = {};
		} else {
			console.log('error'+hrdTrainings);
			state.hrdTrainings.success = false;
			state.hrdTrainings.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	}
  
};

export const actions = {
  
	async setHRDTrainings ({commit}, {qs}) {
		await this.$axios.$get(`/hrd-trainings?${qs}`)
			.then(response =>  {
				// handle success
				commit("SET_HRD_TRAININGS", response);
			})
			.catch((e) => {
				// handle error
				commit("SET_HRD_TRAININGS", error);
			})
			.finally(function () {
				// always executed
			});
	},


	async addTraining ({commit}, payload) {
		await this.$axios.$post('/hrd-trainings', payload)
			.then(response =>  {
			// handle success
				commit("SET_HRD_TRAININGS", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_HRD_TRAININGS", error);
			})
			.finally(function () {
			// always executed
			});
	},

	async updateTraining ({commit}, payload) {
		await this.$axios.$put(`/hrd-trainings/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				commit("SET_HRD_TRAININGS", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_HRD_TRAININGS", error);
			})
			.finally(function () {
			// always executed
			});
	
	}
};

