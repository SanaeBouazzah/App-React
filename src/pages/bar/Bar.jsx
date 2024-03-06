import BarChart from "./BarChart";
import Header from "../../components/Header";

export default function Bar() {
  return (
    <div>
      <Header title={"Bar Chart"} subtitle={"The minimum wage in Germany, France and Spain (EUR/month)"} />
      <BarChart />
    </div>
  )
}
