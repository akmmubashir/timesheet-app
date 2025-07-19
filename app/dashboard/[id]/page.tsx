import React from "react";
import Header from "@/app/components/Header";
import RightsReserved from "@/app/components/RightsReserved";
import { weeklyTasks } from "@/app/utils/data";
import { notFound } from "next/navigation";
import TableSheet from "@/app/components/TableSheet";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const weekId = Number(resolvedParams.id);

  // If invalid id
  if (isNaN(weekId)) {
    notFound();
  }

  const currentWeek = weeklyTasks.find((task) => task.id === weekId);

  if (!currentWeek) {
    notFound(); // If week not found, show 404
  }

  const percentage = Math.min((currentWeek.hours / 40) * 100, 100);

  return (
    <div className="bg-[#F8F8F8] min-h-screen w-full">
      <Header />
      <div className="w-full h-full p-[40px_100px] max-md:p-[30px_20px]">
        <div className="flex flex-col gap-[20px]">
          <div className="w-full h-full bg-white p-[20px] flex flex-col gap-[20px]">
            <div className="flex items-center max-md:items-start max-md:flex-col max-md:gap-[10px] justify-between">
              <p className="font-[700] text-[24px] max-md:text-[20px] text-[#111928]">
                This week’s timesheet
              </p>
              <div className="md:ms-auto flex flex-col gap-[6px] group hover:cursor-pointer relative">
                <div className="md:hidden group-hover:block absolute md:bg-white md:p-[4px_6px] rounded top-[-10px] max-md:top-[0px] left-[50%] max-md:left-0 max-md:translate-x-0 translate-x-[-50%] md:shadow">
                  <p className="font-[500] text-[14px] text-[#111928]">
                    {currentWeek.hours}/40 hrs
                  </p>
                </div>
                <p className="text-[#6B7280] font-[400] text-[14px] text-end">
                  {percentage}%
                </p>
                <div className="w-[180px] h-[6px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor:
                        percentage < 30
                          ? "#FFC080"
                          : percentage >= 90
                          ? "#34C759"
                          : "#F7DC6F",
                    }}
                  />
                </div>
              </div>
            </div>
            <p className="text-[#6B7280] font-[400] text-[14px]">
              {new Date(currentWeek.startDate).toLocaleString("en-US", {
                month: "long",
                year: "numeric",
                day: "numeric",
              })}{" "}
              -{" "}
              {new Date(currentWeek.endDate).toLocaleString("en-US", {
                month: "long",
                year: "numeric",
                day: "numeric",
              })}
            </p>

            <TableSheet currentWeek={currentWeek} />
          </div>
          <RightsReserved />
        </div>
      </div>
    </div>
  );
}
