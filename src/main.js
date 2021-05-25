import openGraph from './config/open-graph'

import './sass/style.scss';

import Flare from '@lkmx/flare';

import DefaultLayout from '~/layouts/DefaultLayout.vue';
import VueMarkdown from 'vue-markdown'
// import VueTyperPlugin from 'vue-typer'
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import typical from 'vue-typical';
import VueSocialSharing from 'vue-social-sharing'


import '@fontsource/hind'
import '@fontsource/hind/300.css'
import '@fontsource/hind/600.css'
import '@fontsource/hind/700.css'
import '@fontsource/montserrat'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/500.css'



import Type from '~/components/Type.vue';
import AlertBar from '~/components/AlertBar.vue';
import Announcement from '~/components/Announcement.vue';
import Navigation from '~/components/Navigation.vue';
import ThemedImage from '~/components/ThemedImage.vue';
import ImagePlaceholder from '~/components/ImagePlaceholder.vue';
import HeroVideo from '~/components/HeroVideo.vue';
import HeroTitle from '~/components/HeroTitle.vue';
import CardSimple from '~/components/cards/CardSimple.vue';
import CardSimpleDynamic from '~/components/cards/CardSimpleDynamic.vue';
import CardMinimal from '~/components/cards/CardMinimal.vue';
import CardBlock from '~/components/cards/CardBlock.vue';
import CardMedia from '~/components/cards/CardMedia.vue';
import CardSecretAgent from '~/components/cards/CardSecretAgent.vue';
import Media from '~/components/cards/Media.vue';
import Contributors from '~/components/cards/Contributors.vue';
import MediaFeatured from '~/components/cards/MediaFeatured.vue';
import Committees from '~/components/cards/Committees.vue';
import Btn from '~/components/Btn.vue';
import Faq from '~/components/Faq.vue';
import Colors from '~/components/cards/Colors.vue';
import MediaChannels from '~/components/cards/MediaChannels.vue';
// Blog
import BlogAuthor from '~/components/blog/BlogAuthor'
import BlogCard from '~/components/blog/BlogCard'
import BlogCardFeatured from '~/components/blog/BlogCardFeatured'
import BlogHero from '~/components/blog/BlogHero'
import BlogFeaturedPosts from '~/components/blog/BlogFeaturedPosts'
import BlogLatestPosts from '~/components/blog/BlogLatestPosts'
import BlogLatestPostsTwelve from '~/components/blog/BlogLatestPostsTwelve'
import BlogPosts from '~/components/blog/BlogPosts'
import BlogPostsFeatured from '~/components/blog/BlogPostsFeatured'
import BlogFilter from '~/components/blog/BlogFilter'

// Page Specific
import HomeExplainer from '~/components/page/HomeExplainer'
import HomeAnnouncements from '~/components/page/HomeAnnouncements'
import HomeFeaturedMedia from '~/components/page/HomeFeaturedMedia'

require('gridsome-plugin-remark-prismjs-all/themes/night-owl.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')






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
    Vue.component('AlertBar', AlertBar);
    Vue.component('Announcement', Announcement);
    Vue.component('DefaultLayout', DefaultLayout);
    Vue.component('ThemedImage', ThemedImage);
    Vue.component('ImagePlaceholder', ImagePlaceholder);
    Vue.component('Navigation', Navigation);
    Vue.component('Type', Type);
    Vue.component('HeroVideo', HeroVideo);
    Vue.component('HeroTitle', HeroTitle);
    Vue.component('CardSimple', CardSimple);
    Vue.component('CardSimpleDynamic', CardSimpleDynamic);
    Vue.component('CardMinimal', CardMinimal);
    Vue.component('CardBlock', CardBlock);
    Vue.component('CardMedia', CardMedia);
    Vue.component('CardSecretAgent', CardSecretAgent);
    Vue.component('Media', Media);
    Vue.component('Contributors', Contributors);
    Vue.component('MediaFeatured', MediaFeatured);
    Vue.component('Committees', Committees);
    Vue.component('Btn', Btn);
    Vue.component('Faq', Faq);
    Vue.component('Colors', Colors);
    Vue.component('MediaChannels', MediaChannels);

    //Experimental
    // Vue.component('SecretAgents', SecretAgents);
    Vue.component('VueMarkdown', VueMarkdown);

    // Blog
    Vue.component('BlogAuthor', BlogAuthor);
    Vue.component('BlogCard', BlogCard);
    Vue.component('BlogCardFeatured', BlogCardFeatured);
    Vue.component('BlogHero', BlogHero);
    Vue.component('BlogFeaturedPosts', BlogFeaturedPosts);
    Vue.component('BlogLatestPosts', BlogLatestPosts);
    Vue.component('BlogLatestPostsTwelve', BlogLatestPostsTwelve);
    Vue.component('BlogPosts', BlogPosts);
    Vue.component('BlogPostsFeatured', BlogPostsFeatured);
    Vue.component('BlogFilter', BlogFilter);

    //Page Specific
    Vue.component('HomeExplainer', HomeExplainer);
    Vue.component('HomeAnnouncements', HomeAnnouncements);
    Vue.component('HomeFeaturedMedia', HomeFeaturedMedia);

    //External Libraries
    Vue.component('InfiniteSlideBar', InfiniteSlideBar);
    Vue.component('typical', typical);

    Vue.use(Flare);
    Vue.use(VueSocialSharing);


    // This is Victor's code
    Vue.$setDefaultTheme = setDefaultTheme;

    Vue.mixin({
        methods: {
          searchTrigger: function () {
            document.querySelector('.search-trigger').click();
          },
        },
      })

    router.beforeEach((from, to, next) => {
        if (process.isClient) {
            const el = document.querySelector('button[aria-label=Close]');
            if (el) {
                const clickEvent = new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': false
                });
                el.dispatchEvent(clickEvent);
            }
        }
        next();
    });

}
