import ApartmentsIcon from "@/components/icons/apartmentsIcon.vue";
import DashboardIcon from "@/components/icons/dashboardIcon.vue";
import EmployeesIcon from "@/components/icons/employeesIcon.vue";
import ExpensesIcon from "@/components/icons/expensesIcon.vue";
import GeneratorIcon from "@/components/icons/generatorIcon.vue";
import MaintenaceIcon from "@/components/icons/maintenaceIcon.vue";
import MyCalendarIcon from "@/components/icons/myCalendarIcon.vue";
import RoomsIcon from "@/components/icons/roomsIcon.vue";

export const links = [
  { path: '/', label: 'Dashboard', icon: DashboardIcon },
  { path: '/apartments', label: 'My apartments', icon: ApartmentsIcon },
  { path: '/rentedRooms', label: 'Rented rooms', icon: RoomsIcon },
  { path: '/calendar', label: 'My calendar', icon: MyCalendarIcon },
  { path: '/expenses', label: 'Expenses', icon: ExpensesIcon },
  { path: '/employees', label: 'Employees', icon: EmployeesIcon },
  { path: '/generator', label: 'Generator', icon: GeneratorIcon },
  { path: '/maintenance', label: 'Maintenance', icon: MaintenaceIcon },
]