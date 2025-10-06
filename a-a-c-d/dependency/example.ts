class TextDocument {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

class DocumentPrinter {
  print(document: TextDocument): void {
    console.log(`Printing: ${document.getContent()}`);
  }
}

// Printer ─────▶ Document
