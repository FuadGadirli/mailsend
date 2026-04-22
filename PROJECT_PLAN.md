# Mailsend Creads.az - Layihə Planı

## 🎯 Xülasə
Azərbaycanca email marketing SaaS platforması

## 📊 Rol Sistemi

### 1. Platform Admin (Siz)
- Platform ayarları
- Şirkətləri təsdiqləmə
- Global analytics

### 2. Super Admin (Şirkət sahibi)
- Şirkət profili
- Menecerləri əlavə/idarə etmə
- **Menecərə icazə vermə:**
  - ✅ Korporativ müştəri datalarını görmə
  - ✅ Şəxs kontakt datalarını görmə
  - ✅ E-poçt kampaniyalarını görmə/yaratma/göndərmə
  - (Hər icazə ayrı seçim olacaq)

### 3. Manager (İşçi)
- Super Admin-in verdiyi icazələrə görə məhdud əlaqə

---

## 🛠 Tech Stack
- **Frontend:** Next.js + TypeScript + Tailwind CSS
- **Backend:** Express.js (Next.js API Routes)
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Email:** Resend API
- **Dil:** Azərbaycanca (i18n sonra)

---

## 📅 Fazalar

### Phase 1: Foundation
- [ ] Landing page (Azərbaycan dilində)
- [ ] Qeydiyyat/Giriş sistemi
- [ ] Platform Admin panel (basit)

### Phase 2: Dashboard
- [ ] Super Admin dashboard
- [ ] Manager role system
- [ ] Permissions UI

### Phase 3: Functional
- [ ] Email sending
- [ ] Campaign management
- [ ] Analytics

---

## 💾 Database Struktur (Başlanğıc)

```sql
-- Users tablosu
users (id, email, password_hash, full_name, role, status, created_at)

-- Şirkətlər
companies (id, name, super_admin_id, status, created_at)

-- Menecerlər
managers (id, company_id, user_id, created_at)

-- Manager Icazələri
manager_permissions (id, manager_id, permission_key, granted_at)

-- Korporativ müştərilər
corporate_contacts (id, company_id, name, email, company_name, status)

-- Şəxsi kontaktlar
personal_contacts (id, company_id, name, email, phone, tags)

-- E-poçt kampaniyaları
campaigns (id, company_id, created_by, subject, content, status, sent_count, opened_count)
```

---

## 🔐 Permission Keys

```
PERMISSION_VIEW_CORPORATE = "view_corporate"
PERMISSION_MANAGE_CORPORATE = "manage_corporate"
PERMISSION_VIEW_CONTACTS = "view_contacts"
PERMISSION_MANAGE_CONTACTS = "manage_contacts"
PERMISSION_VIEW_CAMPAIGNS = "view_campaigns"
PERMISSION_CREATE_CAMPAIGNS = "create_campaigns"
PERMISSION_SEND_CAMPAIGNS = "send_campaigns"
```

---

## 🎨 Landing Page Struktur

1. **Navigation** - Logo + Login button
2. **Hero** - 3D(CSS) Mail Image + Başlıq
3. **Features** - 3 əsas xüsusiyyət
4. **CTA** - "Başla" düyməsi
5. **Footer**

Dil: **Azərbaycanca**

---

## 👤 Başlama Sırası

1. ✅ Landing page qurmaq
2. Qeydiyyat/Giriş
3. Admin approval panel
4. Dashboard hierarchy
