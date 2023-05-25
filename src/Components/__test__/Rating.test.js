import React from "react";
import renderer from "react-test-renderer";
import Rating from '../Rating';


describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
      const domTree = renderer.create(<Rating />).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });
  
  describe("Jest Snapshot testing suite2", () => {
    it("Matches DOM Snapshot2", () => {
      const domTree = renderer.create(<Rating fontsize="small"/>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });