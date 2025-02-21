'use client'
import { FaHtml5, FaCss3, FaJs,  } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"


// about data
const about = {
   title : "About me",
   description: "I am a passionate and dedicated Frontend Developer who loves crafting beautiful and functional web experiences. With 1 year of experience in HTML, CSS, and JavaScript, I have built responsive and interactive websites. Currently, I am focusing on TypeScript, Next.js, and Tailwind CSS to take my skills to the next level. Originally from a medical background, I discovered my true passion in the IT field and have been actively learning and exploring ever since. I enjoy converting Figma designs into real websites, writing clean and efficient code, and continuously improving my skills to build modern, fast, and user-friendly applications. My goal is to become a highly skilled developer and create innovative digital solutions that make an impact",
  
   info: [
     {
      fieldName: "Name",
      fieldValue: "Jaweria"
     },
     {
      fieldName: "Age",
      fieldValue: "21"
     },
     {
      fieldName: "Gender",
      fieldValue: "Female"
     },
     {
      fieldName: "City",
      fieldValue: "Karachi"
     },
     {
      fieldName: "Nationality",
      fieldValue: "Pakistani"
     },
     {
      fieldName: "Experience",
      fieldValue: "1 year"
     },
     {
      fieldName: "Full time",
      fieldValue: "available"
     },
     {
      fieldName: "Phone",
      fieldValue: "0333 299 8642"
     },
     {
      fieldName: "Email",
      fieldValue: "akhterwaheed470@gmail.com"
     },
     {
      fieldName: "Languages",
      fieldValue: "Urdu"
     },
   ]
}

//  experience data
const experience = {
  title: "My experience",
  description: "1 Year of Experience in HTML, CSS, and JavaScript – building responsive and interactive websites. Currently focusing on TypeScript, Next.js, and Tailwind CSS to enhance my frontend development skills.",
}

// education data
const education = {
  title: "My Education",
  description: "My education is Intermediate, and I studied Medical, but now my interest is in the IT field. I am actively exploring and learning many new things in this field",

  items: [
    {
      year: "2024 - 25",
      heading: "Programming Tutorials",
      lines: "I have learned HTML, CSS, and JavaScript through online tutorials. For Next.js and Tailwind CSS, I gained knowledge from Govt House Sindh training programs. I am continuously exploring and improving my skills to become a better frontend developer"
    },
    {
      year: "2025",
      heading: "Education & Learning",
      lines: "In 2024, I am actively working on projects using HTML, CSS, and JavaScript while also focusing on building projects with Next.js and Tailwind CSS. My goal is to improve my practical skills and gain real-world experience in frontend development."
    }
  ]
}

// skills
const skills = {
  title:"My skills",
  description: "I am a passionate Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. Currently, I am focusing on enhancing my skills in TypeScript, Next.js, and Tailwind CSS to build modern, scalable, and high-performance web applications. With a keen eye for design and detail, I love transforming Figma designs into fully responsive and interactive websites. I am always eager to explore new technologies and improve my expertise to stay ahead in the ever-evolving IT field.",

  skillList: [
    {
      icon: <FaHtml5/>,
      name: " html"
    },
    {
      icon: <FaCss3/> ,
      name: "CSS"
    },
    {
      icon: <FaJs/>,
      name: "JS"
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwindCSS"
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.js"
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

export default function Resume(){
  return <motion.div initial={{opacity:0,}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"} }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mt-[30px]">
      <div className="container max-auto">
         <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
               <TabsTrigger value="experience">Experience</TabsTrigger>
               <TabsTrigger value="education">Education</TabsTrigger>
               <TabsTrigger value="skill">Skills</TabsTrigger>
               <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* contact */}
             <div className="min-h-[70vh] w-full">
                 {/* experience */}
                <TabsContent value="experience" className="w-full">
                     <div className="xl:text-left text-center p-[10px]">
                       <h3 className="font-bold text-4xl">{experience.title}</h3>
                       <p className="text-white/60 p-[10px]">{experience.description}</p>
                     </div>
                </TabsContent>



                {/* education */}
                <TabsContent value="education">
                     <div className="xl:text-left text-center p-[10px]">
                       <h3 className="font-bold text-4xl">{education.title}</h3>
                       <p className="text-white/60 p-[10px]">{education.description}</p>

                       <ScrollArea className="h-[400px]">
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {education.items.map((item , index) => {
                              return <li key={index} className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                <span className="text-accent">{item.year}</span>
                                <h3 className="text-2xl font-semibold max-w-[260px] min-h-[60px]">{item.heading}</h3>
                                <div className="flex items-center gap-3">
                                   <p className="text-white/60">{item.lines}</p>
                                </div>
                              </li>
                            })}
                          </ul>
                       </ScrollArea>
                     </div>
                </TabsContent>

                {/* skill */}
                <TabsContent value="skill">
                    <div className="xl:text-left text-center p-[10px]">
                       <h3 className="font-bold text-4xl">{skills.title}</h3>
                       <p className="text-white/60 p-[10px]">{skills.description}</p>

                       <ScrollArea className="h-[400px]">
                          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                            {skills.skillList.map((item , index) => {
                              return <li key={index} className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                 <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                       <TooltipTrigger>
                                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                       </TooltipTrigger>
                                       <TooltipContent>
                                            <p className="capitalize">{item.name}</p>
                                       </TooltipContent>
                                    </Tooltip>
                                 </TooltipProvider>  
                              </li>
                            })}
                          </ul>
                       </ScrollArea>
                     </div>
                </TabsContent>

                {/* aboutMe */}
                <TabsContent value="about">
                    <div className="xl:text-left text-center flex flex-col gap-[30px]">
                       <span className="font-bold text-4xl">{about.title}</span>
                       <span className="text-white/60 p-[10px]">{about.description}</span>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                           {about.info.map((item, index) => {
                             return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                               <span className="text-white/60">{item.fieldName}  : </span>
                               <span className="text-xl">{item.fieldValue}</span>
                             </li>
                           })} 
                        </ul>
                     </div>
                </TabsContent>
             </div>
         </Tabs>
      </div>
 </motion.div>
}