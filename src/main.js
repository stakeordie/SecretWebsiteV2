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
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";


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
import AnnouncementVer2 from '~/components/AnnouncementVer2.vue';
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
import NewCardMedia from '~/components/cards/NewCardMedia.vue';
import CardSecretAgent from '~/components/cards/CardSecretAgent.vue';
import CardStats from '~/components/cards/CardStats.vue';
import CardStructure from '~/components/cards/CardStructure.vue';
import CardCurrentPrice from '~/components/cards/CardCurrentPrice.vue';
import Media from '~/components/cards/Media.vue';
import NewMedia from '~/components/cards/NewMedia.vue';
import CardGrid from '~/components/CardGrid.vue';
import CardGridV2 from '~/components/CardGridV2.vue';
import Contributors from '~/components/cards/Contributors.vue';
import Nodes from '~/components/cards/Nodes.vue';
import MediaFeatured from '~/components/cards/MediaFeatured.vue';
import NewMediaFeatured from '~/components/cards/NewMediaFeatured.vue';
import Committees from '~/components/cards/Committees.vue';
import CommitteesCms from '~/components/cards/CommitteesCms.vue';
import Btn from '~/components/Btn.vue';
import FluiButton from '~/components/FluiButton.vue';
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
import HeaderNav from '~/components/HeaderNav.vue';
// import HeaderMegaMenu from '~/components/HeaderMegaMenu.vue';
import HeaderMegaMenuV2 from '~/components/HeaderMegaMenuV2';
import FooterMenu from '~/components/FooterMenu.vue';

import LogoCarousel from '~/components/LogoCarousel.vue';



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


//BlogV2
import NewBlogCard from '~/components/blog/NewBlogCard'
import NewBlogLatestPosts from '~/components/blog/NewBlogLatestPosts'
import NewBlogPosts from '~/components/blog/NewBlogPosts'
import BlogPostsV2 from '~/components/blog/BlogPostsV2'
import BlogCardV2 from '~/components/blog/BlogCardV2'
import BlogCardFeaturedV2 from '~/components/blog/BlogCardFeaturedV2'
import BlogFeaturedPostsV2 from '~/components/blog/BlogFeaturedPostsV2'
import BlogPostsFeaturedV2 from '~/components/blog/BlogPostsFeaturedV2'
import BlogFilterV2 from '~/components/blog/BlogFilterV2'

// Page Specific
import HomeHero from '~/components/page/HomeHero.vue';
import HomeExplainer from '~/components/page/HomeExplainer'
import HomeAnnouncements from '~/components/page/HomeAnnouncements'
import HomeFeaturedMedia from '~/components/page/HomeFeaturedMedia'
import i18n from '~/components/i18n'
import Deploy from '~/components/Deploy'
import DeployTemp from '~/components/DeployTemp'
import DevelopersHero from '~/components/page/DevelopersHero'
import DevelopersFeatures from '~/components/page/DevelopersFeatures'
import DevelopersStartHere from '~/components/page/DevelopersStartHere'
import DevelopersPathway from '~/components/page/DevelopersPathway'
import DevelopersHelpNewDevs from '~/components/page/DevelopersHelpNewDevs'
import DevelopersCardResources from '~/components/page/DevelopersCardResources';
import DevelopersAdvanced from '~/components/page/DevelopersAdvanced'
import DevelopersQuestions from '~/components/page/DevelopersQuestions'
import DevelopersFunding from '~/components/page/DevelopersFunding'
import DevelopersCallAction from '~/components/page/DevelopersCallAction'
import DevelopersCallSecond from '~/components/page/DevelopersCallSecond'
import DevelopersCoolStuff from '~/components/page/DevelopersCoolStuff'
import ServiceTable from '~/components/page/ServiceTable'
import ServiceStatusAlert from '~/components/page/ServiceStatusAlert'
import ServiceStatusHero from '~/components/page/ServiceStatusHero'
import EcosystemFundingHero from '~/components/page/EcosystemFundingHero'
import EcosystemFundingAppVerticals from '~/components/page/EcosystemFundingAppVerticals'
import EcosystemFundingContributors from '~/components/page/EcosystemFundingContributors'
import ServiceJobs from '~/components/page/ServiceJobs'
import EcosystemFundingWhyBuild from '~/components/page/EcosystemFundingWhyBuild'
import EcosystemFundingApply from '~/components/page/EcosystemFundingApply'
import EcosystemFundingGrant from '~/components/page/EcosystemFundingGrant'
import EcosystemFundingCtas from '~/components/page/EcosystemFundingCtas'
import EcosystemFundingSlider from '~/components/page/EcosystemFundingSlider'
import NewHomeHero from '~/components/page/NewHomeHero'
import NewHomeContracts from '~/components/page/NewHomeContracts'
import NewHomeCallAction from '~/components/page/NewHomeCallAction'
import NewHomeMission from '~/components/page/NewHomeMission'
import NewHomeAnnouncement from '~/components/page/NewHomeAnnouncement'
import NewHomeFeaturedMedia from '~/components/page/NewHomeFeaturedMedia'
import NewMediaFeaturedHomeV2 from '~/components/cards/NewMediaFeaturedHomeV2'
import NewHomeFeaturedMediaTest from '~/components/page/NewHomeFeaturedMediaTest'
import NewHomeMissionCtas from '~/components/page/NewHomeMissionCtas'
import GrantsBuild from '~/components/page/GrantsBuild'
import GrantsHero from '~/components/page/GrantsHero'
import GetScrtHero from '~/components/page/GetScrtHero'
import GetScrtBuy from '~/components/page/GetScrtBuy'
import GetScrtBuyByGroups from '~/components/page/GetScrtBuyByGroups'
import GetScrtConvertSscrt from '~/components/page/GetScrtConvertSscrt'
import GetScrtQuestions from '~/components/page/GetScrtQuestions'
import GetScrtLearnMore from '~/components/page/GetScrtLearnMore'
import GetScrtWallets from '~/components/page/GetScrtWallets'
import GetScrtConvertSscrtV2 from '~/components/page/GetScrtConvertSscrtV2'
import AboutSecretNetworkHero from '~/components/page/AboutSecretNetworkHero'
import AboutSecretNetworkSupported from '~/components/page/AboutSecretNetworkSupported'
import AboutSecretNetworkMorePrivacy from '~/components/page/AboutSecretNetworkMorePrivacy'
import AboutSecretNetworkDetails from '~/components/page/AboutSecretNetworkDetails'
import AboutSecretNetworkPossibilities from '~/components/page/AboutSecretNetworkPossibilities'
import AboutSecretNetworkBuild from '~/components/page/AboutSecretNetworkBuild'
import AboutSecretNetworkContracts from '~/components/page/AboutSecretNetworkContracts'
import AboutSecretNetworkCtas from '~/components/page/AboutSecretNetworkCtas'

import AustinEventHero from '~/components/page/AustinEventHero'
import AustinEventMeet from '~/components/page/AustinEventMeet'




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
  Vue.component('AnnouncementVer2', AnnouncementVer2);

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
  Vue.component('NewCardMedia', NewCardMedia);
  Vue.component('CardSecretAgent', CardSecretAgent);
  Vue.component('CardStats', CardStats);
  Vue.component('CardStructure', CardStructure);
  Vue.component('CardCurrentPrice', CardCurrentPrice);
  Vue.component('Media', Media);
  Vue.component('NewMedia', NewMedia);
  Vue.component('CardGrid', CardGrid);
  Vue.component('CardGridV2', CardGridV2);
  Vue.component('Contributors', Contributors);
  Vue.component('Nodes', Nodes);
  Vue.component('MediaFeatured', MediaFeatured);
  Vue.component('NewMediaFeatured', NewMediaFeatured);
  Vue.component('Committees', Committees);
  Vue.component('CommitteesCms', CommitteesCms);
  Vue.component('Btn', Btn);
  Vue.component('FluiButton', FluiButton);
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
  Vue.component('HeaderNav', HeaderNav);
  // Vue.component('HeaderMegaMenu', HeaderMegaMenu);
  Vue.component('HeaderMegaMenuV2', HeaderMegaMenuV2);
  Vue.component('FooterMenu', FooterMenu);
  Vue.component('NewHomeHero', NewHomeHero);
  Vue.component('NewHomeContracts', NewHomeContracts);
  Vue.component('NewHomeCallAction', NewHomeCallAction);
  Vue.component('NewHomeMission', NewHomeMission);
  Vue.component('NewHomeAnnouncement', NewHomeAnnouncement);
  Vue.component('NewHomeFeaturedMedia', NewHomeFeaturedMedia);
  Vue.component('NewHomeFeaturedMediaTest', NewHomeFeaturedMediaTest);
  Vue.component('NewHomeMissionCtas', NewHomeMissionCtas);
  Vue.component('GrantsBuild', GrantsBuild);
  Vue.component('GetScrtHero', GetScrtHero);
  Vue.component('GetScrtBuy', GetScrtBuy);
  Vue.component('GetScrtBuyByGroups', GetScrtBuyByGroups);
  Vue.component('GetScrtQuestions', GetScrtQuestions);
  Vue.component('GetScrtLearnMore', GetScrtLearnMore);

  Vue.component('LogoCarousel', LogoCarousel);

  


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

  //BlogV2
  Vue.component('NewBlogCard', NewBlogCard);
  Vue.component('NewBlogLatestPosts', NewBlogLatestPosts);
  Vue.component('NewBlogPosts', NewBlogPosts);
  Vue.component('BlogCardV2', BlogCardV2);
  Vue.component('BlogPostsV2', BlogPostsV2);
  Vue.component('BlogCardFeaturedV2', BlogCardFeaturedV2);
  Vue.component('BlogFeaturedPostsV2', BlogFeaturedPostsV2);
  Vue.component('BlogPostsFeaturedV2', BlogPostsFeaturedV2);
  Vue.component('BlogFilterV2', BlogFilterV2);
  

  //Page Specific
  Vue.component('HomeHero', HomeHero);
  Vue.component('HomeExplainer', HomeExplainer);
  Vue.component('HomeAnnouncements', HomeAnnouncements);
  Vue.component('HomeFeaturedMedia', HomeFeaturedMedia);
  Vue.component('DevelopersHero', DevelopersHero);
  Vue.component('DevelopersFeatures', DevelopersFeatures);
  Vue.component('DevelopersStartHere', DevelopersStartHere);
  Vue.component('DevelopersPathway', DevelopersPathway);
  Vue.component('DevelopersHelpNewDevs', DevelopersHelpNewDevs);
  Vue.component('DevelopersCardResources', DevelopersCardResources);
  Vue.component('DevelopersAdvanced', DevelopersAdvanced);
  Vue.component('DevelopersQuestions', DevelopersQuestions);
  Vue.component('DevelopersFunding', DevelopersFunding);
  Vue.component('DevelopersCallAction', DevelopersCallAction);
  Vue.component('DevelopersCallSecond', DevelopersCallSecond);
  Vue.component('DevelopersCoolStuff', DevelopersCoolStuff);
  Vue.component('ServiceTable', ServiceTable);
  Vue.component('ServiceStatusAlert', ServiceStatusAlert);
  Vue.component('ServiceStatusHero', ServiceStatusHero);
  Vue.component('EcosystemFundingHero', EcosystemFundingHero);
  Vue.component('EcosystemFundingAppVerticals', EcosystemFundingAppVerticals);
  Vue.component('EcosystemFundingContributors', EcosystemFundingContributors);
  Vue.component('ServiceJobs', ServiceJobs);
  Vue.component('EcosystemFundingApply', EcosystemFundingApply);
  Vue.component('EcosystemFundingGrant', EcosystemFundingGrant);
  Vue.component('EcosystemFundingWhyBuild', EcosystemFundingWhyBuild);
  Vue.component('EcosystemFundingCtas', EcosystemFundingCtas);
  Vue.component('EcosystemFundingSlider', EcosystemFundingSlider);
  Vue.component('GrantsHero', GrantsHero);
  Vue.component('GetScrtConvertSscrt', GetScrtConvertSscrt);
  Vue.component('GetScrtWallets', GetScrtWallets);
  Vue.component('NewMediaFeaturedHomeV2', NewMediaFeaturedHomeV2);
  Vue.component('GetScrtConvertSscrtV2', GetScrtConvertSscrtV2);
  Vue.component('AboutSecretNetworkHero', AboutSecretNetworkHero);
  Vue.component('AboutSecretNetworkSupported', AboutSecretNetworkSupported);
  Vue.component('AboutSecretNetworkMorePrivacy', AboutSecretNetworkMorePrivacy);
  Vue.component('AboutSecretNetworkDetails', AboutSecretNetworkDetails);
  Vue.component('AboutSecretNetworkPossibilities', AboutSecretNetworkPossibilities);
  Vue.component('AboutSecretNetworkBuild', AboutSecretNetworkBuild);
  Vue.component('AboutSecretNetworkContracts', AboutSecretNetworkContracts);
  Vue.component('AboutSecretNetworkCtas', AboutSecretNetworkCtas);

  Vue.component('AustinEventHero', AustinEventHero);
  Vue.component('AustinEventMeet', AustinEventMeet);


  

  //External Libraries
  Vue.component('InfiniteSlideBar', InfiniteSlideBar);
  Vue.component('typical', typical);
  Vue.component('i18n', i18n);
  Vue.component('Deploy', Deploy);
  Vue.component('DeployTemp', DeployTemp);
  Vue.component("v-select", vSelect);
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
