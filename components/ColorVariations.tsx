"use client";

import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// 定义颜色格式类型
type ColorFormat = "hsl" | "rgb" | "hex";

// 定义颜色变体接口
interface ColorVariation {
  hsl: string;
  rgb: string;
  hex: string;
  saturation: number;
  lightness: number;
}

// 将 HSL 转换为 RGB
function hslToRgb(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const [r, g, b] = [255 * f(0), 255 * f(8), 255 * f(4)].map(Math.round);
  return `rgb(${r}, ${g}, ${b})`;
}

// 将 RGB 转换为 HEX
function rgbToHex(rgb: string): string {
  const [r, g, b] = rgb.match(/\d+/g)!.map(Number);
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

interface ColorVariationsProps {
  hue: number;
}

export default function ColorVariations({ hue }: ColorVariationsProps) {
  // 状态管理：当前选择的颜色格式和复制状态
  const [format, setFormat] = useState<ColorFormat>("hsl");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // 生成颜色变体
  const colorVariations: ColorVariation[] = [];
  for (let s = 10; s <= 100; s += 10) {
    for (let l = 10; l <= 90; l += 10) {
      const hslColor = `hsl(${hue}, ${s}%, ${l}%)`;
      const rgbColor = hslToRgb(hue, s, l);
      const hexColor = rgbToHex(rgbColor);
      colorVariations.push({
        hsl: hslColor,
        rgb: rgbColor,
        hex: hexColor,
        saturation: s,
        lightness: l,
      });
    }
  }

  // 按照饱和度和亮度排序颜色变体
  colorVariations.sort((a, b) => {
    if (a.saturation === b.saturation) {
      return a.lightness - b.lightness;
    }
    return a.saturation - b.saturation;
  });

  // 复制颜色值到剪贴板
  const copyToClipboard = useCallback((color: string, index: number) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch((err) => {
        console.error("Copy failed: ", err);
      });
  }, []);

  return (
    <Card className="p-4">
      {/* 标题和格式切换 */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Color Variations</h2>
        <ToggleGroup
          type="single"
          value={format}
          onValueChange={(value: ColorFormat) => setFormat(value)}
        >
          <ToggleGroupItem value="hsl" aria-label="HSL format">
            HSL
          </ToggleGroupItem>
          <ToggleGroupItem value="rgb" aria-label="RGB format">
            RGB
          </ToggleGroupItem>
          <ToggleGroupItem value="hex" aria-label="HEX format">
            HEX
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {/* 颜色变体网格 */}
      <div className="grid grid-cols-10 gap-2">
        {colorVariations.map((color, index) => (
          <div
            key={index}
            className="relative h-12 rounded-md shadow-inner overflow-hidden cursor-pointer group"
            style={{ backgroundColor: color.hsl }}
            onClick={() => copyToClipboard(color[format], index)}
            aria-label={`Copy color: ${color[format]}`}
          >
            {/* 悬停时显示的颜色值 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="px-1 py-0.5 text-xs font-medium text-white bg-black bg-opacity-50 rounded backdrop-blur-sm">
                {copiedIndex === index ? "Copied" : color[format]}
              </span>
            </div>
            {/* 显示饱和度和亮度 */}
            <span className="absolute bottom-0.5 left-0.5 text-[8px] text-white bg-black bg-opacity-50 px-0.5 rounded">
              {color.saturation}%, {color.lightness}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
