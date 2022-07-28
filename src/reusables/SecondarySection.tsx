import './SecondarySection.css';

interface SkillProps {
  name: string,
  level: number
}

interface SecondarySectionProps {
  title: string,
  skills: SkillProps[]
}

function Skill(props: SkillProps) {
  const circles = [];

  for(let i = 0; i < 5; i++) {
    let circleClass = "";

    if (((props.level - 1) / 2) > i) {
      circleClass = "full-circle";
    } else if ((props.level - 1) / 2 === i && props.level % 2 === 1) {
      circleClass = "half-circle";
    } else {
      circleClass = "empty-circle";
    }

    circles.push((
      <span className={"skill-circle " + circleClass} key={i}>
        <span className="first-circle-half"></span>
        <span className="second-circle-half"></span>
      </span>
    ));
  }

  console.log(circles);

  return (
      <div className="skill">
        {props.name}
        <div className="skill-circle-group">
          {circles}
        </div>
      </div>
    )
}

function SecondarySection(props: SecondarySectionProps) {
  return (
    <div className="secondary-section">

      <div className="secondary-section-line"></div>
      <div className="secondary-section-title">
        {props.title}
      </div>

      {props.skills.map(s => <Skill {...s} key={s.name}></Skill>)}
    </div>
  );
}

export default SecondarySection;
