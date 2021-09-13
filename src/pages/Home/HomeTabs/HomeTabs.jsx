import React, { useState } from "react";
import { Tabs, Radio, Space } from "antd";

const { TabPane } = Tabs;

export default function HomeTabs(props) {
  const [state, setState] = useState({
    tabPosition: "left",
  });

  const changeTabPosition = e => {
    setState({ tabPosition: e.target.value });
  };

  const { tabPosition } = state;
  return (
    <>
      
      <Tabs tabPosition={tabPosition}>
        <TabPane tab={<img className="rounded-full" src="https://picsum.photos/50" width="50" />} key="1">
          
        </TabPane>
        <TabPane tab={<img className="rounded-full" src="https://picsum.photos/50" width="50" />} key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab={<img className="rounded-full" src="https://picsum.photos/50" width="50" />} key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </>
  );
}
