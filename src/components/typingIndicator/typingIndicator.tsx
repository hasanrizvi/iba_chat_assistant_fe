import './styles.css';

export default function TypingIndicator() {
  return (
    <div className={`ticontainer`}>
      <div className="tiblock">
        <div className="tidot"></div>
        <div className="tidot"></div>
        <div className="tidot"></div>
      </div>
    </div>
  )
}
