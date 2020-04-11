
export const state = () => ({
	
	hrdCourses: {
		success: false,
		result: [],
		error: {},
	}
});



export const mutations = {
	
	SET_HRD_COURSES (state, hrdCourses) {
		if (hrdCourses && Array.isArray(hrdCourses)) {
			state.hrdCourses.success = true;
			state.hrdCourses.result = hrdCourses;
			state.hrdCourses.error = {};
		} else {
			console.log('error'+hrdCourses);
			state.hrdCourses.success = false;
			state.hrdCourses.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	}
  
};

export const actions = {
  
	async setHRDCourses ({commit}, {qs}) {
		await this.$axios.$get(`/hrd-courses?${qs}`)
			.then(response =>  {
				// handle success
				commit("SET_HRD_COURSES", response);
			})
			.catch((e) => {
				// handle error
				commit("SET_HRD_COURSES", error);
			})
			.finally(function () {
				// always executed
			});
	},


	async addHRDCourse ({commit}, payload) {
		await this.$axios.$post('/hrd-courses', payload)
			.then(response =>  {
			// handle success
				commit("SET_HRD_COURSES", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_HRD_COURSES", error);
			})
			.finally(function () {
			// always executed
			});
	},

	async updateHRDCourse ({commit}, payload) {
		await this.$axios.$put(`/hrd-courses/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				commit("SET_HRD_COURSES", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_HRD_COURSES", error);
			})
			.finally(function () {
			// always executed
			});
	
	}
};

