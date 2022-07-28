import './Section.css';

import { SectionItem, SectionItemProps } from './SectionItem';

interface SectionProps {
  title: string,
  items: SectionItemProps[]
}

function Section(props: SectionProps) {
  return (
    <div>
      <div className="section-title">
        {props.title}
      </div>

      {props.items.map(i => <SectionItem {...i}></SectionItem>)}
    </div>
  );
}

export default Section;
