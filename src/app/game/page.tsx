"use client";

import { useEffect } from "react";

export default function Game() {
  useEffect(() => {
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tileSize = 64;

    const tileOne = new Image();
    tileOne.src = "/images/tile1.png";

    const tileTwo = new Image();
    tileTwo.src = "/images/tile2.png";

    const tileThree = new Image();
    tileThree.src = "/images/tile3.png";

    const mapData: number[][] = [
      [1, 1, 2, 2],
      [1, 1, 2, 2],
      [3, 3, 2, 1],
      [3, 3, 2, 1],
    ];

    const drawMap = () => {
      for (let y = 0; y < mapData.length; y++) {
        for (let x = 0; x < mapData[y].length; x++) {
          const tileIndex = mapData[y][x];

          let tileImage: HTMLImageElement | null = null;

          switch (tileIndex) {
            case 1:
              tileImage = tileOne;
              break;
            case 2:
              tileImage = tileTwo;
              break;
            case 3:
              tileImage = tileThree;
              break;
            default:
              break;
          }

          if (tileImage) {
            ctx.drawImage(
              tileImage,
              x * tileSize,
              y * tileSize,
              tileSize,
              tileSize
            );
          }
        }
      }
    };

    // 모든 이미지가 로드되었을 때 drawMap 실행
    let loadedCount = 0;
    const onTileLoad = () => {
      loadedCount++;
      if (loadedCount === 3) {
        drawMap();
      }
    };

    tileOne.onload = onTileLoad;
    tileTwo.onload = onTileLoad;
    tileThree.onload = onTileLoad;
  }, []);

  return <canvas id="gameCanvas" width={800} height={500}></canvas>;
}
