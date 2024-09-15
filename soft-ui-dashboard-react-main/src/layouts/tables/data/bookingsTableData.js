

const bookingsTableData = {
    columns: [
      {
        Header: "Booking ID",
        accessor: "id",
      },
      {
        Header: "Customer Name",
        accessor: "customerName",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    rows: [
      {
        id: "BK001",
        customerName: "John Doe",
        date: "2024-09-10",
        time: "14:00",
        status: "Confirmed",
      },
      {
        id: "BK002",
        customerName: "Jane Smith",
        date: "2024-09-11",
        time: "09:00",
        status: "Pending",
      },
      {
        id: "BK003",
        customerName: "Alice Johnson",
        date: "2024-09-12",
        time: "11:30",
        status: "Cancelled",
      },
      // Add more booking rows as needed
    ],
  };
  
  export default bookingsTableData;
  