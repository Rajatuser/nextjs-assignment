
const InvoicesPage = () => {
    const invoices = [
        {
          id: 1,
          invoiceNumber: 'INV-2022001',
          date: '2022-01-15',
          client: 'ABC Company',
          total: 500.00,
          status: 'Paid',
        },
        {
          id: 2,
          invoiceNumber: 'INV-2022002',
          date: '2022-02-01',
          client: 'XYZ Corporation',
          total: 750.00,
          status: 'Pending',
        },
        {
          id: 3,
          invoiceNumber: 'INV-2022003',
          date: '2022-03-10',
          client: '123 Industries',
          total: 1200.00,
          status: 'Due',
        },
        // Add more invoices as needed
      ];
    
  
    return (
      <div className="container mx-auto my-10">
        <h1 className="text-3xl font-semibold mb-6">Invoices</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">
                <span className="text-gray-600">Invoice Number:</span>
                <p className="text-gray-800 font-semibold">{invoice.invoiceNumber}</p>
              </div>
              <div className="mb-4">
                <span className="text-gray-600">Date:</span>
                <p className="text-gray-800">{invoice.date}</p>
              </div>
              <div className="mb-4">
                <span className="text-gray-600">Client:</span>
                <p className="text-gray-800">{invoice.client}</p>
              </div>
              <div className="mb-4">
                <span className="text-gray-600">Total:</span>
                <p className="text-gray-800 font-semibold">${invoice.total.toFixed(2)}</p>
              </div>
              <div>
                <span className="text-gray-600">Status:</span>
                <p className={`text-${invoice.status === 'Paid' ? 'green' : 'orange'}-600 font-semibold`}>{invoice.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default InvoicesPage;