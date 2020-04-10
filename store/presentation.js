
export const state = () => ({
	
	presentationsData: {
		success: false,
		result: [],
		error: {},
	},
	presentationsCount: 0
});

export const getters =  {
	presentationsData (state) {
		return state.presentationsData;
	}
};

export const mutations = {
	
	SET_PRESENTATIONSDATA (state, presentationsData) {
		if (presentationsData && Array.isArray(presentationsData)) {
			state.presentationsData.success = true;
			state.presentationsData.result = presentationsData;
			state.presentationsData.error = {};
		} else {
			console.log('error'+presentationsData);
			state.presentationsData.success = false;
			state.presentationsData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},
	SET_PRESENTATIONS_COUNT (state, presentationsCount) {
		state.presentationsCount = presentationsCount;
	}
};

export const actions = {
	async setPresentationsData ({commit}, {qs}) {
		 await this.$axios.$get(`/presentations?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_PRESENTATIONSDATA", response);
				// console.log(response);
			})
			.catch((e) => {
			// handle error
				// console.log(error);
				commit("SET_PRESENTATIONSDATA", error);
			})
			.finally(function () {
			// always executed
				// console.log('finally');
			});
	},
	async countPresentations ({commit}, {qs}) {
		await this.$axios.$get(`/presentations/count?${qs}`)
		 .then(response =>  {
		 // handle success
			 commit("SET_PRESENTATIONS_COUNT", response);
		 })
		 .catch((e) => {
		 // handle error
			 commit("SET_PRESENTATIONS_COUNT", error);
		 })
		 .finally(function () {
		 // always executed
		 });
 },
	async addPresentation ({commit}, payload) {
		await this.$axios.$post('/presentations', payload)
			.then(response =>  {
			// handle success
				commit("SET_PRESENTATIONSDATA", response);
				// console.log(response);
			})
			.catch((e) => {
			// handle error
				// console.log(error);
				commit("SET_PRESENTATIONSDATA", error);
			})
			.finally(function () {
			// always executed
				// console.log('finally');
			});
		
	},
	async updatePresentation ({commit}, payload) {
		await this.$axios.$put('/presentations', payload)
			.then(response =>  {
			// handle success
				commit("SET_PRESENTATIONSDATA", response);
				// console.log(response);
			})
			.catch((e) => {
			// handle error
				// console.log(error);
				commit("SET_PRESENTATIONSDATA", error);
			})
			.finally(function () {
			// always executed
				// console.log('finally');
			});
	
	},
	async deletePresentation ({commit}, {id}) {
		await this.$axios.$delete(`/presentations/${id}`)
			.then(response =>  {
			// handle success
				commit("SET_PRESENTATIONSDATA", response);
				// console.log(response);
			})
			.catch((e) => {
			// handle error
				// console.log(error);
				commit("SET_PRESENTATIONSDATA", error);
			})
			.finally(function () {
			// always executed
				// console.log('finally');
			});
	}
};

