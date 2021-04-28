<template>
  <default-layout>
    <!-- Title -->
    <hero-title>
      <h2>404 Page not found</h2>
    </hero-title>









    <!-- intro -->
    <column mode="slim" class="text-center spacer-s">

      <block>

        <h4>
          Oops! The page you're looking for doesn't exist. Head over to our <a href="/">Homepage</a> or choose one of
          the
          options below.
        </h4>

      </block>

    </column>








    <!-- block header -->

    <column class="text-center">

      <block>

        <h3>Try one of these pages</h3>

      </block>

    </column>










    <!-- try one of this pages -->
    <column class="spacer-s" number="3" number-m="2" number-s="1">

      <block>

        <card-minimal class="accent-orange">

          <h4>About the Network</h4>
          <p>Find out why Secret Network is a first-of-its-kind, open-source blockchain that provides data privacy by
            default.</p>
          <btn class="text-center" url="/about/about-secret-network">Go to page</btn>

        </card-minimal>

      </block>

      <block>

        <card-minimal class="accent-green">

          <h4>Ecosystem</h4>
          <p>Lean about the applications, validators, contributors and elements that make the Network come together.</p>
          <btn class="text-center" url="/ecosystem/overview">Go to page</btn>

        </card-minimal>

      </block>

      <block>

        <card-minimal class="accent-blue">

          <h4>Developers</h4>
          <p>Use Secret Contracts to build decentralized applications with improved usability and explore new frontiers
            in web3.</p>
          <btn class="text-center" url="/developers">Go to page</btn>

        </card-minimal>

      </block>

      <block>

        <card-minimal class="accent-purple">

          <h4>Blog</h4>
          <p>Stay up to date about news, announcements and relevant information about Secret Network.</p>
          <btn class="text-center" url="/blog">Go to page</btn>

        </card-minimal>

      </block>

      <block>

        <card-minimal class="accent-turquoise">

          <h4>Community</h4>
          <p>Whether you’re a developer, an artist, a writer, an entrepreneur, or a dreamer, there are many ways for you
            to contribute to Secret Network.</p>
          <btn class="text-center" url="/community">Go to page</btn>

        </card-minimal>

      </block>

      <block>

        <card-minimal class="accent-red">

          <h4>Media Content</h4>
          <p>Explore featured articles, podcast episodes and videos to learn more about the Network.</p>
          <btn class="text-center" url="/media/features">Go to page</btn>

        </card-minimal>

      </block>

    </column>







    <!-- block header -->

    <column class="text-center">

      <block>

        <h3>Join the Conversation</h3>

      </block>

    </column>








    <!-- Join the conversation -->
    <column class="spacer-s img-invert" number="5" number-m="2" number-s="2">

      <block>

        <card-simple class="accent-gray text-center cta" url="https://forum.scrt.network/">

          <img src="../assets/icon-social-forum-big.svg" alt=""></img>

          <h6>Secret Forum</h6>

        </card-simple>

      </block>

      <block>

        <card-simple class="accent-purple text-center cta" url="https://discord.com/invite/SJK32GY">

          <img src="../assets/icon-social-discord-big.svg" alt=""></img>

          <h6>Discord Chat</h6>

        </card-simple>

      </block>

      <block>

        <card-simple class="accent-blue text-center cta" url="https://t.me/SCRTcommunity">

          <img src="../assets/icon-social-telegram-big.svg" alt=""></img>

          <h6>Telegram</h6>

        </card-simple>

      </block>

      <block>

        <card-simple class="accent-turquoise text-center cta" url="https://twitter.com/SecretNetwork">

          <img src="../assets/icon-social-twitter-big.svg" alt=""></img>

          <h6>Twitter</h6>

        </card-simple>

      </block>

      <block>

        <card-simple class="accent-red text-center cta" url="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw">

          <img src="../assets/icon-social-youtube-big.svg" alt=""></img>

          <h6>Youtube Channel</h6>

        </card-simple>

      </block>

    </column>

  </default-layout>
</template>

<script>
  export default {
    metaInfo: {
      title: '404 Page Not found'
    }
  }

</script>
