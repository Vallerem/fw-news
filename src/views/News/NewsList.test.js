import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { NewsList } from "./NewsList";
import ArticleItem from "./ArticleItem";
import sinon from "sinon";

const wrapper = mount(<NewsList logout={() => {}} />);

describe("<NewsList />", () => {
  it("renders correctly", () => {
    expect(wrapper).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("checks the state", () => {
    expect(NewsList.prototype, "componentDidMount").toEqual({});
  });
});
