<script setup>
import { ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '');
const calendarRef = ref(null);

const colors = [
  { color: '#29CC39', bgColor: 'rgba(41, 204, 57, 0.05)' },
  { color: '#E62E7B', bgColor: 'rgba(230, 46, 123, 0.05)' },
  { color: '#33BFFF', bgColor: 'rgba(51, 191, 255, 0.05)' }
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const { color, bgColor } = getRandomColor()

const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T15:00:00',
    end: todayStr + 'T17:00:00'
  },
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr + 'T18:00:00',
    start: todayStr + 'T20:00:00',
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T09:00:00',
    start: todayStr + 'T10:00:00'
  }
]

function createEventId() {
  return String(eventGuid++)
}

const calendarOptions = {
  height: 'auto',
  initialEvents: INITIAL_EVENTS,
  selectable: true,
  eventBorderColor: color,
  eventBackgroundColor: bgColor,
  eventTextColor: color,
  displayEventTime: true,
  slotMinTime: '09:00:00',
  allDaySlot: false,
  dayHeaderFormat: { weekday: 'long', day: 'numeric', omitCommas: true },
  slotMaxTime: '21:00:00',
  slotLabelFormat: { hour: 'numeric', hour12: false },
  editable: true,
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  dayHeaderClassNames: 'full-calendar-day-header',
  dayHeaderContent: (arg) => {
    const dayOfWeek = arg.date.getDay();
    const dayOfMonth = arg.date.getDate();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[dayOfWeek];

    const formattedDate = `${dayName} ${dayOfMonth}`;

    return formattedDate;
  },
  eventClassNames: function (arg) {
    return ['full-calendar-event']
  },
  windowResize: function (arg) {
    // alert('The calendar has adjusted to a window resize. Current view: ' + arg.view.type);
  },

  headerToolbar: {
    left: 'today',
    center: 'prev,title,next',
    right: 'dayGridYear,dayGridMonth,timeGridWeek,timeGridDay'
  },
  buttonText: {
    today: 'Today',
    month: 'Month',
    week: 'Week',
    day: 'Day',
    year: 'Year'
  },
  nowIndicator: true,
  expandRows: true,
  initialView: "timeGridWeek",
  editable: true,
  selectable: true,
  selectMirror: false,
  dayMaxEvents: false,
  allDaySlot: false,
  eventDurationEditable: false,
  eventOverlap: false,
  fixedWeekCount: false,
  navLinks: true,
  weekNumberCalculation: "ISO",
  selectAllow: function (select) {
    return moment().diff(select.start) <= 0;
  }
};

const events = [
  {
    title: 'event1',
    start: '2025-07-01',
  },
  {
    title: 'event2',
    start: '2025-07-05',
    end: '2025-07-04',
    display: 'background'
  },
  {
    title: 'event3',
    start: '2025-07-09T12:30:00',
    allDay: false,
    display: 'background'
  },
];

</script>

<template>
  <FullCalendar :options="calendarOptions" :events="events" class="full-calendar" />
</template>

<style scoped>
.full-calendar {
  @apply bg-white py-[30px] rounded-[20px] h-[88vh];
}

:deep(.fc-header-toolbar) {
  @apply flex justify-between px-[30px];
}

:deep(.fc-header-toolbar .fc-toolbar-chunk:nth-child(2) div:nth-child(1) h2) {
  @apply text-[16px] leading-[20px] font-[700];
}


:deep(.fc-header-toolbar .fc-toolbar-chunk:nth-child(2) div:nth-child(1)) {
  @apply flex gap-[30px] items-center;
}

:deep(.fc-header-toolbar .fc-toolbar-chunk:nth-child(1) button:nth-child(1)) {
  @apply text-[14px] leading-[20px] font-[600] bg-transparent text-secondary px-[20px] py-[10px] border-grey rounded-[20px];
}


:deep(.fc-header-toolbar .fc-toolbar-chunk .fc-prev-button),
:deep(.fc-header-toolbar .fc-toolbar-chunk .fc-next-button) {
  @apply flex items-center justify-center w-[28px] h-[28px] rounded-[14px] bg-transparent text-secondary text-[12px] text-opacity-[50%] border-[1px] border-grey;
}

:deep(.fc-header-toolbar .fc-toolbar-chunk .fc-button-group .fc-button) {
  @apply bg-transparent border-grey text-secondary hover:font-[600];
}

:deep(.fc-header-toolbar .fc-toolbar-chunk .fc-button-group .fc-button-active) {
  @apply font-[600] focus:outline-none focus:ring-0;
}


:deep(.fc-header-toolbar .fc-toolbar-chunk .fc-button-group .fc-button:first-child) {
  @apply rounded-l-[40px];
}

:deep(.fc-header-toolbar .fc-toolbar-chunk .fc-button-group .fc-button:last-child) {
  @apply rounded-r-[40px];
}

:deep(.fc-view table:first-child table thead th) {
  @apply py-[50px] px-[25px] text-[14px] leading-[20px] font-[600];
}


:deep(.fc-view table td) {
  @apply border-grey;
}

:deep(.fc-view table td table tr td) {
  /* @apply bg-white  p-[10px]; */
}


:deep(.fc-view table td .full-calendar-event),
:deep(.fc-view table td .fc-event .full-calendar-event) {
  @apply bg-secondary border-[1px];
}


tr[data-time="09"] > td:not(:first-child)
{
  border-top: transparent !important;
}
</style>
