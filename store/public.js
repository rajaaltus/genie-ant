
export const state = () => ({
	
	publicData: {
		success: false,
		result: [],
		error: {},
	},
	publicEngagementsCount: 0
});

export const getters =  {
	publicData (state) {
		return state.publicData;
	}
};

export const mutations = {
	
	SET_PUBLICDATA (state, publicData) {
		if (publicData && Array.isArray(publicData)) {
			state.publicData.success = true;
			state.publicData.result = publicData;
			state.publicData.error = {};
		} else {
			console.log('error'+publicData);
			state.publicData.success = false;
			state.publicData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},
	SET_PUBLICENGAGEMENTS_COUNT (state, publicEngagementsCount) {
		state.publicEngagementsCount = publicEngagementsCount;
	}
};

export const actions = {
	async setPublicData ({commit}, {qs}) {
		 await this.$axios.$get(`/public-engagements?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_PUBLICDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PUBLICDATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async countPublicEngagements ({commit}, {qs}) {
		await this.$axios.$get(`/public-engagements/count?${qs}`)
		 .then(response =>  {
		 // handle success
			 commit("SET_PUBLICENGAGEMENTS_COUNT", response);
		 })
		 .catch((e) => {
		 // handle error
			 commit("SET_PUBLICENGAGEMENTS_COUNT", error);
		 })
		 .finally(function () {
		 // always executed
		 });
 },
	async publicAdd ({commit}, payload) {
		await this.$axios.$post('/public-engagements', payload)
			.then(response =>  {
			// handle success
				commit("SET_PUBLICDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PUBLICDATA", error);
			})
			.finally(function () {
			// always executed
			});
		
	},
	async updatePublic ({commit}, payload) {
		await this.$axios.$put('/public-engagements', payload)
			.then(response =>  {
			// handle success
				commit("SET_PUBLICDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PUBLICDATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async deletePublic ({commit}, {id}) {
		await this.$axios.$delete(`/public-engagements/${id}`)
			.then(response =>  {
			// handle success
				commit("SET_PUBLICDATA", response);
				console.log(response);
			})
			.catch((e) => {
			// handle error
				console.log(error);
				commit("SET_PUBLICDATA", error);
			})
			.finally(function () {
			// always executed
				console.log('finally');
			});
	}
};

