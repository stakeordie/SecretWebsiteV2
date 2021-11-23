<template>
  <header>
    <div class="mega-header">
      <div class="mega-header__logo-bar">
        <div class="mega-header__logo-bar__content__image">
          <img src="./assets/scrt-logo--white.svg" alt="secret network logo">
        </div>
        <div class="mega-header__logo-bar__content__searchbar">
          <div class="mega-header__logo-bar--searchbar">
            <img src="./assets/search-icon.svg" alt="">
            <span>Search</span>
          </div>
        </div>
      </div>
      <div class="mega-header__nav">
        <div class="mega-header__nav__content">
          <p>Learn About Secret</p>
          <img src="./assets/icon-chevron-down.svg" alt="arrow down icon">
        </div>
        <div class="mega-header__nav__content">
          <p>Explore the Ecosystem</p>
          <img src="./assets/icon-chevron-down.svg" alt="arrow down icon">
        </div>
        <div class="mega-header__nav__content">
          <p>Start Developing</p>
          <img src="./assets/icon-chevron-down.svg" alt="arrow down icon">
        </div>
        <div class="mega-header__nav__content">
          <p>Get Involved</p>
          <img src="./assets/icon-chevron-down.svg" alt="arrow down icon">
        </div>
        <div class="mega-header__nav__content">
          <p>News & Media</p>
          <img src="./assets/icon-chevron-down.svg" alt="arrow down icon">
        </div>
      </div>   
    </div>
    <div class="mega-header__nav__expanded">
        <div class="mega-header__nav__expanded__content">
          <ul>
            <li><a href="">About Secret Network</a></li>
            <li><a href="">About Secret (SCRT)</a></li>
            <li><a href="">Secret Tokens & Bridges</a></li>
            <li><a href="">Secret DeFi</a></li>
            <li><a href="">Secret NFTs</a></li>
            <li><a href="">FAQ</a></li>        
          </ul>
        </div> 
        <div class="mega-header__nav__expanded__content">
          <ul>
            <li><a href="">DApps</a></li>
            <li><a href="">Contributors</a></li>
            <li><a href="">Tools & Wallets</a></li>
            <li><a href="">Community Roadmap</a></li>      
          </ul>
        </div> 
        <div class="mega-header__nav__expanded__content">
          <ul>
            <li><a href="">Developer Resources</a></li>
            <li><a href="">Documentation</a></li>
            <li><a href="">Github</a></li>          
          </ul>
        </div>   
        <div class="mega-header__nav__expanded__content">
          <ul>
            <li><a href="">Become a Secret Agent</a></li>
            <li><a href="">International Communities</a></li>                     
          </ul>
        </div>  
        <div class="mega-header__nav__expanded__content">
          <ul>
            <li><a href="">Blog</a></li>
            <li><a href="">Media & Press</a></li>   
            <li><a href="">Podcast</a></li>                                
          </ul>
        </div>                      
    </div>   
    <div class="mega-header__social-media">
        <div class="mega-header__social-media__content">
          <p>Connect with Us:</p>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/message-circle.svg" alt="message image">
            <a href="" alt="forums">Forums</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/discord.svg" alt="discord image">
            <a href="" alt="discord">Discord</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/telegram.svg" alt="telegram image">
            <a href="" alt="telegram">Telegram</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/twitter.svg" alt="twitter image">
            <a href="" alt="twitter">Twitter</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/youtube.svg" alt="youtube image">
            <a href="" alt="youtube">Youtube</a>
          </div>
          <div class="mega-header__social-media__icon-content">
            <img src="./assets/icon-social-instagram.svg" alt="instagram image">
            <a href="" alt="instagram">Instagram</a>
          </div>          
        </div>
    </div>    
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../sass/_text.scss";
@import "../sass/functions/theme";
:root {
  --mega-header-padding-logo: 5px;
  --mega-header-border-searchbar: 4px;
  --mega-header-padding-searchbar: 10px;
  --mega-header-gap-searchbar: 10px;
  --mega-header-width-searchbar: 219px;
  --mega-header-gap-nav: 10px;
  --mega-header-background-nav-expanded: rgba(43, 52, 64, 1);
  --mega-header-color-nav-exanded: rgba(240, 242, 245, 1);
  --mega-header-color-nav-exanded-hover: rgba(178, 190, 204, 1);
  --mega-header-gap-social-media: 4px;
  --mega-header-color-social-medial: rgba(240, 242, 245, 1);
  --mega-header-color-social-medial-hover: rgba(240, 242, 245, 0.5);
  --mega-header-padding-tb-nav-expanded: 8px;
  --mega-header-padding-list-nav-expanded: 10px 24px;
  --mega-header-text-size-nav-expanded: 18px;
  --mega-header-line-height-nav-expanded: 28.8px;
  --mega-header-weight-nav-expanded: 500;
  --mega-header-height-list-nav-expanded: 29px;
  --mega-header-height-nav-expanded: 300px
}
  .mega-header {
    height: 100%;
    &__logo-bar {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-auto-flow: column;
      align-items: center;     
      padding: 0 var(--f-gutter-l); 
      &__content {
        &__image {
          padding: var(--mega-header-padding-logo) var(--f-gutter);
        }
        &__searchbar {
          display: grid;
          justify-content: end;
          padding-right: var(--f-gutter);
        }          
      }
      &--searchbar {
        display: grid;
        grid-auto-flow: column;
        gap: var(--mega-header-gap-searchbar);
        padding: var(--mega-header-padding-searchbar);
        border-radius: var(--mega-header-border-searchbar);
        background-color: var(--color-neutral-dark-mode-03);
        span {
          min-width: var(--mega-header-width-searchbar);
          margin-bottom: 0;
        }
      }
    }
    &__nav {
      display: grid;
      grid-auto-flow: column;
      padding: 0 var(--f-gutter);
      grid-template-columns: repeat(5, 1fr);
      &__content {
        display: grid;
        grid-auto-flow: column;
        gap: var(--mega-header-gap-nav);
        padding: var(--f-gutter) var(--f-gutter-l);
        align-items: center;
        justify-content: start;
        p {
          margin-bottom: 0;
          width: fit-content;
          color: var(--color-analog-primary-white);
          font-family: var(--f-default-headers-font);
          font-weight: 600;
        }
      }

      &__expanded {
        display: grid;
        grid-auto-flow: column;
        padding: var(--mega-header-padding-tb-nav-expanded) var(--f-gutter);
        grid-template-columns: repeat(5, 1fr);
        background-color: var(--mega-header-background-nav-expanded);
        height:var(--mega-header-height-nav-expanded);
        &__content {
          ul {
            padding: 0;
            margin: 0;
            li {
              padding: var(--mega-header-padding-list-nav-expanded);
              margin-bottom: 0;              
              a {
                color: var(--mega-header-color-nav-exanded);
                font-family: var(--f-default-text-font);
                line-height: var(--mega-header-line-height-nav-expanded);
                font-weight: 500;
                font-size: var(--mega-header-text-size-nav-expanded);
                height: var(--mega-header-height-list-nav-expanded);
                &:hover {
                  color: var(--mega-header-color-nav-exanded-hover);
                }
              }
            }
          }
        }
      }
    }
    &__social-media {
      display: grid;
      justify-content: end;
      background-color: var(--mega-header-background-nav-expanded);
      padding-right: var(--f-gutter);
      padding-bottom: var(--f-gutter);
      p, a {
        margin-bottom: 0;
        font-family: var(--f-default-headers-font);
        font-weight: var(--paragraph-font-weight-big);
        color: var(--mega-header-color-social-medial);
      }
      &__content {    
        display: grid;
        grid-auto-flow: column;
        width: fit-content;
        gap: var(--f-gutter);
      }
      &__icon-content {
        display: grid;
        grid-auto-flow: column;
        
        gap: var(--mega-header-gap-social-media);
        a {
          height: 100%;   
          display: grid;
          align-content: center;    ;
          &:hover {
            color: var(--mega-header-color-social-medial-hover);
          }          
        }
      }      
    }
  }
</style>