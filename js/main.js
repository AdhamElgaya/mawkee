/* ===== Mawkee — Main JavaScript ===== */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initHeader();
  initLogo();
  initNav();
  initCursorGlow();
  initRevealAnimations();
  initCounterAnimation();
  if (document.getElementById('bookingForm')) {
    initBookingSystem();
  }
});

/* ----- Header scroll effect ----- */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ----- Logo slide into M on scroll ----- */
function initLogo() {
  const logo = document.getElementById('siteLogo');
  if (!logo || window.scrollY > 50) return;

  logo.classList.add('is-entering');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      logo.classList.remove('is-entering');
    });
  });
}

/* ----- Mobile navigation ----- */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ----- Cursor glow follow ----- */
function initCursorGlow() {
  const glow = document.querySelector('.cursor-glow');
  if (!glow || window.matchMedia('(pointer: coarse)').matches) {
    if (glow) glow.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animate);
  }
  animate();
}

/* ----- Scroll reveal animations ----- */
function initRevealAnimations() {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
    el.classList.add('visible');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement.querySelectorAll('.reveal');
          const index = Array.from(siblings).indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.1}s`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    if (!el.closest('.hero')) {
      observer.observe(el);
    }
  });
}

/* ----- Counter animation ----- */
function initCounterAnimation() {
  document.querySelectorAll('.hero .stat-number').forEach((counter) => {
    animateCounter(counter);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.stat-number').forEach((counter) => {
    if (!counter.closest('.hero')) {
      observer.observe(counter);
    }
  });
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ===== Booking System ===== */
function initBookingSystem() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const config = () => window.BOOKING_CONFIG || {};

  const state = {
    currentMonth: new Date(),
    selectedDate: null,
    selectedTime: null,
    reservedSlots: new Set(),
  };

  const calendarDays = document.getElementById('calendarDays');
  const calendarMonth = document.getElementById('calendarMonth');
  const timeSlotsSection = document.getElementById('timeSlotsSection');
  const timeSlots = document.getElementById('timeSlots');
  const toStep2 = document.getElementById('toStep2');
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const success = document.getElementById('bookingSuccess');
  const selectedDatetime = document.getElementById('selectedDatetime');

  const TIME_SLOTS = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM',
  ];

  function hasSlotStorage() {
    const c = config();
    return Boolean(c.supabaseUrl?.trim() && c.supabaseAnonKey?.trim());
  }

  function formatSlotDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function slotKey(date, time) {
    return `${formatSlotDate(date)}|${time}`;
  }

  function supabaseHeaders() {
    const key = config().supabaseAnonKey.trim();
    return {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    };
  }

  function supabaseBase() {
    return config().supabaseUrl.trim().replace(/\/$/, '');
  }

  async function fetchReservedSlotsForMonth(year, month) {
    if (!hasSlotStorage()) return new Set();

    const monthStr = String(month + 1).padStart(2, '0');
    const lastDay = new Date(year, month + 1, 0).getDate();
    const start = `${year}-${monthStr}-01`;
    const end = `${year}-${monthStr}-${String(lastDay).padStart(2, '0')}`;
    const url = `${supabaseBase()}/rest/v1/bookings?select=slot_date,slot_time&slot_date=gte.${start}&slot_date=lte.${end}`;

    const res = await fetch(url, { headers: supabaseHeaders() });
    if (!res.ok) throw new Error('Failed to load reserved slots');

    const rows = await res.json();
    return new Set(rows.map((row) => `${row.slot_date}|${row.slot_time}`));
  }

  async function refreshReservedSlots() {
    if (!hasSlotStorage()) {
      state.reservedSlots = new Set();
      return;
    }

    try {
      state.reservedSlots = await fetchReservedSlotsForMonth(
        state.currentMonth.getFullYear(),
        state.currentMonth.getMonth()
      );
    } catch {
      state.reservedSlots = new Set();
    }

    if (state.selectedDate) renderTimeSlots();
  }

  async function parseApiError(res) {
    try {
      const data = await res.json();
      return data.message || data.hint || data.error_description || data.error || `Request failed (${res.status})`;
    } catch {
      return `Request failed (${res.status})`;
    }
  }

  function slotTimeFilter(time) {
    return `eq."${time.replace(/"/g, '')}"`;
  }

  async function reserveSlot(date, time) {
    const res = await fetch(`${supabaseBase()}/rest/v1/bookings`, {
      method: 'POST',
      headers: { ...supabaseHeaders(), Prefer: 'return=minimal' },
      body: JSON.stringify({
        slot_date: formatSlotDate(date),
        slot_time: time,
      }),
    });

    if (res.status === 409) return { ok: false, taken: true };
    if (!res.ok) {
      const message = await parseApiError(res);
      return { ok: false, error: message };
    }
    return { ok: true };
  }

  async function releaseSlot(date, time) {
    const dateStr = formatSlotDate(date);
    const url = `${supabaseBase()}/rest/v1/bookings?slot_date=eq.${dateStr}&slot_time=${slotTimeFilter(time)}`;
    await fetch(url, { method: 'DELETE', headers: supabaseHeaders() });
  }

  function isSlotReserved(date, time) {
    return state.reservedSlots.has(slotKey(date, time));
  }

  function showFormError(message) {
    const formError = document.getElementById('bookingFormError');
    formError.textContent = message;
    formError.hidden = false;
  }

  function getWeekdays() {
    return t('booking.weekdaysFull');
  }

  function getMonths() {
    return t('booking.months');
  }

  function renderCalendar() {
    const year = state.currentMonth.getFullYear();
    const month = state.currentMonth.getMonth();
    const months = getMonths();
    calendarMonth.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    calendarDays.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day empty';
      calendarDays.appendChild(empty);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'cal-day';
      el.textContent = day;

      if (date < today || date.getDay() === 0 || date.getDay() === 6) {
        el.classList.add('disabled');
      }

      if (date.getTime() === today.getTime()) {
        el.classList.add('today');
      }

      if (state.selectedDate && date.getTime() === state.selectedDate.getTime()) {
        el.classList.add('selected');
      }

      if (!el.classList.contains('disabled')) {
        el.addEventListener('click', () => selectDate(date, el));
      }

      calendarDays.appendChild(el);
    }
  }

  function selectDate(date, el) {
    state.selectedDate = date;
    state.selectedTime = null;
    toStep2.disabled = true;

    calendarDays.querySelectorAll('.cal-day').forEach(d => d.classList.remove('selected'));
    el.classList.add('selected');

    refreshReservedSlots().then(() => {
      renderTimeSlots();
      timeSlotsSection.hidden = false;
    });
  }

  function renderTimeSlots() {
    timeSlots.innerHTML = '';
    TIME_SLOTS.forEach(time => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'time-slot';
      btn.textContent = time;

      const booked = state.selectedDate && isSlotReserved(state.selectedDate, time);
      if (booked) {
        btn.classList.add('booked');
        btn.disabled = true;
      }

      if (state.selectedTime === time && !booked) btn.classList.add('selected');

      if (!booked) {
        btn.addEventListener('click', () => {
          state.selectedTime = time;
          timeSlots.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
          btn.classList.add('selected');
          toStep2.disabled = false;
        });
      }

      timeSlots.appendChild(btn);
    });

    if (state.selectedTime && state.selectedDate && isSlotReserved(state.selectedDate, state.selectedTime)) {
      state.selectedTime = null;
      toStep2.disabled = true;
    }
  }

  function formatSelectedDateTime() {
    if (!state.selectedDate || !state.selectedTime) return '';
    const weekdays = getWeekdays();
    const months = getMonths();
    const day = weekdays[state.selectedDate.getDay()];
    const date = state.selectedDate.getDate();
    const month = months[state.selectedDate.getMonth()];
    const year = state.selectedDate.getFullYear();
    const at = t('booking.datetimeAt');

    if (getLang() === 'ar') {
      return `${day}، ${month} ${date}، ${year} ${at} <strong>${state.selectedTime}</strong>`;
    }
    return `${day}, ${month} ${date}, ${year} ${at} <strong>${state.selectedTime}</strong>`;
  }

  function setFormStep(step) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(s => s.classList.toggle('active', parseInt(s.dataset.step) === step));
    step1.classList.toggle('active', step === 1);
    step2.classList.toggle('active', step === 2);
  }

  document.getElementById('prevMonth').addEventListener('click', async () => {
    const now = new Date();
    const prev = new Date(state.currentMonth.getFullYear(), state.currentMonth.getMonth() - 1, 1);
    if (prev >= new Date(now.getFullYear(), now.getMonth(), 1)) {
      state.currentMonth = prev;
      await refreshReservedSlots();
      renderCalendar();
    }
  });

  document.getElementById('nextMonth').addEventListener('click', async () => {
    state.currentMonth = new Date(state.currentMonth.getFullYear(), state.currentMonth.getMonth() + 1, 1);
    await refreshReservedSlots();
    renderCalendar();
  });

  toStep2.addEventListener('click', () => {
    selectedDatetime.innerHTML = formatSelectedDateTime();
    setFormStep(2);
  });

  document.getElementById('backToStep1').addEventListener('click', () => {
    setFormStep(1);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const message = document.getElementById('message').value.trim();
    const formError = document.getElementById('bookingFormError');
    const submitBtn = document.getElementById('submitBooking');
    const submitLabel = submitBtn.querySelector('span');

    if (!name || !email || !state.selectedDate || !state.selectedTime) return;

    const accessKey = config().web3formsAccessKey?.trim();
    if (!accessKey) {
      showFormError(t('booking.notConfigured'));
      return;
    }

    if (!hasSlotStorage()) {
      showFormError(t('booking.slotsNotConfigured'));
      return;
    }

    await refreshReservedSlots();
    if (isSlotReserved(state.selectedDate, state.selectedTime)) {
      showFormError(t('booking.slotTaken'));
      setFormStep(1);
      renderTimeSlots();
      return;
    }

    const weekdays = getWeekdays();
    const months = getMonths();
    const day = weekdays[state.selectedDate.getDay()];
    const dateStr = `${months[state.selectedDate.getMonth()]} ${state.selectedDate.getDate()}, ${state.selectedDate.getFullYear()}`;
    const formattedDatetime = getLang() === 'ar'
      ? `${day}، ${dateStr} ${t('booking.datetimeAt')} ${state.selectedTime}`
      : `${day}, ${dateStr} ${t('booking.datetimeAt')} ${state.selectedTime}`;

    formError.hidden = true;
    submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = t('booking.submitting');

    try {
      const reserved = await reserveSlot(state.selectedDate, state.selectedTime);
      if (!reserved.ok) {
        if (reserved.taken) {
          await refreshReservedSlots();
          showFormError(t('booking.slotTaken'));
          setFormStep(1);
          renderTimeSlots();
          return;
        }
        throw new Error(reserved.error);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Mawkee meeting request — ${name}`,
          from_name: 'Mawkee Website',
          name,
          email,
          replyto: email,
          company: company || '—',
          message: message || '—',
          date: dateStr,
          time: state.selectedTime,
          formatted_datetime: formattedDatetime,
        }),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        await releaseSlot(state.selectedDate, state.selectedTime);
        throw new Error(t('booking.emailInvalidResponse'));
      }

      if (!response.ok || !result.success) {
        await releaseSlot(state.selectedDate, state.selectedTime);
        throw new Error(result.message || t('booking.error'));
      }

      state.reservedSlots.add(slotKey(state.selectedDate, state.selectedTime));

      form.hidden = true;
      success.hidden = false;

      const timePart = getLang() === 'ar'
        ? `${t('booking.datetimeAt')} <strong>${state.selectedTime}</strong>`
        : `${t('booking.datetimeAt')} <strong>${state.selectedTime}</strong>`;

      document.getElementById('successMessage').innerHTML = t('booking.successMsg')
        .replace('{name}', name)
        .replace('{day}', day)
        .replace('{date}', dateStr)
        .replace('{time}', timePart)
        .replace('{email}', email);
    } catch (err) {
      console.error('Booking submit failed:', err);
      showFormError(err.message || t('booking.error'));
    } finally {
      submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = t('booking.confirm');
    }
  });

  document.getElementById('bookAnother').addEventListener('click', async () => {
    state.selectedDate = null;
    state.selectedTime = null;
    form.reset();
    form.hidden = false;
    success.hidden = true;
    timeSlotsSection.hidden = true;
    toStep2.disabled = true;
    document.getElementById('bookingFormError').hidden = true;
    setFormStep(1);
    await refreshReservedSlots();
    renderCalendar();
  });

  refreshReservedSlots().then(() => renderCalendar());

  document.addEventListener('languageChanged', () => {
    renderCalendar();
    if (state.selectedDate && state.selectedTime) {
      selectedDatetime.innerHTML = formatSelectedDateTime();
    }
  });
}
