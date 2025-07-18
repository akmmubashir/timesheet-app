import Login from "./components/Login";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden grid grid-cols-12">
      <div className="relative col-span-6 bg-white px-[100px] flex flex-col justify-center items-center w-full">
        <div className="flex flex-col gap-[10px] w-full">
          <h6 className="text-[#111928] font-bold text-[20px]">Welcome back</h6>
          <Login />
          <div className="absolute bottom-[60px] left-0 w-full">
            <p className="text-[#6B7280] font-[400] text-[14px] text-center">
              © 2024 tentwenty
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-6 bg-[#1C64F2] flex flex-col justify-center items-center">
        <div className="px-[100px] flex flex-col gap-[10px]">
          <h1 className="text-white font-[600] text-[40px]">ticktock</h1>
          <p className="text-[#E5E7EB] font-[400] text-[16px]">
            Introducing ticktock, our cutting-edge timesheet web application
            designed to revolutionize how you manage employee work hours. With
            ticktock, you can effortlessly track and monitor employee attendance
            and productivity from anywhere, anytime, using any
            internet-connected device.
          </p>
        </div>
      </div>
    </div>
  );
}
