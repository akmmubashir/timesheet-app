"use client";
import React from "react";
import { useModalStore } from "../store/store";

type Props = {};

const TaskPopup = (props: Props) => {
  const { showModal, setShowModal, newTask, setNewTask } = useModalStore();
  console.log(newTask);
  return (
    <React.Fragment>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000032] max-md:p-[20px_20px]">
          <div className="bg-white rounded-lg md:min-w-[560px] max-md:w-full shadow-lg space-y-4 relative">
            <div className="p-[20px] border-b border-[#E5E7EB] flex justify-between items-center">
              <h2 className="text-[18px] font-[600] text-[#111928]">
                Add New Entry
              </h2>
              <button
                onClick={(e) => {
                  setShowModal(false);
                  document.body.style.overflow = "auto";
                }}
                className="text-[#6B7280] font-[500] text-[16px] cursor-pointer"
              >
                x
              </button>
            </div>

            <div className="flex flex-col gap-3 p-[0px_20px]">
              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-[500] text-[#111928]">
                  Project Name *
                </label>
                <div className="w-[60%] max-md:w-full p-[6px_8px] border border-[#D1D5DB] rounded-[8px] focus-within:border-[#1A56DB]">
                  <select
                    value={newTask.name}
                    onChange={(e) =>
                      setNewTask({ ...newTask, name: e.target.value })
                    }
                    className="outline-none w-full h-full text-[14px] font-[500] text-[#6B7280]"
                  >
                    <option value="">Select project</option>
                    <option value="Landing page">Landing page</option>
                    <option value="Homepage Development">
                      Homepage Development
                    </option>
                    <option value="Dashboard">Dashboard</option>
                    <option value="CRM Panel">CRM Panel</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-[500] text-[#111928]">
                  Type of Work *
                </label>
                <div className="w-[60%] max-md:w-full p-[6px_8px] border border-[#D1D5DB] rounded-[8px] focus-within:border-[#1A56DB]">
                  <select
                    value={newTask.project}
                    onChange={(e) =>
                      setNewTask({ ...newTask, project: e.target.value })
                    }
                    className="outline-none w-full h-full text-[14px] font-[500] text-[#6B7280]"
                  >
                    <option value="">Select type of work</option>
                    <option value="Bug Fixes">Bug Fixes</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-[500] text-[#111928]">
                  Task description *
                </label>
                <textarea
                  value={newTask.description}
                  placeholder="Write text here ..."
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="w-[80%] max-md:w-full p-[6px_8px] border border-[#D1D5DB] rounded-[8px] focus-within:border-[#1A56DB] text-[14px] font-[500]"
                  rows={3}
                />
                <p className="text-[12px] font-[400] text-[#6B7280]">
                  A note for extra info
                </p>
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] font-[500] text-[#111928]">
                  Hours *
                </label>
                <div className="flex items-center rounded-[8px] border border-[#E5E7EB] w-fit">
                  <button
                    className="border-r text-[18px] font-[500] border-[#E5E7EB] rounded p-2 w-[40px] bg-[#F3F4F6] cursor-pointer"
                    onClick={() =>
                      setNewTask({
                        ...newTask,
                        hours: Math.max(0, newTask.hours - 1),
                      })
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    disabled
                    min={0}
                    max={24}
                    value={newTask.hours}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        hours: parseFloat(e.target.value),
                      })
                    }
                    className="border-l border-[#E5E7EB] rounded p-2 w-[50px]"
                  />
                  <button
                    className="border-l text-[18px] font-[500] border-[#E5E7EB] rounded p-2 w-[40px] bg-[#F3F4F6] cursor-pointer"
                    onClick={() =>
                      setNewTask({
                        ...newTask,
                        hours: Math.min(24, newTask.hours + 1),
                      })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-[10px] p-[20px] border-t border-[#E5E7EB]">
              <button
                onClick={() => {
                  console.log("New task added:", newTask); // Replace with actual logic
                  setShowModal(false);
                  document.body.style.overflow = "auto";
                }}
                className="w-1/2 px-4 py-2 text-sm bg-[#1C64F2] text-white rounded-lg hover:bg-[#1749c1] cursor-pointer"
              >
                Add entry
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  document.body.style.overflow = "auto";
                }}
                className="w-1/2 px-4 py-2 text-sm bg-white border border-[#E5E7EB] rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TaskPopup;
