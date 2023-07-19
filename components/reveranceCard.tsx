/* eslint-disable no-unused-vars */
import React from "react";
import { Chrono } from "react-chrono";
import styles from "@/components/reverance.module.css";

export default function ReveranceCard() {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      media: {
        name: "dunkirk beach",
        source: {
          url: "https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
        },
        type: "IMAGE",
      },
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      media: {
        name: "dunkirk beach",
        source: {
          url: "https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
        },
        type: "IMAGE",
      },
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      media: {
        name: "dunkirk beach",
        source: {
          url: "https://i2-prod.mirror.co.uk/incoming/article10847802.ece/ALTERNATES/s810/PAY-Dunkirk-in-colour.jpg",
        },
        type: "IMAGE",
      },
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German 'Blitzkrieg', the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
    },
  ];

  return (
    <>
      <div>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          textOverlay
          hideControls={true}
          classNames={{
            title: styles.myTitle,
            timelinePointClassName: styles.central,
            active: styles.active,
          }}
          disableNavOnKey={true}
          disableClickOnCircle={true}
          cardHeight={300}
          cardWidth={400}
        />
      </div>
    </>
  );
}
