declare type SelectItemProps = {
  selected?: string;
  onClick?: (value: string) => void;
  caption: (item: any) => string;
  item: any;
};

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       "scrolling-select": React.DetailedHTMLProps<
//         React.HTMLAttributes<HTMLElement> & ScrollingSelectProps,
//         HTMLElement
//       >;
//     }
//   }
// }

declare interface ScrollingSelectProps {
  items: any[];
  selected: string;
  gap: number;
  onChange: (selected: any) => void;
  caption: (item: any) => string;
}
