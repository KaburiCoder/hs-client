export const questionIds = {
  history: {
    head: "historyHead",
    n1: "history_1",
    n2: "history_2",
    n3: "history_3",
  },
  smoking: {
    head: "smokeHead",
    n4: "smoke_4",
    n4_1: "smoke_4-1",
    n5: "smoke_5",
    n5_1: "smoke_5-1",
    n6: "smoke_6",
    n6_1: "smoke_6-1",
  },
  drink: {
    head: "drinkHead",
    n7: "drink_7",
    n7_1: "drink_7-1",
    n7_2: "drink_7-2",
  },
  activity: {
    head: "activityHead",
    n8_1: "activity_8-1",
    n8_2: "activity_8-2",
    n9_1: "activity_9-1",
    n9_2: "activity_9-2",
    n10: "activity_10",
  },
};

interface IKeyTitle {
  key: string;
  title: string;
}

export const n1ObjectList: IKeyTitle[] = [
  { key: "stroke", title: "뇌졸증(중풍)" },
  { key: "angina", title: "심근경색/협심증" },
  { key: "hypertension", title: "고혈압" },
  { key: "diabetes", title: "당뇨병" },
  { key: "dyslipidemia", title: "이상지질혈증" },
  { key: "PT", title: "폐결핵" },
  { key: "others", title: "기타(암포함)" },
];

export const n2ObjectList: IKeyTitle[] = [
  { key: "stroke", title: "뇌졸증(중풍)" },
  { key: "angina", title: "심근경색/협심증" },
  { key: "hypertension", title: "고혈압" },
  { key: "diabetes", title: "당뇨병" },
  { key: "others", title: "기타(암포함)" },
];
