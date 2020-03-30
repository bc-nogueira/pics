import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID BinxDi1xj1b_JKXXZI9giQeQl9swzi6d4uUIQXxGLKc"
  }
});
