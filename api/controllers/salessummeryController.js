/**
 * salessummeryController
 *
 * @description :: Server-side logic for managing companies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // save company details into database 
  getEventWiseSalesSummery: function (req, res, next) {
    var storelocationid = 2;
    var startdate = null;
    var starttime = null;
    var str = "CALL sp_eventWiseSalesSummery(" + storelocationid + ",'" + startdate + "' ,'" + starttime + "')";
    salessummery.query(str, function (data) {
      if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error("No sales summery was found");
      } else {
        var salesSummery = {};
        salesSummery.NonUpcSalesAmount = data[0][0].NonUpcSalesAmount;
        salesSummery.UpcSalesAmount = data[0][0].UpcSalesAmount;
        salesSummery.FuelSalesAmount = data[0][0].FuelSalesAmount;
        salesSummery.FuelSalesQuantity = data[0][0].FuelSalesQuantity;
        salesSummery.TotalTransactionCount = data[0][0].TotalTransactionCount;
        res.json(
          salesSummery
        );
        res.end();
      }

    }).error(function (err) {
      res.json(err);
    });
  },

  saveSalesSummery: function (req, res, next) {
    var salesSummerObject = req.body;
    var begindate = convertDate(req.body.begindate);
    var enddate = convertDate(req.body.enddate);
    var begintime = convertTime(req.body.begintime);
    var endtime = convertTime(req.body.endtime);
    salesSummerObject.begindate = begindate;
    salesSummerObject.enddate = enddate;
    salesSummerObject.begintime = begintime;
    salesSummerObject.endtime = endtime;
    salessummery.create(salesSummerObject).then(function (createdObject) {
      var idFroNew = createdObject.salessummeryid;
      if (!createdObject) {
        res.json({
          success: false,
          message: 'Something is wrong in sales summery',
          code: 401,
          id: 0
        });
      } else {

        res.json({
          success: true,
          message: 'Saved Successfully',
          id: createdObject.salessummeryid,
          code: 200

        });
      }


    }, function (er) {
      console.error("This is the error: " + er);
      res.json({
        success: false,
        code: 104,
        message: 'Something wrong in sales summery',
        id: 0
      });
    });
  },

}
