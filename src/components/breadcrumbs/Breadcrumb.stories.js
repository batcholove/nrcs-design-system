import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Icon from "@mdi/react";
import { mdiAccount, mdiHome, mdiFormatListBulleted } from "@mdi/js";

export default {
  title: "Components|Breadcrumbs"
};

export const BreadcrumbsDefault = () => (
  <div>
    <h2 className="docs">Breadcrumbs</h2>

    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Library
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          Science Fiction
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          Isaac Asimov
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  </div>
);

export const BreadcrumbsIcons = () => (
  <div>
    <h2 className="docs">Breadcrumbs - with Icons</h2>

    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">
          <Icon className="mdi" path={mdiHome} size={1} />
          Home
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          <Icon className="mdi" path={mdiAccount} size={1} />
          Library
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">
          <Icon className="mdi" path={mdiFormatListBulleted} size={1} />
          Science Fiction
        </BreadcrumbItem>
        <BreadcrumbItem active tag="span">
          <Icon className="mdi" path={mdiAccount} size={1} />
          Isaac Asimov
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  </div>
);

BreadcrumbsDefault.story = {
  name: "Breadcrumbs - Default"
};

BreadcrumbsIcons.story = {
  name: "Breadcrumbs - with Icons"
};
