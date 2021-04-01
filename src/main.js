import openGraph from './config/open-graph'

import "./sass/style.scss";

import Flare from "@lkmx/flare";

import DefaultLayout from "~/layouts/DefaultLayout.vue";

import Type from "~/components/Type.vue";

export default function(Vue, { router, head, isClient }) {
    openGraph.forEach(item => head.meta.push(item))

    // Set default layout as a global component
    Vue.component("DefaultLayout", DefaultLayout);
    Vue.component("Type", Type);

    Vue.use(Flare);
}