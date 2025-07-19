"use client";
import React from "react";
import TaskTile from "./TaskTile";
import TaskPopup from "./TaskPopup";
import { useModalStore } from "../store/store";

type Props = {
  currentWeek: {
    days: {
      id: string | number;
      date: string;
      tasks: {
        id: string | number;
        name: string;
        hours: number;
        project: string;
        description: string;
      }[];
    }[];
  };
};

const TableSheet = (props: Props) => {
  const { setShowModal, setNewTask } = useModalStore();
  return (
    <React.Fragment>
      {props.currentWeek.days.map((day) => (
        <div
          key={day.id}
          className="grid grid-cols-12 gap-[20px] max-md:gap-[6px]"
        >
          <div className="col-span-2 max-md:col-span-full text-[#6B7280] font-[400] text-[14px]">
            <p className="text-[#111928] font-[600] text-[18px] leading-[150%]">
              {new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
              }).format(new Date(day.date))}
            </p>
          </div>
          <div className="col-span-10 max-md:col-span-full flex flex-col gap-[10px]">
            {day.tasks.map((task) => (
              <React.Fragment key={task.id}>
                <TaskTile
                  task={{
                    id: task.id.toString(),
                    name: task.name,
                    hours: task.hours,
                    project: task.project,
                    description: task.description,
                  }}
                />
              </React.Fragment>
            ))}
            <button
              onClick={(e) => {
                setShowModal(true);
                setNewTask({
                  id: "",
                  name: "",
                  hours: 0,
                  project: "",
                  description: "",
                });
                document.body.style.overflow = "hidden";
              }}
              className="flex items-center justify-center p-[12px] border border-[#1A56DB] bg-[#E1EFFE] border-dashed rounded-lg cursor-pointer"
            >
              <p className="text-[#1A56DB] font-[500] text-[16px]">
                + Add new task
              </p>
            </button>
            <TaskPopup />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default TableSheet;
