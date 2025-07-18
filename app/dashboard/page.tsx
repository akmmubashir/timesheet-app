import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import RightsReserved from "../components/RightsReserved";
import { status, weeklyTasks } from "../utils/data";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen w-full">
      <Header />
      <div className="w-full h-full p-[40px_100px]">
        <div className="flex flex-col gap-[20px]">
          <div className="w-full h-full bg-white p-[20px] flex flex-col gap-[20px]">
            <p className="font-[700] text-[24px] text-[#111928]">
              Your Timesheets
            </p>
            <table className="table-auto w-full rounded-lg overflow-hidden">
              <thead className="bg-[#F9FAFB] border-b-[1px] border-[#E5E7EB]">
                <tr>
                  <th className="p-[16px_10px] text-[#6B7280] font-[600] text-[14px] uppercase text-start">
                    Week #
                  </th>
                  <th className="p-[16px_10px] text-[#6B7280] font-[600] text-[14px] uppercase text-start">
                    Date
                  </th>
                  <th className="p-[16px_10px] text-[#6B7280] font-[600] text-[14px] uppercase text-start">
                    Status
                  </th>
                  <th className="p-[16px_10px] text-[#6B7280] font-[600] text-[14px] uppercase text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {weeklyTasks.map((task) => {
                  const taskStatus = status.find((s) => {
                    // Dynamically evaluate condition string
                    if (s.condition === "hours >= 40") return task.hours >= 40;
                    if (s.condition === "hours < 40")
                      return task.hours < 40 && task.hours > 0;
                    if (s.condition === "hours === 0") return task.hours === 0;
                  });

                  return (
                    <tr
                      key={task.id}
                      className="border-b-[1px] border-[#E5E7EB]"
                    >
                      <td className="p-[16px_10px] text-[#111928] font-[400] text-[14px] bg-[#F9FAFB]">
                        {task.id}
                      </td>
                      <td className="p-[16px_10px] text-[#6B7280] font-[400] text-[14px]">
                        {new Date(task.startDate).toLocaleString("en-US", {
                          month: "long",
                          year: "numeric",
                          day: "numeric",
                        })}{" "}
                        -{" "}
                        {new Date(task.endDate).toLocaleString("en-US", {
                          month: "long",
                          year: "numeric",
                          day: "numeric",
                        })}
                      </td>
                      <td className="p-[16px_10px] font-[400] text-[14px]">
                        <span
                          className="p-[5px_10px] rounded-md uppercase"
                          style={{
                            color: taskStatus?.color,
                            backgroundColor: taskStatus?.bgColor,
                          }}
                        >
                          {taskStatus?.title}
                        </span>
                      </td>
                      <td className="p-[16px_10px] text-[#1C64F2] font-[400] text-[14px] text-center capitalize">
                        <Link
                          href={`/dashboard/${task.id}`}
                          className="text-[#1C64F2] font-[500] text-[14px] cursor-pointer"
                        >
                          {taskStatus?.action}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <RightsReserved />
        </div>
      </div>
    </div>
  );
};

export default page;
