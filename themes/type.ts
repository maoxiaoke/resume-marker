export interface ThemeOptions {
  profile: {
    name: string;
    email: string;
    mobile: string;
    github?: string;
    blog?: string;
    avator?: string;
  };
  educations: Array<{
    eduTime: [string, string];
    school: string;
    degree: string;
  }>;
  selfIntroduction: string;
  workExperience: Array<{
    companyName: string;
    department: string;
    workTime: [string, string] | [string, null];
    workDesc: string;
  }>;
  projects: Array<{
    name: string;
    role: string;
    time: string;
    github?: string;
    intro?: string;
    desc: string;
  }>
}
