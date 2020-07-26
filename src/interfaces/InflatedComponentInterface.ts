interface InflatedComponent {
  type: String,
  description?: String,
  id?: String,
  when?: String | true | false,
  bind?: ComponentBindVal[],
  duration?: Number,
  content?: String,
  contentType?: String,
  items?: InflatedComponent[],
  source?: String
}
