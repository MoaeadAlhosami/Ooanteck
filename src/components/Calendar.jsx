// import React, { useState } from "react";
// import { Modal, Button, TimePicker } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";
// import customParseFormat from "dayjs/plugin/customParseFormat";
// dayjs.extend(customParseFormat);

// const Calendar = () => {
//   const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
//   const hours = Array.from({ length: 13 }, (_, i) => 7 + i);

//   const [selectedDay, setSelectedDay] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [events, setEvents] = useState([]);
//   const [eventType, setEventType] = useState("");
//   const [startTime, setStartTime] = useState(null);
//   const [endTime, setEndTime] = useState(null);

//   const handleDayClick = (day) => {
//     setSelectedDay(day);
//   };

//   const showModal = (type) => {
//     setEventType(type);
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     if (startTime && endTime) {
//       const newEvent = {
//         day: selectedDay,
//         start: startTime,
//         end: endTime,
//         type: eventType,
//       };
//       setEvents([...events, newEvent]);
//       setIsModalVisible(false);
//       setStartTime(null);
//       setEndTime(null);
//       setSelectedDay(null);
//     }
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const handleTimeChange = (time, _, isStart) => {
//     if (isStart) {
//       setStartTime(time);
//     } else {
//       setEndTime(time);
//     }
//   };

//   const getEventStyle = (event, currentHour) => {
//     const eventStartHour = event.start.hour();
//     const eventEndHour = event.end.hour();

//     if (currentHour === eventStartHour) {
//       return {
//         backgroundColor: event.type === "holiday" ? "#f6d6d6" : "#d6f6d6",
//         borderLeft: `4px solid ${
//           event.type === "holiday" ? "#ff9999" : "#66cc66"
//         }`,
//         height: `${(eventEndHour - eventStartHour) * 100}%`,
//       };
//     }
//     return {};
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-end space-x-4 mb-4">
//         <Button
//           type="primary"
//           onClick={() => showModal("holiday")}
//           className="bg-blue-100 text-blue-500 flex items-center rounded-full px-4 py-3 hover:bg-blue-200"
//           icon={<PlusOutlined />}
//         >
//           Add Holiday
//         </Button>
//         <Button
//           type="primary"
//           onClick={() => showModal("work")}
//           className="bg-blue-500 text-white flex items-center rounded-full px-4 py-3 hover:bg-blue-600"
//           icon={<PlusOutlined />}
//         >
//           Add Work Time
//         </Button>
//       </div>

//       <div className="grid grid-cols-8 border border-gray-300 rounded-2xl">
//         <div className="border-r border-gray-300 p-2"></div>
//         {days.map((day) => (
//           <div
//             key={day}
//             className={`border-r border-gray-300 p-2 font-semibold text-center cursor-pointer ${
//               selectedDay === day ? "bg-blue-100" : ""
//             }`}
//             onClick={() => handleDayClick(day)}
//           >
//             {day}
//           </div>
//         ))}

//         {hours.map((hour) => (
//           <React.Fragment key={hour}>
//             <div className="border-t border-gray-300 p-2 text-right">{`${hour} ${
//               hour < 12 ? "AM" : "PM"
//             }`}</div>
//             {days.map((day) => (
//               <div
//                 key={`${day}-${hour}`}
//                 className="relative border-t border-r border-gray-300 p-2 h-12 cursor-pointer"
//                 onClick={() => handleDayClick(day)}
//               >
//                 {events
//                   .filter(
//                     (event) =>
//                       event.day === day &&
//                       event.start.hour() <= hour &&
//                       event.end.hour() > hour
//                   )
//                   .map((event, index) => (
//                     <div
//                       key={index}
//                       className="absolute inset-0 bg-opacity-20 p-2 text-xs rounded"
//                       style={getEventStyle(event, hour)}
//                     >
//                       {hour === event.start.hour() && (
//                         <>
//                           {`Start Time: ${event.start.format("h:mm A")}`}
//                           <br />
//                           {`End Time: ${event.end.format("h:mm A")}`}
//                         </>
//                       )}
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>

//       <Modal
//         title={eventType === "holiday" ? "Add Holiday" : "Add Work Time"}
//         visible={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         okText="Apply"
//         cancelText="Cancel"
//       >
//         <div className="space-y-4">
//           <div>
//             <label className="block mb-2">Start Time:</label>
//             <TimePicker
//               format="h:mm A"
//               value={startTime}
//               onChange={(time, timeString) =>
//                 handleTimeChange(time, timeString, true)
//               }
//             />
//           </div>
//           <div>
//             <label className="block mb-2">End Time:</label>
//             <TimePicker
//               format="h:mm A"
//               value={endTime}
//               onChange={(time, timeString) =>
//                 handleTimeChange(time, timeString, false)
//               }
//             />
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

import React, { useEffect, useRef } from "react";
import "../bryntum/resources/calendar.stockholm.css";
import { Calendar } from "../bryntum/build/calendar.module.js";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const CalendarComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const calendar = new Calendar({
      date: new Date(2024, 0, 1),
      crudManager: {
        eventStore: {
          fields: [{ name: "room" }],
        },
        transport: {
          load: {
            url: "/data/data.json",
          },
        },
        autoLoad: true,
      },
      height: "100%",
      appendTo: containerRef.current,
      sidebar: null,
      mode: "week",
      modeSelector: false,
      features: {
        eventEdit: {
          items: {
            roomSelector: {
              name: "location",
              type: "textfield",
              label: "Location",
              weight: 110,
            },
            exportButton: {
              type: "button",
              icon: "b-fa b-fa-calendar-alt",
              text: "Add to Outlook (.ics)",
              weight: 900,
              onClick() {
                const eventRecord = calendar.features.eventEdit.eventRecord;
                eventRecord.exportToICS({
                  LOCATION: eventRecord.location,
                });
              },
            },
          },
        },
      },
    });

    return () => {
      if (calendar) calendar.destroy();
    };
  }, []);

  const showModal = (type) => {
    if (type === "holiday") {
      console.log("Add Holiday Modal Triggered");
    } else if (type === "work") {
      console.log("Add Work Time Modal Triggered");
    }
  };

  return (
    <div>
      <style>
        {`
          .b-calendar .b-toolbar {
            display: none;
          }

          .custom-container {
            border: 1px solid #d1d1d1;
            border-radius: 30px;
            padding: 2rem;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .custom-header {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 1rem;
          }

          .custom-header button {
            margin-left: 1rem;
          }
        `}
      </style>

      <div className="custom-container">
        <div className="custom-header">
          <Button
            type="primary"
            onClick={() => showModal("holiday")}
            className="bg-blue-100 text-blue-500 flex items-center rounded-full px-4 py-3 hover:bg-blue-200"
            icon={<PlusOutlined />}
          >
            Add Holiday
          </Button>
          <Button
            type="primary"
            onClick={() => showModal("work")}
            className="bg-blue-500 text-white flex items-center rounded-full px-4 py-3 hover:bg-blue-600"
            icon={<PlusOutlined />}
          >
            Add Work Time
          </Button>
        </div>

        <div ref={containerRef} id="container"></div>
      </div>
    </div>
  );
};

export default CalendarComponent;
