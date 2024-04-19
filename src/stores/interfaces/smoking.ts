export interface ISmoking {
  n4?: boolean;
  n4_1?: ISmokingResult;
  n5?: boolean;
  n5_1?: ISmokingResult;
  n6?: boolean;
  n6_1: ISmokingN6d1;
}

export interface ISmokingResult {
  smoking?: boolean;
  term?: ISmokingTerm;
}

export interface ISmokingTerm {
  totalYears?: number;
  cigarettes?: number;
  quitYears?: number;
}

export enum ISmokingN6d1 {
  no,
  everyDay,
  month_1_2,
  month_3_9,
  month_10_29,
}
