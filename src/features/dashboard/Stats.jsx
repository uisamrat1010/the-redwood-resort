import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  //1. num of bookings
  const numBoookings = bookings.length;

  //2. Total sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3. Total checkins
  const checkins = confirmedStays.length;

  //4.Occupancy rate
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  //console.log(occupation);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        value={numBoookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check-ins"
        color="indigo"
        value={checkins}
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        value={Math.round(occupation * 100) + "%"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Stats;
