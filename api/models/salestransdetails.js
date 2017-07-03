module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoPK: false,
  attributes: {
    saletransdetailid: {
      type: "integer",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    salessummeryid: {
      type: "integer",
      allowNull: false
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

    poscode: {
      type: "string",
      allowNull: true
    },
    actualsalesprice: {
      type: "integer",
      allowNull: true
    },
    merchandisecode: {
      type: "string",
      allowNull: true
    },
    sellingunits: {
      type: "integer",
      allowNull: true
    },

    regularsellprice: {
      type: "integer",
      allowNull: true
    },

    salesquantity: {
      type: "integer",
      allowNull: true
    },

    salesamount: {
      type: "integer",
      allowNull: true
    },
    isristricted: {
      type: "boolean",
      allowNull: true
    },
    salesrestrictcode: {
      type: "string",
      allowNull: true
    },
    departmentname: {
      type: "integer",
      allowNull: true
    },
    eventtype: {
      type: "string",
      allowNull: true
    },
    entrymethod: {
      type: "string",
      allowNull: true
    },
    transactionstatus: {
      type: "string",
      allowNull: true
    },
    poscodeformat: {
      type: "string",
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
