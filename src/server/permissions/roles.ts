import 'server-only';

export type UserRole = 'customer' | 'concierge' | 'admin' | 'superadmin';

export type Permission =
  | 'bookings:read:self'
  | 'bookings:create:self'
  | 'bookings:cancel:self'
  | 'bookings:manage:all'
  | 'destinations:read'
  | 'destinations:write'
  | 'packages:read'
  | 'packages:write'
  | 'quotations:create'
  | 'quotations:manage:all'
  | 'audit:read'
  | 'users:manage';

export const ROLE_PERMISSIONS: Record<UserRole, readonly Permission[]> = {
  customer: [
    'bookings:read:self',
    'bookings:create:self',
    'bookings:cancel:self',
    'destinations:read',
    'packages:read',
    'quotations:create',
  ],
  concierge: [
    'bookings:read:self',
    'bookings:create:self',
    'bookings:cancel:self',
    'bookings:manage:all',
    'destinations:read',
    'packages:read',
    'quotations:create',
    'quotations:manage:all',
  ],
  admin: [
    'bookings:read:self',
    'bookings:create:self',
    'bookings:cancel:self',
    'bookings:manage:all',
    'destinations:read',
    'destinations:write',
    'packages:read',
    'packages:write',
    'quotations:create',
    'quotations:manage:all',
    'audit:read',
    'users:manage',
  ],
  superadmin: [
    'bookings:read:self',
    'bookings:create:self',
    'bookings:cancel:self',
    'bookings:manage:all',
    'destinations:read',
    'destinations:write',
    'packages:read',
    'packages:write',
    'quotations:create',
    'quotations:manage:all',
    'audit:read',
    'users:manage',
  ],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  const permissions = ROLE_PERMISSIONS[role];
  return permissions ? permissions.includes(permission) : false;
}
