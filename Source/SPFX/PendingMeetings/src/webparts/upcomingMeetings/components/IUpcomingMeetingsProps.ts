import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IUpcomingMeetingsProps {
  teamId: string;
  channelId: string;
  webPartContext: WebPartContext;
}
