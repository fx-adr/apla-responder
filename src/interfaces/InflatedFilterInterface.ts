export default interface InflatedFilter {
  type: string;
  description?: string;
  when?: string | true | false;
  end?: Number | null;
  start?: Number;
  duration?: Number;
  amount?: string | Number;
}
