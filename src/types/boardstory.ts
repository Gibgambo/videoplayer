export interface TextSection {
  id: string;
  content: string;
}

export interface Board {
  id: string;
  imageUrl: string;
  audioUrl?: string;
  textSections: TextSection[];
}

export interface Boardstory {
  id: string;
  title: string;
  boards: Board[];
  createdAt: string;
  updatedAt: string;
}
