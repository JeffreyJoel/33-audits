import React from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import AuditStats from "./Audit-stats";

const timelineData = [
  {
    protocol: "JuiceBox",
    findings: [
      "Found 1 Critical vulnerability",
      "Found 4 High risk vulnerabilities",
      "Found 14 Medium risk vulnerabilities",
    ],
    audit_report: "https://github.com/leeftk/audit-reports/blob/main/private%20audits/juicebox-eth-audit-report-v4.pdf"
  },
  {
    protocol: "Dein",
    findings: [
      "Found 3 Critical vulnerabilities",
      "Found 1 High risk vulnerabilities",
      "Found 5 Medium risk vulnerabilities",
    ],
    audit_report: "https://github.com/leeftk/audit-reports/blob/main/private%20audits/Dein-audit-report-%202.pdf"
  },
  {
    protocol: "StakeTogether",
    findings: [
      "Found 1 High risk vulnerability",
      "Found  6 Medium risk vulnerabilities",
      "Found 12 Low risk vulnerabilities",
    ],
    audit_report: "https://github.com/sensesecurity/reporter/blob/main/output/StakeTogether_20231130160542.md"
  },
];

export function Audits() {
  return (
    <div className="w-full mx-auto px-8 mt-20 md:mt-36 pt-8 relative" id="audits">
       {/* <div className="absolute inset-0  h-[100px] w-[200px] bg-gradient-to-r from-blue-800 to-black transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
       {/* <div className="absolute bottom-20 right-0 mx-auto h-[100px] w-[200px] bg-gradient-to-r from-blue-900 to-black transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}

      <h1 className="text-center font-semibold text-3xl md:text-5xl">Recent Audit Reports</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-24 mx-auto  items-center mt-8">      
        <div className="w-[80%] lg:basis-[30%]  divide-zinc-800 relative">
          <div className="absolute h-full w-[4px] bg-gradient-to-b from-transparent via-[#2565f1] to-transparent -left-4 md:-left-10">
            <span
              className="absolute z-20 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] before:bg-gradient-to-l before:from-transparent before:via-blue-500 before:to-cyan-500 style_meteor__iBwXl left-1"
              style={
                {
                  visibility: "hidden",
                  "--meteor-delay": "2s",
                  "--meteor-duration": "0s",
                  "--meteor-width": "140px",
                } as React.CSSProperties
              }
            ></span>
          </div>
          {timelineData.map((protocol, index) => (
            <div key={protocol.protocol} className="border-b border-zinc-800">
              <h1 className="text-2xl font-bold text-white my-8 relative">
                <div className="h-3 md:h-4 w-3 md:w-4 border-2 border-blue-500 bg-blue-500 rounded-full absolute -left-[20px] md:-left-[46px] top-2 md:top-1"></div>
                {protocol.protocol}
              </h1>
              <div className="mb-8">
                {protocol.findings.map((finding, findingIndex) => (
                  <div
                    key={findingIndex}
                    className="flex flex-row space-x-2 items-start my-2"
                  >
                    <Check
                      className="text-blue-700 mt-[3px] flex-shrink-0"
                      size={16}
                    />
                    <span className="text-gray-300 font-medium md:text-xl">
                      {finding}
                    </span>
                  </div>
                ))}
                <Link href={protocol.audit_report} target="blank" className="ml-5 mt-4 text-gray-400 underline flex font-medium md:text-xl hover:text-blue-600">
                Audit Report <ArrowUpRight className="text-[3px] w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <AuditStats />
      </div>
      
      <div className="w-fit my-12 mx-auto">
        <Link
          href="https://app.deform.cc/form/6d07745a-8a46-4445-b064-4755c72e8c4b/?page_number=0"
          target="blank"
        >
          <Button
            className="rounded-xl text-base md:text-lg p-6 bg-blue-700 text-white border border-blue-700 cursor-pointer hover:bg-blue-500"
            variant={"secondary"}
          >
            Book an Audit <ArrowRight className="ml-4" />
          </Button>
        </Link>
      </div>
      {/* <div className="absolute bottom-[200px]  -right-0 inset-0 h-[100px] w-[100px] bg-gradient-to-r from-blue-500 to-black transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}

    </div>
  );
}
