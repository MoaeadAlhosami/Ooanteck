import React from "react";
import ShiftForm from "./ShiftForm";
import CalendarComponent from "./Calendar";

const MainPage = () => {
  return (
    <div className="max-w-full h-[200vh] p-10 bg-white shadow-md rounded-lg mx-auto flex flex-col gap-10">
      {/* form */}
      <ShiftForm />
      {/* calender */}
      <CalendarComponent />
    </div>
  );
};
export default MainPage;
