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
      <Tabs defaultValue="tokens" className="w-72">
        <TabsList aria-label="Démo">
          <TabsTrigger value="tokens" className="px-3">
            Tokens
          </TabsTrigger>
          <TabsTrigger value="composants" className="px-3">
            Composants
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tokens" className="text-muted-foreground">
          Sable, bleu, radius, Geist.
        </TabsContent>
        <TabsContent value="composants" className="text-muted-foreground">
          Base UI, habillés par le thème.
        </TabsContent>
      </Tabs>
    ),
  },
};
