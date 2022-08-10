const Title1 = (props) => {
  const title = props.title;
  const configClassName = props.configClassName;
  return (
    <>
      <div className="flex items-center gap-[1rem]">
        <span className="w-[2rem] h-[2px] bg-textPrimary"></span>
        <h1 className={`${configClassName} text-textPrimary font-bold`}>
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title1;
