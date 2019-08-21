import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatCardNumber"
})
export class FormatCardNumberPipe implements PipeTransform {
  transform(value: string): string {
    if (value === null) return;
    return formatNumber(value);
  }
}
const formatNumber = value => {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
};
