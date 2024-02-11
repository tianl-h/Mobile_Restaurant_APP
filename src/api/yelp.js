import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer zjvQpmNFHqzp3_YwEI61Sii-He74OBpE8beJCOgyhWgz9IOjKrwSUYSb5YKSxuNZQIlBdCWLhWNd47tHf_yP8DkbEhqkIZeyJuNgn4_5Yaq68IVULNoGnajQrQeQYHYx",
  },
});
