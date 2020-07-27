import InflatedAplaDocument from "./InflatedAplaDocumentInterface";

export default interface AplaRenderDocument {
  type: String;
  token?: String;
  document: InflatedAplaDocument
  datasources: object
}
