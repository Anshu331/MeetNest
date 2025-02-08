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

const HomePage = () => {
  const now = new Date();
  const { upcomingCalls } = useGetCalls();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="flex h-[300px] w-full rounded-[20px] bg-cover flex-row">
        <div
         className="w-1/2 h-full rounded-l-[20px] hidden md:block"
          style={{
            backgroundImage: "url(/images/home.png)",
            backgroundSize: "90%", // Decrease the image size
            backgroundPosition: "55%  ", // Adjust position if needed
            backgroundRepeat: "no-repeat",
          }}
        />
        
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 w-2/2">
        <img
  src="/images/home.png" // Replace with the actual image path
  alt="Description"
  className="w-70 h-70 mr-2 -mt-24 block md:hidden" // Show on mobile and hide on desktop
/>

          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            {upcomingCalls?.length === 0
              ? "No upcoming meeting"
              : upcomingCalls?.length &&
                `Upcoming meeting at: 
                ${upcomingCalls[upcomingCalls.length - 1].state?.startsAt?.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
          </h2>
         

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
          
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default HomePage;
