import { parseISO, format } from "date-fns";
const Date = (props) => {
  const date = parseISO(props.dateString);
  return (
    <time dateTime={props.dateString}>{format(date, "LLLL d, yyyy")}</time>
  );
};

export default Date;
