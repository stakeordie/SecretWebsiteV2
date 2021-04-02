import openGraph from './config/open-graph'

import "./sass/style.scss";

import Flare from "@lkmx/flare";

import DefaultLayout from "~/layouts/DefaultLayout.vue";

import Type from "~/components/Type.vue";
import Navigation from "~/components/Navigation.vue";
import ThemedImage from "~/components/ThemedImage.vue";
// Blog
import BlogAuthor from "~/components/blog/BlogAuthor"
import BlogCard from "~/components/blog/BlogCard"
import BlogCardFeatured from "~/components/blog/BlogCardFeatured"
import BlogHero from "~/components/blog/BlogHero"
import FeaturedPosts from "~/components/blog/FeaturedPosts"
import LatestPosts from "~/components/blog/LatestPosts"
import LatestPostsTwelve from "~/components/blog/LatestPostsTwelve"
import Posts from "~/components/blog/Posts"
import PostsFeatured from "~/components/blog/PostsFeatured"

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

    // Blog
    Vue.component("BlogAuthor", BlogAuthor);
    Vue.component("BlogCard", BlogCard);
    Vue.component("BlogCardFeatured", BlogCardFeatured);
    Vue.component("BlogHero", BlogHero);
    Vue.component("FeaturedPosts", FeaturedPosts);
    Vue.component("LatestPosts", LatestPosts);
    Vue.component("LatestPostsTwelve", LatestPostsTwelve);
    Vue.component("Posts", Posts);
    Vue.component("PostsFeatured", PostsFeatured);

    Vue.use(Flare);
}