import InflatedAplaDocument from "./InflatedAplaDocumentInterface";

export default interface AplaRenderDocument {
  type: string;
  token?: string;
  document: InflatedAplaDocument
  datasources: object
}
