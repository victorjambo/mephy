create table "users" ("id" serial primary key, "username" varchar(255) not null, "password" varchar(255) not null, "service" varchar(255) not null, "cookies" text, "status" text check ("status" in ('active', 'disabled', 'need_login', 'failed')) not null default 'need_login', "role" text check ("role" in ('user', 'admin', 'super_admin')) not null default 'user', "last_checked" timestamptz, "created_at" timestamptz, "updated_at" timestamptz);
create table "anatomies" ("id" serial primary key, "title" text);
create table "brands" ("id" serial primary key, "title" text);
create table "categories" ("id" serial primary key, "title" text, "description" text, "faIcon" text);
create table "anatomy_types" ("id" serial primary key, "title" text, "anatomy_id" integer);
create table "products" ("id" serial primary key, "title" text, "description" text, "rating" real, "prize" real, "initial_prize" real, "image" text, "brand_id" integer, "thumb" text, "flag" text);
create table "products_categories" ("id" serial primary key, "product_id" integer, "category_id" integer);
