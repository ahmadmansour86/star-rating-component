import React from "react";
import renderer from "react-test-renderer";
import Rating from '../Rating';


describe("Rating Component", () => {
    it("should render without issues", () => {
      const domTree = renderer.create(<Rating />).toJSON();
      expect(domTree).toMatchSnapshot();
    });
  });
  
  describe("Testing Size", () => {
    it("Small", () => {
      const domTree = renderer.create(<Rating fontsize="small"/>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
    it("Medium", () => {
        const domTree = renderer.create(<Rating fontsize="medium"/>).toJSON();
        expect(domTree).toMatchSnapshot();
      });
      it("Large", () => {
        const domTree = renderer.create(<Rating fontsize="large"/>).toJSON();
        expect(domTree).toMatchSnapshot();
      });
  });

  describe("Testing Status", () => {
    it("Disabled", () => {
      const domTree = renderer.create(<Rating disabled/>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
    it("Non Interactive", () => {
        const domTree = renderer.create(<Rating nonInteractive/>).toJSON();
        expect(domTree).toMatchSnapshot();
      });
    it("Caption", () => {
    const domTree = renderer.create(<Rating caption/>).toJSON();
    expect(domTree).toMatchSnapshot();
    });
  });

  describe("Testing Stars Number", () => {
    it("0 star", () => {
      const domTree = renderer.create(<Rating defaultValue='0'/>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
    it("1½ stars", () => {
        const domTree = renderer.create(<Rating defaultValue='1.5'/>).toJSON();
        expect(domTree).toMatchSnapshot();
      });
      it("3 stars", () => {
        const domTree = renderer.create(<Rating defaultValue='3'/>).toJSON();
        expect(domTree).toMatchSnapshot();
      });
      it("4½ stars", () => {
        const domTree = renderer.create(<Rating defaultValue='4.5'/>).toJSON();
        expect(domTree).toMatchSnapshot();
      });
  });
  
  describe("Testing star ratio", () => {
    it("Full star", () => {
      const domTree = renderer.create(<Rating precision={1}/>).toJSON();
      expect(domTree).toMatchSnapshot();
    });
    it("Half star", () => {
        const domTree = renderer.create(<Rating precision={0.5}/>).toJSON();
        expect(domTree).toMatchSnapshot();
      });
      it("Quarter star", () => {
        const domTree = renderer.create(<Rating precision={0.25}/>).toJSON();
        expect(domTree).toMatchSnapshot();
      });
  });