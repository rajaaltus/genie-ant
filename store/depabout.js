export const state = () => ({	
	aboutData: {
		success: false,
		result: {			
			annual_year: 0,			
			department_id: 0,
			id: 0,
			status: "published",
			introduction: "",
            facilities: "",
            image_1: 0,
            image_2: 0,
            image_3: 0
		},
		error: {},
	},
	deptImages: {
		success: false,
		result: [],
		error: {},
	},
	deptImageContents: {
		success: false,
		result: [],
		error: {},
	},
	addedImageId: 0,
	departmentProfileId: 0	
});

export const mutations = {
    GET_DEPT_PROFILE_DATA (state, aboutData) {
		if (aboutData) {
			state.aboutData.success = true;
			state.aboutData.result = aboutData;
			state.aboutData.error = {};
			state.departmentProfileId = aboutData.id;
		} else {
			console.log('error ' + aboutData);
			state.aboutData.success = false;
			state.aboutData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	}
};

export const actions = {
    async getDeptProfileData ({commit}, query) {
		console.log('Calling get dep profile api');
		await this.$axios.$get(`items/department_profile?${query}`)
			.then(response =>  {
				console.log(response.data[0]);
				// handle success
				commit("GET_DEPT_PROFILE_DATA", response);
			})
			.catch((e) => {
				// handle error
				commit("GET_DEPT_PROFILE_DATA", error);
			})
			.finally(function () {
				// always executed
			});
    },    
    async addDeptProfileImage({ commit }, query) {
        var addImgId = 0;  

        await this.$axios.post(`/files`, query.data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }).then(response => {
            console.log(response);
          if (response.status == 200) {
            addImgId = response.data.id;
            console.log(addImgId);
          }
        });
      }
};