import Courses from "@/components/Courses/Courses";
import Experience from "@/components/Experience/Experience";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import NavbarMobile from "@/components/Navbar/NavbarMobile";
import CoursesMobile from "@/components/Courses/CoursesMobile";
import Home from "@/components/Home/Home";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant="pt" />

      <NavbarMobile variant="pt" />
      <div className="lg:h-[50vh]">
        <Home variant="pt" />
      </div>
      <div className="h-[75vh]">
        <Projects variant="pt" />
      </div>
      <div className="h-[50vh]">
        <Experience variant="pt" />
      </div>
      <div className="h-[75vh]">
        <Courses variant="pt" />
        <CoursesMobile variant="pt" />
      </div>
      <ScrollToTop />
    </div>
  );
}
