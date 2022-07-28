import './SectionItem.css';

interface SectionItemProps {
  title1: string,
  title2: string,
  title3: string,

  description: string | null,

  subtitle: string | null,
}

function SectionItem(props: SectionItemProps) {
  return (
    <div className="section-item">    
      <div className="titles">
        {props.title1 ? <b className="title1">{props.title1}</b> : null}
        
        {props.title2 ? <span className="title2">{", " + props.title2}</span> : null}
        {props.title3 ? <i className="title3">{" - " + props.title3}</i> : null}
      </div>

      {props.subtitle ? <div className="subtitle">{props.subtitle}</div> : null}
      {props.description ? <div className="description">{props.description}</div> : null}
    </div>
  );
}

export {
  SectionItem,
  SectionItemProps
}
