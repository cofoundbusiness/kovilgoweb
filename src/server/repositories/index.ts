import 'server-only';

/**
 * Base Repository Interface.
 * Encapsulates database queries and mutations via Drizzle ORM.
 */
export interface BaseRepository<T, TInsert> {
  findById(id: string): Promise<T | null>;
  create(data: TInsert): Promise<T>;
}
