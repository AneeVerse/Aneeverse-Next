import Image from "next/image";

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
                className="border border-black bg-gray-100 text-left px-4 py-3 text-sm font-semibold text-gray-800"
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
                style={{textAlign: `${col === "Feature" ? "left" : "center"}`}}
                  key={colIndex}
                  className="border border-black px-4 py-3  text-gray-700 text-sm"
                >
                    {col === "Feature" ? (
                        <>
                        <h3 className="font-semibold text-xl text-gray-800">
                            {row.firstColumn.title}
                        </h3>
                        <p className="text-gray-600">{row.firstColumn.content}</p>
                        </>
                    ) : (
                        row[col] === true ? (
                        <span className="text-green-500 text-bold text-3xl">✓</span>
                        ) : row[col] === false ? (
                        <span className="text-red-500 text-lg">❌</span>
                        ) : (
                        <span className="text-xl">{row[col]}</span>
                        )
                    )}
                    
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
      firstColumn:{
        title: "Quality",
        content: "Superior design with consistent brand standards and professional execution."
      },
    "Content Beta": true,
    "In-House Team": true,
    "Creative Agencies": true,
    Freelancers: true,
    "Self-Service Tools": false,
  },
  {
      firstColumn:{
        title: "Cost-effectiveness",
        content: "Polished, agency-grade creative work at the fraction of the cost."
      },
    "Content Beta": "$$",
    "In-House Team": "$$$",
    "Creative Agencies": "$$$$",
    Freelancers: "$$",
    "Self-Service Tools": "$",
  },
  {
    
    firstColumn:{
        title: "Content Beta",
        content: "24 hour turnaround for most projects."
    },
    "Content Beta": true,
    "In-House Team": false,
    "Creative Agencies": false,
    Freelancers: false,
    "Self-Service Tools": true,
  },
  {
    firstColumn:{

        title: "Scalability",
        content: "Scale your on-demand team's bandwidth based on your needs.",
    },
    "Content Beta": true,
    "In-House Team": true,
    "Creative Agencies": false,
    Freelancers: true,
    "Self-Service Tools": true,
  },
  {
      firstColumn:{
        title: "Video-first",
        content:
          "Prioritizes video content over other media for engaging audiences.",
        },

    "Content Beta": true,
    "In-House Team": true,
    "Creative Agencies": false,
    Freelancers: true,
    "Self-Service Tools": true,
  },
  {
      firstColumn:{
        title: "Strategic",
        content:
          "Helps you deliver business impact and align with your marketing strategy.",
        },

    "Content Beta": true,
    "In-House Team": true,
    "Creative Agencies": false,
    Freelancers: false,
    "Self-Service Tools": false,
  },
];

const tableColumns = [
  "Feature",
  "Content Beta",
  "In-House Team",
  "Creative Agencies",
  "Freelancers",
  "Self-Service Tools",
];

export default function ComparisonPage() {
  return (
    <div className="relative hidden sm:block">
      <Image
        src="/images/home/table-bg.webp"
        alt="Table Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 -z-10"
      />
      <div className="max-w-7xl mx-auto p-12">
        <h1 className="text-2xl font-bold text-center mb-4">
          Is Content Beta same as Traditional Outsourcing?
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We are revolutionizing B2B Marketing by Balancing Quality, Speed, and
          Cost of Creative Production.
        </p>
        <ComparisonTable data={tableData} columns={tableColumns} />
      </div>
    </div>
  );
}
