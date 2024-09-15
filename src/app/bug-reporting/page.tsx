import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const BugReporting: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="bug-reports">
        <TabsList>
          <TabsTrigger value="bug-reports">Bug reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="bug-reports">
          <div>
            {/* Content for Bug reports tab */}
            <p>Here you can report bugs.</p>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div>
            {/* Content for Analytics tab */}
            <p>Here you can view analytics.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BugReporting;