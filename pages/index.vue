<template>
  <v-container class="home-hero">
    <v-layout class="layout">
      <h1 class="display-2 font-weight-black white--text text-xs-center">
        <span class="covid">
          COVID-19
        </span>
        WORLDWIDE
      </h1>
      <h1 class="display-2 font-weight-black white--text text-xs-center">
        LIVE TRACKER
      </h1>
      <p class="white--text">
        Keep on track on covid-19 recent cases and <br />
        activities all over the world.
      </p>
      <router-link class="cta" to="/dashboard" tag="button"
        >See Data</router-link
      >
    </v-layout>
  </v-container>
</template>

<style lang="scss">
.home-hero {
  background: url("../assets/images/background.png");
  background-size: cover;
  max-width: 100vw;
  width: 100vw;
  height: 100%;
  position: relative;

  .layout {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .covid {
      color: #01b7bb;
    }

    h1 {
      line-height: 3rem;
      text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.205);
    }

    p {
      margin: 1rem 0;
      text-align: center;
      text-shadow: 2px 1px 1px rgba(0, 0, 0, 0.205);
    }

    .cta {
      padding: 1rem 4rem;
      background-color: #fa5f50;
      color: white;
      border-radius: 8px;
      font-weight: 500;
      letter-spacing: 0.1rem;

      &:hover {
        background-color: #e74e40;
      }
    }
  }
}
</style>
