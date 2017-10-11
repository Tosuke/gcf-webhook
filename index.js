var axios = require("axios");

module.exports = function(url, adds = {}, axiosOpts = {}) {
  return function(req, res, func) {
    var promise, tmp;
    try {
      tmp = func(req.body);
      promise = tmp instanceof Promise ? tmp : Promise.resolve(tmp);
    } catch (e) {
      promise = Promise.reject(e);
    }

    promise
      .then(a => {
        var data = a instanceof Object ? Object.assign(a, adds) : a;
        return axios.post(url, data, axiosOpts);
      })
      .then(() => {
        res.status(200).send();
      })
      .catch(e => {
        console.error(e);
        res.status(200).send();
      });
  };
};
