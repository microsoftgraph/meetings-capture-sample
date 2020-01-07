import { MSGraphClient } from '@microsoft/sp-http';
import * as Graph from '@microsoft/microsoft-graph-types';
/**
 * Provides methods to access Microsoft Graph APIs.
 */
export class MSGraphService {
  public static ExtSchema: string = "meetingCapture.Extensions";
  constructor(private client: MSGraphClient) {
  }

  public getEventsByGroupAndChannel(groupId: string, channelId:string): Promise<Graph.Event[]> {
    return new Promise((resolve, reject) => {
      this.client.api(`/groups/${groupId}/calendar/events`)
      .filter(`Extensions/any(f:f/id eq '${MSGraphService.ExtSchema}')`)
      .expand(`Extensions($filter=id eq '${MSGraphService.ExtSchema}')`)
      .get((error, events) => {
        if (error) reject(error);
        else {
          let returnEvents = [];
          for(var i = 0; i < events.value.length ; i ++)
          {
            let extensions = events.value[i].extensions;
            if(extensions){
              let extension = extensions[0];
              if(extension.channelId && extension.channelId === channelId){
                returnEvents.push(events.value[i]);
              }
            }
          }
          console.log("getEventsByGroupAndChannel "+ returnEvents.length);
          resolve(returnEvents);
        }
        
      });
    });
  }
  public getPlannerBucket(bucketId:string): Promise<Graph.PlannerBucket> {
    return new Promise((resolve, reject) => {
      this.client.api(`/planner/buckets/${bucketId}`).get((error, bucket) => {
        if (error) reject(error);
        else resolve(bucket);
      });
    });
  }

}