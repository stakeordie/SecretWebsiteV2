<template>
  <div class="faq">
    <!-- <section class="questions">
      <ul @click="toggleFaq" :class="{'faq-open' : isFaqOpen}">
        <img class="chevron" v-show="isFaqOpen" src="../assets/icon-chevron-up.svg" alt=""/>
        <img class="chevron" v-show="!isFaqOpen" src="../assets/icon-chevron-down.svg" alt=""/>
        <li v-for="(faq, name, index) in faqs" :key="index" :class="{active: faq.id === activeFaqId}">
          <a @click="activeFaqId = faq.id" :href="'#question-' + name" :class="{active: faq.id === activeFaqId}">
            <h6>{{faq.question}} {{faq.index}}</h6>
          </a>
        </li>
      </ul>
    </section>
    <section class="answers">
      <ul>
        <li v-for="(faq, name, index) in faqs" :key="index" :id="'question-' + name" :class="{active: faq.id === activeFaqId}">
          <h4>{{faq.question}}</h4>
          <div class="answer" v-html="faq.answer"></div>
        </li>
      </ul>
      <p><em>Interested in helping expand this guide? <a href="https://github.com/SecretFoundation/SecretWiki">You can
            contribute to this page!</a></em></p>
    </section> -->

    <section class="questions">
      <ul @click="toggleFaq" :class="{'faq-open' : isFaqOpen}">
        <img class="chevron" v-show="isFaqOpen" src="../assets/icon-chevron-up.svg" alt=""/>
        <img class="chevron" v-show="!isFaqOpen" src="../assets/icon-chevron-down.svg" alt=""/>
         <li v-for="(faqItem, index) in $static.faqs.edges" :key="index" :class="{active: faqItem.node.id === activeFaqId}">
          <a @click="activeFaqId = faqItem.node.id" :href="'#question-' + faqItem.node.id" :class="{active: faqItem.node.id === activeFaqId}">
            <h6>{{faqItem.node.question}}</h6>
          </a>
        </li>
      </ul>
    </section>
    <section class="answers">
      <ul>
        <li v-for="(faqItem, index) in $static.faqs.edges" :key="index" :id="'question-' + faqItem.node.id" :class="{active: faqItem.node.id === activeFaqId}">
          <h4>{{faqItem.node.question}}</h4>
          <vue-markdown class="answer">{{faqItem.node.answer}}</vue-markdown>
        </li>
      </ul>
      <p><em>Interested in helping expand this guide? <a href="https://github.com/SecretFoundation/SecretWiki">You can
            contribute to this page!</a></em></p>
    </section>
  </div>
</template>


<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    components: { VueMarkdown},
    data: function () {
      return {
        activeFaqId: "1",
        isFaqOpen: true,
        faqs: [{
            id: 0,
            question: `What is the Secret Network?`,
            answer: `<p>The Secret Network is a decentralized network of computers (which we call "secret nodes") that use
    hardware-based and software-based privacy technologies to enable <strong>secure computation.</strong> On top
    of this network, developers can build <strong>Secret Apps</strong> - unstoppable, permissionless
    applications that can utilize encrypted data without ever exposing the data itself, even to the nodes in the
    network performing computations.</p>`
          },
          {
            id: 1,
            question: `What's so special about Secret Network?`,
            answer: `<p>Secret Network combines the best features of decentralized, open-source networks and blockchains with the
    benefits of data privacy and improved usability. These improvements are critical for achieving mass
    adoption.</p>
  <p>We want to enjoy the benefits of smart contracts and decentralized applications (or dApps): they are
    robust, unstoppable, censor-resistant and transparent. But blockchains, and by extension smart contracts,
    have one glaring problem that is often overlooked — all data stored on them is public. In that sense,
    blockchains are worse than anything that came before them when it comes to privacy. Instead of trusting your
    data with a single organization (e.g., as is the case with Facebook, Google, your bank, etc), you now have
    to trust everyone. Secret contracts and Secret Apps combine these benefits of dApps but add the ability to
    keep data private, helping remove one of the biggest barriers to mass adoption of the decentralized web.</p>`
          },
          {
            id: 2,
            question: `Why call it Secret?`,
            answer: `<p>A secret is something that you don’t want to share with everyone, but still want to share with people you
    choose to trust. A secret is something that you want to keep protected - not because it’s something bad, but
    because it’s something valuable. We call this network “Secret” because it allows developers and users to
    protect valuable data while still enabling them to share and compute it when, how, and with whomever they
    choose. Secret Network is where these important concepts of privacy, freedom, and consent coincide.</p>`
          },
          {
            id: 3,
            question: `What are secret contracts and Secret Apps?`,
            answer: `<p>"Secret contracts" are privacy-preserving smart contracts built on Secret Network. Smart contracts (in this
    context) are essentially self-executing pieces of code that are managed on a blockchain. Secret contracts
    improve on regular smart contracts in that they not only solve for correctness, but also for data privacy.
    Secret contracts are written in the <a href="https://www.rust-lang.org/">Rust programming language</a>.
    Secret Apps utilize the capabilities of
    secret contracts to enable unique use cases that empower users and increase opportunities for growth and
    impact.</p>
  <blockquote>Learn more on the <a href="/developers/protocol/components">Protocol</a> page or visit our <a
      href="/developers/introduction/overview">full documentation</a>.</blockquote>`
          },
          {
            id: 4,
            question: `Why privacy?`,
            answer: `<p>Members of our community, including secret node operators and Secret App developers, believe that privacy
    is a fundamental human right and a public good. Privacy needs to be protected and supported by the
    technologies we use in daily life. However, an overly centralized internet and large data monopolies have
    put our privacy, our security, and our society at risk. That's why we are dedicated to building solutions
    with privacy at their core, empowering users to take and keep control of their valuable information. Privacy
    makes the applications we rely on more usable and more secure - and when privacy is not protected, neither
    are we.</p>`
          },
          {
            id: 5,
            question: `Why blockchain?`,
            answer: `<p>By using blockchain, a decentralized network of computers can reach consensus on the state of the network
    while remaining open and permissionless. Secret Network is built on <a href="https://tendermint.com/sdk">Cosmos SDK
      / Tendermint</a>, a popular blockchain framework, allowing
    for a wide variety of organizations and individuals to participate in our community and network. The only
    way to build a sustainable foundation for privacy-first applications is by creating an open, diverse, and
    transparent culture, united by the purpose of data dignity for all!</p>`
          },
          {
            id: 6,
            question: `What is programmable privacy?`,
            answer: `<p>Secret Network is focused on achieving <a href="/blog/programmable-privacy/">programmable privacy</a>. Most
    privacy solutions in the blockchain space today concentrate only on transactional privacy, specifically
    obscuring data on senders or receivers of transactions. Programmable privacy is a much more expansive
    vision, as a transaction is just one (trivial) type of computation. Secret Network allows applications to
    use encrypted inputs, encrypted outputs, and encrypted state, meaning we can enable groundbreaking new use
    cases for smart contracts and decentralized applications.</p>`
          },
          {
            id: 7,
            question: `What does Secret Network help solve?`,
            answer: `<p>Everything! Which applications would you use every day if they could not protect you or your data? When you
    use blockchains today for any purpose, you are forced to compromise on privacy. Any decentralized
    applications built on Secret Network benefit from its privacy protections. Our community is primarily
    focused on use cases that help us achieve our stated mission: to advance privacy as a human right and a
    public good; to empower individuals through development and use of decentralized technologies; and to
    protect freedom and create more valuable systems by eliminating data monopolies.</p>

  <p>Sample use cases include: privacy-preserving credit scoring and lending; private on-chain auctions for
    cryptoart and other digital collectibles; decentralized access control; secret voting for collective
    decision-making; privacy-preserving machine learning; and many more applications in the fields of
    decentralized finance, gaming, healthcare, and dozens of other industries.</p>`
          },
          {
            id: 8,
            question: `What is SCRT?`,
            answer: `<p>SCRT (pronounced "Secret") is the native coin of the Secret Network. This means SCRT is used to pay fees
    and transfer value on the network. Secret nodes must stake SCRT in order to operate on the network, and in
    return they receive fees and network rewards in SCRT. When nodes go offline, they can be "slashed" and lose
    a portion of their SCRT stake. Holders of SCRT who are not operating nodes may "bond" their stake to a
    specific node in order to become a delegator. Delegators have an opportunity to earn a share of fees and
    network rewards by supporting a particular set of validators.</p>

  <p>Another utility for SCRT is governance of the network. Secret nodes can create and vote on governance
    proposals using SCRT, allowing for decentralized control of the network.</p>`
          },
          {
            id: 9,
            question: `What are Trusted Execution Environments, and why do we use them?`,
            answer: `<p><a href="https://en.wikipedia.org/wiki/Trusted_execution_environment">Trusted Execution Environments</a>
    (TEEs) are special enclaves inside a computer that function like a "black box", allowing computations to
    occur confidentially inside of them. They are utilized in a broad range of everyday hardware, including the
    fingerprint readers in smartphones. Secret nodes in the network use these secure enclaves to protect the
    data used by secret contracts.</p>

  <p>While our community is constantly exploring other innovative privacy solutions (such as multi-party
    computing, homomorphic encryption, private set intersection, etc.), they are simply not practical to use in
    production for applications today. There are always tradeoffs between scalability, performance, and
    security, and today secure enclaves provide the best option for protecting data privacy in a decentralized
    network. We continue to explore and research other solutions!</p>`
          },
          {
            id: 10,
            question: `What is the relationship between Enigma and Secret Network?`,
            answer: `<p><a href="https://www.enigma.co/">Enigma MPC</a> is a development company that is one of the core
    contributors to <a href="https://scrt.network/">Secret Network</a>. Their work is critical to the Secret
    ecosystem as they contribute to both protocol-level functionality (such as <a
      href="/blog/secret-contracts-update-milestone-3-of-3-is-complete/">secret contracts</a>) and key
    applications for the network. There are currently dozens of companies and individual contributors currently
    supporting Secret Network and its ecosystem, whether it is through development work, node operation,
    education, or many other means!</p>`
          },
          {
            id: 11,
            question: `What is Cosmos, and why are you using their technologies?`,
            answer: `<p><a href="https://cosmos.network/">Cosmos</a> represents a standard approach to developing scalable and
    interoperable blockchain applications. We believe the Cosmos SDK, Tendermint and Inter-Blockchain
    Communication Protocol (IBC) are groundbreaking since they are looking ahead to a future of many
    interconnected, app-specific blockchains. We're excited to see how Secret Network can bring more privacy
    solutions to the Cosmos ecosystem. <a href="/blog">Learn more about this on our blog</a>.</p>`
          },
          {
            id: 12,
            question: `Is Secret Network a "Layer One" or "Layer Two" solution?`,
            answer: `<p>Secret Network has its own consensus and provides privacy for smart contracts deployed on the network,
    without Secret Network needing to interoperate with any other blockchain. We have often referred to this as
    "blockchain independence", but based on this description, others would call Secret Network a "Layer One"
    blockchain. However, part of our vision has always been bringing privacy to every blockchain. This means our
    community is continuing to explore key "Layer Two" functionality for Secret Network, such as by utilizing
    IBC / Cosmos interoperability, building an Ethereum bridge, or other means.</p>`
          }
        ]
      }
    },
    methods: {
      toggleFaq() {
        this.isFaqOpen = !this.isFaqOpen
      },
    }

  }

</script>

<static-query>
  query{
    faqs: allStrapiFaqItems (
      sort: {
        		by: "sort"
            order: ASC
      }
    ){
      edges{
        node{
          id
          question
          answer
        }
      }
    }
  }
</static-query>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  .faq {
    display: grid;
    grid-template-columns: 30% 1fr;
    gap: var(--f-gutter-xxl);

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
      gap: var(--f-gutter);
    }

    ul {
      padding-left: 0;

      li {
        list-style: none;
      }
    }

    .questions {
      ul {
        position: sticky;
        top: 100px;
        display: flex;
        flex-direction: column;
        gap: var(--f-gutter-xxs);

          .chevron {
            @include respond-to(">=l") {
          display: none;
        }
          @include respond-to("<=m") {
          position: absolute;
          width: 24px;
          height: 24px;
          right: var(--f-gutter);
          top: 18px;
        }
          }
        
        @include respond-to("<=m") {
          background: var(--theme-card-bg-default);
          padding: var(--f-gutter);
        }

        &.faq-open {
          @include respond-to("<=m") {
            gap: var(--f-gutter-l);

            li {
              display: block !important;
            }
          }
        }

        li {
          margin: 0;

          @include respond-to("<=m") {
            &:not(.active) {
              display: none;
            }

            &.active {
              padding-right: 2rem;
            }
          }

          a {
            color: var(--theme-fg);
            margin: 0;

            &:hover {
              color: var(--color-analog-secondary-orange);
            }

            h6 {
              @include respond-to("<=m") {
                margin: 0;
              }
            }
          }
        }
      }
    }

    .answers {
      ul {
        li:not(.active) {
          display: none
        }

        .active {
          @include respond-to(">=l") {
            padding-top: 150px;
            margin-top: -150px;
          }

          @include respond-to("<=m") {
            padding-top: 250px;
            margin-top: -250px;
          }
        }
      }
    }
  }

</style>
