import type { ReactElement } from "react";

import { Button } from "@/components/alexandremace/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/alexandremace/command";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/alexandremace/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/alexandremace/input-group";
import { Textarea } from "@/components/alexandremace/textarea";
import { Toggle } from "@/components/alexandremace/toggle";

export const dialogDemo: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "dialog",
  components: {
    Default: (
      <DialogTrigger>
        <Button variant="outline">Ouvrir le dialogue</Button>
        <Dialog>
          <DialogHeader>
            <DialogTitle>Comment c&apos;est calculé ?</DialogTitle>
            <DialogDescription>
              Les chiffres sont des estimations qui illustrent les ordres de
              grandeur.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button slot="close" variant="outline">
              Fermer
            </Button>
          </DialogFooter>
        </Dialog>
      </DialogTrigger>
    ),
  },
};

export const commandDemo: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "command",
  components: {
    Default: (
      <div className="w-full max-w-sm rounded-lg border">
        <Command>
          <CommandInput placeholder="Rechercher..." autoFocus={false} />
          <CommandList>
            <CommandGroup heading="Projets">
              <CommandItem id="footprint" textValue="Footprint">
                Footprint
              </CommandItem>
              <CommandItem id="thermometre" textValue="Thermomètre">
                Thermomètre
              </CommandItem>
              <CommandItem id="transitions" textValue="Transitions">
                Transitions
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    ),
  },
};

export const inputGroupDemo: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "input-group",
  components: {
    Default: (
      <InputGroup className="max-w-sm">
        <InputGroupInput placeholder="ton-site" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.alexandremace.fr</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    ),
  },
};

export const textareaDemo: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "textarea",
  components: {
    Default: <Textarea placeholder="Ton message..." className="max-w-sm" />,
    Disabled: (
      <Textarea placeholder="Désactivée" disabled className="max-w-sm" />
    ),
  },
};

export const toggleDemo: {
  name: string;
  components: Record<string, ReactElement>;
} = {
  name: "toggle",
  components: {
    Default: <Toggle aria-label="Gras">Gras</Toggle>,
    Outline: (
      <Toggle variant="outline" defaultSelected aria-label="Italique">
        Italique
      </Toggle>
    ),
  },
};
