
import type { Scene } from '../Types/Dialog';

// Scene
// Speaker: String, Dialog: String, Choice: Choice


export const MENU_DATA: Record<string,Scene> = 
  {
    startMenu:
      {
        speaker: "System",
        dialog: "=== Main Menu ===",
        choice: 
          [
            {
              key: "1",
              text: "NEW GAME",
              nextSceneId: "intro", //intro
              targetData: "menu" //story
            },
            {
              key: "2",
              text: "QUIT",
              nextSceneId: "exitScreen",
              targetData: "menu"
            }
          ]
      },
    exitScreen:
      {
        speaker: "System",
        dialog: "System is shutting down.",
        choice: []
      }

  }
