declare type SelectItemProps = {
  selected?: string;
  onClick?: (value: string) => void;
  caption: (item: any) => string;
  item: any;
};

declare interface ScrollingSelectProps {
  items: any[];
  selected: string;
  gap: number;
  onChange: (selected: any) => void;
  caption: (item: any) => string;
}
