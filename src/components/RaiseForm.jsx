import { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RaiseForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [annualSalary, setAnnualSalary] = useState(75000);
  const [biweeklySalary, setBiweeklySalary] = useState(2885);
  const [raise, setRaise] = useState(0);
  const [numberOfPayPeriods, setNumberOfPayPeriods] = useState(22);
  const [raisRate, setRaiseRate] = useState(0.0816);

  const handleChange = (event) => {
    setAnnualSalary(event.target.value);
    setBiweeklySalary(event.target.value / 26);
  };

  const handleBiweeklyChange = (event) => {
    setBiweeklySalary(event.target.value);
    setAnnualSalary(event.target.value * 26);
  }

  const handlePayPeriodsChange = (event) => {
    setNumberOfPayPeriods(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setRaise(annualSalary * 0.0816);
  };

  const retroAmount = (raise / 52) * numberOfPayPeriods;

  return (
    <div className="font-bold">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-xl gap-y-2"
        action=""
      >
        <label htmlFor="salary">Annual</label>
        <input
          className="text-black p-1 rounded-md"
          type="number"
          name="annualSalary"
          id="annualSalary"
          value={annualSalary}
          onChange={handleChange}
        />
        <label htmlFor="salary">Biweekly</label>
        <input
          className="text-black p-1 rounded-md"
          type="number"
          name="biweeklySalary"
          id="biweeklySalary"
          value={biweeklySalary}
          onChange={handleBiweeklyChange}
        />
        <label htmlFor="salary">Pay Periods Since Raise 01/01/2023</label>
        <input
          className="text-black p-1 rounded-md"
          type="number"
          name="number_of_pay_periods"
          id="number_of_pay_periods"
          value={numberOfPayPeriods}
          onChange={handlePayPeriodsChange}
        />

        <button className="bg-blue-900 p-2 rounded-lg" type="submit">
          Calculate
        </button>
      </form>
      <div>
        <div>{"Total Increase to Current Annual Salary: "}</div>
        <div className="bg-white text-black">$ {raise}</div>
      </div>
      <div>
        <div>{`Total Retro Payment after ${numberOfPayPeriods} Pay Periods since 01/01/2023 : `}</div>
        <div className="bg-white text-black">{retroAmount}</div>
      </div>
    </div>
  );
}

export default RaiseForm;
