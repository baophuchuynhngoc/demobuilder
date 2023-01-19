import grapesjs from "grapesjs";
import basicBlock from "grapesjs-blocks-basic";
import pluginExport from "grapesjs-plugin-export";
import presetPlugin from "grapesjs-preset-webpage";
import gjsForms from "grapesjs-plugin-forms";
import styleFilter from "grapesjs-style-filter";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import React, { useEffect } from "react";

export default function Page(props) {
  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      height: "100vh",
      width: "100%",
      plugins: [presetPlugin, pluginExport, basicBlock, gjsForms, styleFilter],
      storageManager: {
        id: "gjs-",
        type: "local",
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices: [
          {
            id: "desktop",
            name: "Desktop",
            width: "",
          },
          {
            id: "tablet",
            name: "Tablet",
            width: "768px",
            widthMedia: "992px",
          },
          {
            id: "mobilePortrait",
            name: "Mobile portrait",
            width: "320px",
            widthMedia: "575px",
          },
        ],
      },
    });
  }, []);

  return <div id="gjs" style={{ height: "100%" }}></div>;
}
