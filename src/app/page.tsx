import { Button } from "@/components/ui/button"
import Photo from "@/components/ui/Photo"
import Social from "@/components/ui/Social"
import { FiDownload } from "react-icons/fi"


export default function Home(){
  return <section className="h-full ">
     <div className="container max-auto h-full">
       <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-10 xl:pb-24 pt-[20px] text-center xl:pl-[100px]">
        {/* text  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">Hello I'm <br /><span>Jaweria waheed</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I am a passionate Frontend Developer with expertise in converting Figma designs into fully responsive and visually stunning websites. I have strong skills in HTML, CSS, Tailwind CSS, and TypeScript, and I am continuously improving my JavaScript and TypeScript knowledge to enhance my development capabilities. My goal is to build high-quality, user-friendly web applications with clean and efficient code.</p>
               {/* buttons and socials  */}
             <div className="flex flex-col xl:flex-row items-center gap-8">
               <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                 <span>Download CV</span>
                 <FiDownload className="text-xl" />
               </Button>
               <div className="mb-8 xl:mb-0">
                 <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center item-center text-center pt-[10px] text-accent text-base 
                 hover:bg-accent hover:text-primary hover:transition-all duration-500" />
               </div>
             </div>
          </div>

         {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
       </div>
     </div>

  </section>
}