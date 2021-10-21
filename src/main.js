import openGraph from './config/open-graph'

import './sass/style.scss';
import './sass/docs/globals.scss'

import Flare from '@lkmx/flare';
import Vuex from 'vuex'

import DefaultLayout from '~/layouts/DefaultLayout.vue';
import DocsLayout from '~/layouts/DocsLayout.vue';
import DocsHeroLayout from '~/layouts/DocsHeroLayout.vue';
import VueMarkdown from 'vue-markdown'
// import VueTyperPlugin from 'vue-typer'
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import typical from 'vue-typical';
import VueSocialSharing from 'vue-social-sharing';
import VueAnime from 'vue-animejs';


import '@fontsource/hind'
import '@fontsource/hind/300.css'
import '@fontsource/hind/600.css'
import '@fontsource/hind/700.css'
import '@fontsource/montserrat'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'



import ThemeMode from '~/components/animated/ThemeMode.vue';
import ThemeColor from '~/components/animated/ThemeColor.vue';
import Type from '~/components/Type.vue';
import AlertBar from '~/components/AlertBar.vue';
import Announcement from '~/components/Announcement.vue';
import Navigation from '~/components/Navigation.vue';
import ThemedImage from '~/components/ThemedImage.vue';
import ImagePlaceholder from '~/components/ImagePlaceholder.vue';
import HeroTitle from '~/components/HeroTitle.vue';
import HeroMixed from '~/components/HeroMixed.vue';
import HeroMixedCms from '~/components/HeroMixedCms.vue';
import TextArea from '~/components/TextArea.vue';
import CardSimple from '~/components/cards/CardSimple.vue';
// import CardSimpleDynamic from '~/components/cards/CardSimpleDynamic.vue';
import CardCTA from '~/components/cards/CardCTA.vue';
import CardMinimal from '~/components/cards/CardMinimal.vue';
import CardBlock from '~/components/cards/CardBlock.vue';
import CardMedia from '~/components/cards/CardMedia.vue';
import CardSecretAgent from '~/components/cards/CardSecretAgent.vue';
import CardStats from '~/components/cards/CardStats.vue';
import CardStructure from '~/components/cards/CardStructure.vue';
import CardCurrentPrice from '~/components/cards/CardCurrentPrice.vue';
import Media from '~/components/cards/Media.vue';
import CardGrid from '~/components/CardGrid.vue';
import Contributors from '~/components/cards/Contributors.vue';
import Nodes from '~/components/cards/Nodes.vue';
import MediaFeatured from '~/components/cards/MediaFeatured.vue';
import Committees from '~/components/cards/Committees.vue';
import CommitteesCms from '~/components/cards/CommitteesCms.vue';
import Btn from '~/components/Btn.vue';
import Faq from '~/components/Faq.vue';
import Colors from '~/components/cards/Colors.vue';
import MediaChannels from '~/components/cards/MediaChannels.vue';
import ContentNavigator from '~/components/ContentNavigator.vue';
import ContentNavigatorDocs from '~/components/ContentNavigatorDocs.vue';
import ContentNavigatorCms from '~/components/ContentNavigatorCms.vue';
import ScrollHorizontal from '~/components/ScrollHorizontal.vue';
import ContentColumns from '~/components/ContentColumns.vue';
import ContentSwitcher from '~/components/ContentSwitcher.vue';
import SecretAgentHero from '~/components/SecretAgentHero.vue';
import SecretAgentEmailFormBanner from '~/components/SecretAgentEmailFormBanner.vue';
import AboutGetStarted from '~/components/page/AboutGetStarted.vue';
import AboutPurchaseScrt from '~/components/page/AboutPurchaseScrt.vue';
import AboutWallets from '~/components/page/AboutWallets.vue';
import AboutScrtMajorFunctions from '~/components/page/AboutScrtMajorFunctions.vue';
import AboutScrtCommunitySupport from '~/components/page/AboutScrtCommunitySupport.vue';
import AboutScrtStakeGovApps from '~/components/page/AboutScrtStakeGovApps.vue';
import AboutScrtApps from '~/components/page/AboutScrtApps.vue';
import EcosystemRoadmapPdf from '~/components/page/EcosystemRoadmapPdf.vue';
import EcosystemRoadmapYourProject from '~/components/page/EcosystemRoadmapYourProject.vue';
import EcosystemRoadmapWhatsBeenBuilt from '~/components/page/EcosystemRoadmapWhatsBeenBuilt.vue';
import SubmitProject from '~/components/page/SubmitProject.vue';

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
import HomeHero from '~/components/page/HomeHero.vue';
import HomeExplainer from '~/components/page/HomeExplainer'
import HomeAnnouncements from '~/components/page/HomeAnnouncements'
import HomeFeaturedMedia from '~/components/page/HomeFeaturedMedia'
import i18n from '~/components/i18n'
import Deploy from '~/components/Deploy'

require('gridsome-plugin-remark-prismjs-all/themes/night-owl.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')








function setDefaultTheme() {
  const theme = getComputedStyle(document.documentElement).getPropertyValue('--theme')
  if (!theme) return
  const [body] = document.getElementsByTagName('body')
  if (!body) return
  body.setAttribute('theme', theme.trim())

}



export default function (Vue, {
  router,
  head,
  isClient,
  appOptions
}) {
  openGraph.forEach(item => head.meta.push(item))

  // Set default layout as a global component
  Vue.component('ThemeMode', ThemeMode);
  Vue.component('ThemeColor', ThemeColor);
  Vue.component('AlertBar', AlertBar);
  Vue.component('Announcement', Announcement);
  Vue.component('DefaultLayout', DefaultLayout);
  Vue.component('DocsLayout', DocsLayout);
  Vue.component('DocsHeroLayout', DocsHeroLayout);
  Vue.component('ThemedImage', ThemedImage);
  Vue.component('ImagePlaceholder', ImagePlaceholder);
  Vue.component('Navigation', Navigation);
  Vue.component('Type', Type);
  Vue.component('HeroTitle', HeroTitle);
  Vue.component('HeroMixed', HeroMixed);
  Vue.component('HeroMixedCms', HeroMixedCms);
  Vue.component('TextArea', TextArea);
  Vue.component('CardSimple', CardSimple);
  // Vue.component('CardSimpleDynamic', CardSimpleDynamic);
  Vue.component('card-cta', CardCTA);
  Vue.component('CardMinimal', CardMinimal);
  Vue.component('CardBlock', CardBlock);
  Vue.component('CardMedia', CardMedia);
  Vue.component('CardSecretAgent', CardSecretAgent);
  Vue.component('CardStats', CardStats);
  Vue.component('CardStructure', CardStructure);
  Vue.component('CardCurrentPrice', CardCurrentPrice);
  Vue.component('Media', Media);
  Vue.component('CardGrid', CardGrid);
  Vue.component('Contributors', Contributors);
  Vue.component('Nodes', Nodes);
  Vue.component('MediaFeatured', MediaFeatured);
  Vue.component('Committees', Committees);
  Vue.component('CommitteesCms', CommitteesCms);
  Vue.component('Btn', Btn);
  Vue.component('Faq', Faq);
  Vue.component('Colors', Colors);
  Vue.component('MediaChannels', MediaChannels);
  Vue.component('ContentNavigator', ContentNavigator);
  Vue.component('ContentNavigatorDocs', ContentNavigatorDocs);
  Vue.component('ContentNavigatorCms', ContentNavigatorCms);
  Vue.component('ScrollHorizontal', ScrollHorizontal);
  Vue.component('ContentColumns', ContentColumns);
  Vue.component('ContentSwitcher', ContentSwitcher);
  Vue.component('SecretAgentHero', SecretAgentHero);
  Vue.component('SecretAgentEmailFormBanner', SecretAgentEmailFormBanner);
  Vue.component('AboutGetStarted', AboutGetStarted);
  Vue.component('AboutPurchaseScrt', AboutPurchaseScrt);
  Vue.component('AboutWallets', AboutWallets);
  Vue.component('AboutScrtMajorFunctions', AboutScrtMajorFunctions);
  Vue.component('AboutScrtCommunitySupport', AboutScrtCommunitySupport);
  Vue.component('AboutScrtStakeGovApps', AboutScrtStakeGovApps);
  Vue.component('AboutScrtApps', AboutScrtApps);

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
  Vue.component('EcosystemRoadmapYourProject', EcosystemRoadmapYourProject);
  Vue.component('EcosystemRoadmapWhatsBeenBuilt', EcosystemRoadmapWhatsBeenBuilt);
  Vue.component('EcosystemRoadmapPdf', EcosystemRoadmapPdf);
  Vue.component('SubmitProject', SubmitProject);
  

  //Page Specific
  Vue.component('HomeHero', HomeHero);
  Vue.component('HomeExplainer', HomeExplainer);
  Vue.component('HomeAnnouncements', HomeAnnouncements);
  Vue.component('HomeFeaturedMedia', HomeFeaturedMedia);
 


  

  //External Libraries
  Vue.component('InfiniteSlideBar', InfiniteSlideBar);
  Vue.component('typical', typical);
  Vue.component('i18n', i18n);
  Vue.component('Deploy', Deploy);
  Vue.use(VueAnime);
  


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
    };
    next();
  });

  // State
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    state: {
      sidebarOpen: false
    },
    mutations: {
      toggleSidebar(state) {
        state.sidebarOpen = !state.sidebarOpen
      },
      closeSidebar(state) {
        state.sidebarOpen = false
      },
      openSidebar(state) {
        state.sidebarOpen = true
      }
    }
  })

  const $tp = (value) => value;
  Vue.prototype.$tp = !Vue.prototype.$tp ? $tp : Vue.prototype.$tp;

}
