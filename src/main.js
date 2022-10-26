import openGraph from './config/open-graph'

import './sass/style.scss';
import './sass/docs/globals.scss'

import Flare from '@lkmx/flare';
import Vuex from 'vuex'

import DefaultLayout from '~/layouts/DefaultLayout.vue';
// import DocsLayout from '~/layouts/DocsLayout.vue';
// import DocsHeroLayout from '~/layouts/DocsHeroLayout.vue';
import VueMarkdown from 'vue-markdown'
// import VueTyperPlugin from 'vue-typer'
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import typical from 'vue-typical';
import VueSocialSharing from 'vue-social-sharing';
import VueAnime from 'vue-animejs';
import vSelect from "vue-select";
import Countdown from "@whitewizard/countdown"
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
import AlertBar from '~/components/AlertBar.vue';

import AnnouncementVer2 from '~/components/AnnouncementVer2.vue';
import ThemedImage from '~/components/ThemedImage.vue';
import ImagePlaceholder from '~/components/ImagePlaceholder.vue';
import HeroTitle from '~/components/HeroTitle.vue';
import HeroMixed from '~/components/HeroMixed.vue';
import HeroMixedCms from '~/components/HeroMixedCms.vue';
import CardSimple from '~/components/cards/CardSimple.vue';
import CardMinimal from '~/components/cards/CardMinimal.vue';
import CardBlock from '~/components/cards/CardBlock.vue';
import CardMedia from '~/components/cards/CardMedia.vue';
import NewMedia from '~/components/cards/NewMedia.vue';
import CardGridV3 from '~/components/CardGridV3.vue';
import CardGridExchanges from '~/components/CardGridExchanges.vue';
import EcosystemExperiencingIssues from '~/components/page/EcosystemExperiencingIssues.vue';
import CardGridContributors from '~/components/CardGridContributors.vue';
import CardGridContributorFilter from '~/components/CardGridContributorFilter.vue';
import CardGridPartners from '~/components/CardGridPartners.vue';
import CardGridValidators from '~/components/CardGridValidators.vue';
import CardGridNfts from '~/components/CardGridNfts.vue';
import NewMediaFeatured from '~/components/cards/NewMediaFeatured.vue';
import CommitteesCms from '~/components/cards/CommitteesCms.vue';
import Btn from '~/components/Btn.vue';
import Colors from '~/components/cards/Colors.vue';
import MediaChannels from '~/components/cards/MediaChannels.vue';
import ContentNavigatorDocs from '~/components/ContentNavigatorDocs.vue';
import ContentNavigatorCms from '~/components/ContentNavigatorCms.vue';
import ScrollHorizontal from '~/components/ScrollHorizontal.vue';
import ScrollHorizontalV2 from '~/components/ScrollHorizontalV2.vue';
import ContentColumns from '~/components/ContentColumns.vue';
import ContentSwitcher from '~/components/ContentSwitcher.vue';
import SecretAgentHero from '~/components/SecretAgentHero.vue';
import SecretAgentEmailFormBanner from '~/components/SecretAgentEmailFormBanner.vue';
import EcosystemRoadmapPdf from '~/components/page/EcosystemRoadmapPdf.vue';
import EcosystemRoadmapYourProject from '~/components/page/EcosystemRoadmapYourProject.vue';
import EcosystemRoadmapWhatsBeenBuilt from '~/components/page/EcosystemRoadmapWhatsBeenBuilt.vue';
import SubmitProject from '~/components/page/SubmitProject.vue';
import HeaderMegaMenuV2 from '~/components/HeaderMegaMenuV2';
import FooterMenu from '~/components/FooterMenu.vue';

import LogoCarousel from '~/components/LogoCarousel.vue';
import PartnersLogos from '~/components/PartnersLogos'

//BlogV2
import NewBlogCard from '~/components/blog/NewBlogCard'
import NewBlogLatestPosts from '~/components/blog/NewBlogLatestPosts'

// Page Specific
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
import NewMediaFeaturedHomeV2 from '~/components/cards/NewMediaFeaturedHomeV2'
import NewHomeMissionCtas from '~/components/page/NewHomeMissionCtas'
import GrantsBuild from '~/components/page/GrantsBuild'
import GrantsHero from '~/components/page/GrantsHero'
import GetScrtHero from '~/components/page/GetScrtHero'
import GetScrtBuy from '~/components/page/GetScrtBuy'
import GetScrtBuyByGroups from '~/components/page/GetScrtBuyByGroups'
import GetScrtQuestions from '~/components/page/GetScrtQuestions'
import GetScrtLearnMore from '~/components/page/GetScrtLearnMore'
import GetScrtWallets from '~/components/page/GetScrtWallets'
import GetScrtConvertSscrtV2 from '~/components/page/GetScrtConvertSscrtV2'
import AboutSecretNetwork from '~/components/page/AboutSecretNetwork'
import AustinEventHero from '~/components/page/AustinEventHero'
import AustinEventMeet from '~/components/page/AustinEventMeet'
import AustinEventPartnership from '~/components/page/AustinEventPartnership'
import AustinEventFooter from '~/components/page/AustinEventFooter'
import HomeDcentralAfterpartyBanner from '~/components/page/HomeDcentralAfterpartyBanner'
import LandingEventSneakPeek from '~/components/page/LandingEventSneakPeek'

import GeneralCtas from '~/components/page/GeneralCtas'
import LearnPortalHero from '~/components/page/LearnPortalHero'

import LandingSneakPeekEvent from '~/components/page/LandingSneakPeekEvent'

// Dynamic
import TextColumnSingle from '~/components/dynamic/TextColumnSingle'
import TextColumnDouble from '~/components/dynamic/TextColumnDouble'
import TextImageColumnDouble from '~/components/dynamic/TextImageColumnDouble'
import ArticleHero from '~/components/dynamic/ArticleHero'
import ArticleImage from '~/components/dynamic/ArticleImage'
import ArticleVideo from '~/components/dynamic/ArticleVideo'
import Carousel from '~/components/dynamic/Carousel'
import CarouselGroup from '~/components/dynamic/CarouselGroup'
import LearnHeader from '~/components/dynamic/LearnHeader'
import OptionalCalloutBox from '~/components/dynamic/OptionalCalloutBox'
import Callout from '~/components/dynamic/Callout'
import CtaGrid from '~/components/dynamic/CtaGrid'
import CardSearch from '~/components/dynamic/CardSearch'
import DynamicBreadcrumb from '~/components/DynamicBreadcrumb';






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
  Vue.component('DynamicBreadcrumb', DynamicBreadcrumb);
  Vue.component('AnnouncementVer2', AnnouncementVer2);

  Vue.component('DefaultLayout', DefaultLayout);
  Vue.component('ThemedImage', ThemedImage);
  Vue.component('ImagePlaceholder', ImagePlaceholder);
  Vue.component('HeroTitle', HeroTitle);
  Vue.component('HeroMixed', HeroMixed);
  Vue.component('HeroMixedCms', HeroMixedCms);
  Vue.component('CardSimple', CardSimple);
  Vue.component('CardMinimal', CardMinimal);
  Vue.component('CardBlock', CardBlock);
  Vue.component('CardMedia', CardMedia);
  Vue.component('NewMedia', NewMedia);
  Vue.component('CardGridV3', CardGridV3);
  Vue.component('CardGridExchanges', CardGridExchanges);
  Vue.component('EcosystemExperiencingIssues', EcosystemExperiencingIssues);
  Vue.component('CardGridContributors', CardGridContributors);
  Vue.component('CardGridContributorFilter', CardGridContributorFilter);
  Vue.component('CardGridPartners', CardGridPartners);
  Vue.component('CardGridValidators', CardGridValidators);
  Vue.component('CardGridNfts', CardGridNfts);
  Vue.component('NewMediaFeatured', NewMediaFeatured);
  Vue.component('CommitteesCms', CommitteesCms);
  Vue.component('Btn', Btn);
  Vue.component('Colors', Colors);
  Vue.component('MediaChannels', MediaChannels);
  Vue.component('ContentNavigatorDocs', ContentNavigatorDocs);
  Vue.component('ContentNavigatorCms', ContentNavigatorCms);
  Vue.component('ScrollHorizontal', ScrollHorizontal);
  Vue.component('ScrollHorizontalV2', ScrollHorizontalV2);
  Vue.component('ContentColumns', ContentColumns);
  Vue.component('ContentSwitcher', ContentSwitcher);
  Vue.component('SecretAgentHero', SecretAgentHero);
  Vue.component('SecretAgentEmailFormBanner', SecretAgentEmailFormBanner);
  Vue.component('HeaderMegaMenuV2', HeaderMegaMenuV2);
  Vue.component('FooterMenu', FooterMenu);
  Vue.component('NewHomeHero', NewHomeHero);
  Vue.component('NewHomeContracts', NewHomeContracts);
  Vue.component('NewHomeCallAction', NewHomeCallAction);
  Vue.component('NewHomeMission', NewHomeMission);
  Vue.component('NewHomeAnnouncement', NewHomeAnnouncement);
  Vue.component('NewHomeMissionCtas', NewHomeMissionCtas);
  Vue.component('GrantsBuild', GrantsBuild);
  Vue.component('GetScrtHero', GetScrtHero);
  Vue.component('GetScrtBuy', GetScrtBuy);
  Vue.component('GetScrtBuyByGroups', GetScrtBuyByGroups);
  Vue.component('GetScrtQuestions', GetScrtQuestions);
  Vue.component('GetScrtLearnMore', GetScrtLearnMore);

  Vue.component('LogoCarousel', LogoCarousel);
  Vue.component('PartnersLogos', PartnersLogos);

  


  //Experimental
  Vue.component('VueMarkdown', VueMarkdown);

  // Blog
  Vue.component('EcosystemRoadmapYourProject', EcosystemRoadmapYourProject);
  Vue.component('EcosystemRoadmapWhatsBeenBuilt', EcosystemRoadmapWhatsBeenBuilt);
  Vue.component('EcosystemRoadmapPdf', EcosystemRoadmapPdf);
  Vue.component('SubmitProject', SubmitProject);

  //BlogV2
  Vue.component('NewBlogCard', NewBlogCard);
  Vue.component('NewBlogLatestPosts', NewBlogLatestPosts);

  // Dynamic
  Vue.component('TextColumnSingle', TextColumnSingle);
  Vue.component('TextColumnDouble', TextColumnDouble);
  Vue.component('TextImageColumnDouble', TextImageColumnDouble);
  Vue.component('ArticleHero', ArticleHero);
  Vue.component('ArticleImage', ArticleImage);
  Vue.component('ArticleVideo', ArticleVideo);
  Vue.component('Carousel', Carousel);
  Vue.component('CarouselGroup', CarouselGroup);
  Vue.component('OptionalCalloutBox', OptionalCalloutBox);
  Vue.component('Callout', Callout);
  Vue.component('CtaGrid', CtaGrid);
  Vue.component('CardSearch', CardSearch);

  //Page Specific
  Vue.component('DevelopersHero', DevelopersHero);
  Vue.component('DevelopersFeatures', DevelopersFeatures);
  Vue.component('DevelopersStartHere', DevelopersStartHere);
  Vue.component('DevelopersPathway', DevelopersPathway);
  Vue.component('DevelopersHelpNewDevs', DevelopersHelpNewDevs);
  Vue.component('DevelopersCardResources', DevelopersCardResources);
  Vue.component('DevelopersAdvanced', DevelopersAdvanced);
  Vue.component('DevelopersQuestions', DevelopersQuestions);
  Vue.component('DevelopersFunding', DevelopersFunding);
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
  Vue.component('GetScrtWallets', GetScrtWallets);
  Vue.component('NewMediaFeaturedHomeV2', NewMediaFeaturedHomeV2);
  Vue.component('GetScrtConvertSscrtV2', GetScrtConvertSscrtV2);
  Vue.component('AboutSecretNetwork', AboutSecretNetwork);
  Vue.component('AustinEventHero', AustinEventHero);
  Vue.component('AustinEventMeet', AustinEventMeet);
  Vue.component('AustinEventPartnership', AustinEventPartnership);
  Vue.component('AustinEventFooter', AustinEventFooter);
  Vue.component('HomeDcentralAfterpartyBanner', HomeDcentralAfterpartyBanner);
  Vue.component('GeneralCtas', GeneralCtas);
  Vue.component('LearnPortalHero', LearnPortalHero);
  Vue.component('LearnHeader', LearnHeader);
  Vue.component('LandingEventSneakPeek', LandingEventSneakPeek);

    Vue.component('LandingSneakPeekEvent', LandingSneakPeekEvent);

  //External Libraries
  Vue.component('InfiniteSlideBar', InfiniteSlideBar);
  Vue.component('typical', typical);
  Vue.component('i18n', i18n);
  Vue.component('Deploy', Deploy);
  Vue.component('DeployTemp', DeployTemp);
  Vue.component("v-select", vSelect);
  Vue.component("Countdown", Countdown);
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

      homePageRemoveCountdown: function() {
        setTimeout(() => {
          this.$refs.countdownChecker.$el.remove();
        }, 1000);
      }
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
