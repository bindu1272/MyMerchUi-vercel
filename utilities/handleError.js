import _ from "lodash"

/**
 * 1. if there is no status --> Network Error
 * 2. status == 401 -> Token Expired
 *
 * @param  {[type]} error [description]
 * @return {[type]}       [description]
 */
const handleError = error => {
  console.log(error);
  console.log(_.get(error, "response.data"))
  let errors
  switch (true) {
    case _.has(error, "response.status") === false:
      errors = {
        message: "Network Error. Please check your internet.",
      }
      break;
    case _.get(error, "response.status") === 401 || _.get(error, "response.status") === 400:
      localStorage.clear();
      errors = {
        message: _.get(error, 'response.data.error')
          ? _.get(error, 'response.data.error')
          : "Something went wrong"
      }
      break;
    default:
      errors = _.get(error, "response.data.errors", {
        message: "Something went wrong",
      })
  }

  return errors
}

export default handleError;