import {Bemifier} from "../src/bemifier";
import {loadFile} from "./spec-helpers";

const BASIC_CONFIG = {};
const bemifier = new Bemifier(BASIC_CONFIG);

describe("element parsing", function (): void {
    it(" 'Tabs' block and 'tab' element", function (): void {
        const file = loadFile("/beml-examples/element/block-element.beml");
        expect(bemifier.compileSource(file)).toBe('<div class="tabs"><div class="tabs__tab"></div></div>');
    });

    it(" 'Tabs' block and 2 'tab' elements", function (): void {
        const file = loadFile("/beml-examples/element/block-2-elements.beml");
        const e = '<div class="tabs"><div class="tabs__tab"></div><div class="tabs__tab"></div></div>';
        expect(bemifier.compileSource(file)).toBe(e);
    });
});