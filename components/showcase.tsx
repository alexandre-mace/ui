"use client";

import { useState } from "react";
import { Button, LinkButton } from "@/registry/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

function Tile({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-card p-5">
      <div className="font-mono text-xs text-muted-foreground">{title}</div>
      <div className="flex min-h-16 flex-1 flex-col justify-center gap-3">
        {children}
      </div>
    </div>
  );
}

export function Showcase() {
  const [sliderValue, setSliderValue] = useState(40);

  return (
    <section className="mt-14">
      <h2 className="font-mono text-base text-muted-foreground">Composants</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Tile title="button">
          <div className="flex flex-wrap items-center gap-2">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div>
            <LinkButton
              href="https://alexandremace.fr"
              variant="link"
              className="px-0 underline decoration-primary/40 hover:decoration-primary"
            >
              LinkButton
            </LinkButton>
          </div>
        </Tile>

        <Tile title="input · switch · checkbox">
          <Input placeholder="ton@email.fr" className="bg-background" />
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Switch defaultSelected aria-label="Notifications" />
              <span className="text-sm">Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox defaultSelected aria-label="Newsletter" />
              <span className="text-sm">Newsletter</span>
            </div>
          </div>
        </Tile>

        <Tile title="slider">
          <div className="flex items-center justify-between">
            <span className="text-sm">Intensité</span>
            <span className="font-mono text-sm font-medium">
              {sliderValue} %
            </span>
          </div>
          <Slider
            aria-label="Intensité"
            value={sliderValue}
            onChange={(v) => setSliderValue(Array.isArray(v) ? v[0] : v)}
            minValue={0}
            maxValue={100}
          />
        </Tile>

        <Tile title="tabs">
          <Tabs defaultSelectedKey="tokens">
            <TabsList aria-label="Démo tabs">
              <TabsTrigger id="tokens" className="px-3">
                Tokens
              </TabsTrigger>
              <TabsTrigger id="composants" className="px-3">
                Composants
              </TabsTrigger>
            </TabsList>
            <TabsContent id="tokens" className="text-sm text-muted-foreground">
              Sable, bleu, radius 0.625rem, Geist.
            </TabsContent>
            <TabsContent
              id="composants"
              className="text-sm text-muted-foreground"
            >
              React Aria, habillés par le thème.
            </TabsContent>
          </Tabs>
        </Tile>

        <Tile title="badge">
          <div className="flex flex-wrap gap-2">
            <Badge className="font-mono font-normal">next.js</Badge>
            <Badge variant="secondary" className="font-mono font-normal">
              climate
            </Badge>
            <Badge variant="outline" className="font-mono font-normal">
              design
            </Badge>
          </div>
        </Tile>

        <Tile title="typographie">
          <div className="text-xl font-semibold tracking-tight">
            Titre en Geist
          </div>
          <p className="text-sm text-pretty text-muted-foreground">
            Le lead murmure, l&apos;<span className="font-medium text-foreground">emphase</span> parle,
            la donnée compte en <span className="font-mono">mono : 9,9 t</span>.
          </p>
        </Tile>
      </div>
    </section>
  );
}
