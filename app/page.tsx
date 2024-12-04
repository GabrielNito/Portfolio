import Courses from "@/components/Courses/Courses";
import Experience from "@/components/Experience/Experience";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import CoursesMobile from "@/components/Courses/CoursesMobile";
import Home from "@/components/Home/Home";
import TechStack from "@/components/TechStack/TechStack";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <NavbarMobile />
      <div className="lg:h-[50vh]">
        <Home />
      </div>
      <div className="h-[75vh]">
        <Projects />
      </div>
      <div className="h-[50vh]">
        <Experience />
      </div>
      <div className="h-[75vh]">
        <Courses />
        <CoursesMobile />
      </div>
      <div className="h-[75vh]">
        <TechStack />
      </div>
      <ScrollToTop />
    </div>
  );
}
