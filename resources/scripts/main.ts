import { createApp, h } from "vue";
import store from "./store";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { importPageComponent } from "@/scripts/vite/import-page-component";
import Default from "../views/layouts/default.vue";

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

    // async (name) =>
    //     importPageComponent(
    //         name,
    //         await import.meta.glob("../views/pages/**/*.vue")
    //     ),
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(store)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
});
