import { FC } from "react";

// const Hello = ({ text }: { text: string }): React.ReactElement => {
//   return <div>{text}</div>;
// };
interface IProps {
  text: string;
}

const Hello: FC<IProps> = (props) => {
  return <div>{props.text}</div>;
};

export default Hello;