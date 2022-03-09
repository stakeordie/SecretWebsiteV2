<template>
  <transition name="slide-megaheader">
    <header class="mega-header" v-show="!scrollingDown">
      <!-- // first block -->
      <div class="mega-header__wrapper">
        <div class="mega-header__wrapper__content">
          <div class="logo-bar" :class="burger">
            <div class="logo-bar__content__image">
              <img
                src="../assets/icon-menu.svg"
                alt="close icon"
                class="menu"
                v-on:click.prevent="openMenuFromMobile"
              />
              <img
                src="../assets/icon-close.svg"
                alt="close icon"
                class="close"
                @click.prevent="openMenuFromMobile"
              />
              <g-link to="/">
                <img
                  src="../assets/new-secret-logo.svg"
                  alt="secret network logo"
                  class="logo"
                />
              </g-link>
            </div>

            <ul class="nav">
              <li
                class="nav__content"
                v-for="(nav, index) in megaMenuItems"
                :key="index"
                @click.prevent="toggleMegaMenu(index)"
              >
                <a href="/">{{ nav.title }}</a>
                <img
                  class="nav__content__chevron"
                  src="../assets/icon-chevron-down.svg"
                  alt="arrow down icon"
                />
              </li>
            </ul>
            <div class="logo-bar__content__searchbar">
              <div
                class="logo-bar--searchbar search-trigger search"
                v-on:click="searchTrigger"
              >
                <img src="../assets/search-icon.svg" alt="" />
                <p>Search</p>
              </div>
            </div>
            <div class="logo-bar__content__btnSrct">
              <button>
                <img src="../assets/logo-scrt.svg" alt="" />
                <p>GET SCRT</p>
              </button>
            </div>
          </div>
          <!-- nav items HEADINGS DESKTOP -->
        </div>
      </div>

      <!-- expanded -->
      <div class="mega-header__wrapper__expanded" v-if="megaMenuIsOpen">
        <div class="mega-header__wrapper__expanded__content">
          <div class="nav__expanded">
            <ul
              class="nav__expanded__content"
              v-for="(nav, index) in megaMenuItems"
              :key="index"
            >
              <div class="nav__expanded__content__titles">
                <div
                  class="nav__expanded__content__titles__content"
                  @click.prevent="openSubMenu(index)"
                >
                  <div class="nav__expanded__content__titles__content__name">
                    <img src="../assets/badge.svg" alt="" />
                    <h6>{{ nav.title }}</h6>
                  </div>
                  <img
                    src="../assets/icon-chevron-down.svg"
                    alt="arrow down icon"
                  />
                </div>
              </div>

              <li
                class="nav__expanded__content__item"
                :class="{
                  hidden__submenu: subMenuIndex != index,
                }"
              >
                <div                  
                  v-for="(sec, indexSec) in nav.sections" :key="indexSec"
                >
                  <span
                    :class="{ emptytitle: sec.title === '-' }"
                    class="nav__expanded__content__section"
                    >{{ sec.title }}
                    <hr />
                  </span>
                  <div
                    class="nav__expanded__content__container"
                    v-for="(secItem, indexItem) in sec.nav_items"
                    :key="indexItem"
                  >
                    <div class="nav__expanded__content__item__desc">
                      <img :src="secItem.nav_item.icon" alt="" />
                      <div>
                        <div class="nav__expanded__content__item__desc__title">
                          <span v-on:click="linkCloseMenu">{{
                            secItem.nav_item.text
                          }}</span>
                        </div>
                        <div class="nav__expanded__content__item__desc__descr">
                          <span v-on:click="linkCloseMenu">{{
                            secItem.nav_item.description
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="nav__social-media">
            <div class="nav__social-media__content">
              <p class="title">Connect with Us:</p>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://forum.scrt.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="forums"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/message-circle.svg" alt="message image" />
                  <span>Forums</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://discord.com/invite/SJK32GY"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="discord"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/discord.svg" alt="discord image" />
                  <span>Discord</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://t.me/SCRTcommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="telegram"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/telegram.svg" alt="telegram image" />
                  <span>Telegram</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://twitter.com/SecretNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="twitter"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/twitter.svg" alt="twitter image" />
                  <span>Twitter</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="youtube"
                  v-on:click="linkCloseMenu"
                >
                  <img src="../assets/youtube.svg" alt="youtube image" />
                  <span>Youtube</span>
                </a>
              </div>
              <div class="nav__social-media__icon-content">
                <a
                  href="https://www.instagram.com/scrtnetwork/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="instagram"
                  v-on:click="linkCloseMenu"
                >
                  <img
                    src="../assets/icon-social-instagram.svg"
                    alt="instagram image"
                  />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-on:click="linkCloseMenu"
        class="mega-header__overlay"
        v-if="megaMenuIsOpen"
      ></div>
    </header>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      megaMenuIsOpen: false,
      alertIsOpen: true,
      scrollingDown: false,
      columns: [],
      miniMenuIsOpen: false,
      subMenuIndex: -1,
      
    };
  },
  methods: {
    scrollPosition(e) {
      let lastScrollTop = 0;
      window.addEventListener(
        "scroll",
        () => {
          let st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop && st > 88) {
            this.scrollingDown = true;
          } else {
            this.scrollingDown = false;
          }
          lastScrollTop = st <= 0 ? 0 : st;
        },
        false
      );
    },
    resizeWindow(){  
      const navTitles = 
        document.getElementsByClassName("nav__expanded__content__titles");
      window.addEventListener(
        "resize",
        () => {
          if(window.screen.width >= 992 && this.subMenuIndex == -1){
            
          }   
          
        }
      );   
      
    },
    megaMenuColumns() {
      const body = document.querySelector("body");
      body.setAttribute(
        "style",
        `--scrt-megamenu-columns:${this.columns.length}`
      );
    },
    toggleMegaMenu(index) {
      this.megaMenuIsOpen = false;
      const body = document.querySelector("body");
      if (index != this.subMenuIndex) {
        this.subMenuIndex = index;
        this.changeNavElementsToActive(true, index);
        this.megaMenuIsOpen = true;
      } else {
        this.subMenuIndex = -1;
        this.changeNavElementsToActive(false, index);
        this.megaMenuIsOpen = false;
      }

      this.megaMenuIsOpen
        ? body.classList.add("freezed")
        : body.classList.remove("freezed");
    },
    changeNavElementsToActive(active, index) {
      const navEl = document.querySelectorAll(".nav__content");
      const arrow = document.querySelectorAll(".nav__content__chevron");
      if (active) {
        navEl.forEach((el) => {
          el.classList.remove("activeNav");
        });
        arrow.forEach((el) => {
          el.classList.remove("arrow-up");
        });
        navEl[index].classList.add("activeNav");
        arrow[index].classList.add("arrow-up");
      } else {
        navEl[index].classList.remove("activeNav");
        arrow[index].classList.remove("arrow-up");
      }
    },
    openSubMenu(index) {
      if (index == this.subMenuIndex) {
        this.subMenuIndex = -1;        
        this.changeNavElementsToActive(false, index);
        return;
      }
      this.subMenuIndex = index;
      this.changeNavElementsToActive(true, index);
    },
    openMenuFromMobile() {   
      this.subMenuIndex = -1;
      if (this.megaMenuIsOpen) {
        this.megaMenuIsOpen = !this.megaMenuIsOpen;        
      } else {
        this.megaMenuIsOpen = !this.megaMenuIsOpen;
      }
      
    },
    linkCloseMenu() {
      const body = document.querySelector("body");
      const navEl = document.querySelectorAll(".nav__content");
      const arrow = document.querySelectorAll(".nav__content__chevron");
      this.megaMenuIsOpen = false;
      this.subMenuIndex = -1;
      body.classList.remove("freezed");
      navEl.forEach((el) => {
        el.classList.remove("activeNav");
      });
      arrow.forEach((el) => {
        el.classList.remove("arrow-up");
      });
    },
  },
  computed: {
    chevron() {
      return this.megaMenuIsOpen ? "arrow-up" : "arrow-down";
    },
    burger() {
      return this.megaMenuIsOpen ? "is-opened" : "is-closed";
    },
    megaMenuItems() {
      // const content = this.$static.navHeader.edges.map(
      //   (it) => it.node.nav_groups
      // );
      // this.columns = content[0];
      // console.log(this.columns);
      const testArray = [
        {
          id: 0,
          title: "Learn",
          sections: [
            {
              title: "Overview",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/badge.svg",
                    text: "About Secret Network",
                    description:
                      "Discover Secret’s inner workings and what makes it different from other blockchains.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Guides",
                    description:
                      "Find out how to do all things Secret—from staking to bridging over assets and more.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "FAQ",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Use Cases",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Secret Tokens",
                    description:
                      "Find out how Secret Tokens let you make any token privacy-preserving.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "DeFi",
                    description:
                      "Learn how Secret powers financial tools that are safe yet decentralized.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "DAOs",
                    description:
                      "Learn how Secret could make decentralized governance safer and more democratic.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "NFTs",
                    description:
                      "Discover how Secret NFTs enable artists to create work not possible elsewhere.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Gaming",
                    description:
                      "Explore the possibilities Secret NFTs open up for game designers. ",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Secret Token (SCRT)",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Get SCRT",
                    description:
                      "Learn how to buy SCRT using CEXes, DEXes, bridging then swapping, or direct pay.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Use SCRT",
                    description:
                      "Learn how to stake your tokens, participate in governance, and start using Secret apps.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Tokenomics",
                    description:
                      "Find out how tokens are distributed across core contributors on Secret Network.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          id: 0,
          title: "Build",
          sections: [
            {
              title: "Start Building",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Developer Resources",
                    description:
                      "Find the tools and guides you need to start building on Secret—from creating smart contracts to building Secret Apps.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Documentation",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Tutorials",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Github",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Funding",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Ecosystem Fund",
                    description:
                      "Scale your project with 225M+ in funding and strategic support provided by Secret’s partners.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Grants",
                    description:
                      "Kickstart your project and rapidly gain traction with one of our grants.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Support",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Find a Team",
                    description:
                      "Teamwork makes the dream work. Use the #findateam channel to connect with others and make things happen.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          id: 0,
          title: "Ecosystem",
          sections: [
            {
              title: "Ecosystem",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "DApps",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Tools",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Contributors",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Partners",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Validators",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Roadmap",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Block Explorers",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Secret Nodes",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Mintscan",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Network Statistics",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Secret Analystics",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Bridges",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "IBC Bridge",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Etherum Bridge",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Binance Smart Chain Bridge",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Moreno Bridge",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          id: 0,
          title: "Get Involved",
          sections: [
            {
              title: "Join the Community",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Become a Secret Agent",
                    description:
                      "Collaborate with others to turn a more empowering web into reality.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "International Communities",
                    description:
                      "Join your local Secret community to champion privacy around the globe. ",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Events",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "-",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Discord",
                    description:
                      "Meet fellow Agents, join committee meetings, and get support.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Telegram",
                    description:
                      "Join the conversation and get help from Secret OGs.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Forums",
                    description:
                      "Join discussions around governance and the wider Secret ecosystem.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Follow us",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Twitter",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Youtube",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Instagram",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Reddit",
                    description: "",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          id: 0,
          title: "Resources",
          sections: [
            {
              title: "News & Media",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Blog",
                    description:
                      "Read up on the latest updates, projects, and apps, and learn about privacy.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Media",
                    description:
                      "View Secret’s latest mentions in the news including articles, interviews, and podcasts.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Guides",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Developer Tutorials",
                    description:
                      "Get your Secret Contract and App up in no-time with community-made tutorials.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Guides",
                    description:
                      "Find out how to do all things Secret—from staking to bridging over assets and more.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Brand Guidelines",
                    description:
                      "View the guidelines that underpin the Secret brand look & sound.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
            {
              title: "Funding Opportunities",
              nav_items: [
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Ecosystem Fund",
                    description:
                      "Scale your project with 200M+ in funding and strategic support provided by Secret’s partners.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
                {
                  nav_item: {
                    icon: "../assets/img/icon-social-instagram.svg",
                    text: "Grants",
                    description:
                      "Kickstart your project and rapidly gain traction with one of our grants.",
                    page: {
                      name: "",
                      route: "",
                      title: "",
                    },
                  },
                },
              ],
            },
          ],
        },
      ];

      return testArray;
    },
  },
  mounted() { 
    this.resizeWindow();   
    this.megaMenuColumns();
    if (process.isClient) {
      this.scrollPosition();
    }
  },
  beforeDestroy() {
    // this.scrollPosition();
  },
};
</script>

<static-query>
  query {
  navHeader: allStrapiNavHeader {
    edges {
      node {
        nav_groups {
          title
          id
          nav_items {
            nav_item {
              text
              id
              page {
                name
                title
                route
                locale
              }
              locale
              external_link
            }
            sort_name
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "../sass/_text.scss";
@import "../sass/functions/theme";
@import "@lkmx/flare/src/functions/_respond-to.scss";
:root {
  --mega-header-space: 16px;
  --mega-header-space-l: 24px;
  --mega-headerbackground: var(--color-neutral-dark-mode-01);
  --mega-header-padding-logo: 5px;
  --mega-header-border-searchbar: 4px;
  --mega-header-padding-searchbar: 7px 8px;
  --mega-header-line-height-searchbar: 25.62px;
  --mega-header-gap-searchbar: 10px;
  --mega-header-width-searchbar: 219px;
  --mega-header-gap-nav: 10px;
  --mega-header-background-nav-expanded: rgba(43, 52, 64, 1);
  --mega-header-color-nav-exanded: rgba(240, 242, 245, 1);
  --mega-header-color-nav-exanded-hover: rgba(178, 190, 204, 1);
  --mega-header-gap-social-media: 4px;
  --mega-header-color-social-medial: rgba(240, 242, 245, 1);
  --mega-header-color-social-media-icon: var(--color-analog-primary-white);
  --mega-header-color-social-medial-hover: rgba(240, 242, 245, 0.5);
  --mega-header-padding-tb-nav-expanded: 8px;
  --mega-header-padding-list-nav-expanded: 10px 24px;
  --mega-header-text-size-nav-expanded: 18px;
  --mega-header-line-height-nav-expanded: 28.8px;
  --mega-header-weight-nav-expanded: 500;
  --mega-header-height-list-nav-expanded: 27px;
  --mega-header-height-nav-expanded: 300px;
  --mega-header-grid-image-content: 24px 1fr;
  --mega-header-height-expaded-item: 47px;
  --mega-header-height-expaded-item-mobile: 40px;
  --mega-header-padding-expaded-item-mobile: 8px 26px;
  --mega-header-line-height: var(--f-h6-line-height);
  --paragraph-font-weight-big: 300;
}
.mega-header {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  /* display: none; */
  @include respond-to(">=xxl") {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__wrapper {
    height: 100%;
    width: 100%;
    background-color: var(--mega-headerbackground);
    /* width: 100vw; */
    justify-content: center;
    display: flex;
    @include respond-to("<=m") {
      width: 100%;
    }
    &__content {
      width: 100%;
      display: grid;
      @include respond-to(">=xl") {
        max-width: 1440px;
      }
      @media screen and (min-width: 2560px) {
        max-width: 1840px;
      }
      .logo-bar {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-auto-flow: column;
        align-items: center;

        @include respond-to("<=l") {
          grid-template-columns: 1fr 24px;
          padding: 0 var(--f-gutter);
        }
        &.is-closed {
          .close,
          .search {
            display: none;
          }
          .search {
            @include respond-to(">m") {
              display: grid;
            }
          }
        }
        &.is-opened {
          .menu {
            display: none;
          }
          .close {
            display: unset;
            @include respond-to(">m") {
              display: none;
            }
          }
          .search {
            @include respond-to(">m") {
              display: grid;
            }
          }
        }
        &__content {
          &__image {
            padding: var(--mega-header-padding-logo) var(--f-gutter);
            @include respond-to("<=l") {
              display: grid;
              grid-template-columns: var(--mega-header-grid-image-content);
              padding-left: 0;
              padding-right: 0;
              justify-content: space-around;
              align-content: center;
            }
            a {
              .logo {
                width: 129px;
                height: 58px;
                justify-self: center;
              }
              @include respond-to("<=l") {
                display: grid;
                justify-content: center;
              }
              &:visited {
                color: inherit;
                background-color: inherit;
              }
              &:active {
                color: inherit;
                background-color: inherit;
              }
            }
            .close,
            .search,
            .menu {
              width: var(--mega-header-space-l);
              height: var(--mega-header-space-l);
              align-self: center;
              @include respond-to(">m") {
                display: none;
              }
            }
          }
          &__searchbar {
            display: grid;
            padding-right: var(--f-gutter);
            @include respond-to("<=l") {
              justify-content: start;
              width: 100%;
              display: none;
              padding: 0;
            }
          }
          &__btnSrct {
            display: grid;
            @include respond-to("<=l") {
              display: none;
            }
            button {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0px 16px;
              background-color: var(--color-analog-primary-white);
              border-radius: 10px;
              gap: 8.8px;
              padding: 10px 16px;

              img {
                width: 19.2px;
                height: 19.2px;
              }
              p {
                margin: 0;
                color: var(--color-analog-primary-black);
                font-family: var(--f-default-headers-font);
                font-size: 16px;
                font-weight: bold;
                white-space: nowrap;
              }
            }
          }
        }
        &--searchbar {
          display: grid;
          align-items: center;
          grid-auto-flow: column;
          gap: var(--mega-header-gap-searchbar);
          padding: var(--mega-header-padding-searchbar);
          border-radius: var(--mega-header-border-searchbar);
          background-color: var(--color-neutral-dark-mode-03);
          p {
            min-width: var(--mega-header-width-searchbar);
            margin-bottom: 0;
            /* line-height: var(--mega-header-line-height-searchbar); */
            /* height: var(--mega-header-space); */
            @include respond-to("<=l") {
              width: 100%;
              display: none;
            }
          }
          @include respond-to("<=l") {
            background-color: var(--mega-headerbackground);
            padding: 0;
          }
          img {
            @include respond-to("<=l") {
              width: 24px;
              height: auto;
            }
          }
        }
      }
      .nav {
        display: grid;
        grid-auto-flow: column;
        padding: 0 var(--f-gutter);
        grid-template-columns: repeat(var(--scrt-megamenu-columns), 1fr);
        margin-bottom: 0;
        @include respond-to("<=l") {
          grid-auto-flow: row;
          grid-template-columns: 1fr;
          padding: 0;
          display: none;
        }
        &__content {
          display: grid;
          grid-auto-flow: column;
          gap: var(--mega-header-gap-nav);
          padding: 22px 20px;
          align-items: center;
          justify-content: center;
          transition: 0.2s ease;
          margin-bottom: 0;
          
          &.activeNav {
            background: var(--mega-header-background-nav-expanded);
            border-radius: 10px 10px 0px 0px;
          }
          @include respond-to("<=m") {
            padding: var(--f-gutter);
          }
          a {
            margin-bottom: 0;
            width: fit-content;
            color: var(--color-analog-primary-white);
            font-family: var(--f-default-headers-font);
            font-weight: 600;
          }
          &__chevron {
            transition: 0.2s ease;
            transform: rotate(0);
            &.arrow-up {
              transform: rotate(180deg);
            }
          }
          &:hover {
            cursor: pointer;
            a {
              color: var(--mega-header-color-nav-exanded-hover);
            }
          }
        }
      }
    }
    &__expanded {
      height: 100%;
      /* width: 100vw; */
      width: 100%;
      justify-content: center;
      display: flex;
      background-color: var(--mega-header-background-nav-expanded);
      @include respond-to("<=l") {
        position: absolute;
        top: 67px;
        left: 0;
        width: 100%;
        scrollbar-width: none;
        overflow-y: scroll;
        overflow: auto;
        scroll-behavior: smooth;
        // height: calc(100vh - (var(--alert-height-mobile) + 68px));
        height: calc(100vh - (67px + var(--ab-height)));
        padding-bottom: 0;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      &__content {
        width: 100%;
        display: grid;
        background-color: var(--mega-header-background-nav-expanded);
        padding-bottom: var(--f-gutter);
        @include respond-to(">=xl") {
          max-width: 1440px;
        }
        @include respond-to("<=l") {          
          padding-bottom: 0;
        }
        @media screen and (min-width: 2560px) {
          max-width: 1840px;
        }
      }
      .nav {
        &__expanded {
          display: grid;
          grid-auto-flow: row;          
          grid-template-columns: repeat(var(--scrt-megamenu-columns), 1fr);
          background-color: var(--mega-header-background-nav-expanded);          
          /* min-height: var(--mega-header-height-nav-expanded); */
          @include respond-to("<=l") {
            display: flex;
            flex-direction: column;
            padding: 0;
            padding-bottom: 160px;
          }
          &__content {
            padding: 0;
            margin: 0;
            display: grid;
            height: fit-content;
            gap: 20px;
            padding-top: 11px;
            @include respond-to("<=l") {
              padding-top: 0px;
            }
            &__titles {
              background: black;
              @include respond-to(">l") {
                display: none;
              }
              &__content {
                display: flex;
                padding: 28px;
                justify-content: space-between;
                &__name {
                  display: flex;
                  gap: 12.36px;
                  h6 {
                    margin: 0;
                  }
                }
              }
            }
            &__list {
              display: none;
            }
            &__title {
              padding: var(--f-gutter);
              font-weight: 600;
              margin-bottom: 0;
              @include respond-to(">m") {
                display: none;
              }
            }
            &__section {
              font-size: 18px;
              font-family: var(--f-default-headers-font);
              font-weight: 500;
              color: #b2bfcd;
              hr {
                display: block;
                width: 100%;
                height: 3px;
                background: #303c4a;
                margin: 4px 0px;
              }
              &.emptytitle {
                color: var(--mega-header-background-nav-expanded);
              }
            }
            &__container{
              &:hover{
                  border-radius: 10px;
                  background-color: #303C4A;
                }
            }

            &__item {
              display: grid;
              grid-auto-flow: column;
              gap: 37px;
              /* padding: var(--mega-header-padding-list-nav-expanded); */
              margin-bottom: 0;
              /* height: var(--mega-header-height-expaded-item); */
              padding-left: 24px;
              @include respond-to("<=m") {
                display: flex;
                flex-direction: column;
                padding: var(--mega-header-padding-expaded-item-mobile);
                height: fit-content;
              }
              &__link {
                color: var(--mega-header-color-nav-exanded) !important;
                line-height: var(--mega-header-line-height-nav-expanded);
                font-weight: 400;
                font-size: var(--mega-header-text-size-nav-expanded);
                /* height: var(--mega-header-height-list-nav-expanded); */
                &:hover {
                  color: var(--mega-header-color-nav-exanded-hover) !important;
                  height: var(--mega-header-space-l);
                }
                @include respond-to("<=m") {
                  line-height: var(--mega-header-line-height);
                }
              }              
              &__desc {
                display: flex;
                align-items: flex-start;
                gap: 11.03px;
                padding: 20px;
                img {
                  width: 24px;
                  height: 24px;
                }
                &__title {
                  font-weight: 500;
                  font-size: 18px;
                  font-family: var(--f-default-headers-font);
                  color: #fff;
                  line-height: 24px;
                }
                &__descr {
                  font-family: var(--f-default-headers-font);
                  font-weight: normal;
                  font-size: 16px;
                  color: #b2bfcd;
                }
                
              }
              &.hidden__submenu {
                display: none;
              }
            }
          }
        }
        &__social-media {
          display: grid;
          justify-content: end;
          background-color: var(--mega-header-background-nav-expanded);
          padding: 0 16px;
          padding-top: 11px;
          @include respond-to("<=l") {
            justify-content: space-around;
            padding: var(--f-gutter);
            background-color: var(--mega-headerbackground);
            width: 100vw;
            bottom: 0;
            position: fixed;
          }
          @include respond-to(">l") {
            display: none;
          }
          .title {
            color: var(--mega-header-color-social-medial-hover);
            @include respond-to("<=l") {
              display: none;
            }
          }
          p,
          a {
            margin-bottom: 0;
            font-family: var(--f-default-headers-font);
            font-weight: var(--paragraph-font-weight-big);
            img {
              color: var(--mega-header-color-social-media-icon);
            }
            span {
              color: var(--mega-header-color-social-medial);
            }
          }
          &__content {
            display: grid;
            grid-auto-flow: column;
            gap: var(--f-gutter);
            /* padding-right: var(--f-gutter); */
            @include respond-to("<=l") {
              padding-right: 0;
              justify-content: space-around;
              width: 100vw;
            }
          }
          &__icon-content {
            a {
              display: grid;
              grid-auto-flow: column;
              gap: var(--mega-header-gap-social-media);
              height: 24px;
              display: grid;
              align-content: center;
              line-height: var(--mega-header-line-height);
              &:hover {
                color: var(--mega-header-color-social-medial-hover);
              }
              span {
                height: 24px;
                @include respond-to("<=l") {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
  &__overlay {
    // background: deepskyblue;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    inset: 0px;
    transition-property: opacity;
    backdrop-filter: blur(0.25em);
    animation: 75ms ease-in;
  }
}

.slide-megaheader-enter-active,
.slide-megaheader-leave-active {
  // opacity: 1;
  transform: translateY(0px);
  // transition: opacity 0.5s;
  transition: 0.5s ease;
}
.slide-megaheader-enter,
.slide-megaheader-leave-to {
  transform: translateY(-110px);
  transition: 0.5s ease;
  // opacity: 0;
}
</style>
