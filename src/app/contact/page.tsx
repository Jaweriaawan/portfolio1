'use client'

import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

const info = [
   {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "000 1111 1111"
   },
   {
     icon: <FaEnvelope />,
     title: "Email",
     description: "gmail@gmail.com",
   },
   {
     icon: <FaMapMarkedAlt />,
     title: "Address",
     description: "Karachi",
   }
]

import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
    className="py-6">
      <div className="container mx-auto xl:px-[100px]">
         <div className="flex flex-col xl:flex-row gap-[30px]">
           {/* form */}
           <div className="xl:w-[54%] order-2 xl:order-none">
             <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
               <h3 className="text-4xl text-accent">Let's Work Together</h3>
               <p className="text-white/60">Are you looking for a creative, responsive, and high-performance website? I specialize in turning Figma designs into stunning Next.js applications with a smooth user experience.</p>
              {/* input */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                   <input type="text" placeholder="FirstName" className="h-[60px] outline-none border border-white/10 rounded-[7px] font-light bg-primary focus:border-accent px-4 py-5 text-base placeholder:text-white/60" />
                   <input type="email" placeholder="Email Address" className="h-[60px] outline-none border border-white/10 rounded-[7px] font-light bg-primary focus:border-accent px-4 py-5 text-base placeholder:text-white/60" />
                   <input type="number" placeholder="Phone Number" className="h-[60px] outline-none border border-white/10 rounded-[7px] font-light bg-primary focus:border-accent px-4 py-5 text-base placeholder:text-white/60" />
                   <input type="text" placeholder="Email Subject" className="h-[60px] outline-none border border-white/10 rounded-[7px] font-light bg-primary focus:border-accent px-4 py-5 text-base placeholder:text-white/60" />
                </div>
                {/* select */}
                <Select>
                   <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="est">Web Development</SelectItem>
                        <SelectItem value="cst">Website Development</SelectItem>
                        <SelectItem value="mst">Next.js Development</SelectItem>
                     </SelectGroup>
                   </SelectContent>
                </Select>

                {/* textarea */}
                <Textarea className="h-[200px]" placeholder="Type your message here" />
                {/* btn */}
                <Button size="md" className="max-w-40 ">Send Meassage</Button>
             </form>
           </div>
           {/* info */}
           <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                   return <li key={index} className="flex items-center gap-6">
                     <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                     </div>
                     <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                     </div>
                   </li>
                })}
              </ul>
           </div>

         </div>
      </div>
    </motion.section>
  )
}

export default Contact