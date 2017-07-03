/**
 * sampleController
 *
 * @description :: Server-side logic for managing companies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // save company details into database 
  getSampleData: function (req, res, next) {
    sample.find().then(sample => {
      console.log(sample);
    })
  },
}
