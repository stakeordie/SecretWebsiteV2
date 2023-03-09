import openGraph from "./config/open-graph";

import "./sass/style.scss";
import "./sass/docs/globals.scss";

import Flare from "@lkmx/flare";
import Vuex from "vuex";

import DefaultLayout from "~/layouts/DefaultLayout.vue";
import VueMarkdown from "vue-markdown";
import InfiniteSlideBar from "vue-infinite-slide-bar";
import typical from "vue-typical";
import VueSocialSharing from "vue-social-sharing";
import VueAnime from "vue-animejs";
import vSelect from "vue-select";
import Countdown from "@whitewizard/countdown";
import "vue-select/dist/vue-select.css";

import "@fontsource/hind";
import "@fontsource/hind/300.css";
import "@fontsource/hind/600.css";
import "@fontsource/hind/700.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

import AnnouncementVer2 from "@/components/content/AnnouncementVer2.vue";
import ThemedImage from "@/components/content/ThemedImage.vue";
import HeroTitle from "@/components/content/HeroTitle.vue";
import HeroMixed from "@/components/content/HeroMixed.vue";
import HeroMixedCms from "@/components/content/HeroMixedCms.vue";
import CardSimple from "~/components/cards/CardSimple.vue";
import CardMinimal from "~/components/cards/CardMinimal.vue";
import CardBlock from "~/components/cards/CardBlock.vue";
import CardMedia from "~/components/cards/CardMedia.vue";
import NewMedia from "~/components/cards/NewMedia.vue";
import CardGridV3 from "@/components/cards/CardGridV3.vue";
import CardGridExchanges from "@/components/cards/CardGridExchanges.vue";
import CardGridContributors from "@/components/cards/CardGridContributors.vue";
import CardGridPartners from "@/components/cards/CardGridPartners.vue";
import CardGridValidators from "@/components/cards/CardGridValidators.vue";
import CardGridNfts from "@/components/cards/CardGridNfts.vue";
import NewMediaFeatured from "~/components/cards/NewMediaFeatured.vue";
import CommitteesCms from "~/components/cards/CommitteesCms.vue";
import Btn from "@/components/content/Btn.vue";
import Colors from "~/components/cards/Colors.vue";
import ContentNavigatorDocs from "@/components/content/ContentNavigatorDocs.vue";
import ContentNavigatorCms from "@/components/content/ContentNavigatorCms.vue";
import ScrollHorizontal from "@/components/content/ScrollHorizontal.vue";
import ContentColumns from "@/components/content/ContentColumns.vue";
import ContentSwitcher from "@/components/content/ContentSwitcher.vue";
import SecretAgentHero from "@/components/content/SecretAgentHero.vue";
import SecretAgentEmailFormBanner from "@/components/content/SecretAgentEmailFormBanner.vue";
import LogoCarousel from "@/components/content/LogoCarousel.vue";
import ResponsiveImage from "@/components/content/ResponsiveImage";

//BlogV2
import NewBlogCard from "~/components/blog/NewBlogCard";
import NewBlogLatestPosts from "~/components/blog/NewBlogLatestPosts";

// Page Specific
import HomePage from "@/components/page/Home/index";
import i18n from "@/components/content/i18n";
import DeployTemp from "@/components/content/DeployTemp";
import Developers from "@/components/page/Developers/index";
import DevelopersGrants from "@/components/page/Developers/Grants/index";
import DevelopersCoolStuff from "@/components/page/Developers/DevelopersCoolStuff";
import ServiceStatus from "@/components/page/ServiceStatus/index";
import EcosystemFunding from "@/components/page/Ecosystem/Funding/index";
import EcosystemExchanges from "@/components/page/Ecosystem/Exchanges/index";
import EcosystemRoadmap from "@/components/page/Ecosystem/Roadmap/index";
import GetScrtPage from "@/components/page/GetScrt/index";
import AboutSecretNetwork from "@/components/page/AboutSecretNetwork/index";
import AustinEventHero from "@/components/page/AustinEvent/AustinEventHero";
import AustinEventPartnership from "@/components/page/AustinEvent/AustinEventPartnership";
import AustinEventFooter from "@/components/page/AustinEvent/AustinEventFooter";
import GeneralCtas from "@/components/content/GeneralCtas";
import Summit from "@/components/page/Summit/index";
import SummitThankYou from "@/components/page/SummitThankYou/index";
import SummitAgenda from "@/components/page/SummitAgenda/index";
import SubmitProject from "@/components/page/SubmitProject/index";

require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

function setDefaultTheme() {
  const theme = getComputedStyle(document.documentElement).getPropertyValue(
    "--theme"
  );
  if (!theme) return;
  const [body] = document.getElementsByTagName("body");
  if (!body) return;
  body.setAttribute("theme", theme.trim());
}

export default function (Vue, { router, head, isClient, appOptions }) {
  openGraph.forEach((item) => head.meta.push(item));

  // Set default layout as a global component
  Vue.component("AnnouncementVer2", AnnouncementVer2);

  Vue.component("DefaultLayout", DefaultLayout);
  Vue.component("ThemedImage", ThemedImage);
  Vue.component("HeroTitle", HeroTitle);
  Vue.component("HeroMixed", HeroMixed);
  Vue.component("HeroMixedCms", HeroMixedCms);
  Vue.component("CardSimple", CardSimple);
  Vue.component("CardMinimal", CardMinimal);
  Vue.component("CardBlock", CardBlock);
  Vue.component("CardMedia", CardMedia);
  Vue.component("NewMedia", NewMedia);
  Vue.component("CardGridV3", CardGridV3);
  Vue.component("CardGridExchanges", CardGridExchanges);
  Vue.component("EcosystemFunding", EcosystemFunding);
  Vue.component("EcosystemExchanges", EcosystemExchanges);
  Vue.component("EcosystemRoadmap", EcosystemRoadmap);
  Vue.component("CardGridContributors", CardGridContributors);
  Vue.component("CardGridPartners", CardGridPartners);
  Vue.component("CardGridValidators", CardGridValidators);
  Vue.component("CardGridNfts", CardGridNfts);
  Vue.component("NewMediaFeatured", NewMediaFeatured);
  Vue.component("CommitteesCms", CommitteesCms);
  Vue.component("Btn", Btn);
  Vue.component("Colors", Colors);
  Vue.component("ContentNavigatorDocs", ContentNavigatorDocs);
  Vue.component("ContentNavigatorCms", ContentNavigatorCms);
  Vue.component("ScrollHorizontal", ScrollHorizontal);
  Vue.component("ContentColumns", ContentColumns);
  Vue.component("ContentSwitcher", ContentSwitcher);
  Vue.component("SecretAgentHero", SecretAgentHero);
  Vue.component("SecretAgentEmailFormBanner", SecretAgentEmailFormBanner);
  Vue.component("LogoCarousel", LogoCarousel);
  Vue.component("ResponsiveImage", ResponsiveImage);

  //Experimental
  Vue.component("VueMarkdown", VueMarkdown);

  // Blog
  Vue.component("SubmitProject", SubmitProject);

  //BlogV2
  Vue.component("NewBlogCard", NewBlogCard);
  Vue.component("NewBlogLatestPosts", NewBlogLatestPosts);

  //Page Specific
  Vue.component("HomePage", HomePage);
  Vue.component("Developers", Developers);
  Vue.component("DevelopersGrants", DevelopersGrants);
  Vue.component("DevelopersCoolStuff", DevelopersCoolStuff);
  Vue.component("ServiceStatus", ServiceStatus);
  Vue.component("GetScrtPage", GetScrtPage);
  Vue.component("AboutSecretNetwork", AboutSecretNetwork);
  Vue.component("AustinEventHero", AustinEventHero);
  Vue.component("AustinEventPartnership", AustinEventPartnership);
  Vue.component("AustinEventFooter", AustinEventFooter);
  Vue.component("GeneralCtas", GeneralCtas);
  Vue.component("SummitThankYou", SummitThankYou);
  Vue.component("SummitAgenda", SummitAgenda);
  Vue.component("Summit", Summit);

  //External Libraries
  Vue.component("InfiniteSlideBar", InfiniteSlideBar);
  Vue.component("typical", typical);
  Vue.component("i18n", i18n);
  Vue.component("DeployTemp", DeployTemp);
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
        document.querySelector(".search-trigger").click();
      },

      homePageRemoveCountdown: function () {
        setTimeout(() => {
          this.$refs.countdownChecker.$el.remove();
        }, 1000);
      },
    },
  });

  router.beforeEach((from, to, next) => {
    if (process.isClient) {
      const el = document.querySelector("button[aria-label=Close]");
      if (el) {
        const clickEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        el.dispatchEvent(clickEvent);
      }
    }
    next();
  });

  // State
  Vue.use(Vuex);
  appOptions.store = new Vuex.Store({
    state: {
      sidebarOpen: false,
      summitStarted: false,
    },
    mutations: {
      toggleSidebar(state) {
        state.sidebarOpen = !state.sidebarOpen;
      },
      closeSidebar(state) {
        state.sidebarOpen = false;
      },
      openSidebar(state) {
        state.sidebarOpen = true;
      },
      startSummit(state) {
        state.summitStarted = true;
      },
    },
  });

  const $tp = (value) => value;
  Vue.prototype.$tp = !Vue.prototype.$tp ? $tp : Vue.prototype.$tp;
}
