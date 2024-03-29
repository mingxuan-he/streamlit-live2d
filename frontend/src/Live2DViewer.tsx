import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';
import { Streamlit, ComponentProps, withStreamlitConnection } from 'streamlit-component-lib';
declare global {
    interface Window {
      PIXI: typeof PIXI;
    }
  }

export interface Live2DViewerArgs {
    modelPath: string
}


const Live2DViewer = ({ args }: ComponentProps) => {
    const {modelPath} : Live2DViewerArgs = args

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    Streamlit.setFrameHeight(1000);
    useEffect(() => {
        window.PIXI = PIXI;
        const app = new PIXI.Application({
          view: canvasRef.current ?? undefined,
          resizeTo: window,
          transparent: true,
        });
    
        const resizeModel = (model: any) => {
            
            const windowAspectRatio = app.screen.width / app.screen.height;
            const modelAspectRatio = model.width / model.height;
            let scale = 1;
            if (windowAspectRatio > modelAspectRatio) {
              scale = app.screen.height / model.height;
            } else {
              scale = app.screen.width / model.width;
            }
            model.scale.set(scale);
            model.position.set(app.screen.width / 2, app.screen.height / 2); // Center the model
          };
    
        (async function () {
          const model = await Live2DModel.from(modelPath);
          app.stage.addChild(model);
    
          // Handle window resizing
          window.addEventListener('resize', () => {
            app.renderer.resize(window.innerWidth, window.innerHeight);
            resizeModel(model);
          });
    
          // Initial model positioning
          model.anchor.set(0.5, 0.5);
          model.x = app.renderer.width / 2;
          model.y = app.renderer.height / 2;
          const windowAspectRatio = app.screen.width / app.screen.height;
            const modelAspectRatio = model.width / model.height;
            let scale = 1;
            if (windowAspectRatio > modelAspectRatio) {
              scale = app.screen.height / model.height;
            } else {
              scale = app.screen.width / model.width;
            }
          model.scale.set(scale);

          Streamlit.setFrameHeight(model.height);
    
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
        <canvas ref={canvasRef} style={{ width: "100", height: "100" }}/>
        </>
        //<div>Hello world!</div>
        );
    
    };

export default withStreamlitConnection(Live2DViewer);
//export default Live2DViewer;