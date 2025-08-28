// Concrete Classes
class PdfReport {
  generate() {
    return "Relatório em PDF gerado!";
  }
}

class PdfInvoice {
  generate() {
    return "Fatura em PDF gerada!";
  }
}

class DocxReport {
  generate() {
    return "Relatório em DOCX gerado!";
  }
}

class DocxInvoice {
  generate() {
    return "Fatura em DOCX gerada!";
  }
}

// Abstract Factory
class DocumentFactory {
  createReport() {
    throw new Error("Método createReport deve ser implementado");
  }

  createInvoice() {
    throw new Error("Método createInvoice deve ser implementado");
  }
}

// Concrete Factories
class PdfFactory extends DocumentFactory {
  createReport() {
    return new PdfReport();
  }

  createInvoice() {
    return new PdfInvoice();
  }
}

class DocxFactory extends DocumentFactory {
  createReport() {
    return new DocxReport();
  }

  createInvoice() {
    return new DocxInvoice();
  }
}

// Client Code
const factories = {
  pdf: new PdfFactory(),
  docx: new DocxFactory(),
};

class FileApp {
  cosntructor(factory) {
    this.invoice = factory.createInvoice();
    this.report = factory.createReport();
  }

  showDocuments() {
    console.log('Invoices: ', this.invoice.generate());
    console.log('Reports: ',this.report.generate());
  }
}

// Usage
function main(factoryType) {
  const factory = factories[factoryType];
 
  if (!factory) {
    console.error("Tipo de fábrica inválido");
    return;
  }

  const app = new FileApp(factory);
  app.showDocuments();
}

main("pdf");
main("docx");