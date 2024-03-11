import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';
//import { Streamlit, ComponentProps, withStreamlitConnection } from 'streamlit-component-lib';
declare global {
    interface Window {
      PIXI: typeof PIXI;
    }
  }

export interface Live2DViewerArgs {
    modelPath: string
}


//const Live2DViewer = ({ args }: ComponentProps) => {
const Live2DViewer = () => {
    //const {modelPath} : Live2DViewerArgs = args

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    //Streamlit.setFrameHeight(1000);
    useEffect(() => {
        window.PIXI = PIXI;
        const app = new PIXI.Application({
          view: canvasRef.current ?? undefined,
          resizeTo: window,
          //transparent: true,
        });
    
        const resizeModel = (model: any) => {
            model.position.set(app.screen.width / 2, app.screen.height / 2); // Center the model
            // Adjust scale if necessary, depending on your model's default size and your preferences
          };
    
        (async function () {
          //const modelPath = "E:/live2d_components/models/haru/haru_greeter_t03.model3.json"
          //const modelPath = "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/haru/haru_greeter_t03.model3.json"
          const modelPath = "http://localhost:3001/models/CeresFree/Ceres.model3.json"

          const model = await Live2DModel.from(modelPath);
          app.stage.addChild(model);
    
          // Handle window resizing
          window.addEventListener('resize', () => {
            app.renderer.resize(window.innerWidth, window.innerHeight);
            resizeModel(model);
          });
    
          // Transforms
          model.x = app.renderer.width / 2;
          model.y = app.renderer.height / 2;
          model.scale.set(0.1);
          model.anchor.set(0.5, 0.5);

          //Streamlit.setFrameHeight(model.height);
    
          // Interaction
          model.on("hit", (hitAreas) => {
            if (hitAreas.includes("Body")) {
              model.motion("Tap");
            }
        
            if (hitAreas.includes("Head")) {
              model.expression();
            }
          });
        })();
        // Cleanup on component unmount
        return () => window.removeEventListener('resize', resizeModel);

      }, []);
    
        return (
        <>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }}/>
        </>
        //<div>Hello world!</div>
        );
    
    };

//export default withStreamlitConnection(Live2DViewer);
export default Live2DViewer;