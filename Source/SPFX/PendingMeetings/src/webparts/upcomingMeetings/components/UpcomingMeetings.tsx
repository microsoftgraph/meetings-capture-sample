
import * as React from 'react';
import { Dropdown, IDropdownOption, Icon } from 'office-ui-fabric-react';
import './UpcomingMeetings.scss';

import { IUpcomingMeetingsProps } from './IUpcomingMeetingsProps';
import { IUpcomingMeetingsState } from './IUpcomingMeetingsState';

import { MSGraphService } from '../../../services/MSGraphService';


declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mgt-person": any;
      "mgt-agenda": any;
      "mgt-tasks": any;
    }
  }
}


export default class UpcomingMeetings extends React.Component<IUpcomingMeetingsProps, IUpcomingMeetingsState> {

  //refs:
  private agendaContainer: React.RefObject<HTMLHtmlElement>;
  private tasksContainer: React.RefObject<HTMLDivElement>;

  //planId & bucketId
  private targetId: string = "HBNsdXx8nUSG0TwWm-O5mGQAEf7N";
  private targetBucketId: string = "goqEyKeEF0WKmklqf6u-o2QAK2BN";

  //event
  private selectEventId: string = "";
  private selectEventTitle: string = "";

  //media query
  private mobileMediaQuery: MediaQueryList;

  private graphService: MSGraphService;
  constructor(props: IUpcomingMeetingsProps) {
    super(props);
    this.agendaContainer = React.createRef();
    this.tasksContainer = React.createRef();

    this.state = {
      loadedEvents: false,
      loadedTasks: false,
      assignedToMe: true,
      showEvents: true,
      view: 'desktop'
    };

    this.handTaskOptionsDropDownChange = this.handTaskOptionsDropDownChange.bind(this);
    this.getShortDateString = this.getShortDateString.bind(this);
    this.clickReturnIcon = this.clickReturnIcon.bind(this);


    this.triggerMediaQuery = this.triggerMediaQuery.bind(this);
    this.mobileMediaQuery = window.matchMedia('(max-width: 768px)');
    this.mobileMediaQuery.addListener(this.triggerMediaQuery);

  }
  public render(): React.ReactElement<IUpcomingMeetingsProps> {
    return (
      <div className="upcomingMeetings">
        <div className="container">
          <div className={this.state.loadedEvents && (this.state.view === "desktop" || this.state.showEvents) ? "events" : "hide"} >
            <mgt-agenda event-query={`/groups/${this.props.teamId}/events?$filter=Extensions/any(f:f/id eq '${MSGraphService.ExtSchema}')&$expand=Extensions($filter=id eq '${MSGraphService.ExtSchema}')`} group-by-day ref={this.agendaContainer}>
            </mgt-agenda>
          </div>
          <div className={this.state.loadedTasks && (this.state.view === "desktop" || !this.state.showEvents) ? "tasks" : "hide"}>
            <div className="dropDown">
              {
                this.state.view === "mobile" && <Icon iconName="ChevronLeft" className="returnIcon" onClick={this.clickReturnIcon} />
              }
              <label>Tasks assigned to </label>
              <Dropdown
                options={[
                  { key: 'me', text: 'Me' },
                  { key: 'all', text: 'All' }
                ]}
                defaultSelectedKey={this.state.assignedToMe ? "me" : "all"}
                onChange={this.handTaskOptionsDropDownChange}
              />
            </div>
            <div className="tasksConatiner" ref={this.tasksContainer}>
            </div>
          </div>
        </div>
      </div>
    );
  }
  public componentDidMount() {
    this.triggerMediaQuery(this.mobileMediaQuery);
    this.props.webPartContext.msGraphClientFactory.getClient()
      .then(graphClient => {
        this.graphService = new MSGraphService(graphClient);
        setTimeout(() => {
          this.graphService.getEventsByGroupAndChannel(this.props.teamId, this.props.channelId)
            .then(events => {

              this.agendaContainer.current["events"] = events;
              this.setState({ loadedEvents: true });
              this.agendaContainer.current.addEventListener('eventClick', (e: CustomEvent) => {
                let event = e.detail.event;

                if (this.selectEventId !== event.id) {
                  this.selectEventId = event.id;
                  this.selectEventTitle = event.subject;
                  this.loadTasks(event.extensions[0].bucketId);
                }
                if (this.state.view === "mobile") {
                  this.setState({ showEvents: false });
                }
              });
            });
        },
          3000);
      });
  }
  private triggerMediaQuery(mediaQuery) {
    this.setState({ view: mediaQuery.matches ? "mobile" : "desktop" });
  }
  private clickReturnIcon() {
    this.setState({ showEvents: true });
  }
  private handTaskOptionsDropDownChange(event, item: IDropdownOption) {
    if (item.key === "me") {
      this.setState({ assignedToMe: true });

      (this.tasksContainer.current.children[0]).removeAttribute("initial-id");
      (this.tasksContainer.current.children[0]).setAttribute("data-source", "planner");
    }
    else {
      this.setState({ assignedToMe: false });

      (this.tasksContainer.current.children[0]).setAttribute("initial-id", this.targetId);
      (this.tasksContainer.current.children[0]).setAttribute("data-source", "planner");
    }
  }
  private loadTasks(bucketId: string) {
    this.graphService.getPlannerBucket(bucketId)
      .then(bucket => {
        this.setState({ loadedTasks: true });
        if (this.tasksContainer.current.children) {
          for (var i = 0; i < this.tasksContainer.current.children.length; i++) {
            this.tasksContainer.current.children[i].remove();
          }
        }

        this.targetId = bucket.planId;
        this.targetBucketId = bucket.id;
        this.tasksContainer.current.innerHTML =
        `<mgt-tasks ` + (!this.state.assignedToMe ? `initial-id="${this.targetId}" ` : "") + `
        target-id="${this.targetId}" target-bucket-id="${this.targetBucketId}" read-only hide-header>
        <template data-type="task">
        <div class="task">
          <div class="TaskTitle"> {{task.name}}</div>
          <div class="TaskDetails">
            <div class="dueDate" data-if="task.dueDate">{{{taskTimeConverter(task.dueDate) }}}</div>
            <div class="eventTitle">${this.selectEventTitle}</div>
            <div class="eventStatus" data-if="task.completed">
            Status: <span>Completed</span>
            </div>
            <div class="eventStatus" data-else>
            Status: <span>New</span>
            </div>
          </div>
        </div>
        </template>
        </mgt-tasks>
        `;
        (this.tasksContainer.current.children[0] as any).templateConverters.taskTimeConverter = this.getShortDateString;
      });
  }

  private getShortDateString(date: Date) {
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    return `${this.getMonthString(month)} ${day}, ${year}`;
  }
  private getMonthString(month: number): string {
    switch (month) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sept';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
      default:
        return 'Month';
    }
  }
}
