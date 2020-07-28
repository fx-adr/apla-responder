import ComponentBindVal from "./ComponentBindValInterface";

export default interface InflatedComponent {
  type: string;
  description?: string;
  id?: string;
  when?: string | true | false;
  bind?: ComponentBindVal[];
  duration?: Number;
  content?: string;
  contentType?: string;
  items?: InflatedComponent[];
  source?: string;
  strategy?: string;
}
