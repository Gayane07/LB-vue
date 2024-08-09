<script setup>
import { ref, toRaw } from 'vue';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

const colors = [
      { color: '#29CC39', bgColor: 'rgba(41, 204, 57, 0.05)' },
      { color: '#E62E7B', bgColor: 'rgba(230, 46, 123, 0.05)' },
      { color: '#33BFFF', bgColor: 'rgba(51, 191, 255, 0.05)' }
    ];

    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };

    const { color, bgColor} = getRandomColor()

 const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr + 'T18:00:00'
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T24:00:00'
  }
]

 function createEventId() {
  return String(eventGuid++)
}

const calendarOptions = {
  height: 'auto',
  initialEvents: INITIAL_EVENTS,
  selectable: true,
  expandRow: true,
  eventBorderColor: color,
  eventBackgroundColor: bgColor,
  eventTextColor: color,
  displayEventTime: true,
  displayEnventEnd: true,
  slotMinTime: '09:00:00',
  allDaySlot: false,
  dayHeaderFormat: { weekday: 'long',  day: 'numeric', omitCommas: true },
  slotMaxTime: '21:00:00',
  slotLabelFormat: {hour: 'numeric', minute: '2-digit', hour12: false},
  editable: true, 
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  dayHeaderClassNames : 'full-calendar-day-header',
  dayHeaderContent : (arg) => {
    return arg.text;
  },
  event: (event, element) => {
   console.log(event, 'eventtttt')
   console.log(element, 'elementeeeeeeee')
  },
  eventClassNames: function(arg) {
  return [ 'full-calendar-event' ]
},
  windowResize: function(arg) {
    // alert('The calendar has adjusted to a window resize. Current view: ' + arg.view.type);
  },

  headerToolbar: {
    left: 'today',
    center: 'prev,title,next',
    right: 'dayGridYear,dayGridMonth,timeGridWeek,timeGridDay'
  },
  // event: {renderEventContent},
  views: {
    dayGrid: {
      // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
    },
    timeGrid: {
      // options apply to timeGridWeek and timeGridDay views
    },
    week: {
      // options apply to dayGridWeek and timeGridWeek views
    },
    day: {
      // options apply to dayGridDay and timeGridDay views
    }
  },
  buttonText: {
  today:    'Today',
  month:    'Month',
  week:     'Week',
  day:      'Day',
  year:     'Year'
},
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
  },
  {
    title: 'event3',
    start: '2025-07-09T12:30:00',
    allDay: false,
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

:deep(.fc-header-toolbar)  {
  @apply flex justify-between px-[30px];
}

:deep(.fc-header-toolbar .fc-toolbar-chunk:nth-child(2) div:nth-child(1) h2) {
  @apply text-[16px] leading-[20px] font-[700];
}


:deep(.fc-header-toolbar .fc-toolbar-chunk:nth-child(2) div:nth-child(1)) {
  @apply flex gap-[30px] items-center;
}

:deep(.fc-header-toolbar .fc-toolbar-chunk:nth-child(1) button:nth-child(1)) {
  @apply text-[14px] leading-[20px] font-[600] bg-transparent text-secondary px-[20px] py-[10px] border-[#E4E4E4] rounded-[20px];
}


:deep(.fc-header-toolbar .fc-toolbar-chunk .fc-prev-button), :deep(.fc-header-toolbar .fc-toolbar-chunk .fc-next-button) {
  @apply flex items-center justify-center w-[28px] h-[28px] rounded-[14px] bg-transparent text-secondary text-[12px] text-opacity-[50%] border-[1px] border-[#E4E4E4];
}

:deep(.fc-header-toolbar .fc-toolbar-chunk .fc-button-group .fc-button) {
  @apply bg-transparent border-[#E4E4E4] text-secondary  hover:font-[600];
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
:deep(.fc-view table:first-child  table thead th) {
  @apply p-[10px] text-[14px] leading-[20px] font-[600];
}

:deep(.fc-view table td)  {
  @apply border-[#E4E4E4];  
}


:deep(.fc-view table td .full-calendar-event) {
  @apply bg-secondary;  
}

</style>






