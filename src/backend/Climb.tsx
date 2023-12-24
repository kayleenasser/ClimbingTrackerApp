export class Climb {
  grade: Grade;
  ascended: boolean;

  hello() {
    return "Climb";
  }
}

type Grade = BoulderGrade;

type BoulderGrade = VerminGrade;

class VerminGrade {
  kind: "VerminGrade";
  scale: ["VIntro", "VB", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8",
          "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17"]
  grade: number;
}
