import InflatedComponent from "./InflatedComponentInterface";

export default interface InflatedAplaDocument {
  version: string,
  type: string,
  description?: string,
  token?: string,
  mainTemplate: {
    items: InflatedComponent[]
  }
}
