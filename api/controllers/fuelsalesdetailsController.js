/**
 * fuelsalesdetailsController
 *
 * @description :: Server-side logic for managing companies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // save company details into database 
  getDepartmentSales: function (req, res, next) {
    var storelocationid = 2;
    var startdate = null;
    var starttime = null;
    var str = "CALL sp_departmentwisesales(" + storelocationid + ",'" + startdate + "' ,'" + starttime + "')";
    fuelsalesdetails.query(str, function (err, result) {
      if (err) return res.serverError(err);
      else return res.json(result);
    }).error(function (err) {
      res.json(err);
    });
  },
  convertDate: function (date) {
    var date = new Date(parseInt(date.substr(6)));
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  },
  convertTime: function (time) {
    var time = time.Hours + ':' + time.Minutes + ':' + time.Seconds;
    return time;
  },

  saveFuelSalesDetails: function (req, res, next) {
    var fuelSalesObject = req.body;
    var eventstartdate = convertDate(req.body.eventstartdate);
    var eventenddate = convertDate(req.body.eventenddate);
    var businessDate = convertDate(req.body.businessdate);
    var receiptDate = convertDate(req.body.receiptdate);
    var eventstarttime = convertTime(req.body.eventstarttime);
    var eventendtime = convertTime(req.body.eventendtime);
    var receiptTime = convertTime(req.body.receipttime);
    fuelSalesObject.eventstartdate = eventstartdate;
    fuelSalesObject.eventenddate = eventenddate;
    fuelSalesObject.businessdate = businessDate;
    fuelSalesObject.receiptdate = receiptDate;
    fuelSalesObject.eventstarttime = eventstarttime;
    fuelSalesObject.eventendtime = eventendtime;
    fuelSalesObject.receipttime = receiptTime;
    fuelsalesdetails.create(fuelSalesObject).then(function (createdObject) {
      var idFroNew = createdObject.fuelsaledetailid;
      if (!createdObject) {
        res.json({
          success: false,
          message: 'Something is wrong',
          code: 401,
          id: 0
        });
      } else {
        res.json({
          success: true,
          message: 'Saved Successfully',
          id: createdObject.fuelsaledetailid,
          code: 200

        });
      }
    }, function (err) {
      console.error("This is the error: " + err);
      res.json({
        success: false,
        code: 104,
        message: 'SomeThing wrong in Fuel Sales',
        id: 0
      });
    });
  },

  getTotalLineDeletes: function (req, res, next) {
    var storelocationid = 2;
    var startdate = null;
    var starttime = null;
    var str = "CALL sp_totalLineDelete(" + storelocationid + ",'" + startdate + "' ,'" + starttime + "')";
    fuelsalesdetails.query(str, function (data) {
      if (!data || !Array.isArray(data) || data.length === 0) {
        throw new Error("No department sales data was found");
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

}
