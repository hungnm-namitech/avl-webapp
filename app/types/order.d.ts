interface Order {
  id: string;
  label: string;
  show: boolean;
}
type LabelSticky = {
  text: string;
  selected: boolean;
};
type LinkHref = {
  text: string;
  link: string;
};
type ItemsDetailRow = {
  label: string;
  content: string | React.JSX.Element;
};
