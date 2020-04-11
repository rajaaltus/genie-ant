
export const state = () => ({
  selectedYear: 0,
	activities: [],
	studentActivities: [],
	reportYears: [],
	students: [],
	staffs: [],	
 });

export const mutations = {
	
	SET_STUDENTS (state, students) {
		state.students = students;
	},
	SET_STAFFS (state, staffs) {
		state.staffs = staffs;
	},
  SET_REPORTING_YEAR (state, selectedYear) {
		state.selectedYear = selectedYear;
	},
  SETACTIVITIES (state, activities) {
		state.activities = [	
			{
				id: 1,
				title: 'Programmes / Events',
				count: 12,
				icon: 'mdi-clipboard-list',
				path: '/admin/activities/faculties/program',
			},
			{
				id: 2,
				title: 'Department Visitors',
				count: 5,
				icon: 'mdi-certificate-outline',
				path: '/admin/activities/faculties/visitor',
			},
			{
				id: 3,
				title: 'Training Underwent',
				count: 8,
				icon: 'mdi-bike-fast',
				path: '/admin/activities/faculties/training',
				storeVar: 'vistor.visitorsData'
			},
			{
				id: 4,
				title: 'Presentations / Posters',
				count: 14,
				icon: 'mdi-billboard',
				path: '/admin/activities/faculties/presentation',
			},
			{
				id: 5,
				title: 'Participations',
				count: 4,
				icon: 'mdi-atom',
				path: '/admin/activities/faculties/participation',
			},
			{
				id: 6,
				title: 'Public Engagement',
				count: 2,
				icon: 'mdi-air-horn',
				path: '/admin/activities/faculties/public',
			},
			{
				id: 7,
				title: 'Research Activities',
				count: 7,
				icon: 'mdi-book-search',
				path: '/admin/activities/faculties/research',
			},
			{
				id: 8,
				title: 'Publications',
				count: 6,
				icon: 'mdi-bookshelf',
				path: '/admin/activities/faculties/publication',
			},
			{
				id: 9,
				title: 'Recognitions',
				count: 18,
				icon: 'mdi-crown',
				path: '/admin/activities/faculties/recognition',
			},
			{
				id: 10,
				title: 'Patents',
				count: 7,
				icon: 'mdi-book-lock',
				path: '/admin/activities/faculties/patent',
			},
			{
				id: 11,
				title: 'Key Assignments',
				count: 20,
				icon: 'mdi-ship-wheel',
				path: '/admin/activities/faculties/assignment',
			}
		];
	},
	SET_STUDENT_ACTIVITIES (state, studentActivities) {
		state.studentActivities = [	
			{
				id: 4,
				title: 'Presentations / Posters',
				count: 14,
				icon: 'mdi-billboard',
				path: '/admin/activities/students/presentation',
			},
			{
				id: 5,
				title: 'Participations',
				count: 4,
				icon: 'mdi-atom',
				path: '/admin/activities/students/participation',
			},
			{
				id: 8,
				title: 'Publications',
				count: 6,
				icon: 'mdi-bookshelf',
				path: '/admin/activities/students/publication',
			},
			{
				id: 9,
				title: 'Recognitions',
				count: 18,
				icon: 'mdi-crown',
				path: '/admin/activities/students/recognition',
			},
			{
				id: 12,
				title: 'Theses / Dissertions',
				count: 20,
				icon: 'mdi-clock',
				path: '/admin/activities/students/theses'
			}
		];
	},
};

export const actions = {
  async setReportingYear ({commit}, selectedYear) {
		commit ('SET_REPORTING_YEAR', selectedYear);
  },
  async setActivities ({commit}, activities) {
		commit('SETACTIVITIES', activities);
	},
	async setStudentActivities ({commit}, studentActivities) {
		commit('SET_STUDENT_ACTIVITIES', studentActivities);
	},
	async setStudents ({commit}, {qs}) {
		await this.$axios.$get(`/users?${qs}`)
			.then(response => {
				commit('SET_STUDENTS', response);
			})
			.catch((e) => {
			})
			.finally(function () {
			});
	},
	async setStaffs ({commit}, {qs}) {
		await this.$axios.$get(`/users?${qs}`)
			.then(response => {
				commit('SET_STAFFS', response);
			})
			.catch((e) => {
			})
			.finally(function () {
			});
	},
	async deleteFile ({commit}, {id}) {
		await this.$axios.$delete(`/upload/files/${id}`)
		.then(response => {
			return true;
		})
		.catch((e) => {
		})
		.finally(function () {
		});
	},

};
