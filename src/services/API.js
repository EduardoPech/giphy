import { HTTP } from "./http-common";

const API_KEY = process.env.VUE_APP_API_KEY_GIPHY;
const config = {
  limit: 30,
  offset: 0,
  lang: "es",
  rating: "g",
};

const searchGiphy = async (search) => {
  return HTTP.get("", {
    params: {
      q: `perritos ${search}`,
      api_key: API_KEY,
      ...config,
    },
  });
};

export { searchGiphy };
