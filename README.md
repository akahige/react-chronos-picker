# React Chronos Picker

React Chronos Picker is a powerful, flexible, and highly customizable date picking library for React. It gives you the flexibility to choose between using the provided default components or your own custom ones.

## Visuals

<table>
  <tr>
    <td><img src="https://github.com/akahige/react-chronos-picker/assets/74684504/ac3f08fa-1912-49a0-86b1-bf566dadd139" alt="Screenshot 2023-07-16 at 18-15-48 React Chronos Picker" width="300"></td>
    <td><img src="https://github.com/akahige/react-chronos-picker/assets/74684504/3ef41181-25b8-44be-94c1-8ecc1181bc96" alt="Screenshot 2023-07-16 at 18-13-57 React Chronos Picker" width="300"></td>
  </tr>
</table>



## Installation

Use npm to install React Chronos Picker in your project:

```bash
npm install @asidd/react-chronos-picker
```

## Usage

You can use React Chronos Picker with the default elements or with your own custom ones. It also provides a built-in picker option.

Here are some examples:

Default Elements with Built-in Picker

```jsx
import { ReactChronosPicker } from "@asidd/react-chronos-picker";

<ReactChronosPicker
  theme={"light"}
  weekend={weekend}
  monthFormat={"MMM"}
  weekDayFormat={"short"}
  events={events}
  date={date2}
  format={"YYYY-MM-DD"}
  onDateChange={handleDateChange2}
  minMax={["2023-06-14", "2023-08-18"]}
  dayElement={<Day />}
  dayNameElement={<Name />}
  headerElement={<Header />}
>
  <button>{date2.join(" | ")}</button>
</ReactChronosPicker>;
```

Default Elements without Picker

```jsx
import { ReactChronos } from "@asidd/react-chronos-picker";

<ReactChronos
  theme={"light"}
  weekend={weekend}
  monthFormat={"MMMM"}
  weekDayFormat={"long"}
  events={events}
  date={date3}
  format={"YYYY-MM-DD"}
  onDateChange={handleDateChange3}
  minMax={minMax}
  dayElement={<Day />}
  dayNameElement={<Name />}
  headerElement={<Header />}
/>;
```

Custom Elements without Picker

```jsx
import { ReactChronos, useLocalContext } from "@asidd/react-chronos-picker";

// MyCustomDay
const MyCustomDay = () => {
  const { day } = useLocalContext();

  return <div>{day}</div>;
};

// MyCustomDayName
const MyCustomDayName = () => {
  const { name } = useLocaleContext();

  return <div>{name}</div>;
};

// MyCustomHeader
const MyCustomHeader = () => {
  const current = useLocaleContext();

  return (
    <div>
      <h1>
        {current.format("MMMM")} {current.format("YYYY")}
      </h1>
    </div>
  );
};

const App = () => {
  // Define your date, events, weekend, format, etc here.
  // For simplicity, I'm using placeholders in this example
  const date3 = ["2023-01-01"];
  const events = [];
  const weekend = [];
  const format = "YYYY-MM-DD";
  const minMax = ["2022-01-01", "2024-12-31"];

  const handleDateChange3 = (newDate) => {
    // Handle date change here.
    console.log(newDate);
  };

  return (
    <ReactChronos
      theme={"light"}
      weekend={weekend}
      monthFormat={"MMMM"}
      weekDayFormat={"long"}
      events={events}
      date={date3}
      format={format}
      onDateChange={handleDateChange3}
      minMax={minMax}
      dayElement={<MyCustomDay />}
      dayNameElement={<MyCustomDayName />}
      headerElement={<MyCustomHeader />}
    />
  );
};

export default App;
```

In custom elements, you can use various hooks provided by React Chronos Picker to access the states and props. Some of these hooks include:

The `useLocalContext()` hook provides different values depending on the element.

## Components

### ReactChronos

This is the base component of the library and is responsible for rendering the calendar itself.

```jsx
<ReactChronos
  theme={"light"}
  weekend={weekend}
  monthFormat={"MMMM"}
  weekDayFormat={"long"}
  events={events}
  date={date}
  format={"YYYY-MM-DD"}
  onDateChange={handleDateChange}
  minMax={minMax}
  dayElement={<CustomDay />}
  dayNameElement={<CustomDayName />}
  headerElement={<CustomHeader />}
/>
```

Props:

- `theme`: Determines the theme of the calendar. Can be either `"light"` or `"dark"`.
- `weekend`: An array of numbers representing the weekend days. Sunday is `0`, Monday is `1`, etc.
- `monthFormat`: Format string for the month label.
- `weekStart`: Determines the start day of the week. Sunday is `0`, Monday is `1`, etc.
- `weekDayFormat`: Determines the format of the week day names. Can be `"long"`, `"short"`, or `"narrow"`.
- `events`: An array of event dates.
- `date`: The currently selected date.
- `format`: Format string for the date.
- `onDateChange`: Function to handle date change events.
- `minMax`: An array with two dates determining the minimum and maximum selectable dates.
- `dayElement`: A custom day element.
- `dayNameElement`: A custom day name element.
- `headerElement`: A custom header element.

### ReactChronosPicker

This is a wrapper component that makes `ReactChronos` work as a date picker. It can be attached to any input field or button.

```jsx
<ReactChronosPicker
  theme={"light"}
  weekend={weekend}
  monthFormat={"MMM"}
  weekDayFormat={"short"}
  events={events}
  date={date}
  format={"YYYY-MM-DD"}
  onDateChange={handleDateChange}
  minMax={minMax}
  dayElement={<CustomDay />}
  dayNameElement={<CustomDayName />}
  headerElement={<CustomHeader />}
>
  <button>{date.join(" | ")}</button>
</ReactChronosPicker>
```

In addition to all the props of `ReactChronos`, `ReactChronosPicker` accepts a `children` prop, which can be any React node that should trigger the date picker when clicked.

### Default UI Components

The library provides some pre-defined components that provide a simple UI out of the box. These are mainly meant to be used as the `dayElement`, `dayNameElement`, and `headerElement` props in `ReactChronos` and `ReactChronosPicker`.

You can import the default components like this:

```jsx
import { Name, Header, Day } from "@asidd/react-chronos-picker";
```

And then use them in your component:

```jsx
<ReactChronos
  dayElement={<Day />}
  dayNameElement={<Name />}
  headerElement={<Header />}
  ...
/>
```

#### Name

This component is used to render the names of the weekdays.

#### Header

This component is used to render the header of the calendar, which includes the month and year labels, as well as the previous and next buttons.

#### Day

This component is used to render each day in the calendar.

You can use these components as they are, or create your own custom components. If you decide to create your own components, you can make use of the hooks provided by the library to access the calendar state and control its behavior.

## API References

### useLocalContext

`useLocalContext` is a custom hook provided by `@asidd/react-chronos-picker` that gives access to various values and functionalities within the scope of custom elements. The values it returns depend on the context in which it is used -- for example, when used within a custom day element (`dayElement`), it provides access to information and functionalities related to that specific day.

#### `useLocalContext` in `dayElement`

When `useLocalContext` is used within `dayElement`, it provides access to the following values and functionalities:

- `currentDay`: Represents the day of the month for the current day being rendered as a Chronos object.

- `isEnabled`: A boolean indicating whether the day can be selected.

- `isDateRange`: A boolean indicating whether the date picker is in range selection mode.

- `isWeekend`: A boolean indicating whether the current day is a weekend.

- `chronos`: Represents the current month being rendered as a Chronos object.

- `day`: The current day as a string in the format used in the `ReactChronos` props.

- `onClick`: Function that handles click events on the current day.

- `onMouseEnter`: Function that handles mouse enter events on the current day.

- `isStartDay`: A boolean indicating whether the current day is the start of a selected range.

- `isEndDay`: A boolean indicating whether the current day is the end of a selected range.

- `inRange`: A boolean indicating whether the current day falls within a selected range.

- `isHovered`: A boolean indicating whether the current day is being hovered over by the mouse.

Here is an example of how to use `useLocalContext` within a custom day element:

```jsx
import { useLocalContext } from "@asidd/react-chronos-picker";

function MyCustomDay() {
  const {
    currentDay,
    filtredEvents,
    isEnabled,
    isDateRange,
    isWeekend,
    chronos,
    day,
    onClick,
    onMouseEnter,
    isStartDay,
    isEndDay,
    inRange,
    isHovered,
  } = useLocalContext();

  // ... your custom day component logic here ...

  return (
    // ... your custom day component JSX here ...
  );
}
```

#### `useLocalContext` in `dayNameElement`

When `useLocalContext` is used within `dayNameElement`, it provides access to the following values:

- `isWeekend`: A boolean indicating whether the current day name represents a weekend.

- `name`: The name of the current day.

Here is an example of how to use `useLocalContext` within a custom day name element:

```jsx
import { useLocalContext } from "@asidd/react-chronos-picker";

function MyCustomDayName() {
  const { isWeekend, name } = useLocalContext();

  // ... your custom day name component logic here ...

  return (
    // ... your custom day name component JSX here ...
  );
}
```

### `useLocalContext` in `headerElement`

When using the `useLocalContext` hook in a custom `headerElement`, it provides the following properties:

- `handleNext`: A method to navigate to the next month. This action is controlled by the `minMax` property, and may be disabled based on its values.
- `handlePrevious`: A method to navigate to the previous month. This action is also controlled by the `minMax` property, and may be disabled based on its values.
- `isPreviousEnabled`: A boolean indicating whether navigation to the previous month is enabled, controlled by the `minMax` property.
- `isNextEnabled`: A boolean indicating whether navigation to the next month is enabled, also controlled by the `minMax` property.
- `chronos`: A Chronos instance representing the currently displayed month.
- `handleSelectMonth`: A method to set a new month. It accepts a new Chronos instance as its parameter. Unlike the previous and next navigation methods, this is not controlled by the `minMax` property, to give developers more flexibility in custom scenarios.

Here is an example of how to use `useLocalContext` within a custom `headerElement`:

```jsx
import { useLocalContext } from "@asidd/react-chronos-picker";

function MyCustomHeader() {
  const {
    handleNext,
    handlePrevious,
    isPreviousEnabled,
    isNextEnabled,
    chronos,
    handleSelectMonth,
  } = useLocalContext();

  // ... your custom header component logic here ...

  return (
    // ... your custom header component JSX here ...
  );
}
```

## `useProps` Hook

`useProps` hook is available to all custom elements in order to access certain properties from the `ReactChronos` component. The properties that can be accessed through `useProps` are:

- `dayElement`: The custom element for the days in the calendar.
- `dayNameElement`: The custom element for the day names in the calendar.
- `events`: The events that are set for the days.
- `format`: The format for the dates.
- `minMax`: The minimum and maximum dates that can be selected.
- `monthFormat`: The format for the months.
- `weekend`: The days that are set as weekends.

You can also pass any custom properties to the `ReactChronos` component and access them through `useProps` within your custom elements, like in the case of the `events` property.

Here is an example of how to use `useProps` within a custom day element:

```jsx
import { useProps } from "@asidd/react-chronos-picker";

function MyCustomDay() {
  const { events } = useProps();

  // ... your custom day component logic here ...

  return (
    // ... your custom day component JSX here ...
  );
}
```

## Documentation

Detailed documentation and more examples will be available soon in the React Chronos Picker Storybook. Stay tuned for updates.

## License

This project is licensed under the terms of the MIT License. For more details, see the [LICENSE](LICENSE) file.
