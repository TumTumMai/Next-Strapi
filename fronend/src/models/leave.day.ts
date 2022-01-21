// export interface ILeaveday {
//   id: number;
//   publishedAt: Date;
//   createdAt: Date;
//   updatedAt: Date;
//   leavedaystart: string;
//   leavedayend: string;
//   title: string;
// }
export interface ILeaveData {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

export interface Attributes {
  leavedaystart: string;
  leavedayend: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface ILeaveDay {
  data: Datum[];
  meta: Meta;
}
