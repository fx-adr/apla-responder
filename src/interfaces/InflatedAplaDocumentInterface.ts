import InflatedComponent from "./InflatedComponentInterface";

export default interface InflatedAplaDocument {
  version: String,
  type: String,
  description?: String,
  token?: String,
  mainTemplate: {
    items: InflatedComponent[]
  }
}
