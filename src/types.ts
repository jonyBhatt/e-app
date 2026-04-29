export interface Person {
  id: string;
  name: string;
  phone: string;
  father_name: string;
  mother_name: string;
  date_of_birth: string;
  job?: string;
  word_no?: string;
  address: {
    area: string;
    locality: string;
    sub_district: string;
    district: string;
  };
}
