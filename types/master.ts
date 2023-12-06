export interface Province {
  id?: number;
  name: string;
  orderNumber?: number;
}

export interface District {
  id?: number;
  name: string;
  provinceId?: number;
  orderNumber?: number;
}

export interface Ward {
  id?: number;
  name: string;
  provinceId?: number;
  districtId?: number;
  orderNumber?: number;
}

export type SortItem = { key: string, order?: boolean | 'asc' | 'desc' }

export type DataTableHeader = {
  key: string;
  title: string;
  colspan?: number;
  rowspan?: number;
  fixed?: boolean;
  align?: 'start' | 'end';
  width?: number;
  minWidth?: string;
  maxWidth?: string;
  sortable?: boolean;
};