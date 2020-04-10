
export const state = () => ({
	
	educationData: {
		success: false,
		result: [],
		error: {},
	},
	expertiseData: {
		success: false,
		result: [],
		error: {},
	}
});

export const getters =  {
	educationData (state) {
		return state.educationData;
	}
};

export const mutations = {
	
	SET_EDUCATION_DATA (state, educationData) {
		if (educationData && Array.isArray(educationData)) {
			state.educationData.success = true;
			state.educationData.result = educationData;
			state.educationData.error = {};
		} else {
			console.log('error'+educationData);
			state.educationData.success = false;
			state.educationData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},
	SET_EXPERTISE_DATA (state, expertiseData) {
		if (expertiseData && Array.isArray(expertiseData)) {
			state.expertiseData.success = true;
			state.expertiseData.result = expertiseData;
			state.expertiseData.error = {};
		} else {
			console.log('error'+expertiseData);
			state.expertiseData.success = false;
			state.expertiseData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	}
};
 
export const actions = {
	
	async setEducationData ({commit}, {id}) {
		await this.$axios.$get(`/education-infos?user.id=${id}`)
			.then(response =>  {
				// handle success
				commit("SET_EDUCATION_DATA", response);
			})
			.catch((e) => {
				// handle error
				commit("SET_EDUCATION_DATA", error);
			})
			.finally(function () {
				// always executed
			});
		  
	},
	async setExpertiseData ({commit}, {id}) {
		await this.$axios.$get(`/expertise-infos?user.id=${id}`)
			.then(response =>  {
				// handle success
				commit("SET_EXPERTISE_DATA", response);
			})
			.catch((e) => {
				// handle error
				commit("SET_EXPERTISE_DATA", error);
			})
			.finally(function () {
				// always executed
			});
	},
	async addEducation ({commit}, payload) {
		await this.$axios.$post('/education-infos', payload)
			.then(response =>  {
			// handle success
				commit("SET_EDUCATION_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_EDUCATION_DATA", error);
			})
			.finally(function () {
			// always executed
			});
		
	},
	async addExpertise ({commit}, payload) {
		await this.$axios.$post('/expertise-infos', payload)
			.then(response =>  {
			// handle success
				commit("SET_EXPERTISE_DATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_EXPERTISE_DATA", error);
			})
			.finally(function () {
			// always executed
			});
		
	},
	async updateExpertise ({commit}, payload) {
		await this.$axios.$put(`/expertise-infos/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				commit("SET_EXPERTISE_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_EXPERTISE_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async updateEducation ({commit}, payload) {
		await this.$axios.$put(`/education-infos/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				commit("SET_EDUCATION_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_EDUCATION_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async deleteEducation ({commit}, {id}) {
		await this.$axios.$delete(`/education-infos/${id}`)
			.then(response =>  {
			// handle success
				commit("SET_EDUCATION_DATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_EDUCATION_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async deleteExpertise ({commit}, {id}) {
		await this.$axios.$delete(`/expertise-infos/${id}`)
			.then(response =>  {
			// handle success
				commit("SET_EXPERTISE_DATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_EXPERTISE_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	}
};

