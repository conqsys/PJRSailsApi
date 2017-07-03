// var sequlize = require("../connection.js");

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoPK: false,
  attributes: {
    fuelsaledetailid: {
      type: "integer",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    salessummeryid: {
      type: "string",
      allowNull: false
    },
    fuelgradeid: {
      type: "string",
      allowNull: true
    },
    fuelpositionid: {
      type: "integer",
      allowNull: true
    },
    pricetiercode: {
      type: "string",
      allowNull: true
    },
    timetiercode: {
      type: "string",
      allowNull: true
    },
    servicelevelcode: {
      type: "string",
      allowNull: true
    },
    description: {
      type: "string",
      allowNull: true
    },
    entrymethod: {
      type: "string",
      allowNull: true
    },
    merchandisecode: {
      type: "string",
      allowNull: true
    },
    actualsalesprice: {
      type: "string",
      allowNull: true
    },
    regularsellprice: {
      type: "datetime",
      allowNull: true
    },
    salesquantity: {
      type: "string",
      allowNull: true
    },
    salesamount: {
      type: "string",
      allowNull: true
    },
    taxlevelid: {
      type: "integer",
      allowNull: true
    },
    businessdate: {
      type: "string",
      allowNull: true
    },
    receiptdate: {
      type: "string",
      allowNull: true
    },
    receipttime: {
      type: "string",
      allowNull: true
    },
    transactiontotalgrossamount: {
      type: "integer",
      allowNull: true
    },
    transactiontotalnetamount: {
      type: "integer",
      allowNull: true
    },
    transactiontotaltaxsalesamount: {
      type: "integer",
      allowNull: true
    },
    transactiontotaltaxexemptamount: {
      type: "integer",
      allowNull: true
    },
    transactiontotaltaxnetamount: {
      type: "integer",
      allowNull: true
    },
    transactiontotalgrandamount: {
      type: "integer",
      allowNull: true
    },
    trainingmodeflag: {
      type: "string",
      allowNull: true
    },
    refundreason: {
      type: "string",
      allowNull: true
    },
    approverid: {
      type: "string",
      allowNull: true
    },
    outsidesalesflag: {
      type: "string",
      allowNull: true
    },
    offlineflag: {
      type: "string",
      allowNull: true
    },
    suspendFlag: {
      type: "string",
      allowNull: true
    },
    eventstartdate: {
      type: "string",
      allowNull: true
    },
    eventstarttime: {
      type: "string",
      allowNull: true
    },
    eventenddate: {
      type: "string",
      allowNull: true
    },
    eventendtime: {
      type: "string",
      allowNull: true
    },
    tillid: {
      type: "integer",
      allowNull: true
    },
    registerid: {
      type: "integer",
      allowNull: true
    },
    cashierid: {
      type: "integer",
      allowNull: true
    },
    transactionid: {
      type: "integer",
      allowNull: true
    },
    createdAt: {
      type: "string",
      allowNull: false
    },
    updatedAt: {
      type: "string",
      allowNull: false
    },
  }
};
