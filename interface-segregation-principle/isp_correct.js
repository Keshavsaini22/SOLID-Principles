class Printer {
    print(document) { throw new Error(); }
}

class Scanner {
    scan(document) { throw new Error(); }
}

class Fax {
    fax(document) { throw new Error(); }
}

// Client: a simple printer implements only the Printer interface
class SimplePrinter extends Printer {
    print(doc) {
        console.log('Printing:', doc);
    }
}

// Client: a scanner implements only the Scanner interface
class SimpleScanner extends Scanner {
    scan(doc) {
        console.log('Scanning:', doc);
    }
}

// Client: a fax machine implements only the Fax interface
class SimpleFax extends Fax {
    fax(doc) {
        console.log('Faxing:', doc);
    }
}

// Client: a multi-function device implements multiple interfaces
class MultiFunctionDevice extends Printer {

    constructor(printer, scanner, fax) {
        super();
        this.printer = printer;
        this.scanner = scanner;
        this.fax = fax;
    }

    print(doc) {
        this.printer.print(doc);
    }

    scan(doc) {
        this.scanner.scan(doc);
    }

    fax(doc) {
        this.fax.fax(doc);
    }
}

const myPrinter = new SimplePrinter();
myPrinter.print('My Document');

// Usage of MultiFunctionDevice
const myScanner = new SimpleScanner();
const myFax = new SimpleFax();
const myMFD = new MultiFunctionDevice(myPrinter, myScanner, myFax);
myMFD.print('My Document');
myMFD.scan('My Document');
myMFD.fax('My Document');