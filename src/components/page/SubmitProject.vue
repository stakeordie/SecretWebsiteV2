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
      >
        <h4>Project Info</h4>
        <label for="name">
          <p class="label">Name <span>*</span></p>
          <input type="text" name="name" />
          <p class="description">Code names are accepted.</p>
        </label>
        <label for="description">
          <p class="label">Description <span>*</span></p>
          <textarea name="description"></textarea>
          <p class="description">
            Please describe your project and the value it brings to Secret
            Network in a few sentences.
          </p>
        </label>
        <label for="link">
          <p class="label">Link</p>
          <input type="url" name="link" />
          <p class="description">
            If there is a link with more information about your project, please
            include it here.
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
            <input type="text" name="other"
          /></label>
        </fieldset>

        <label for="date">
          <p class="label">Release Date <span>*</span></p>
          <input type="text" id="date" name="stage" />
          <p class="description">
            Please share your best estimate or write “In Development” if private
            or unknown.
          </p>
        </label>

        <fieldset class="radio">
          <h4>Developer Info</h4>
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
          <input type="text" name="contact-info" />
          <p class="description">
            Email address, Discord username, or Telegram username
          </p>
        </label>

        <label class="consent" for="developer-consent"
          ><input
            type="checkbox"
            id="developer-consent"
            name="developer-consent"
            value="True"
          />
          <div>
            <p>Developer Consent</p>
            <p>
              By checking this box, you are indicating you are a developer on
              this project and consent to including it on Secret Network’s
              ecosystem roadmap.
            </p>
          </div></label
        >

        <button class="submit-form" type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      const form = document.querySelector(".form");
      form.addEventListener("click", function (e) {
        e.preventDefault();
      });
    },
  },
};
</script>

<style lang="scss">
.ecosystem-submit-project {
  &__message {
    max-width: 742px;
    p {
      font-size: var(--paragraph-font-size-big);
      line-height: 28px;
    }
  }
  &__form {
    display: grid;
    max-width: 742px;
    padding: var(--f-gutter-l);
    label {
      display: grid;
      gap: var(--f-gutter-xxs);
      * {
        margin: 0;
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
    .radio {
      * {
        margin: 0;
      }
      label {
        padding: var(--f-gutter-xxs) var(--f-gutter);
        display: grid;
        align-items: center;
        justify-content: start;
        grid-template-columns: 24px 1fr;
        input[type="text"] {
          grid-column: 2;
        }
      }
    }
  }
}
</style>
