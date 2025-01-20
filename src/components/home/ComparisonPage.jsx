const ComparisonTable = ({ data, columns }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          {/* Table Header */}
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="border border-gray-300 bg-gray-100 text-left px-4 py-2 text-sm font-semibold text-gray-800"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
  
          {/* Table Body */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-300 px-4 py-2 text-gray-700 text-sm"
                  >
                    {typeof row[col] === "string" || typeof row[col] === "number"
                      ? row[col]
                      : row[col] === true
                      ? "✔️"
                      : "❌"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  // Mock Data for Table
  const tableData = [
    {
      Feature: "Quality",
      Description:
        "Superior design with consistent brand standards and professional execution.",
      "Content Beta": true,
      "In-House Team": true,
      "Creative Agencies": true,
      Freelancers: true,
      "Self-Service Tools": false,
    },
    {
      Feature: "Cost-effectiveness",
      Description:
        "Polished, agency-grade creative work at the fraction of the cost.",
      "Content Beta": "$$",
      "In-House Team": "$$$",
      "Creative Agencies": "$$$$",
      Freelancers: "$$",
      "Self-Service Tools": "$",
    },
    {
      Feature: "Fast Turnaround",
      Description: "24 hour turnaround for most projects.",
      "Content Beta": true,
      "In-House Team": false,
      "Creative Agencies": false,
      Freelancers: false,
      "Self-Service Tools": true,
    },
    {
      Feature: "Scalability",
      Description:
        "Scale your on-demand team's bandwidth based on your needs.",
      "Content Beta": true,
      "In-House Team": true,
      "Creative Agencies": false,
      Freelancers: true,
      "Self-Service Tools": true,
    },
    {
      Feature: "Video-first",
      Description: "Prioritizes video content over other media for engaging audiences.",
      "Content Beta": true,
      "In-House Team": true,
      "Creative Agencies": false,
      Freelancers: true,
      "Self-Service Tools": true,
    },
    {
      Feature: "Strategic",
      Description:
        "Helps you deliver business impact and align with your marketing strategy.",
      "Content Beta": true,
      "In-House Team": true,
      "Creative Agencies": false,
      Freelancers: false,
      "Self-Service Tools": false,
    },
  ];
  
  const tableColumns = [
    "Feature",
    "Description",
    "Content Beta",
    "In-House Team",
    "Creative Agencies",
    "Freelancers",
    "Self-Service Tools",
  ];
  
  export default function ComparisonPage() {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Is Content Beta same as Traditional Outsourcing?
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We are revolutionizing B2B Marketing by Balancing Quality, Speed, and
          Cost of Creative Production.
        </p>
        <ComparisonTable data={tableData} columns={tableColumns} />
      </div>
    );
  }
  