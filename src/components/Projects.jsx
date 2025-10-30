import { ChevronDown } from "lucide-react";

function Projects() {
  return (
    <>
      {/* className="transition-transform duration-300 group-open:-rotate-180" */}

      <span className="pl-15 my-20 pt-20 flex items-center">
        <span className="shrink-0 pe-4 text-gray-900 text-5xl font-bold">
          My Projects
        </span>

        <span className="h-1 rounded-full flex-1 bg-gradient-to-l from-transparent to-[#ffd700]"></span>
      </span>

      <div className="flow-root lg:px-20 md:px-15 mb-20 sm:px-10 px-5">
        <div className="-my-4 flex flex-col divide-y divide-gray-200">
          <details className="group lg:px-20 md:px-15 sm:px-10 px-5 transition-all py-10 [&amp;_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-8 text-gray-900">
              <h2 className="text-4xl">01</h2>

              <h2 className="text-3xl font-semibold">SCHOOL CHIMES</h2>

              <ChevronDown className="transition-transform duration-300 shrink-0 group-open:-rotate-180" />
            </summary>

            <div className="pt-4 flex flex-col gap-5 justify-center items-center lg:px-20 md:px-15 sm:px-10 px-5 text-gray-900">
              <div>
                <div>
                  <span className="font-semibold text-lg">Technologies: </span>Angular,
                  NodeJs and PostgreSQL
                </div>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    • Built the front-end for School Chimes, showcasing my skill in
                    creating a user-friendly interface.
                  </li>
                  <li>
                    • This messaging app is crafted for effective communication among
                    teachers, parents, and school management.
                  </li>
                  <li>
                    • Successfully addressed application inconsistencies, such as crashes,
                    navigation glitches, data loss, and UI-related issues, leading to
                    enhanced system stability and an improved user experience.
                  </li>
                </ul>
              </div>
            </div>
          </details>

          <details className="group lg:px-20 md:px-15 sm:px-10 px-5 py-10 [&amp;_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-8 text-gray-900">
              <h2 className="text-4xl">02</h2>

              <h2 className="text-3xl font-semibold">VGN SMART CALL</h2>

              <ChevronDown className="transition-transform duration-300 shrink-0 group-open:-rotate-180" />
            </summary>

            <div className="pt-4 flex flex-col gap-5 justify-center items-center lg:px-20 md:px-15 sm:px-10 px-5 text-gray-900">
              <div>
                <div>
                  <span className="font-semibold text-lg">Technologies: </span>Angular,
                  NodeJs and PostgreSQL
                </div>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    • Designed and developed an impactful web application for VGN
                    Builders, strategically streamlining client communication, follow-ups,
                    and product promotions and achieved a 40% reduction in response time
                    and 75% increase in client satisfaction.
                  </li>
                  <li>
                    • The implementation resulted in a 95% increase in client engagement,
                    optimizing business processes and enhancing overall operational
                    efficiency
                  </li>
                  <li>
                    • A notable achievement includes optimizing client communication
                    through VGN Smart Call, enabling concurrent calls up to 100,000.
                    development and addressing business needs.
                  </li>
                </ul>
              </div>
            </div>
          </details>

          <details className="group lg:px-20 md:px-15 sm:px-10 px-5 py-10 [&amp;_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-8 text-gray-900">
              <h2 className="text-4xl">03</h2>

              <h2 className="text-3xl font-semibold">TAXUS</h2>

              <ChevronDown className="transition-transform shrink-0 duration-300 group-open:-rotate-180" />
            </summary>

            <div className="pt-4 flex flex-col gap-5 justify-center items-center lg:px-20 md:px-15 sm:px-10 px-5 text-gray-900">
              <div>
                <div>
                  <span className="font-semibold text-lg">Technologies: </span> Angular
                  14, Java, MangoDB
                </div>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    • GSTIN Filing Software (Tax Payment Platform) Worked on developing a
                    GSTIN filing web application using Angular. Built 3+ major modules,
                    including:
                  </li>
                  <li>
                    • <span className="font-semibold">Sales Module: </span> Handled sales
                    data, invoice creation, e-Invoice conversion, and e-Way bill
                    generation.
                  </li>
                  <li>
                    •{" "}
                    <span className="font-semibold">
                      Voucher, Delivery Challan (DC), Credit & Debit Note:{" "}
                    </span>
                    Designed and developed user friendly screens for smooth data entry and
                    record-keeping
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}

export default Projects;
