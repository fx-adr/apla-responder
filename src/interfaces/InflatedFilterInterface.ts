export default interface InflatedFilter {
  type: string;
  description?: string;
  when?: string | true | false;
  end?: number | null;
  start?: number;
  duration?: number;
  amount?: string | number;
}
