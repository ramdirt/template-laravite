const state = {
    status: "Vuex - Active",
    count: 0,
};

const mutations = {
    increaseCount(state, { count }) {
        state.count += count.value;
    },
};

const getters = {
    getStatus: (state, getters) => {
        return state.status;
    },
    getCount: (state, getters) => {
        return state.count;
    },
};

const actions = {
    increaseCount({ state, commit }, count) {
        commit("increaseCount", { count });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
