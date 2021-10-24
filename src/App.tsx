import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { routes } from "src/shared/constants/routes";
import { renderRoutes } from "src/shared/utils";
import Layout from "src/shared/components/layout";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>{renderRoutes(routes)}</Switch>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
