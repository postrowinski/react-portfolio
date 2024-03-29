import { IconProps } from "antd/lib/icon";

export interface Item {
  date: string;
  dot?: IconProps;
  color?: "red" | "green";
}

export const timelineProgressData: Item[] = [
  {
    date: "2016-9",
  },
  {
    date: "2016-10",
    dot: {
      style: {
        color: "#E34F27",
        fontSize: 24,
      },
      type: "html5",
    },
  },
  {
    color: "green",
    date: "2016-10 / 2016-12",
  },
  {
    date: "2016-11",
  },
  {
    date: "2016-12 / 2017-02",
    dot: {
      style: {
        color: "#9D1616",
        fontSize: 24,
      },
      type: "safety-certificate",
    },
  },
  {
    date: "2017-02",
  },
  {
    date: "2017-02",
  },
  {
    date: "2017-03",
  },
  {
    date: "2017-04 / 2017-07",
    dot: {
      style: {
        color: "#043C17",
        fontSize: 30,
      },
      type: "safety-certificate",
    },
  },
  {
    date: "2017-08",
    dot: {
      style: {
        fontSize: 24,
      },
      type: "search",
    },
  },
  {
    date: "2017-08",
    dot: {
      style: {
        color: "#E34F27",
        fontSize: 24,
      },
      type: "meh",
    },
  },
  {
    date: "2017-09 / 2018-01",
    dot: {
      style: {
        color: "#179B5A",
        fontSize: 24,
      },
      type: "code",
    },
  },
  {
    date: "2017-10",
    dot: {
      style: {
        color: "green",
        fontSize: 28,
      },
      type: "rise",
    },
  },
  {
    color: "green",
    date: "2017-10",
  },
  {
    date: "2017-11",
  },
  {
    date: "2017-11 / 2017-12",
  },
  {
    color: "red",
    date: "2017-12-13",
  },
  {
    date: "2017-12-21",
    dot: {
      style: {
        color: "goldenrod",
        fontSize: 28,
      },
      type: "trophy",
    },
  },
  {
    color: "green",
    date: "2018-01-10",
  },
  {
    date: "2018-01-10 / 2018-06",
  },
  {
    date: "2018-07",
  },
  {
    date: "2018-07 - 2019-02",
  },
  {
    date: "2018-10",
  },
  {
    date: "2018-11",
  },
  {
    date: "2019-03 / 2019-07",
  },
  {
    date: "2019-04",
  },
  {
    color: "green",
    date: "2019-07 / 2019-11",
  },
  {
    date: "2019-11-28",
    dot: {
      style: {
        color: "goldenrod",
        fontSize: 32,
      },
      type: "trophy",
    },
  },
  {
    date: "2019-12 / 2020-11",
  },
  {
    date: "2019-12",
    dot: {
      style: {
        color: "green",
        fontSize: 28,
      },
      type: "rise",
    },
  },
  {
    date: "2020-01 / 2020-04",
  },
  {
    date: "2020-07",
  },
  {
    color: "green",
    date: "2020-07 / 2020-08",
  },
  {
    date: "2020-09 / 2020-10",
  },
  {
    color: "green",
    date: "2020-11 / 2021-03",
  },
  {
    date: "2020-12",
    dot: {
      style: {
        color: "green",
        fontSize: 32,
      },
      type: "rise",
    },
  },
  {
    date: "2021-03",
    dot: {
      style: {
        color: "goldenrod",
        fontSize: 36,
      },
      type: "trophy",
    },
  },
  {
    color: "green",
    date: "2021-04",
  },
  {
    date: "2021-04 / 2021-07",
  },
  {
    date: "2021-07 / 2021-10",
  },
  {
    date: "2021-07 / 2021-10",
  },
  {
    date: "2021-10 / 2022-02",
  },
  {
    date: "2022-03-01",
    dot: {
      style: {
        color: "green",
        fontSize: 28,
      },
      type: "retweet",
    },
  },
  {
    date: "2022-03 / 2022-04",
  },
  {
    date: "2022-04 / 2022-05",
  },
  {
    date: "2022-06 / -",
  },
  {
    date: "2022-10 / -",
  },
];
