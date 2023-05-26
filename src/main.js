import openGraph from "./config/open-graph";

import "@/sass/style.scss";
import "@/sass/docs/globals.scss";

import Flare from "@lkmx/flare";
import Vuex from "vuex";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import VueMarkdown from "vue-markdown";
import typical from "vue-typical";
import VueSocialSharing from "vue-social-sharing";
import "vue-select/dist/vue-select.css";

import "@fontsource/hind";
import "@fontsource/hind/300.css";
import "@fontsource/hind/600.css";
import "@fontsource/hind/700.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

//global compoments
import HeroTitle from "@/components/content/HeroTitle.vue";
import HeroMixed from "@/components/content/HeroMixed.vue";
import HeroMixedCms from "@/components/content/HeroMixedCms.vue";
import CardSimple from "@/components/cards/CardSimple.vue";
import CommitteesCms from "@/components/cards/CommitteesCms.vue";
import Btn from "@/components/content/Btn.vue";
import Colors from "~/components/cards/Colors.vue";
import ContentNavigatorDocs from "@/components/content/ContentNavigatorDocs.vue";
import ContentNavigatorCms from "@/components/content/ContentNavigatorCms.vue";
import LogoCarousel from "@/components/content/LogoCarousel.vue";
import ResponsiveImage from "@/components/content/ResponsiveImage.vue";
import i18n from "@/components/content/i18n.vue";
import DeployTemp from "@/components/content/DeployTemp.vue";
import GeneralCtas from "@/components/content/GeneralCtas.vue";

// Page Specific
import HomePage from "@/components/page/Home/index.vue";
import Developers from "@/components/page/Developers/index.vue";
import DevelopersGrants from "@/components/page/Developers/Grants/index.vue";
import ServiceStatus from "@/components/page/ServiceStatus/index.vue";
import MediaFeatures from "@/components/page/Media/Features/index.vue";
import EcosystemContributors from "@/components/page/Ecosystem/Contributors/index.vue";
import EcosystemDapps from "@/components/page/Ecosystem/Dapps/index.vue";
import EcosystemFunding from "@/components/page/Ecosystem/Funding/index.vue";
import EcosystemExchanges from "@/components/page/Ecosystem/Exchanges/index.vue";
import EcosystemRoadmap from "@/components/page/Ecosystem/Roadmap/index.vue";
import EcosystemPartners from "@/components/page/Ecosystem/Partners/index.vue";
import EcosystemTools from "@/components/page/Ecosystem/Tools/index.vue";
import GetScrtPage from "@/components/page/GetScrt/index.vue";
import BecomeSecretAgent from "@/components/page/GetInvolved/BecomeSecretAgent/index.vue";
import InternationalCommunities from "@/components/page/GetInvolved/InternationalCommunities/index.vue";
import AboutSecretNetwork from "@/components/page/AboutSecretNetwork/index.vue";
import AustinEventHero from "@/components/page/AustinEvent/AustinEventHero.vue";
import AustinEventPartnership from "@/components/page/AustinEvent/AustinEventPartnership.vue";
import AustinEventFooter from "@/components/page/AustinEvent/AustinEventFooter.vue";
import Summit from "@/components/page/Summit/index.vue";
import SummitThankYou from "@/components/page/Summit/ThankYou/index.vue";
import SummitAgenda from "@/components/page/Summit/Agenda/index.vue";
import SubmitProject from "@/components/page/Ecosystem/SubmitProject/index.vue";

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

export default function (Vue, { router, head, appOptions }) {
  openGraph.forEach((item) => head.meta.push(item));

  // Set default layout as a global component
  Vue.component("DefaultLayout", DefaultLayout);
  Vue.component("HeroTitle", HeroTitle);
  Vue.component("HeroMixed", HeroMixed);
  Vue.component("HeroMixedCms", HeroMixedCms);
  Vue.component("CardSimple", CardSimple);
  Vue.component("MediaFeatures", MediaFeatures);
  Vue.component("EcosystemContributors", EcosystemContributors);
  Vue.component("EcosystemDapps", EcosystemDapps);
  Vue.component("EcosystemFunding", EcosystemFunding);
  Vue.component("EcosystemExchanges", EcosystemExchanges);
  Vue.component("EcosystemRoadmap", EcosystemRoadmap);
  Vue.component("EcosystemPartners", EcosystemPartners);
  Vue.component("EcosystemTools", EcosystemTools);
  Vue.component("BecomeSecretAgent", BecomeSecretAgent);
  Vue.component("InternationalCommunities", InternationalCommunities);
  Vue.component("CommitteesCms", CommitteesCms);
  Vue.component("Btn", Btn);
  Vue.component("Colors", Colors);
  Vue.component("ContentNavigatorDocs", ContentNavigatorDocs);
  Vue.component("ContentNavigatorCms", ContentNavigatorCms);
  Vue.component("LogoCarousel", LogoCarousel);
  Vue.component("ResponsiveImage", ResponsiveImage);
  Vue.component("VueMarkdown", VueMarkdown);

  //Page Specific
  Vue.component("HomePage", HomePage);
  Vue.component("SubmitProject", SubmitProject);
  Vue.component("Developers", Developers);
  Vue.component("DevelopersGrants", DevelopersGrants);
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
  Vue.component("Typical", typical);
  Vue.component("I18n", i18n);
  Vue.component("DeployTemp", DeployTemp);

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
