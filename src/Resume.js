import './Resume.css';

import Section from "./reusables/Section";

import ResumeHeader from "./sections/ResumeHeader";
import education from "./sections/content/education.json";
import workExperience from "./sections/content/work-experience.json";
import projects from "./sections/content/projects.json";

function Resume() {
  return (
    <div className={true ? "resume" : ""}>
      <div className="full-page">
        {/*<ResumeHeader></ResumeHeader>*/}
        <ResumeHeader className="resume-header"></ResumeHeader>

        <div className="content">
          <div className="main-content">
            <Section title="Éducation" items={education}></Section>
            <Section title="Expérience de travail" items={workExperience}></Section>
            <Section title="Projets" items={projects}></Section>
          </div>

          <div className='secondary-content'>
            qweqwewqeqwe
          </div>
        </div>

        <div className="resume-footer">
          <i>Les références seront fournies sur demande</i>
        </div>
      </div>
    </div>
  );
}

export default Resume;
