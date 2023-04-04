import { aw as defineComponent, aC as reactive, aD as onMounted, aA as openBlock, aE as createElementBlock, aF as Fragment, aG as renderList, aH as createBaseVNode, aB as createVNode, ay as createBlock, aI as createCommentVNode, ax as resolveComponent, az as withCtx } from "./vendor.5b4eaa04.js";
import { s as stationIcon, a as apiClientService } from "./api.client.0fa43e0d.js";
import { U as UiNetworkFigure } from "./UiNetworkFigure.2e2e0623.js";
import { U as UiVerticalSeparator } from "./UiVerticalSeparator.620e4d2e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./stations.24d70cb4.js";
import "./lines.f3fb9c7c.js";
import "./photo3.89e6fe14.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LineFigures",
  props: {
    line: { type: null, required: true },
    nb_parking: { type: Number, required: true },
    nb_station: { type: Number, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const state = reactive({
      lineFigures: null
    });
    onMounted(async () => {
      state.lineFigures = [];
      state.lineFigures.push({
        id: "station",
        idLine: props.line,
        figure: props.nb_station,
        description: "Stations",
        icon: stationIcon
      });
      state.lineFigures.push({
        id: "parking",
        idLine: props.line,
        figure: props.nb_parking,
        description: props.nb_parking > 1 ? "Parkings relais" : "Parking relais"
      });
      const frequency = await apiClientService.fetchLineFrequency(props.line);
      state.lineFigures.push({
        id: "frequency",
        idLine: props.line,
        figure: frequency,
        description: "Fr\xE9quence",
        unit: "min",
        moreInformation: "Fr\xE9quence th\xE9orique en Heure de Pointe du matin"
      });
    });
    function getLength(networkFigures) {
      if (networkFigures == null) {
        return 0;
      }
      return networkFigures.length;
    }
    const __returned__ = { props, state, getLength, UiNetworkFigure, UiVerticalSeparator };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row px-4 py-3 gap-3 bg-slate-50 border rounded-lg border-slate-100" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.lineFigures, (networkFigure, index) => {
      return openBlock(), createElementBlock(Fragment, {
        key: networkFigure.id
      }, [
        createBaseVNode("article", null, [
          createVNode($setup["UiNetworkFigure"], {
            figure: networkFigure.figure,
            description: networkFigure.description,
            unit: networkFigure.unit,
            icon: networkFigure.icon,
            moreInformation: networkFigure.moreInformation,
            class: "w-28"
          }, null, 8, ["figure", "description", "unit", "icon", "moreInformation"])
        ]),
        index + 1 < $setup.getLength($setup.state.lineFigures) ? (openBlock(), createBlock($setup["UiVerticalSeparator"], { key: 0 })) : createCommentVNode("v-if", true)
      ], 64);
    }), 128))
  ]);
}
_sfc_main$1.__file = "src/components/line/LineFigures.vue";
const LineFigures = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/line/LineFigures.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LineFigures.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        id: 1,
        nb_parking: 2,
        nb_station: 30
      };
    }
    const __returned__ = { initState, LineFigures };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "LineFigure",
    layout: {
      type: "grid",
      width: 450
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["LineFigures"], {
        line: state.id,
        nb_parking: state.nb_parking,
        nb_station: state.nb_station
      }, null, 8, ["line", "nb_parking", "nb_station"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/line/LineFigures.story.vue";
const LineFigures_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_trambus/cooperation_jn_trambus/src/components/line/LineFigures.story.vue"]]);
export {
  LineFigures_story as default
};