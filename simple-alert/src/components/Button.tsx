interface Props {
  title: string;
  color: string;
  btnClicked : ()=>void
}
const Button = ({ title, color, btnClicked }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color}
      onClick={btnClicked}>
        {title}
      </button>
    </>
  );
};

export default Button;
