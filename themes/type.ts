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
    eduTime: Date[];
    school: string;
    degree: string;
  }>,
  selfIntroduction: string;
}
