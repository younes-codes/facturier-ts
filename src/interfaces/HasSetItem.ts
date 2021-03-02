import { HasHtmlFormat } from "./HasHTMLFormat";

export interface HasSetItem {
  setItem(typeVal: string, htmlString: string): void;
}
