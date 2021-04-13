import openGraph from './config/open-graph'

import "./sass/style.scss";

import Flare from "@lkmx/flare";

import "@fontsource/hind"
import "@fontsource/hind/600.css"
import "@fontsource/hind/700.css"
import "@fontsource/montserrat"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/500.css"

import DefaultLayout from "~/layouts/DefaultLayout.vue";

import Type from "~/components/Type.vue";
import Navigation from "~/components/Navigation.vue";
import ThemedImage from "~/components/ThemedImage.vue";
import HeroVideo from "~/components/HeroVideo.vue";
import CardSimple from "~/components/CardSimple.vue";
// Blog
import BlogAuthor from "~/components/blog/BlogAuthor"
import BlogCard from "~/components/blog/BlogCard"
import BlogCardFeatured from "~/components/blog/BlogCardFeatured"
import BlogHero from "~/components/blog/BlogHero"
import BlogFeaturedPosts from "~/components/blog/BlogFeaturedPosts"
import BlogLatestPosts from "~/components/blog/BlogLatestPosts"
import BlogLatestPostsTwelve from "~/components/blog/BlogLatestPostsTwelve"
import BlogPosts from "~/components/blog/BlogPosts"
import BlogPostsFeatured from "~/components/blog/BlogPostsFeatured"

require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");


function setDefaultTheme() {
    const theme = getComputedStyle(document.documentElement).getPropertyValue('--theme')
    if (!theme) return
    const [body] = document.getElementsByTagName('body')
    if (!body) return
    body.setAttribute('theme', theme.trim())
}

export default function(Vue, {
    router,
    head,
    isClient
}) {
    openGraph.forEach(item => head.meta.push(item))

    // Set default layout as a global component
    Vue.component("DefaultLayout", DefaultLayout);
    Vue.component("ThemedImage", ThemedImage);
    Vue.component("Navigation", Navigation);
    Vue.component("Type", Type);
    Vue.component("HeroVideo", HeroVideo);
    Vue.component("CardSimple", CardSimple);

    // Blog
    Vue.component("BlogAuthor", BlogAuthor);
    Vue.component("BlogCard", BlogCard);
    Vue.component("BlogCardFeatured", BlogCardFeatured);
    Vue.component("BlogHero", BlogHero);
    Vue.component("BlogFeaturedPosts", BlogFeaturedPosts);
    Vue.component("BlogLatestPosts", BlogLatestPosts);
    Vue.component("BlogLatestPostsTwelve", BlogLatestPostsTwelve);
    Vue.component("BlogPosts", BlogPosts);
    Vue.component("BlogPostsFeatured", BlogPostsFeatured);

    Vue.use(Flare);
    Vue.$setDefaultTheme = setDefaultTheme;
}