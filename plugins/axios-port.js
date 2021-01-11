import { setClient } from "~/services/axios-client";

export default ({ app, store }) => {
  setClient(app.$axios);
};
