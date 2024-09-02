import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="">
        <Sidebar />
      </div>
      {/* Main body */}
      <div className="w-full">
        {/* Header */}
        <Navbar />
        <main className="ml-60 p-8 bg-slate-900 text-slate-50 mt-16 min-h-screen">
          {children}
        </main>
        {/* Main */}
      </div>
    </div>
  );
};

export default Layout;
