import './Section.css';

import { SectionItem, SectionItemProps } from './SectionItem';

interface SectionProps {
  title: string,
  items: SectionItemProps[]
}

function Section(props: SectionProps) {
  return (
    <div className="section">

      <div className="section-line"></div>
      <div className="section-title">
        {props.title}
      </div>

      {props.items.map(data => <SectionItem {...data} key={data.title1}></SectionItem>)}
    </div>
  );
}

export default Section;
