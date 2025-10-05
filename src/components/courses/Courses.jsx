import { motion } from "framer-motion";
import "./courses.css";
import { useState } from "react";
import leagues from "../../utils/data";

const Courses = () => {

    const [activeLeague, setActiveLeague] = useState("superlig");


  return (
    <section className="course">
        <motion.h1 className="course-header-text"
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
            duration: 1,
            type: "spring"
        }}>Popular Courses</motion.h1>

       <div className="course-select">
        {Object.keys(leagues).map((leagueKey) => (
          <button
            key={leagueKey}
            onClick={() => setActiveLeague(leagueKey)}
            className={`league-button ${activeLeague === leagueKey ? "active" : ""}`}
          >
            {leagueKey.toUpperCase()}
          </button>
        ))}
      </div>

      <div>
        {leagues[activeLeague].map((team) => (
          <p key={team.id}>{team.name}</p>
        ))}
      </div>


    </section>
  )
}

export default Courses