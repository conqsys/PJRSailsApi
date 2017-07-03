module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  autoPK: false,
  attributes: {
    id: {
      type: "integer",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: "integer",
      allowNull: false
    },
    samplescol: {
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
