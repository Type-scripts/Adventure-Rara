

import * as readline from 'readline';

import type { Scene, Choice } from './Types/Dialog.js';
import { MENU_DATA } from './Dialog/MenuData.js';
import { STORY_DATA } from './Dialog/StoryData.js';
export class Game 
  {
    private currentDataType: "menu" | "story" = "menu";
    private currentSceneId: string = "mainMenu";

    private lastTime: number = 0;
    private isRunning: boolean = false;
    

    private rl: readline.Interface;
    
    constructor()
      {
        this.rl = readline.createInterface
          ({
            input: process.stdin,
            output: process.stdout
          });
      }

    public start(): void
      {
        this.loadScene("startMenu", "menu");
        if(this.isRunning) return;
        this.isRunning = true;
      }

    public stop(): void
      {
        this.isRunning = false;
      }


    public makeChoice(nextSceneId: string): void
      {
        this.currentSceneId = nextSceneId;
        this.render();
      }

    public render(): void
      {

        const dataSet: Record<string, Scene>  = this.currentDataType === "menu" ? MENU_DATA : STORY_DATA;
        const scene: Scene | undefined = dataSet[this.currentSceneId];

        if(!scene) return

        if(scene.speaker)
          {
            console.log(`[${scene.speaker}]`);
          }
        console.log(scene.dialog);
        console.log("");
        
        if(scene.choice.length === 0)
          {
            this.rl.close();
            return
          }

        scene.choice.forEach((choice) => 
          {
            console.log(`[ ${choice.key} ] ${choice.text}`);

          });

        this.promptUser(scene.choice);
        
      }

    public loadScene(sceneId: string, dataType: "menu" | "story"): void
      {
        console.clear();
        this.currentSceneId = sceneId;
        this.currentDataType = dataType;
        this.render();
      }


    public clearScreen(): void
      {
      }


    private promptUser(choices: Choice[]): void
      {
        this.rl.question("\nSelect an option > ", (answer) => 
          {
            const selected = choices.find((c: Choice) => c.key === answer.trim());
            if (selected) 
              {
                const target = selected.targetData || this.currentDataType;
                this.loadScene(selected.nextSceneId, target);
              }
            else
              {
                console.log("invalid option");
                setTimeout(() => this.loadScene(this.currentSceneId, this.currentDataType), 800 );
              }
          });
      }
  }
