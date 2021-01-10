export enum EventVisibility {
  Hidden = "HIDDEN",
  Members = "MEMBERS",
}

export interface IEvent {
  id: number;
  churchId: number;
  churchName: string;
  startTime: Date;
  endTime: Date;
  title: string;
  description: string;
  address: string;
  mapSearchQuery: string;
  inPersonEvent: boolean;
  streamedLive: boolean;
  attendanceLimit: number;
  attendanceSignupRequired: boolean;
  visibleTo: EventVisibility;
}
