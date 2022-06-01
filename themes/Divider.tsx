import './divider.css';

const Divider = ({ title }: { title: string}) => {
  return (
    <div className="resume-divider">
      <div className="divider-title">{ title }</div>
      <div className="divider-line"></div>
    </div>
  )
};

export default Divider;