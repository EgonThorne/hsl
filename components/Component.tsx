"use client";

import { useState, useCallback, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)].map(Math.round) as [
    number,
    number,
    number
  ];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

export default function Component() {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const updateHue = useCallback((value: number[]) => setHue(value[0]), []);
  const updateSaturation = useCallback(
    (value: number[]) => setSaturation(value[0]),
    []
  );
  const updateLightness = useCallback(
    (value: number[]) => setLightness(value[0]),
    []
  );

  const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const [r, g, b] = hslToRgb(hue, saturation, lightness);
  const hexColor = rgbToHex(r, g, b);

  const colorVariations = useMemo(() => {
    const variations = [];
    for (let s = 20; s <= 100; s += 20) {
      for (let l = 20; l <= 80; l += 20) {
        variations.push(`hsl(${hue}, ${s}%, ${l}%)`);
      }
    }
    return variations;
  }, [hue]);

  const copyToClipboard = useCallback((color: string, index: number) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex space-x-6">
        <Card className="p-4 w-1/2">
          <div className="flex items-center space-x-4 mb-4">
            <div
              className="w-16 h-16 rounded-md shadow-inner"
              style={{ backgroundColor: hslColor }}
              aria-label={`Selected color: ${hslColor}`}
            />
            <div className="flex-1 space-y-4">
              <Slider
                value={[hue]}
                onValueChange={updateHue}
                max={360}
                step={1}
                aria-label="Hue"
              />
              <Slider
                value={[saturation]}
                onValueChange={updateSaturation}
                max={100}
                step={1}
                aria-label="Saturation"
              />
              <Slider
                value={[lightness]}
                onValueChange={updateLightness}
                max={100}
                step={1}
                aria-label="Lightness"
              />
            </div>
          </div>
        </Card>
        <Card className="p-4 w-1/2">
          <h2 className="text-lg font-semibold mb-2">Color Translations</h2>
          <div className="space-y-2">
            <p>HSL: {hslColor}</p>
            <p>
              RGB: rgb({r}, {g}, {b})
            </p>
            <p>HEX: {hexColor}</p>
          </div>
        </Card>
      </div>
      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-4">Color Variations</h2>
        <div className="grid grid-cols-5 gap-4">
          {colorVariations.map((color, index) => (
            <div
              key={index}
              className="relative h-12 rounded-md shadow-inner overflow-hidden cursor-pointer group"
              style={{ backgroundColor: color }}
              onClick={() => copyToClipboard(color, index)}
              aria-label={`Copy color: ${color}`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-2 py-1 text-xs font-medium text-white bg-black bg-opacity-50 rounded backdrop-blur-sm">
                  {copiedIndex === index ? "Copied" : "Copy"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
