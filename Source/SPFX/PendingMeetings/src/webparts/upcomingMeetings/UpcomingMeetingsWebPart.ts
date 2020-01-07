import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'UpcomingMeetingsWebPartStrings';
import UpcomingMeetings from './components/UpcomingMeetings';
import { IUpcomingMeetingsProps } from './components/IUpcomingMeetingsProps';

// import the providers at the top of the page
//import { Providers, SharePointProvider } from '@microsoft/mgt/dist/commonjs';
import {Providers, SharePointProvider} from '@microsoft/mgt';
import * as microsoftTeams from '@microsoft/teams-js';

export interface IUpcomingMeetingsWebPartProps {
  description: string;
  teamId: string;
  channelId: string;
}

export default class UpcomingMeetingsWebPart extends BaseClientSideWebPart<IUpcomingMeetingsWebPartProps> {
    // set the global provider
  protected async onInit() {
    Providers.globalProvider = new SharePointProvider(this.context);
  }

  public render(): void {
    if(this.context.microsoftTeams){
      this.context.microsoftTeams.getContext(context =>{
        console.log("group Id "+ context.groupId +" channelId "+ context.channelId);
        const element: React.ReactElement<IUpcomingMeetingsProps > = React.createElement(
          UpcomingMeetings,
          {
            teamId: context.groupId,
            channelId: context.channelId,
            webPartContext: this.context
          }
        );
        ReactDom.render(element, this.domElement);
      });
    }
    else{
      const element: React.ReactElement<IUpcomingMeetingsProps > = React.createElement(
        UpcomingMeetings,
        {
          teamId: this.properties.teamId,
          channelId: this.properties.channelId,
          webPartContext: this.context
        }
      );
  
      ReactDom.render(element, this.domElement);
    } 
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('teamId', {
                  label: 'Team Id Text Field',
                  multiline: false
                }),
                PropertyPaneTextField('channelId', {
                  label: 'Channel Id Text Field',
                  multiline: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
