import openGraph from './config/open-graph'

import "./sass/style.scss";

import Flare from "@lkmx/flare";

import VueMarkdown from 'vue-markdown'

import "@fontsource/hind"
import "@fontsource/hind/600.css"
import "@fontsource/hind/700.css"
import "@fontsource/montserrat"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/500.css"

import InfiniteSlideBar from 'vue-infinite-slide-bar'

import DefaultLayout from "~/layouts/DefaultLayout.vue";

import Type from "~/components/Type.vue";
import Navigation from "~/components/Navigation.vue";
import ThemedImage from "~/components/ThemedImage.vue";
import HeroVideo from "~/components/HeroVideo.vue";
import HeroTitle from "~/components/HeroTitle.vue";
import CardSimple from "~/components/cards/CardSimple.vue";
import CardMinimal from "~/components/cards/CardMinimal.vue";
import CardBlock from "~/components/cards/CardBlock.vue";
import CardMedia from "~/components/cards/CardMedia.vue";
import CardSecretAgent from "~/components/cards/CardSecretAgent.vue";
import Media from "~/components/cards/Media.vue";
import Contributors from "~/components/cards/Contributors.vue";
import MediaFeatured from "~/components/cards/MediaFeatured.vue";
import Committees from "~/components/cards/Committees.vue";
import Btn from "~/components/Btn.vue";
import Faq from "~/components/Faq.vue";
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
import BlogFilter from "~/components/blog/BlogFilter"
// import SecretAgents from "~/components/SecretAgents"

require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");



function setDefaultTheme() {
    const theme = getComputedStyle(document.documentElement).getPropertyValue('--theme')
    if (!theme) return
    const [body] = document.getElementsByTagName('body')
    if (!body) return
    body.setAttribute('theme', theme.trim())


var left = document.getElementById("left");
var stop = (left.offsetTop - 60);

window.onscroll = function (e) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop, left.offsetTop);
    // left.offsetTop;
    console.log('lol')
    if (scrollTop >= stop) {
        left.className = 'stick';
    } else {
        left.className = '';
    }

}
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
    Vue.component("HeroTitle", HeroTitle);
    Vue.component("CardSimple", CardSimple);
    Vue.component("CardMinimal", CardMinimal);
    Vue.component("CardBlock", CardBlock);
    Vue.component("CardMedia", CardMedia);
    Vue.component("CardSecretAgent", CardSecretAgent);
    Vue.component("Media", Media);
    Vue.component("Contributors", Contributors);
    Vue.component("MediaFeatured", MediaFeatured);
    Vue.component("Committees", Committees);
    Vue.component("Btn", Btn);
    Vue.component("Faq", Faq);

    //Experimental
    // Vue.component("SecretAgents", SecretAgents);
    Vue.component("VueMarkdown", VueMarkdown);

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
    Vue.component("BlogFilter", BlogFilter);

    Vue.component('InfiniteSlideBar', InfiniteSlideBar)

    Vue.use(Flare);
    // This is Victor's code
    Vue.$setDefaultTheme = setDefaultTheme;
}