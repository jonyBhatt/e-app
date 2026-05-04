export interface Person {
  id: string;
  voter_no?: string;
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

export interface VoterState {
  selectedVoters: Person[];
  toggleVoter: (person: Person) => void;
  clearAll: () => void;
  selectMany: (people: Person[]) => void;
}

export interface Feature {
  title: string;
  subtitle: string;
  badge: string;
  icon: string; // emoji or icon path
  href?: string; // optional link for the feature
}
