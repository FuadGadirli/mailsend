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

// Database Types
export interface User {
  id: string
  email: string
  full_name: string
  role: UserRole
  status: 'active' | 'pending' | 'inactive'
  created_at: string
  updated_at: string
}

export interface Company {
  id: string
  name: string
  super_admin_id: string
  status: 'active' | 'pending' | 'inactive'
  daily_limit: number
  created_at: string
  updated_at: string
}

export interface Manager {
  id: string
  company_id: string
  user_id: string
  created_at: string
}

export interface ManagerPermission {
  id: string
  manager_id: string
  permission_key: PermissionKey
  granted_at: string
}

export interface CorporateContact {
  id: string
  company_id: string
  name: string
  email: string
  company_name: string
  phone?: string
  status: 'active' | 'inactive'
  created_at: string
}

export interface PersonalContact {
  id: string
  company_id: string
  name: string
  email: string
  phone?: string
  tags?: string[]
  created_at: string
}

export interface Campaign {
  id: string
  company_id: string
  created_by: string
  subject: string
  content: string
  content_type: 'text' | 'html'
  status: 'draft' | 'scheduled' | 'sent' | 'failed'
  sent_count: number
  opened_count: number
  clicked_count: number
  scheduled_at?: string
  sent_at?: string
  created_at: string
  updated_at: string
}

export interface DailyLimit {
  id: string
  user_id: string
  sent_today: number
  limit: number
  date: string
  reset_at: string
}
