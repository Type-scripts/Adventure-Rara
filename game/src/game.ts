
class Game 
  {
    private lastTime: number = 0;
    private isRunning: boolean = false;
    
    constructor()
      {

      }

    public start(): void
      {
        if(this.isRunning) return;
        this.isRunning = true;
      }

    public stop(): void
      {
        this.isRunning = false;
      }


    public makeChoice(nextScence: string): void
      {
        this.currentSceneId = nextScenceId;
        this.render();
      }
  }
