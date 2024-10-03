import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const AuditStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 basis-[40%]">
      {/* <div className="w-fit"> */}
      <Card className=" bg-gradient-to-br border-0 rounded-lg from-blue-600 to-blue-800 text-white py-1 md:py-5">
        <CardHeader>
          <CardTitle className="text-3xl md:text-5xl font-bold"> &gt;100,000</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-200 font-semibold md:text-lg">
          Source Lines of Code (SLOC) reviewed
          </p>
        </CardContent>
      </Card>
   
      <Card className="bg-neutral-900/70 border-0 rounded-2xl text-white py-1 md:py-5 row-span-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Audit statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-300 md:text-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="font-semibold"> 100,000 SLOC of code reviewed</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="font-semibold">12 audits</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="font-semibold">7 Audited Contests</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <p className="font-semibold">5 Private Audits</p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <p className="font-semibold">60 High/Medium</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-neutral-900/70 border-0 rounded-2xl py-1 md:py-5 text-white">
        <CardHeader>
          <CardTitle className="text-3xl md:text-5xl font-bold">
            60+
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 font-semibold md:text-lg">
          Critical, High & Medium vulnerabilities discovered
          </p>
        </CardContent>
      </Card>
      {/* </div> */}
    </div>
  );
};

export default AuditStats;
