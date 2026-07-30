

export interface Choice 
  {
    key: string;
    text: string;
    nextSceneId: string;
    targetData?: "menu" | "story";
  }


export interface Scene
  {
    speaker?: string;
    dialog: string;
    choice: Choice[];
  }
