import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/alexandremace/tabs";

export const tabs = {
  name: "tabs",
  components: {
    Default: (
      <Tabs defaultSelectedKey="tokens" className="w-72">
        <TabsList aria-label="Démo">
          <TabsTrigger id="tokens" className="px-3">
            Tokens
          </TabsTrigger>
          <TabsTrigger id="composants" className="px-3">
            Composants
          </TabsTrigger>
        </TabsList>
        <TabsContent id="tokens" className="text-muted-foreground">
          Sable, bleu, radius, Geist.
        </TabsContent>
        <TabsContent id="composants" className="text-muted-foreground">
          React Aria, habillés par le thème.
        </TabsContent>
      </Tabs>
    ),
  },
};
