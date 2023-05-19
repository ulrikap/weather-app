export type ExcludeValue =
  | "current"
  | "minutely"
  | "hourly"
  | "daily"
  | "alerts";

export type MeasurementUnit = "standard" | "metric" | "imperial";

export type Lang =
  | "af"
  | "al"
  | "ar"
  | "az"
  | "bg"
  | "ca"
  | "cz"
  | "da"
  | "de"
  | "el"
  | "en"
  | "eu"
  | "fa"
  | "fi"
  | "fr"
  | "gl"
  | "he"
  | "hi"
  | "hr"
  | "hu"
  | "id"
  | "it"
  | "ja"
  | "kr"
  | "la"
  | "lt"
  | "mk"
  | "no"
  | "nl"
  | "pl"
  | "pt"
  | "pt_br"
  | "ro"
  | "ru"
  | "sv"
  | "se"
  | "sk"
  | "sl"
  | "sp"
  | "es"
  | "sr"
  | "th"
  | "tr"
  | "ua"
  | "uk"
  | "vi"
  | "zh_cn"
  | "zh_tw"
  | "zu";

export type CurrentForecastParams = {
  lat: number;
  lon: number;
  appid: number;
  exclude?: [ExcludeValue];
  units?: MeasurementUnit;
  lang?: Lang;
};
