"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type NodeGroup = "edge" | "compute" | "data" | "intelligence";

type ArchNode = {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  group: NodeGroup;
};

type ArchEdge = {
  from: string;
  to: string;
};

const NODES: ArchNode[] = [
  { id: "client", label: "Client Apps", sublabel: "Web \u00b7 Mobile", x: 90, y: 280, group: "edge" },
  { id: "cdn", label: "CDN / Edge", sublabel: "Static + HLS delivery", x: 90, y: 100, group: "edge" },
  { id: "gateway", label: "API Gateway", sublabel: "Routing \u00b7 Rate limits", x: 280, y: 280, group: "compute" },
  { id: "auth", label: "Auth Service", sublabel: "JWT \u00b7 OAuth", x: 460, y: 110, group: "compute" },
  { id: "orders", label: "Order Service", sublabel: "Nest.js", x: 460, y: 230, group: "compute" },
  { id: "payments", label: "Payment Service", sublabel: "Node.js", x: 460, y: 350, group: "compute" },
  { id: "kafka", label: "Kafka Bus", sublabel: "Event streaming", x: 630, y: 280, group: "compute" },
  { id: "inventory", label: "Inventory", sublabel: "Consumer", x: 800, y: 190, group: "data" },
  { id: "notify", label: "Notifications", sublabel: "Consumer", x: 800, y: 370, group: "data" },
  { id: "mongo", label: "MongoDB", sublabel: "Primary store", x: 460, y: 470, group: "data" },
  { id: "redis", label: "Redis", sublabel: "Cache \u00b7 sessions", x: 280, y: 470, group: "data" },
  { id: "ai", label: "AI Copilot", sublabel: "Design \u00b7 review \u00b7 ship", x: 630, y: 70, group: "intelligence" },
  { id: "observability", label: "Observability", sublabel: "Metrics \u00b7 alerts", x: 280, y: 90, group: "intelligence" },
];

const EDGES: ArchEdge[] = [
  { from: "client", to: "cdn" },
  { from: "client", to: "gateway" },
  { from: "gateway", to: "auth" },
  { from: "gateway", to: "orders" },
  { from: "gateway", to: "payments" },
  { from: "gateway", to: "redis" },
  { from: "orders", to: "kafka" },
  { from: "payments", to: "kafka" },
  { from: "kafka", to: "inventory" },
  { from: "kafka", to: "notify" },
  { from: "orders", to: "mongo" },
  { from: "payments", to: "mongo" },
  { from: "auth", to: "redis" },
  { from: "ai", to: "gateway" },
  { from: "ai", to: "kafka" },
  { from: "observability", to: "gateway" },
  { from: "observability", to: "kafka" },
  { from: "observability", to: "payments" },
];

const GROUP_COLOR: Record<NodeGroup, string> = {
  edge: "var(--accent-2)",
  compute: "var(--accent)",
  data: "var(--success)",
  intelligence: "var(--warning)",
};

const VIEW_W = 900;
const VIEW_H = 560;

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function ArchitectureGraph() {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [pinnedId, setPinnedId] = React.useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const currentId = pinnedId ?? activeId;
  const active = currentId ? nodeById(currentId) : null;

  const connectedIds = React.useMemo(() => {
    if (!currentId) return null;
    const set = new Set<string>([currentId]);
    EDGES.forEach((e) => {
      if (e.from === currentId) set.add(e.to);
      if (e.to === currentId) set.add(e.from);
    });
    return set;
  }, [currentId]);

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-auto w-full select-none"
        role="img"
        aria-label="Interactive diagram of an event-driven backend and AI-assisted development architecture"
      >
        <defs>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Edges */}
        {EDGES.map((edge, i) => {
          const from = nodeById(edge.from);
          const to = nodeById(edge.to);
          const dimmed = connectedIds && (!connectedIds.has(edge.from) || !connectedIds.has(edge.to));
          const highlighted =
            connectedIds && connectedIds.has(edge.from) && connectedIds.has(edge.to);

          return (
            <g key={`${edge.from}-${edge.to}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={highlighted ? "var(--accent)" : "var(--grid-line-strong)"}
                strokeOpacity={dimmed ? 0.15 : highlighted ? 0.9 : 0.6}
                strokeWidth={highlighted ? 1.6 : 1}
                className="transition-all duration-300"
              />
              {!reducedMotion && !dimmed && (
                <circle r={2.2} fill={highlighted ? "var(--accent)" : "var(--accent-2)"} opacity={0.9}>
                  <animateMotion
                    dur={`${3.5 + (i % 5) * 0.6}s`}
                    repeatCount="indefinite"
                    path={`M${from.x},${from.y} L${to.x},${to.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((node) => {
          const isActive = currentId === node.id;
          const isDimmed = connectedIds ? !connectedIds.has(node.id) : false;
          const color = GROUP_COLOR[node.group];

          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              aria-pressed={pinnedId === node.id}
              aria-label={`${node.label}: ${node.sublabel}`}
              onMouseEnter={() => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(node.id)}
              onBlur={() => setActiveId(null)}
              onClick={() => setPinnedId((p) => (p === node.id ? null : node.id))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setPinnedId((p) => (p === node.id ? null : node.id));
                }
              }}
            >
              {isActive && (
                <circle r={46} fill="url(#node-glow)" style={{ color }} />
              )}
              <motion.circle
                r={isActive ? 15 : 11}
                fill="var(--card)"
                stroke={color}
                strokeWidth={isActive ? 2.5 : 1.5}
                opacity={isDimmed ? 0.35 : 1}
                animate={{ r: isActive ? 15 : 11 }}
                transition={{ duration: 0.25 }}
              />
              <circle r={3.2} fill={color} opacity={isDimmed ? 0.35 : 1} />
              <text
                x={0}
                y={26}
                textAnchor="middle"
                className="font-mono-tech"
                fontSize={11}
                fill="var(--foreground)"
                opacity={isDimmed ? 0.35 : 0.92}
              >
                {node.label}
              </text>
              <text
                x={0}
                y={39}
                textAnchor="middle"
                className="font-mono-tech"
                fontSize={9}
                fill="var(--muted-foreground)"
                opacity={isDimmed ? 0.25 : 0.8}
              >
                {node.sublabel}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center px-2 sm:px-4">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="surface-elevated pointer-events-auto flex items-center gap-3 px-4 py-2.5"
            >
              <span
                className="size-2 rounded-full"
                style={{ background: GROUP_COLOR[active.group] }}
              />
              <p className="font-mono-tech text-xs text-foreground">
                <span className="font-semibold">{active.label}</span>
                <span className="text-muted-foreground">{" \u2014 "}{active.sublabel}</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
