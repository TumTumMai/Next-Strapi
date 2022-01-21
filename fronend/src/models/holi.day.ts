export interface IHolidayData {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

export interface Attributes {
  holidaystart: string;
  holidayend: string;
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

export interface IHoliday {
  data: Datum[];
  meta: Meta;
}
