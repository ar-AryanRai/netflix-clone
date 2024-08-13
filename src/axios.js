// every request is going to have the same begining

import axios from "axios";

/** base url to make requests to the movie database */
const instance = axios.create({
  baseURL : "https://api.themoviedb.org/3",
});

/** now when we do like this
 * instance.get('/foo-bar');
 * then we get following as a result
 * 'https://api.themoviedb.org/3/foo-bar'
 */

//  this is a very good method if we have to make a lot of requests

export default instance; 