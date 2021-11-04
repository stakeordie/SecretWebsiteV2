<template>
  <div class="ecosystem-submit-project">
    <div v-show="!formIsSubmited" class="ecosystem-submit-project__message">
      <h3>Submit Your Project</h3>
      <p>
        The Secret Network ecosystem roadmap is a community effort, stewarded by
        the Secret Foundation, to showcase all the projects currently in
        development. Any developer can request to add their project to the
        roadmap.
      </p>
    </div>
    <div v-show="!formIsSubmited" class="ecosystem-submit-project__form">
      <form @submit.prevent="signup()">
        <fieldset class="project-info">
          <h4>Project Info</h4>
          <label for="name">
            <p class="label">Name <span>*</span></p>
            <input
              class="name"
              type="text"
              name="name"
              v-model="name"
              required
            />
            <p class="description">Code names are accepted.</p>
            <p class="description-invalid">
              Please include a project name. Code names are accepted.
            </p>
          </label>
          <label for="description">
            <p class="label">Description <span>*</span></p>
            <textarea
              class="description-area"
              name="description"
              v-model="description"
              required
            ></textarea>
            <p class="description">
              Please describe your project and the value it brings to Secret
              Network in a few sentences.
            </p>
            <p class="description-invalid">
              Please describe your project and the value it brings to Secret
              Network in a few sentences.
            </p>
          </label>
          <label for="link">
            <p class="label">Link</p>
            <input class="link" type="url" name="link" v-model="link" />
            <p class="description">
              If there is a link with more information about your project,
              please include it here.
            </p>
          </label>

          <!-- Stage of Development -->
          <fieldset class="radio">
            <p class="label">
              Stage of Development <span class="required">*</span>
            </p>
            <label for="idea"
              ><input
                type="radio"
                id="idea"
                name="stage"
                value="idea"
                v-model="stage"
                checked
              />Idea</label
            >
            <label for="proof-of-concept-or-prototype"
              ><input
                type="radio"
                id="proof-of-concept-or-prototype"
                name="stage"
                value="proof-of-concept-or-prototype"
                v-model="stage"
              />Proof of Concept or Prototype</label
            >
            <label for="getting-funding-or-team"
              ><input
                type="radio"
                id="getting-funding-or-team"
                name="stage"
                value="getting-funding-or-team"
                v-model="stage"
              />Getting Funding or Team</label
            >
            <label for="in-development-for-mainnet"
              ><input
                type="radio"
                id="in-development-for-mainnet"
                name="stage"
                value="in-development-for-mainnet"
                v-model="stage"
              />In Development for Mainnet</label
            >
            <label for="on-testnet">
              <input
                type="radio"
                id="on-testnet"
                name="stage"
                value="on-testnet"
                v-model="stage"
              />On Testnet</label
            >
            <label for="other"
              ><input
                type="radio"
                id="other"
                name="stage"
                value="other"
                v-model="stage" />Other
              <input
                class="other"
                type="text"
                name="other"
                v-model="stageOtherName"
            /></label>
          </fieldset>

          <label for="date">
            <p class="label">Release Date <span>*</span></p>
            <input
              class="release-date"
              type="date"
              id="date"
              name="date"
              v-model="date"
              required
            />
            <p class="description">
              Please share your best estimate or write “In Development” if
              private or unknown.
            </p>
            <p class="description-invalid">
              Please share your best estimate or write “In Development” if
              private or unknown.
            </p>
          </label>
        </fieldset>

        <fieldset class="developer-info">
          <h4>Developer Info</h4>
          <fieldset class="radio">
            <p class="label">
              Preferred Contact Method <span class="required">*</span>
            </p>
            <label for="email"
              ><input
                type="radio"
                id="email"
                name="contact"
                value="email"
                v-model="contactMethod"
                checked
              />Email</label
            >
            <label for="discord"
              ><input
                type="radio"
                id="discord"
                name="contact"
                value="discord"
                v-model="contactMethod"
              />Discord</label
            >
            <label for="telegram"
              ><input
                type="radio"
                id="telegram"
                name="contact"
                value="telegram"
                v-model="contactMethod"
              />Telegram</label
            >
          </fieldset>
          <label for="contact-info">
            <p class="label">Contact Info <span>*</span></p>
            <input
              class="contact-info"
              name="contact-info"
              v-model="contact"
              required
            />
            <p class="description">
              Email address, Discord username, or Telegram username
            </p>
            <p class="description-invalid">
              Please share your email address, Discord username, or Telegram
              username
            </p>
          </label>
        </fieldset>

        <label class="consent" for="developer-consent"
          ><input
            type="checkbox"
            id="developer-consent"
            name="developer-consent"
            value="false"
            v-model="consent"
            required
          />
          <div class="consent__description">
            <p class="label">Developer Consent</p>
            <p class="description-message">
              By checking this box, you are indicating you are a developer on
              this project and consent to including it on Secret Network’s
              ecosystem roadmap.
            </p>
          </div>
          <p class="description-invalid">
            You must be a developer of the project to submit it for inclusion on
            the roadmap.
          </p>
        </label>

        <input type="hidden" name="importante" />
        <button class="submit-form" type="submit">SUBMIT</button>
      </form>
    </div>
    <!-- Thank you -->
    <div v-show="formIsSubmited" class="ecosystem-submit-project__thankyou">
      <h3>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 19.5L13.5 25.5L28.5 10.5"
            stroke="#5AA361"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        Project Submitted
      </h3>
      <p>
        Thank you for submitting your project. A member of the Secret Foundation
        will be in touch to help coordinate your including your project on the
        roadmap.
      </p>
      <a href="/ecosystem/ecosystem-roadmap"
        >Go back to the Ecosystem Roadmap page</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputIsValid: true,
      formIsSubmited: false,
      name: "",
      description: "",
      link: "",
      stage: "",
      stageOtherName: "",
      date: null,
      contactMethod: "",
      contact: "",
      consent: false,
    };
  },
  methods: {
    async signup() {
      const thankYouEl = document.querySelector('.ecosystem-submit-project__thankyou');

      try {
        const response = await fetch(
          "https://usebasin.com/f/353dfab205a4.json",
          {
            method: "POST",
            body: JSON.stringify({
              name: this.name,
              description: this.description,
              link: this.link,
              stage: this.stage,
              stageOtherName: this.stageOtherName,
              date: this.date,
              contactMethod: this.contactMethod,
              contact: this.contact,
              consent: this.consent,
              importante: this.akismet,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          this.signupSuccess = true;
          this.formIsSubmited = true;
          setTimeout(() => {
            thankYouEl.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }, 500);
        }
      } catch (e) {
        this.signupError = true;
      }
    },
    submitForm() {
      const submitBtnEl = document.querySelector(".submit-form");
      const inputRequired = document.querySelectorAll("[required]");

      const markAsInvalid = function (el) {
        el.classList.add("invalid");
        el.parentElement.classList.add("invalid-wrapper");
      };

      const markAsValid = function (el) {
        el.classList.remove("invalid");
        el.parentElement.classList.remove("invalid-wrapper");
      };

      // validation after update values
      inputRequired.forEach((input) => {
        input.addEventListener("focusout", function () {
          if (!input.value) {
            markAsValid(input);
          } else {
            markAsValid(input);
          }
        });
      });

      // validation on submission
      submitBtnEl.addEventListener("click", function (e) {
        inputRequired.forEach((element) => {
          if (!element.validity.valid) {
            markAsInvalid(element);
          } else {
            markAsValid(element);
          }
        });
        // e.preventDefault();
        // console.log(e.target);
      });
    },
  },
  mounted() {
    this.submitForm();
  },
};
</script>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";
.ecosystem-submit-project {
  &__message {
    max-width: 742px;
    p {
      font-size: var(--paragraph-font-size-big);
      line-height: 28px;
      letter-spacing: -0.15px;
    }
  }
  &__form {
    display: grid;
    max-width: 742px;
    padding-left: calc(var(--f-gutter) - 5px);
    .form {
      display: grid;
      gap: var(--f-gutter);
      .project-info {
        display: grid;
        gap: 0;
        padding-top: var(--f-gutter-l);
        padding-bottom: calc(var(--f-gutter) + 5px);
      }
      .developer-info {
        // padding-top: 0;
        padding-bottom: var(--f-gutter-xxs);
      }
    }
    label {
      display: grid;
      gap: 0;
      margin-bottom: calc(var(--f-gutter) - 1px);
      * {
        margin: 0;
      }
      .description-invalid {
        display: none;
      }
      &.invalid-wrapper {
        .description {
          display: none;
        }
        .description-invalid {
          display: block;
        }
      }
      input {
        max-height: 38px;
        margin-bottom: 5px;
        // &:invalid {
        //   transform: scale(2);
        // }
        &.invalid {
          border: 1px solid var(--color-analog-secondary-red);
        }
        &[type="radio"] {
          transform: scale(1.2);
        }
        &[type="checkbox"] {
          transform: scale(1.2);
        }
        &.name,
        &.link,
        &.release-date,
        &.contact-info {
          max-width: 465px;
        }
        &.contact-info {
          min-height: 43px;
          margin-bottom: 4px;
        }
        &.other {
          max-width: 405px;
          margin-top: -8px;
        }
      }
      textarea {
        &.description-area {
          max-width: 690px;
          min-height: 101px;
          margin-bottom: 5px;
        }
        &.invalid {
          border: 1px solid var(--color-analog-secondary-red);
        }
      }
    }
    .label {
      font-weight: 600;
      font-size: 14px;
      color: var(--color-analog-primary-white);
      span {
        color: var(--color-analog-secondary-red);
      }
    }
    .description,
    .description-invalid {
      font-size: 14px;
      line-height: 20px;
    }
    .description-invalid {
      color: var(--color-analog-secondary-red);
      // display: none;
    }
    .radio {
      display: grid;
      gap: 0;
      margin-bottom: 7px;
      * {
        margin: 0;
      }
      p.label {
        margin-bottom: 3px;
      }
      label {
        padding: 0 calc(var(--f-gutter-s) + 2px);
        display: grid;
        align-items: center;
        justify-content: start;
        grid-template-columns: 24px 1fr;
        gap: 8px;
        font-size: 14px;
        margin-bottom: 11px;
        input[type="text"] {
          grid-column: 2;
        }
      }
    }
    .consent {
      display: grid;
      grid-template-columns: 24px 1fr;
      position: relative;
      gap: 8px;
      align-items: start;
      justify-content: start;
      border: 1px solid var(--color-neutral-dark-mode-05);
      box-sizing: border-box;
      border-radius: 6px;
      padding: var(--f-gutter) calc(var(--f-gutter) - 5px);
      max-width: 690px;
      transform: translateY(-18px);
      max-height: 92px;
      @include respond-to("<=m") {
        max-height: inherit;
      }
      * {
        margin: 0;
      }
      &__description {
        transform: translateY(-4px);
        p {
          font-size: 14px !important;
          line-height: 21px;
        }
      }
      .description-invalid {
        position: absolute;
        left: 0;
        bottom: -28px;
      }
    }
    .submit-form {
      max-width: 300px;
      min-height: 46px;
      background: var(--theme-fg);
      color: var(--theme-bg);
      &:hover {
        background: var(--color-neutral-dark-mode-02);
        color: var(--theme-fg);
      }
    }
  }
  &__thankyou {
    display: grid;
    gap: var(--f-gutter);
    max-width: 710px;
    * {
      margin: 0;
    }
    h3 {
      display: grid;
      color: var(--color-analog-secondary-green);
      gap: 4px;
      grid-template-columns: 36px 1fr;
    }
    p,
    a {
      font-size: var(--paragraph-font-size-big);
      line-height: 28px;
      letter-spacing: -0.15px;
    }
  }
}
</style>
