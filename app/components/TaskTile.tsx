"use client";
import React from "react";
import Image from "next/image";
import { useModalStore } from "../store/store";

type Props = {
  task: {
    id: string;
    name: string;
    hours: number;
    project: string;
    description: string;
  };
};

const TaskTile = (props: Props) => {
  const { task } = props;
  const { setShowModal, setNewTask } = useModalStore();
  return (
    <React.Fragment>
      <div
        key={task.id}
        className="flex items-center justify-between p-[12px] border border-[#E5E7EB] rounded-lg"
      >
        <p className="text-[#111928] font-[500] text-[16px]">{task.name}</p>
        <div className="flex items-center gap-[10px]">
          <p className="text-[#9CA3AF] font-[400] text-[14px]">
            {task.hours} hrs
          </p>
          <p className="capitalize bg-[#E1EFFE] p-[4px_8px] rounded-md text-[#1E429F] font-[500] text-[12px]">
            {task.project}
          </p>
          <div className="relative group">
            <p className="cursor-pointer">
              <Image
                src={"/more.svg"}
                alt="more"
                className="w-[20px] h-[20px]"
                width={20}
                height={20}
              />
            </p>
            <div className="absolute bg-white rounded-[8px] top-[10px] right-0 shadow group-hover:block hidden overflow-hidden">
              <button
                onClick={() => {
                  setShowModal(true);
                  setNewTask(task);
                  document.body.style.overflow = "hidden";
                }}
                className="cursor-pointer text-[12px] font-[500] w-full text-start text-[#1E429F] p-[6px_8px] hover:bg-gray-50"
              >
                Edit
              </button>
              <button className="cursor-pointer text-[12px] font-[500] w-full text-start text-[#E02424] p-[6px_8px] hover:bg-gray-50">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskTile;
