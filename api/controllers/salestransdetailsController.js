/**
 * salestransdetailsController
 *
 * @description :: Server-side logic for managing companies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // save company details into database 
  getTotalSalesTransactions: function (req, res, next) {
    var storelocationid = 2;
    var startdate = null;
    var starttime = null;
    var str = "CALL sp_totalSalesTransactions(" + storelocationid + ",'" + startdate + "' ,'" + starttime + "')";
    salestransdetails.query(str, function (data) {
      if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error("No sales transactions was found");
      } else {

        var obj = data[0][0].TotalTransactionCount;

        res.json(
          obj
        );
        res.end();
      }
    }).error(function (err) {
      res.json(err);
    });
  },

  getEventWiseSales: function (req, res, next) {
    var storelocationid = 2;
    var startdate = null;
    var starttime = null;
    var str = "CALL sp_eventWiseSales(" + storelocationid + ",'" + startdate + "' ,'" + starttime + "')";
    salestransdetails.query(str, function (data) {
      if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error("No event wise sales data was found");
      } else {

        var obj1 = data[0];
        var objs = [];

        for (key in obj1) {
          objs.push(obj1[key]);
        }

        res.json(
          objs
        );
        res.end();
      }
    }).error(function (err) {
      res.json(err);
    });
  },

  saveItemSalesDetails: function (req, res, next) {
    var itemSalesObject = req.body;
    var eventstartdate = convertDate(req.body.eventstartdate);
    var eventenddate = convertDate(req.body.eventenddate);
    var businessDate = convertDate(req.body.businessdate);
    var receiptDate = convertDate(req.body.receiptdate);
    var eventstarttime = convertTime(req.body.eventstarttime);
    var eventendtime = convertTime(req.body.eventendtime);
    var receiptTime = convertTime(req.body.receipttime);
    itemSalesObject.eventstartdate = eventstartdate;
    itemSalesObject.eventenddate = eventenddate;
    itemSalesObject.businessdate = businessDate;
    itemSalesObject.receiptdate = receiptDate;
    itemSalesObject.eventstarttime = eventstarttime;
    itemSalesObject.eventendtime = eventendtime;
    itemSalesObject.receipttime = receiptTime;
    salestransdetails.create(itemSalesObject).then(function (createdObject) {
      var idFroNew = createdObject.saletransdetailid;
      if (!createdObject) {
        res.json({
          success: false,
          message: 'Something is wrong item sales',
          code: 401,
          id: 0
        });
      } else {
        res.json({
          success: true,
          message: 'Saved Successfully',
          id: createdObject.saletransdetailid,
          code: 200

        });
      }
    }, function (er) {
      console.error("This is the error: " + er);
      res.json({
        success: false,
        code: 104,
        message: 'SomeThing wrong in item Sales',
        id: 0
      });
    });
  },
}
