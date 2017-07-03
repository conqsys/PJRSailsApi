module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoPK: false,
  attributes: {
    salessummeryid: {
      type: "integer",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    companyid: {
      type: "integer",
      allowNull: false
    },
    storelocationid: {
      type: "integer",
      allowNull: true
    },
    vendorname: {
      type: "string",
      allowNull: false
    },
    vendormodelversion: {
      type: "string",
      allowNull: false
    },
    begindate: {
      type: "string",
      allowNull: false
    },
    enddate: {
      type: "string",
      allowNull: false
    },
    begintime: {
      type: "string",
      allowNull: false
    },
    endtime: {
      type: "string",
      allowNull: false
    },
    reportsequancenumber: {
      type: "integer",
      allowNull: false
    },
    filetype: {
      type: "string",
      allowNull: false
    },
    primaryreportperiod: {
      type: "integer",
      allowNull: false
    },
    secondaryreportperiod: {
      type: "integer",
      allowNull: false
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
