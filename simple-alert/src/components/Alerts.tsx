interface Props {
  alertTitle: string;
  alertbtn: () => void;
}
const Alerts = ({ alertbtn, alertTitle }: Props) => {
  return (
    <>
      <div
        className="alert alert-info alert-dismissible fade show"
        role="alert"
      >
        <strong>{alertTitle}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={alertbtn}
        ></button>
      </div>
    </>
  );
};
export default Alerts;
