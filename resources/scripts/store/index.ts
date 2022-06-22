import { createStore } from "vuex";

import module from "./modules/module";

export default createStore({
    modules: {
        module,
    },
});
