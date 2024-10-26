import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";

import { Suspense } from "react";

const FullLayout = () => {
  return (

    <main>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <Suspense fallback={<div>Loading...</div>}>
            <Container className="p-4" fluid>
              <Outlet />
            </Container>
          </Suspense>
          {/*
          <Container className="p-4" fluid>
            <Outlet />
          </Container>
          */}
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
