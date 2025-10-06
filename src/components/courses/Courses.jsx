import { AnimatePresence, motion } from "framer-motion";
import "./courses.css";
import { useState } from "react";
import courseData from "../../utils/data";
import Card from "./Card";
import CourseBtn from "./CourseBtn";

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState("allprogramme");

  return (
    <section className="course">
      <motion.h1
        className="course-header-text"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
        }}
      >
        Popular Courses
      </motion.h1>

      <div className="course-select">
        {Object.keys(courseData).map((courseKey) => (
          <CourseBtn
            key={courseKey}
            label={courseData[courseKey].label}
            active={activeCourse === courseKey}
            onClick={() => setActiveCourse(courseKey)}
          />
        ))}
      </div>

      <div className="course-items">
        <AnimatePresence mode="popLayout">
          {courseData[activeCourse].dataCourse.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
              layout
            >
              <Card
                key={course.id}
                image={course.image}
                studentsimg={course.studentsimg}
                students={course.students}
                date={course.date}
                header={course.header}
                description={course.description}
                price={course.price}
                priceTwo={course.priceTwo}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Courses;
