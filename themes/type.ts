type Date = `${number}${number}${number}${number}.${number}${number}.${number}${number}`;

export interface ThemeOptions {
  profile: {
    name: string;
    email: string;
    mobile: string;
    github?: string;
    blog?: string;
    avator?: string;
  },
  educations: Array<{
    eduTime: [Date, Date];
    school: string;
    degree: string;
  }>,
  selfIntroduction: string;
  workExperience: Array<{
    companyName: string;
    department: string;
    workTime: [Date, Date] | [Date, null];
    workDesc: string;
  }>
}
