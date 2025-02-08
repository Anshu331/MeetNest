// "use client";

// import { MeetingTypeList } from "@/components/meeting-type-list";
// import { useGetCalls } from "@/hooks/use-get-calls";

// const HomePage = () => {
//   const now = new Date();
//   const { upcomingCalls } = useGetCalls();

//   const time = now.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
//     now
//   );

//   return (
//     <section className="flex size-full flex-col gap-10 text-white">
//       <div
//         className="h-[300px] w-full rounded-[20px] bg-cover  hidden md:block"
//         style={{
//           backgroundImage: "url(/images/home.png)",
//           backgroundSize: "45%", // Decrease the image size
//           backgroundPosition: "75% -100px ", // Adjust position if needed
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
//         <img
//   src="/images/home.png" // Replace with the actual image path
//   alt="Description"
//   className="w-70 h-70 mr-2 -mt-24 block md:hidden" // Show on mobile and hide on desktop
// />
//           <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
//             {upcomingCalls?.length === 0
//               ? "No upcoming meeting"
//               : upcomingCalls?.length &&
//                 `Upcoming meeting at:
//                 ${upcomingCalls[
//                   upcomingCalls.length - 1
//                 ].state?.startsAt?.toLocaleTimeString("en-US", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}`}
//           </h2>

//           <div className="flex flex-col gap-2">
//             <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>

//             <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
//           </div>
//         </div>
//       </div>

//       <MeetingTypeList />
//     </section>
//   );
// };

// export default HomePage;

"use client";

import { MeetingTypeList } from "@/components/meeting-type-list";
import { useGetCalls } from "@/hooks/use-get-calls";
import { Github, Linkedin, Briefcase } from "lucide-react";

const HomePage = () => {
  const now = new Date();
  const { upcomingCalls } = useGetCalls();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="flex h-[300px] w-full flex-row rounded-[20px] bg-cover">
        <div
          className="hidden h-full w-1/2 rounded-l-[20px] md:block"
          style={{
            backgroundImage: "url(/images/home.png)",
            backgroundSize: "90%", // Decrease the image size
            backgroundPosition: "55%  ", // Adjust position if needed
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="w-2/2 flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <img
            src="/images/home.png" // Replace with the actual image path
            alt="Description"
            className="w-70 h-70 -mt-24 mr-2 block md:hidden" // Show on mobile and hide on desktop
          />

          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal -mt-4">
            {upcomingCalls?.length === 0
              ? "No upcoming meeting"
              : upcomingCalls?.length &&
                `Upcoming meeting at: 
                ${upcomingCalls[
                  upcomingCalls.length - 1
                ].state?.startsAt?.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
          </h2>

          <div className="flex flex-col gap-2 mt-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl -mt-1">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
      <footer className="mt-8 flex h-auto flex-col items-center justify-between rounded-[20px] bg-gray-800 px-4 py-4 text-white md:h-20 md:flex-row">
        <p className="w-full py-2 text-center text-sm md:w-auto">
          © 2025 MeetNest. All rights reserved.
        </p>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/Anshu331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition-transform hover:scale-110 hover:text-blue-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anshu-kumar-bishwas-792801207/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition-transform hover:scale-110 hover:text-blue-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://anshu-bishwas-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition-transform hover:scale-110 hover:text-blue-300"
            >
              <Briefcase className="h-5 w-5" />
            </a>
          </div>
          <p className="text-center text-xs md:text-left">
            Developed by
            <span className="ml-1 text-blue-400 transition-colors hover:text-blue-300">
              Anshu Kumar Bishwas
            </span>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default HomePage;
