
export const state = () => ({
	
	publicationsData: {
		success: false,
		result: [],
		error: {},
	},
	publicationTypes: {},
	journalArticle: [],
	publicationsCount: 0
});

export const getters =  {
	publicationsData (state) {
		return state.publicationsData;
	},
	publicationTypes (state) {
		return state.publicationTypes;
	}
};

export const mutations = {
	
	SET_PUBLICATIONSDATA (state, publicationsData) {
		if (publicationsData && Array.isArray(publicationsData)) {
			state.publicationsData.success = true;
			state.publicationsData.result = publicationsData;
			state.publicationsData.error = {};
		} else {
			console.log('error'+publicationsData);
			state.publicationsData.success = false;
			state.publicationsData.error = {
				message: {
					message: 'Error occured!'
				}
			};
		}
	},
	SET_PUBLICATIONS_COUNT (state, publicationsCount) {
		state.publicationsCount = publicationsCount;
	},
	SET_PUBLICATIONTYPES (state, publicationTypes) {
		state.publicationTypes = publicationTypes;
	},
	SET_JOURNALARTICLE (state, journalArticle) {
		state.journalArticle = journalArticle;
	}
};

export const actions = {
	async setJournalArticle ({commit}, {id}) {
		// await this.$axios({
		// 	method: 'get',
		// 	baseURL: `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${id}&retmode=json`,
		// 	headers:{ 'Authorization': ''}
		// })
		await this.$axios({
			method: 'get',
			url: `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${id}&retmode=json`,
			headers: ''
		})
			.then(response =>  {
			// handle success
				commit("SET_JOURNALARTICLE", response.data.result[`${id}`]);
			})
			.catch((e) => {
			// handle error
				commit("SET_JOURNALARTICLE", error);
			})
			.finally(function () {
			// always executed
			});
	},
	async countPublications ({commit}, {qs}) {
		await this.$axios.$get(`/publications/count?${qs}`)
		 .then(response =>  {
		 // handle success
			 commit("SET_PUBLICATIONS_COUNT", response);
		 })
		 .catch((e) => {
		 // handle error
			 commit("SET_PUBLICATIONS_COUNT", error);
		 })
		 .finally(function () {
		 // always executed
		 });
 },
	async setPublicationsData ({commit}, {qs}) {
		 await this.$axios.$get(`/publications?${qs}`)
			.then(response =>  {
			// handle success
				commit("SET_PUBLICATIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PUBLICATIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});

		  
	},
	async publicationAdd ({commit}, payload) {
		await this.$axios.$post('/publications', payload)
			.then(response =>  {
			// handle success
				commit("SET_PUBLICATIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PUBLICATIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});
		
	},
	async updatePublication ({commit}, payload) {
		await this.$axios.$put('/publications', payload)
			.then(response =>  {
			// handle success
				commit("SET_PUBLICATIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PUBLICATIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	},
	async deletePublication ({commit}, {id}) {
		await this.$axios.$delete(`/publications/${id}`)
			.then(response =>  {
			// handle success
				commit("SET_PUBLICATIONSDATA", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PUBLICATIONSDATA", error);
			})
			.finally(function () {
			// always executed
			});
	
	},

	async setPublicationTypes ({commit}, publicationTypes) {
		await this.$axios.$get('/publication-types', publicationTypes)
			.then(response =>  {
			// handle success
				commit("SET_PUBLICATIONTYPES", response);
			})
			.catch((e) => {
			// handle error
				commit("SET_PUBLICATIONTYPES", error);
			})
			.finally(function () {
			// always executed
			});
	}
};

