/**
 * pjrFileIndexController
 *
 * @description :: Server-side logic for managing companies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // save company details into database 
  savePrjJSON: function (req, res, next) {
    var fuelSalesObject = req.body;
    pjrFileIndex.create(fuelSalesObject).then(function (createdObject) {
      var idFroNew = createdObject.pjrfileindexid;
      if (!createdObject) {
        res.json({
          success: false,
          message: 'Something is wrong with PJR JSON request',
          code: 401,
          id: 0
        });
      } else {
        res.json({
          success: true,
          message: 'Saved Successfully',
          id: createdObject.pjrfileindexid,
          code: 200
        });
      }
    }, function (er) {
      console.error("This is the error: " + er);
      res.json({
        success: false,
        code: 104,
        message: 'SomeThing wrong with PJR JSON request',
        id: 0
      });
    });
  },
}
