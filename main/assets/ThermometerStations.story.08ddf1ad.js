import { aQ as createRouter, aR as createWebHistory, _ as __vitePreload, aw as defineComponent, aK as ref, aA as openBlock, ay as createBlock, aN as computed, aE as createElementBlock, aH as createBaseVNode, aO as normalizeClass, aL as toDisplayString, aF as Fragment, aG as renderList, aI as createCommentVNode, aC as reactive, aS as onBeforeMount, aT as pushScopeId, aU as popScopeId, ax as resolveComponent, az as withCtx, aB as createVNode } from "./vendor.8d27f1eb.js";
import { a as IconCircleText, I as IconLine } from "./IconLine.993b2f67.js";
import { a as getColorBus, g as getColorLine } from "./color.12f233df.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { u as useStationsStore, a as apiClientService } from "./api.client.0177e45f.js";
const router = createRouter({
  history: createWebHistory("/cooperation_jn_app/main/"),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.290d008a.js"), true ? ["assets/HomeView.290d008a.js","assets/vendor.8d27f1eb.js","assets/FooterArea.8871382f.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/UiLinkFooter.4a7344a6.js","assets/api.client.0177e45f.js","assets/lines.f3fb9c7c.js","assets/photo3.89e6fe14.js","assets/UiLineDescription.8e32d0b0.js","assets/IconLine.993b2f67.js","assets/color.12f233df.js","assets/IconTwoDirectionArrow.51eafe41.js","assets/TravelTimes.14b95ffc.js","assets/UiTravelTime.1ece3f88.js","assets/informationIcon.70adcac2.js","assets/UiOverflowContainer.1b6f483c.js","assets/UiLinkPrimary.bf39b1c1.js","assets/UiTrambusTitle.8669b03b.js","assets/NetworkFigures.da101872.js","assets/UiNetworkFigure.edab2a8f.js","assets/UiVerticalSeparator.1fed3804.js","assets/views.d72a3a39.js"] : void 0)
    },
    {
      path: "/planning",
      name: "planning",
      component: () => __vitePreload(() => import("./PlanningView.0dca53d0.js"), true ? ["assets/PlanningView.0dca53d0.js","assets/vendor.8d27f1eb.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/parkingRelais.71b850b9.js","assets/line-planning-state.model.746a6522.js","assets/UiLineButton.f08d501e.js","assets/color.12f233df.js","assets/UiIconButton.27d8a96b.js","assets/UiButton.41b8b2e3.js","assets/timeLineItems.fixtures.a0741656.js","assets/chevron-left.dd0e6ed2.js"] : void 0)
    },
    {
      path: "/line/:id",
      name: "line",
      component: () => __vitePreload(() => import("./LineView.0f24da80.js"), true ? ["assets/LineView.0f24da80.js","assets/vendor.8d27f1eb.js","assets/api.client.0177e45f.js","assets/lines.f3fb9c7c.js","assets/photo3.89e6fe14.js","assets/LineFigures.99c40ed6.js","assets/UiNetworkFigure.edab2a8f.js","assets/informationIcon.70adcac2.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/UiVerticalSeparator.1fed3804.js","assets/UiTravelTime.1ece3f88.js","assets/IconLine.993b2f67.js","assets/color.12f233df.js","assets/UiParkingInformation.2beac532.js","assets/parkingRelais.71b850b9.js","assets/FooterArea.8871382f.js","assets/UiLinkFooter.4a7344a6.js","assets/views.d72a3a39.js","assets/UiLineHeader.f0349843.js","assets/IconTwoDirectionArrow.51eafe41.js","assets/BackButton.eda2515e.js","assets/chevron-left.dd0e6ed2.js","assets/UiButton.41b8b2e3.js"] : void 0)
    },
    {
      path: "/line/:lineid/station/:id",
      name: "station",
      component: () => __vitePreload(() => import("./StationView.e588873b.js"), true ? ["assets/StationView.e588873b.js","assets/vendor.8d27f1eb.js","assets/api.client.0177e45f.js","assets/lines.f3fb9c7c.js","assets/photo3.89e6fe14.js","assets/views.d72a3a39.js","assets/UiStationHeader.13ffefdf.js","assets/IconLine.993b2f67.js","assets/color.12f233df.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/FooterArea.8871382f.js","assets/UiLinkFooter.4a7344a6.js","assets/ServicesStation.ef573c22.js","assets/ItemPOI.918ecdd5.js","assets/BackButton.eda2515e.js","assets/chevron-left.dd0e6ed2.js","assets/UiButton.41b8b2e3.js"] : void 0)
    },
    {
      path: "/traveltimes",
      name: "traveltimes",
      component: () => __vitePreload(() => import("./TravelTimesView.8152610d.js"), true ? ["assets/TravelTimesView.8152610d.js","assets/vendor.8d27f1eb.js","assets/views.d72a3a39.js","assets/api.client.0177e45f.js","assets/lines.f3fb9c7c.js","assets/photo3.89e6fe14.js","assets/BackButton.eda2515e.js","assets/chevron-left.dd0e6ed2.js","assets/UiButton.41b8b2e3.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/UiTravelTime.1ece3f88.js","assets/IconLine.993b2f67.js","assets/color.12f233df.js","assets/informationIcon.70adcac2.js"] : void 0)
    }
  ]
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "IconBus",
  props: {
    bus: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const bgColor = ref(getColorBus("bg", props.bus));
    const busText = ref(props.size === "s" ? props.bus.replace("C", "") : props.bus);
    const __returned__ = { props, bgColor, busText, IconCircleText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["IconCircleText"], {
    text: $setup.busText,
    size: $setup.props.size,
    bgColor: $setup.bgColor
  }, null, 8, ["text", "size", "bgColor"]);
}
_sfc_main$4.__file = "src/components/ui/icons/IconBus.vue";
const IconBus = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/icons/IconBus.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "IconParking",
  props: {
    size: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const bgColor = ref("bg-black");
    const busText = ref("P+r");
    const __returned__ = { props, bgColor, busText, IconCircleText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["IconCircleText"], {
    text: $setup.busText,
    size: $setup.props.size,
    bgColor: $setup.bgColor
  }, null, 8, ["text", "size", "bgColor"]);
}
_sfc_main$3.__file = "src/components/ui/icons/IconParking.vue";
const IconParking = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/ui/icons/IconParking.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ItemThermometerStations",
  props: {
    index: {
      type: Number,
      required: true
    },
    line: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    desserte: {
      type: String,
      required: true
    },
    li_code: {
      type: String,
      required: true
    },
    parking: {
      type: Boolean,
      required: false,
      default: false
    },
    is_last_elem: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const stationActive = ref(false);
    const borderColor = ref(getColorLine("border", props.line, 600));
    let desserteSplit = props.desserte.split(" ").filter((bus) => bus !== void 0 && bus != "");
    const desserteTab = ref(
      desserteSplit.map((bus) => {
        let new_bus = bus;
        return new_bus;
      })
    );
    var lineTab = ref([]);
    if (props.li_code != "") {
      let li_code_split = props.li_code.split(" ");
      lineTab.value = li_code_split.map((line) => {
        let new_line = parseInt(line);
        return new_line;
      });
    }
    function getClassCircle() {
      let marginLeftNegative = "-ml-1";
      let border2px = "border-2";
      if (stationActive.value) {
        return [
          "min-w-[16px]",
          "w-4",
          "h-4",
          "border-black",
          marginLeftNegative,
          border2px
        ];
      }
      if (props.index == 1 || props.is_last_elem) {
        return [
          "min-w-[16px]",
          "w-4",
          "h-4",
          marginLeftNegative,
          borderColor.value,
          "border-4"
        ];
      }
      return ["min-w-[8px]", "w-2", "h-2", borderColor.value, border2px];
    }
    function getClassBeforeCircle() {
      if (props.index == 1) {
        return [];
      }
      var classBefore = [
        "before:absolute",
        "before:content-['']",
        "before:border-l-2",
        "before:" + borderColor.value
      ];
      let ml = "before:ml-px";
      let bottom = "before:bottom-[65%]";
      let height = "before:h-[95%]";
      if (stationActive.value) {
        ml = "before:ml-1.5";
        bottom = "before:bottom-[75%]";
        height = "before:h-[70%]";
      } else if (props.is_last_elem) {
        ml = "before:ml-1";
        height = "before:h-[85%]";
      }
      return classBefore.concat([ml, bottom, height]);
    }
    const classCircle = computed(() => {
      var classObject = ["rounded-full", "mr-2", "mb-3", "mt-2"];
      classObject = classObject.concat(getClassCircle());
      classObject = classObject.concat(getClassBeforeCircle());
      return classObject;
    });
    const __returned__ = { props, stationActive, borderColor, desserteSplit, desserteTab, lineTab, getClassCircle, getClassBeforeCircle, classCircle, IconLine, IconBus, IconParking };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "font-dm-sans font-bold text-base -tracking-[1%] w-80 h-6 mb-1" };
const _hoisted_2$1 = { class: "ml-auto mr-1" };
const _hoisted_3 = { class: "flex" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(["flex items-center mb-1 cursor-pointer", $setup.stationActive ? "bg-slate-100" : ""]),
    onMouseover: _cache[0] || (_cache[0] = ($event) => $setup.stationActive = true),
    onMouseleave: _cache[1] || (_cache[1] = ($event) => $setup.stationActive = false)
  }, [
    createBaseVNode("div", {
      class: normalizeClass($setup.classCircle)
    }, null, 2),
    createBaseVNode("p", _hoisted_1$1, toDisplayString($props.name), 1),
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.lineTab, (line_connected, index) => {
          return openBlock(), createBlock($setup["IconLine"], {
            key: index,
            line: line_connected,
            size: "m",
            class: "mb-1 ml-px"
          }, null, 8, ["line"]);
        }), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.desserteTab, (bus, index) => {
          return openBlock(), createBlock($setup["IconBus"], {
            key: index,
            bus,
            size: "m",
            class: "mb-1 ml-px"
          }, null, 8, ["bus"]);
        }), 128)),
        $props.parking !== void 0 && $props.parking ? (openBlock(), createBlock($setup["IconParking"], {
          key: 0,
          size: "m",
          class: "mb-1 ml-px"
        })) : createCommentVNode("v-if", true)
      ])
    ])
  ], 34);
}
_sfc_main$2.__file = "src/components/line/ItemThermometerStations.vue";
const ItemThermometerStations = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/line/ItemThermometerStations.vue"]]);
const ThermometerStations_vue_vue_type_style_index_0_scoped_81f5b282_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThermometerStations",
  props: {
    line: {
      type: Number,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const stationsStore = useStationsStore();
    const state = reactive({
      stations: null
    });
    onBeforeMount(async () => {
      state.stations = await apiClientService.fetchStationsByLine(props.line);
    });
    function mouseOverAndLeaveItem(action, stationName) {
      if (action == "leave" && stationsStore.stationIsInStationsToDisplay(stationName)) {
        stationsStore.deleteStationToDisplay(stationName);
      } else if (action == "over" && !stationsStore.stationIsInStationsToDisplay(stationName)) {
        stationsStore.addStationToDisplay(stationName);
      }
    }
    function goToStationPage(stationId) {
      router.push(`/line/${props.line}/station/${stationId}`);
    }
    const __returned__ = { props, stationsStore, state, mouseOverAndLeaveItem, goToStationPage, ItemThermometerStations };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-81f5b282"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col items-start p-0 gap-2" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-lg leading-6" }, " Toutes les stations ")
], -1));
const _hoisted_2 = {
  key: 0,
  class: "list-stations"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("div", null, [
      $setup.state.stations !== null && $setup.state.stations.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.state.stations, (station, index) => {
          return openBlock(), createBlock($setup["ItemThermometerStations"], {
            key: index,
            onMouseover: ($event) => $setup.mouseOverAndLeaveItem("over", station.nom),
            onMouseleave: ($event) => $setup.mouseOverAndLeaveItem("leave", station.nom),
            onClick: ($event) => $setup.goToStationPage(station.id),
            index: index + 1,
            line: $setup.props.line,
            name: station.nom,
            parking: station.parking,
            desserte: station.desserte,
            li_code: station.li_code,
            is_last_elem: index + 1 === $setup.state.stations.length
          }, null, 8, ["onMouseover", "onMouseleave", "onClick", "index", "line", "name", "parking", "desserte", "li_code", "is_last_elem"]);
        }), 128))
      ])) : createCommentVNode("v-if", true)
    ])
  ], 64);
}
_sfc_main$1.__file = "src/components/line/ThermometerStations.vue";
const ThermometerStations = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-81f5b282"], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/line/ThermometerStations.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThermometerStations.story",
  setup(__props, { expose }) {
    expose();
    function initState() {
      return {
        lineNumber: 1
      };
    }
    const __returned__ = { initState, ThermometerStations };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "ThermometerStations",
    layout: {
      type: "grid",
      width: 450
    },
    group: "homepage",
    "init-state": $setup.initState
  }, {
    default: withCtx(({ state }) => [
      createVNode($setup["ThermometerStations"], {
        line: state.lineNumber
      }, null, 8, ["line"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/line/ThermometerStations.story.vue";
const ThermometerStations_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_app/cooperation_jn_app/src/components/line/ThermometerStations.story.vue"]]);
const ThermometerStations_story$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ThermometerStations_story
}, Symbol.toStringTag, { value: "Module" }));
export {
  ThermometerStations as T,
  ThermometerStations_story$1 as a,
  router as r
};