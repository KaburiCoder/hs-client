export interface ISmoking {
  n4?: boolean;
  n4_1?: ISmokingResult;
  n5?: boolean;
  n5_1?: ISmokingResult;
  n6?: boolean;
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
