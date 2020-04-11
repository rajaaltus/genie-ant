
export const state = () => ({
	
	recognitionsData: {
		success: false,
		result: [],
		error: {},
	},
	recognitionsCount: 0
});

export const getters =  {
	recognitionsData (state) {
		return state.recognitionsData;
	}
};

export const mutations = {
	
	SET_RECOGNITIONSDATA (state, recognitionsData) {
		if (recognitionsData && Array.isArray(recognitionsData)) {
			state.recognitionsData.success = true;
			state.recognitionsData.result = recognitionsData;
			state.recognitionsData.error = {};
		} else {
			console.log('error'+recognitionsData);
			state.recognitionsData.success = false;
			state.recognitionsData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},
	SET_RECOGNITIONS_COUNT (state, recognitionsCount) {
		state.recognitionsCount = recognitionsCount;
	}
};

export const actions = {
	async setRecognitionsData ({commit}, {qs}) {
		 await this.$axios.$get(`/recognitions?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_RECOGNITIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_RECOGNITIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async countRecognitions ({commit}, {qs}) {
		await this.$axios.$get(`/recognitions/count?${qs}`)
		 .then(response =>  {
		 // handle success
			 commit("SET_RECOGNITIONS_COUNT", response);
		 })
		 .catch((e) => {
		 // handle error
			 commit("SET_RECOGNITIONS_COUNT", error);
		 })
		 .finally(function () {
		 // always executed
		 });
 },
	async recognitionAdd ({commit}, payload) {
		await this.$axios.$post('/recognitions', payload)
			.then(response =>  {
			// handle success
				commit("SET_RECOGNITIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_RECOGNITIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});
		
	},
	async updateRecognition ({commit}, payload) {
		await this.$axios.$put('/recognitions', payload)
			.then(response =>  {
			// handle success
				commit("SET_RECOGNITIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_RECOGNITIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async deleteRecognition ({commit}, {id}) {
		await this.$axios.$delete(`/recognitions/${id}`)
			.then(response =>  {
			// handle success
				commit("SET_RECOGNITIONSDATA", response);
				console.log(response);
			})
			.catch((e) => {
			// handle error
				console.log(error);
				commit("SET_RECOGNITIONSDATA", error);
			})
			.finally(function () {
			// always executed
				console.log('finally');
			});
	}
};

