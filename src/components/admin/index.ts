/**
 * Admin Components — TanStack Table data wrappers, sidebar, metrics cards.
 * To be built in Admin Dashboard Phase.
 */
export interface AdminTableColumn<T> {
  id: string;
  header: string;
  accessorKey?: keyof T;
}
