export type Project = {
  path: string;
  title: string;
}

export type ProjectGroup = {
  path: string;
  title: string;
  projects: Project[];
  icon: string;
}

export type ProjectList = ProjectGroup[];


