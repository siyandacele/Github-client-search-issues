import { User } from './user';

export enum IssuesFilter {
  Open = 'open',
  Closed = 'closed',
}
interface Label {
  color: string;
  default: boolean;
  id: number;
  name: string;
  url: string;
}

export interface Issue {
  assignee: User;
  assignees: User[];
  author_association: string;
  closed_at: string;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: Label[];
  labels_url: string;
  body: string;
  locked: boolean;
  milestone: string;
  number: number;
  repository_url: string;
  state: string;
  title: string;
  updated_at: string;
  url: string;
  user: User;
}

export interface IssueSearchResult {
  total_count: number;
  open: number;
  closed: number;
  incomplete_status: boolean;
  items: Issue[];
}
