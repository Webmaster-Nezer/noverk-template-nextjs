"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Counter({ start = 0 }: { start?: number }) {
  const [count, setCount] = useState(start);
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" size="icon" aria-label="Decrease" onClick={() => setCount(value => value - 1)}><Minus /></Button>
      <output aria-live="polite" className="min-w-8 text-center text-lg tabular-nums">{count}</output>
      <Button variant="outline" size="icon" aria-label="Increase" onClick={() => setCount(value => value + 1)}><Plus /></Button>
    </div>
  );
}
