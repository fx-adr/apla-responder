interface InflatedFilter {
  type: String,
  description?: String,
  when?: String | true | false,
  end?: Number|null,
  start?: Number,
  duration?: Number,
  amount?: String|Number,
}
