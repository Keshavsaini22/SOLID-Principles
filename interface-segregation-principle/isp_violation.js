// “Fat” interface simulation via an abstract class
class MultiFunctionDevice {
    print(doc) { throw new Error(); }
    scan(doc) { throw new Error(); }
    fax(doc) { throw new Error(); }
}

// Client: a simple printer must implement all methods
class SimplePrinter extends MultiFunctionDevice {
    print(doc) {
        console.log('Printing:', doc);
    }
    scan(doc) {
        // Not supported, but forced to implement
        throw new Error('Scan not supported');
    }
    fax(doc) {
        // Not supported, but forced to implement
        throw new Error('Fax not supported');
    }
}

// Issue: SimplePrinter carries unused scanning and fax methods, violating ISP