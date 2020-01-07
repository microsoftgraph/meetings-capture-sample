import * as Graph from '@microsoft/microsoft-graph-types';
export interface IUpcomingMeetingsState {
  loadedEvents: boolean;
  loadedTasks: boolean;
  assignedToMe: boolean;
  showEvents: boolean;
  view:string;
}