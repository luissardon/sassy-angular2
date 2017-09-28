export class ICharacter {
  id:number;
  name:string;
  description:string;
  modified:Date;
  resourceURI:string;
  urls:IUrl[];
  thumbnail:IThumbnail;
  comics:IComics;
  stories:IStories;
  events:IEvents;
  series:ISeries;
}

class IUrl {
  type:string;
  url:string;
}

class IThumbnail {
  path:string;
  extension:string;
}

class IAppearsIn {
  available:number;
  returned:number;
  collectionURI:string;
  items:IAppearsInItem[];
}

class IAppearsInItem {
  resourceURI:string;
  name:string;
}

class IComics extends IAppearsIn {
  items:IComicsItem[];
}

class IComicsItem extends IAppearsInItem {};

class IStories extends IAppearsIn {
  items:IStoriesItem[];
}

class IStoriesItem extends IAppearsInItem {
  type:string;
}

class IEvents extends IAppearsIn {
  items:ISeriesItem[];
}

class IEventsItem extends IAppearsInItem {};

class ISeries extends IAppearsIn {
  items:ISeriesItem[];
}

class ISeriesItem extends IAppearsInItem {};
