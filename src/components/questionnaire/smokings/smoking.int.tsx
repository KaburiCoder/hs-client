import { ISmokingResult, ISmokingTerm } from "health-src-shared";

export default interface PartialSmokingResult extends Partial<ISmokingResult> {
  term: PartialSmokingTerm;
}
export interface PartialSmokingTerm extends Partial<ISmokingTerm> {}
