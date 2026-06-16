-- Run once in Supabase → SQL Editor (safe to re-run)
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  slot_date date not null,
  slot_time text not null,
  created_at timestamptz not null default now(),
  unique (slot_date, slot_time)
);

alter table public.bookings enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert, delete on public.bookings to anon, authenticated;

drop policy if exists "Public read bookings" on public.bookings;
drop policy if exists "Public insert bookings" on public.bookings;
drop policy if exists "Public delete bookings" on public.bookings;

create policy "Public read bookings"
  on public.bookings for select
  to anon, authenticated
  using (true);

create policy "Public insert bookings"
  on public.bookings for insert
  to anon, authenticated
  with check (true);

create policy "Public delete bookings"
  on public.bookings for delete
  to anon, authenticated
  using (true);