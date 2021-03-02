import { HasHtmlFormat } from "./HasHTMLFormat";

export interface HasRender {
  render(docObject: HasHtmlFormat, docType: string): void;
}
