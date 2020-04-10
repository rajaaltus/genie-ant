
export const state = () => ({
	
	facultyData: {
		success: false,
		result: [],
		error: {},
	}
});



export const mutations = {
	
	SET_FACULTY_DATA (state, facultyData) {
		if (facultyData && Array.isArray(facultyData)) {
			state.facultyData.success = true;
			state.facultyData.result = facultyData;
			state.facultyData.error = {};
		} else {
			console.log('error'+facultyData);
			state.facultyData.success = false;
			state.facultyData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	}
  
};

export const actions = {
  
	async setFacultyData ({commit}, {qs}) {
		await this.$axios.$get(`/retired-faculties?${qs}`)
			.then(response =>  {
				// handle success
				commit("SET_FACULTY_DATA", response);
			})
			.catch((e) => {
				// handle error
				// commit("SET_FACULTY_DATA", error);
			})
			.finally(function () {
				// always executed
			});
	},


	async addFaculty ({commit}, payload) {
		await this.$axios.$post('/retired-faculties', payload)
			.then(response =>  {
			// handle success
				// commit("SET_FACULTY_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_FACULTY_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	},

	async updateFaculty ({commit}, payload) {
		await this.$axios.$put(`/retired-faculties/${payload.id}`, payload)
			.then(response =>  {
			// handle success
				// commit("SET_FACULTY_DATA", response);
			})
			.catch((e) => {
			// handle error
				// commit("SET_FACULTY_DATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	}
};

