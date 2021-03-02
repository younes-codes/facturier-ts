import { HasHtmlFormat } from "../interfaces/HasHTMLFormat";
import { HasRender } from "../interfaces/HasRender";
import { Storage } from "../classes/Storage.js";

export class Display implements HasRender {
  formContainer: HTMLDivElement;
  constructor(
    private container: HTMLDivElement,
    private hiddenDiv: HTMLDivElement,
    private btnPrint: HTMLButtonElement
  ) {
    this.formContainer = document.getElementById(
      "form-container"
    ) as HTMLDivElement;
  }
  render(docObject: HasHtmlFormat, docType: string) {
    const htmlString: string = docObject.htmlFormat();
    this.container.innerHTML = htmlString;

    new Storage(docType, htmlString);

    if (docType === "invoice") {
      this.btnPrint.innerHTML = "Imprimer la facture";
    } else {
      this.btnPrint.innerHTML = "Imprimer le devis";
    }
    this.hiddenDiv.classList.remove("invisible");
    this.formContainer.innerHTML = "";
  }
}
