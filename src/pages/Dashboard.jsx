import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { ReactComponent as EditIcon } from "../icons/edit.svg";
import { ReactComponent as AddIcon } from "../icons/plus.svg";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs for new widgets
import { Icon } from "@iconify/react";
import { ReactComponent as ResizeHandle} from "../icons/corner-bottom-resize.svg";
const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const [rowHeight, setRowHeight] = useState(25); // Default row height
  const gridContainerRef = React.useRef(null); // Ref to the grid container
  const margin = [16, 16]; // Assuming a 10px margin for simplicity, adjust as needed
  const maxRows = 6;

  const [isResizable, setIsResizable] = useState(true); // Add state for resizeability
  const [isDraggable, setIsDraggable] = useState(true); // Add state for draggability
  const [isAddItem, setIsAddItem] = useState(false); // Add state for draggability
  const toggleEditMode = () => {
    setIsResizable(!isResizable);
    setIsDraggable(!isDraggable); // Toggle draggability along with resizeability
  };

  const toggleAddItem = () => {
    setIsAddItem(!isAddItem);
  };

  const [widgets, setWidgets] = useState([
    { id: "a", type: "graph1", title: "North / Sector 14 A" },
    { id: "b", type: "graph2", title: "North / Sector 14 B" },
    { id: "c", type: "graph1", title: "Old City / Bari" },
    { id: "d", type: "Mapa GIS", title: "Mapa GIS" },
    // Initial widgets could also be loaded from localStorage
  ]);
  const availableWidgets = [
    {
      id: "linegraph",
      title: "Line Graph",
      description: "A Line Graph",
      defaultSize: { w: 3, h: 3, minW: 2, minH: 2 },
    },
    {
      id: "barChart",
      title: "Bar Chart",
      description: "A Bar Chart",
      defaultSize: { w: 4, h: 3, minW: 2, minH: 2 },
    },
    {
      id: "calendar",
      title: "Calendar",
      description: "A Show Data in a Date grid",
      defaultSize: { w: 4, h: 3, minW: 2, minH: 2 },
    },
    // Add other widgets as needed
  ];

  const addWidget = (widgetType) => {
    const newWidget = {
      id: uuidv4(), // Generate a unique ID for the new widget
      type: widgetType,
    };
    const nextY = widgets.reduce((acc, widget) => {
      const currentWidgetLayout = layouts.lg.find((l) => l.i === widget.id);
      if (currentWidgetLayout) {
        return Math.max(acc, currentWidgetLayout.y + currentWidgetLayout.h);
      }
      return acc;
    }, 0);

    setWidgets([...widgets, { ...newWidget, y: nextY }]); // Store y if needed
  };

  const removeWidget = (widgetId) => {
    setWidgets(widgets.filter((widget) => widget.id !== widgetId));
    // Additional logic to update layout in state and localStorage
  };
  const generateLayouts = () => {
    return {
      lg: widgets.map((widget) => {
        const defaultSize = availableWidgets.find(
          (w) => w.id === widget.type
        ).defaultSize;
        return {
          i: widget.id,
          w: defaultSize.w,
          h: defaultSize.h,
          x: 0,
          y: widget.y || 0, // Use stored y or default to 0
          minW: defaultSize.minW,
          minH: defaultSize.minH,
        };
      }),
      // Repeat for other breakpoints if necessary
    };
  };

  const enforceRowLimit = (layout) => {
    let modified = false;
    const adjustedLayout = layout.map((item) => {
      // Calculate the maximum Y position based on the item's height and the max rows
      const maxY = maxRows - item.h;
      if (item.y > maxY) {
        modified = true;
        return { ...item, y: maxY };
      }
      return item;
    });

    if (modified) {
      // Here, you would set the adjusted layout back to your state or context that manages the layout
      // This example assumes you have a way to update your layout, like setLayouts(adjustedLayout);
      console.log("Adjusted layout to enforce row limit:", adjustedLayout);
    }
  };
  const onLayoutChange = (layout, layouts) => {
    enforceRowLimit(layout);
    // Plus any other logic you want to run on layout change
  };

  useEffect(() => {
    const updateRowHeight = () => {
      if (gridContainerRef.current) {
        const containerHeight = gridContainerRef.current.clientHeight; // Get the container's height
        const numberOfRows = maxRows; // Assuming you want to divide this into 10 rows
        // Subtract total vertical margin from container height before dividing by number of rows
        const totalMarginHeight = margin[1] * (numberOfRows + 1 - 1);
        const effectiveHeight = containerHeight - totalMarginHeight;
        const calculatedRowHeight = effectiveHeight / numberOfRows;
        setRowHeight(calculatedRowHeight); // Update the state with the new row height
        console.log("Row height updated:", calculatedRowHeight);
        console.log("Total margin height:", totalMarginHeight);
        console.log("Effective height:", effectiveHeight);
        console.log("Container height:", containerHeight);
      }
    };

    window.addEventListener("resize", updateRowHeight);
    updateRowHeight(); // Initial calculation

    return () => window.removeEventListener("resize", updateRowHeight);
  }, []);

  // TODO: Add layout based on user preference and save it to local storage and database
  // https://react-grid-layout.github.io/react-grid-layout/examples/8-localstorage-responsive.html
  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2 },
      { i: "b", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2 },
      { i: "c", x: 0, y: 3, w: 6, h: 3, minW: 2, minH: 2 },
      { i: "d", x: 8, y: 0, w: 8, h: 6, minW: 2, minH: 2 },
    ],
    md: [
      { i: "a", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2 },
      { i: "b", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2 },
      { i: "c", x: 0, y: 3, w: 6, h: 3, minW: 2, minH: 2 },
      { i: "d", x: 8, y: 0, w: 6, h: 6, minW: 2, minH: 2 },
    ],
    sm: [
      { i: "a", x: 0, y: 0, w: 3, h: 2 },
      { i: "b", x: 3, y: 0, w: 3, h: 2 },
      { i: "c", x: 0, y: 2, w: 6, h: 2 },
      { i: "d", x: 0, y: 4, w: 6, h: 2 },
    ],
    xs: [
      { i: "a", x: 0, y: 0, w: 2, h: 2 },
      { i: "b", x: 2, y: 0, w: 2, h: 2 },
      { i: "c", x: 0, y: 2, w: 4, h: 2 },
      { i: "d", x: 0, y: 4, w: 4, h: 2 },
    ],
    xxs: [
      { i: "a", x: 0, y: 0, w: 1, h: 1 },
      { i: "b", x: 1, y: 0, w: 1, h: 1 },
      { i: "c", x: 0, y: 1, w: 2, h: 1 },
      { i: "d", x: 0, y: 2, w: 2, h: 1 },
    ],
    // Add more breakpoints as needed
  };
  // Add method to ContextProvider to call API
  // when loading the dashboard, get the layout from the API
  // when saving the dashboard, save the layout to the API

  // const loadLayout = async () => {
  //   const loadedLayout = await getLayoutFromAPI();
  //   setLayouts(loadedLayout);
  // };

  return (
    <div className="w-full h-[calc(100svh_-_88px)] sm:overflow-clip flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h1>Cartokate Water Supply</h1>
        <div className="flex relative space-x-2 flex-row">
          {isResizable && (
            <button
              onClick={toggleAddItem}
              className={`
            rounded-md text-dark-green-500 bg-white dark:bg-gray-900 size-8 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-dark-green-600 dark:hover:text-dark-green-300`}>
              <Icon
                className="size-full p-1.5 text-current"
                icon="fluent:add-12-filled"
              />
            </button>
          )}
          <button
            onClick={toggleEditMode}
            className={`${
              isResizable
                ? "text-dark-green-500 bg-gray-100"
                : "text-gray-900 dark:text-gray-200"
            } 
          rounded-md size-8 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-dark-green-600 dark:hover:text-dark-green-300`}>
            <EditIcon className="size-full" />
          </button>
          {isResizable && isAddItem && (
            <div className="absolute flex flex-col space-y-2 bg-white dark:bg-gray-900 dark:text-white text-gray-900 p-2 shadow-xl rounded-md right-0 h-auto z-20 top-10 w-80">
              {availableWidgets.map((widget) => (
                <button
                  className="w-full flex flex-row space-x-2 p-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-md"
                  key={widget.id}
                  onClick={() => addWidget(widget.id)}>
                  <img className="h-20 w-20" src=""></img>
                  <div className="flex items-start space-y-1 flex-col">
                    <span className="block font-bold">{widget.title}</span>
                    <span className="block text-sm ">{widget.description}</span>
                  </div>
                </button>
              ))}
              {/* <div>
            <span>Layouts</span>
            <button onClick={() => console.log(generateLayouts())}>
              Generate Layouts
            </button>
          </div> */}
            </div>
          )}
        </div>
      </div>

      <div className="h-full w-full" ref={gridContainerRef}>
        <ResponsiveGridLayout
          onDrag={() => console.log("drag")}
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 14, md: 12, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={rowHeight}
          margin={margin}
          maxRows={maxRows}
          isResizable={isResizable}
          isDraggable={isDraggable}
          compactType={"horizontal"}
          containerPadding={[0, 16]}
          isBounded={false}
          autoSize={false}
          resizeHandles={["nw", "se"]}
          // resizeHandle={<span className="react-resizable-handle">
          //   <ResizeHandle className="resize-handle" />
          // </span>
          // }
        >
          {widgets.map((widget) => (
            <div key={widget.id} className="widget p-2">
              <h4>{widget.title}</h4>
              {/* <button onClick={() => removeWidget(widget.id)}>Remove</button> */}
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Dashboard;
