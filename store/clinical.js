
export const state = () => ({
	
	clinicalData: {
		success: false,
		result: [],
		error: {},
	},
	clinicalDataTable: {
		success: false,
		result: [],
		error: {},
	},
	clinicalOutDataTable: {
		success: false,
		result: [],
		error: {},
	}
});

export const getters =  {
	clinicalData (state) {
		return state.clinicalData;
	}
};

export const mutations = {
	
	SET_CLINICALDATA (state, clinicalData) {
		if (clinicalData && Array.isArray(clinicalData)) {
			state.clinicalData.success = true;
			state.clinicalData.result = clinicalData;
			state.clinicalData.error = {};
		} else {
			console.log('error'+clinicalData);
			state.clinicalData.success = false;
			state.clinicalData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},

	SET_CLINICALDATA_TABLE (state, clinicalDataTable) {
		if (clinicalDataTable && Array.isArray(clinicalDataTable)) {
			state.clinicalDataTable.success = true;
			state.clinicalDataTable.result = clinicalDataTable;
			state.clinicalDataTable.error = {};
		} else {
			console.log('error'+clinicalDataTable);
			state.clinicalDataTable.success = false;
			state.clinicalDataTable.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},
	SET_CLINICALOUTDATA_TABLE (state, clinicalOutDataTable ) {
		if (clinicalOutDataTable && Array.isArray(clinicalOutDataTable)) {
			state.clinicalOutDataTable.success = true;
			state.clinicalOutDataTable.result = clinicalOutDataTable;
			state.clinicalOutDataTable.error = {};
		} else {
			console.log('error'+clinicalOutDataTable);
			state.clinicalOutDataTable.success = false;
			state.clinicalOutDataTable.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	}

};

export const actions = {
	async setClinicalData ({commit}, {qs}) {
		 await this.$axios.$get(`/pc-clinical-services?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_CLINICALDATA", response);
			})
			.catch((_e) => {
			// handle error
				commit("SET_CLINICALDATA", error);
			})
			.finally(function () {
			// always executed
			});
	},

	async addClinical ({commit}, payload) {
		await this.$axios.$post('/pc-clinical-services', payload)
			.then(response =>  {
			// handle success
				// commit("SET_CLINICALDATA", response);
			})
			.catch((_e) => {
			// handle error
				// commit("SET_CLINICALDATA", error);
			})
			.finally(function () {
			// always executed
			});
		
	},
	async updateClinical ({commit}, payload) {
		await this.$axios.$put(`/pc-clinical-services/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				// commit("SET_CLINICALDATA", response);
			})
			.catch((_e) => {
			// handle error
				// commit("SET_CLINICALDATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	}
};

