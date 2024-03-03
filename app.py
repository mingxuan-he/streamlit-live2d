import streamlit as st
from __init__ import live2d_viewer

cubism2Model = "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json"

cubism4Model = "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/haru/haru_greeter_t03.model3.json"

# live2d-widget models
lw1 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json"
lw2 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-izumi@1.0.5/assets/izumi.model.json"
lw3 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-haru@1.0.5/01/assets/haru01.model.json"
lw4 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-hibiki@1.0.5/assets/hibiki.model.json"
lw5 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json"
lw6 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json"
lw7 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-nico@1.0.5/assets/nico.model.json"
lw8 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json"
lw9 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json"
lw10 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-miku@1.0.5/assets/miku.model.json"
lw11 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json"
lw12 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-z16@1.0.5/assets/z16.model.json"
lw13 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-nito@1.0.5/assets/nito.model.json"
lw14 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-nipsilon@1.0.5/assets/nipsilon.model.json"
lw15 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-ni-j@1.0.5/assets/ni-j.model.json"
lw16 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-tsumiki@1.0.5/assets/tsumiki.model.json"
lw17 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-unitychan@1.0.5/assets/unitychan.model.json"
lw18 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-gf@1.0.5/assets/Gantzert_Felixander.model.json"
lw19 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-epsilon2_1@1.0.5/assets/Epsilon2.1.model.json"
lw20 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-rem@1.0.1/assets/rem.model.json"
lw21 = "https://cdn.jsdelivr.net/npm/live2d-widget-model-nietzsche@1.0.5/assets/nietzche.model.json"


st.title("Live2D Component")
with st.container():
    #my_component("live2d")
    comp = live2d_viewer(modelPath=cubism4Model, key="live2d")
