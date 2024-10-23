"use client";

import { useState, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import ColorVariations from "@/components/ColorVariations";

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
      <ColorVariations hue={hue} />
    </div>
  );
}
