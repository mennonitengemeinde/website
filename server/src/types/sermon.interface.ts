export enum SermonType {
  Opening = "OPENING",
  Message = "MESSAGE",
}

export enum SermonVisibility {
  Hidden = "HIDDEN",
  Members = "MEMBERS",
}

export interface ISermon {
  id: number;
  eventId: number;
  sermonType: SermonType;
  title: string;
  description?: string;
  speakers: { speakerId: number; speakerName: string }[];
  audioLowUrl?: string;
  audioMedUrl?: string;
  audioHighUrl?: string;
  videoUrl?: string;
  livestreamUrl?: string;
  live: boolean;
  visibility: SermonVisibility;
  views: number;
  lowDownloads: number;
  medDownloads: number;
  highDownloads: number;
}
