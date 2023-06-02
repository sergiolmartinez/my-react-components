import classNames from "classnames";

export default function Panel({ children, className, ...rest }) {
  const classes = classNames(
    className,
    "bborder rounded p-3 shadow bg-white w-full"
  );

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}
