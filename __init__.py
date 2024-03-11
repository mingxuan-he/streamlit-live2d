import os
import streamlit as st
import streamlit.components.v1 as components

_RELEASE = False

if _RELEASE:
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")
    
    _component_func = components.declare_component(
        "Live2DViewer",
        path=build_dir,
    )
else:
    _component_func = components.declare_component(
        "Live2DViewer",
        url="http://localhost:3001",
    )
    
def live2d_viewer(modelPath, key=None):
    component_value = _component_func(modelPath=modelPath, key=key, default=0)
    return component_value


__all__ = ["live2d_viewer"]
