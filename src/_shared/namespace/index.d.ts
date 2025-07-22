export interface Pagination {
  total: number;
  pageSize: number;
  current: number;
  onChange: (page: number, pageSize: number) => void;
  showSizeChanger?: boolean;
  showTotal: (total: number, range: [number, number]) => ReactNode;
}

export type NavItem = {
  label: string | React.ReactNode;
  key: string;
  icon: React.ReactNode;
  url?: string;
  children?: NavItem[];
};