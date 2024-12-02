import Image from "next/image";
import BackHeader from "../components/BackHeader";
import BottomBar from "../components/BottomBar";

export default function AddMoneyPage() {
  const marginList = {
    Prepaid: [
      {
        label: "Airtel",
        icUrl: "https://app.billhub.in/operators/airtel.png",
        margin: 5.3,
        marginType: "Percent",
        type: "Flat",
      },
      {
        label: "Jio",
        icUrl: "https://app.billhub.in/operators/jio.png",
        margin: 5.3,
        marginType: "Percent",
        type: "Flat",
      },
      {
        label: "Voda Idea",
        icUrl: "https://app.billhub.in/operators/vi.png",
        margin: 5.3,
        marginType: "Percent",
        type: "Flat",
      },
    ],
    DTH: [
      {
        label: "Airtel",
        icUrl:
          "https://rechargediscount.in/assets/images/operators/logo_airtel.png",
        margin: 5.3,
        marginType: "Percent",
        type: "Flat",
      },
      {
        label: "Jio",
        icUrl: "https://app.billhub.in/operators/jio.png",
        margin: 5.3,
        marginType: "Percent",
        type: "Flat",
      },
      {
        label: "Voda Idea",
        icUrl: "https://app.billhub.in/operators/vi.png",
        margin: 5.3,
        marginType: "Percent",
        type: "Flat",
      },
    ],
    Others: [
      {
        label: "Electricity",
        icUrl:
          "https://rechargediscount.in/assets/images/operators/logo_airtel.png",
        margin: 5.3,
        marginType: "Percent",
        type: "Flat",
      },
      {
        label: "Google Pay",
        icUrl: "https://app.billhub.in/operators/jio.png",
        margin: 5.3,
        marginType: "Percent",
        type: "Flat",
      },
      {
        label: "Voda Idea",
        icUrl: "https://app.billhub.in/operators/vi.png",
        margin: 5.3,
        marginType: "Percent",
        type: "Flat",
      },
    ],
  };

  return (
    <div className="pb-20">
      <BackHeader title="Add Money" />

      <div className="p-2">
        {Object.entries(marginList).map(
          ([services, operators], categoryIndex) => (
            <div key={categoryIndex}>
              <p className="font-bold text-md my-2">{services}</p>

              {operators.map((operator, index) => (
                <div
                  key={index}
                  className="my-2 px-4 py-2 flex gap-3 items-center rounded-md dark:bg-black border-b border-gray-300 border-opacity-50 shadow-md"
                >
                  <Image
                    className="object-scale-down"
                    width={30}
                    height={30}
                    src={operator.icUrl}
                    alt=""
                  />

                  <div>
                    <p className="font-bold mb-1 text-sm">{operator.label}</p>
                    <p className="text-xs">Flat Commission</p>
                  </div>
                  <p className="ml-auto text-sm font-bold text-[var(--primary)]">
                    1.50 %
                  </p>
                </div>
              ))}
            </div>
          )
        )}
      </div>

      <BottomBar />
    </div>
  );
}
