// User Roles
export enum UserRole {
  PLATFORM_ADMIN = 'platform_admin',
  SUPER_ADMIN = 'super_admin',
  MANAGER = 'manager',
}

// Permission Keys
export enum PermissionKey {
  VIEW_CORPORATE = 'view_corporate',
  MANAGE_CORPORATE = 'manage_corporate',
  VIEW_CONTACTS = 'view_contacts',
  MANAGE_CONTACTS = 'manage_contacts',
  VIEW_CAMPAIGNS = 'view_campaigns',
  CREATE_CAMPAIGNS = 'create_campaigns',
  SEND_CAMPAIGNS = 'send_campaigns',
}

export interface AuthRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  fullName: string
  email: string
  password: string
}
