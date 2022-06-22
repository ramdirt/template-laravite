import { createApp, h } from "vue";
import store from "./store";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { importPageComponent } from "@/scripts/vite/import-page-component";
import Default from "../views/layouts/default.vue";
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";

createInertiaApp({
    title: (title) => `${title} - AppName`,
    resolve: async (name) => {
        let page = await import(`../views/pages/${name}.vue`);

        page = page.default;

        if (page.layout === undefined) {
            page.layout = Default;
        }

        return page;
    },

    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(store)
            .use(ViewUIPlus)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
});
