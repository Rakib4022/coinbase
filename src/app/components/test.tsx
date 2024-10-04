<div>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="tradable">Tradable</TabsTrigger>
                        <TabsTrigger value="gainers">Top gainers</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tradable">
                        
                    </TabsContent>
                    <TabsContent value="gainers">
                        
                    </TabsContent>
                </Tabs>
            </div>
            import {
                Tabs,
                TabsContent,
                TabsList,
                TabsTrigger,
            } from "@/components/ui/tabs";