module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoPK: false,
  attributes: {
    pjrfileindexid: {
      type: "integer",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    salessummeryid: {
      type: "integer",
      allowNull: false
    },
    pjrjson: {
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