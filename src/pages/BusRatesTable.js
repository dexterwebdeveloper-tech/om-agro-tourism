


import React from "react";

const BusRatesTable = () => {
  const ratesData = [
    {
      seater: "SWIFT DESIRE",
      mumbai: "4+1",
      mahabaleshwar: "13",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "AURA",
      mumbai: "4+1",
      mahabaleshwar: "13",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "TOYOTA ETIOS",
      mumbai: "4+1",
      mahabaleshwar: "14",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "ERITGA",
      mumbai: "6+1",
      mahabaleshwar: "15",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "INNOVA",
      mumbai: "6+1",
      mahabaleshwar: "18",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
        {
      seater: "KIA Carens",
      mumbai: "6+1/7+1",
      mahabaleshwar: "17/KM & 18/KM",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "SCORPIO",
      mumbai: "8+1",
      mahabaleshwar: "18",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "INNOVA CRYSTA",
      mumbai: "6+1",
      mahabaleshwar: "21",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "AUDI",
      mumbai: "4+1",
      mahabaleshwar: "ON CALL",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "TEMPO TRAVELLER",
      mumbai: "13/17 SEATER",
      mahabaleshwar: "ON CALL",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "MINI BUS",
      mumbai: "20 SEATER",
      mahabaleshwar: "ON CALL",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    {
      seater: "BUS",
      mumbai: "32-52",
      mahabaleshwar: "ON CALL",
      specialPermitNumber: "917066665554",
      driver: "Extra",
      parking: "Extra",
    },
    // {
    //   seater: "TAVERA",
    //   mumbai: "8+1",
    //   mahabaleshwar: "18",
    //   specialPermitNumber: "917066665554",
    //   driver: "Extra",
    //   parking: "Extra",
    // },

  ];

  const handleWhatsAppClick = (number, vehicle) => {
    const message = `Hi, I would like to inquire about the rates for the ${vehicle}.`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const formatRate = (rate) => {
    if (rate === "ON CALL") {
      return (
        <span className="onCall">
          On Call
        </span>
      );
    }

    if (rate.includes("17/KM & 18/KM")) {
      return (
        <>
          <span className="rupee">₹17</span>
          <span className="perKm">/KM</span>
          <span className="rateDivider">&</span>
          <span className="rupee">₹18</span>
          <span className="perKm">/KM</span>
        </>
      );
    }

    return (
      <>
        <span className="rupee">₹{rate}</span>
        <span className="perKm">/KM</span>
      </>
    );
  };

  return (
    <>
      <style>{`
        .busRatesSection {
          width: 100%;
          padding: 45px 15px;
          background:
            radial-gradient(circle at top right, rgba(240, 99, 56, 0.12), transparent 30%),
            radial-gradient(circle at bottom left, rgba(79, 42, 20, 0.10), transparent 30%),
            #fffaf7;
          font-family: Arial, sans-serif;
        }

        .busRatesContainer {
          max-width: 1250px;
          margin: auto;
        }

        .ratesHeader {
          text-align: center;
          margin-bottom: 30px;
        }

        .ratesBadge {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 30px;
          background: #1A2B58;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .ratesTitle {
          margin: 0;
          color: #1A2B58;
          font-size: 34px;
          font-weight: 800;
        }

        .ratesTitle span {
          color: #D91F35;
        }

        .ratesSubtitle {
          margin-top: 8px;
          color: #806b5e;
          font-size: 15px;
        }

        .tableCard {
          background: white;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(79, 42, 20, 0.12);
          box-shadow: 0 15px 45px rgba(79, 42, 20, 0.12);
        }

        .tableResponsive {
          width: 100%;
          overflow-x: auto;
        }

        .busTable {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
        }

        .busTable thead {
          background: #1A2B58;
        }

        .busTable th {
          padding: 18px 15px;
          color: white;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          text-align: center;
          white-space: nowrap;
        }

        .busTable th:first-child {
          text-align: left;
          padding-left: 25px;
        }

        .busTable tbody tr {
          transition: all 0.25s ease;
          border-bottom: 1px solid #f1e6df;
        }

        .busTable tbody tr:last-child {
          border-bottom: none;
        }

        .busTable tbody tr:nth-child(even) {
          background: #fff8f4;
        }

        .busTable tbody tr:hover {
          background: #fff0e9;
          transform: scale(1.002);
          box-shadow: 0 4px 15px rgba(240, 99, 56, 0.10);
        }

        .busTable td {
          padding: 15px;
          text-align: center;
          color: #1A2B58;
          font-size: 14px;
          font-weight: 500;
        }

        .busTable td:first-child {
          text-align: left;
          padding-left: 25px;
        }

        .vehicleName {
          display: flex;
          align-items: center;
          gap: 11px;
          font-weight: 800;
          color: #1A2B58;
        }

        .vehicleIcon {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            #D91F35,
            #ff8a5c
          );
          color: white;
          font-size: 17px;
          box-shadow: 0 5px 12px rgba(240, 99, 56, 0.25);
        }

        .seaterBadge {
          display: inline-block;
          padding: 7px 12px;
          border-radius: 20px;
          background: #f8e7dd;
          color: #1A2B58;
          font-weight: 700;
          font-size: 12px;
        }

        .rateBox {
          display: inline-flex;
          align-items: baseline;
          gap: 2px;
          padding: 7px 12px;
          border-radius: 10px;
          background: #fff0e9;
          border: 1px solid #ffd7c7;
        }

        .rupee {
          color: #D91F35;
          font-size: 17px;
          font-weight: 800;
        }

        .perKm {
          color: #1A2B58;
          font-size: 10px;
          font-weight: 700;
        }

        .rateDivider {
          color: #b18c78;
          margin: 0 5px;
          font-weight: bold;
        }

        .onCall {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 20px;
          background: #1A2B58;
          color: white;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .extraBadge {
          color: #1A2B58;
          font-size: 12px;
          font-weight: 700;
        }

        .bookButton {
          border: none;
          cursor: pointer;
          padding: 10px 17px;
          border-radius: 10px;
          background: linear-gradient(
            135deg,
            #D91F35,
            #e84e22
          );
          color: white;
          font-size: 12px;
          font-weight: 800;
          transition: all 0.25s ease;
          box-shadow: 0 6px 15px rgba(240, 99, 56, 0.25);
        }

        .bookButton:hover {
          transform: translateY(-2px);
          background: #1A2B58;
          box-shadow: 0 8px 18px rgba(79, 42, 20, 0.25);
        }

        .bookButton:active {
          transform: scale(0.96);
        }

        .ratesFooter {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
          color: #806b5e;
          font-size: 12px;
        }

        .dot {
          color: #D91F35;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .busRatesSection {
            padding: 30px 10px;
          }

          .ratesTitle {
            font-size: 27px;
          }

          .ratesSubtitle {
            font-size: 13px;
          }

          .tableCard {
            border-radius: 15px;
          }

          .busTable th {
            padding: 14px 10px;
          }

          .busTable td {
            padding: 12px 10px;
          }

          .busTable td:first-child {
            padding-left: 15px;
          }

          .vehicleIcon {
            width: 32px;
            height: 32px;
          }

          .vehicleName {
            font-size: 12px;
          }
        }
      `}</style>

      <section className="busRatesSection">
        <div className="busRatesContainer">

          <div className="ratesHeader">
            <div className="ratesBadge">
              🚗 Premium Travel
            </div>

            <h2 className="ratesTitle">
              Our <span>Vehicle Rates</span>
            </h2>

            <p className="ratesSubtitle">
              Comfortable & reliable vehicles for your journey
            </p>
          </div>

          <div className="tableCard">
            <div className="tableResponsive">
              <table className="busTable">
                <thead>
                  <tr>
                    <th>Vehicle</th>
                    <th>Seater</th>
                    <th>Per KM</th>
                    <th>Driver Food</th>
                    <th>Toll / Parking</th>
                    <th>Book Now</th>
                  </tr>
                </thead>

                <tbody>
                  {ratesData.map((row, index) => (
                    <tr key={index}>

                      <td>
                        <div className="vehicleName">
                          <div className="vehicleIcon">
                            🚘
                          </div>
                          {row.seater}
                        </div>
                      </td>

                      <td>
                        <span className="seaterBadge">
                          {row.mumbai}
                        </span>
                      </td>

                      <td>
                        <div className="rateBox">
                          {formatRate(row.mahabaleshwar)}
                        </div>
                      </td>

                      <td>
                        <span className="extraBadge">
                          🍴 {row.driver}
                        </span>
                      </td>

                      <td>
                        <span className="extraBadge">
                          🅿️ {row.parking}
                        </span>
                      </td>

                      <td>
                        <button
                          className="bookButton"
                          onClick={() =>
                            handleWhatsAppClick(
                              row.specialPermitNumber,
                              row.seater
                            )
                          }
                        >
                          Book Now ↗
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="ratesFooter">
            <span>✓ Best Rates</span>
            <span className="dot">•</span>
            <span>✓ Comfortable Vehicles</span>
            <span className="dot">•</span>
            <span>✓ Easy Booking</span>
          </div>

        </div>
      </section>
    </>
  );
};

export default BusRatesTable;
