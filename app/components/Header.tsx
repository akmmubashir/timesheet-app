"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useModalStore } from "../store/store";
import TaskPopup from "./TaskPopup";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { setShowModal } = useModalStore();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    // Initialize the store on client side
    // const store = useModalStore.getState();
    return () => {
      setShowModal(false);
    };
  }, [setShowModal]);

  const handleLogout = () => {
    signOut();
    if (status === "unauthenticated") {
      router.push("/");
    }
  };

  // if (status === "loading") return <div>Loading...</div>;
  return (
    <React.Fragment>
      <div className="w-full bg-white h-[70px] p-[20px] flex gap-[20px] items-center sticky top-0 z-50">
        <Link href="/" className="text-[#111928] font-[600] text-[24px]">
          ticktock
        </Link>
        <p className="text-[#111928] font-[500] text-[14px]">Timesheets</p>
        <div className="ms-auto flex gap-[6px] items-center group relative">
          <p className="text-[#6B7280] font-[500] text-[14px]">
            {session?.user?.name}
          </p>
          <div>
            <Image
              src={"/arrow-down.svg"}
              alt="arrow-down"
              className="w-[20px] h-[20px]"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute top-[16px] right-[0px] hidden group-hover:block bg-white p-[6px_10px] rounded-[8px] shadow">
            <p className="text-[#6B7280] font-[500] text-[14px] mb-1 border-b-[1px] border-[#E5E7EB]">
              List
            </p>
            <button
              onClick={() => handleLogout()}
              className="flex items-center gap-[6px] text-red-400 font-[500] text-[14px] cursor-pointer hover:bg-[#F9FAFB]"
            >
              <Image
                src={"/logout.svg"}
                alt="logout"
                className="w-[16px] h-[16px]"
                width={16}
                height={16}
              />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      <TaskPopup />
    </React.Fragment>
  );
};

export default Header;
