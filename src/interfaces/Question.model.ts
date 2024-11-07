type QuestionType = "MULTIPLE_CHOICE" | "TEXT";
type Option = "Bueno" | "Malo" | "Regular" | "SI" | "NO";

export interface Question {
  type: QuestionType;
  title: string;
  options: Array<Option>;
  _id: {
    $oid: string;
  };
}
