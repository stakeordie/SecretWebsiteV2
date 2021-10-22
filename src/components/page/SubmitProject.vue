<template>
  <div class="ecosystem-submit-project">
    <div class="ecosystem-submit-project__message">
      <h3>Submit Your Project</h3>
      <p>
        The Secret Network ecosystem roadmap is a community effort, stewarded by
        the Secret Foundation, to showcase all the projects currently in
        development. Any developer can request to add their project to the
        roadmap.
      </p>
    </div>
    <div class="ecosystem-submit-project__form">
      <form
        on:click="submitForm"
        class="form"
        action="https://getform.io/f/6c5e28de-6265-4385-a947-cc91d37568ad"
        method="POST"
        target="_blank"
      >
        <fieldset class="project-info">
          <h4>Project Info</h4>
          <label for="name">
            <p class="label">Name <span>*</span></p>
            <input class="name" type="text" name="name" required />
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
              required
            ></textarea>
            <p class="description">
              Please describe your project and the value it brings to Secret
              Network in a few sentences.
            </p>
            <p class="description-invalid">
              Please describe your project and the value it brings to Secret Network in a few sentences.
            </p>
          </label>
          <label for="link">
            <p class="label">Link</p>
            <input class="link" type="url" name="link" />
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
                checked
              />Idea</label
            >
            <label for="proof-of-concept-or-prototype"
              ><input
                type="radio"
                id="proof-of-concept-or-prototype"
                name="stage"
                value="proof-of-concept-or-prototype"
              />Proof of Concept or Prototype</label
            >
            <label for="getting-funding-or-team"
              ><input
                type="radio"
                id="getting-funding-or-team"
                name="stage"
                value="getting-funding-or-team"
              />Getting Funding or Team</label
            >
            <label for="in-development-for-mainnet"
              ><input
                type="radio"
                id="in-development-for-mainnet"
                name="stage"
                value="in-development-for-mainnet"
              />In Development for Mainnet</label
            >
            <label for="on-testnet">
              <input
                type="radio"
                id="on-testnet"
                name="stage"
                value="on-testnet"
              />On Testnet</label
            >
            <label for="other"
              ><input type="radio" id="other" name="stage" value="other" />Other
              <input class="other" type="text" name="other"
            /></label>
          </fieldset>

          <label for="date">
            <p class="label">Release Date <span>*</span></p>
            <input
              class="release-date"
              type="text"
              id="date"
              name="stage"
              required
            />
            <p class="description">
              Please share your best estimate or write “In Development” if
              private or unknown.
            </p>
            <p class="description-invalid">
              Please share your best estimate or write “In Development” if private or unknown.
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
                checked
              />Email</label
            >
            <label for="discord"
              ><input
                type="radio"
                id="discord"
                name="contact"
                value="discord"
                checked
              />Discord</label
            >
            <label for="telegram"
              ><input
                type="radio"
                id="telegram"
                name="contact"
                value="telegram"
                checked
              />Telegram</label
            >
          </fieldset>
          <label for="contact-info">
            <p class="label">Contact Info <span>*</span></p>
            <input class="contact-info" name="contact-info" required />
            <p class="description">
              Email address, Discord username, or Telegram username
            </p>
            <p class="description-invalid">
              Please share your email address, Discord username, or Telegram username 
            </p>
          </label>
        </fieldset>

        <label class="consent" for="developer-consent"
          ><input
            type="checkbox"
            id="developer-consent"
            name="developer-consent"
            value="True"
            required
          />
          <div class="consent__description">
            <p class="label">Developer Consent</p>
            <p>
              By checking this box, you are indicating you are a developer on
              this project and consent to including it on Secret Network’s
              ecosystem roadmap.
            </p>
          </div></label
        >

        <button class="submit-form" type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputIsValid: true,
    };
  },
  methods: {
    submitForm() {
      const submitBtnEl = document.querySelector(".submit-form");
      const inputRequired = document.querySelectorAll("[required]");

      console.log(inputRequired);

      inputRequired.forEach((input) => {
        input.addEventListener('focusout', function() {
          if(input != "") {
            input.classList.remove("invalid");
            input.parentElement.classList.remove("invalid-wrapper");
          }
        });
        console.log(input);
      })

      submitBtnEl.addEventListener("click", function (e) {
        inputRequired.forEach((element) => {
          if (element.value === "") {
            element.classList.add("invalid");
            element.parentElement.classList.add("invalid-wrapper");
            console.log([element]);
          } else {
            element.classList.remove("invalid");
            element.parentElement.classList.remove("invalid-wrapper");
            console.log([element]);
          }
        });
        e.preventDefault();
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
    .description, .description-invalid {
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
}
</style>
