(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_equal=runtime.caml_equal,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_js_from_string=runtime.caml_js_from_string,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_js_wrap_callback_strict=runtime.caml_js_wrap_callback_strict,
     caml_new_string=runtime.caml_new_string,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_ojs_new_arr=runtime.caml_ojs_new_arr,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_lessthan=runtime.caml_string_lessthan,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_update_dummy=runtime.caml_update_dummy,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_custom=caml_new_string("_custom"),
     cst_memo=caml_new_string("_memo"),
     cst_map=caml_new_string("_map"),
     cst_span=caml_new_string("span"),
     cst_input=caml_new_string("input"),
     cst_div=caml_new_string("div"),
     cst=caml_new_string(""),
     cst_txt=caml_new_string("_txt"),
     cst_className$1=caml_new_string("className"),
     cst_className$2=caml_new_string("className"),
     cst_className$0=caml_new_string("className"),
     cst_disabled=caml_new_string("disabled"),
     cst_value=caml_new_string("value"),
     cst_type=caml_new_string("type"),
     cst_className=caml_new_string("className"),
     cst_relative_dropdown=caml_new_string("relative-dropdown"),
     cst_autofocus$0=caml_new_string("autofocus"),
     cst_Vdom_Cmd_Echo=caml_new_string("Vdom.Cmd.Echo"),
     cst_Vdom_Cmd_Batch=caml_new_string("Vdom.Cmd.Batch"),
     cst_Vdom_Cmd_Map=caml_new_string("Vdom.Cmd.Map"),
     cst_scroll_to_show=caml_new_string("scroll-to-show"),
     cst_autofocus=caml_new_string("autofocus"),
     cst_button=caml_new_string("button"),
     svg_ns=caml_new_string("http://www.w3.org/2000/svg"),
     cst_overflowY=caml_new_string("overflowY"),
     cst_visible=caml_new_string("visible"),
     cst_hidden=caml_new_string("hidden"),
     cst$0=caml_new_string(""),
     cst_focus=caml_new_string("focus"),
     cst_blur=caml_new_string("blur"),
     cst_change=caml_new_string("change"),
     cst_click=caml_new_string("click"),
     cst_contextmenu=caml_new_string("contextmenu"),
     cst_dblclick=caml_new_string("dblclick"),
     cst_input$0=caml_new_string("input"),
     cst_keydown=caml_new_string("keydown"),
     cst_mousedown=caml_new_string("mousedown"),
     cst_mousemove=caml_new_string("mousemove"),
     cst_focus$0=caml_new_string("focus"),
     cst_checked=caml_new_string("checked"),
     cst_value$1=caml_new_string("value"),
     cst_input$1=caml_new_string("input"),
     cst_blur$0=caml_new_string("blur"),
     cst_div$0=caml_new_string("div"),
     prev_value_attribute=caml_new_string("data-ocaml-vdom-prev-value"),
     cst_value$0=caml_new_string("value"),
     cst_autofocus$1=caml_new_string("autofocus"),
     cst_relative_dropdown$0=caml_new_string("relative-dropdown"),
     cst_scroll_to_show$0=caml_new_string("scroll-to-show"),
     cst_absolute=caml_new_string("absolute"),
     cst_Vdom_blit_no_custom_element_handler_found=
      caml_new_string("Vdom_blit: no custom element handler found"),
     empty=[0,0,0],
     Assert_failure=global_data.Assert_failure,
     Ojs=global_data.Ojs,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib=global_data.Stdlib,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Stdlib_obj=global_data.Stdlib__obj,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     CamlinternalLazy=global_data.CamlinternalLazy,
     _d_=[0,caml_new_string("lib/js_browser.ml"),2229,15],
     _c_=[0,caml_new_string("lib/js_browser.ml"),1785,15],
     _b_=[0,caml_new_string("lib/js_browser.ml"),1643,15],
     _g_=[0,[2,0,[12,32,[2,0,0]]],caml_new_string("%s %s")],
     _l_=
      [0,
       [11,
        caml_new_string("Error during vdom Custom "),
        [2,0,[11,caml_new_string(" lookup: "),[2,0,[12,10,[10,0]]]]]],
       caml_new_string("Error during vdom Custom %s lookup: %s\n%!")],
     _p_=[0,caml_new_string("lib/vdom_blit.ml"),505,13],
     _q_=[0,caml_new_string("lib/vdom_blit.ml"),500,35],
     _t_=
      [0,
       [11,
        caml_new_string("Error during vdom process: "),
        [2,0,[12,10,[10,0]]]],
       caml_new_string("Error during vdom process: %s\n%!")],
     _u_=
      [0,
       [11,
        caml_new_string("Error in event handler "),
        [3,0,[11,caml_new_string(": "),[2,0,[12,10,[10,0]]]]]],
       caml_new_string("Error in event handler %S: %s\n%!")],
     _s_=
      [0,
       [11,caml_new_string("Error during vdom view: "),[2,0,[12,10,[10,0]]]],
       caml_new_string("Error during vdom view: %s\n%!")],
     _r_=[0,caml_new_string("lib/vdom_blit.ml"),576,43],
     _o_=
      [0,
       [11,caml_new_string("Error during vdom sync: "),[2,0,[12,10,[10,0]]]],
       caml_new_string("Error during vdom sync: %s\n%!")],
     _m_=
      [0,
       [11,caml_new_string("Error during vdom blit: "),[2,0,[12,10,[10,0]]]],
       caml_new_string("Error during vdom blit: %s\n%!")],
     _i_=
      [0,
       [11,caml_new_string("scroll: "),[2,0,[12,10,[10,0]]]],
       caml_new_string("scroll: %s\n%!")],
     _j_=
      [0,[8,[0,0,0],0,0,[11,caml_new_string("px"),0]],caml_new_string("%fpx")],
     _h_=
      [0,
       [11,caml_new_string("No command handler found! ("),[2,0,[12,41,0]]],
       caml_new_string("No command handler found! (%s)")];
    function then(error,success,param)
     {var ojs=param[2],alpha_of_js=param[1];
      function x1(x){return caml_call1(success,caml_call1(alpha_of_js,x))}
      function _cS_(x4){return caml_js_wrap_callback_strict(1,x4)}
      ojs.then
       (caml_js_wrap_callback_strict(1,x1),caml_call2(Ojs[8],_cS_,error));
      return 0}
    function t_of_js(x8){return x8}
    function t_to_js(x7){return x7}
    function length(x11){return x11.length}
    function key(x13,x12)
     {var _cR_=x13.key(x12);return caml_call2(Ojs[7],caml_js_to_string,_cR_)}
    function get_item(x16,x15)
     {var _cQ_=x16.getItem(x15.toString());
      return caml_call2(Ojs[7],caml_js_to_string,_cQ_)}
    function set_item(x20,x18,x19)
     {x20.setItem(x18.toString(),x19.toString());return 0}
    function remove_item(x22,x21){x22.removeItem(x21.toString());return 0}
    function clear(x23){x23.clear();return 0}
    var
     Storage=
      [0,t_of_js,t_to_js,length,key,get_item,set_item,remove_item,clear];
    function t_of_js$0(x25){return x25}
    function t_to_js$0(x24){return x24}
    function new_reg_exp(x28,x29,param)
     {var x30=new (Ojs[16].Array)();
      x30.push(x28.toString());
      if(x29){var x31=x29[1];x30.push(x31.toString())}
      return caml_ojs_new_arr(Ojs[16].RegExp,x30)}
    var RegExp=[0,t_of_js$0,t_to_js$0,new_reg_exp];
    function t_of_js$1(x33){return x33}
    function t_to_js$1(x32){return x32}
    var of_string=caml_js_from_string,to_string=caml_js_to_string;
    function to_lower_case(x36){return x36.toLowerCase()}
    function to_upper_case(x37){return x37.toUpperCase()}
    function concat(x42,x38)
     {var x39=new (Ojs[16].Array)();
      function _cP_(x40){x39.push(x40);return 0}
      caml_call2(Stdlib_list[15],_cP_,x38);
      return x42.concat.apply(x42,x39)}
    function includes(x44,x43){return x44.includes(x43) | 0}
    function ends_with(x46,x45){return x46.endsWith(x45) | 0}
    function index_of(x48,x47){return x48.indexOf(x47)}
    function repeat(x50,x49){return x50.repeat(x49)}
    function search(x52,x51){return x52.search(caml_call1(RegExp[2],x51))}
    function trim(x53){return x53.trim()}
    var
     JsString=
      [0,
       t_of_js$1,
       t_to_js$1,
       of_string,
       to_string,
       to_lower_case,
       to_upper_case,
       concat,
       includes,
       ends_with,
       index_of,
       repeat,
       search,
       trim];
    function t_of_js$2(x55){return x55}
    function t_to_js$2(x54){return x54}
    function new_date(x58){return new (Ojs[16].Date)(x58)}
    function now(param){return Ojs[16].Date.now()}
    function parse(x59){return Ojs[16].Date.parse(x59.toString())}
    function get_date(x60){return x60.getDate()}
    function get_day(x61){return x61.getDay()}
    function get_full_year(x62){return x62.getFullYear()}
    function get_hours(x63){return x63.getHours()}
    function get_milliseconds(x64){return x64.getMilliseconds()}
    function get_minutes(x65){return x65.getMinutes()}
    function get_month(x66){return x66.getMonth()}
    function get_seconds(x67){return x67.getSeconds()}
    function get_time(x68){return x68.getTime()}
    function get_timezone_offset(x69){return x69.getTimezoneOffset()}
    function get_UTC_date(x70){return x70.getUTCDate()}
    function get_UTC_day(x71){return x71.getUTCDay()}
    function get_UTC_full_year(x72){return x72.getUTCFullYear()}
    function get_UTC_hours(x73){return x73.getUTCHours()}
    function get_UTC_milliseconds(x74){return x74.getUTCMilliseconds()}
    function get_UTC_minutes(x75){return x75.getUTCMinutes()}
    function get_UTC_month(x76){return x76.getUTCMonth()}
    function get_UTC_seconds(x77){return x77.getUTCSeconds()}
    function get_year(x78){return x78.getYear()}
    function set_date(x80,x79){x80.setDate(x79);return 0}
    function set_full_year(x82,x81){x82.setFullYear(x81);return 0}
    function set_hours(x84,x83){x84.setHours(x83);return 0}
    function set_milliseconds(x86,x85){x86.setMilliseconds(x85);return 0}
    function set_minutes(x88,x87){x88.setMinutes(x87);return 0}
    function set_month(x90,x89){x90.setMonth(x89);return 0}
    function set_seconds(x92,x91){x92.setSeconds(x91);return 0}
    function set_time(x94,x93){x94.setTime(x93);return 0}
    function set_UTC_date(x96,x95){x96.setUTCDate(x95);return 0}
    function set_UTC_full_year(x98,x97){x98.setUTCFullYear(x97);return 0}
    function set_UTC_hours(x100,x99){x100.setUTCHours(x99);return 0}
    function set_UTC_milliseconds(x102,x101)
     {x102.setUTCMilliseconds(x101);return 0}
    function set_UTC_minutes(x104,x103){x104.setUTCMinutes(x103);return 0}
    function set_UTC_month(x106,x105){x106.setUTCMonth(x105);return 0}
    function set_UTC_seconds(x108,x107){x108.setUTCSeconds(x107);return 0}
    function set_year(x110,x109){x110.setYear(x109);return 0}
    function to_date_string(x111)
     {return caml_js_to_string(x111.toDateString())}
    function to_GMT_string(x112){return caml_js_to_string(x112.toGMTString())}
    function to_ISO_string(x113){return caml_js_to_string(x113.toISOString())}
    function to_locale_string(x114)
     {return caml_js_to_string(x114.toLocaleString())}
    function to_string$0(x115){return caml_js_to_string(x115.toString())}
    function to_time_string(x116)
     {return caml_js_to_string(x116.toTimeString())}
    function to_UTC_string(x117){return caml_js_to_string(x117.toUTCString())}
    var
     Date=
      [0,
       t_of_js$2,
       t_to_js$2,
       new_date,
       now,
       parse,
       get_date,
       get_day,
       get_full_year,
       get_hours,
       get_milliseconds,
       get_minutes,
       get_month,
       get_seconds,
       get_time,
       get_timezone_offset,
       get_UTC_date,
       get_UTC_day,
       get_UTC_full_year,
       get_UTC_hours,
       get_UTC_milliseconds,
       get_UTC_minutes,
       get_UTC_month,
       get_UTC_seconds,
       get_year,
       set_date,
       set_full_year,
       set_hours,
       set_milliseconds,
       set_minutes,
       set_month,
       set_seconds,
       set_time,
       set_UTC_date,
       set_UTC_full_year,
       set_UTC_hours,
       set_UTC_milliseconds,
       set_UTC_minutes,
       set_UTC_month,
       set_UTC_seconds,
       set_year,
       to_date_string,
       to_GMT_string,
       to_ISO_string,
       to_locale_string,
       to_string$0,
       to_time_string,
       to_UTC_string];
    function t_of_js$3(x119){return x119}
    function t_to_js$3(x118){return x118}
    function name(x122){return caml_js_to_string(x122.name)}
    function size(x123){return x123.size}
    function type(x124){return caml_js_to_string(x124.type)}
    var File=[0,t_of_js$3,t_to_js$3,name,size,type];
    function t_of_js$4(x126){return x126}
    function t_to_js$4(x125){return x125}
    function files(x129){return caml_call2(Ojs[3],File[1],x129.files)}
    var DataTransfer=[0,t_of_js$4,t_to_js$4,files];
    function t_of_js$5(x132){return x132}
    function t_to_js$5(x131){return x131}
    function kind_to_js(x135)
     {if(typeof x135 === "number")
       {var _cO_=x135;
        if(88 <= _cO_)
         {if(132 <= _cO_)
           switch(_cO_)
            {case 132:return "resume";
             case 133:return "scroll";
             case 134:return "seeked";
             case 135:return "seeking";
             case 136:return "select";
             case 137:return "selectionchange";
             case 138:return "selectstart";
             case 139:return "show";
             case 140:return "slotchange";
             case 141:return "soundend";
             case 142:return "soundstart";
             case 143:return "speechend";
             case 144:return "speechstart";
             case 145:return "stalled";
             case 146:return "start";
             case 147:return "storage";
             case 148:return "submit";
             case 149:return "success";
             case 150:return "suspend";
             case 151:return "SVGAbort";
             case 152:return "SVGError";
             case 153:return "SVGLoad";
             case 154:return "SVGResize";
             case 155:return "SVGScroll";
             case 156:return "SVGUnload";
             case 157:return "SVGZoom";
             case 158:return "timeout";
             case 159:return "timeupdate";
             case 160:return "touchcancel";
             case 161:return "touchend";
             case 162:return "touchmove";
             case 163:return "touchstart";
             case 164:return "transitionend";
             case 165:return "unload";
             case 166:return "updateready";
             case 167:return "upgradeneeded";
             case 168:return "userproximity";
             case 169:return "versionchange";
             case 170:return "visibilitychange";
             case 171:return "voiceschanged";
             case 172:return "volumechange";
             case 173:return "waiting";
             default:return "wheel"}
          switch(_cO_)
           {case 88:return "message";
            case 89:return "messageerror";
            case 90:return "mousedown";
            case 91:return "mouseenter";
            case 92:return "mouseleave";
            case 93:return "mousemove";
            case 94:return "mouseout";
            case 95:return "mouseover";
            case 96:return "mouseup";
            case 97:return "nomatch";
            case 98:return "notificationclick";
            case 99:return "noupdate";
            case 100:return "obsolete";
            case 101:return "offline";
            case 102:return "online";
            case 103:return "open";
            case 104:return "orientationchange";
            case 105:return "pagehide";
            case 106:return "pageshow";
            case 107:return "paste";
            case 108:return "pause";
            case 109:return "play";
            case 110:return "playing";
            case 111:return "pointercancel";
            case 112:return "pointerdown";
            case 113:return "pointerenter";
            case 114:return "pointerleave";
            case 115:return "pointerlockchange";
            case 116:return "pointerlockerror";
            case 117:return "pointermove";
            case 118:return "pointerout";
            case 119:return "pointerover";
            case 120:return "pointerup";
            case 121:return "popstate";
            case 122:return "progress";
            case 123:return "push";
            case 124:return "pushsubscriptionchange";
            case 125:return "ratechange";
            case 126:return "readystatechange";
            case 127:return "repeatEvent";
            case 128:return "reset";
            case 129:return "resize";
            case 130:return "resourcetimingbufferfull";
            default:return "result"}}
        if(44 <= _cO_)
         switch(_cO_)
          {case 44:return "DOMFocusIn";
           case 45:return "DOMFocusOut";
           case 46:return "DOMNodeInserted";
           case 47:return "DOMNodeInsertedIntoDocument";
           case 48:return "DOMNodeRemoved";
           case 49:return "DOMNodeRemovedFromDocument";
           case 50:return "DOMSubtreeModified";
           case 51:return "downloading";
           case 52:return "drag";
           case 53:return "dragend";
           case 54:return "dragenter";
           case 55:return "dragleave";
           case 56:return "dragover";
           case 57:return "dragstart";
           case 58:return "drop";
           case 59:return "durationchange";
           case 60:return "emptied";
           case 61:return "end";
           case 62:return "ended";
           case 63:return "endEvent";
           case 64:return "error";
           case 65:return "focus";
           case 66:return "focusin";
           case 67:return "focusout";
           case 68:return "fullscreenchange";
           case 69:return "fullscreenerror";
           case 70:return "gamepadconnected";
           case 71:return "gamepaddisconnected";
           case 72:return "gotpointercapture";
           case 73:return "hashchange";
           case 74:return "input";
           case 75:return "invalid";
           case 76:return "keydown";
           case 77:return "keypress";
           case 78:return "keyup";
           case 79:return "languagechange";
           case 80:return "levelchange";
           case 81:return "load";
           case 82:return "loadeddata";
           case 83:return "loadedmetadata";
           case 84:return "loadend";
           case 85:return "loadstart";
           case 86:return "lostpointercapture";
           default:return "mark"}
        switch(_cO_)
         {case 0:return "abort";
          case 1:return "afterprint";
          case 2:return "animationend";
          case 3:return "animationiteration";
          case 4:return "animationstart";
          case 5:return "appinstalled";
          case 6:return "audioend";
          case 7:return "audioprocess";
          case 8:return "audiostart";
          case 9:return "beforeprint";
          case 10:return "beforeunload";
          case 11:return "beginEvent";
          case 12:return "blocked";
          case 13:return "blur";
          case 14:return "boundary";
          case 15:return "cached";
          case 16:return "canplay";
          case 17:return "canplaythrough";
          case 18:return "change";
          case 19:return "chargingchange";
          case 20:return "chargingtimechange";
          case 21:return "checking";
          case 22:return "click";
          case 23:return "close";
          case 24:return "complete";
          case 25:return "compositionend";
          case 26:return "compositionstart";
          case 27:return "compositionupdate";
          case 28:return "contextmenu";
          case 29:return "copy";
          case 30:return "cut";
          case 31:return "dblclick";
          case 32:return "devicechange";
          case 33:return "devicelight";
          case 34:return "devicemotion";
          case 35:return "deviceorientation";
          case 36:return "deviceproximity";
          case 37:return "dischargingtimechange";
          case 38:return "DOMActivate";
          case 39:return "DOMAttributeNameChanged";
          case 40:return "DOMAttrModified";
          case 41:return "DOMCharacterDataModified";
          case 42:return "DOMContentLoaded";
          default:return "DOMElementNameChanged"}}
      var x136=x135[1];
      return x136.toString()}
    function target(x140){return x140.target}
    function prevent_default(x141){x141.preventDefault();return 0}
    function type$0(x142){return caml_js_to_string(x142.type)}
    function init_event(x146,x143,x144,x145)
     {x146.initEvent(kind_to_js(x143),! ! x144,! ! x145);return 0}
    function client_x(x147){return x147.clientX}
    function client_y(x148){return x148.clientY}
    function page_x(x149){return x149.pageX}
    function page_y(x150){return x150.pageY}
    function screen_x(x151){return x151.screenX}
    function screen_y(x152){return x152.screenY}
    function movement_x(x153){return x153.movementX}
    function movement_y(x154){return x154.movementY}
    function buttons(x155){return x155.buttons}
    function alt_key(x156){return x156.altKey | 0}
    function ctrl_key(x157){return x157.ctrlKey | 0}
    function shift_key(x158){return x158.shiftKey | 0}
    function which(x159){return x159.which}
    function code(x160){return caml_js_to_string(x160.code)}
    function key$0(x161){return caml_js_to_string(x161.key)}
    function delta_y(x162){return x162.deltaY}
    function delta_x(x163){return x163.deltaX}
    function data_transfer(x164)
     {return caml_call1(DataTransfer[1],x164.dataTransfer)}
    function data(x165){return x165.data}
    function origin(x166){return caml_js_to_string(x166.origin)}
    function t_of_js$6(x168){return x168}
    function t_to_js$6(x167){return x167}
    function height(x171){return x171.height}
    function width(x172){return x172.width}
    function left(x173){return x173.left}
    function right(x174){return x174.right}
    function top(x175){return x175.top}
    function bottom(x176){return x176.bottom}
    var Rect=[0,t_of_js$6,t_to_js$6,height,width,left,right,top,bottom];
    function t_of_js$7(x178){return x178}
    function t_to_js$7(x177){return x177}
    function x(x181){return x181.x}
    function y(x182){return x182.y}
    function height$0(x183){return x183.height}
    function width$0(x184){return x184.width}
    var SVGRect=[0,t_of_js$7,t_to_js$7,x,y,height$0,width$0];
    function t_of_js$8(x186){return x186}
    function t_to_js$8(x185){return x185}
    function set(style,prop,value){return style[prop] = value.toString()}
    function set_color(x189,x190){return x189.color = x190.toString()}
    function set_border(x191,x192){return x191.border = x192.toString()}
    function set_background(x193,x194)
     {return x193.background = x194.toString()}
    function set_background_color(x195,x196)
     {return x195.backgroundColor = x196.toString()}
    function set_height(x197,x198){return x197.height = x198.toString()}
    function set_width(x199,x200){return x199.width = x200.toString()}
    function set_bottom(x201,x202){return x201.bottom = x202.toString()}
    function set_left(x203,x204){return x203.left = x204.toString()}
    function set_top(x205,x206){return x205.top = x206.toString()}
    function set_right(x207,x208){return x207.right = x208.toString()}
    function set_position(x209,x210){return x209.position = x210.toString()}
    function set_cursor(x211,x212){return x211.cursor = x212.toString()}
    function set_display(x213,x214){return x213.display = x214.toString()}
    function get(style,prop){return caml_js_to_string(style[prop])}
    var
     Style=
      [0,
       t_of_js$8,
       t_to_js$8,
       set,
       set_color,
       set_border,
       set_background,
       set_background_color,
       set_height,
       set_width,
       set_bottom,
       set_left,
       set_top,
       set_right,
       set_position,
       set_cursor,
       set_display,
       get];
    function t_of_js$9(x216){return x216}
    function t_to_js$9(x215){return x215}
    var _a_=Ojs[17];
    function clone_node(x220,x219){return x220.cloneNode(! ! x219)}
    function contains(x222,x221){return x222.contains(x221) | 0}
    function append_child(x224,x223){x224.appendChild(x223);return 0}
    function insert_before(x227,x225,x226)
     {x227.insertBefore(x225,x226);return 0}
    function replace_child(x230,x228,x229)
     {x230.replaceChild(x228,x229);return 0}
    function remove_child(x232,x231){x232.removeChild(x231);return 0}
    function first_child(x233){return x233.firstChild}
    function last_child(x234){return x234.lastChild}
    function next_sibling(x235){return x235.nextSibling}
    function remove_all_children(x)
     {var child$1=x.firstChild,child=child$1;
      for(;;)
       {if(caml_equal(child,_a_))return 0;
        remove_child(x,child);
        var child$0=x.firstChild,child=child$0;
        continue}}
    function has_child_nodes(x236){return x236.hasChildNodes() | 0}
    function add_event_listener(x241,x237,x238,x240)
     {var
       _cM_=! ! x240,
       _cN_=
        caml_js_wrap_callback_strict
         (1,function(x239){return caml_call1(x238,x239)});
      x241.addEventListener(kind_to_js(x237),_cN_,_cM_);
      return 0}
    function inner_text(x242){return caml_js_to_string(x242.innerText)}
    function get_elements_by_tag_name(x244,x243)
     {var _cL_=x244.getElementsByTagName(x243.toString());
      return caml_call2(Ojs[1],t_of_js$9,_cL_)}
    function get_elements_by_class_name(x247,x246)
     {var _cK_=x247.getElementsByClassName(x246.toString());
      return caml_call2(Ojs[1],t_of_js$9,_cK_)}
    function has_attribute(x250,x249)
     {return x250.hasAttribute(x249.toString()) | 0}
    function get_attribute(x252,x251)
     {return caml_js_to_string(x252.getAttribute(x251.toString()))}
    function remove_attribute(x254,x253)
     {x254.removeAttribute(x253.toString());return 0}
    function set_attribute(x257,x255,x256)
     {x257.setAttribute(x255.toString(),x256.toString());return 0}
    function get_bounding_client_rect(x258)
     {var _cJ_=x258.getBoundingClientRect();return caml_call1(Rect[1],_cJ_)}
    function get_bounding_box(x259)
     {var _cI_=x259.getBBox();return caml_call1(SVGRect[1],_cI_)}
    function normalize(x260){x260.normalize();return 0}
    function value(x261){return caml_js_to_string(x261.value)}
    function set_value(x262,x263){return x262.value = x263.toString()}
    function select(x264){x264.select();return 0}
    function files$0(x265){return caml_call2(Ojs[3],File[1],x265.files)}
    function selected_index(x267){return x267.selectedIndex}
    function checked(x268){return x268.checked | 0}
    function set_checked(x269,x270){return x269.checked = ! ! x270}
    function node_value(x271){return caml_js_to_string(x271.nodeValue)}
    function set_node_value(x272,x273)
     {return x272.nodeValue = x273.toString()}
    function parent_node(x274){return x274.parentNode}
    function node_name(x275){return caml_js_to_string(x275.nodeName)}
    function dispatch_event(x277,x276){return x277.dispatchEvent(x276) | 0}
    function style(x278){return caml_call1(Style[1],x278.style)}
    function set_inner_HTML(x279,x280)
     {return x279.innerHTML = x280.toString()}
    function set_text_content(x281,x282)
     {return x281.textContent = x282.toString()}
    function set_class_name(x283,x284)
     {return x283.className = x284.toString()}
    function class_name(x285){return caml_js_to_string(x285.className)}
    function client_width(x286){return x286.clientWidth}
    function client_height(x287){return x287.clientHeight}
    function scroll_width(x288){return x288.scrollWidth}
    function scroll_height(x289){return x289.scrollHeight}
    function width$1(x290){return x290.width}
    function height$1(x291){return x291.height}
    function offset_parent(x292)
     {return caml_call2(Ojs[7],t_of_js$9,x292.offsetParent)}
    function offset_top(x294){return x294.offsetTop}
    function offset_left(x295){return x295.offsetLeft}
    function offset_width(x296){return x296.offsetWidth}
    function offset_height(x297){return x297.offsetHeight}
    function scroll_top(x298){return x298.scrollTop}
    function set_scroll_top(x299,x300){return x299.scrollTop = x300}
    function focus(x301){x301.focus();return 0}
    function blur(x302){x302.blur();return 0}
    function selection_start(x303){return x303.selectionStart}
    function selection_end(x304){return x304.selectionEnd}
    function set_selection_start(x305,x306){return x305.selectionStart = x306}
    function set_selection_end(x307,x308){return x307.selectionEnd = x308}
    function remove(x309){x309.remove();return 0}
    function click(x310){x310.click();return 0}
    var
     Element=
      [0,
       t_of_js$9,
       t_to_js$9,
       _a_,
       clone_node,
       contains,
       append_child,
       insert_before,
       replace_child,
       remove_child,
       first_child,
       last_child,
       next_sibling,
       remove_all_children,
       has_child_nodes,
       add_event_listener,
       inner_text,
       get_elements_by_tag_name,
       get_elements_by_class_name,
       has_attribute,
       get_attribute,
       remove_attribute,
       set_attribute,
       get_bounding_client_rect,
       get_bounding_box,
       normalize,
       value,
       set_value,
       select,
       files$0,
       selected_index,
       checked,
       set_checked,
       node_value,
       set_node_value,
       parent_node,
       node_name,
       dispatch_event,
       style,
       set_inner_HTML,
       set_text_content,
       set_class_name,
       class_name,
       client_width,
       client_height,
       scroll_width,
       scroll_height,
       width$1,
       height$1,
       offset_parent,
       offset_top,
       offset_left,
       offset_width,
       offset_height,
       scroll_top,
       set_scroll_top,
       focus,
       blur,
       selection_start,
       selection_end,
       set_selection_start,
       set_selection_end,
       remove,
       click];
    function t_of_js$10(x312){return x312}
    function t_to_js$10(x311){return x311}
    function create_element(x316,x315)
     {var _cH_=x316.createElement(x315.toString());
      return caml_call1(Element[1],_cH_)}
    function create_element_ns(x319,x317,x318)
     {var _cG_=x319.createElementNS(x317.toString(),x318.toString());
      return caml_call1(Element[1],_cG_)}
    function create_text_node(x321,x320)
     {var _cF_=x321.createTextNode(x320.toString());
      return caml_call1(Element[1],_cF_)}
    function create_event(x323,x322){return x323.createEvent(x322.toString())}
    function get_element_by_id(x325,x324)
     {var _cE_=x325.getElementById(x324.toString());
      return caml_call2(Ojs[7],Element[1],_cE_)}
    function get_elements_by_class_name$0(x328,x327)
     {var _cD_=x328.getElementsByClassName(x327.toString());
      return caml_call2(Ojs[1],Element[1],_cD_)}
    function body(x330){return caml_call1(Element[1],x330.body)}
    function document_element(x331)
     {return caml_call1(Element[1],x331.documentElement)}
    function active_element(x332)
     {return caml_call1(Element[1],x332.activeElement)}
    function cookie(x333){return caml_js_to_string(x333.cookie)}
    function set_cookie(x334,x335){return x334.cookie = x335.toString()}
    function set_title(x336,x337){return x336.title = x337.toString()}
    function open(x344,x338,x339,param)
     {var x340=new (Ojs[16].Array)();
      if(x338){var x342=x338[1];x340.push(x342.toString())}
      if(x339){var x341=x339[1];x340.push(x341.toString())}
      x344.open.apply(x344,x340);
      return 0}
    function write(x346,x345){x346.write(x345.toString());return 0}
    function writeln(x348,x347){x348.writeln(x347.toString());return 0}
    function close(x349){x349.close();return 0}
    function exec_command(x351,x350)
     {return x351.execCommand(x350.toString()) | 0}
    function query_selector(x353,x352)
     {var _cC_=x353.querySelector(x352.toString());
      return caml_call1(Element[1],_cC_)}
    function remove_all_selection_ranges(x354)
     {x354.getSelection().removeAllRanges();return 0}
    var
     Document=
      [0,
       t_of_js$10,
       t_to_js$10,
       create_element,
       create_element_ns,
       create_text_node,
       create_event,
       get_element_by_id,
       get_elements_by_class_name$0,
       body,
       document_element,
       active_element,
       cookie,
       set_cookie,
       set_title,
       open,
       write,
       writeln,
       close,
       exec_command,
       query_selector,
       remove_all_selection_ranges];
    function t_of_js$11(x356){return x356}
    function t_to_js$11(x355){return x355}
    function length$0(x359){return x359.length}
    function back(x360){x360.back();return 0}
    function forward(x361){x361.forward();return 0}
    function go(x365,x362)
     {if(349440947 <= x362[1])
       var x363=x362[2],x363$0=x363;
      else
       var x364=x362[2],x363$0=x364.toString();
      x365.go(x363$0);
      return 0}
    function replace_state(x369,x366,x367,x368)
     {x369.replaceState(x366,x367.toString(),x368.toString());return 0}
    function push_state(x373,x370,x371,x372)
     {x373.pushState(x370,x371.toString(),x372.toString());return 0}
    var
     History=
      [0,
       t_of_js$11,
       t_to_js$11,
       length$0,
       back,
       forward,
       go,
       replace_state,
       push_state];
    function t_of_js$12(x375){return x375}
    function t_to_js$12(x374){return x374}
    function get_hash(param){return caml_js_to_string(Ojs[16].location.hash)}
    function set_hash(x378){return Ojs[16].location.hash = x378.toString()}
    function host(x379){return caml_js_to_string(x379.host)}
    function set_host(x380,x381){return x380.host = x381.toString()}
    function hostname(x382){return caml_js_to_string(x382.hostname)}
    function set_hostname(x383,x384){return x383.hostname = x384.toString()}
    function href(param){return caml_js_to_string(Ojs[16].location.href)}
    function set_href(x385){return Ojs[16].location.href = x385.toString()}
    function pathname(x386){return caml_js_to_string(x386.pathname)}
    function set_pathname(x387,x388){return x387.pathname = x388.toString()}
    function port(x389){return caml_js_to_string(x389.port)}
    function set_port(x390,x391){return x390.port = x391.toString()}
    function protocol(x392){return caml_js_to_string(x392.protocol)}
    function set_protocol(x393,x394){return x393.protocol = x394.toString()}
    function search$0(x395){return caml_js_to_string(x395.search)}
    function set_search(x396,x397){return x396.search = x397.toString()}
    function assign(x399,x398){x399.assign(x398.toString());return 0}
    function reload(x404,x400,param)
     {var x401=new (Ojs[16].Array)();
      if(x400){var x402=x400[1];x401.push(! ! x402)}
      x404.reload.apply(x404,x401);
      return 0}
    function replace(x406,x405){x406.replace(x405.toString());return 0}
    var
     Location=
      [0,
       t_of_js$12,
       t_to_js$12,
       get_hash,
       set_hash,
       host,
       set_host,
       hostname,
       set_hostname,
       href,
       set_href,
       pathname,
       set_pathname,
       port,
       set_port,
       protocol,
       set_protocol,
       search$0,
       set_search,
       assign,
       reload,
       replace];
    function t_of_js$13(x408){return x408}
    function t_to_js$13(x407){return x407}
    function add_event_listener$0(x419,x415,x416,x418)
     {var
       _cA_=! ! x418,
       _cB_=
        caml_js_wrap_callback_strict
         (1,function(x417){return caml_call1(x416,x417)});
      x419.addEventListener(kind_to_js(x415),_cB_,_cA_);
      return 0}
    function document(x420){return caml_call1(Document[1],x420.document)}
    function set_onload(x421,x422)
     {return x421.onload
             =
             caml_js_wrap_callback_strict
              (1,function(param){return caml_call1(x422,0)})}
    function set_interval(x425,x423,x424)
     {return x425.setInterval
              (caml_js_wrap_callback_strict
                (1,function(param){return caml_call1(x423,0)}),
               x424)}
    function set_timeout(x428,x426,x427)
     {return x428.setTimeout
              (caml_js_wrap_callback_strict
                (1,function(param){return caml_call1(x426,0)}),
               x427)}
    function clear_timeout(x430,x429){x430.clearTimeout(x429);return 0}
    function clear_interval(x432,x431){x432.clearInterval(x431);return 0}
    function request_animation_frame(x435,x433)
     {x435.requestAnimationFrame
       (caml_js_wrap_callback_strict
         (1,function(x434){return caml_call1(x433,x434)}));
      return 0}
    function open$0(x446,x436,x437,x438,x439,param)
     {var x440=new (Ojs[16].Array)();
      if(x436){var x444=x436[1];x440.push(x444.toString())}
      if(x437){var x443=x437[1];x440.push(x443.toString())}
      if(x438){var x442=x438[1];x440.push(x442.toString())}
      if(x439){var x441=x439[1];x440.push(! ! x441)}
      return x446.open.apply(x446,x440)}
    function alert(x448,x447){x448.alert(x447.toString());return 0}
    function session_storage(x449)
     {return caml_call2(Ojs[7],Storage[1],x449.sessionStorage)}
    function local_storage(x451)
     {return caml_call2(Ojs[7],Storage[1],x451.localStorage)}
    function inner_width(x453){return x453.innerWidth}
    function inner_height(x454){return x454.innerHeight}
    function page_x_offset(x455){return x455.pageXOffset}
    function page_y_offset(x456){return x456.pageYOffset}
    function scroll_by(x459,x457,x458){x459.scrollBy(x457,x458);return 0}
    function scroll_to(x462,x460,x461){x462.scrollTo(x460,x461);return 0}
    function history(x463){return caml_call1(History[1],x463.history)}
    function location(x464){return caml_call1(Location[1],x464.location)}
    function frame_element(x465)
     {return caml_call1(Element[1],x465.frameElement)}
    function get_computed_style(x467,x466)
     {var _cz_=x467.getComputedStyle(caml_call1(Element[2],x466));
      return caml_call1(Style[1],_cz_)}
    function decode_URI_component(x469,x468)
     {return caml_js_to_string(x469.decodeURIComponent(x468.toString()))}
    function event_source(x470){return x470.source}
    function post_message(x473,x471,x472)
     {x473.postMessage(x471,x472.toString());return 0}
    function content_window(x474)
     {var _cy_=caml_call1(Element[2],x474).contentWindow;
      return caml_call2(Ojs[7],t_of_js$13,_cy_)}
    function content_document(x476)
     {var _cx_=caml_call1(Element[2],x476).contentDocument;
      return caml_call2(Ojs[7],Document[1],_cx_)}
    var IFrame=[0,content_window,content_document];
    function parse$0(x478){return Ojs[16].JSON.parse(x478.toString())}
    function stringify(x479)
     {return caml_js_to_string(Ojs[16].JSON.stringify(x479))}
    var JSON=[0,parse$0,stringify];
    function t_of_js$14(x484){return x484}
    function t_to_js$14(x483){return x483}
    function create(param){return new (Ojs[16].FileReader)()}
    function ready_state(x487)
     {var x481=x487.readyState;
      if(2 < x481 >>> 0)throw [0,Assert_failure,_b_];
      switch(x481){case 0:return 0;case 1:return 1;default:return 2}}
    function result(x488){return caml_js_to_string(x488.result)}
    function set_onload$0(x489,x490)
     {return x489.onload
             =
             caml_js_wrap_callback_strict
              (1,function(param){return caml_call1(x490,0)})}
    function read_as_binary_string(x492,x491)
     {x492.readAsBinaryString(caml_call1(File[2],x491));return 0}
    function read_as_text(x494,x493)
     {x494.readAsText(caml_call1(File[2],x493));return 0}
    function t_of_js$15(x496){return x496}
    function t_to_js$15(x495){return x495}
    function create$0(param){return new (Ojs[16].XMLHttpRequest)()}
    function open$1(x501,x499,x500)
     {x501.open(x499.toString(),x500.toString());return 0}
    function send(x503,x502){x503.send(x502);return 0}
    function set_request_header(x506,x504,x505)
     {x506.setRequestHeader(x504.toString(),x505.toString());return 0}
    function get_response_header(x508,x507)
     {var _cw_=x508.getResponseHeader(x507.toString());
      return caml_call2(Ojs[7],caml_js_to_string,_cw_)}
    function set_response_type(x510,x511)
     {return x510.responseType = x511.toString()}
    function override_mime_type(x513,x512)
     {x513.overrideMimeType(x512.toString());return 0}
    function set_with_credentials(x514,x515)
     {return x514.withCredentials = ! ! x515}
    function status(x521){return x521.status}
    function ready_state$0(x522)
     {var x518=x522.readyState;
      if(4 < x518 >>> 0)return [0,x518];
      switch(x518)
       {case 0:return 0;
        case 1:return 1;
        case 2:return 2;
        case 3:return 3;
        default:return 4}}
    function response_text(x523){return caml_js_to_string(x523.responseText)}
    function response(x524){return x524.response}
    function set_onreadystatechange(x525,x526)
     {return x525.onreadystatechange
             =
             caml_js_wrap_callback_strict
              (1,function(param){return caml_call1(x526,0)})}
    function t_of_js$16(x528){return x528}
    function t_to_js$16(x527){return x527}
    function create$1(x534,x535,param)
     {var x536=new (Ojs[16].Array)();
      x536.push(x534.toString());
      if(x535)
       {var x537=x535[1];
        x536.push(caml_call2(Ojs[4],caml_js_from_string,x537))}
      return caml_ojs_new_arr(Ojs[16].WebSocket,x536)}
    function send$0(x540,x539){x540.send(x539.toString());return 0}
    function close$0(x547,x541,x542,param)
     {var x543=new (Ojs[16].Array)();
      if(x541){var x545=x541[1];x543.push(x545)}
      if(x542){var x544=x542[1];x543.push(x544.toString())}
      x547.close.apply(x547,x543);
      return 0}
    function binary_type(x548){return caml_js_to_string(x548.binaryType)}
    function set_binary_type(x549,x550)
     {return x549.binaryType = x550.toString()}
    function ready_state$1(x551)
     {var x532=x551.readyState;
      if(3 < x532 >>> 0)throw [0,Assert_failure,_c_];
      switch(x532)
       {case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}}
    function add_event_listener$1(x556,x552,x553,x555)
     {var
       _cu_=! ! x555,
       _cv_=
        caml_js_wrap_callback_strict
         (1,function(x554){return caml_call1(x553,x554)});
      x556.addEventListener(kind_to_js(x552),_cv_,_cu_);
      return 0}
    function code$0(x559){return x559.code}
    var
     window=Ojs[16].window,
     document$0=caml_call1(Document[1],Ojs[16].document);
    function context_of_js(x561){return x561}
    function context_to_js(x560){return x560}
    function gradient_of_js(x565){return x565}
    function gradient_to_js(x564){return x564}
    function get_context(opt,canvas)
     {if(opt)var sth=opt[1],alpha=sth;else var alpha=1;
      var
       _ct_=
        caml_call1(Element[2],canvas).getContext("2d",{"alpha":! ! alpha});
      return caml_call2(Ojs[7],context_of_js,_ct_)}
    function to_data_URL(x576)
     {return caml_js_to_string(caml_call1(Element[2],x576).toDataURL())}
    function set_fill_style(x577,x578)
     {if(66123280 <= x578[1])
       var x580=x578[2],_cs_=x580;
      else
       var x579=x578[2],_cs_=x579.toString();
      return x577.fillStyle = _cs_}
    function set_stroke_style(x581,x582)
     {if(66123280 <= x582[1])
       var x584=x582[2],_cr_=x584;
      else
       var x583=x582[2],_cr_=x583.toString();
      return x581.strokeStyle = _cr_}
    function set_line_width(x585,x586){return x585.lineWidth = x586}
    function create_linear_gradient(x591,x587,x588,x589,x590)
     {return x591.createLinearGradient(x587,x588,x589,x590)}
    function add_color_stop(x594,x592,x593)
     {x594.addColorStop(x592,x593.toString());return 0}
    function begin_path(x595){x595.beginPath();return 0}
    function close_path(x596){x596.closePath();return 0}
    function arc(x602,x597,x598,x599,x600,x601)
     {x602.arc(x597,x598,x599,x600,x601);return 0}
    function move_to(x605,x603,x604){x605.moveTo(x603,x604);return 0}
    function line_to(x608,x606,x607){x608.lineTo(x606,x607);return 0}
    function fill(x609){x609.fill();return 0}
    function stroke(x610){x610.stroke();return 0}
    function stroke_rect(x615,x611,x612,x613,x614)
     {x615.strokeRect(x611,x612,x613,x614);return 0}
    function fill_rect(x620,x616,x617,x618,x619)
     {x620.fillRect(x616,x617,x618,x619);return 0}
    function set_font(x621,x622){return x621.font = x622.toString()}
    function fill_text(x626,x623,x624,x625)
     {x626.fillText(x623.toString(),x624,x625);return 0}
    function stroke_text(x630,x627,x628,x629)
     {x630.strokeText(x627.toString(),x628,x629);return 0}
    function t_of_js$17(x632){return x632}
    function t_to_js$17(x631){return x631}
    function width$2(x635){return x635.width}
    var TextMetrics=[0,t_of_js$17,t_to_js$17,width$2];
    function measure_text(x637,x636)
     {var _cq_=x637.measureText(x636.toString());
      return caml_call1(TextMetrics[1],_cq_)}
    function rotate(x639,x638){x639.rotate(x638);return 0}
    function translate(x642,x640,x641){x642.translate(x640,x641);return 0}
    function scale(x645,x643,x644){x645.scale(x643,x644);return 0}
    function clear_rect(x650,x646,x647,x648,x649)
     {x650.clearRect(x646,x647,x648,x649);return 0}
    function now$0(param){return Ojs[16].performance.now()}
    var Performance=[0,now$0];
    function log(x654,x653){x654.log(x653);return 0}
    var console=Ojs[16].console;
    function create$2(x657){return new (Ojs[16].ArrayBuffer)(x657)}
    function from_buffer(x660){return new (Ojs[16].Uint8Array)(x660)}
    function set$0(x664,x661,x663)
     {function _co_(_cp_){return _cp_}
      x664.set(caml_call2(Ojs[2],_co_,x661),x663);
      return 0}
    function options(x667,x668,param)
     {var x669=caml_call1(Ojs[9],0);
      if(x667){var x671=x667[1];x669.type = x671.toString()}
      if(x668){var x670=x668[1];x669.endings = x670.toString()}
      return x669}
    function t_of_js$18(x673){return x673}
    function t_to_js$18(x672){return x672}
    function create$3(x676,x677,param)
     {var x678=new (Ojs[16].Array)();
      function _cn_(x680)
       {if(571404121 <= x680[1]){var x681=x680[2];return x681}
        var x682=x680[2];
        return x682}
      x678.push(caml_call2(Ojs[4],_cn_,x676));
      if(x677){var x679=x677[1];x678.push(x679)}
      return caml_ojs_new_arr(Ojs[16].Blob,x678)}
    function text(x683,param){return [0,caml_js_to_string,x683.text()]}
    function of_blob(x685)
     {return caml_js_to_string(Ojs[16].URL.createObjectURL(x685))}
    function revoke(x686)
     {Ojs[16].URL.revokeObjectURL(x686.toString());return 0}
    var ObjectURL=[0,of_blob,revoke];
    function t_of_js$19(x688){return x688}
    function t_to_js$19(x687){return x687}
    function unit_type(x691){return x691.unitType}
    function value$0(x692){return x692.value}
    function value_as_string(x693)
     {return caml_js_to_string(x693.valueAsString)}
    function value_in_specified_units(x694){return x694.valueInSpecifiedUnits}
    var
     Length=
      [0,
       t_of_js$19,
       t_to_js$19,
       unit_type,
       value$0,
       value_as_string,
       value_in_specified_units];
    function t_of_js$20(x696){return x696}
    function t_to_js$20(x695){return x695}
    function anim_val(x699){return caml_call1(Length[1],x699.animVal)}
    function base_val(x700){return caml_call1(Length[1],x700.baseVal)}
    var AnimatedLength=[0,t_of_js$20,t_to_js$20,anim_val,base_val];
    function t_of_js$21(x705){return x705}
    function t_to_js$21(x704){return x704}
    function x$0(x708){return x708.x}
    function y$0(x709){return x709.y}
    function x1(x710){return x710.x1}
    function y1(x711){return x711.y1}
    function x2(x712){return x712.x2}
    function y2(x713){return x713.y2}
    function path_seg_type(x714)
     {var x702=x714.pathSegType;
      if(9 < x702 >>> 0)throw [0,Assert_failure,_d_];
      switch(x702)
       {case 0:return 0;
        case 1:return 1;
        case 2:return 2;
        case 3:return 3;
        case 4:return 4;
        case 5:return 5;
        case 6:return 6;
        case 7:return 7;
        case 8:return 8;
        default:return 9}}
    function path_seg_type_as_letter(x715)
     {return caml_js_to_string(x715.pathSegTypeAsLetter)}
    var
     PathSeg=
      [0,
       t_of_js$21,
       t_to_js$21,
       x$0,
       y$0,
       x1,
       y1,
       x2,
       y2,
       path_seg_type,
       path_seg_type_as_letter];
    function t_of_js$22(x717){return x717}
    function t_to_js$22(x716){return x716}
    function number_of_items(x720){return x720.numberOfItems}
    function get_item$0(x722,x721)
     {var _cm_=x722.getItem(x721);return caml_call1(PathSeg[1],_cm_)}
    function insert_item_before(x725,x723,x724)
     {x725.insertItemBefore(caml_call1(PathSeg[2],x723),x724);return 0}
    function replace_item(x728,x726,x727)
     {x728.replaceItem(caml_call1(PathSeg[2],x726),x727);return 0}
    function remove_item$0(x730,x729){x730.removeItem(x729);return 0}
    function append_item(x732,x731)
     {x732.appendItem(caml_call1(PathSeg[2],x731));return 0}
    var
     PathSegList=
      [0,
       t_of_js$22,
       t_to_js$22,
       number_of_items,
       get_item$0,
       insert_item_before,
       replace_item,
       remove_item$0,
       append_item];
    function t_of_js$23(x734){return x734}
    function t_to_js$23(x733){return x733}
    function path_seg_list(x737)
     {return caml_call1(PathSegList[1],x737.pathSegList)}
    function normalized_path_seg_list(x738)
     {return caml_call1(PathSegList[1],x738.normalizedPathSegList)}
    function animated_path_seg_list(x739)
     {return caml_call1(PathSegList[1],x739.animatedPathSegList)}
    function animated_normalized_path_seg_list(x740)
     {return caml_call1(PathSegList[1],x740.animatedNormalizedPathSegList)}
    function create_close_path(x741,param)
     {var _cl_=x741.createSVGPathSegClosePath();
      return caml_call1(PathSeg[1],_cl_)}
    function create_moveto_abs(x744,x742,x743)
     {var _ck_=x744.createSVGPathSegMovetoAbs(x742,x743);
      return caml_call1(PathSeg[1],_ck_)}
    function create_moveto_rel(x747,x745,x746)
     {var _cj_=x747.createSVGPathSegMovetoRel(x745,x746);
      return caml_call1(PathSeg[1],_cj_)}
    function create_lineto_abs(x750,x748,x749)
     {var _ci_=x750.createSVGPathSegLinetoAbs(x748,x749);
      return caml_call1(PathSeg[1],_ci_)}
    function create_lineto_rel(x753,x751,x752)
     {var _ch_=x753.createSVGPathSegLinetoRel(x751,x752);
      return caml_call1(PathSeg[1],_ch_)}
    var
     PathElement=
      [0,
       t_of_js$23,
       t_to_js$23,
       path_seg_list,
       normalized_path_seg_list,
       animated_path_seg_list,
       animated_normalized_path_seg_list,
       create_close_path,
       create_moveto_abs,
       create_moveto_rel,
       create_lineto_abs,
       create_lineto_rel],
     _e_=
      [0,
       t_of_js$13,
       t_to_js$13,
       add_event_listener$0,
       document,
       set_onload,
       set_interval,
       set_timeout,
       clear_timeout,
       clear_interval,
       request_animation_frame,
       open$0,
       alert,
       session_storage,
       local_storage,
       inner_width,
       inner_height,
       page_x_offset,
       page_y_offset,
       scroll_by,
       scroll_to,
       history,
       location,
       frame_element,
       get_computed_style,
       decode_URI_component,
       event_source,
       post_message],
     _f_=
      [0,
       t_of_js$5,
       t_to_js$5,
       target,
       prevent_default,
       type$0,
       init_event,
       client_x,
       client_y,
       page_x,
       page_y,
       screen_x,
       screen_y,
       movement_x,
       movement_y,
       buttons,
       alt_key,
       ctrl_key,
       shift_key,
       which,
       code,
       key$0,
       delta_y,
       delta_x,
       data_transfer,
       data,
       origin],
     Js_browser=
      [0,
       [0,then],
       Storage,
       RegExp,
       JsString,
       Date,
       File,
       DataTransfer,
       _f_,
       Rect,
       SVGRect,
       Style,
       Element,
       Document,
       History,
       Location,
       _e_,
       IFrame,
       JSON,
       [0,
        t_of_js$14,
        t_to_js$14,
        create,
        ready_state,
        result,
        set_onload$0,
        read_as_binary_string,
        read_as_text],
       [0,
        t_of_js$15,
        t_to_js$15,
        create$0,
        open$1,
        send,
        set_request_header,
        get_response_header,
        set_response_type,
        override_mime_type,
        set_with_credentials,
        status,
        ready_state$0,
        response_text,
        response,
        set_onreadystatechange],
       [0,
        t_of_js$16,
        t_to_js$16,
        create$1,
        send$0,
        close$0,
        binary_type,
        set_binary_type,
        ready_state$1,
        add_event_listener$1,
        [0,code$0]],
       window,
       document$0,
       [0,
        context_of_js,
        context_to_js,
        gradient_of_js,
        gradient_to_js,
        get_context,
        to_data_URL,
        set_fill_style,
        set_stroke_style,
        set_line_width,
        create_linear_gradient,
        add_color_stop,
        begin_path,
        close_path,
        arc,
        move_to,
        line_to,
        fill,
        stroke,
        stroke_rect,
        fill_rect,
        set_font,
        fill_text,
        stroke_text,
        TextMetrics,
        measure_text,
        rotate,
        translate,
        scale,
        clear_rect],
       Performance,
       [0,log],
       console,
       [0,create$2],
       [0,from_buffer,set$0],
       [0,options,t_of_js$18,t_to_js$18,create$3,text],
       ObjectURL,
       [0,Length,AnimatedLength,PathSeg,PathSegList,PathElement]];
    caml_register_global(819,Js_browser,"Js_browser");
    var
     Echo=[248,cst_Vdom_Cmd_Echo,caml_fresh_oo_id(0)],
     Batch=[248,cst_Vdom_Cmd_Batch,caml_fresh_oo_id(0)],
     Map=[248,cst_Vdom_Cmd_Map,caml_fresh_oo_id(0)];
    function echo(msg){return [0,Echo,msg]}
    function batch(l){return [0,Batch,l]}
    function map(f,x){return [0,Map,f,x]}
    var Cmd=[0,Echo,Batch,Map,echo,batch,map],Custom=[0];
    function onmousedown(msg){return [2,[0,msg]]}
    function onclick(msg){return [2,[1,msg]]}
    function ondblclick(msg){return [2,[2,msg]]}
    function oncontextmenu(msg){return [2,[12,msg]]}
    function onfocus(msg){return [2,[3,msg]]}
    function oninput(msg){return [2,[5,msg]]}
    function onchange(msg){return [2,[6,msg]]}
    function onchange_index(msg){return [2,[7,msg]]}
    function onchange_checked(msg){return [2,[8,msg]]}
    function onblur(msg){return [2,[4,msg]]}
    function onmousemove(msg){return [2,[9,msg]]}
    function onkeydown(msg){return [2,[10,msg]]}
    function onkeydown_cancel(msg){return [2,[11,msg]]}
    function oncustomevent(msg){return [2,[13,msg]]}
    function str_prop(k,v){return [0,k,[0,v]]}
    function int_prop(k,v){return [0,k,[1,v]]}
    function bool_prop(k,v){return [0,k,[3,v]]}
    function float_prop(k,v){return [0,k,[2,v]]}
    function style$0(k,v){return [1,k,v]}
    function attr(k,v){return [3,k,v]}
    function int_attr(k,v){return [3,k,caml_call1(Stdlib[33],v)]}
    function float_attr(k,v){return [3,k,caml_call1(Stdlib[35],v)]}
    var
     scroll_to_show=bool_prop(cst_scroll_to_show,1),
     autofocus=bool_prop(cst_autofocus,1);
    function autofocus_counter(x){return int_prop(cst_autofocus$0,x)}
    function relative_dropdown(x){return int_prop(cst_relative_dropdown,x)}
    function class$0(x){return [0,cst_className,[0,x]]}
    function type$1(x){return [0,cst_type,[0,x]]}
    var type_button=type$1(cst_button);
    function value$1(x){return [0,cst_value,[0,x]]}
    function disabled(x){return [0,cst_disabled,[3,x]]}
    function add_class(x,attrs)
     {function _ce_(param)
       {if(0 === param[0])
         if(! caml_string_notequal(param[1],cst_className$0))return 1;
        return 0}
      var has_className=caml_call2(Stdlib_list[29],_ce_,attrs);
      if(has_className)
       {var
         _cf_=
          function(a)
           {if(0 === a[0])
             if(! caml_string_notequal(a[1],cst_className$1))
              {var _cg_=a[2];
               if(0 === _cg_[0])
                {var s=_cg_[1];
                 return [0,
                         cst_className$2,
                         [0,caml_call3(Stdlib_printf[4],_g_,s,x)]]}}
            return a};
        return caml_call2(Stdlib_list[17],_cf_,attrs)}
      return [0,class$0(x),attrs]}
    function text$0(opt,txt)
     {if(opt)var sth=opt[1],key=sth;else var key=cst_txt;return [0,key,txt]}
    function elt(opt,tag,key,_cd_,l)
     {if(opt)var sth=opt[1],ns=sth;else var ns=cst;
      if(_cd_)var sth$0=_cd_[1],a=sth$0;else var a=0;
      if(key)var k=key[1],k$0=k;else var k$0=tag;
      return [1,k$0,ns,tag,a,l]}
    function svg_elt(tag,key,a,l){return elt([0,svg_ns],tag,key,a,l)}
    function div(key,a,l){return elt(0,cst_div,key,a,l)}
    function input(key,a,l){return elt(0,cst_input,key,a,l)}
    function txt_span(key,a,s){return elt(0,cst_span,key,a,[0,text$0(0,s),0])}
    function map_attr(f,init)
     {switch(init[0])
       {case 1:
         var attributes=init[4],_ca_=init[5],_cb_=caml_call1(f,attributes);
         return [1,init[1],init[2],init[3],_cb_,_ca_];
        case 4:
         var attributes$0=init[3],_cc_=caml_call1(f,attributes$0);
         return [4,init[1],init[2],_cc_];
        default:return init}}
    function map$0(opt,f,child)
     {if(opt)var sth=opt[1],key=sth;else var key=cst_map;
      return [2,key,f,child]}
    function memo(opt,f,arg)
     {if(opt)var sth=opt[1],key=sth;else var key=cst_memo;
      return [3,key,f,arg]}
    function custom(opt,_b$_,elt)
     {if(opt)var sth=opt[1],key=sth;else var key=cst_custom;
      if(_b$_)var sth$0=_b$_[1],a=sth$0;else var a=0;
      return [4,key,elt,a]}
    function return$0(opt,model)
     {if(opt)var sth=opt[1],c=sth;else var c=0;
      return [0,model,caml_call1(Cmd[5],c)]}
    function app(init,update,view,param){return [0,init,update,view]}
    function simple_app(init,update,view,param)
     {function _b__(model,msg)
       {return return$0(0,caml_call2(update,model,msg))}
      return [0,return$0(0,init),_b__,view]}
    var
     blur_event=
      [0,
       function(param)
        {if(4 === param[0]){var msg=param[1];return [0,msg]}return 0}];
    function input_event(s)
     {return [0,
              function(param)
               {if(5 === param[0]){var f=param[1];return [0,caml_call1(f,s)]}
                return 0}]}
    function checked_event(b)
     {return [0,
              function(param)
               {if(8 === param[0]){var f=param[1];return [0,caml_call1(f,b)]}
                return 0}]}
    function change_event(s)
     {return [0,
              function(param)
               {if(6 === param[0]){var f=param[1];return [0,caml_call1(f,s)]}
                return 0}]}
    function change_index_event(i)
     {return [0,
              function(param)
               {if(7 === param[0]){var f=param[1];return [0,caml_call1(f,i)]}
                return 0}]}
    function custom_event(e)
     {return [0,
              function(param)
               {if(13 === param[0]){var f=param[1];return caml_call1(f,e)}
                return 0}]}
    var
     Vdom=
      [0,
       Cmd,
       Custom,
       onmousedown,
       onclick,
       ondblclick,
       oncontextmenu,
       onfocus,
       onblur,
       oninput,
       onchange_checked,
       onchange,
       onchange_index,
       onmousemove,
       onkeydown,
       onkeydown_cancel,
       oncustomevent,
       str_prop,
       int_prop,
       bool_prop,
       float_prop,
       style$0,
       attr,
       int_attr,
       float_attr,
       class$0,
       type$1,
       type_button,
       value$1,
       disabled,
       add_class,
       scroll_to_show,
       autofocus,
       relative_dropdown,
       autofocus_counter,
       blur_event,
       input_event,
       checked_event,
       change_event,
       change_index_event,
       custom_event,
       elt,
       svg_elt,
       text$0,
       map_attr,
       map$0,
       memo,
       custom,
       div,
       input,
       txt_span,
       return$0,
       app,
       simple_app];
    caml_register_global(822,Vdom,"Vdom");
    function send_msg(ctx){return ctx[1]}
    function run(param,p,x)
     {var p$0=p,x$0=x;
      for(;;)
       {if(x$0[1] === Cmd[1]){var msg=x$0[2];return caml_call1(p$0,msg)}
        if(x$0[1] === Cmd[2])
         {var l=x$0[2],_b5_=function(_b9_){return run(param,p$0,_b9_)};
          return caml_call2(Stdlib_list[15],_b5_,l)}
        if(x$0[1] === Cmd[3])
         {var
           x$1=x$0[3],
           f=x$0[2],
           p$2=
            function(p,f)
             {function p$0(x){return caml_call1(p,caml_call1(f,x))}return p$0},
           p$1=p$2(p$0,f),
           p$0=p$1,
           x$0=x$1;
          continue}
        var ctx=[0,p$0],param$0=param;
        for(;;)
         {if(param$0)
           {var tl=param$0[2],hd=param$0[1];
            if(caml_call2(hd[1],ctx,x$0))return 0;
            var param$0=tl;
            continue}
          var
           _b6_=caml_call1(Stdlib_obj[21][1],x$0),
           _b7_=caml_call1(Stdlib_obj[21][2],_b6_),
           _b8_=caml_call2(Stdlib_printf[4],_h_,_b7_);
          return caml_call1(Stdlib[2],_b8_)}}}
    function make(sync,dom){return [0,dom,sync]}
    function send_event(ctx){return ctx[1]}
    function after_redraw(ctx){return ctx[2]}
    function lookup(process_custom,after_redraw,elt,handlers)
     {var dom=[],send_event=function _b4_(_b3_){return _b4_.fun(_b3_)},el=[];
      caml_update_dummy
       (dom,
        [246,
         function(_b0_)
          {var
            _b1_=caml_obj_tag(el),
            _b2_=
             250 === _b1_
              ?el[1]
              :246 === _b1_?caml_call1(CamlinternalLazy[2],el):el;
           return _b2_[1]}]);
      caml_update_dummy
       (send_event,
        function(e)
         {var
           _bY_=caml_obj_tag(dom),
           _bZ_=
            250 === _bY_
             ?dom[1]
             :246 === _bY_?caml_call1(CamlinternalLazy[2],dom):dom;
          return caml_call2(process_custom,_bZ_,e)});
      caml_update_dummy
       (el,
        [246,
         function(_bX_)
          {var ctx=[0,send_event,after_redraw],param=handlers;
           for(;;)
            {if(param)
              {var tl=param[2],hd=param[1],match=caml_call2(hd,ctx,elt);
               if(match){var f=match[1];return f}
               var param=tl;
               continue}
             return caml_call1
                     (Stdlib[2],cst_Vdom_blit_no_custom_element_handler_found)}}]);
      var _bW_=caml_obj_tag(el);
      return 250 === _bW_
              ?el[1]
              :246 === _bW_?caml_call1(CamlinternalLazy[2],el):el}
    function scroll_to_make_visible(child)
     {var node=child;
      for(;;)
       {if(caml_equal(node,Element[3]))
         var parent=caml_call1(Document[9],document$0);
        else
         {var
           _bQ_=caml_call2(_e_[24],window,node),
           overflow_y=caml_call2(Style[17],_bQ_,cst_overflowY),
           _bR_=caml_string_notequal(overflow_y,cst_visible),
           is_scrollable=_bR_?caml_string_notequal(overflow_y,cst_hidden):_bR_;
          if(is_scrollable)
           {var _bS_=caml_call1(Element[44],node);
            if(_bS_ <= caml_call1(Element[46],node))
             var parent=node,switch$0=1;
            else
             var switch$0=0}
          else
           var switch$0=0;
          if(! switch$0)
           {var node$0=caml_call1(Element[35],node),node=node$0;continue}}
        var
         r_parent=caml_call1(Element[23],parent),
         r_child=caml_call1(Element[23],child),
         y1=caml_call1(Rect[8],r_parent),
         y2=caml_call1(Rect[8],r_child);
        if(y1 < y2)
         {var _bT_=caml_call1(Element[54],parent) + y2 - y1;
          return caml_call2(Element[55],parent,_bT_)}
        var
         y1$0=caml_call1(Rect[7],r_parent),
         y2$0=caml_call1(Rect[7],r_child),
         _bU_=y2$0 < y1$0?1:0;
        if(_bU_)
         {var _bV_=caml_call1(Element[54],parent) + y2$0 - y1$0;
          return caml_call2(Element[55],parent,_bV_)}
        return _bU_}}
    function get_dom(param)
     {switch(param[0])
       {case 0:return param[2];
        case 1:return param[2];
        case 2:return param[2];
        case 3:return param[2];
        default:return param[2][1]}}
    function get_vdom(param)
     {switch(param[0])
       {case 0:return param[1];
        case 1:return param[1];
        case 2:return param[1];
        case 3:return param[1];
        default:return param[1]}}
    function eval_prop(param)
     {switch(param[0])
       {case 0:var x=param[1];return x.toString();
        case 1:var x$0=param[1];return x$0;
        case 2:var x$1=param[1];return x$1;
        default:var x$2=param[1];return ! ! x$2}}
    function string_of_prop(param)
     {switch(param[0])
       {case 0:var s=param[1];return s;
        case 1:var x=param[1];return caml_call1(Stdlib[33],x);
        case 2:var x$0=param[1];return caml_call1(Stdlib[35],x$0);
        default:var x$1=param[1];return caml_call1(Stdlib[30],x$1)}}
    function same_prop(v1,match)
     {var _bO_=v1 === match?1:0;
      if(_bO_)
       var _bP_=_bO_;
      else
       {switch(v1[0])
         {case 0:
           if(0 === match[0])
            {var x2=match[1],x1=v1[1];return caml_string_equal(x1,x2)}
           break;
          case 1:
           if(1 === match[0])
            {var x2$0=match[1],x1$0=v1[1];return x1$0 === x2$0?1:0}
           break;
          case 2:
           if(2 === match[0])
            {var x2$1=match[1],x1$1=v1[1];return x1$1 == x2$1?1:0}
           break;
          default:
           if(3 === match[0])
            {var x2$2=match[1],x1$2=v1[1];return x1$2 === x2$2?1:0}}
        var _bP_=0}
      return _bP_}
    function bmemo(vdom,child){return [3,vdom,get_dom(child),child]}
    function async(f){caml_call3(_e_[7],window,f,0);return 0}
    function custom_attribute(dom,param)
     {if(caml_string_notequal(param,cst_autofocus$1))
       {if(caml_string_notequal(param,cst_relative_dropdown$0))
         return caml_string_notequal(param,cst_scroll_to_show$0)
                 ?0
                 :(async
                    (function(param)
                      {try
                        {var _bN_=scroll_to_make_visible(dom);return _bN_}
                       catch(exn)
                        {exn = caml_wrap_exception(exn);
                         var _bM_=caml_call1(Stdlib_printexc[1],exn);
                         return caml_call2(Stdlib_printf[2],_i_,_bM_)}}),
                   1);
        var
         style=caml_call1(Element[38],dom),
         _bG_=caml_call1(Element[38],dom);
        caml_call2(Style[14],_bG_,cst_absolute);
        var px=caml_call1(Stdlib_printf[4],_j_);
        async
         (function(param)
           {var match=caml_call1(Element[49],dom);
            if(match)
             {var
               offset_parent=match[1],
               parent=caml_call1(Element[35],dom),
               rect=caml_call1(Element[23],parent),
               offset_rect=caml_call1(Element[23],offset_parent),
               _bH_=caml_call1(Rect[7],offset_rect),
               top=caml_call1(Rect[7],rect) - _bH_,
               _bI_=caml_call1(Rect[5],offset_rect),
               left=caml_call1(Rect[5],rect) - _bI_,
               _bJ_=caml_call1(px,top + caml_call1(Element[53],parent));
              caml_call2(Style[12],style,_bJ_);
              var _bK_=caml_call1(px,left);
              caml_call2(Style[11],style,_bK_);
              var _bL_=caml_call1(px,caml_call1(Element[52],parent));
              return caml_call2(Style[9],style,_bL_)}
            return 0});
        return 1}
      async(function(param){return caml_call1(Element[56],dom)});
      return 1}
    function apply_attributes(dom,attributes)
     {function _bB_(param)
       {switch(param[0])
         {case 0:
           var v=param[2],k=param[1],_bC_=1 - custom_attribute(dom,k);
           if(_bC_)
            var _bD_=eval_prop(v),_bE_=caml_call1(Element[2],dom)[k] = _bD_;
           else
            var _bE_=_bC_;
           return _bE_;
          case 1:
           var v$0=param[2],k$0=param[1],_bF_=v$0.toString();
           return caml_call1(Element[2],dom).style[k$0] = _bF_;
          case 2:return 0;
          default:
           var v$1=param[2],k$1=param[1];
           return caml_call3(Element[22],dom,k$1,v$1)}}
      return caml_call2(Stdlib_list[15],_bB_,attributes)}
    function _k_(ctx,vdom)
     {switch(vdom[0])
       {case 0:
         var txt=vdom[2];
         return [0,vdom,caml_call2(Document[5],document$0,txt)];
        case 1:
         var
          children=vdom[5],
          attributes=vdom[4],
          tag=vdom[3],
          ns=vdom[2],
          dom=
           caml_string_equal(ns,cst$0)
            ?caml_call2(Document[3],document$0,tag)
            :caml_call3(Document[4],document$0,ns,tag),
          _bu_=function(_bA_){return _k_(ctx,_bA_)},
          children$0=caml_call2(Stdlib_list[17],_bu_,children),
          _bv_=
           function(c)
            {var _bz_=get_dom(c);return caml_call2(Element[6],dom,_bz_)};
         caml_call2(Stdlib_list[15],_bv_,children$0);
         apply_attributes(dom,attributes);
         return [1,vdom,dom,children$0];
        case 2:
         var child=vdom[3],f=vdom[2],child$0=_k_(ctx,child);
         return [2,vdom,get_dom(child$0),f,child$0];
        case 3:
         var arg=vdom[3],f$0=vdom[2];
         return bmemo(vdom,_k_(ctx,caml_call1(f$0,arg)));
        default:
         var attributes$0=vdom[3],elt=vdom[2];
         try
          {var elt$0=lookup(ctx[1],ctx[3],elt,ctx[2])}
         catch(exn)
          {exn = caml_wrap_exception(exn);
           var
            _bw_=caml_call1(Stdlib_printexc[1],exn),
            _bx_=caml_call1(Stdlib_obj[21][1],elt),
            _by_=caml_call1(Stdlib_obj[21][2],_bx_);
           caml_call3(Stdlib_printf[2],_l_,_by_,_bw_);
           throw exn}
         apply_attributes(elt$0[1],attributes$0);
         return [4,vdom,elt$0]}}
    function blit(ctx,vdom)
     {try
       {var _bt_=_k_(ctx,vdom);return _bt_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var _bs_=caml_call1(Stdlib_printexc[1],exn);
        caml_call2(Stdlib_printf[2],_m_,_bs_);
        throw exn}}
    function sync_props(to_string,same,set,clear,l1,l2)
     {function _bm_(param,_br_)
       {var k2=_br_[1],k1=param[1];return caml_string_compare(k1,k2)}
      var
       sort=caml_call1(Stdlib_list[49],_bm_),
       l1$0=caml_call1(sort,l1),
       l2$0=caml_call1(sort,l2),
       l1$1=l1$0,
       l2$1=l2$0;
      for(;;)
       {if(l1$1)
         {var _bn_=l1$1[2],_bo_=l1$1[1],_bq_=_bo_[1],_bp_=_bo_[2];
          if(l2$1)
           {var tl2=l2$1[2],match=l2$1[1],v2=match[2],k2=match[1];
            if(caml_string_lessthan(_bq_,k2))
             {caml_call1(clear,_bq_);var l1$1=_bn_;continue}
            if(caml_string_lessthan(k2,_bq_))
             {caml_call2(set,k2,v2);var l2$1=tl2;continue}
            if(1 - caml_call2(same,_bp_,v2))caml_call2(set,k2,v2);
            var l1$1=_bn_,l2$1=tl2;
            continue}
          caml_call1(clear,_bq_);
          var l1$1=_bn_,l2$1=0;
          continue}
        if(l2$1)
         {var tl2$0=l2$1[2],match$0=l2$1[1],v2$0=match$0[2],k2$0=match$0[1];
          caml_call2(set,k2$0,v2$0);
          var l1$1=0,l2$1=tl2$0;
          continue}
        return 0}}
    function choose(f,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var tl=param$0[2],hd=param$0[1],match=caml_call1(f,hd);
          if(match){var x=match[1];return [0,x,choose(f,tl)]}
          var param$0=tl;
          continue}
        return 0}}
    var js_empty_string="";
    function sync_attributes(dom,a1,a2)
     {function props(param)
       {if(0 === param[0]){var v=param[2],k=param[1];return [0,[0,k,v]]}
        return 0}
      function set(k,v)
       {if(! caml_string_notequal(k,cst_value$0))
         if(0 === v[0])
          {var s=v[1];
           if(caml_string_equal(s,caml_call1(Element[26],dom)))return 0}
        var _bj_=1 - custom_attribute(dom,k);
        if(_bj_)
         var _bk_=eval_prop(v),_bl_=caml_call1(Element[2],dom)[k] = _bk_;
        else
         var _bl_=_bj_;
        return _bl_}
      function clear(k)
       {var _bi_=Ojs[17];return caml_call1(Element[2],dom)[k] = _bi_}
      var _bb_=choose(props,a2);
      sync_props(string_of_prop,same_prop,set,clear,choose(props,a1),_bb_);
      function styles(param)
       {if(1 === param[0]){var v=param[2],k=param[1];return [0,[0,k,[0,v]]]}
        return 0}
      function set$0(k,v)
       {var _bh_=eval_prop(v);
        return caml_call1(Element[2],dom).style[k] = _bh_}
      function clear$0(k)
       {return caml_call1(Element[2],dom).style[k] = js_empty_string}
      var _bc_=choose(styles,a2);
      sync_props
       (string_of_prop,same_prop,set$0,clear$0,choose(styles,a1),_bc_);
      function attrs(param)
       {if(3 === param[0]){var v=param[2],k=param[1];return [0,[0,k,v]]}
        return 0}
      function set$1(k,v){return caml_call3(Element[22],dom,k,v)}
      function clear$1(k){return caml_call2(Element[21],dom,k)}
      var _bd_=choose(attrs,a2),_be_=choose(attrs,a1),_bf_=caml_string_equal;
      return sync_props
              (function(_bg_){return _bg_},_bf_,set$1,clear$1,_be_,_bd_)}
    function _n_(ctx,parent,old,vdom)
     {if(vdom === get_vdom(old))return old;
      switch(old[0])
       {case 0:
         var _aO_=old[1];
         if(0 === _aO_[0])
          if(0 === vdom[0])
           {var s2=vdom[2],dom=old[2],s1=_aO_[2];
            if(caml_string_notequal(s1,s2))caml_call2(Element[34],dom,s2);
            return [0,vdom,dom]}
         break;
        case 1:
         var _aR_=old[1];
         if(1 === _aR_[0])
          if(1 === vdom[0])
           {var children=old[3],dom$0=old[2];
            if(caml_string_equal(_aR_[3],vdom[3]))
             if(caml_string_equal(_aR_[2],vdom[2]))
              if(caml_string_equal(_aR_[1],vdom[1]))
               {var
                 old_children=caml_call1(Stdlib_array[12],children),
                 new_children=caml_call1(Stdlib_array[12],vdom[5]),
                 by_key=caml_call2(Stdlib_hashtbl[1],0,8),
                 _aS_=old_children.length - 1 - 1 | 0;
                if(! (_aS_ < 0))
                 {var i$1=_aS_;
                  for(;;)
                   {var
                     k$0=
                      get_vdom(caml_check_bound(old_children,i$1)[1 + i$1])[1];
                    caml_call3(Stdlib_hashtbl[5],by_key,k$0,i$1);
                    var _a7_=i$1 - 1 | 0;
                    if(0 !== i$1){var i$1=_a7_;continue}
                    break}}
                var
                 indices=runtime.caml_make_vect(new_children.length - 1,-1),
                 _aU_=indices.length - 1 - 1 | 0,
                 _aT_=0;
                if(! (_aU_ < 0))
                 {var i$0=_aT_;
                  for(;;)
                   {var k=caml_check_bound(new_children,i$0)[1 + i$0][1];
                    try
                     {var idx$0=caml_call2(Stdlib_hashtbl[6],by_key,k),switch$0=0}
                    catch(_ba_)
                     {_ba_ = caml_wrap_exception(_ba_);
                      if(_ba_ !== Stdlib[8])throw _ba_;
                      var switch$0=1,_a__=_ba_}
                    if(! switch$0)
                     {caml_check_bound(indices,i$0)[1 + i$0] = idx$0;
                      caml_call2(Stdlib_hashtbl[10],by_key,k)}
                    var _a6_=i$0 + 1 | 0;
                    if(_aU_ !== i$0){var i$0=_a6_;continue}
                    break}}
                var
                 _aV_=
                  function(param,i)
                   {var _a$_=get_dom(caml_check_bound(old_children,i)[1 + i]);
                    return caml_call2(Element[9],dom$0,_a$_)};
                caml_call2(Stdlib_hashtbl[12],_aV_,by_key);
                var
                 ctrls=[0,0],
                 next=[0,caml_call1(Element[1],Ojs[17])],
                 _aW_=new_children.length - 1 - 1 | 0;
                if(! (_aW_ < 0))
                 {var i=_aW_;
                  for(;;)
                   {var idx=caml_check_bound(indices,i)[1 + i];
                    if(0 <= idx)
                     var
                      _aX_=caml_check_bound(new_children,i)[1 + i],
                      c=
                       _n_
                        (ctx,dom$0,caml_check_bound(old_children,idx)[1 + idx],_aX_);
                    else
                     var c=blit(ctx,caml_check_bound(new_children,i)[1 + i]);
                    var _aY_=idx < 0?1:0;
                    if(_aY_)
                     var move=_aY_;
                    else
                     {if(i === (new_children.length - 1 - 1 | 0))
                       var _a2_=idx !== (old_children.length - 1 - 1 | 0)?1:0;
                      else
                       var
                        _a5_=i + 1 | 0,
                        _a2_=
                         caml_check_bound(indices,_a5_)[1 + _a5_] !== (idx + 1 | 0)
                          ?1
                          :0;
                      if(_a2_)
                       var
                        _a3_=next[1],
                        _a4_=get_dom(c),
                        move=caml_call1(Element[12],_a4_) !== _a3_?1:0;
                      else
                       var move=_a2_}
                    if(move)
                     {var _aZ_=next[1],_a0_=get_dom(c);
                      caml_call3(Element[7],dom$0,_a0_,_aZ_)}
                    next[1] = get_dom(c);
                    ctrls[1] = [0,c,ctrls[1]];
                    var _a1_=i - 1 | 0;
                    if(0 !== i){var i=_a1_;continue}
                    break}}
                var children$0=ctrls[1];
                sync_attributes(dom$0,_aR_[4],vdom[4]);
                return [1,vdom,dom$0,children$0]}}
         break;
        case 2:
         if(2 === vdom[0])
          {var c2=vdom[3],f=vdom[2],c1=old[4],child=_n_(ctx,parent,c1,c2);
           return [2,vdom,get_dom(child),f,child]}
         break;
        case 3:
         var _a8_=old[1];
         if(3 === _a8_[0])
          if(3 === vdom[0])
           {var a2=vdom[3],f2=vdom[2],c1$0=old[3],a1=_a8_[3],f1=_a8_[2];
            if(f1 === f2)if(a1 === a2)return bmemo(vdom,c1$0);
            return bmemo(vdom,_n_(ctx,parent,c1$0,caml_call1(f2,a2)))}
         break;
        default:
         var _a9_=old[1];
         if(4 === _a9_[0])
          if(4 === vdom[0])
           {var
             a2$0=vdom[3],
             arg2=vdom[2],
             key2=vdom[1],
             elt=old[2],
             a1$0=_a9_[3],
             arg1=_a9_[2],
             key1=_a9_[1];
            if(caml_string_equal(key1,key2))
             {var switch$1=arg1 === arg2?0:caml_call1(elt[2],arg2)?0:1;
              if(! switch$1)
               {sync_attributes(elt[1],a1$0,a2$0);return [4,vdom,elt]}}}}
      var x=blit(ctx,vdom),_aP_=get_dom(old),_aQ_=get_dom(x);
      caml_call3(Element[8],parent,_aQ_,_aP_);
      return x}
    function sync(ctx,parent,old,vdom)
     {try
       {var _aN_=_n_(ctx,parent,old,vdom);return _aN_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var _aM_=caml_call1(Stdlib_printexc[1],exn);
        caml_call2(Stdlib_printf[2],_o_,_aM_);
        throw exn}}
    function found(mapper,parent,inner)
     {var mapper$0=mapper,inner$0=inner;
      for(;;)
       switch(inner$0[0])
        {case 2:
          var
           inner$1=inner$0[4],
           f=inner$0[3],
           mapper$2=
            function(mapper,f)
             {function mapper$0(x){return caml_call1(mapper,caml_call1(f,x))}
              return mapper$0},
           mapper$1=mapper$2(mapper$0,f),
           mapper$0=mapper$1,
           inner$0=inner$1;
          continue;
         case 3:var inner$2=inner$0[3],inner$0=inner$2;continue;
         default:return [0,mapper$0,inner$0,parent]}}
    function vdom_of_dom(root,dom)
     {var
       _aF_=caml_call1(Element[2],dom),
       match=caml_call2(Ojs[7],Element[1],_aF_);
      if(match)
       {var dom$0=match[1];
        if(dom$0 === get_dom(root))
         {var _aG_=0;return found(function(_aL_){return _aL_},_aG_,root)}
        var parent=vdom_of_dom(root,caml_call1(Element[35],dom$0));
        if(parent)
         {var _aH_=parent[2],_aI_=parent[1];
          switch(_aH_[0])
           {case 1:
             var children=_aH_[3];
             try
              {var
                _aJ_=function(c){return get_dom(c) === dom$0?1:0},
                c=caml_call2(Stdlib_list[34],_aJ_,children)}
             catch(_aK_)
              {_aK_ = caml_wrap_exception(_aK_);
               if(_aK_ === Stdlib[8])throw [0,Assert_failure,_q_];
               throw _aK_}
             return found(_aI_,parent,c);
            case 4:return 0;
            default:throw [0,Assert_failure,_p_]}}
        return 0}
      return 0}
    function mouse_event(e)
     {var
       _ay_=caml_call1(_f_[18],e),
       _az_=caml_call1(_f_[17],e),
       _aA_=caml_call1(_f_[16],e),
       _aB_=caml_call1(_f_[15],e),
       _aC_=caml_call1(_f_[10],e),
       _aD_=caml_call1(_f_[9],e),
       _aE_=caml_call1(_f_[8],e);
      return [0,caml_call1(_f_[7],e),_aE_,_aD_,_aC_,_aB_,_aA_,_az_,_ay_]}
    function key_event(e)
     {var
       _av_=caml_call1(_f_[18],e),
       _aw_=caml_call1(_f_[17],e),
       _ax_=caml_call1(_f_[16],e);
      return [0,caml_call1(_f_[19],e),_ax_,_aw_,_av_]}
    function dom(x){return x[1]}
    function process(x){return x[2]}
    function get$0(x){return caml_call1(x[3],0)}
    function after_redraw$0(x){return x[4]}
    function cmd(h){return [0,[0,h,0],empty[2]]}
    function custom$0(h){return [0,empty[1],[0,h,0]]}
    function merge(envs)
     {function _aq_(e){return e[2]}
      var
       _ar_=caml_call2(Stdlib_list[17],_aq_,envs),
       _as_=caml_call1(Stdlib_list[13],_ar_);
      function _at_(e){return e[1]}
      var _au_=caml_call2(Stdlib_list[17],_at_,envs);
      return [0,caml_call1(Stdlib_list[13],_au_),_as_]}
    var global=[0,empty];
    function register(e){global[1] = merge([0,e,[0,global[1],0]]);return 0}
    function run$0(opt,container,param)
     {var
       view=param[3],
       update=param[2],
       match=param[1],
       cmd0=match[2],
       model0=match[1];
      if(opt)var sth=opt[1],env=sth;else var env=empty;
      var env$0=merge([0,env,[0,global[1],0]]);
      if(container)
       var container$0=container[1],container$1=container$0;
      else
       var container$1=caml_call2(Document[3],document$0,cst_div$0);
      var post_redraw=[0,0];
      function after_redraw(f){post_redraw[1] = [0,f,post_redraw[1]];return 0}
      function flush(param)
       {var l=caml_call1(Stdlib_list[9],post_redraw[1]);
        post_redraw[1] = 0;
        function _ap_(f){return caml_call1(f,0)}
        return caml_call2(Stdlib_list[15],_ap_,l)}
      var
       process_custom_fwd=
        [0,function(param,_ao_){throw [0,Assert_failure,_r_]}],
       _v_=env$0[2],
       ctx=
        [0,
         function(elt,evt){return caml_call2(process_custom_fwd[1],elt,evt)},
         _v_,
         after_redraw];
      function view$0(model)
       {try
         {var _an_=caml_call1(view,model);return _an_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          var _am_=caml_call1(Stdlib_printexc[1],exn);
          caml_call2(Stdlib_printf[2],_s_,_am_);
          throw exn}}
      var x=blit(ctx,view$0(model0));
      caml_call2(_e_[10],window,flush);
      var model=[0,model0],current=[0,x],pending_redraw=[0,0];
      function redraw(param)
       {pending_redraw[1] = 0;
        var _al_=view$0(model[1]),x=sync(ctx,container$1,current[1],_al_);
        current[1] = x;
        return flush(0)}
      function process(msg)
       {try
         {var
           match=caml_call2(update,model[1],msg),
           cmd=match[2],
           new_model=match[1];
          model[1] = new_model;
          run(env$0[1],process,cmd);
          var
           _aj_=1 - pending_redraw[1],
           _ak_=
            _aj_
             ?(pending_redraw[1] = 1,caml_call2(_e_[10],window,redraw))
             :_aj_;
          return _ak_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          var _ai_=caml_call1(Stdlib_printexc[1],exn);
          caml_call2(Stdlib_printf[2],_t_,_ai_);
          throw exn}}
      var _w_=get_dom(x);
      caml_call2(Element[6],container$1,_w_);
      function onevent(evt)
       {var ty=caml_call1(_f_[5],evt);
        try
         {var
           _B_=caml_call1(_f_[3],evt),
           tgt=caml_call1(Element[1],_B_),
           propagate=
            function(param$0)
             {var param$1=param$0;
              a:
              for(;;)
               {if(param$1)
                 {var _aa_=param$1[2],_ab_=param$1[1];
                  switch(_aa_[0])
                   {case 1:
                     var _ac_=_aa_[1];
                     if(1 === _ac_[0])
                      var attributes=_ac_[4],switch$1=0;
                     else
                      var switch$1=1;
                     break;
                    case 4:
                     var _ah_=_aa_[1];
                     if(4 === _ah_[0])
                      var attributes=_ah_[3],switch$1=0;
                     else
                      var switch$1=1;
                     break;
                    default:var switch$1=1}
                  if(! switch$1)
                   {var
                     parent=param$1[3],
                     _ad_=caml_string_equal(ty,cst_focus$0);
                    if(_ad_)
                     var
                      _ae_=
                       function(param)
                        {if(2 === param[0])if(6 === param[1][0])return 1;return 0},
                      _af_=caml_call2(Stdlib_list[29],_ae_,attributes);
                    else
                     var _af_=_ad_;
                    if(_af_)
                     {var _ag_=caml_call1(Element[26],tgt);
                      caml_call3(Element[22],tgt,prev_value_attribute,_ag_)}
                    var param=attributes;
                    for(;;)
                     {if(param)
                       {var
                         tl=param[2],
                         hd=param[1],
                         switch$0=caml_string_compare(ty,cst_focus);
                        if(0 <= switch$0)
                         if(0 < switch$0)
                          if(caml_string_notequal(ty,cst_input$0))
                           if(caml_string_notequal(ty,cst_keydown))
                            if(caml_string_notequal(ty,cst_mousedown))
                             if(caml_string_notequal(ty,cst_mousemove))
                              var switch$2=1;
                             else
                              if(2 === hd[0])
                               {var _M_=hd[1];
                                if(9 === _M_[0])
                                 var
                                  f=_M_[1],
                                  _N_=[0,caml_call1(f,mouse_event(evt))],
                                  switch$2=0;
                                else
                                 var switch$2=1}
                              else
                               var switch$2=1;
                            else
                             if(2 === hd[0])
                              {var _O_=hd[1];
                               if(0 === _O_[0])
                                var
                                 f$0=_O_[1],
                                 _N_=[0,caml_call1(f$0,mouse_event(evt))],
                                 switch$2=0;
                               else
                                var switch$2=1}
                             else
                              var switch$2=1;
                           else
                            if(2 === hd[0])
                             {var _P_=hd[1];
                              switch(_P_[0])
                               {case 10:
                                 var
                                  f$1=_P_[1],
                                  _Q_=[0,caml_call1(f$1,key_event(evt))],
                                  switch$3=1;
                                 break;
                                case 11:
                                 var
                                  f$2=_P_[1],
                                  r=caml_call1(f$2,key_event(evt)),
                                  r$0=r?(caml_call1(_f_[4],evt),r):0,
                                  _Q_=r$0,
                                  switch$3=1;
                                 break;
                                default:var switch$2=1,switch$3=0}
                              if(switch$3)var _N_=_Q_,switch$2=0}
                            else
                             var switch$2=1;
                          else
                           if(2 === hd[0])
                            {var _R_=hd[1];
                             if(5 === _R_[0])
                              var
                               f$3=_R_[1],
                               _N_=[0,caml_call1(f$3,caml_call1(Element[26],tgt))],
                               switch$2=0;
                             else
                              var switch$2=1}
                           else
                            var switch$2=1;
                         else
                          if(2 === hd[0])
                           {var _S_=hd[1];
                            if(3 === _S_[0])
                             var msg=_S_[1],_N_=[0,msg],switch$2=0;
                            else
                             var switch$2=1}
                          else
                           var switch$2=1;
                        else
                         if(caml_string_notequal(ty,cst_blur))
                          if(caml_string_notequal(ty,cst_change))
                           if(caml_string_notequal(ty,cst_click))
                            if(caml_string_notequal(ty,cst_contextmenu))
                             if(caml_string_notequal(ty,cst_dblclick))
                              var switch$2=1;
                             else
                              if(2 === hd[0])
                               {var _T_=hd[1];
                                if(2 === _T_[0])
                                 var
                                  f$4=_T_[1],
                                  _N_=[0,caml_call1(f$4,mouse_event(evt))],
                                  switch$2=0;
                                else
                                 var switch$2=1}
                              else
                               var switch$2=1;
                            else
                             if(2 === hd[0])
                              {var _U_=hd[1];
                               if(12 === _U_[0])
                                {var f$5=_U_[1];
                                 caml_call1(_f_[4],evt);
                                 var _N_=[0,caml_call1(f$5,mouse_event(evt))],switch$2=0}
                               else
                                var switch$2=1}
                             else
                              var switch$2=1;
                           else
                            if(2 === hd[0])
                             {var _V_=hd[1];
                              switch(_V_[0])
                               {case 1:
                                 var
                                  f$6=_V_[1],
                                  _W_=[0,caml_call1(f$6,mouse_event(evt))],
                                  switch$4=1;
                                 break;
                                case 8:
                                 var
                                  f$7=_V_[1],
                                  _W_=[0,caml_call1(f$7,caml_call1(Element[31],tgt))],
                                  switch$4=1;
                                 break;
                                default:var switch$2=1,switch$4=0}
                              if(switch$4)var _N_=_W_,switch$2=0}
                            else
                             var switch$2=1;
                          else
                           if(2 === hd[0])
                            {var _X_=hd[1];
                             if(7 === _X_[0])
                              var
                               f$8=_X_[1],
                               _N_=[0,caml_call1(f$8,caml_call1(Element[30],tgt))],
                               switch$2=0;
                             else
                              var switch$2=1}
                           else
                            var switch$2=1;
                         else
                          if(2 === hd[0])
                           {var _Y_=hd[1];
                            switch(_Y_[0])
                             {case 4:var msg$0=_Y_[1],_Z_=[0,msg$0],switch$5=1;break;
                              case 6:
                               var
                                f$9=_Y_[1],
                                curr_value=caml_call1(Element[26],tgt),
                                ___=1 - caml_call2(Element[19],tgt,prev_value_attribute),
                                changed=
                                 ___
                                 ||
                                 caml_string_notequal
                                  (caml_call2(Element[20],tgt,prev_value_attribute),
                                   curr_value),
                                _$_=changed?[0,caml_call1(f$9,curr_value)]:0,
                                _Z_=_$_,
                                switch$5=1;
                               break;
                              default:var switch$2=1,switch$5=0}
                            if(switch$5)var _N_=_Z_,switch$2=0}
                          else
                           var switch$2=1;
                        var res=switch$2?0:_N_;
                        if(! res){var param=tl;continue}
                        var match=res}
                      else
                       var match=0;
                      if(match)
                       {var msg$1=match[1];return process(caml_call1(_ab_,msg$1))}
                      var param$1=parent;
                      continue a}}}
                return 0}};
          propagate(vdom_of_dom(current[1],tgt));
          var
           _C_=caml_string_equal(ty,cst_input$1),
           _D_=_C_ || caml_string_equal(ty,cst_blur$0);
          if(_D_)
           var
            f=
             function(param)
              {var match=vdom_of_dom(current[1],tgt);
               if(match)
                {var _G_=match[2];
                 if(1 === _G_[0])
                  {var _H_=_G_[1];
                   if(1 === _H_[0])
                    {var
                      attributes=_H_[4],
                      _I_=
                       function(param)
                        {if(0 === param[0])
                          {var _J_=param[1];
                           if(caml_string_notequal(_J_,cst_checked))
                            {if(! caml_string_notequal(_J_,cst_value$1))
                              {var _K_=param[2];
                               if(0 === _K_[0])
                                {var s2=_K_[1];
                                 if(caml_string_notequal(s2,caml_call1(Element[26],tgt)))
                                  return caml_call2(Element[27],tgt,s2)}}}
                           else
                            {var _L_=param[2];
                             if(3 === _L_[0])
                              {var s2$0=_L_[1];return caml_call2(Element[32],tgt,s2$0)}}}
                         return 0};
                     return caml_call2(Stdlib_list[15],_I_,attributes)}}}
               return 0},
            _E_=pending_redraw[1]?after_redraw(f):f(0),
            _F_=_E_;
          else
           var _F_=_D_;
          return _F_}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          var _A_=caml_call1(Stdlib_printexc[1],exn);
          return caml_call3(Stdlib_printf[2],_u_,ty,_A_)}}
      function process_custom(tgt,event)
       {var match=vdom_of_dom(current[1],tgt);
        if(match)
         {var _x_=match[2];
          if(4 === _x_[0])
           {var _y_=_x_[1];
            if(4 === _y_[0])
             {var
               attributes=_y_[3],
               mapper=match[1],
               select_handler=
                function(param)
                 {if(2 === param[0])
                   {var h=param[1];return caml_call1(event[1],h)}
                  return 0},
               msgs=caml_call2(Stdlib_list[20],select_handler,attributes),
               _z_=function(msg){return process(caml_call1(mapper,msg))};
              return caml_call2(Stdlib_list[15],_z_,msgs)}}}
        return 0}
      process_custom_fwd[1] = process_custom;
      caml_call4(Element[15],container$1,22,onevent,0);
      caml_call4(Element[15],container$1,31,onevent,0);
      caml_call4(Element[15],container$1,74,onevent,0);
      caml_call4(Element[15],container$1,18,onevent,0);
      caml_call4(Element[15],container$1,65,onevent,1);
      caml_call4(Element[15],container$1,13,onevent,1);
      caml_call4(Element[15],container$1,93,onevent,1);
      caml_call4(Element[15],container$1,90,onevent,1);
      caml_call4(Element[15],container$1,76,onevent,1);
      caml_call4(Element[15],container$1,28,onevent,1);
      run(env$0[1],process,cmd0);
      return [0,
              container$1,
              process,
              function(param){return model[1]},
              after_redraw]}
    var
     Vdom_blit=
      [0,
       [0,send_msg],
       [0,make,send_event,after_redraw],
       cmd,
       custom$0,
       merge,
       empty,
       register,
       run$0,
       dom,
       process,
       get$0,
       after_redraw$0];
    caml_register_global(828,Vdom_blit,"Vdom_blit");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ2ZG9tLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJzdmdfbnMiLCJwcmV2X3ZhbHVlX2F0dHJpYnV0ZSIsImVtcHR5IiwidGhlbiIsImVycm9yIiwic3VjY2VzcyIsIm9qcyIsImFscGhhX29mX2pzIiwieDEiLCJ4IiwieDQiLCJ0X29mX2pzIiwieDgiLCJ0X3RvX2pzIiwieDciLCJsZW5ndGgiLCJ4MTEiLCJrZXkiLCJ4MTMiLCJ4MTIiLCJnZXRfaXRlbSIsIngxNiIsIngxNSIsInNldF9pdGVtIiwieDIwIiwieDE4IiwieDE5IiwicmVtb3ZlX2l0ZW0iLCJ4MjIiLCJ4MjEiLCJjbGVhciIsIngyMyIsInRfb2ZfanMkMCIsIngyNSIsInRfdG9fanMkMCIsIngyNCIsIm5ld19yZWdfZXhwIiwieDI4IiwieDI5IiwieDMwIiwieDMxIiwidF9vZl9qcyQxIiwieDMzIiwidF90b19qcyQxIiwieDMyIiwib2Zfc3RyaW5nIiwidG9fc3RyaW5nIiwidG9fbG93ZXJfY2FzZSIsIngzNiIsInRvX3VwcGVyX2Nhc2UiLCJ4MzciLCJjb25jYXQiLCJ4NDIiLCJ4MzgiLCJ4MzkiLCJ4NDAiLCJpbmNsdWRlcyIsIng0NCIsIng0MyIsImVuZHNfd2l0aCIsIng0NiIsIng0NSIsImluZGV4X29mIiwieDQ4IiwieDQ3IiwicmVwZWF0IiwieDUwIiwieDQ5Iiwic2VhcmNoIiwieDUyIiwieDUxIiwidHJpbSIsIng1MyIsInRfb2ZfanMkMiIsIng1NSIsInRfdG9fanMkMiIsIng1NCIsIm5ld19kYXRlIiwieDU4Iiwibm93IiwicGFyc2UiLCJ4NTkiLCJnZXRfZGF0ZSIsIng2MCIsImdldF9kYXkiLCJ4NjEiLCJnZXRfZnVsbF95ZWFyIiwieDYyIiwiZ2V0X2hvdXJzIiwieDYzIiwiZ2V0X21pbGxpc2Vjb25kcyIsIng2NCIsImdldF9taW51dGVzIiwieDY1IiwiZ2V0X21vbnRoIiwieDY2IiwiZ2V0X3NlY29uZHMiLCJ4NjciLCJnZXRfdGltZSIsIng2OCIsImdldF90aW1lem9uZV9vZmZzZXQiLCJ4NjkiLCJnZXRfVVRDX2RhdGUiLCJ4NzAiLCJnZXRfVVRDX2RheSIsIng3MSIsImdldF9VVENfZnVsbF95ZWFyIiwieDcyIiwiZ2V0X1VUQ19ob3VycyIsIng3MyIsImdldF9VVENfbWlsbGlzZWNvbmRzIiwieDc0IiwiZ2V0X1VUQ19taW51dGVzIiwieDc1IiwiZ2V0X1VUQ19tb250aCIsIng3NiIsImdldF9VVENfc2Vjb25kcyIsIng3NyIsImdldF95ZWFyIiwieDc4Iiwic2V0X2RhdGUiLCJ4ODAiLCJ4NzkiLCJzZXRfZnVsbF95ZWFyIiwieDgyIiwieDgxIiwic2V0X2hvdXJzIiwieDg0IiwieDgzIiwic2V0X21pbGxpc2Vjb25kcyIsIng4NiIsIng4NSIsInNldF9taW51dGVzIiwieDg4IiwieDg3Iiwic2V0X21vbnRoIiwieDkwIiwieDg5Iiwic2V0X3NlY29uZHMiLCJ4OTIiLCJ4OTEiLCJzZXRfdGltZSIsIng5NCIsIng5MyIsInNldF9VVENfZGF0ZSIsIng5NiIsIng5NSIsInNldF9VVENfZnVsbF95ZWFyIiwieDk4IiwieDk3Iiwic2V0X1VUQ19ob3VycyIsIngxMDAiLCJ4OTkiLCJzZXRfVVRDX21pbGxpc2Vjb25kcyIsIngxMDIiLCJ4MTAxIiwic2V0X1VUQ19taW51dGVzIiwieDEwNCIsIngxMDMiLCJzZXRfVVRDX21vbnRoIiwieDEwNiIsIngxMDUiLCJzZXRfVVRDX3NlY29uZHMiLCJ4MTA4IiwieDEwNyIsInNldF95ZWFyIiwieDExMCIsIngxMDkiLCJ0b19kYXRlX3N0cmluZyIsIngxMTEiLCJ0b19HTVRfc3RyaW5nIiwieDExMiIsInRvX0lTT19zdHJpbmciLCJ4MTEzIiwidG9fbG9jYWxlX3N0cmluZyIsIngxMTQiLCJ0b19zdHJpbmckMCIsIngxMTUiLCJ0b190aW1lX3N0cmluZyIsIngxMTYiLCJ0b19VVENfc3RyaW5nIiwieDExNyIsInRfb2ZfanMkMyIsIngxMTkiLCJ0X3RvX2pzJDMiLCJ4MTE4IiwibmFtZSIsIngxMjIiLCJzaXplIiwieDEyMyIsInR5cGUiLCJ4MTI0IiwidF9vZl9qcyQ0IiwieDEyNiIsInRfdG9fanMkNCIsIngxMjUiLCJmaWxlcyIsIngxMjkiLCJ0X29mX2pzJDUiLCJ4MTMyIiwidF90b19qcyQ1IiwieDEzMSIsImtpbmRfdG9fanMiLCJ4MTM1IiwieDEzNiIsInRhcmdldCIsIngxNDAiLCJwcmV2ZW50X2RlZmF1bHQiLCJ4MTQxIiwidHlwZSQwIiwieDE0MiIsImluaXRfZXZlbnQiLCJ4MTQ2IiwieDE0MyIsIngxNDQiLCJ4MTQ1IiwiY2xpZW50X3giLCJ4MTQ3IiwiY2xpZW50X3kiLCJ4MTQ4IiwicGFnZV94IiwieDE0OSIsInBhZ2VfeSIsIngxNTAiLCJzY3JlZW5feCIsIngxNTEiLCJzY3JlZW5feSIsIngxNTIiLCJtb3ZlbWVudF94IiwieDE1MyIsIm1vdmVtZW50X3kiLCJ4MTU0IiwiYnV0dG9ucyIsIngxNTUiLCJhbHRfa2V5IiwieDE1NiIsImN0cmxfa2V5IiwieDE1NyIsInNoaWZ0X2tleSIsIngxNTgiLCJ3aGljaCIsIngxNTkiLCJjb2RlIiwieDE2MCIsImtleSQwIiwieDE2MSIsImRlbHRhX3kiLCJ4MTYyIiwiZGVsdGFfeCIsIngxNjMiLCJkYXRhX3RyYW5zZmVyIiwieDE2NCIsImRhdGEiLCJ4MTY1Iiwib3JpZ2luIiwieDE2NiIsInRfb2ZfanMkNiIsIngxNjgiLCJ0X3RvX2pzJDYiLCJ4MTY3IiwiaGVpZ2h0IiwieDE3MSIsIndpZHRoIiwieDE3MiIsImxlZnQiLCJ4MTczIiwicmlnaHQiLCJ4MTc0IiwidG9wIiwieDE3NSIsImJvdHRvbSIsIngxNzYiLCJ0X29mX2pzJDciLCJ4MTc4IiwidF90b19qcyQ3IiwieDE3NyIsIngxODEiLCJ5IiwieDE4MiIsImhlaWdodCQwIiwieDE4MyIsIndpZHRoJDAiLCJ4MTg0IiwidF9vZl9qcyQ4IiwieDE4NiIsInRfdG9fanMkOCIsIngxODUiLCJzZXQiLCJzdHlsZSIsInByb3AiLCJ2YWx1ZSIsInNldF9jb2xvciIsIngxODkiLCJ4MTkwIiwic2V0X2JvcmRlciIsIngxOTEiLCJ4MTkyIiwic2V0X2JhY2tncm91bmQiLCJ4MTkzIiwieDE5NCIsInNldF9iYWNrZ3JvdW5kX2NvbG9yIiwieDE5NSIsIngxOTYiLCJzZXRfaGVpZ2h0IiwieDE5NyIsIngxOTgiLCJzZXRfd2lkdGgiLCJ4MTk5IiwieDIwMCIsInNldF9ib3R0b20iLCJ4MjAxIiwieDIwMiIsInNldF9sZWZ0IiwieDIwMyIsIngyMDQiLCJzZXRfdG9wIiwieDIwNSIsIngyMDYiLCJzZXRfcmlnaHQiLCJ4MjA3IiwieDIwOCIsInNldF9wb3NpdGlvbiIsIngyMDkiLCJ4MjEwIiwic2V0X2N1cnNvciIsIngyMTEiLCJ4MjEyIiwic2V0X2Rpc3BsYXkiLCJ4MjEzIiwieDIxNCIsImdldCIsInRfb2ZfanMkOSIsIngyMTYiLCJ0X3RvX2pzJDkiLCJ4MjE1IiwiY2xvbmVfbm9kZSIsIngyMjAiLCJ4MjE5IiwiY29udGFpbnMiLCJ4MjIyIiwieDIyMSIsImFwcGVuZF9jaGlsZCIsIngyMjQiLCJ4MjIzIiwiaW5zZXJ0X2JlZm9yZSIsIngyMjciLCJ4MjI1IiwieDIyNiIsInJlcGxhY2VfY2hpbGQiLCJ4MjMwIiwieDIyOCIsIngyMjkiLCJyZW1vdmVfY2hpbGQiLCJ4MjMyIiwieDIzMSIsImZpcnN0X2NoaWxkIiwieDIzMyIsImxhc3RfY2hpbGQiLCJ4MjM0IiwibmV4dF9zaWJsaW5nIiwieDIzNSIsInJlbW92ZV9hbGxfY2hpbGRyZW4iLCJjaGlsZCQxIiwiY2hpbGQiLCJjaGlsZCQwIiwiaGFzX2NoaWxkX25vZGVzIiwieDIzNiIsImFkZF9ldmVudF9saXN0ZW5lciIsIngyNDEiLCJ4MjM3IiwieDIzOCIsIngyNDAiLCJ4MjM5IiwiaW5uZXJfdGV4dCIsIngyNDIiLCJnZXRfZWxlbWVudHNfYnlfdGFnX25hbWUiLCJ4MjQ0IiwieDI0MyIsImdldF9lbGVtZW50c19ieV9jbGFzc19uYW1lIiwieDI0NyIsIngyNDYiLCJoYXNfYXR0cmlidXRlIiwieDI1MCIsIngyNDkiLCJnZXRfYXR0cmlidXRlIiwieDI1MiIsIngyNTEiLCJyZW1vdmVfYXR0cmlidXRlIiwieDI1NCIsIngyNTMiLCJzZXRfYXR0cmlidXRlIiwieDI1NyIsIngyNTUiLCJ4MjU2IiwiZ2V0X2JvdW5kaW5nX2NsaWVudF9yZWN0IiwieDI1OCIsImdldF9ib3VuZGluZ19ib3giLCJ4MjU5Iiwibm9ybWFsaXplIiwieDI2MCIsIngyNjEiLCJzZXRfdmFsdWUiLCJ4MjYyIiwieDI2MyIsInNlbGVjdCIsIngyNjQiLCJmaWxlcyQwIiwieDI2NSIsInNlbGVjdGVkX2luZGV4IiwieDI2NyIsImNoZWNrZWQiLCJ4MjY4Iiwic2V0X2NoZWNrZWQiLCJ4MjY5IiwieDI3MCIsIm5vZGVfdmFsdWUiLCJ4MjcxIiwic2V0X25vZGVfdmFsdWUiLCJ4MjcyIiwieDI3MyIsInBhcmVudF9ub2RlIiwieDI3NCIsIm5vZGVfbmFtZSIsIngyNzUiLCJkaXNwYXRjaF9ldmVudCIsIngyNzciLCJ4Mjc2IiwieDI3OCIsInNldF9pbm5lcl9IVE1MIiwieDI3OSIsIngyODAiLCJzZXRfdGV4dF9jb250ZW50IiwieDI4MSIsIngyODIiLCJzZXRfY2xhc3NfbmFtZSIsIngyODMiLCJ4Mjg0IiwiY2xhc3NfbmFtZSIsIngyODUiLCJjbGllbnRfd2lkdGgiLCJ4Mjg2IiwiY2xpZW50X2hlaWdodCIsIngyODciLCJzY3JvbGxfd2lkdGgiLCJ4Mjg4Iiwic2Nyb2xsX2hlaWdodCIsIngyODkiLCJ3aWR0aCQxIiwieDI5MCIsImhlaWdodCQxIiwieDI5MSIsIm9mZnNldF9wYXJlbnQiLCJ4MjkyIiwib2Zmc2V0X3RvcCIsIngyOTQiLCJvZmZzZXRfbGVmdCIsIngyOTUiLCJvZmZzZXRfd2lkdGgiLCJ4Mjk2Iiwib2Zmc2V0X2hlaWdodCIsIngyOTciLCJzY3JvbGxfdG9wIiwieDI5OCIsInNldF9zY3JvbGxfdG9wIiwieDI5OSIsIngzMDAiLCJmb2N1cyIsIngzMDEiLCJibHVyIiwieDMwMiIsInNlbGVjdGlvbl9zdGFydCIsIngzMDMiLCJzZWxlY3Rpb25fZW5kIiwieDMwNCIsInNldF9zZWxlY3Rpb25fc3RhcnQiLCJ4MzA1IiwieDMwNiIsInNldF9zZWxlY3Rpb25fZW5kIiwieDMwNyIsIngzMDgiLCJyZW1vdmUiLCJ4MzA5IiwiY2xpY2siLCJ4MzEwIiwidF9vZl9qcyQxMCIsIngzMTIiLCJ0X3RvX2pzJDEwIiwieDMxMSIsImNyZWF0ZV9lbGVtZW50IiwieDMxNiIsIngzMTUiLCJjcmVhdGVfZWxlbWVudF9ucyIsIngzMTkiLCJ4MzE3IiwieDMxOCIsImNyZWF0ZV90ZXh0X25vZGUiLCJ4MzIxIiwieDMyMCIsImNyZWF0ZV9ldmVudCIsIngzMjMiLCJ4MzIyIiwiZ2V0X2VsZW1lbnRfYnlfaWQiLCJ4MzI1IiwieDMyNCIsImdldF9lbGVtZW50c19ieV9jbGFzc19uYW1lJDAiLCJ4MzI4IiwieDMyNyIsImJvZHkiLCJ4MzMwIiwiZG9jdW1lbnRfZWxlbWVudCIsIngzMzEiLCJhY3RpdmVfZWxlbWVudCIsIngzMzIiLCJjb29raWUiLCJ4MzMzIiwic2V0X2Nvb2tpZSIsIngzMzQiLCJ4MzM1Iiwic2V0X3RpdGxlIiwieDMzNiIsIngzMzciLCJvcGVuIiwieDM0NCIsIngzMzgiLCJ4MzM5IiwieDM0MCIsIngzNDIiLCJ4MzQxIiwid3JpdGUiLCJ4MzQ2IiwieDM0NSIsIndyaXRlbG4iLCJ4MzQ4IiwieDM0NyIsImNsb3NlIiwieDM0OSIsImV4ZWNfY29tbWFuZCIsIngzNTEiLCJ4MzUwIiwicXVlcnlfc2VsZWN0b3IiLCJ4MzUzIiwieDM1MiIsInJlbW92ZV9hbGxfc2VsZWN0aW9uX3JhbmdlcyIsIngzNTQiLCJ0X29mX2pzJDExIiwieDM1NiIsInRfdG9fanMkMTEiLCJ4MzU1IiwibGVuZ3RoJDAiLCJ4MzU5IiwiYmFjayIsIngzNjAiLCJmb3J3YXJkIiwieDM2MSIsImdvIiwieDM2NSIsIngzNjIiLCJ4MzYzIiwieDM2MyQwIiwieDM2NCIsInJlcGxhY2Vfc3RhdGUiLCJ4MzY5IiwieDM2NiIsIngzNjciLCJ4MzY4IiwicHVzaF9zdGF0ZSIsIngzNzMiLCJ4MzcwIiwieDM3MSIsIngzNzIiLCJ0X29mX2pzJDEyIiwieDM3NSIsInRfdG9fanMkMTIiLCJ4Mzc0IiwiZ2V0X2hhc2giLCJzZXRfaGFzaCIsIngzNzgiLCJob3N0IiwieDM3OSIsInNldF9ob3N0IiwieDM4MCIsIngzODEiLCJob3N0bmFtZSIsIngzODIiLCJzZXRfaG9zdG5hbWUiLCJ4MzgzIiwieDM4NCIsImhyZWYiLCJzZXRfaHJlZiIsIngzODUiLCJwYXRobmFtZSIsIngzODYiLCJzZXRfcGF0aG5hbWUiLCJ4Mzg3IiwieDM4OCIsInBvcnQiLCJ4Mzg5Iiwic2V0X3BvcnQiLCJ4MzkwIiwieDM5MSIsInByb3RvY29sIiwieDM5MiIsInNldF9wcm90b2NvbCIsIngzOTMiLCJ4Mzk0Iiwic2VhcmNoJDAiLCJ4Mzk1Iiwic2V0X3NlYXJjaCIsIngzOTYiLCJ4Mzk3IiwiYXNzaWduIiwieDM5OSIsIngzOTgiLCJyZWxvYWQiLCJ4NDA0IiwieDQwMCIsIng0MDEiLCJ4NDAyIiwicmVwbGFjZSIsIng0MDYiLCJ4NDA1IiwidF9vZl9qcyQxMyIsIng0MDgiLCJ0X3RvX2pzJDEzIiwieDQwNyIsImFkZF9ldmVudF9saXN0ZW5lciQwIiwieDQxOSIsIng0MTUiLCJ4NDE2IiwieDQxOCIsIng0MTciLCJkb2N1bWVudCIsIng0MjAiLCJzZXRfb25sb2FkIiwieDQyMSIsIng0MjIiLCJzZXRfaW50ZXJ2YWwiLCJ4NDI1IiwieDQyMyIsIng0MjQiLCJzZXRfdGltZW91dCIsIng0MjgiLCJ4NDI2IiwieDQyNyIsImNsZWFyX3RpbWVvdXQiLCJ4NDMwIiwieDQyOSIsImNsZWFyX2ludGVydmFsIiwieDQzMiIsIng0MzEiLCJyZXF1ZXN0X2FuaW1hdGlvbl9mcmFtZSIsIng0MzUiLCJ4NDMzIiwieDQzNCIsIm9wZW4kMCIsIng0NDYiLCJ4NDM2IiwieDQzNyIsIng0MzgiLCJ4NDM5IiwieDQ0MCIsIng0NDQiLCJ4NDQzIiwieDQ0MiIsIng0NDEiLCJhbGVydCIsIng0NDgiLCJ4NDQ3Iiwic2Vzc2lvbl9zdG9yYWdlIiwieDQ0OSIsImxvY2FsX3N0b3JhZ2UiLCJ4NDUxIiwiaW5uZXJfd2lkdGgiLCJ4NDUzIiwiaW5uZXJfaGVpZ2h0IiwieDQ1NCIsInBhZ2VfeF9vZmZzZXQiLCJ4NDU1IiwicGFnZV95X29mZnNldCIsIng0NTYiLCJzY3JvbGxfYnkiLCJ4NDU5IiwieDQ1NyIsIng0NTgiLCJzY3JvbGxfdG8iLCJ4NDYyIiwieDQ2MCIsIng0NjEiLCJoaXN0b3J5IiwieDQ2MyIsImxvY2F0aW9uIiwieDQ2NCIsImZyYW1lX2VsZW1lbnQiLCJ4NDY1IiwiZ2V0X2NvbXB1dGVkX3N0eWxlIiwieDQ2NyIsIng0NjYiLCJkZWNvZGVfVVJJX2NvbXBvbmVudCIsIng0NjkiLCJ4NDY4IiwiZXZlbnRfc291cmNlIiwieDQ3MCIsInBvc3RfbWVzc2FnZSIsIng0NzMiLCJ4NDcxIiwieDQ3MiIsImNvbnRlbnRfd2luZG93IiwieDQ3NCIsImNvbnRlbnRfZG9jdW1lbnQiLCJ4NDc2IiwicGFyc2UkMCIsIng0NzgiLCJzdHJpbmdpZnkiLCJ4NDc5IiwidF9vZl9qcyQxNCIsIng0ODQiLCJ0X3RvX2pzJDE0IiwieDQ4MyIsImNyZWF0ZSIsInJlYWR5X3N0YXRlIiwieDQ4NyIsIng0ODEiLCJyZXN1bHQiLCJ4NDg4Iiwic2V0X29ubG9hZCQwIiwieDQ4OSIsIng0OTAiLCJyZWFkX2FzX2JpbmFyeV9zdHJpbmciLCJ4NDkyIiwieDQ5MSIsInJlYWRfYXNfdGV4dCIsIng0OTQiLCJ4NDkzIiwidF9vZl9qcyQxNSIsIng0OTYiLCJ0X3RvX2pzJDE1IiwieDQ5NSIsImNyZWF0ZSQwIiwib3BlbiQxIiwieDUwMSIsIng0OTkiLCJ4NTAwIiwic2VuZCIsIng1MDMiLCJ4NTAyIiwic2V0X3JlcXVlc3RfaGVhZGVyIiwieDUwNiIsIng1MDQiLCJ4NTA1IiwiZ2V0X3Jlc3BvbnNlX2hlYWRlciIsIng1MDgiLCJ4NTA3Iiwic2V0X3Jlc3BvbnNlX3R5cGUiLCJ4NTEwIiwieDUxMSIsIm92ZXJyaWRlX21pbWVfdHlwZSIsIng1MTMiLCJ4NTEyIiwic2V0X3dpdGhfY3JlZGVudGlhbHMiLCJ4NTE0IiwieDUxNSIsInN0YXR1cyIsIng1MjEiLCJyZWFkeV9zdGF0ZSQwIiwieDUyMiIsIng1MTgiLCJyZXNwb25zZV90ZXh0IiwieDUyMyIsInJlc3BvbnNlIiwieDUyNCIsInNldF9vbnJlYWR5c3RhdGVjaGFuZ2UiLCJ4NTI1IiwieDUyNiIsInRfb2ZfanMkMTYiLCJ4NTI4IiwidF90b19qcyQxNiIsIng1MjciLCJjcmVhdGUkMSIsIng1MzQiLCJ4NTM1IiwieDUzNiIsIng1MzciLCJzZW5kJDAiLCJ4NTQwIiwieDUzOSIsImNsb3NlJDAiLCJ4NTQ3IiwieDU0MSIsIng1NDIiLCJ4NTQzIiwieDU0NSIsIng1NDQiLCJiaW5hcnlfdHlwZSIsIng1NDgiLCJzZXRfYmluYXJ5X3R5cGUiLCJ4NTQ5IiwieDU1MCIsInJlYWR5X3N0YXRlJDEiLCJ4NTUxIiwieDUzMiIsImFkZF9ldmVudF9saXN0ZW5lciQxIiwieDU1NiIsIng1NTIiLCJ4NTUzIiwieDU1NSIsIng1NTQiLCJjb2RlJDAiLCJ4NTU5Iiwid2luZG93IiwiZG9jdW1lbnQkMCIsImNvbnRleHRfb2ZfanMiLCJ4NTYxIiwiY29udGV4dF90b19qcyIsIng1NjAiLCJncmFkaWVudF9vZl9qcyIsIng1NjUiLCJncmFkaWVudF90b19qcyIsIng1NjQiLCJnZXRfY29udGV4dCIsIm9wdCIsImNhbnZhcyIsInN0aCIsImFscGhhIiwidG9fZGF0YV9VUkwiLCJ4NTc2Iiwic2V0X2ZpbGxfc3R5bGUiLCJ4NTc3IiwieDU3OCIsIng1ODAiLCJ4NTc5Iiwic2V0X3N0cm9rZV9zdHlsZSIsIng1ODEiLCJ4NTgyIiwieDU4NCIsIng1ODMiLCJzZXRfbGluZV93aWR0aCIsIng1ODUiLCJ4NTg2IiwiY3JlYXRlX2xpbmVhcl9ncmFkaWVudCIsIng1OTEiLCJ4NTg3IiwieDU4OCIsIng1ODkiLCJ4NTkwIiwiYWRkX2NvbG9yX3N0b3AiLCJ4NTk0IiwieDU5MiIsIng1OTMiLCJiZWdpbl9wYXRoIiwieDU5NSIsImNsb3NlX3BhdGgiLCJ4NTk2IiwiYXJjIiwieDYwMiIsIng1OTciLCJ4NTk4IiwieDU5OSIsIng2MDAiLCJ4NjAxIiwibW92ZV90byIsIng2MDUiLCJ4NjAzIiwieDYwNCIsImxpbmVfdG8iLCJ4NjA4IiwieDYwNiIsIng2MDciLCJmaWxsIiwieDYwOSIsInN0cm9rZSIsIng2MTAiLCJzdHJva2VfcmVjdCIsIng2MTUiLCJ4NjExIiwieDYxMiIsIng2MTMiLCJ4NjE0IiwiZmlsbF9yZWN0IiwieDYyMCIsIng2MTYiLCJ4NjE3IiwieDYxOCIsIng2MTkiLCJzZXRfZm9udCIsIng2MjEiLCJ4NjIyIiwiZmlsbF90ZXh0IiwieDYyNiIsIng2MjMiLCJ4NjI0IiwieDYyNSIsInN0cm9rZV90ZXh0IiwieDYzMCIsIng2MjciLCJ4NjI4IiwieDYyOSIsInRfb2ZfanMkMTciLCJ4NjMyIiwidF90b19qcyQxNyIsIng2MzEiLCJ3aWR0aCQyIiwieDYzNSIsIm1lYXN1cmVfdGV4dCIsIng2MzciLCJ4NjM2Iiwicm90YXRlIiwieDYzOSIsIng2MzgiLCJ0cmFuc2xhdGUiLCJ4NjQyIiwieDY0MCIsIng2NDEiLCJzY2FsZSIsIng2NDUiLCJ4NjQzIiwieDY0NCIsImNsZWFyX3JlY3QiLCJ4NjUwIiwieDY0NiIsIng2NDciLCJ4NjQ4IiwieDY0OSIsIm5vdyQwIiwibG9nIiwieDY1NCIsIng2NTMiLCJjb25zb2xlIiwiY3JlYXRlJDIiLCJ4NjU3IiwiZnJvbV9idWZmZXIiLCJ4NjYwIiwic2V0JDAiLCJ4NjY0IiwieDY2MSIsIng2NjMiLCJvcHRpb25zIiwieDY2NyIsIng2NjgiLCJ4NjY5IiwieDY3MSIsIng2NzAiLCJ0X29mX2pzJDE4IiwieDY3MyIsInRfdG9fanMkMTgiLCJ4NjcyIiwiY3JlYXRlJDMiLCJ4Njc2IiwieDY3NyIsIng2NzgiLCJ4NjgwIiwieDY4MSIsIng2ODIiLCJ4Njc5IiwidGV4dCIsIng2ODMiLCJvZl9ibG9iIiwieDY4NSIsInJldm9rZSIsIng2ODYiLCJ0X29mX2pzJDE5IiwieDY4OCIsInRfdG9fanMkMTkiLCJ4Njg3IiwidW5pdF90eXBlIiwieDY5MSIsInZhbHVlJDAiLCJ4NjkyIiwidmFsdWVfYXNfc3RyaW5nIiwieDY5MyIsInZhbHVlX2luX3NwZWNpZmllZF91bml0cyIsIng2OTQiLCJ0X29mX2pzJDIwIiwieDY5NiIsInRfdG9fanMkMjAiLCJ4Njk1IiwiYW5pbV92YWwiLCJ4Njk5IiwiYmFzZV92YWwiLCJ4NzAwIiwidF9vZl9qcyQyMSIsIng3MDUiLCJ0X3RvX2pzJDIxIiwieDcwNCIsIngkMCIsIng3MDgiLCJ5JDAiLCJ4NzA5IiwieDcxMCIsInkxIiwieDcxMSIsIngyIiwieDcxMiIsInkyIiwieDcxMyIsInBhdGhfc2VnX3R5cGUiLCJ4NzE0IiwieDcwMiIsInBhdGhfc2VnX3R5cGVfYXNfbGV0dGVyIiwieDcxNSIsInRfb2ZfanMkMjIiLCJ4NzE3IiwidF90b19qcyQyMiIsIng3MTYiLCJudW1iZXJfb2ZfaXRlbXMiLCJ4NzIwIiwiZ2V0X2l0ZW0kMCIsIng3MjIiLCJ4NzIxIiwiaW5zZXJ0X2l0ZW1fYmVmb3JlIiwieDcyNSIsIng3MjMiLCJ4NzI0IiwicmVwbGFjZV9pdGVtIiwieDcyOCIsIng3MjYiLCJ4NzI3IiwicmVtb3ZlX2l0ZW0kMCIsIng3MzAiLCJ4NzI5IiwiYXBwZW5kX2l0ZW0iLCJ4NzMyIiwieDczMSIsInRfb2ZfanMkMjMiLCJ4NzM0IiwidF90b19qcyQyMyIsIng3MzMiLCJwYXRoX3NlZ19saXN0IiwieDczNyIsIm5vcm1hbGl6ZWRfcGF0aF9zZWdfbGlzdCIsIng3MzgiLCJhbmltYXRlZF9wYXRoX3NlZ19saXN0IiwieDczOSIsImFuaW1hdGVkX25vcm1hbGl6ZWRfcGF0aF9zZWdfbGlzdCIsIng3NDAiLCJjcmVhdGVfY2xvc2VfcGF0aCIsIng3NDEiLCJjcmVhdGVfbW92ZXRvX2FicyIsIng3NDQiLCJ4NzQyIiwieDc0MyIsImNyZWF0ZV9tb3ZldG9fcmVsIiwieDc0NyIsIng3NDUiLCJ4NzQ2IiwiY3JlYXRlX2xpbmV0b19hYnMiLCJ4NzUwIiwieDc0OCIsIng3NDkiLCJjcmVhdGVfbGluZXRvX3JlbCIsIng3NTMiLCJ4NzUxIiwieDc1MiIsImVjaG8iLCJtc2ciLCJiYXRjaCIsImwiLCJtYXAiLCJmIiwib25tb3VzZWRvd24iLCJvbmNsaWNrIiwib25kYmxjbGljayIsIm9uY29udGV4dG1lbnUiLCJvbmZvY3VzIiwib25pbnB1dCIsIm9uY2hhbmdlIiwib25jaGFuZ2VfaW5kZXgiLCJvbmNoYW5nZV9jaGVja2VkIiwib25ibHVyIiwib25tb3VzZW1vdmUiLCJvbmtleWRvd24iLCJvbmtleWRvd25fY2FuY2VsIiwib25jdXN0b21ldmVudCIsInN0cl9wcm9wIiwiayIsInYiLCJpbnRfcHJvcCIsImJvb2xfcHJvcCIsImZsb2F0X3Byb3AiLCJzdHlsZSQwIiwiYXR0ciIsImludF9hdHRyIiwiZmxvYXRfYXR0ciIsInNjcm9sbF90b19zaG93IiwiYXV0b2ZvY3VzIiwiYXV0b2ZvY3VzX2NvdW50ZXIiLCJyZWxhdGl2ZV9kcm9wZG93biIsImNsYXNzJDAiLCJ0eXBlJDEiLCJ0eXBlX2J1dHRvbiIsInZhbHVlJDEiLCJkaXNhYmxlZCIsImFkZF9jbGFzcyIsImF0dHJzIiwiaGFzX2NsYXNzTmFtZSIsImEiLCJzIiwidGV4dCQwIiwidHh0IiwiZWx0IiwidGFnIiwibnMiLCJzdGgkMCIsImskMCIsInN2Z19lbHQiLCJkaXYiLCJpbnB1dCIsInR4dF9zcGFuIiwibWFwX2F0dHIiLCJpbml0IiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZXMkMCIsIm1hcCQwIiwibWVtbyIsImFyZyIsImN1c3RvbSIsInJldHVybiQwIiwibW9kZWwiLCJjIiwiYXBwIiwidXBkYXRlIiwidmlldyIsInNpbXBsZV9hcHAiLCJibHVyX2V2ZW50IiwiaW5wdXRfZXZlbnQiLCJjaGVja2VkX2V2ZW50IiwiYiIsImNoYW5nZV9ldmVudCIsImNoYW5nZV9pbmRleF9ldmVudCIsImkiLCJjdXN0b21fZXZlbnQiLCJlIiwic2VuZF9tc2ciLCJjdHgiLCJydW4iLCJwYXJhbSIsIngkMSIsInRsIiwiaGQiLCJtYWtlIiwic3luYyIsImRvbSIsInNlbmRfZXZlbnQiLCJhZnRlcl9yZWRyYXciLCJsb29rdXAiLCJwcm9jZXNzX2N1c3RvbSIsImhhbmRsZXJzIiwiZWwiLCJzY3JvbGxfdG9fbWFrZV92aXNpYmxlIiwibm9kZSIsInBhcmVudCIsIm92ZXJmbG93X3kiLCJpc19zY3JvbGxhYmxlIiwibm9kZSQwIiwicl9wYXJlbnQiLCJyX2NoaWxkIiwieTEkMCIsInkyJDAiLCJnZXRfZG9tIiwiZ2V0X3Zkb20iLCJldmFsX3Byb3AiLCJ4JDIiLCJzdHJpbmdfb2ZfcHJvcCIsInNhbWVfcHJvcCIsInYxIiwibWF0Y2giLCJ4MiQwIiwieDEkMCIsIngyJDEiLCJ4MSQxIiwieDIkMiIsIngxJDIiLCJibWVtbyIsInZkb20iLCJhc3luYyIsImN1c3RvbV9hdHRyaWJ1dGUiLCJleG4iLCJweCIsInJlY3QiLCJvZmZzZXRfcmVjdCIsImFwcGx5X2F0dHJpYnV0ZXMiLCJ2JDAiLCJ2JDEiLCJrJDEiLCJjaGlsZHJlbiIsImNoaWxkcmVuJDAiLCJmJDAiLCJlbHQkMCIsImJsaXQiLCJzeW5jX3Byb3BzIiwic2FtZSIsImwxIiwibDIiLCJrMiIsImsxIiwic29ydCIsImwxJDAiLCJsMiQwIiwibDEkMSIsImwyJDEiLCJ0bDIkMCIsInYyJDAiLCJrMiQwIiwiY2hvb3NlIiwianNfZW1wdHlfc3RyaW5nIiwic3luY19hdHRyaWJ1dGVzIiwiYTEiLCJhMiIsInByb3BzIiwic3R5bGVzIiwiY2xlYXIkMCIsInNldCQxIiwiY2xlYXIkMSIsIm9sZCIsInMyIiwiczEiLCJkb20kMCIsIm9sZF9jaGlsZHJlbiIsIm5ld19jaGlsZHJlbiIsImJ5X2tleSIsImkkMSIsImluZGljZXMiLCJpJDAiLCJpZHgkMCIsImN0cmxzIiwibmV4dCIsImlkeCIsIm1vdmUiLCJjMiIsImMxIiwiZjIiLCJjMSQwIiwiZjEiLCJhMiQwIiwiYXJnMiIsImtleTIiLCJhMSQwIiwiYXJnMSIsImtleTEiLCJmb3VuZCIsImlubmVyJDEiLCJpbm5lciQyIiwidmRvbV9vZl9kb20iLCJyb290IiwibW91c2VfZXZlbnQiLCJrZXlfZXZlbnQiLCJwcm9jZXNzIiwiZ2V0JDAiLCJhZnRlcl9yZWRyYXckMCIsImNtZCIsImgiLCJjdXN0b20kMCIsIm1lcmdlIiwiZW52cyIsImdsb2JhbCIsInJlZ2lzdGVyIiwicnVuJDAiLCJjb250YWluZXIiLCJjbWQwIiwibW9kZWwwIiwiZW52IiwiZW52JDAiLCJjb250YWluZXIkMCIsImNvbnRhaW5lciQxIiwicG9zdF9yZWRyYXciLCJmbHVzaCIsInByb2Nlc3NfY3VzdG9tX2Z3ZCIsImV2dCIsInZpZXckMCIsImN1cnJlbnQiLCJwZW5kaW5nX3JlZHJhdyIsInJlZHJhdyIsIm5ld19tb2RlbCIsIm9uZXZlbnQiLCJ0eSIsInRndCIsInByb3BhZ2F0ZSIsImYkMSIsImYkMiIsInIiLCJyJDAiLCJmJDMiLCJmJDQiLCJmJDUiLCJmJDYiLCJmJDciLCJmJDgiLCJtc2ckMCIsImYkOSIsImN1cnJfdmFsdWUiLCJjaGFuZ2VkIiwicmVzIiwibXNnJDEiLCJzMiQwIiwiZXZlbnQiLCJtYXBwZXIiLCJzZWxlY3RfaGFuZGxlciIsIm1zZ3MiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEpJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDc2RFQzs7Ozs7Ozs7S0EvRUZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FDaGhCSUMsS0FBT0MsTUFBUUM7VUFBdUJDLGFBQWJDO2VBTlpDLEdBT1NDLEdBQWEsa0JBRHBCSixRQUNvQixXQURWRSxZQUNIRSxHQUE0QjtNQUw5QyxjQUdvQ0MsSUFBTSxzQ0FBTkEsR0FBd0I7TUFGMUQ7UUFDSywrQkFKRUYsSUFJbUIsdUJBRXpCSjtNQUhEO2FBV0xPLFFBRmdDQyxJQUFNLE9BQU5BLEVBQVE7YUFHeENDLFFBRjRCQyxJQUFNLE9BQU5BLEVBQVE7YUFHcEND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QkExS0lWLGVBZ0VBVTtNQTJHSix1QkEzS0lWLGVBZ0VBVTtNQTRHSix1QkE1S0lWLGVBZ0VBVTtNQTZHSixJQTlLSVosU0ErQ0lmLFFBaERZWTtNQStLcEI7Y0E3S0lLO2NBOENJakI7OEJBZ0lvQyxPQWhKeENqSSxRQWdKOEM7Y0F4SzlDMEIsYUF3SzhEO0lBL2FsRTs7O1VBalNJWDtVQWtDQU8sS0FFQUcsV0FFQUM7T0E0ZUYwRztPQUNBRTtPQUNBQztPQUhBanVDO09BWUFvdUM7T0FFQUM7T0F6QkFuSDtPQUNBeUc7T0FDQUM7T0FDQUM7SUF4T0Y7VSIsInNvdXJjZXMiOlsiL2hvbWUvc2FtaS8ub3BhbS80LjA5LjAvLm9wYW0tc3dpdGNoL2J1aWxkL29jYW1sLXZkb20uMC4xL19idWlsZC9kZWZhdWx0L2xpYi92ZG9tLm1sIiwiL2hvbWUvc2FtaS8ub3BhbS80LjA5LjAvLm9wYW0tc3dpdGNoL2J1aWxkL29jYW1sLXZkb20uMC4xL19idWlsZC9kZWZhdWx0L2xpYi92ZG9tX2JsaXQubWwiLCIvaG9tZS9zYW1pLy5vcGFtLzQuMDkuMC8ub3BhbS1zd2l0Y2gvYnVpbGQvb2NhbWwtdmRvbS4wLjEvX2J1aWxkL2RlZmF1bHQvbGliL2pzX2Jyb3dzZXIubWwiXSwic291cmNlc0NvbnRlbnQiOlsiKCogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIG9jYW1sLXZkb20gcGFja2FnZSwgcmVsZWFzZWQgdW5kZXIgdGhlIHRlcm1zIG9mIGFuIE1JVC1saWtlIGxpY2Vuc2UuICAgICAqKVxuKCogU2VlIHRoZSBhdHRhY2hlZCBMSUNFTlNFIGZpbGUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogQ29weXJpZ2h0IDIwMTYgYnkgTGV4aUZpLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuXG5cbm1vZHVsZSBDbWQgPSBzdHJ1Y3RcbiAgdHlwZSAnbXNnIHQgPSAuLlxuXG4gIHR5cGUgJ21zZyB0ICs9XG4gICAgfCBFY2hvIG9mICdtc2dcbiAgICB8IEJhdGNoIG9mICdtc2cgdCBsaXN0XG4gICAgfCBNYXA6ICgnYSAtPiAnbXNnKSAqICdhIHQgLT4gJ21zZyB0XG5cbiAgbGV0IGVjaG8gbXNnID0gRWNobyBtc2dcbiAgbGV0IGJhdGNoIGwgPSBCYXRjaCBsXG4gIGxldCBtYXAgZiB4ID0gTWFwIChmLCB4KVxuZW5kXG5cbm1vZHVsZSBDdXN0b20gPSBzdHJ1Y3RcbiAgdHlwZSB0ID0gLi5cbiAgdHlwZSBldmVudCA9IC4uXG5lbmRcblxudHlwZSBtb3VzZV9ldmVudCA9IHt4OiBpbnQ7IHk6IGludDsgcGFnZV94OiBmbG9hdDsgcGFnZV95OiBmbG9hdDsgYnV0dG9uczogaW50OyBhbHRfa2V5OiBib29sOyBjdHJsX2tleTogYm9vbDsgc2hpZnRfa2V5OiBib29sfVxuXG50eXBlIGtleV9ldmVudCA9IHt3aGljaDogaW50OyBhbHRfa2V5OiBib29sOyBjdHJsX2tleTogYm9vbDsgc2hpZnRfa2V5OiBib29sfVxuXG50eXBlICdtc2cgZXZlbnRfaGFuZGxlciA9XG4gIHwgTW91c2VEb3duIG9mIChtb3VzZV9ldmVudCAtPiAnbXNnKVxuICB8IENsaWNrIG9mIChtb3VzZV9ldmVudCAtPiAnbXNnKVxuICB8IERibENsaWNrIG9mIChtb3VzZV9ldmVudCAtPiAnbXNnKVxuICB8IEZvY3VzIG9mICdtc2dcbiAgfCBCbHVyIG9mICdtc2dcbiAgfCBJbnB1dCBvZiAoc3RyaW5nIC0+ICdtc2cpXG4gIHwgQ2hhbmdlIG9mIChzdHJpbmcgLT4gJ21zZylcbiAgfCBDaGFuZ2VJbmRleCBvZiAoaW50IC0+ICdtc2cpXG4gIHwgQ2hhbmdlQ2hlY2tlZCBvZiAoYm9vbCAtPiAnbXNnKVxuICB8IE1vdXNlTW92ZSBvZiAobW91c2VfZXZlbnQgLT4gJ21zZylcbiAgfCBLZXlEb3duIG9mIChrZXlfZXZlbnQgLT4gJ21zZylcbiAgfCBLZXlEb3duQ2FuY2VsIG9mIChrZXlfZXZlbnQgLT4gJ21zZyBvcHRpb24pXG4gIHwgQ29udGV4dE1lbnUgb2YgKG1vdXNlX2V2ZW50IC0+ICdtc2cpXG4gIHwgQ3VzdG9tRXZlbnQgb2YgKEN1c3RvbS5ldmVudCAtPiAnbXNnIG9wdGlvbilcblxudHlwZSBwcm9wX3ZhbCA9XG4gIHwgU3RyaW5nIG9mIHN0cmluZ1xuICB8IEludCBvZiBpbnRcbiAgfCBGbG9hdCBvZiBmbG9hdFxuICB8IEJvb2wgb2YgYm9vbFxuXG50eXBlICdtc2cgYXR0cmlidXRlID1cbiAgfCBQcm9wZXJ0eSBvZiBzdHJpbmcgKiBwcm9wX3ZhbFxuICB8IFN0eWxlIG9mIHN0cmluZyAqIHN0cmluZ1xuICB8IEhhbmRsZXIgb2YgJ21zZyBldmVudF9oYW5kbGVyXG4gIHwgQXR0cmlidXRlIG9mIHN0cmluZyAqIHN0cmluZ1xuXG5sZXQgb25tb3VzZWRvd24gbXNnID0gSGFuZGxlciAoTW91c2VEb3duIG1zZylcbmxldCBvbmNsaWNrIG1zZyA9IEhhbmRsZXIgKENsaWNrIG1zZylcbmxldCBvbmRibGNsaWNrIG1zZyA9IEhhbmRsZXIgKERibENsaWNrIG1zZylcbmxldCBvbmNvbnRleHRtZW51IG1zZyA9IEhhbmRsZXIgKENvbnRleHRNZW51IG1zZylcbmxldCBvbmZvY3VzIG1zZyA9IEhhbmRsZXIgKEZvY3VzIG1zZylcbmxldCBvbmlucHV0IG1zZyA9IEhhbmRsZXIgKElucHV0IG1zZylcbmxldCBvbmNoYW5nZSBtc2cgPSBIYW5kbGVyIChDaGFuZ2UgbXNnKVxubGV0IG9uY2hhbmdlX2luZGV4IG1zZyA9IEhhbmRsZXIgKENoYW5nZUluZGV4IG1zZylcbmxldCBvbmNoYW5nZV9jaGVja2VkIG1zZyA9IEhhbmRsZXIgKENoYW5nZUNoZWNrZWQgbXNnKVxubGV0IG9uYmx1ciBtc2cgPSBIYW5kbGVyIChCbHVyIG1zZylcbmxldCBvbm1vdXNlbW92ZSBtc2cgPSBIYW5kbGVyIChNb3VzZU1vdmUgbXNnKVxubGV0IG9ua2V5ZG93biBtc2cgPSBIYW5kbGVyIChLZXlEb3duIG1zZylcbmxldCBvbmtleWRvd25fY2FuY2VsIG1zZyA9IEhhbmRsZXIgKEtleURvd25DYW5jZWwgbXNnKVxubGV0IG9uY3VzdG9tZXZlbnQgbXNnID0gSGFuZGxlciAoQ3VzdG9tRXZlbnQgbXNnKVxuXG5cbmxldCBzdHJfcHJvcCBrIHYgPSBQcm9wZXJ0eSAoaywgU3RyaW5nIHYpXG5sZXQgaW50X3Byb3AgayB2ID0gUHJvcGVydHkgKGssIEludCB2KVxubGV0IGJvb2xfcHJvcCBrIHYgPSBQcm9wZXJ0eSAoaywgQm9vbCB2KVxubGV0IGZsb2F0X3Byb3AgayB2ID0gUHJvcGVydHkgKGssIEZsb2F0IHYpXG5sZXQgc3R5bGUgayB2ID0gU3R5bGUgKGssIHYpXG5sZXQgYXR0ciBrIHYgPSBBdHRyaWJ1dGUgKGssIHYpXG5sZXQgaW50X2F0dHIgayB2ID0gQXR0cmlidXRlIChrLCBzdHJpbmdfb2ZfaW50IHYpXG5sZXQgZmxvYXRfYXR0ciBrIHYgPSBBdHRyaWJ1dGUgKGssIHN0cmluZ19vZl9mbG9hdCB2KVxubGV0IHNjcm9sbF90b19zaG93ID0gYm9vbF9wcm9wIFwic2Nyb2xsLXRvLXNob3dcIiB0cnVlXG5sZXQgYXV0b2ZvY3VzID0gYm9vbF9wcm9wIFwiYXV0b2ZvY3VzXCIgdHJ1ZVxubGV0IGF1dG9mb2N1c19jb3VudGVyIHggPSBpbnRfcHJvcCBcImF1dG9mb2N1c1wiIHhcbmxldCByZWxhdGl2ZV9kcm9wZG93biB4ID0gaW50X3Byb3AgXCJyZWxhdGl2ZS1kcm9wZG93blwiIHhcblxubGV0IGNsYXNzXyB4ID0gUHJvcGVydHkgKFwiY2xhc3NOYW1lXCIsIFN0cmluZyB4KVxubGV0IHR5cGVfIHggPSBQcm9wZXJ0eSAoXCJ0eXBlXCIsIFN0cmluZyB4KVxubGV0IHR5cGVfYnV0dG9uID0gdHlwZV8gXCJidXR0b25cIlxubGV0IHZhbHVlIHggPSBQcm9wZXJ0eSAoXCJ2YWx1ZVwiLCBTdHJpbmcgeClcbmxldCBkaXNhYmxlZCB4ID0gUHJvcGVydHkgKFwiZGlzYWJsZWRcIiwgQm9vbCB4KVxuXG5sZXQgYWRkX2NsYXNzIHggYXR0cnMgPVxuICBsZXQgaGFzX2NsYXNzTmFtZSA9XG4gICAgTGlzdC5leGlzdHMgKGZ1bmN0aW9uIFByb3BlcnR5IChcImNsYXNzTmFtZVwiLCBfKSAtPiB0cnVlIHwgXyAtPiBmYWxzZSkgYXR0cnNcbiAgaW5cbiAgaWYgaGFzX2NsYXNzTmFtZSB0aGVuXG4gICAgTGlzdC5tYXAgKGZ1bmN0aW9uXG4gICAgICAgIHwgUHJvcGVydHkgKFwiY2xhc3NOYW1lXCIsIFN0cmluZyBzKSAtPlxuICAgICAgICAgICAgUHJvcGVydHkgKFwiY2xhc3NOYW1lXCIsIFN0cmluZyAoUHJpbnRmLnNwcmludGYgXCIlcyAlc1wiIHMgeCkpXG4gICAgICAgIHwgYSAtPlxuICAgICAgICAgICAgYVxuICAgICAgKSBhdHRyc1xuICBlbHNlXG4gICAgY2xhc3NfIHggOjogYXR0cnNcblxudHlwZSArJ21zZyB2ZG9tID1cbiAgfCBUZXh0IG9mXG4gICAgICB7XG4gICAgICAgIGtleTogc3RyaW5nO1xuICAgICAgICB0eHQ6IHN0cmluZztcbiAgICAgIH1cbiAgfCBFbGVtZW50IG9mXG4gICAgICB7XG4gICAgICAgIGtleTogc3RyaW5nO1xuICAgICAgICBuczogc3RyaW5nO1xuICAgICAgICB0YWc6IHN0cmluZztcbiAgICAgICAgYXR0cmlidXRlczogJ21zZyBhdHRyaWJ1dGUgbGlzdDtcbiAgICAgICAgY2hpbGRyZW46ICdtc2cgdmRvbSBsaXN0O1xuICAgICAgfVxuICB8IE1hcDpcbiAgICAgIHtcbiAgICAgICAga2V5OiBzdHJpbmc7XG4gICAgICAgIGY6ICgnc3VibXNnIC0+ICdtc2cpO1xuICAgICAgICBjaGlsZDogJ3N1Ym1zZyB2ZG9tO1xuICAgICAgfSAtPiAnbXNnIHZkb21cbiAgfCBNZW1vOlxuICAgICAge1xuICAgICAgICBrZXk6IHN0cmluZztcbiAgICAgICAgZjogKCdhIC0+ICdtc2cgdmRvbSk7XG4gICAgICAgIGFyZzogJ2E7XG4gICAgICB9IC0+ICdtc2cgdmRvbVxuICB8IEN1c3RvbSBvZlxuICAgICAge1xuICAgICAgICBrZXk6IHN0cmluZztcbiAgICAgICAgZWx0OiBDdXN0b20udDtcbiAgICAgICAgYXR0cmlidXRlczogJ21zZyBhdHRyaWJ1dGUgbGlzdDtcbiAgICAgIH1cblxubGV0IHRleHQgPyhrZXkgPVwiX3R4dFwiKSB0eHQgPSBUZXh0IHtrZXk7IHR4dH1cblxudHlwZSAoJ21zZywgJ3JlcykgZWx0X2dlbiA9XG4gID9rZXk6c3RyaW5nIC0+XG4gID9hOidtc2cgYXR0cmlidXRlIGxpc3QgLT5cbiAgJ3Jlc1xuXG5sZXQgZWx0ID8obnMgPSBcIlwiKSB0YWcgP2tleSA/KGEgPSBbXSkgbCA9XG4gIEVsZW1lbnRcbiAgICB7XG4gICAgICBrZXkgPSAobWF0Y2gga2V5IHdpdGggTm9uZSAtPiB0YWcgfCBTb21lIGsgLT4gayk7XG4gICAgICBucztcbiAgICAgIHRhZztcbiAgICAgIGNoaWxkcmVuID0gbDtcbiAgICAgIGF0dHJpYnV0ZXMgPSBhO1xuICAgIH1cblxubGV0IHN2Z19ucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxubGV0IHN2Z19lbHQgdGFnID9rZXkgP2EgbCA9IGVsdCB+bnM6c3ZnX25zIHRhZyA/a2V5ID9hIGxcblxubGV0IGRpdiA/a2V5ID9hIGwgPSBlbHQgXCJkaXZcIiA/a2V5ID9hIGxcbmxldCBpbnB1dCA/a2V5ID9hIGwgPSBlbHQgXCJpbnB1dFwiID9rZXkgP2EgbFxubGV0IHR4dF9zcGFuID9rZXkgP2EgcyA9IGVsdCBcInNwYW5cIiA/a2V5ID9hIFt0ZXh0IHNdXG5cbmxldCBtYXBfYXR0ciBmID0gZnVuY3Rpb25cbiAgfCBDdXN0b20gKHsgYXR0cmlidXRlczsgXyB9IGFzIHgpIC0+XG4gICAgICBDdXN0b20geyB4IHdpdGggYXR0cmlidXRlcyA9IGYgYXR0cmlidXRlcyB9XG4gIHwgRWxlbWVudCAoeyBhdHRyaWJ1dGVzOyBfIH0gYXMgeCkgLT5cbiAgICAgIEVsZW1lbnQgeyB4IHdpdGggYXR0cmlidXRlcyA9IGYgYXR0cmlidXRlcyB9XG4gIHwgeCAtPiB4XG5cbmxldCBtYXAgPyhrZXkgPSBcIl9tYXBcIikgZiBjaGlsZCA9IE1hcCB7a2V5OyBmOyBjaGlsZH1cbmxldCBtZW1vID8oa2V5ID0gXCJfbWVtb1wiKSBmIGFyZyA9IE1lbW8ge2tleTsgZjsgYXJnfVxubGV0IGN1c3RvbSA/KGtleSA9XCJfY3VzdG9tXCIpID8oYSA9IFtdKSBlbHQgPSBDdXN0b20ge2tleTsgZWx0OyBhdHRyaWJ1dGVzID0gYX1cblxubGV0IHJldHVybiA/KGMgPSBbXSkgbW9kZWwgPSBtb2RlbCwgQ21kLmJhdGNoIGNcblxudHlwZSAoJ21vZGVsLCAnbXNnKSBhcHAgPVxuICB7XG4gICAgaW5pdDogKCdtb2RlbCAqICdtc2cgQ21kLnQpO1xuICAgIHVwZGF0ZTogKCdtb2RlbCAtPiAnbXNnIC0+ICdtb2RlbCAqICdtc2cgQ21kLnQpO1xuICAgIHZpZXc6ICgnbW9kZWwgLT4gJ21zZyB2ZG9tKTtcbiAgfVxuXG5sZXQgYXBwIH5pbml0IH51cGRhdGUgfnZpZXcgKCkgPVxuICB7aW5pdDsgdXBkYXRlOyB2aWV3fVxuXG5sZXQgc2ltcGxlX2FwcCB+aW5pdCB+dXBkYXRlIH52aWV3ICgpID1cbiAgYXBwXG4gICAgfmluaXQ6KHJldHVybiBpbml0KVxuICAgIH51cGRhdGU6KGZ1biBtb2RlbCBtc2cgLT4gcmV0dXJuICh1cGRhdGUgbW9kZWwgbXNnKSlcbiAgICB+dmlld1xuICAgICgpXG5cblxudHlwZSBldmVudCA9IHtldjogJ21zZy4gKCdtc2cgZXZlbnRfaGFuZGxlciAtPiAnbXNnIG9wdGlvbil9XG5cbmxldCBibHVyX2V2ZW50ID0ge2V2ID0gZnVuY3Rpb24gQmx1ciBtc2cgLT4gU29tZSBtc2cgfCBfIC0+IE5vbmV9XG5sZXQgaW5wdXRfZXZlbnQgcyA9IHtldiA9IGZ1bmN0aW9uIElucHV0IGYgLT4gU29tZSAoZiBzKSB8IF8gLT4gTm9uZX1cbmxldCBjaGVja2VkX2V2ZW50IGIgPSB7ZXYgPSBmdW5jdGlvbiBDaGFuZ2VDaGVja2VkIGYgLT4gU29tZSAoZiBiKSB8IF8gLT4gTm9uZX1cbmxldCBjaGFuZ2VfZXZlbnQgcyA9IHtldiA9IGZ1bmN0aW9uIENoYW5nZSBmIC0+IFNvbWUgKGYgcykgfCBfIC0+IE5vbmV9XG5sZXQgY2hhbmdlX2luZGV4X2V2ZW50IGkgPSB7ZXYgPSBmdW5jdGlvbiBDaGFuZ2VJbmRleCBmIC0+IFNvbWUgKGYgaSkgfCBfIC0+IE5vbmV9XG5sZXQgY3VzdG9tX2V2ZW50IGUgPSB7ZXYgPSBmdW5jdGlvbiBDdXN0b21FdmVudCBmIC0+IGYgZSB8IF8gLT4gTm9uZX1cbiIsIigqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBvY2FtbC12ZG9tIHBhY2thZ2UsIHJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiBhbiBNSVQtbGlrZSBsaWNlbnNlLiAgICAgKilcbigqIFNlZSB0aGUgYXR0YWNoZWQgTElDRU5TRSBmaWxlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqIENvcHlyaWdodCAyMDE2IGJ5IExleGlGaS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcblxuXG5vcGVuIEpzX2Jyb3dzZXJcbm9wZW4gVmRvbVxuXG5sZXQgZGVidWcgPSBmYWxzZVxuXG5tb2R1bGUgQ21kID0gc3RydWN0XG4gIHR5cGUgJ21zZyBjdHggPVxuICAgIHtcbiAgICAgIHNlbmRfbXNnOiAoJ21zZyAtPiB1bml0KTtcbiAgICB9XG5cbiAgbGV0IHNlbmRfbXNnIGN0eCA9IGN0eC5zZW5kX21zZ1xuXG4gIHR5cGUgaGFuZGxlciA9IHtmOiAnbXNnLiAnbXNnIGN0eCAtPiAnbXNnIFZkb20uQ21kLnQgLT4gYm9vbH1cblxuICBsZXQgcmVjIHJ1bjogdHlwZSB0LiBoYW5kbGVyIGxpc3QgLT4gKHQgLT4gdW5pdCkgLT4gdCBDbWQudCAtPiB1bml0ID0gZnVuIGggcCAtPiBmdW5jdGlvblxuICAgIHwgQ21kLkVjaG8gbXNnIC0+IHAgbXNnXG4gICAgfCBDbWQuQmF0Y2ggbCAtPiBMaXN0Lml0ZXIgKHJ1biBoIHApIGxcbiAgICB8IENtZC5NYXAgKGYsIGNtZCkgLT4gcnVuIGggKGZ1biB4IC0+IHAgKGYgeCkpIGNtZFxuICAgIHwgeCAtPlxuICAgICAgICBsZXQgY3R4ID0ge3NlbmRfbXNnID0gcH0gaW5cbiAgICAgICAgbGV0IHJlYyBsb29wID0gZnVuY3Rpb25cbiAgICAgICAgICB8IFtdIC0+IGZhaWx3aXRoIChQcmludGYuc3ByaW50ZiBcIk5vIGNvbW1hbmQgaGFuZGxlciBmb3VuZCEgKCVzKVwiIChPYmouRXh0ZW5zaW9uX2NvbnN0cnVjdG9yLm5hbWUgKE9iai5FeHRlbnNpb25fY29uc3RydWN0b3Iub2ZfdmFsIHgpKSlcbiAgICAgICAgICB8IGhkIDo6IHRsIC0+XG4gICAgICAgICAgICAgIGlmIGhkLmYgY3R4IHggdGhlbiAoKVxuICAgICAgICAgICAgICBlbHNlIGxvb3AgdGxcbiAgICAgICAgaW5cbiAgICAgICAgbG9vcCBoXG5lbmRcblxubW9kdWxlIEN1c3RvbSA9IHN0cnVjdFxuICB0eXBlIHQgPVxuICAgIHtcbiAgICAgIGRvbTogSnNfYnJvd3Nlci5FbGVtZW50LnQ7XG4gICAgICBzeW5jOiAoVmRvbS5DdXN0b20udCAtPiBib29sKTtcbiAgICB9XG5cbiAgdHlwZSBjdHggPVxuICAgIHtcbiAgICAgIHNlbmRfZXZlbnQ6IChWZG9tLmV2ZW50IC0+IHVuaXQpO1xuICAgICAgYWZ0ZXJfcmVkcmF3OiAoKHVuaXQgLT4gdW5pdCkgLT4gdW5pdCk7XG4gICAgfVxuXG4gIHR5cGUgaGFuZGxlciA9IGN0eCAtPiBWZG9tLkN1c3RvbS50IC0+IHQgb3B0aW9uXG5cbiAgbGV0IG1ha2UgfnN5bmMgZG9tID0ge2RvbTsgc3luY31cblxuICBsZXQgc2VuZF9ldmVudCBjdHggPSBjdHguc2VuZF9ldmVudFxuXG4gIGxldCBhZnRlcl9yZWRyYXcgY3R4ID0gY3R4LmFmdGVyX3JlZHJhd1xuXG4gIGxldCByZWMgZmluZF9oYW5kbGVyIGN0eCB4ID0gZnVuY3Rpb25cbiAgICB8IFtdIC0+IGZhaWx3aXRoIFwiVmRvbV9ibGl0OiBubyBjdXN0b20gZWxlbWVudCBoYW5kbGVyIGZvdW5kXCJcbiAgICB8IGhkIDo6IHRsIC0+XG4gICAgICAgIGJlZ2luIG1hdGNoIGhkIGN0eCB4IHdpdGhcbiAgICAgICAgfCBTb21lIGYgLT4gZlxuICAgICAgICB8IE5vbmUgLT4gZmluZF9oYW5kbGVyIGN0eCB4IHRsXG4gICAgICAgIGVuZFxuXG4gIGxldCBsb29rdXAgfnByb2Nlc3NfY3VzdG9tIH5hZnRlcl9yZWRyYXcgZWx0IGhhbmRsZXJzID1cbiAgICBsZXQgcmVjIGRvbSA9IGxhenkgKChMYXp5LmZvcmNlIGVsKS5kb20pXG4gICAgYW5kIHNlbmRfZXZlbnQgZSA9IHByb2Nlc3NfY3VzdG9tIChMYXp5LmZvcmNlIGRvbSkgZVxuICAgIGFuZCBlbCA9IGxhenkgKGZpbmRfaGFuZGxlciB7c2VuZF9ldmVudDsgYWZ0ZXJfcmVkcmF3fSBlbHQgaGFuZGxlcnMpIGluXG4gICAgTGF6eS5mb3JjZSBlbFxuZW5kXG5cbigqIEF1dG8gc2Nyb2xsaW5nICopXG5cbmxldCByZWMgc2Nyb2xsX3BhcmVudCBub2RlID1cbiAgaWYgbm9kZSA9IEVsZW1lbnQubnVsbCB0aGVuXG4gICAgRG9jdW1lbnQuYm9keSBkb2N1bWVudFxuICBlbHNlXG4gICAgbGV0IG92ZXJmbG93X3kgPSBTdHlsZS5nZXQgKFdpbmRvdy5nZXRfY29tcHV0ZWRfc3R5bGUgd2luZG93IG5vZGUpIFwib3ZlcmZsb3dZXCIgaW5cbiAgICBsZXQgaXNfc2Nyb2xsYWJsZSA9IG92ZXJmbG93X3kgPD4gXCJ2aXNpYmxlXCIgJiYgb3ZlcmZsb3dfeSA8PiBcImhpZGRlblwiIGluXG4gICAgaWYgaXNfc2Nyb2xsYWJsZSAmJiBFbGVtZW50LnNjcm9sbF9oZWlnaHQgbm9kZSA+PSBFbGVtZW50LmNsaWVudF9oZWlnaHQgbm9kZSB0aGVuXG4gICAgICBub2RlXG4gICAgZWxzZVxuICAgICAgc2Nyb2xsX3BhcmVudCAoRWxlbWVudC5wYXJlbnRfbm9kZSBub2RlKVxuXG5sZXQgc2Nyb2xsX3RvX21ha2VfdmlzaWJsZSBjaGlsZCA9XG4gIGxldCBvcGVuIEpzX2Jyb3dzZXIgaW5cbiAgbGV0IHBhcmVudCA9IHNjcm9sbF9wYXJlbnQgY2hpbGQgaW5cbiAgbGV0IHJfcGFyZW50ID0gRWxlbWVudC5nZXRfYm91bmRpbmdfY2xpZW50X3JlY3QgcGFyZW50IGluXG4gIGxldCByX2NoaWxkID0gRWxlbWVudC5nZXRfYm91bmRpbmdfY2xpZW50X3JlY3QgY2hpbGQgaW5cbiAgbGV0IHkxID0gUmVjdC5ib3R0b20gcl9wYXJlbnQgYW5kIHkyID0gUmVjdC5ib3R0b20gcl9jaGlsZCBpblxuICBpZiB5MiA+IHkxIHRoZW5cbiAgICBFbGVtZW50LnNldF9zY3JvbGxfdG9wIHBhcmVudCAoRWxlbWVudC5zY3JvbGxfdG9wIHBhcmVudCArLiB5MiAtLiB5MSlcbiAgZWxzZVxuICAgIGxldCB5MSA9IFJlY3QudG9wIHJfcGFyZW50IGFuZCB5MiA9IFJlY3QudG9wIHJfY2hpbGQgaW5cbiAgICBpZiB5MiA8IHkxIHRoZW5cbiAgICAgIEVsZW1lbnQuc2V0X3Njcm9sbF90b3AgcGFyZW50IChFbGVtZW50LnNjcm9sbF90b3AgcGFyZW50ICsuIHkyIC0uIHkxKVxuXG4oKiBSZW5kZXJpbmcgKFZET00gLT4gRE9NKSAqKVxuXG5cbnR5cGUgJ21zZyBjdHJsID1cbiAgfCBCVGV4dCBvZiB7dmRvbTogJ21zZyB2ZG9tOyBkb206IEVsZW1lbnQudH1cbiAgfCBCRWxlbWVudCBvZiB7dmRvbTogJ21zZyB2ZG9tOyBkb206IEVsZW1lbnQudDsgY2hpbGRyZW46ICdtc2cgY3RybCBsaXN0fVxuICB8IEJNYXA6IHt2ZG9tOiAnbXNnIHZkb207IGRvbTogRWxlbWVudC50OyBmOiAoJ3N1Ym1zZyAtPiAnbXNnKTsgY2hpbGQ6ICdzdWJtc2cgY3RybH0gLT4gJ21zZyBjdHJsXG4gIHwgQk1lbW86IHt2ZG9tOiAnbXNnIHZkb207IGRvbTogRWxlbWVudC50OyBjaGlsZDogJ21zZyBjdHJsfSAtPiAnbXNnIGN0cmxcbiAgfCBCQ3VzdG9tIG9mIHt2ZG9tOiAnbXNnIHZkb207IGVsdDogQ3VzdG9tLnR9XG5cbmxldCBnZXRfZG9tID0gZnVuY3Rpb25cbiAgfCBCVGV4dCB4IC0+IHguZG9tXG4gIHwgQkVsZW1lbnQgeCAtPiB4LmRvbVxuICB8IEJNYXAgeCAtPiB4LmRvbVxuICB8IEJNZW1vIHggLT4geC5kb21cbiAgfCBCQ3VzdG9tIHggLT4geC5lbHQuZG9tXG5cbmxldCBnZXRfdmRvbSA9IGZ1bmN0aW9uXG4gIHwgQlRleHQgeCAtPiB4LnZkb21cbiAgfCBCRWxlbWVudCB4IC0+IHgudmRvbVxuICB8IEJNYXAgeCAtPiB4LnZkb21cbiAgfCBCTWVtbyB4IC0+IHgudmRvbVxuICB8IEJDdXN0b20geCAtPiB4LnZkb21cblxubGV0IGtleV9vZl92ZG9tID0gZnVuY3Rpb25cbiAgfCBUZXh0IHtrZXk7IF99XG4gIHwgRWxlbWVudCB7a2V5OyBffVxuICB8IE1hcCB7a2V5OyBffVxuICB8IE1lbW8ge2tleTsgX31cbiAgfCBDdXN0b20ge2tleTsgX30gLT5cbiAgICAgIGtleVxuXG5cbmxldCBldmFsX3Byb3AgPSBmdW5jdGlvblxuICB8IFN0cmluZyB4IC0+IE9qcy5zdHJpbmdfdG9fanMgeFxuICB8IEludCB4IC0+IE9qcy5pbnRfdG9fanMgeFxuICB8IEJvb2wgeCAtPiBPanMuYm9vbF90b19qcyB4XG4gIHwgRmxvYXQgeCAtPiBPanMuZmxvYXRfdG9fanMgeFxuXG5sZXQgc3RyaW5nX29mX3Byb3AgPSBmdW5jdGlvblxuICB8IFN0cmluZyBzIC0+IHNcbiAgfCBJbnQgeCAtPiBzdHJpbmdfb2ZfaW50IHhcbiAgfCBCb29sIHggLT4gc3RyaW5nX29mX2Jvb2wgeFxuICB8IEZsb2F0IHggLT4gc3RyaW5nX29mX2Zsb2F0IHhcblxubGV0IHNhbWVfcHJvcCB2MSB2MiA9XG4gIHYxID09IHYyIHx8XG4gIG1hdGNoIHYxLCB2MiB3aXRoXG4gIHwgU3RyaW5nIHgxLCBTdHJpbmcgeDIgLT4geDEgPSB4MlxuICB8IEludCB4MSwgSW50IHgyIC0+IHgxID0geDJcbiAgfCBCb29sIHgxLCBCb29sIHgyIC0+IHgxID0geDJcbiAgfCBGbG9hdCB4MSwgRmxvYXQgeDIgLT4geDEgPSB4MlxuICB8IF8gLT4gZmFsc2VcblxubGV0IGJtZW1vIHZkb20gY2hpbGQgPVxuICBCTWVtbyB7dmRvbTsgZG9tID0gZ2V0X2RvbSBjaGlsZDsgY2hpbGR9XG5cbmxldCBhc3luYyBmID1cbiAgaWdub3JlIChXaW5kb3cuc2V0X3RpbWVvdXQgd2luZG93IGYgMClcblxubGV0IGN1c3RvbV9hdHRyaWJ1dGUgZG9tID0gZnVuY3Rpb25cbiAgfCBcInNjcm9sbC10by1zaG93XCIgLT5cbiAgICAgIGFzeW5jXG4gICAgICAgIChmdW4gKCkgLT5cbiAgICAgICAgICAgdHJ5IHNjcm9sbF90b19tYWtlX3Zpc2libGUgZG9tXG4gICAgICAgICAgIHdpdGggZXhuIC0+IFByaW50Zi5wcmludGYgXCJzY3JvbGw6ICVzXFxuJSFcIiAoUHJpbnRleGMudG9fc3RyaW5nIGV4bilcbiAgICAgICAgKTtcbiAgICAgIHRydWVcblxuICB8IFwiYXV0b2ZvY3VzXCIgLT5cbiAgICAgIGFzeW5jIChmdW4gKCkgLT4gRWxlbWVudC5mb2N1cyBkb20pO1xuICAgICAgdHJ1ZVxuXG4gIHwgXCJyZWxhdGl2ZS1kcm9wZG93blwiIC0+XG4gICAgICBsZXQgc3R5bGUgPSBFbGVtZW50LnN0eWxlIGRvbSBpblxuICAgICAgU3R5bGUuc2V0X3Bvc2l0aW9uIChFbGVtZW50LnN0eWxlIGRvbSkgXCJhYnNvbHV0ZVwiO1xuICAgICAgbGV0IHB4ID0gUHJpbnRmLnNwcmludGYgXCIlZnB4XCIgaW5cbiAgICAgIGFzeW5jIChmdW4gKCkgLT5cbiAgICAgICAgICBtYXRjaCBFbGVtZW50Lm9mZnNldF9wYXJlbnQgZG9tIHdpdGhcbiAgICAgICAgICB8IE5vbmUgLT4gKClcbiAgICAgICAgICB8IFNvbWUgb2Zmc2V0X3BhcmVudCAtPlxuICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gRWxlbWVudC5wYXJlbnRfbm9kZSBkb20gaW5cbiAgICAgICAgICAgICAgbGV0IHJlY3QgPSBFbGVtZW50LmdldF9ib3VuZGluZ19jbGllbnRfcmVjdCBwYXJlbnQgaW5cbiAgICAgICAgICAgICAgbGV0IG9mZnNldF9yZWN0ID0gRWxlbWVudC5nZXRfYm91bmRpbmdfY2xpZW50X3JlY3Qgb2Zmc2V0X3BhcmVudCBpblxuICAgICAgICAgICAgICBsZXQgdG9wID0gUmVjdC50b3AgcmVjdCAtLiBSZWN0LnRvcCBvZmZzZXRfcmVjdCBpblxuICAgICAgICAgICAgICBsZXQgbGVmdCA9IFJlY3QubGVmdCByZWN0IC0uIFJlY3QubGVmdCBvZmZzZXRfcmVjdCBpblxuICAgICAgICAgICAgICBTdHlsZS5zZXRfdG9wIHN0eWxlIChweCAodG9wICsuIGZsb2F0IChFbGVtZW50Lm9mZnNldF9oZWlnaHQgcGFyZW50KSkpO1xuICAgICAgICAgICAgICBTdHlsZS5zZXRfbGVmdCBzdHlsZSAocHggbGVmdCk7XG4gICAgICAgICAgICAgIFN0eWxlLnNldF93aWR0aCBzdHlsZSAocHggKGZsb2F0IChFbGVtZW50Lm9mZnNldF93aWR0aCBwYXJlbnQpKSlcbiAgICAgICAgKTtcbiAgICAgIHRydWVcblxuICB8IF8gLT4gZmFsc2VcblxuXG5cbmxldCBhcHBseV9hdHRyaWJ1dGVzIGRvbSBhdHRyaWJ1dGVzID1cbiAgTGlzdC5pdGVyXG4gICAgKGZ1bmN0aW9uXG4gICAgICB8IFByb3BlcnR5IChrLCB2KSAtPlxuICAgICAgICAgIGlmIG5vdCAoY3VzdG9tX2F0dHJpYnV0ZSBkb20gaykgdGhlblxuICAgICAgICAgICAgT2pzLnNldCAoRWxlbWVudC50X3RvX2pzIGRvbSkgayAoZXZhbF9wcm9wIHYpXG5cbiAgICAgIHwgU3R5bGUgKGssIHYpIC0+XG4gICAgICAgICAgT2pzLnNldFxuICAgICAgICAgICAgKE9qcy5nZXQgKEVsZW1lbnQudF90b19qcyBkb20pIFwic3R5bGVcIilcbiAgICAgICAgICAgIGtcbiAgICAgICAgICAgIChPanMuc3RyaW5nX3RvX2pzIHYpXG5cbiAgICAgIHwgQXR0cmlidXRlIChrLCB2KSAtPlxuICAgICAgICAgIEVsZW1lbnQuc2V0X2F0dHJpYnV0ZSBkb20gayB2XG5cbiAgICAgIHwgXyAtPiAoKVxuICAgIClcbiAgICBhdHRyaWJ1dGVzXG5cbnR5cGUgY3R4ID1cbiAge1xuICAgIHByb2Nlc3NfY3VzdG9tOiAoRWxlbWVudC50IC0+IGV2ZW50IC0+IHVuaXQpO1xuICAgIGN1c3RvbV9oYW5kbGVyczogQ3VzdG9tLmhhbmRsZXIgbGlzdDtcbiAgICBhZnRlcl9yZWRyYXc6ICgodW5pdCAtPiB1bml0KSAtPiB1bml0KTtcbiAgfVxuXG5sZXQgcmVjIGJsaXQgOiB0eXBlIG1zZy4gY3R4IC0+IG1zZyB2ZG9tIC0+IG1zZyBjdHJsID0gZnVuIGN0eCB2ZG9tIC0+XG4gIG1hdGNoIHZkb20gd2l0aFxuICB8IFRleHQge3R4dDsga2V5ID0gX30gLT5cbiAgICAgIEJUZXh0IHt2ZG9tOyBkb20gPSBEb2N1bWVudC5jcmVhdGVfdGV4dF9ub2RlIGRvY3VtZW50IHR4dH1cblxuICB8IE1hcCB7ZjsgY2hpbGQ7IGtleSA9IF99IC0+XG4gICAgICBsZXQgY2hpbGQgPSBibGl0IGN0eCBjaGlsZCBpblxuICAgICAgQk1hcCB7dmRvbTsgZG9tID0gZ2V0X2RvbSBjaGlsZDsgZjsgY2hpbGR9XG5cbiAgfCBNZW1vIHtmOyBhcmc7IGtleSA9IF99IC0+XG4gICAgICBibWVtbyB2ZG9tIChibGl0IGN0eCAoZiBhcmcpKVxuXG4gIHwgQ3VzdG9tIHtlbHQ7IGF0dHJpYnV0ZXM7IGtleSA9IF99IC0+XG4gICAgICBsZXQgZWx0ID1cbiAgICAgICAgdHJ5IEN1c3RvbS5sb29rdXAgfnByb2Nlc3NfY3VzdG9tOmN0eC5wcm9jZXNzX2N1c3RvbSB+YWZ0ZXJfcmVkcmF3OmN0eC5hZnRlcl9yZWRyYXcgZWx0IGN0eC5jdXN0b21faGFuZGxlcnNcbiAgICAgICAgd2l0aCBleG4gLT5cbiAgICAgICAgICBQcmludGYucHJpbnRmIFwiRXJyb3IgZHVyaW5nIHZkb20gQ3VzdG9tICVzIGxvb2t1cDogJXNcXG4lIVwiXG4gICAgICAgICAgICAoT2JqLkV4dGVuc2lvbl9jb25zdHJ1Y3Rvci5uYW1lIChPYmouRXh0ZW5zaW9uX2NvbnN0cnVjdG9yLm9mX3ZhbCBlbHQpKVxuICAgICAgICAgICAgKFByaW50ZXhjLnRvX3N0cmluZyBleG4pO1xuICAgICAgICAgIHJhaXNlIGV4blxuICAgICAgaW5cbiAgICAgIGFwcGx5X2F0dHJpYnV0ZXMgZWx0LmRvbSBhdHRyaWJ1dGVzO1xuICAgICAgQkN1c3RvbSB7dmRvbTsgZWx0fVxuXG4gIHwgRWxlbWVudCB7bnM7IHRhZzsgY2hpbGRyZW47IGF0dHJpYnV0ZXM7IGtleSA9IF99IC0+XG4gICAgICBpZiBkZWJ1ZyB0aGVuIFByaW50Zi5wcmludGYgXCJjcmVhdGUgPCVzPlxcbiUhXCIgdGFnO1xuICAgICAgbGV0IGRvbSA9XG4gICAgICAgIGlmIG5zID0gXCJcIiB0aGVuIERvY3VtZW50LmNyZWF0ZV9lbGVtZW50IGRvY3VtZW50IHRhZ1xuICAgICAgICBlbHNlIERvY3VtZW50LmNyZWF0ZV9lbGVtZW50X25zIGRvY3VtZW50IG5zIHRhZ1xuICAgICAgaW5cbiAgICAgIGxldCBjaGlsZHJlbiA9IExpc3QubWFwIChibGl0IGN0eCkgY2hpbGRyZW4gaW5cbiAgICAgIExpc3QuaXRlciAoZnVuIGMgLT4gRWxlbWVudC5hcHBlbmRfY2hpbGQgZG9tIChnZXRfZG9tIGMpKSBjaGlsZHJlbjtcbiAgICAgIGFwcGx5X2F0dHJpYnV0ZXMgZG9tIGF0dHJpYnV0ZXM7XG4gICAgICBCRWxlbWVudCB7dmRvbTsgZG9tOyBjaGlsZHJlbn1cblxubGV0IGJsaXQgY3R4IHZkb20gPVxuICB0cnkgYmxpdCBjdHggdmRvbVxuICB3aXRoIGV4biAtPlxuICAgIFByaW50Zi5wcmludGYgXCJFcnJvciBkdXJpbmcgdmRvbSBibGl0OiAlc1xcbiUhXCIgKFByaW50ZXhjLnRvX3N0cmluZyBleG4pO1xuICAgIHJhaXNlIGV4blxuXG5sZXQgc3luY19wcm9wcyB0b19zdHJpbmcgc2FtZSBzZXQgY2xlYXIgbDEgbDIgPVxuICBsZXQgc29ydCA9IExpc3Quc29ydCAoZnVuIChrMSwgXykgKGsyLCBfKSAtPiBjb21wYXJlIChrMTpzdHJpbmcpIGsyKSBpblxuICBsZXQgbDEgPSBzb3J0IGwxIGFuZCBsMiA9IHNvcnQgbDIgaW5cbiAgbGV0IHJlYyBsb29wIGwxIGwyID1cbiAgICBtYXRjaCBsMSwgbDIgd2l0aFxuICAgIHwgW10sIFtdIC0+ICgpXG5cbiAgICB8IChrMSwgdjEpIDo6IHRsMSwgKGsyLCBfKSA6OiBfIHdoZW4gazEgPCBrMiAtPlxuICAgICAgICBpZiBkZWJ1ZyB0aGVuIFByaW50Zi5wcmludGYgXCJQcm9wZXJ0eSAlcyB1bnNldCAlcyA9PlxcbiUhXCIgazEgKHRvX3N0cmluZyB2MSk7XG4gICAgICAgIGNsZWFyIGsxO1xuICAgICAgICBsb29wIHRsMSBsMlxuICAgIHwgKGsxLCB2MSkgOjogdGwxLCBbXSAtPlxuICAgICAgICBpZiBkZWJ1ZyB0aGVuIFByaW50Zi5wcmludGYgXCJQcm9wZXJ0eSAlcyB1bnNldCAlcyA9PlxcbiUhXCIgazEgKHRvX3N0cmluZyB2MSk7XG4gICAgICAgIGNsZWFyIGsxO1xuICAgICAgICBsb29wIHRsMSBbXVxuXG4gICAgfCAoazEsIF8pIDo6IF8sIChrMiwgdjIpIDo6IHRsMiB3aGVuIGsyIDwgazEgLT5cbiAgICAgICAgaWYgZGVidWcgdGhlbiBQcmludGYucHJpbnRmIFwiUHJvcGVydHkgJXMgc2V0ID0+ICVzXFxuJSFcIiBrMiAodG9fc3RyaW5nIHYyKTtcbiAgICAgICAgc2V0IGsyIHYyO1xuICAgICAgICBsb29wIGwxIHRsMlxuICAgIHwgW10sIChrMiwgdjIpIDo6IHRsMiAtPlxuICAgICAgICBpZiBkZWJ1ZyB0aGVuIFByaW50Zi5wcmludGYgXCJQcm9wZXJ0eSAlcyBzZXQgPT4gJXNcXG4lIVwiIGsyICh0b19zdHJpbmcgdjIpO1xuICAgICAgICBzZXQgazIgdjI7XG4gICAgICAgIGxvb3AgW10gdGwyXG5cbiAgICB8IChfazEsIHYxKSA6OiB0bDEsIChrMiwgdjIpIDo6IHRsMiAtPlxuICAgICAgICAoKiBrMSA9IGsyICopXG4gICAgICAgIGlmIG5vdCAoc2FtZSB2MSB2MikgdGhlbiBiZWdpblxuICAgICAgICAgIGlmIGRlYnVnIHRoZW4gUHJpbnRmLnByaW50ZiBcIlByb3BlcnR5ICVzIGNoYW5nZWQgJXMgPT4gJXNcXG4lIVwiIGsyICh0b19zdHJpbmcgdjEpICh0b19zdHJpbmcgdjIpO1xuICAgICAgICAgIHNldCBrMiB2MjtcbiAgICAgICAgZW5kO1xuICAgICAgICBsb29wIHRsMSB0bDJcbiAgaW5cbiAgbG9vcCBsMSBsMlxuXG5cbmxldCByZWMgY2hvb3NlIGYgPSBmdW5jdGlvblxuICB8IFtdIC0+IFtdXG4gIHwgaGQgOjogdGwgLT5cbiAgICAgIG1hdGNoIGYgaGQgd2l0aFxuICAgICAgfCBOb25lIC0+IGNob29zZSBmIHRsXG4gICAgICB8IFNvbWUgeCAtPiB4IDo6IGNob29zZSBmIHRsXG5cbmxldCBqc19lbXB0eV9zdHJpbmcgPVxuICBPanMuc3RyaW5nX3RvX2pzIFwiXCJcblxubGV0IHN5bmNfYXR0cmlidXRlcyBkb20gYTEgYTIgPVxuICBsZXQgcHJvcHMgPSBmdW5jdGlvbiBQcm9wZXJ0eSAoaywgdikgLT4gU29tZSAoaywgdikgfCBTdHlsZSBfIHwgSGFuZGxlciBfIHwgQXR0cmlidXRlIF8gLT4gTm9uZSBpblxuICBsZXQgc2V0IGsgdiA9XG4gICAgbWF0Y2ggaywgdiB3aXRoXG4gICAgfCBcInZhbHVlXCIsIFN0cmluZyBzIHdoZW4gcyA9IEVsZW1lbnQudmFsdWUgZG9tIC0+ICgpXG4gICAgfCBfIC0+XG4gICAgICAgIGlmIG5vdCAoY3VzdG9tX2F0dHJpYnV0ZSBkb20gaykgdGhlblxuICAgICAgICAgIE9qcy5zZXQgKEVsZW1lbnQudF90b19qcyBkb20pIGsgKGV2YWxfcHJvcCB2KVxuICBpblxuICBsZXQgY2xlYXIgayA9IE9qcy5zZXQgKEVsZW1lbnQudF90b19qcyBkb20pIGsgT2pzLm51bGwgaW5cbiAgc3luY19wcm9wc1xuICAgIHN0cmluZ19vZl9wcm9wXG4gICAgc2FtZV9wcm9wXG4gICAgc2V0IGNsZWFyXG4gICAgKGNob29zZSBwcm9wcyBhMSlcbiAgICAoY2hvb3NlIHByb3BzIGEyKTtcblxuICBsZXQgc3R5bGVzID0gZnVuY3Rpb24gU3R5bGUgKGssIHYpIC0+IFNvbWUgKGssIFN0cmluZyB2KSB8IFByb3BlcnR5IF8gfCBIYW5kbGVyIF8gfCBBdHRyaWJ1dGUgXyAtPiBOb25lIGluXG4gIGxldCBzZXQgayB2ID0gT2pzLnNldCAoT2pzLmdldCAoRWxlbWVudC50X3RvX2pzIGRvbSkgXCJzdHlsZVwiKSBrIChldmFsX3Byb3AgdikgaW5cbiAgbGV0IGNsZWFyIGsgPSBPanMuc2V0IChPanMuZ2V0IChFbGVtZW50LnRfdG9fanMgZG9tKSBcInN0eWxlXCIpIGsganNfZW1wdHlfc3RyaW5nIGluXG4gIHN5bmNfcHJvcHNcbiAgICBzdHJpbmdfb2ZfcHJvcFxuICAgIHNhbWVfcHJvcFxuICAgIHNldCBjbGVhclxuICAgIChjaG9vc2Ugc3R5bGVzIGExKVxuICAgIChjaG9vc2Ugc3R5bGVzIGEyKTtcblxuICBsZXQgYXR0cnMgPSBmdW5jdGlvbiBBdHRyaWJ1dGUgKGssIHYpIC0+IFNvbWUgKGssIHYpIHwgU3R5bGUgXyB8IFByb3BlcnR5IF8gfCBIYW5kbGVyIF8gLT4gTm9uZSBpblxuICBsZXQgc2V0IGsgdiA9IEVsZW1lbnQuc2V0X2F0dHJpYnV0ZSBkb20gayB2IGluXG4gIGxldCBjbGVhciBrID0gRWxlbWVudC5yZW1vdmVfYXR0cmlidXRlIGRvbSBrIGluXG4gIHN5bmNfcHJvcHNcbiAgICBGdW4uaWRcbiAgICAoZnVuIChzMTogc3RyaW5nKSBzMiAtPiBzMSA9IHMyKVxuICAgIHNldCBjbGVhclxuICAgIChjaG9vc2UgYXR0cnMgYTEpXG4gICAgKGNob29zZSBhdHRycyBhMilcblxubGV0IHJlYyBzeW5jIDogdHlwZSBvbGRfbXNnIG1zZy4gY3R4IC0+IEVsZW1lbnQudCAtPiBvbGRfbXNnIGN0cmwgLT4gbXNnIHZkb20gLT4gbXNnIGN0cmwgPVxuICBmdW4gY3R4IHBhcmVudCBvbGQgdmRvbSAtPlxuXG4gIG1hdGNoIG9sZCwgdmRvbSB3aXRoXG4gIHwgXyB3aGVuICh2ZG9tIDogbXNnIHZkb20pID09IChPYmoubWFnaWMgKGdldF92ZG9tIG9sZCA6IG9sZF9tc2cgdmRvbSkpIC0+XG4gICAgICAoKiBJZiBvbGQgYW5kIG5ldyB2ZG9tIGFyZSBwaHlzaWNhbGx5IGlkZW50aWNhbCwgaXQgaXMgc2FmZSB0byByZXVzZSB0aGUgb2xkIGN0cmwuICopXG4gICAgICAoT2JqLm1hZ2ljIChvbGQgOiBvbGRfbXNnIGN0cmwpIDogbXNnIGN0cmwpXG4gIHwgQlRleHQge3Zkb20gPSBUZXh0IHt0eHQgPSBzMTsga2V5ID0gX307IGRvbX0sIFRleHQge3R4dCA9IHMyOyBrZXkgPSBffSAtPlxuICAgICAgaWYgczEgPD4gczIgdGhlbiBFbGVtZW50LnNldF9ub2RlX3ZhbHVlIGRvbSBzMjtcbiAgICAgIEJUZXh0IHt2ZG9tOyBkb219XG5cbiAgfCBCTWFwIHtjaGlsZCA9IGMxOyBffSwgTWFwIHtmOyBjaGlsZCA9IGMyOyBrZXkgPSBffSAtPlxuICAgICAgbGV0IGNoaWxkID0gc3luYyBjdHggcGFyZW50IGMxIGMyIGluXG4gICAgICBCTWFwIHt2ZG9tOyBkb20gPSBnZXRfZG9tIGNoaWxkOyBjaGlsZDsgZn1cblxuICB8IEJNZW1vIHtjaGlsZCA9IGMxOyB2ZG9tID0gTWVtbyB7ZiA9IGYxOyBhcmcgPSBhMTsga2V5ID0gX307IF99LCBNZW1vIHtmID0gZjI7IGFyZyA9IGEyOyBrZXkgPSBffSAtPlxuICAgICAgKCogSXMgdGhpcyBzYWZlICE/ICopXG4gICAgICBpZiBPYmoubWFnaWMgZjEgPT0gZjIgJiYgT2JqLm1hZ2ljIGExID09IGEyIHRoZW5cbiAgICAgICAgYm1lbW8gdmRvbSAoT2JqLm1hZ2ljIChjMSA6IG9sZF9tc2cgY3RybCkgOiBtc2cgY3RybClcbiAgICAgIGVsc2VcbiAgICAgICAgYm1lbW8gdmRvbSAoc3luYyBjdHggcGFyZW50IGMxIChmMiBhMikpXG5cbiAgfCBCQ3VzdG9tIHt2ZG9tID0gQ3VzdG9tIHtrZXk9a2V5MTsgZWx0PWFyZzE7IGF0dHJpYnV0ZXM9YTF9OyBlbHR9LCBDdXN0b20ge2tleT1rZXkyOyBlbHQ9YXJnMjsgYXR0cmlidXRlcz1hMn1cbiAgICB3aGVuIGtleTEgPSBrZXkyICYmIChhcmcxID09IGFyZzIgfHwgZWx0LnN5bmMgYXJnMikgLT5cbiAgICAgIHN5bmNfYXR0cmlidXRlcyBlbHQuZG9tIGExIGEyO1xuICAgICAgQkN1c3RvbSB7dmRvbTsgZWx0fVxuXG4gIHwgQkVsZW1lbnQge3Zkb20gPSBFbGVtZW50IGUxOyBkb207IGNoaWxkcmVufSwgRWxlbWVudCBlMiB3aGVuIGUxLnRhZyA9IGUyLnRhZyAmJiBlMS5ucyA9IGUyLm5zICYmIGUxLmtleSA9IGUyLmtleSAtPlxuXG4gICAgICAoKiBUT0RPOlxuICAgICAgICAgLSBhZGQgYSBmYXN0LXBhdGggdG8gZGVhbCB3aXRoIHByZWZpeGVzIGFuZCBzdWZmaXhlcyBvZiBvbGQvbmV3IGNoaWxkcmVuIHdpdGggaWRlbnRpY2FsXG4gICAgICAgICAgIGtleXMsIGF2b2lkaW5nIGEgbG90IG9mIGFsbG9jYXRpb25zLlxuICAgICAgICAgLSB1c2UgYSBKUyBvYmplY3QgKG1hcCkgaW5zdGVhZCBvZiBhbiBPQ2FtbCBIYXNodGJsP1xuICAgICAgKilcblxuICAgICAgKCogc3luY2hyb25pemUgY2hpbGRyZW4gKilcblxuICAgICAgbGV0IG9sZF9jaGlsZHJlbiA9IEFycmF5Lm9mX2xpc3QgY2hpbGRyZW4gaW5cbiAgICAgIGxldCBuZXdfY2hpbGRyZW4gPSBBcnJheS5vZl9saXN0IGUyLmNoaWxkcmVuIGluXG5cbiAgICAgICgqIGZvciBlYWNoIGtleSwgZ2V0IGEgbGlzdCBvZiBpbmRpY2VzIGluIG9sZF9jaGlsZHJlbiAqKVxuICAgICAgbGV0IGJ5X2tleSA9IEhhc2h0YmwuY3JlYXRlIDggaW5cbiAgICAgIGZvciBpID0gQXJyYXkubGVuZ3RoIG9sZF9jaGlsZHJlbiAtIDEgZG93bnRvIDAgZG9cbiAgICAgICAgbGV0IGsgPSBrZXlfb2ZfdmRvbSAoZ2V0X3Zkb20gb2xkX2NoaWxkcmVuLihpKSkgaW5cbiAgICAgICAgSGFzaHRibC5hZGQgYnlfa2V5IGsgaVxuICAgICAgICAoKiBlYXJseSBlbGVtZW50cyBhcmUgaW5zZXJ0ZWQgbGFzdDogZm91bmQgZmlyc3QhICopXG4gICAgICBkb25lO1xuXG4gICAgICAoKiBidWlsZCBhbiBhcnJheSB0ZWxsaW5nIHVzLCBmb3IgZWFjaCBwb3NpdGlvbiBpbiB0aGUgXCJuZXdcIiBzZXF1ZW5jZSxcbiAgICAgICAgIHdoZXJlIHRvIHBpY2sgaXQgZnJvbSB0aGUgXCJvbGRcIiBzZXF1ZW5jZS4gKilcbiAgICAgIGxldCBpbmRpY2VzID0gQXJyYXkubWFrZSAoQXJyYXkubGVuZ3RoIG5ld19jaGlsZHJlbikgKC0xKSBpblxuICAgICAgZm9yIGkgPSAwIHRvIEFycmF5Lmxlbmd0aCBpbmRpY2VzIC0gMSBkb1xuICAgICAgICBsZXQgayA9IGtleV9vZl92ZG9tIG5ld19jaGlsZHJlbi4oaSkgaW5cbiAgICAgICAgbWF0Y2ggSGFzaHRibC5maW5kIGJ5X2tleSBrIHdpdGhcbiAgICAgICAgfCBleGNlcHRpb24gTm90X2ZvdW5kIC0+ICgpICgqIGtlZXAgKC0xKSA9PSBuZWVkIHRvIGJ1aWxkIGZyb20gc2NyYXRjaCAqKVxuICAgICAgICB8IGlkeCAtPlxuICAgICAgICAgICAgaW5kaWNlcy4oaSkgPC0gaWR4O1xuICAgICAgICAgICAgSGFzaHRibC5yZW1vdmUgYnlfa2V5IGs7XG4gICAgICBkb25lO1xuXG4gICAgICBIYXNodGJsLml0ZXJcbiAgICAgICAgKGZ1biBfIGkgLT5cbiAgICAgICAgICAgaWYgZGVidWcgdGhlbiBQcmludGYucHJpbnRmIFwicmVtb3ZlICVpXFxuJSFcIiBpO1xuICAgICAgICAgICBFbGVtZW50LnJlbW92ZV9jaGlsZCBkb20gKGdldF9kb20gb2xkX2NoaWxkcmVuLihpKSk7XG4gICAgICAgIClcbiAgICAgICAgYnlfa2V5O1xuXG4gICAgICAoKiBwcm9kdWNlIHRoZSBuZXcgc2VxdWVuY2UsIGZyb20gcmlnaHQtdG8tbGVmdCwgY3JlYXRpbmcgYW5kIHBpY2tpbmcrc3luY2luYyBub2RlcyAqKVxuICAgICAgbGV0IGN0cmxzID0gcmVmIFtdIGluXG4gICAgICBsZXQgbmV4dCA9IHJlZiAoRWxlbWVudC50X29mX2pzIE9qcy5udWxsKSBpblxuICAgICAgZm9yIGkgPSBBcnJheS5sZW5ndGggbmV3X2NoaWxkcmVuIC0gMSBkb3dudG8gMCBkb1xuICAgICAgICBsZXQgaWR4ID0gaW5kaWNlcy4oaSkgaW5cbiAgICAgICAgaWYgZGVidWcgdGhlbiBQcmludGYucHJpbnRmIFwib2xkID0gJWk7IG5ldyA9ICVpOiBcIiBpZHggaTtcbiAgICAgICAgbGV0IGMgPVxuICAgICAgICAgIGlmIGlkeCA8IDAgdGhlbiBiZWdpblxuICAgICAgICAgICAgKCogY3JlYXRlICopXG4gICAgICAgICAgICBpZiBkZWJ1ZyB0aGVuIFByaW50Zi5wcmludGYgXCJjcmVhdGVcXG4lIVwiO1xuICAgICAgICAgICAgYmxpdCBjdHggbmV3X2NoaWxkcmVuLihpKVxuICAgICAgICAgIGVuZFxuICAgICAgICAgIGVsc2UgYmVnaW5cbiAgICAgICAgICAgIGlmIGRlYnVnIHRoZW4gUHJpbnRmLnByaW50ZiBcInN5bmMmbW92ZVxcbiUhXCI7XG4gICAgICAgICAgICAoKiBub3RlOiB0aGUgc3luYyBjb3VsZCBsZWFkIHRvIGEgRE9NIHJlcGxhY2UsXG4gICAgICAgICAgICAgICBmb2xsb3dpbmcgYnkgYSBtb3ZlIGJlbG93OyBpbiB0aGF0IGNhc2UsXG4gICAgICAgICAgICAgICBvbmUgc2hvdWxkIGp1c3QgZGVsZXRlIG9sZCArIGluc2VydCBuZXcgKilcbiAgICAgICAgICAgIHN5bmMgY3R4IGRvbSBvbGRfY2hpbGRyZW4uKGlkeCkgbmV3X2NoaWxkcmVuLihpKVxuICAgICAgICAgIGVuZFxuICAgICAgICBpblxuICAgICAgICAoKiB3aGVuIG5leHQgPT0gbnVsbCwgaW5zZXJ0IGF0IHRoZSBlbmQgKilcblxuICAgICAgICAoKiBXZSB0cnkgdG8gYXZvaWQgdXNlbGVzcyBtb3ZlcyBhcyBtdWNoIGFzIHBvc3NpYmxlLCBub3Qgb25seSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uLFxuICAgICAgICAgICBidXQgYWxzbyBiZWNhdXNlIGl0IGNhdXNlcyB0aGUgbG9zcyBvZiBmb2N1cyBvbiBpbnB1dCBmaWVsZHMuXG5cbiAgICAgICAgICAgU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2luY3JlbWVudGFsLWRvbS9pc3N1ZXMvMjM3XG5cbiAgICAgICAgICAgQmV0dGVyIHNvbHV0aW9uczpcbiAgICAgICAgICAgLSBSZXN0b3JlIHRoZSBmb2N1cyBhZnRlciB0aGUgZW50aXJlIHN5bmNocm9uaXphdGlvbiAoUmVhY3Qgc2VlbXMgdG8gZG8gdGhhdCkuXG4gICAgICAgICAgIC0gTmV2ZXIgbW92ZSBhIGZvY3VzZWQgd2lkZ2V0IG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzIChyZXF1aXJlIGEgbGVzcyByZWd1bGFyXG4gICAgICAgICAgICAgYWxnb3JpdGhtIHRvIGFwcGx5IHRoZSBkZXNpcmVkIHBlcm11dGF0aW9uKS5cbiAgICAgICAgKilcblxuICAgICAgICBsZXQgbW92ZSA9XG4gICAgICAgICAgaWR4IDwgMCB8fFxuICAgICAgICAgICgoaWYgaSA9IEFycmF5Lmxlbmd0aCBuZXdfY2hpbGRyZW4gLSAxIHRoZW4gaWR4IDw+IEFycmF5Lmxlbmd0aCBvbGRfY2hpbGRyZW4gLSAxXG4gICAgICAgICAgICBlbHNlIGluZGljZXMuKGkgKyAxKSA8PiBpZHggKyAxKVxuICAgICAgICAgICAmJiBFbGVtZW50Lm5leHRfc2libGluZyAoZ2V0X2RvbSBjKSAhPSAhbmV4dCkgKCogY291bGQgYXZvaWQgcmVhZGluZyBmcm9tIHRoZSBET00uLi4gKilcbiAgICAgICAgaW5cbiAgICAgICAgaWYgbW92ZSB0aGVuIGJlZ2luXG4gICAgICAgICAgaWYgZGVidWcgdGhlbiBQcmludGYucHJpbnRmIFwicmVhbGx5IG1vdmVcXG4lIVwiO1xuICAgICAgICAgIEVsZW1lbnQuaW5zZXJ0X2JlZm9yZSBkb20gKGdldF9kb20gYykgIW5leHQ7XG4gICAgICAgIGVuZDtcbiAgICAgICAgbmV4dCA6PSBnZXRfZG9tIGM7XG4gICAgICAgIGN0cmxzIDo9IGMgOjogIWN0cmxzXG4gICAgICBkb25lO1xuXG4gICAgICBsZXQgY2hpbGRyZW4gPSAhY3RybHMgaW5cblxuICAgICAgKCogc3luY2hyb25pemUgcHJvcGVydGllcyAmIHN0eWxlcyAqKVxuICAgICAgc3luY19hdHRyaWJ1dGVzIGRvbSBlMS5hdHRyaWJ1dGVzIGUyLmF0dHJpYnV0ZXM7XG4gICAgICBCRWxlbWVudCB7dmRvbTsgZG9tOyBjaGlsZHJlbn1cblxuICB8IF8gLT5cbiAgICAgIGxldCB4ID0gYmxpdCBjdHggdmRvbSBpblxuICAgICAgRWxlbWVudC5yZXBsYWNlX2NoaWxkIHBhcmVudCAoZ2V0X2RvbSB4KSAoZ2V0X2RvbSBvbGQpO1xuICAgICAgeFxuXG5sZXQgc3luYyBjdHggcGFyZW50IG9sZCB2ZG9tID1cbiAgdHJ5IHN5bmMgY3R4IHBhcmVudCBvbGQgdmRvbVxuICB3aXRoIGV4biAtPlxuICAgIFByaW50Zi5wcmludGYgXCJFcnJvciBkdXJpbmcgdmRvbSBzeW5jOiAlc1xcbiUhXCIgKFByaW50ZXhjLnRvX3N0cmluZyBleG4pO1xuICAgIHJhaXNlIGV4blxuXG50eXBlICdtc2cgZmluZCA9XG4gIHwgTm90Rm91bmRcbiAgfCBGb3VuZDoge21hcHBlcjogKCdpbm5lcl9tc2cgLT4gJ21zZyk7IGlubmVyOiAnaW5uZXJfbXNnIGN0cmw7IHBhcmVudDogJ21zZyBmaW5kfSAtPiAnbXNnIGZpbmRcblxubGV0IHJlYyBmb3VuZDogdHlwZSBpbm5lcl9tc2cgbXNnLiAoaW5uZXJfbXNnIC0+IG1zZykgLT4gbXNnIGZpbmQgLT4gaW5uZXJfbXNnIGN0cmwgLT4gbXNnIGZpbmQgPSBmdW4gbWFwcGVyIHBhcmVudCAtPiBmdW5jdGlvblxuICB8IEJFbGVtZW50IF8gfCBCVGV4dCBfIHwgQkN1c3RvbSBfIGFzIGlubmVyIC0+IEZvdW5kIHttYXBwZXI7IGlubmVyOyBwYXJlbnR9XG4gIHwgQk1hcCB7ZjsgY2hpbGQ7IF99IC0+IGZvdW5kIChmdW4geCAtPiBtYXBwZXIgKGYgeCkpIHBhcmVudCBjaGlsZFxuICB8IEJNZW1vIHtjaGlsZDsgX30gLT4gZm91bmQgbWFwcGVyIHBhcmVudCBjaGlsZFxuXG4oKiBGaW5kIGEgY3RybCBhc3NvY2lhdGVkIHRvIGEgRE9NIGVsZW1lbnQuXG4gICBOb3JtYWxpemUgYnkgdHJhdmVyc2luZyBNYXAgbm9kZSwgYW5kIGFsc28gcmV0dXJuIHRoZSBjb21wb3NpdGlvbiBvZiBhbGwgc3VjaCBtYXBwZXJzXG4gICBmcm9tIHRoZSByb290IHRvIHRoZSBjdHJsLiAqKVxuXG5sZXQgcmVjIHZkb21fb2ZfZG9tOiB0eXBlIG1zZy4gbXNnIGN0cmwgLT4gRWxlbWVudC50IC0+IG1zZyBmaW5kID0gZnVuIHJvb3QgZG9tIC0+XG4gICgqIGhhY2sgdG8gY2hlY2sgZG9tID09IG51bGw/ICAgU2hvdWxkIG1vdmUgdGhhdCB0byBPanMuICopXG4gIG1hdGNoIE9qcy5vcHRpb25fb2ZfanMgRWxlbWVudC50X29mX2pzIChFbGVtZW50LnRfdG9fanMgZG9tKSB3aXRoXG4gIHwgTm9uZSAtPiBOb3RGb3VuZFxuICB8IFNvbWUgZG9tIHdoZW4gZG9tID09IGdldF9kb20gcm9vdCAtPlxuICAgICAgZm91bmQgRnVuLmlkIE5vdEZvdW5kIHJvb3RcbiAgfCBTb21lIGRvbSAtPlxuICAgICAgYmVnaW4gbWF0Y2ggdmRvbV9vZl9kb20gcm9vdCAoRWxlbWVudC5wYXJlbnRfbm9kZSBkb20pIHdpdGhcbiAgICAgIHwgTm90Rm91bmQgLT4gTm90Rm91bmRcbiAgICAgIHwgRm91bmQge21hcHBlcjsgaW5uZXIgPSBCRWxlbWVudCB7Y2hpbGRyZW47IF99OyBffSBhcyBwYXJlbnQgLT5cbiAgICAgICAgICBiZWdpbiBtYXRjaCBMaXN0LmZpbmQgKGZ1biBjIC0+IGdldF9kb20gYyA9PSBkb20pIGNoaWxkcmVuIHdpdGhcbiAgICAgICAgICB8IGV4Y2VwdGlvbiBOb3RfZm91bmQgLT4gYXNzZXJ0IGZhbHNlXG4gICAgICAgICAgfCBjIC0+IGZvdW5kIG1hcHBlciBwYXJlbnQgY1xuICAgICAgICAgIGVuZFxuICAgICAgfCBGb3VuZCB7bWFwcGVyID0gXzsgaW5uZXIgPSBCQ3VzdG9tIF87IF99IC0+XG4gICAgICAgICAgTm90Rm91bmRcbiAgICAgIHwgXyAtPiBhc3NlcnQgZmFsc2VcbiAgICAgIGVuZFxuXG5sZXQgbW91c2VfZXZlbnQgZSA9XG4gIHtcbiAgICB4ID0gRXZlbnQuY2xpZW50X3ggZTtcbiAgICB5ID0gRXZlbnQuY2xpZW50X3kgZTtcbiAgICBwYWdlX3ggPSBFdmVudC5wYWdlX3ggZTtcbiAgICBwYWdlX3kgPSBFdmVudC5wYWdlX3kgZTtcbiAgICBidXR0b25zID0gRXZlbnQuYnV0dG9ucyBlO1xuICAgIGFsdF9rZXkgPSBFdmVudC5hbHRfa2V5IGU7XG4gICAgY3RybF9rZXkgPSBFdmVudC5jdHJsX2tleSBlO1xuICAgIHNoaWZ0X2tleSA9IEV2ZW50LnNoaWZ0X2tleSBlO1xuICB9XG5cbmxldCBrZXlfZXZlbnQgZSA9XG4gIHtcbiAgICB3aGljaCA9IEV2ZW50LndoaWNoIGU7XG4gICAgYWx0X2tleSA9IEV2ZW50LmFsdF9rZXkgZTtcbiAgICBjdHJsX2tleSA9IEV2ZW50LmN0cmxfa2V5IGU7XG4gICAgc2hpZnRfa2V5ID0gRXZlbnQuc2hpZnRfa2V5IGU7XG4gIH1cblxudHlwZSAoJ21vZGVsLCAnbXNnKSBhcHAgPSB7XG4gIGRvbTogSnNfYnJvd3Nlci5FbGVtZW50LnQ7XG4gIHByb2Nlc3M6ICgnbXNnIC0+IHVuaXQpO1xuICBnZXQ6ICh1bml0IC0+ICdtb2RlbCk7XG4gIGFmdGVyX3JlZHJhdzogKHVuaXQgLT4gdW5pdCkgLT4gdW5pdDtcbn1cblxubGV0IGRvbSB4ID0geC5kb21cbmxldCBwcm9jZXNzIHggPSB4LnByb2Nlc3NcbmxldCBnZXQgeCA9IHguZ2V0ICgpXG5sZXQgYWZ0ZXJfcmVkcmF3IHggPSB4LmFmdGVyX3JlZHJhd1xuXG50eXBlIGVudiA9XG4gIHtcbiAgICBjbWRzOiBDbWQuaGFuZGxlciBsaXN0O1xuICAgIGN1c3RvbXM6IEN1c3RvbS5oYW5kbGVyIGxpc3Q7XG4gIH1cblxubGV0IGVtcHR5ID0ge2NtZHMgPSBbXTsgY3VzdG9tcyA9IFtdfVxubGV0IGNtZCBoID0ge2VtcHR5IHdpdGggY21kcyA9IFtoXX1cbmxldCBjdXN0b20gaCA9IHtlbXB0eSB3aXRoIGN1c3RvbXMgPSBbaF19XG5sZXQgbWVyZ2UgZW52cyA9XG4gIHtcbiAgICBjbWRzID0gTGlzdC5jb25jYXQgKExpc3QubWFwIChmdW4gZSAtPiBlLmNtZHMpIGVudnMpO1xuICAgIGN1c3RvbXMgPSBMaXN0LmNvbmNhdCAoTGlzdC5tYXAgKGZ1biBlIC0+IGUuY3VzdG9tcykgZW52cyk7XG4gIH1cblxuXG5sZXQgZ2xvYmFsID0gcmVmIGVtcHR5XG5cbmxldCByZWdpc3RlciBlID0gZ2xvYmFsIDo9IG1lcmdlIFtlOyAhZ2xvYmFsXVxuXG5sZXQgcnVuICh0eXBlIG1zZyBtb2RlbCkgPyhlbnYgPSBlbXB0eSkgP2NvbnRhaW5lclxuICAgICh7aW5pdCA9IChtb2RlbDAsIGNtZDApOyB1cGRhdGU7IHZpZXd9IDogKG1vZGVsLCBtc2cpIFZkb20uYXBwKSA9XG4gIGxldCBlbnYgPSBtZXJnZSBbZW52OyAhZ2xvYmFsXSBpblxuICBsZXQgY29udGFpbmVyID1cbiAgICBtYXRjaCBjb250YWluZXIgd2l0aFxuICAgIHwgTm9uZSAtPiBEb2N1bWVudC5jcmVhdGVfZWxlbWVudCBkb2N1bWVudCBcImRpdlwiXG4gICAgfCBTb21lIGNvbnRhaW5lciAtPiBjb250YWluZXJcbiAgaW5cbiAgbGV0IHBvc3RfcmVkcmF3ID0gcmVmIFtdIGluXG4gIGxldCBhZnRlcl9yZWRyYXcgZiA9IHBvc3RfcmVkcmF3IDo9IGYgOjogIXBvc3RfcmVkcmF3IGluXG4gIGxldCBmbHVzaCBfID1cbiAgICBsZXQgbCA9IExpc3QucmV2ICFwb3N0X3JlZHJhdyAgaW5cbiAgICBwb3N0X3JlZHJhdyA6PSBbXTtcbiAgICBMaXN0Lml0ZXIgKGZ1biBmIC0+IGYgKCkpIGxcbiAgaW5cblxuICBsZXQgcHJvY2Vzc19jdXN0b21fZndkID0gcmVmIChmdW4gXyBfIC0+IGFzc2VydCBmYWxzZSkgaW5cbiAgbGV0IGN0eCA9XG4gICAge1xuICAgICAgcHJvY2Vzc19jdXN0b20gPSAoZnVuIGVsdCBldnQgLT4gIXByb2Nlc3NfY3VzdG9tX2Z3ZCBlbHQgZXZ0KTtcbiAgICAgIGN1c3RvbV9oYW5kbGVycyA9IGVudi5jdXN0b21zO1xuICAgICAgYWZ0ZXJfcmVkcmF3O1xuICAgIH1cbiAgaW5cbiAgbGV0IHZpZXcgbW9kZWwgPVxuICAgIHRyeSB2aWV3IG1vZGVsXG4gICAgd2l0aCBleG4gLT5cbiAgICAgIFByaW50Zi5wcmludGYgXCJFcnJvciBkdXJpbmcgdmRvbSB2aWV3OiAlc1xcbiUhXCIgKFByaW50ZXhjLnRvX3N0cmluZyBleG4pO1xuICAgICAgcmFpc2UgZXhuXG4gIGluXG4gIGxldCB4ID0gYmxpdCBjdHggKHZpZXcgbW9kZWwwKSBpblxuICBXaW5kb3cucmVxdWVzdF9hbmltYXRpb25fZnJhbWUgd2luZG93IGZsdXNoO1xuXG4gIGxldCBtb2RlbCA9IHJlZiBtb2RlbDAgaW5cbiAgbGV0IGN1cnJlbnQgPSByZWYgeCBpblxuXG5cbiAgbGV0IHBlbmRpbmdfcmVkcmF3ID0gcmVmIGZhbHNlIGluXG4gIGxldCByZWRyYXcgXyA9XG4gICAgKCogVE9ETzpcbiAgICAgICBjb3VsZCBhdm9pZCBjYWxsaW5nIHZpZXcvc3luYyBpZiBtb2RlbCBpcyB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgKGJlY2F1c2UgdXBkYXRlcyBhcmUgbm93IGJhdGNoZWRcbiAgICAqKVxuICAgIHBlbmRpbmdfcmVkcmF3IDo9IGZhbHNlO1xuICAgIGxldCB4ID0gc3luYyBjdHggY29udGFpbmVyICFjdXJyZW50ICh2aWV3ICFtb2RlbCkgaW5cbiAgICBjdXJyZW50IDo9IHg7XG4gICAgZmx1c2ggKClcbiAgaW5cblxuICBsZXQgcmVjIHByb2Nlc3MgbXNnID1cbiAgICB0cnlcbiAgICAgIGxldCAobmV3X21vZGVsIDogbW9kZWwpLCAoY21kIDogbXNnIFZkb20uQ21kLnQpID0gdXBkYXRlICFtb2RlbCBtc2cgaW5cbiAgICAgIG1vZGVsIDo9IG5ld19tb2RlbDtcbiAgICAgIENtZC5ydW4gZW52LmNtZHMgcHJvY2VzcyBjbWQ7XG4gICAgICBpZiBub3QgIXBlbmRpbmdfcmVkcmF3IHRoZW4gYmVnaW5cbiAgICAgICAgcGVuZGluZ19yZWRyYXcgOj0gdHJ1ZTtcbiAgICAgICAgV2luZG93LnJlcXVlc3RfYW5pbWF0aW9uX2ZyYW1lIHdpbmRvdyByZWRyYXdcbiAgICAgIGVuZFxuICAgIHdpdGggZXhuICAtPlxuICAgICAgUHJpbnRmLnByaW50ZiBcIkVycm9yIGR1cmluZyB2ZG9tIHByb2Nlc3M6ICVzXFxuJSFcIiAoUHJpbnRleGMudG9fc3RyaW5nIGV4bik7XG4gICAgICByYWlzZSBleG5cbiAgaW5cblxuICBFbGVtZW50LmFwcGVuZF9jaGlsZCBjb250YWluZXIgKGdldF9kb20geCk7XG5cbiAgbGV0IHByZXZfdmFsdWVfYXR0cmlidXRlID0gXCJkYXRhLW9jYW1sLXZkb20tcHJldi12YWx1ZVwiIGluXG5cbiAgbGV0IG9uZXZlbnQgZXZ0ID1cbiAgICBsZXQgdHkgPSBFdmVudC50eXBlXyBldnQgaW5cbiAgICB0cnlcbiAgICAgIGxldCB0Z3QgPSBFbGVtZW50LnRfb2ZfanMgKEV2ZW50LnRhcmdldCBldnQpIGluXG4gICAgICBsZXQgcmVjIGFwcGx5X2hhbmRsZXIgPSBmdW5jdGlvblxuICAgICAgICB8IFtdIC0+IE5vbmVcbiAgICAgICAgfCBoZCA6OiB0bCAtPlxuICAgICAgICAgICAgbGV0IHJlcyA9XG4gICAgICAgICAgICAgIG1hdGNoIHR5LCBoZCB3aXRoXG4gICAgICAgICAgICAgIHwgXCJpbnB1dFwiLCBIYW5kbGVyIChJbnB1dCBmKSAtPiBTb21lIChmIChFbGVtZW50LnZhbHVlIHRndCkpXG4gICAgICAgICAgICAgIHwgXCJibHVyXCIsIEhhbmRsZXIgKENoYW5nZSBmKSAtPlxuICAgICAgICAgICAgICAgICAgKCogY3Jvc3MgYnJvd3NlciBlbXVsYXRpb24gb2YgY2hhbmdlLlxuICAgICAgICAgICAgICAgICAgICAgV2UgcmVtZW1iZXIgdGhlIHZhbHVlIHdoZW4gdGhlIGZpZWxkIHdhcyBsYXN0IGZvY3VzZWQuICBUaGlzIGRvZXMgbm90IHdvcmsgdmVyeSB3ZWxsLCBzaW5jZVxuICAgICAgICAgICAgICAgICAgICAgdGhlIHZhbHVlIGNvdWxkIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGVuIGJlY2F1c2Ugb2YgYSBwcm9ncmFtbWF0aWMgYWN0aW9uIChhbmQgaXMgdGhlIFwiZm9jdXNcIlxuICAgICAgICAgICAgICAgICAgICAgZXZlbnQgZXZlbiByYWlzZWQgaWYgdGhlIGVsZW1lbnQgaXMgZm9jdXNlZCBwcm9ncmFtbWF0aWNhbGx5PykuICopXG4gICAgICAgICAgICAgICAgICBsZXQgY3Vycl92YWx1ZSA9IEVsZW1lbnQudmFsdWUgdGd0IGluXG4gICAgICAgICAgICAgICAgICBsZXQgY2hhbmdlZCA9XG4gICAgICAgICAgICAgICAgICAgIG5vdCAoRWxlbWVudC5oYXNfYXR0cmlidXRlIHRndCBwcmV2X3ZhbHVlX2F0dHJpYnV0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5nZXRfYXR0cmlidXRlIHRndCBwcmV2X3ZhbHVlX2F0dHJpYnV0ZSA8PiBjdXJyX3ZhbHVlXG4gICAgICAgICAgICAgICAgICBpblxuICAgICAgICAgICAgICAgICAgaWYgY2hhbmdlZCB0aGVuIFNvbWUgKGYgY3Vycl92YWx1ZSkgZWxzZSBOb25lXG4gICAgICAgICAgICAgIHwgXCJjaGFuZ2VcIiwgSGFuZGxlciAoQ2hhbmdlSW5kZXggZikgLT4gU29tZSAoZiAoRWxlbWVudC5zZWxlY3RlZF9pbmRleCB0Z3QpKVxuICAgICAgICAgICAgICB8IFwiY2xpY2tcIiwgSGFuZGxlciAoQ2hhbmdlQ2hlY2tlZCBmKSAtPiBTb21lIChmIChFbGVtZW50LmNoZWNrZWQgdGd0KSlcbiAgICAgICAgICAgICAgfCBcImNsaWNrXCIsIEhhbmRsZXIgKENsaWNrIGYpIC0+IFNvbWUgKGYgKG1vdXNlX2V2ZW50IGV2dCkpXG4gICAgICAgICAgICAgIHwgXCJkYmxjbGlja1wiLCBIYW5kbGVyIChEYmxDbGljayBmKSAtPiBTb21lIChmIChtb3VzZV9ldmVudCBldnQpKVxuICAgICAgICAgICAgICB8IFwiYmx1clwiLCBIYW5kbGVyIChCbHVyIG1zZykgLT4gU29tZSBtc2dcbiAgICAgICAgICAgICAgfCBcImZvY3VzXCIsIEhhbmRsZXIgKEZvY3VzIG1zZykgLT4gU29tZSBtc2dcbiAgICAgICAgICAgICAgfCBcIm1vdXNlbW92ZVwiLCBIYW5kbGVyIChNb3VzZU1vdmUgZikgLT4gU29tZSAoZiAobW91c2VfZXZlbnQgZXZ0KSlcbiAgICAgICAgICAgICAgfCBcIm1vdXNlZG93blwiLCBIYW5kbGVyIChNb3VzZURvd24gZikgLT4gU29tZSAoZiAobW91c2VfZXZlbnQgZXZ0KSlcbiAgICAgICAgICAgICAgfCBcImtleWRvd25cIiwgSGFuZGxlciAoS2V5RG93biBmKSAtPiBTb21lIChmIChrZXlfZXZlbnQgZXZ0KSlcbiAgICAgICAgICAgICAgfCBcImtleWRvd25cIiwgSGFuZGxlciAoS2V5RG93bkNhbmNlbCBmKSAtPlxuICAgICAgICAgICAgICAgICAgYmVnaW4gbWF0Y2ggZiAoa2V5X2V2ZW50IGV2dCkgd2l0aFxuICAgICAgICAgICAgICAgICAgfCBOb25lIC0+IE5vbmVcbiAgICAgICAgICAgICAgICAgIHwgU29tZSBfIGFzIHIgLT4gRXZlbnQucHJldmVudF9kZWZhdWx0IGV2dDsgclxuICAgICAgICAgICAgICAgICAgZW5kXG4gICAgICAgICAgICAgIHwgXCJjb250ZXh0bWVudVwiLCBIYW5kbGVyIChDb250ZXh0TWVudSBmKSAtPiBFdmVudC5wcmV2ZW50X2RlZmF1bHQgZXZ0OyBTb21lIChmIChtb3VzZV9ldmVudCBldnQpKVxuICAgICAgICAgICAgICB8IF8gLT4gTm9uZVxuICAgICAgICAgICAgaW5cbiAgICAgICAgICAgIG1hdGNoIHJlcyB3aXRoXG4gICAgICAgICAgICB8IFNvbWUgXyAtPiByZXNcbiAgICAgICAgICAgIHwgTm9uZSAtPiBhcHBseV9oYW5kbGVyIHRsXG4gICAgICBpblxuICAgICAgbGV0IHJlYyBwcm9wYWdhdGUgPSBmdW5jdGlvblxuICAgICAgICB8IEZvdW5kIHtcbiAgICAgICAgICAgIG1hcHBlcjtcbiAgICAgICAgICAgIGlubmVyID0gKCBCRWxlbWVudCB7dmRvbSA9IEVsZW1lbnQge2F0dHJpYnV0ZXM7IF99OyBffVxuICAgICAgICAgICAgICAgICAgICB8IEJDdXN0b20gIHt2ZG9tID0gQ3VzdG9tICB7YXR0cmlidXRlczsgX307IF99ICk7XG4gICAgICAgICAgICBwYXJlbnQ7XG4gICAgICAgICAgfSAtPlxuICAgICAgICAgICAgKCogc2VlIFwiY3Jvc3MgYnJvd3NlciBlbXVsYXRpb24gY2hhbmdlXCIgY29tbWVudCBhYm92ZSAqKVxuICAgICAgICAgICAgaWYgdHkgPSBcImZvY3VzXCIgJiYgTGlzdC5leGlzdHMgKGZ1bmN0aW9uIEhhbmRsZXIgKENoYW5nZSBfKSAtPiB0cnVlIHwgXyAtPiBmYWxzZSkgYXR0cmlidXRlcyB0aGVuXG4gICAgICAgICAgICAgIEVsZW1lbnQuc2V0X2F0dHJpYnV0ZSB0Z3QgcHJldl92YWx1ZV9hdHRyaWJ1dGUgKEVsZW1lbnQudmFsdWUgdGd0KTtcbiAgICAgICAgICAgIGJlZ2luIG1hdGNoIGFwcGx5X2hhbmRsZXIgYXR0cmlidXRlcyB3aXRoXG4gICAgICAgICAgICB8IE5vbmUgLT4gcHJvcGFnYXRlIHBhcmVudFxuICAgICAgICAgICAgfCBTb21lIG1zZyAtPiBwcm9jZXNzIChtYXBwZXIgbXNnKVxuICAgICAgICAgICAgZW5kXG4gICAgICAgIHwgXyAtPlxuICAgICAgICAgICAgKClcbiAgICAgIGluXG5cbiAgICAgIHByb3BhZ2F0ZSAodmRvbV9vZl9kb20gIWN1cnJlbnQgdGd0KTtcblxuICAgICAgaWYgdHkgPSBcImlucHV0XCIgfHwgdHkgPSBcImJsdXJcIiB0aGVuXG4gICAgICAgIGxldCBmICgpID1cbiAgICAgICAgICBtYXRjaCB2ZG9tX29mX2RvbSAhY3VycmVudCB0Z3Qgd2l0aFxuICAgICAgICAgICgqIG5vdGU6IHRoZSBuZXcgdmRvbSBjYW4gYmUgZGlmZmVyZW50IGFmdGVyIHByb2Nlc3NpbmdcbiAgICAgICAgICAgICB0aGUgZXZlbnQgYWJvdmUgKilcbiAgICAgICAgICAoKiAhISBUaGlzIGlzIHByb2JhYmx5IGJyb2tlbiBub3cgdGhhdCB3ZSBkZWxheSB1cGRhdGluZyB0aGUgdmRvbVxuICAgICAgICAgICAgICAgIHdpdGggcmVxdWVzdF9hbmltYXRpb25fZnJhbWUgISEgKilcbiAgICAgICAgICB8IEZvdW5kIHttYXBwZXIgPSBfOyBpbm5lciA9IEJFbGVtZW50IHt2ZG9tID0gRWxlbWVudCB7YXR0cmlidXRlczsgX307IF99OyBffSAtPlxuICAgICAgICAgICAgICBMaXN0Lml0ZXJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgIHwgUHJvcGVydHkgKFwidmFsdWVcIiwgU3RyaW5nIHMyKSB3aGVuIHMyIDw+IEVsZW1lbnQudmFsdWUgdGd0IC0+IEVsZW1lbnQuc2V0X3ZhbHVlIHRndCBzMlxuICAgICAgICAgICAgICAgICAgfCBQcm9wZXJ0eSAoXCJjaGVja2VkXCIsIEJvb2wgczIpIC0+IEVsZW1lbnQuc2V0X2NoZWNrZWQgdGd0IHMyXG4gICAgICAgICAgICAgICAgICB8IF8gLT4gKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlc1xuICAgICAgICAgIHwgXyAtPiAoKVxuICAgICAgICBpblxuICAgICAgICBpZiAhcGVuZGluZ19yZWRyYXcgdGhlbiBhZnRlcl9yZWRyYXcgZiBlbHNlIGYgKClcbiAgICB3aXRoIGV4biAtPlxuICAgICAgUHJpbnRmLnByaW50ZiBcIkVycm9yIGluIGV2ZW50IGhhbmRsZXIgJVM6ICVzXFxuJSFcIiB0eSAoUHJpbnRleGMudG9fc3RyaW5nIGV4bilcbiAgaW5cblxuICBsZXQgcHJvY2Vzc19jdXN0b20gdGd0IGV2ZW50ID1cbiAgICBiZWdpbiBtYXRjaCB2ZG9tX29mX2RvbSAhY3VycmVudCB0Z3Qgd2l0aFxuICAgIHwgRm91bmQge21hcHBlcjsgaW5uZXIgPSBCQ3VzdG9tICB7dmRvbSA9IEN1c3RvbSAge2F0dHJpYnV0ZXM7IF99OyBffTsgX30gLT5cbiAgICAgICAgbGV0IHNlbGVjdF9oYW5kbGVyID0gZnVuY3Rpb25cbiAgICAgICAgICB8IEhhbmRsZXIgaCAtPiBldmVudC5ldiBoXG4gICAgICAgICAgfCBfIC0+IE5vbmVcbiAgICAgICAgaW5cbiAgICAgICAgbGV0IG1zZ3MgPSBMaXN0LmZpbHRlcl9tYXAgc2VsZWN0X2hhbmRsZXIgYXR0cmlidXRlcyBpblxuICAgICAgICBMaXN0Lml0ZXIgKGZ1biBtc2cgLT4gcHJvY2VzcyAobWFwcGVyIG1zZykpIG1zZ3NcbiAgICB8IF8gLT5cbiAgICAgICAgKClcbiAgICBlbmRcbiAgICAoKiBEbyB3ZSBuZWVkIHRvIGRvIHNvbWV0aGluZyBzaW1pbGFyIHRvIHRoZSBcImlucHV0XCIgY2FzZSBpbiBvbmV2ZW50PyAqKVxuICBpblxuICBwcm9jZXNzX2N1c3RvbV9md2QgOj0gcHJvY2Vzc19jdXN0b207XG4gIEVsZW1lbnQuYWRkX2V2ZW50X2xpc3RlbmVyIGNvbnRhaW5lciBFdmVudC5DbGljayBvbmV2ZW50IGZhbHNlO1xuICBFbGVtZW50LmFkZF9ldmVudF9saXN0ZW5lciBjb250YWluZXIgRXZlbnQuRGJsY2xpY2sgb25ldmVudCBmYWxzZTtcbiAgRWxlbWVudC5hZGRfZXZlbnRfbGlzdGVuZXIgY29udGFpbmVyIEV2ZW50LklucHV0IG9uZXZlbnQgZmFsc2U7XG4gIEVsZW1lbnQuYWRkX2V2ZW50X2xpc3RlbmVyIGNvbnRhaW5lciBFdmVudC5DaGFuZ2Ugb25ldmVudCBmYWxzZTtcbiAgRWxlbWVudC5hZGRfZXZlbnRfbGlzdGVuZXIgY29udGFpbmVyIEV2ZW50LkZvY3VzIG9uZXZlbnQgdHJ1ZTtcbiAgRWxlbWVudC5hZGRfZXZlbnRfbGlzdGVuZXIgY29udGFpbmVyIEV2ZW50LkJsdXIgb25ldmVudCB0cnVlO1xuICBFbGVtZW50LmFkZF9ldmVudF9saXN0ZW5lciBjb250YWluZXIgRXZlbnQuTW91c2Vtb3ZlIG9uZXZlbnQgdHJ1ZTtcbiAgRWxlbWVudC5hZGRfZXZlbnRfbGlzdGVuZXIgY29udGFpbmVyIEV2ZW50Lk1vdXNlZG93biBvbmV2ZW50IHRydWU7XG4gIEVsZW1lbnQuYWRkX2V2ZW50X2xpc3RlbmVyIGNvbnRhaW5lciBFdmVudC5LZXlkb3duIG9uZXZlbnQgdHJ1ZTtcbiAgRWxlbWVudC5hZGRfZXZlbnRfbGlzdGVuZXIgY29udGFpbmVyIEV2ZW50LkNvbnRleHRtZW51IG9uZXZlbnQgdHJ1ZTtcbiAgQ21kLnJ1biBlbnYuY21kcyBwcm9jZXNzIGNtZDA7XG4gIHtkb20gPSBjb250YWluZXI7IHByb2Nlc3M7IGdldCA9IChmdW4gKCkgLT4gIW1vZGVsKTsgYWZ0ZXJfcmVkcmF3fVxuIiwiW0BAQGNvbW1lbnQgXCIhISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGJ5IGdlbl9qc19hcGkgISFcIl1cbltAQEBvY2FtbC53YXJuaW5nIFwiLTctMzItMzlcIl1cbm1vZHVsZSBQcm9taXNlID1cbiAgc3RydWN0XG4gICAgdHlwZSAnYSB0ID0gKChPanMudCAtPiAnYSkgKiBPanMudClcbiAgICBsZXQgdF9vZl9qcyBmIHggPSAoZiwgeClcbiAgICBsZXQgKHRoZW5fIDpcbiAgICAgIE9qcy50IC0+XG4gICAgICAgIHN1Y2Nlc3M6KE9qcy50IC0+IHVuaXQpIC0+IGVycm9yOihPanMudCAtPiB1bml0KSBvcHRpb24gLT4gdW5pdClcbiAgICAgID1cbiAgICAgIGZ1biB4NiAtPlxuICAgICAgICBmdW4gfnN1Y2Nlc3M6eDEgLT5cbiAgICAgICAgICBmdW4gfmVycm9yOngzIC0+XG4gICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgKE9qcy5jYWxsIHg2IFwidGhlblwiXG4gICAgICAgICAgICAgICAgIFt8KE9qcy5mdW5fdG9fanMgMSB4MSk7KE9qcy5vcHRpb25fdG9fanNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuIHg0IC0+IE9qcy5mdW5fdG9fanMgMSB4NCkgeDMpfF0pXG4gICAgbGV0IHRoZW5fID9lcnJvciAgfnN1Y2Nlc3MgIChhbHBoYV9vZl9qcywgb2pzKSA9XG4gICAgICB0aGVuXyBvanMgfnN1Y2Nlc3M6KGZ1biB4IC0+IHN1Y2Nlc3MgKGFscGhhX29mX2pzIHgpKSB+ZXJyb3JcbiAgZW5kXG5tb2R1bGUgU3RvcmFnZSA9XG4gIHN0cnVjdFxuICAgIHR5cGUgdCA9IE9qcy50XG4gICAgbGV0IHJlYyAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gZnVuIHg4IC0+IHg4XG4gICAgYW5kICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSBmdW4geDcgLT4geDdcbiAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICBsZXQgKGxlbmd0aCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDExIC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDExKSBcImxlbmd0aFwiKVxuICAgIGxldCAoa2V5IDogdCAtPiBpbnQgLT4gc3RyaW5nIG9wdGlvbikgPVxuICAgICAgZnVuIHgxMyAtPlxuICAgICAgICBmdW4geDEyIC0+XG4gICAgICAgICAgT2pzLm9wdGlvbl9vZl9qcyBPanMuc3RyaW5nX29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDEzKSBcImtleVwiIFt8KE9qcy5pbnRfdG9fanMgeDEyKXxdKVxuICAgIGxldCAoZ2V0X2l0ZW0gOiB0IC0+IHN0cmluZyAtPiBzdHJpbmcgb3B0aW9uKSA9XG4gICAgICBmdW4geDE2IC0+XG4gICAgICAgIGZ1biB4MTUgLT5cbiAgICAgICAgICBPanMub3B0aW9uX29mX2pzIE9qcy5zdHJpbmdfb2ZfanNcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MTYpIFwiZ2V0SXRlbVwiIFt8KE9qcy5zdHJpbmdfdG9fanMgeDE1KXxdKVxuICAgIGxldCAoc2V0X2l0ZW0gOiB0IC0+IHN0cmluZyAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgyMCAtPlxuICAgICAgICBmdW4geDE4IC0+XG4gICAgICAgICAgZnVuIHgxOSAtPlxuICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MjApIFwic2V0SXRlbVwiXG4gICAgICAgICAgICAgICAgIFt8KE9qcy5zdHJpbmdfdG9fanMgeDE4KTsoT2pzLnN0cmluZ190b19qcyB4MTkpfF0pXG4gICAgbGV0IChyZW1vdmVfaXRlbSA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjIgLT5cbiAgICAgICAgZnVuIHgyMSAtPlxuICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgyMikgXCJyZW1vdmVJdGVtXCIgW3woT2pzLnN0cmluZ190b19qcyB4MjEpfF0pXG4gICAgbGV0IChjbGVhciA6IHQgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgyMyAtPiBpZ25vcmUgKE9qcy5jYWxsICh0X3RvX2pzIHgyMykgXCJjbGVhclwiIFt8fF0pXG4gIGVuZFxubW9kdWxlIFJlZ0V4cCA9XG4gIHN0cnVjdFxuICAgIHR5cGUgdCA9IE9qcy50XG4gICAgbGV0IHJlYyAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gZnVuIHgyNSAtPiB4MjVcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4MjQgLT4geDI0XG4gICAgbGV0ICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSB0X29mX2pzXG4gICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgbGV0IChuZXdfcmVnX2V4cCA6IHN0cmluZyAtPiA/ZmxhZ3M6c3RyaW5nIC0+IHVuaXQgLT4gdCkgPVxuICAgICAgZnVuIHgyOCAtPlxuICAgICAgICBmdW4gP2ZsYWdzOngyOSAtPlxuICAgICAgICAgIGZ1biAoKSAtPlxuICAgICAgICAgICAgdF9vZl9qc1xuICAgICAgICAgICAgICAoT2pzLm5ld19vYmpfYXJyIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJSZWdFeHBcIilcbiAgICAgICAgICAgICAgICAgKGxldCB4MzAgPSBPanMubmV3X29iaiAoT2pzLmdldCBPanMuZ2xvYmFsIFwiQXJyYXlcIikgW3x8XSBpblxuICAgICAgICAgICAgICAgICAgaWdub3JlIChPanMuY2FsbCB4MzAgXCJwdXNoXCIgW3woT2pzLnN0cmluZ190b19qcyB4MjgpfF0pO1xuICAgICAgICAgICAgICAgICAgKG1hdGNoIHgyOSB3aXRoXG4gICAgICAgICAgICAgICAgICAgfCBTb21lIHgzMSAtPlxuICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAoT2pzLmNhbGwgeDMwIFwicHVzaFwiIFt8KE9qcy5zdHJpbmdfdG9fanMgeDMxKXxdKVxuICAgICAgICAgICAgICAgICAgIHwgTm9uZSAtPiAoKSk7XG4gICAgICAgICAgICAgICAgICB4MzApKVxuICBlbmRcbm1vZHVsZSBKc1N0cmluZyA9XG4gIHN0cnVjdFxuICAgIHR5cGUgdCA9IE9qcy50XG4gICAgbGV0IHJlYyAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gZnVuIHgzMyAtPiB4MzNcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4MzIgLT4geDMyXG4gICAgbGV0ICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSB0X29mX2pzXG4gICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgbGV0IG9mX3N0cmluZyBzID0gT2pzLnN0cmluZ190b19qcyBzXG4gICAgbGV0IHRvX3N0cmluZyB4ID0gT2pzLnN0cmluZ19vZl9qcyB4XG4gICAgbGV0ICh0b19sb3dlcl9jYXNlIDogdCAtPiB0KSA9XG4gICAgICBmdW4geDM2IC0+IHRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHgzNikgXCJ0b0xvd2VyQ2FzZVwiIFt8fF0pXG4gICAgbGV0ICh0b191cHBlcl9jYXNlIDogdCAtPiB0KSA9XG4gICAgICBmdW4geDM3IC0+IHRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHgzNykgXCJ0b1VwcGVyQ2FzZVwiIFt8fF0pXG4gICAgbGV0IChjb25jYXQgOiB0IC0+IHQgbGlzdCAtPiB0KSA9XG4gICAgICBmdW4geDQxIC0+XG4gICAgICAgIGZ1biB4MzggLT5cbiAgICAgICAgICB0X29mX2pzXG4gICAgICAgICAgICAobGV0IHg0MiA9IHRfdG9fanMgeDQxIGluXG4gICAgICAgICAgICAgT2pzLmNhbGwgKE9qcy5nZXQgeDQyIFwiY29uY2F0XCIpIFwiYXBwbHlcIlxuICAgICAgICAgICAgICAgW3x4NDI7KChsZXQgeDM5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICBPanMubmV3X29iaiAoT2pzLmdldCBPanMuZ2xvYmFsIFwiQXJyYXlcIikgW3x8XSBpblxuICAgICAgICAgICAgICAgICAgICAgICBMaXN0Lml0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuIHg0MCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZSAoT2pzLmNhbGwgeDM5IFwicHVzaFwiIFt8KHRfdG9fanMgeDQwKXxdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICB4Mzg7XG4gICAgICAgICAgICAgICAgICAgICAgIHgzOSkpfF0pXG4gICAgbGV0IChpbmNsdWRlcyA6IHQgLT4gdCAtPiBib29sKSA9XG4gICAgICBmdW4geDQ0IC0+XG4gICAgICAgIGZ1biB4NDMgLT5cbiAgICAgICAgICBPanMuYm9vbF9vZl9qc1xuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg0NCkgXCJpbmNsdWRlc1wiIFt8KHRfdG9fanMgeDQzKXxdKVxuICAgIGxldCAoZW5kc193aXRoIDogdCAtPiB0IC0+IGJvb2wpID1cbiAgICAgIGZ1biB4NDYgLT5cbiAgICAgICAgZnVuIHg0NSAtPlxuICAgICAgICAgIE9qcy5ib29sX29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDQ2KSBcImVuZHNXaXRoXCIgW3wodF90b19qcyB4NDUpfF0pXG4gICAgbGV0IChpbmRleF9vZiA6IHQgLT4gdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4NDggLT5cbiAgICAgICAgZnVuIHg0NyAtPlxuICAgICAgICAgIE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg0OCkgXCJpbmRleE9mXCIgW3wodF90b19qcyB4NDcpfF0pXG4gICAgbGV0IChyZXBlYXQgOiB0IC0+IGludCAtPiB0KSA9XG4gICAgICBmdW4geDUwIC0+XG4gICAgICAgIGZ1biB4NDkgLT5cbiAgICAgICAgICB0X29mX2pzIChPanMuY2FsbCAodF90b19qcyB4NTApIFwicmVwZWF0XCIgW3woT2pzLmludF90b19qcyB4NDkpfF0pXG4gICAgbGV0IChzZWFyY2ggOiB0IC0+IFJlZ0V4cC50IC0+IGludCkgPVxuICAgICAgZnVuIHg1MiAtPlxuICAgICAgICBmdW4geDUxIC0+XG4gICAgICAgICAgT2pzLmludF9vZl9qc1xuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg1MikgXCJzZWFyY2hcIiBbfChSZWdFeHAudF90b19qcyB4NTEpfF0pXG4gICAgbGV0ICh0cmltIDogdCAtPiB0KSA9XG4gICAgICBmdW4geDUzIC0+IHRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg1MykgXCJ0cmltXCIgW3x8XSlcbiAgZW5kXG5tb2R1bGUgRGF0ZSA9XG4gIHN0cnVjdFxuICAgIHR5cGUgdCA9IE9qcy50XG4gICAgbGV0IHJlYyAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gZnVuIHg1NSAtPiB4NTVcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4NTQgLT4geDU0XG4gICAgbGV0ICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSB0X29mX2pzXG4gICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgbGV0IChuZXdfZGF0ZSA6IGZsb2F0IC0+IHQpID1cbiAgICAgIGZ1biB4NTggLT5cbiAgICAgICAgdF9vZl9qc1xuICAgICAgICAgIChPanMubmV3X29iaiAoT2pzLmdldCBPanMuZ2xvYmFsIFwiRGF0ZVwiKSBbfChPanMuZmxvYXRfdG9fanMgeDU4KXxdKVxuICAgIGxldCAobm93IDogdW5pdCAtPiBmbG9hdCkgPVxuICAgICAgZnVuICgpIC0+XG4gICAgICAgIE9qcy5mbG9hdF9vZl9qcyAoT2pzLmNhbGwgKE9qcy5nZXQgT2pzLmdsb2JhbCBcIkRhdGVcIikgXCJub3dcIiBbfHxdKVxuICAgIGxldCAocGFyc2UgOiBzdHJpbmcgLT4gdCkgPVxuICAgICAgZnVuIHg1OSAtPlxuICAgICAgICB0X29mX2pzXG4gICAgICAgICAgKE9qcy5jYWxsIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJEYXRlXCIpIFwicGFyc2VcIlxuICAgICAgICAgICAgIFt8KE9qcy5zdHJpbmdfdG9fanMgeDU5KXxdKVxuICAgIGxldCAoZ2V0X2RhdGUgOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHg2MCAtPiBPanMuaW50X29mX2pzIChPanMuY2FsbCAodF90b19qcyB4NjApIFwiZ2V0RGF0ZVwiIFt8fF0pXG4gICAgbGV0IChnZXRfZGF5IDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4NjEgLT4gT2pzLmludF9vZl9qcyAoT2pzLmNhbGwgKHRfdG9fanMgeDYxKSBcImdldERheVwiIFt8fF0pXG4gICAgbGV0IChnZXRfZnVsbF95ZWFyIDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4NjIgLT4gT2pzLmludF9vZl9qcyAoT2pzLmNhbGwgKHRfdG9fanMgeDYyKSBcImdldEZ1bGxZZWFyXCIgW3x8XSlcbiAgICBsZXQgKGdldF9ob3VycyA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDYzIC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg2MykgXCJnZXRIb3Vyc1wiIFt8fF0pXG4gICAgbGV0IChnZXRfbWlsbGlzZWNvbmRzIDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4NjQgLT5cbiAgICAgICAgT2pzLmludF9vZl9qcyAoT2pzLmNhbGwgKHRfdG9fanMgeDY0KSBcImdldE1pbGxpc2Vjb25kc1wiIFt8fF0pXG4gICAgbGV0IChnZXRfbWludXRlcyA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDY1IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg2NSkgXCJnZXRNaW51dGVzXCIgW3x8XSlcbiAgICBsZXQgKGdldF9tb250aCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDY2IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg2NikgXCJnZXRNb250aFwiIFt8fF0pXG4gICAgbGV0IChnZXRfc2Vjb25kcyA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDY3IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg2NykgXCJnZXRTZWNvbmRzXCIgW3x8XSlcbiAgICBsZXQgKGdldF90aW1lIDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4NjggLT4gT2pzLmludF9vZl9qcyAoT2pzLmNhbGwgKHRfdG9fanMgeDY4KSBcImdldFRpbWVcIiBbfHxdKVxuICAgIGxldCAoZ2V0X3RpbWV6b25lX29mZnNldCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDY5IC0+XG4gICAgICAgIE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg2OSkgXCJnZXRUaW1lem9uZU9mZnNldFwiIFt8fF0pXG4gICAgbGV0IChnZXRfVVRDX2RhdGUgOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHg3MCAtPiBPanMuaW50X29mX2pzIChPanMuY2FsbCAodF90b19qcyB4NzApIFwiZ2V0VVRDRGF0ZVwiIFt8fF0pXG4gICAgbGV0IChnZXRfVVRDX2RheSA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDcxIC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg3MSkgXCJnZXRVVENEYXlcIiBbfHxdKVxuICAgIGxldCAoZ2V0X1VUQ19mdWxsX3llYXIgOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHg3MiAtPiBPanMuaW50X29mX2pzIChPanMuY2FsbCAodF90b19qcyB4NzIpIFwiZ2V0VVRDRnVsbFllYXJcIiBbfHxdKVxuICAgIGxldCAoZ2V0X1VUQ19ob3VycyA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDczIC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg3MykgXCJnZXRVVENIb3Vyc1wiIFt8fF0pXG4gICAgbGV0IChnZXRfVVRDX21pbGxpc2Vjb25kcyA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDc0IC0+XG4gICAgICAgIE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg3NCkgXCJnZXRVVENNaWxsaXNlY29uZHNcIiBbfHxdKVxuICAgIGxldCAoZ2V0X1VUQ19taW51dGVzIDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4NzUgLT4gT2pzLmludF9vZl9qcyAoT2pzLmNhbGwgKHRfdG9fanMgeDc1KSBcImdldFVUQ01pbnV0ZXNcIiBbfHxdKVxuICAgIGxldCAoZ2V0X1VUQ19tb250aCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDc2IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg3NikgXCJnZXRVVENNb250aFwiIFt8fF0pXG4gICAgbGV0IChnZXRfVVRDX3NlY29uZHMgOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHg3NyAtPiBPanMuaW50X29mX2pzIChPanMuY2FsbCAodF90b19qcyB4NzcpIFwiZ2V0VVRDU2Vjb25kc1wiIFt8fF0pXG4gICAgbGV0IChnZXRfeWVhciA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDc4IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHg3OCkgXCJnZXRZZWFyXCIgW3x8XSlcbiAgICBsZXQgKHNldF9kYXRlIDogdCAtPiBpbnQgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg4MCAtPlxuICAgICAgICBmdW4geDc5IC0+XG4gICAgICAgICAgaWdub3JlIChPanMuY2FsbCAodF90b19qcyB4ODApIFwic2V0RGF0ZVwiIFt8KE9qcy5pbnRfdG9fanMgeDc5KXxdKVxuICAgIGxldCAoc2V0X2Z1bGxfeWVhciA6IHQgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4ODIgLT5cbiAgICAgICAgZnVuIHg4MSAtPlxuICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg4MikgXCJzZXRGdWxsWWVhclwiIFt8KE9qcy5pbnRfdG9fanMgeDgxKXxdKVxuICAgIGxldCAoc2V0X2hvdXJzIDogdCAtPiBpbnQgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg4NCAtPlxuICAgICAgICBmdW4geDgzIC0+XG4gICAgICAgICAgaWdub3JlIChPanMuY2FsbCAodF90b19qcyB4ODQpIFwic2V0SG91cnNcIiBbfChPanMuaW50X3RvX2pzIHg4Myl8XSlcbiAgICBsZXQgKHNldF9taWxsaXNlY29uZHMgOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDg2IC0+XG4gICAgICAgIGZ1biB4ODUgLT5cbiAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4ODYpIFwic2V0TWlsbGlzZWNvbmRzXCIgW3woT2pzLmludF90b19qcyB4ODUpfF0pXG4gICAgbGV0IChzZXRfbWludXRlcyA6IHQgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4ODggLT5cbiAgICAgICAgZnVuIHg4NyAtPlxuICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg4OCkgXCJzZXRNaW51dGVzXCIgW3woT2pzLmludF90b19qcyB4ODcpfF0pXG4gICAgbGV0IChzZXRfbW9udGggOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDkwIC0+XG4gICAgICAgIGZ1biB4ODkgLT5cbiAgICAgICAgICBpZ25vcmUgKE9qcy5jYWxsICh0X3RvX2pzIHg5MCkgXCJzZXRNb250aFwiIFt8KE9qcy5pbnRfdG9fanMgeDg5KXxdKVxuICAgIGxldCAoc2V0X3NlY29uZHMgOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDkyIC0+XG4gICAgICAgIGZ1biB4OTEgLT5cbiAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4OTIpIFwic2V0U2Vjb25kc1wiIFt8KE9qcy5pbnRfdG9fanMgeDkxKXxdKVxuICAgIGxldCAoc2V0X3RpbWUgOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDk0IC0+XG4gICAgICAgIGZ1biB4OTMgLT5cbiAgICAgICAgICBpZ25vcmUgKE9qcy5jYWxsICh0X3RvX2pzIHg5NCkgXCJzZXRUaW1lXCIgW3woT2pzLmludF90b19qcyB4OTMpfF0pXG4gICAgbGV0IChzZXRfVVRDX2RhdGUgOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDk2IC0+XG4gICAgICAgIGZ1biB4OTUgLT5cbiAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4OTYpIFwic2V0VVRDRGF0ZVwiIFt8KE9qcy5pbnRfdG9fanMgeDk1KXxdKVxuICAgIGxldCAoc2V0X1VUQ19mdWxsX3llYXIgOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDk4IC0+XG4gICAgICAgIGZ1biB4OTcgLT5cbiAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4OTgpIFwic2V0VVRDRnVsbFllYXJcIiBbfChPanMuaW50X3RvX2pzIHg5Nyl8XSlcbiAgICBsZXQgKHNldF9VVENfaG91cnMgOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDEwMCAtPlxuICAgICAgICBmdW4geDk5IC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDEwMCkgXCJzZXRVVENIb3Vyc1wiIFt8KE9qcy5pbnRfdG9fanMgeDk5KXxdKVxuICAgIGxldCAoc2V0X1VUQ19taWxsaXNlY29uZHMgOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDEwMiAtPlxuICAgICAgICBmdW4geDEwMSAtPlxuICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgxMDIpIFwic2V0VVRDTWlsbGlzZWNvbmRzXCJcbiAgICAgICAgICAgICAgIFt8KE9qcy5pbnRfdG9fanMgeDEwMSl8XSlcbiAgICBsZXQgKHNldF9VVENfbWludXRlcyA6IHQgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MTA0IC0+XG4gICAgICAgIGZ1biB4MTAzIC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDEwNCkgXCJzZXRVVENNaW51dGVzXCIgW3woT2pzLmludF90b19qcyB4MTAzKXxdKVxuICAgIGxldCAoc2V0X1VUQ19tb250aCA6IHQgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MTA2IC0+XG4gICAgICAgIGZ1biB4MTA1IC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDEwNikgXCJzZXRVVENNb250aFwiIFt8KE9qcy5pbnRfdG9fanMgeDEwNSl8XSlcbiAgICBsZXQgKHNldF9VVENfc2Vjb25kcyA6IHQgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MTA4IC0+XG4gICAgICAgIGZ1biB4MTA3IC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDEwOCkgXCJzZXRVVENTZWNvbmRzXCIgW3woT2pzLmludF90b19qcyB4MTA3KXxdKVxuICAgIGxldCAoc2V0X3llYXIgOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDExMCAtPlxuICAgICAgICBmdW4geDEwOSAtPlxuICAgICAgICAgIGlnbm9yZSAoT2pzLmNhbGwgKHRfdG9fanMgeDExMCkgXCJzZXRZZWFyXCIgW3woT2pzLmludF90b19qcyB4MTA5KXxdKVxuICAgIGxldCAodG9fZGF0ZV9zdHJpbmcgOiB0IC0+IHN0cmluZykgPVxuICAgICAgZnVuIHgxMTEgLT5cbiAgICAgICAgT2pzLnN0cmluZ19vZl9qcyAoT2pzLmNhbGwgKHRfdG9fanMgeDExMSkgXCJ0b0RhdGVTdHJpbmdcIiBbfHxdKVxuICAgIGxldCAodG9fR01UX3N0cmluZyA6IHQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDExMiAtPlxuICAgICAgICBPanMuc3RyaW5nX29mX2pzIChPanMuY2FsbCAodF90b19qcyB4MTEyKSBcInRvR01UU3RyaW5nXCIgW3x8XSlcbiAgICBsZXQgKHRvX0lTT19zdHJpbmcgOiB0IC0+IHN0cmluZykgPVxuICAgICAgZnVuIHgxMTMgLT5cbiAgICAgICAgT2pzLnN0cmluZ19vZl9qcyAoT2pzLmNhbGwgKHRfdG9fanMgeDExMykgXCJ0b0lTT1N0cmluZ1wiIFt8fF0pXG4gICAgbGV0ICh0b19sb2NhbGVfc3RyaW5nIDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4MTE0IC0+XG4gICAgICAgIE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHgxMTQpIFwidG9Mb2NhbGVTdHJpbmdcIiBbfHxdKVxuICAgIGxldCAodG9fc3RyaW5nIDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4MTE1IC0+IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHgxMTUpIFwidG9TdHJpbmdcIiBbfHxdKVxuICAgIGxldCAodG9fdGltZV9zdHJpbmcgOiB0IC0+IHN0cmluZykgPVxuICAgICAgZnVuIHgxMTYgLT5cbiAgICAgICAgT2pzLnN0cmluZ19vZl9qcyAoT2pzLmNhbGwgKHRfdG9fanMgeDExNikgXCJ0b1RpbWVTdHJpbmdcIiBbfHxdKVxuICAgIGxldCAodG9fVVRDX3N0cmluZyA6IHQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDExNyAtPlxuICAgICAgICBPanMuc3RyaW5nX29mX2pzIChPanMuY2FsbCAodF90b19qcyB4MTE3KSBcInRvVVRDU3RyaW5nXCIgW3x8XSlcbiAgZW5kXG5tb2R1bGUgRmlsZSA9XG4gIHN0cnVjdFxuICAgIHR5cGUgdCA9IE9qcy50XG4gICAgbGV0IHJlYyAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gZnVuIHgxMTkgLT4geDExOVxuICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gZnVuIHgxMTggLT4geDExOFxuICAgIGxldCAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gdF9vZl9qc1xuICAgIGxldCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gdF90b19qc1xuICAgIGxldCAobmFtZSA6IHQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDEyMiAtPiBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxMjIpIFwibmFtZVwiKVxuICAgIGxldCAoc2l6ZSA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDEyMyAtPiBPanMuaW50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxMjMpIFwic2l6ZVwiKVxuICAgIGxldCAodHlwZV8gOiB0IC0+IHN0cmluZykgPVxuICAgICAgZnVuIHgxMjQgLT4gT2pzLnN0cmluZ19vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MTI0KSBcInR5cGVcIilcbiAgZW5kXG5tb2R1bGUgRGF0YVRyYW5zZmVyID1cbiAgc3RydWN0XG4gICAgdHlwZSB0ID0gT2pzLnRcbiAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBmdW4geDEyNiAtPiB4MTI2XG4gICAgYW5kICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSBmdW4geDEyNSAtPiB4MTI1XG4gICAgbGV0ICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSB0X29mX2pzXG4gICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgbGV0IChmaWxlcyA6IHQgLT4gRmlsZS50IGxpc3QpID1cbiAgICAgIGZ1biB4MTI5IC0+XG4gICAgICAgIE9qcy5saXN0X29mX2pzIEZpbGUudF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MTI5KSBcImZpbGVzXCIpXG4gIGVuZFxubW9kdWxlIEV2ZW50ID1cbiAgc3RydWN0XG4gICAgdHlwZSB0ID0gT2pzLnRcbiAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBmdW4geDEzMiAtPiB4MTMyXG4gICAgYW5kICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSBmdW4geDEzMSAtPiB4MTMxXG4gICAgbGV0ICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSB0X29mX2pzXG4gICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgdHlwZSBraW5kID1cbiAgICAgIHwgQWJvcnQgXG4gICAgICB8IEFmdGVycHJpbnQgXG4gICAgICB8IEFuaW1hdGlvbmVuZCBcbiAgICAgIHwgQW5pbWF0aW9uaXRlcmF0aW9uIFxuICAgICAgfCBBbmltYXRpb25zdGFydCBcbiAgICAgIHwgQXBwaW5zdGFsbGVkIFxuICAgICAgfCBBdWRpb2VuZCBcbiAgICAgIHwgQXVkaW9wcm9jZXNzIFxuICAgICAgfCBBdWRpb3N0YXJ0IFxuICAgICAgfCBCZWZvcmVwcmludCBcbiAgICAgIHwgQmVmb3JldW5sb2FkIFxuICAgICAgfCBCZWdpbkV2ZW50IFxuICAgICAgfCBCbG9ja2VkIFxuICAgICAgfCBCbHVyIFxuICAgICAgfCBCb3VuZGFyeSBcbiAgICAgIHwgQ2FjaGVkIFxuICAgICAgfCBDYW5wbGF5IFxuICAgICAgfCBDYW5wbGF5dGhyb3VnaCBcbiAgICAgIHwgQ2hhbmdlIFxuICAgICAgfCBDaGFyZ2luZ2NoYW5nZSBcbiAgICAgIHwgQ2hhcmdpbmd0aW1lY2hhbmdlIFxuICAgICAgfCBDaGVja2luZyBcbiAgICAgIHwgQ2xpY2sgXG4gICAgICB8IENsb3NlIFxuICAgICAgfCBDb21wbGV0ZSBcbiAgICAgIHwgQ29tcG9zaXRpb25lbmQgXG4gICAgICB8IENvbXBvc2l0aW9uc3RhcnQgXG4gICAgICB8IENvbXBvc2l0aW9udXBkYXRlIFxuICAgICAgfCBDb250ZXh0bWVudSBcbiAgICAgIHwgQ29weSBcbiAgICAgIHwgQ3V0IFxuICAgICAgfCBEYmxjbGljayBcbiAgICAgIHwgRGV2aWNlY2hhbmdlIFxuICAgICAgfCBEZXZpY2VsaWdodCBcbiAgICAgIHwgRGV2aWNlbW90aW9uIFxuICAgICAgfCBEZXZpY2VvcmllbnRhdGlvbiBcbiAgICAgIHwgRGV2aWNlcHJveGltaXR5IFxuICAgICAgfCBEaXNjaGFyZ2luZ3RpbWVjaGFuZ2UgXG4gICAgICB8IERPTUFjdGl2YXRlIFxuICAgICAgfCBET01BdHRyaWJ1dGVOYW1lQ2hhbmdlZCBcbiAgICAgIHwgRE9NQXR0ck1vZGlmaWVkIFxuICAgICAgfCBET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWQgXG4gICAgICB8IERPTUNvbnRlbnRMb2FkZWQgXG4gICAgICB8IERPTUVsZW1lbnROYW1lQ2hhbmdlZCBcbiAgICAgIHwgRE9NRm9jdXNJbiBcbiAgICAgIHwgRE9NRm9jdXNPdXQgXG4gICAgICB8IERPTU5vZGVJbnNlcnRlZCBcbiAgICAgIHwgRE9NTm9kZUluc2VydGVkSW50b0RvY3VtZW50IFxuICAgICAgfCBET01Ob2RlUmVtb3ZlZCBcbiAgICAgIHwgRE9NTm9kZVJlbW92ZWRGcm9tRG9jdW1lbnQgXG4gICAgICB8IERPTVN1YnRyZWVNb2RpZmllZCBcbiAgICAgIHwgRG93bmxvYWRpbmcgXG4gICAgICB8IERyYWcgXG4gICAgICB8IERyYWdlbmQgXG4gICAgICB8IERyYWdlbnRlciBcbiAgICAgIHwgRHJhZ2xlYXZlIFxuICAgICAgfCBEcmFnb3ZlciBcbiAgICAgIHwgRHJhZ3N0YXJ0IFxuICAgICAgfCBEcm9wIFxuICAgICAgfCBEdXJhdGlvbmNoYW5nZSBcbiAgICAgIHwgRW1wdGllZCBcbiAgICAgIHwgRW5kIFxuICAgICAgfCBFbmRlZCBcbiAgICAgIHwgRW5kRXZlbnQgXG4gICAgICB8IEVycm9yIFxuICAgICAgfCBGb2N1cyBcbiAgICAgIHwgRm9jdXNpbiBcbiAgICAgIHwgRm9jdXNvdXQgXG4gICAgICB8IEZ1bGxzY3JlZW5jaGFuZ2UgXG4gICAgICB8IEZ1bGxzY3JlZW5lcnJvciBcbiAgICAgIHwgR2FtZXBhZGNvbm5lY3RlZCBcbiAgICAgIHwgR2FtZXBhZGRpc2Nvbm5lY3RlZCBcbiAgICAgIHwgR290cG9pbnRlcmNhcHR1cmUgXG4gICAgICB8IEhhc2hjaGFuZ2UgXG4gICAgICB8IElucHV0IFxuICAgICAgfCBJbnZhbGlkIFxuICAgICAgfCBLZXlkb3duIFxuICAgICAgfCBLZXlwcmVzcyBcbiAgICAgIHwgS2V5dXAgXG4gICAgICB8IExhbmd1YWdlY2hhbmdlIFxuICAgICAgfCBMZXZlbGNoYW5nZSBcbiAgICAgIHwgTG9hZCBcbiAgICAgIHwgTG9hZGVkZGF0YSBcbiAgICAgIHwgTG9hZGVkbWV0YWRhdGEgXG4gICAgICB8IExvYWRlbmQgXG4gICAgICB8IExvYWRzdGFydCBcbiAgICAgIHwgTG9zdHBvaW50ZXJjYXB0dXJlIFxuICAgICAgfCBNYXJrIFxuICAgICAgfCBNZXNzYWdlIFxuICAgICAgfCBNZXNzYWdlZXJyb3IgXG4gICAgICB8IE1vdXNlZG93biBcbiAgICAgIHwgTW91c2VlbnRlciBcbiAgICAgIHwgTW91c2VsZWF2ZSBcbiAgICAgIHwgTW91c2Vtb3ZlIFxuICAgICAgfCBNb3VzZW91dCBcbiAgICAgIHwgTW91c2VvdmVyIFxuICAgICAgfCBNb3VzZXVwIFxuICAgICAgfCBOb21hdGNoIFxuICAgICAgfCBOb3RpZmljYXRpb25jbGljayBcbiAgICAgIHwgTm91cGRhdGUgXG4gICAgICB8IE9ic29sZXRlIFxuICAgICAgfCBPZmZsaW5lIFxuICAgICAgfCBPbmxpbmUgXG4gICAgICB8IE9wZW4gXG4gICAgICB8IE9yaWVudGF0aW9uY2hhbmdlIFxuICAgICAgfCBQYWdlaGlkZSBcbiAgICAgIHwgUGFnZXNob3cgXG4gICAgICB8IFBhc3RlIFxuICAgICAgfCBQYXVzZSBcbiAgICAgIHwgUGxheSBcbiAgICAgIHwgUGxheWluZyBcbiAgICAgIHwgUG9pbnRlcmNhbmNlbCBcbiAgICAgIHwgUG9pbnRlcmRvd24gXG4gICAgICB8IFBvaW50ZXJlbnRlciBcbiAgICAgIHwgUG9pbnRlcmxlYXZlIFxuICAgICAgfCBQb2ludGVybG9ja2NoYW5nZSBcbiAgICAgIHwgUG9pbnRlcmxvY2tlcnJvciBcbiAgICAgIHwgUG9pbnRlcm1vdmUgXG4gICAgICB8IFBvaW50ZXJvdXQgXG4gICAgICB8IFBvaW50ZXJvdmVyIFxuICAgICAgfCBQb2ludGVydXAgXG4gICAgICB8IFBvcHN0YXRlIFxuICAgICAgfCBQcm9ncmVzcyBcbiAgICAgIHwgUHVzaCBcbiAgICAgIHwgUHVzaHN1YnNjcmlwdGlvbmNoYW5nZSBcbiAgICAgIHwgUmF0ZWNoYW5nZSBcbiAgICAgIHwgUmVhZHlzdGF0ZWNoYW5nZSBcbiAgICAgIHwgUmVwZWF0RXZlbnQgXG4gICAgICB8IFJlc2V0IFxuICAgICAgfCBSZXNpemUgXG4gICAgICB8IFJlc291cmNldGltaW5nYnVmZmVyZnVsbCBcbiAgICAgIHwgUmVzdWx0IFxuICAgICAgfCBSZXN1bWUgXG4gICAgICB8IFNjcm9sbCBcbiAgICAgIHwgU2Vla2VkIFxuICAgICAgfCBTZWVraW5nIFxuICAgICAgfCBTZWxlY3QgXG4gICAgICB8IFNlbGVjdGlvbmNoYW5nZSBcbiAgICAgIHwgU2VsZWN0c3RhcnQgXG4gICAgICB8IFNob3cgXG4gICAgICB8IFNsb3RjaGFuZ2UgXG4gICAgICB8IFNvdW5kZW5kIFxuICAgICAgfCBTb3VuZHN0YXJ0IFxuICAgICAgfCBTcGVlY2hlbmQgXG4gICAgICB8IFNwZWVjaHN0YXJ0IFxuICAgICAgfCBTdGFsbGVkIFxuICAgICAgfCBTdGFydCBcbiAgICAgIHwgU3RvcmFnZSBcbiAgICAgIHwgU3VibWl0IFxuICAgICAgfCBTdWNjZXNzIFxuICAgICAgfCBTdXNwZW5kIFxuICAgICAgfCBTVkdBYm9ydCBcbiAgICAgIHwgU1ZHRXJyb3IgXG4gICAgICB8IFNWR0xvYWQgXG4gICAgICB8IFNWR1Jlc2l6ZSBcbiAgICAgIHwgU1ZHU2Nyb2xsIFxuICAgICAgfCBTVkdVbmxvYWQgXG4gICAgICB8IFNWR1pvb20gXG4gICAgICB8IFRpbWVvdXQgXG4gICAgICB8IFRpbWV1cGRhdGUgXG4gICAgICB8IFRvdWNoY2FuY2VsIFxuICAgICAgfCBUb3VjaGVuZCBcbiAgICAgIHwgVG91Y2htb3ZlIFxuICAgICAgfCBUb3VjaHN0YXJ0IFxuICAgICAgfCBUcmFuc2l0aW9uZW5kIFxuICAgICAgfCBVbmxvYWQgXG4gICAgICB8IFVwZGF0ZXJlYWR5IFxuICAgICAgfCBVcGdyYWRlbmVlZGVkIFxuICAgICAgfCBVc2VycHJveGltaXR5IFxuICAgICAgfCBWZXJzaW9uY2hhbmdlIFxuICAgICAgfCBWaXNpYmlsaXR5Y2hhbmdlIFxuICAgICAgfCBWb2ljZXNjaGFuZ2VkIFxuICAgICAgfCBWb2x1bWVjaGFuZ2UgXG4gICAgICB8IFdhaXRpbmcgXG4gICAgICB8IFdoZWVsIFxuICAgICAgfCBOb25TdGFuZGFyZCBvZiBzdHJpbmcgXG4gICAgbGV0IHJlYyAoa2luZF9vZl9qcyA6IE9qcy50IC0+IGtpbmQpID1cbiAgICAgIGZ1biB4MTM3IC0+XG4gICAgICAgIGxldCB4MTM4ID0geDEzNyBpblxuICAgICAgICBtYXRjaCBPanMuc3RyaW5nX29mX2pzIHgxMzggd2l0aFxuICAgICAgICB8IFwiYWJvcnRcIiAtPiBBYm9ydFxuICAgICAgICB8IFwiYWZ0ZXJwcmludFwiIC0+IEFmdGVycHJpbnRcbiAgICAgICAgfCBcImFuaW1hdGlvbmVuZFwiIC0+IEFuaW1hdGlvbmVuZFxuICAgICAgICB8IFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIgLT4gQW5pbWF0aW9uaXRlcmF0aW9uXG4gICAgICAgIHwgXCJhbmltYXRpb25zdGFydFwiIC0+IEFuaW1hdGlvbnN0YXJ0XG4gICAgICAgIHwgXCJhcHBpbnN0YWxsZWRcIiAtPiBBcHBpbnN0YWxsZWRcbiAgICAgICAgfCBcImF1ZGlvZW5kXCIgLT4gQXVkaW9lbmRcbiAgICAgICAgfCBcImF1ZGlvcHJvY2Vzc1wiIC0+IEF1ZGlvcHJvY2Vzc1xuICAgICAgICB8IFwiYXVkaW9zdGFydFwiIC0+IEF1ZGlvc3RhcnRcbiAgICAgICAgfCBcImJlZm9yZXByaW50XCIgLT4gQmVmb3JlcHJpbnRcbiAgICAgICAgfCBcImJlZm9yZXVubG9hZFwiIC0+IEJlZm9yZXVubG9hZFxuICAgICAgICB8IFwiYmVnaW5FdmVudFwiIC0+IEJlZ2luRXZlbnRcbiAgICAgICAgfCBcImJsb2NrZWRcIiAtPiBCbG9ja2VkXG4gICAgICAgIHwgXCJibHVyXCIgLT4gQmx1clxuICAgICAgICB8IFwiYm91bmRhcnlcIiAtPiBCb3VuZGFyeVxuICAgICAgICB8IFwiY2FjaGVkXCIgLT4gQ2FjaGVkXG4gICAgICAgIHwgXCJjYW5wbGF5XCIgLT4gQ2FucGxheVxuICAgICAgICB8IFwiY2FucGxheXRocm91Z2hcIiAtPiBDYW5wbGF5dGhyb3VnaFxuICAgICAgICB8IFwiY2hhbmdlXCIgLT4gQ2hhbmdlXG4gICAgICAgIHwgXCJjaGFyZ2luZ2NoYW5nZVwiIC0+IENoYXJnaW5nY2hhbmdlXG4gICAgICAgIHwgXCJjaGFyZ2luZ3RpbWVjaGFuZ2VcIiAtPiBDaGFyZ2luZ3RpbWVjaGFuZ2VcbiAgICAgICAgfCBcImNoZWNraW5nXCIgLT4gQ2hlY2tpbmdcbiAgICAgICAgfCBcImNsaWNrXCIgLT4gQ2xpY2tcbiAgICAgICAgfCBcImNsb3NlXCIgLT4gQ2xvc2VcbiAgICAgICAgfCBcImNvbXBsZXRlXCIgLT4gQ29tcGxldGVcbiAgICAgICAgfCBcImNvbXBvc2l0aW9uZW5kXCIgLT4gQ29tcG9zaXRpb25lbmRcbiAgICAgICAgfCBcImNvbXBvc2l0aW9uc3RhcnRcIiAtPiBDb21wb3NpdGlvbnN0YXJ0XG4gICAgICAgIHwgXCJjb21wb3NpdGlvbnVwZGF0ZVwiIC0+IENvbXBvc2l0aW9udXBkYXRlXG4gICAgICAgIHwgXCJjb250ZXh0bWVudVwiIC0+IENvbnRleHRtZW51XG4gICAgICAgIHwgXCJjb3B5XCIgLT4gQ29weVxuICAgICAgICB8IFwiY3V0XCIgLT4gQ3V0XG4gICAgICAgIHwgXCJkYmxjbGlja1wiIC0+IERibGNsaWNrXG4gICAgICAgIHwgXCJkZXZpY2VjaGFuZ2VcIiAtPiBEZXZpY2VjaGFuZ2VcbiAgICAgICAgfCBcImRldmljZWxpZ2h0XCIgLT4gRGV2aWNlbGlnaHRcbiAgICAgICAgfCBcImRldmljZW1vdGlvblwiIC0+IERldmljZW1vdGlvblxuICAgICAgICB8IFwiZGV2aWNlb3JpZW50YXRpb25cIiAtPiBEZXZpY2VvcmllbnRhdGlvblxuICAgICAgICB8IFwiZGV2aWNlcHJveGltaXR5XCIgLT4gRGV2aWNlcHJveGltaXR5XG4gICAgICAgIHwgXCJkaXNjaGFyZ2luZ3RpbWVjaGFuZ2VcIiAtPiBEaXNjaGFyZ2luZ3RpbWVjaGFuZ2VcbiAgICAgICAgfCBcIkRPTUFjdGl2YXRlXCIgLT4gRE9NQWN0aXZhdGVcbiAgICAgICAgfCBcIkRPTUF0dHJpYnV0ZU5hbWVDaGFuZ2VkXCIgLT4gRE9NQXR0cmlidXRlTmFtZUNoYW5nZWRcbiAgICAgICAgfCBcIkRPTUF0dHJNb2RpZmllZFwiIC0+IERPTUF0dHJNb2RpZmllZFxuICAgICAgICB8IFwiRE9NQ2hhcmFjdGVyRGF0YU1vZGlmaWVkXCIgLT4gRE9NQ2hhcmFjdGVyRGF0YU1vZGlmaWVkXG4gICAgICAgIHwgXCJET01Db250ZW50TG9hZGVkXCIgLT4gRE9NQ29udGVudExvYWRlZFxuICAgICAgICB8IFwiRE9NRWxlbWVudE5hbWVDaGFuZ2VkXCIgLT4gRE9NRWxlbWVudE5hbWVDaGFuZ2VkXG4gICAgICAgIHwgXCJET01Gb2N1c0luXCIgLT4gRE9NRm9jdXNJblxuICAgICAgICB8IFwiRE9NRm9jdXNPdXRcIiAtPiBET01Gb2N1c091dFxuICAgICAgICB8IFwiRE9NTm9kZUluc2VydGVkXCIgLT4gRE9NTm9kZUluc2VydGVkXG4gICAgICAgIHwgXCJET01Ob2RlSW5zZXJ0ZWRJbnRvRG9jdW1lbnRcIiAtPiBET01Ob2RlSW5zZXJ0ZWRJbnRvRG9jdW1lbnRcbiAgICAgICAgfCBcIkRPTU5vZGVSZW1vdmVkXCIgLT4gRE9NTm9kZVJlbW92ZWRcbiAgICAgICAgfCBcIkRPTU5vZGVSZW1vdmVkRnJvbURvY3VtZW50XCIgLT4gRE9NTm9kZVJlbW92ZWRGcm9tRG9jdW1lbnRcbiAgICAgICAgfCBcIkRPTVN1YnRyZWVNb2RpZmllZFwiIC0+IERPTVN1YnRyZWVNb2RpZmllZFxuICAgICAgICB8IFwiZG93bmxvYWRpbmdcIiAtPiBEb3dubG9hZGluZ1xuICAgICAgICB8IFwiZHJhZ1wiIC0+IERyYWdcbiAgICAgICAgfCBcImRyYWdlbmRcIiAtPiBEcmFnZW5kXG4gICAgICAgIHwgXCJkcmFnZW50ZXJcIiAtPiBEcmFnZW50ZXJcbiAgICAgICAgfCBcImRyYWdsZWF2ZVwiIC0+IERyYWdsZWF2ZVxuICAgICAgICB8IFwiZHJhZ292ZXJcIiAtPiBEcmFnb3ZlclxuICAgICAgICB8IFwiZHJhZ3N0YXJ0XCIgLT4gRHJhZ3N0YXJ0XG4gICAgICAgIHwgXCJkcm9wXCIgLT4gRHJvcFxuICAgICAgICB8IFwiZHVyYXRpb25jaGFuZ2VcIiAtPiBEdXJhdGlvbmNoYW5nZVxuICAgICAgICB8IFwiZW1wdGllZFwiIC0+IEVtcHRpZWRcbiAgICAgICAgfCBcImVuZFwiIC0+IEVuZFxuICAgICAgICB8IFwiZW5kZWRcIiAtPiBFbmRlZFxuICAgICAgICB8IFwiZW5kRXZlbnRcIiAtPiBFbmRFdmVudFxuICAgICAgICB8IFwiZXJyb3JcIiAtPiBFcnJvclxuICAgICAgICB8IFwiZm9jdXNcIiAtPiBGb2N1c1xuICAgICAgICB8IFwiZm9jdXNpblwiIC0+IEZvY3VzaW5cbiAgICAgICAgfCBcImZvY3Vzb3V0XCIgLT4gRm9jdXNvdXRcbiAgICAgICAgfCBcImZ1bGxzY3JlZW5jaGFuZ2VcIiAtPiBGdWxsc2NyZWVuY2hhbmdlXG4gICAgICAgIHwgXCJmdWxsc2NyZWVuZXJyb3JcIiAtPiBGdWxsc2NyZWVuZXJyb3JcbiAgICAgICAgfCBcImdhbWVwYWRjb25uZWN0ZWRcIiAtPiBHYW1lcGFkY29ubmVjdGVkXG4gICAgICAgIHwgXCJnYW1lcGFkZGlzY29ubmVjdGVkXCIgLT4gR2FtZXBhZGRpc2Nvbm5lY3RlZFxuICAgICAgICB8IFwiZ290cG9pbnRlcmNhcHR1cmVcIiAtPiBHb3Rwb2ludGVyY2FwdHVyZVxuICAgICAgICB8IFwiaGFzaGNoYW5nZVwiIC0+IEhhc2hjaGFuZ2VcbiAgICAgICAgfCBcImlucHV0XCIgLT4gSW5wdXRcbiAgICAgICAgfCBcImludmFsaWRcIiAtPiBJbnZhbGlkXG4gICAgICAgIHwgXCJrZXlkb3duXCIgLT4gS2V5ZG93blxuICAgICAgICB8IFwia2V5cHJlc3NcIiAtPiBLZXlwcmVzc1xuICAgICAgICB8IFwia2V5dXBcIiAtPiBLZXl1cFxuICAgICAgICB8IFwibGFuZ3VhZ2VjaGFuZ2VcIiAtPiBMYW5ndWFnZWNoYW5nZVxuICAgICAgICB8IFwibGV2ZWxjaGFuZ2VcIiAtPiBMZXZlbGNoYW5nZVxuICAgICAgICB8IFwibG9hZFwiIC0+IExvYWRcbiAgICAgICAgfCBcImxvYWRlZGRhdGFcIiAtPiBMb2FkZWRkYXRhXG4gICAgICAgIHwgXCJsb2FkZWRtZXRhZGF0YVwiIC0+IExvYWRlZG1ldGFkYXRhXG4gICAgICAgIHwgXCJsb2FkZW5kXCIgLT4gTG9hZGVuZFxuICAgICAgICB8IFwibG9hZHN0YXJ0XCIgLT4gTG9hZHN0YXJ0XG4gICAgICAgIHwgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIiAtPiBMb3N0cG9pbnRlcmNhcHR1cmVcbiAgICAgICAgfCBcIm1hcmtcIiAtPiBNYXJrXG4gICAgICAgIHwgXCJtZXNzYWdlXCIgLT4gTWVzc2FnZVxuICAgICAgICB8IFwibWVzc2FnZWVycm9yXCIgLT4gTWVzc2FnZWVycm9yXG4gICAgICAgIHwgXCJtb3VzZWRvd25cIiAtPiBNb3VzZWRvd25cbiAgICAgICAgfCBcIm1vdXNlZW50ZXJcIiAtPiBNb3VzZWVudGVyXG4gICAgICAgIHwgXCJtb3VzZWxlYXZlXCIgLT4gTW91c2VsZWF2ZVxuICAgICAgICB8IFwibW91c2Vtb3ZlXCIgLT4gTW91c2Vtb3ZlXG4gICAgICAgIHwgXCJtb3VzZW91dFwiIC0+IE1vdXNlb3V0XG4gICAgICAgIHwgXCJtb3VzZW92ZXJcIiAtPiBNb3VzZW92ZXJcbiAgICAgICAgfCBcIm1vdXNldXBcIiAtPiBNb3VzZXVwXG4gICAgICAgIHwgXCJub21hdGNoXCIgLT4gTm9tYXRjaFxuICAgICAgICB8IFwibm90aWZpY2F0aW9uY2xpY2tcIiAtPiBOb3RpZmljYXRpb25jbGlja1xuICAgICAgICB8IFwibm91cGRhdGVcIiAtPiBOb3VwZGF0ZVxuICAgICAgICB8IFwib2Jzb2xldGVcIiAtPiBPYnNvbGV0ZVxuICAgICAgICB8IFwib2ZmbGluZVwiIC0+IE9mZmxpbmVcbiAgICAgICAgfCBcIm9ubGluZVwiIC0+IE9ubGluZVxuICAgICAgICB8IFwib3BlblwiIC0+IE9wZW5cbiAgICAgICAgfCBcIm9yaWVudGF0aW9uY2hhbmdlXCIgLT4gT3JpZW50YXRpb25jaGFuZ2VcbiAgICAgICAgfCBcInBhZ2VoaWRlXCIgLT4gUGFnZWhpZGVcbiAgICAgICAgfCBcInBhZ2VzaG93XCIgLT4gUGFnZXNob3dcbiAgICAgICAgfCBcInBhc3RlXCIgLT4gUGFzdGVcbiAgICAgICAgfCBcInBhdXNlXCIgLT4gUGF1c2VcbiAgICAgICAgfCBcInBsYXlcIiAtPiBQbGF5XG4gICAgICAgIHwgXCJwbGF5aW5nXCIgLT4gUGxheWluZ1xuICAgICAgICB8IFwicG9pbnRlcmNhbmNlbFwiIC0+IFBvaW50ZXJjYW5jZWxcbiAgICAgICAgfCBcInBvaW50ZXJkb3duXCIgLT4gUG9pbnRlcmRvd25cbiAgICAgICAgfCBcInBvaW50ZXJlbnRlclwiIC0+IFBvaW50ZXJlbnRlclxuICAgICAgICB8IFwicG9pbnRlcmxlYXZlXCIgLT4gUG9pbnRlcmxlYXZlXG4gICAgICAgIHwgXCJwb2ludGVybG9ja2NoYW5nZVwiIC0+IFBvaW50ZXJsb2NrY2hhbmdlXG4gICAgICAgIHwgXCJwb2ludGVybG9ja2Vycm9yXCIgLT4gUG9pbnRlcmxvY2tlcnJvclxuICAgICAgICB8IFwicG9pbnRlcm1vdmVcIiAtPiBQb2ludGVybW92ZVxuICAgICAgICB8IFwicG9pbnRlcm91dFwiIC0+IFBvaW50ZXJvdXRcbiAgICAgICAgfCBcInBvaW50ZXJvdmVyXCIgLT4gUG9pbnRlcm92ZXJcbiAgICAgICAgfCBcInBvaW50ZXJ1cFwiIC0+IFBvaW50ZXJ1cFxuICAgICAgICB8IFwicG9wc3RhdGVcIiAtPiBQb3BzdGF0ZVxuICAgICAgICB8IFwicHJvZ3Jlc3NcIiAtPiBQcm9ncmVzc1xuICAgICAgICB8IFwicHVzaFwiIC0+IFB1c2hcbiAgICAgICAgfCBcInB1c2hzdWJzY3JpcHRpb25jaGFuZ2VcIiAtPiBQdXNoc3Vic2NyaXB0aW9uY2hhbmdlXG4gICAgICAgIHwgXCJyYXRlY2hhbmdlXCIgLT4gUmF0ZWNoYW5nZVxuICAgICAgICB8IFwicmVhZHlzdGF0ZWNoYW5nZVwiIC0+IFJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgfCBcInJlcGVhdEV2ZW50XCIgLT4gUmVwZWF0RXZlbnRcbiAgICAgICAgfCBcInJlc2V0XCIgLT4gUmVzZXRcbiAgICAgICAgfCBcInJlc2l6ZVwiIC0+IFJlc2l6ZVxuICAgICAgICB8IFwicmVzb3VyY2V0aW1pbmdidWZmZXJmdWxsXCIgLT4gUmVzb3VyY2V0aW1pbmdidWZmZXJmdWxsXG4gICAgICAgIHwgXCJyZXN1bHRcIiAtPiBSZXN1bHRcbiAgICAgICAgfCBcInJlc3VtZVwiIC0+IFJlc3VtZVxuICAgICAgICB8IFwic2Nyb2xsXCIgLT4gU2Nyb2xsXG4gICAgICAgIHwgXCJzZWVrZWRcIiAtPiBTZWVrZWRcbiAgICAgICAgfCBcInNlZWtpbmdcIiAtPiBTZWVraW5nXG4gICAgICAgIHwgXCJzZWxlY3RcIiAtPiBTZWxlY3RcbiAgICAgICAgfCBcInNlbGVjdGlvbmNoYW5nZVwiIC0+IFNlbGVjdGlvbmNoYW5nZVxuICAgICAgICB8IFwic2VsZWN0c3RhcnRcIiAtPiBTZWxlY3RzdGFydFxuICAgICAgICB8IFwic2hvd1wiIC0+IFNob3dcbiAgICAgICAgfCBcInNsb3RjaGFuZ2VcIiAtPiBTbG90Y2hhbmdlXG4gICAgICAgIHwgXCJzb3VuZGVuZFwiIC0+IFNvdW5kZW5kXG4gICAgICAgIHwgXCJzb3VuZHN0YXJ0XCIgLT4gU291bmRzdGFydFxuICAgICAgICB8IFwic3BlZWNoZW5kXCIgLT4gU3BlZWNoZW5kXG4gICAgICAgIHwgXCJzcGVlY2hzdGFydFwiIC0+IFNwZWVjaHN0YXJ0XG4gICAgICAgIHwgXCJzdGFsbGVkXCIgLT4gU3RhbGxlZFxuICAgICAgICB8IFwic3RhcnRcIiAtPiBTdGFydFxuICAgICAgICB8IFwic3RvcmFnZVwiIC0+IFN0b3JhZ2VcbiAgICAgICAgfCBcInN1Ym1pdFwiIC0+IFN1Ym1pdFxuICAgICAgICB8IFwic3VjY2Vzc1wiIC0+IFN1Y2Nlc3NcbiAgICAgICAgfCBcInN1c3BlbmRcIiAtPiBTdXNwZW5kXG4gICAgICAgIHwgXCJTVkdBYm9ydFwiIC0+IFNWR0Fib3J0XG4gICAgICAgIHwgXCJTVkdFcnJvclwiIC0+IFNWR0Vycm9yXG4gICAgICAgIHwgXCJTVkdMb2FkXCIgLT4gU1ZHTG9hZFxuICAgICAgICB8IFwiU1ZHUmVzaXplXCIgLT4gU1ZHUmVzaXplXG4gICAgICAgIHwgXCJTVkdTY3JvbGxcIiAtPiBTVkdTY3JvbGxcbiAgICAgICAgfCBcIlNWR1VubG9hZFwiIC0+IFNWR1VubG9hZFxuICAgICAgICB8IFwiU1ZHWm9vbVwiIC0+IFNWR1pvb21cbiAgICAgICAgfCBcInRpbWVvdXRcIiAtPiBUaW1lb3V0XG4gICAgICAgIHwgXCJ0aW1ldXBkYXRlXCIgLT4gVGltZXVwZGF0ZVxuICAgICAgICB8IFwidG91Y2hjYW5jZWxcIiAtPiBUb3VjaGNhbmNlbFxuICAgICAgICB8IFwidG91Y2hlbmRcIiAtPiBUb3VjaGVuZFxuICAgICAgICB8IFwidG91Y2htb3ZlXCIgLT4gVG91Y2htb3ZlXG4gICAgICAgIHwgXCJ0b3VjaHN0YXJ0XCIgLT4gVG91Y2hzdGFydFxuICAgICAgICB8IFwidHJhbnNpdGlvbmVuZFwiIC0+IFRyYW5zaXRpb25lbmRcbiAgICAgICAgfCBcInVubG9hZFwiIC0+IFVubG9hZFxuICAgICAgICB8IFwidXBkYXRlcmVhZHlcIiAtPiBVcGRhdGVyZWFkeVxuICAgICAgICB8IFwidXBncmFkZW5lZWRlZFwiIC0+IFVwZ3JhZGVuZWVkZWRcbiAgICAgICAgfCBcInVzZXJwcm94aW1pdHlcIiAtPiBVc2VycHJveGltaXR5XG4gICAgICAgIHwgXCJ2ZXJzaW9uY2hhbmdlXCIgLT4gVmVyc2lvbmNoYW5nZVxuICAgICAgICB8IFwidmlzaWJpbGl0eWNoYW5nZVwiIC0+IFZpc2liaWxpdHljaGFuZ2VcbiAgICAgICAgfCBcInZvaWNlc2NoYW5nZWRcIiAtPiBWb2ljZXNjaGFuZ2VkXG4gICAgICAgIHwgXCJ2b2x1bWVjaGFuZ2VcIiAtPiBWb2x1bWVjaGFuZ2VcbiAgICAgICAgfCBcIndhaXRpbmdcIiAtPiBXYWl0aW5nXG4gICAgICAgIHwgXCJ3aGVlbFwiIC0+IFdoZWVsXG4gICAgICAgIHwgeDEzOSAtPiBOb25TdGFuZGFyZCB4MTM5XG4gICAgYW5kIChraW5kX3RvX2pzIDoga2luZCAtPiBPanMudCkgPVxuICAgICAgZnVuIHgxMzUgLT5cbiAgICAgICAgbWF0Y2ggeDEzNSB3aXRoXG4gICAgICAgIHwgQWJvcnQgLT4gT2pzLnN0cmluZ190b19qcyBcImFib3J0XCJcbiAgICAgICAgfCBBZnRlcnByaW50IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJhZnRlcnByaW50XCJcbiAgICAgICAgfCBBbmltYXRpb25lbmQgLT4gT2pzLnN0cmluZ190b19qcyBcImFuaW1hdGlvbmVuZFwiXG4gICAgICAgIHwgQW5pbWF0aW9uaXRlcmF0aW9uIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJhbmltYXRpb25pdGVyYXRpb25cIlxuICAgICAgICB8IEFuaW1hdGlvbnN0YXJ0IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJhbmltYXRpb25zdGFydFwiXG4gICAgICAgIHwgQXBwaW5zdGFsbGVkIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJhcHBpbnN0YWxsZWRcIlxuICAgICAgICB8IEF1ZGlvZW5kIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJhdWRpb2VuZFwiXG4gICAgICAgIHwgQXVkaW9wcm9jZXNzIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJhdWRpb3Byb2Nlc3NcIlxuICAgICAgICB8IEF1ZGlvc3RhcnQgLT4gT2pzLnN0cmluZ190b19qcyBcImF1ZGlvc3RhcnRcIlxuICAgICAgICB8IEJlZm9yZXByaW50IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJiZWZvcmVwcmludFwiXG4gICAgICAgIHwgQmVmb3JldW5sb2FkIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJiZWZvcmV1bmxvYWRcIlxuICAgICAgICB8IEJlZ2luRXZlbnQgLT4gT2pzLnN0cmluZ190b19qcyBcImJlZ2luRXZlbnRcIlxuICAgICAgICB8IEJsb2NrZWQgLT4gT2pzLnN0cmluZ190b19qcyBcImJsb2NrZWRcIlxuICAgICAgICB8IEJsdXIgLT4gT2pzLnN0cmluZ190b19qcyBcImJsdXJcIlxuICAgICAgICB8IEJvdW5kYXJ5IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJib3VuZGFyeVwiXG4gICAgICAgIHwgQ2FjaGVkIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjYWNoZWRcIlxuICAgICAgICB8IENhbnBsYXkgLT4gT2pzLnN0cmluZ190b19qcyBcImNhbnBsYXlcIlxuICAgICAgICB8IENhbnBsYXl0aHJvdWdoIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjYW5wbGF5dGhyb3VnaFwiXG4gICAgICAgIHwgQ2hhbmdlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjaGFuZ2VcIlxuICAgICAgICB8IENoYXJnaW5nY2hhbmdlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjaGFyZ2luZ2NoYW5nZVwiXG4gICAgICAgIHwgQ2hhcmdpbmd0aW1lY2hhbmdlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjaGFyZ2luZ3RpbWVjaGFuZ2VcIlxuICAgICAgICB8IENoZWNraW5nIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjaGVja2luZ1wiXG4gICAgICAgIHwgQ2xpY2sgLT4gT2pzLnN0cmluZ190b19qcyBcImNsaWNrXCJcbiAgICAgICAgfCBDbG9zZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiY2xvc2VcIlxuICAgICAgICB8IENvbXBsZXRlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjb21wbGV0ZVwiXG4gICAgICAgIHwgQ29tcG9zaXRpb25lbmQgLT4gT2pzLnN0cmluZ190b19qcyBcImNvbXBvc2l0aW9uZW5kXCJcbiAgICAgICAgfCBDb21wb3NpdGlvbnN0YXJ0IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjb21wb3NpdGlvbnN0YXJ0XCJcbiAgICAgICAgfCBDb21wb3NpdGlvbnVwZGF0ZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiY29tcG9zaXRpb251cGRhdGVcIlxuICAgICAgICB8IENvbnRleHRtZW51IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjb250ZXh0bWVudVwiXG4gICAgICAgIHwgQ29weSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiY29weVwiXG4gICAgICAgIHwgQ3V0IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJjdXRcIlxuICAgICAgICB8IERibGNsaWNrIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJkYmxjbGlja1wiXG4gICAgICAgIHwgRGV2aWNlY2hhbmdlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJkZXZpY2VjaGFuZ2VcIlxuICAgICAgICB8IERldmljZWxpZ2h0IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJkZXZpY2VsaWdodFwiXG4gICAgICAgIHwgRGV2aWNlbW90aW9uIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJkZXZpY2Vtb3Rpb25cIlxuICAgICAgICB8IERldmljZW9yaWVudGF0aW9uIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJkZXZpY2VvcmllbnRhdGlvblwiXG4gICAgICAgIHwgRGV2aWNlcHJveGltaXR5IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJkZXZpY2Vwcm94aW1pdHlcIlxuICAgICAgICB8IERpc2NoYXJnaW5ndGltZWNoYW5nZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZGlzY2hhcmdpbmd0aW1lY2hhbmdlXCJcbiAgICAgICAgfCBET01BY3RpdmF0ZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiRE9NQWN0aXZhdGVcIlxuICAgICAgICB8IERPTUF0dHJpYnV0ZU5hbWVDaGFuZ2VkIC0+XG4gICAgICAgICAgICBPanMuc3RyaW5nX3RvX2pzIFwiRE9NQXR0cmlidXRlTmFtZUNoYW5nZWRcIlxuICAgICAgICB8IERPTUF0dHJNb2RpZmllZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwiRE9NQXR0ck1vZGlmaWVkXCJcbiAgICAgICAgfCBET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWQgLT5cbiAgICAgICAgICAgIE9qcy5zdHJpbmdfdG9fanMgXCJET01DaGFyYWN0ZXJEYXRhTW9kaWZpZWRcIlxuICAgICAgICB8IERPTUNvbnRlbnRMb2FkZWQgLT4gT2pzLnN0cmluZ190b19qcyBcIkRPTUNvbnRlbnRMb2FkZWRcIlxuICAgICAgICB8IERPTUVsZW1lbnROYW1lQ2hhbmdlZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwiRE9NRWxlbWVudE5hbWVDaGFuZ2VkXCJcbiAgICAgICAgfCBET01Gb2N1c0luIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJET01Gb2N1c0luXCJcbiAgICAgICAgfCBET01Gb2N1c091dCAtPiBPanMuc3RyaW5nX3RvX2pzIFwiRE9NRm9jdXNPdXRcIlxuICAgICAgICB8IERPTU5vZGVJbnNlcnRlZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwiRE9NTm9kZUluc2VydGVkXCJcbiAgICAgICAgfCBET01Ob2RlSW5zZXJ0ZWRJbnRvRG9jdW1lbnQgLT5cbiAgICAgICAgICAgIE9qcy5zdHJpbmdfdG9fanMgXCJET01Ob2RlSW5zZXJ0ZWRJbnRvRG9jdW1lbnRcIlxuICAgICAgICB8IERPTU5vZGVSZW1vdmVkIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJET01Ob2RlUmVtb3ZlZFwiXG4gICAgICAgIHwgRE9NTm9kZVJlbW92ZWRGcm9tRG9jdW1lbnQgLT5cbiAgICAgICAgICAgIE9qcy5zdHJpbmdfdG9fanMgXCJET01Ob2RlUmVtb3ZlZEZyb21Eb2N1bWVudFwiXG4gICAgICAgIHwgRE9NU3VidHJlZU1vZGlmaWVkIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJET01TdWJ0cmVlTW9kaWZpZWRcIlxuICAgICAgICB8IERvd25sb2FkaW5nIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJkb3dubG9hZGluZ1wiXG4gICAgICAgIHwgRHJhZyAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZHJhZ1wiXG4gICAgICAgIHwgRHJhZ2VuZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZHJhZ2VuZFwiXG4gICAgICAgIHwgRHJhZ2VudGVyIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJkcmFnZW50ZXJcIlxuICAgICAgICB8IERyYWdsZWF2ZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZHJhZ2xlYXZlXCJcbiAgICAgICAgfCBEcmFnb3ZlciAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZHJhZ292ZXJcIlxuICAgICAgICB8IERyYWdzdGFydCAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZHJhZ3N0YXJ0XCJcbiAgICAgICAgfCBEcm9wIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJkcm9wXCJcbiAgICAgICAgfCBEdXJhdGlvbmNoYW5nZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZHVyYXRpb25jaGFuZ2VcIlxuICAgICAgICB8IEVtcHRpZWQgLT4gT2pzLnN0cmluZ190b19qcyBcImVtcHRpZWRcIlxuICAgICAgICB8IEVuZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZW5kXCJcbiAgICAgICAgfCBFbmRlZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZW5kZWRcIlxuICAgICAgICB8IEVuZEV2ZW50IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJlbmRFdmVudFwiXG4gICAgICAgIHwgRXJyb3IgLT4gT2pzLnN0cmluZ190b19qcyBcImVycm9yXCJcbiAgICAgICAgfCBGb2N1cyAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZm9jdXNcIlxuICAgICAgICB8IEZvY3VzaW4gLT4gT2pzLnN0cmluZ190b19qcyBcImZvY3VzaW5cIlxuICAgICAgICB8IEZvY3Vzb3V0IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJmb2N1c291dFwiXG4gICAgICAgIHwgRnVsbHNjcmVlbmNoYW5nZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiZnVsbHNjcmVlbmNoYW5nZVwiXG4gICAgICAgIHwgRnVsbHNjcmVlbmVycm9yIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJmdWxsc2NyZWVuZXJyb3JcIlxuICAgICAgICB8IEdhbWVwYWRjb25uZWN0ZWQgLT4gT2pzLnN0cmluZ190b19qcyBcImdhbWVwYWRjb25uZWN0ZWRcIlxuICAgICAgICB8IEdhbWVwYWRkaXNjb25uZWN0ZWQgLT4gT2pzLnN0cmluZ190b19qcyBcImdhbWVwYWRkaXNjb25uZWN0ZWRcIlxuICAgICAgICB8IEdvdHBvaW50ZXJjYXB0dXJlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJnb3Rwb2ludGVyY2FwdHVyZVwiXG4gICAgICAgIHwgSGFzaGNoYW5nZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiaGFzaGNoYW5nZVwiXG4gICAgICAgIHwgSW5wdXQgLT4gT2pzLnN0cmluZ190b19qcyBcImlucHV0XCJcbiAgICAgICAgfCBJbnZhbGlkIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJpbnZhbGlkXCJcbiAgICAgICAgfCBLZXlkb3duIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJrZXlkb3duXCJcbiAgICAgICAgfCBLZXlwcmVzcyAtPiBPanMuc3RyaW5nX3RvX2pzIFwia2V5cHJlc3NcIlxuICAgICAgICB8IEtleXVwIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJrZXl1cFwiXG4gICAgICAgIHwgTGFuZ3VhZ2VjaGFuZ2UgLT4gT2pzLnN0cmluZ190b19qcyBcImxhbmd1YWdlY2hhbmdlXCJcbiAgICAgICAgfCBMZXZlbGNoYW5nZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwibGV2ZWxjaGFuZ2VcIlxuICAgICAgICB8IExvYWQgLT4gT2pzLnN0cmluZ190b19qcyBcImxvYWRcIlxuICAgICAgICB8IExvYWRlZGRhdGEgLT4gT2pzLnN0cmluZ190b19qcyBcImxvYWRlZGRhdGFcIlxuICAgICAgICB8IExvYWRlZG1ldGFkYXRhIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJsb2FkZWRtZXRhZGF0YVwiXG4gICAgICAgIHwgTG9hZGVuZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwibG9hZGVuZFwiXG4gICAgICAgIHwgTG9hZHN0YXJ0IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJsb2Fkc3RhcnRcIlxuICAgICAgICB8IExvc3Rwb2ludGVyY2FwdHVyZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwibG9zdHBvaW50ZXJjYXB0dXJlXCJcbiAgICAgICAgfCBNYXJrIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJtYXJrXCJcbiAgICAgICAgfCBNZXNzYWdlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJtZXNzYWdlXCJcbiAgICAgICAgfCBNZXNzYWdlZXJyb3IgLT4gT2pzLnN0cmluZ190b19qcyBcIm1lc3NhZ2VlcnJvclwiXG4gICAgICAgIHwgTW91c2Vkb3duIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJtb3VzZWRvd25cIlxuICAgICAgICB8IE1vdXNlZW50ZXIgLT4gT2pzLnN0cmluZ190b19qcyBcIm1vdXNlZW50ZXJcIlxuICAgICAgICB8IE1vdXNlbGVhdmUgLT4gT2pzLnN0cmluZ190b19qcyBcIm1vdXNlbGVhdmVcIlxuICAgICAgICB8IE1vdXNlbW92ZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwibW91c2Vtb3ZlXCJcbiAgICAgICAgfCBNb3VzZW91dCAtPiBPanMuc3RyaW5nX3RvX2pzIFwibW91c2VvdXRcIlxuICAgICAgICB8IE1vdXNlb3ZlciAtPiBPanMuc3RyaW5nX3RvX2pzIFwibW91c2VvdmVyXCJcbiAgICAgICAgfCBNb3VzZXVwIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJtb3VzZXVwXCJcbiAgICAgICAgfCBOb21hdGNoIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJub21hdGNoXCJcbiAgICAgICAgfCBOb3RpZmljYXRpb25jbGljayAtPiBPanMuc3RyaW5nX3RvX2pzIFwibm90aWZpY2F0aW9uY2xpY2tcIlxuICAgICAgICB8IE5vdXBkYXRlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJub3VwZGF0ZVwiXG4gICAgICAgIHwgT2Jzb2xldGUgLT4gT2pzLnN0cmluZ190b19qcyBcIm9ic29sZXRlXCJcbiAgICAgICAgfCBPZmZsaW5lIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJvZmZsaW5lXCJcbiAgICAgICAgfCBPbmxpbmUgLT4gT2pzLnN0cmluZ190b19qcyBcIm9ubGluZVwiXG4gICAgICAgIHwgT3BlbiAtPiBPanMuc3RyaW5nX3RvX2pzIFwib3BlblwiXG4gICAgICAgIHwgT3JpZW50YXRpb25jaGFuZ2UgLT4gT2pzLnN0cmluZ190b19qcyBcIm9yaWVudGF0aW9uY2hhbmdlXCJcbiAgICAgICAgfCBQYWdlaGlkZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwicGFnZWhpZGVcIlxuICAgICAgICB8IFBhZ2VzaG93IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJwYWdlc2hvd1wiXG4gICAgICAgIHwgUGFzdGUgLT4gT2pzLnN0cmluZ190b19qcyBcInBhc3RlXCJcbiAgICAgICAgfCBQYXVzZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwicGF1c2VcIlxuICAgICAgICB8IFBsYXkgLT4gT2pzLnN0cmluZ190b19qcyBcInBsYXlcIlxuICAgICAgICB8IFBsYXlpbmcgLT4gT2pzLnN0cmluZ190b19qcyBcInBsYXlpbmdcIlxuICAgICAgICB8IFBvaW50ZXJjYW5jZWwgLT4gT2pzLnN0cmluZ190b19qcyBcInBvaW50ZXJjYW5jZWxcIlxuICAgICAgICB8IFBvaW50ZXJkb3duIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJwb2ludGVyZG93blwiXG4gICAgICAgIHwgUG9pbnRlcmVudGVyIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJwb2ludGVyZW50ZXJcIlxuICAgICAgICB8IFBvaW50ZXJsZWF2ZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwicG9pbnRlcmxlYXZlXCJcbiAgICAgICAgfCBQb2ludGVybG9ja2NoYW5nZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwicG9pbnRlcmxvY2tjaGFuZ2VcIlxuICAgICAgICB8IFBvaW50ZXJsb2NrZXJyb3IgLT4gT2pzLnN0cmluZ190b19qcyBcInBvaW50ZXJsb2NrZXJyb3JcIlxuICAgICAgICB8IFBvaW50ZXJtb3ZlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJwb2ludGVybW92ZVwiXG4gICAgICAgIHwgUG9pbnRlcm91dCAtPiBPanMuc3RyaW5nX3RvX2pzIFwicG9pbnRlcm91dFwiXG4gICAgICAgIHwgUG9pbnRlcm92ZXIgLT4gT2pzLnN0cmluZ190b19qcyBcInBvaW50ZXJvdmVyXCJcbiAgICAgICAgfCBQb2ludGVydXAgLT4gT2pzLnN0cmluZ190b19qcyBcInBvaW50ZXJ1cFwiXG4gICAgICAgIHwgUG9wc3RhdGUgLT4gT2pzLnN0cmluZ190b19qcyBcInBvcHN0YXRlXCJcbiAgICAgICAgfCBQcm9ncmVzcyAtPiBPanMuc3RyaW5nX3RvX2pzIFwicHJvZ3Jlc3NcIlxuICAgICAgICB8IFB1c2ggLT4gT2pzLnN0cmluZ190b19qcyBcInB1c2hcIlxuICAgICAgICB8IFB1c2hzdWJzY3JpcHRpb25jaGFuZ2UgLT4gT2pzLnN0cmluZ190b19qcyBcInB1c2hzdWJzY3JpcHRpb25jaGFuZ2VcIlxuICAgICAgICB8IFJhdGVjaGFuZ2UgLT4gT2pzLnN0cmluZ190b19qcyBcInJhdGVjaGFuZ2VcIlxuICAgICAgICB8IFJlYWR5c3RhdGVjaGFuZ2UgLT4gT2pzLnN0cmluZ190b19qcyBcInJlYWR5c3RhdGVjaGFuZ2VcIlxuICAgICAgICB8IFJlcGVhdEV2ZW50IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJyZXBlYXRFdmVudFwiXG4gICAgICAgIHwgUmVzZXQgLT4gT2pzLnN0cmluZ190b19qcyBcInJlc2V0XCJcbiAgICAgICAgfCBSZXNpemUgLT4gT2pzLnN0cmluZ190b19qcyBcInJlc2l6ZVwiXG4gICAgICAgIHwgUmVzb3VyY2V0aW1pbmdidWZmZXJmdWxsIC0+XG4gICAgICAgICAgICBPanMuc3RyaW5nX3RvX2pzIFwicmVzb3VyY2V0aW1pbmdidWZmZXJmdWxsXCJcbiAgICAgICAgfCBSZXN1bHQgLT4gT2pzLnN0cmluZ190b19qcyBcInJlc3VsdFwiXG4gICAgICAgIHwgUmVzdW1lIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJyZXN1bWVcIlxuICAgICAgICB8IFNjcm9sbCAtPiBPanMuc3RyaW5nX3RvX2pzIFwic2Nyb2xsXCJcbiAgICAgICAgfCBTZWVrZWQgLT4gT2pzLnN0cmluZ190b19qcyBcInNlZWtlZFwiXG4gICAgICAgIHwgU2Vla2luZyAtPiBPanMuc3RyaW5nX3RvX2pzIFwic2Vla2luZ1wiXG4gICAgICAgIHwgU2VsZWN0IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJzZWxlY3RcIlxuICAgICAgICB8IFNlbGVjdGlvbmNoYW5nZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwic2VsZWN0aW9uY2hhbmdlXCJcbiAgICAgICAgfCBTZWxlY3RzdGFydCAtPiBPanMuc3RyaW5nX3RvX2pzIFwic2VsZWN0c3RhcnRcIlxuICAgICAgICB8IFNob3cgLT4gT2pzLnN0cmluZ190b19qcyBcInNob3dcIlxuICAgICAgICB8IFNsb3RjaGFuZ2UgLT4gT2pzLnN0cmluZ190b19qcyBcInNsb3RjaGFuZ2VcIlxuICAgICAgICB8IFNvdW5kZW5kIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJzb3VuZGVuZFwiXG4gICAgICAgIHwgU291bmRzdGFydCAtPiBPanMuc3RyaW5nX3RvX2pzIFwic291bmRzdGFydFwiXG4gICAgICAgIHwgU3BlZWNoZW5kIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJzcGVlY2hlbmRcIlxuICAgICAgICB8IFNwZWVjaHN0YXJ0IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJzcGVlY2hzdGFydFwiXG4gICAgICAgIHwgU3RhbGxlZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwic3RhbGxlZFwiXG4gICAgICAgIHwgU3RhcnQgLT4gT2pzLnN0cmluZ190b19qcyBcInN0YXJ0XCJcbiAgICAgICAgfCBTdG9yYWdlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJzdG9yYWdlXCJcbiAgICAgICAgfCBTdWJtaXQgLT4gT2pzLnN0cmluZ190b19qcyBcInN1Ym1pdFwiXG4gICAgICAgIHwgU3VjY2VzcyAtPiBPanMuc3RyaW5nX3RvX2pzIFwic3VjY2Vzc1wiXG4gICAgICAgIHwgU3VzcGVuZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwic3VzcGVuZFwiXG4gICAgICAgIHwgU1ZHQWJvcnQgLT4gT2pzLnN0cmluZ190b19qcyBcIlNWR0Fib3J0XCJcbiAgICAgICAgfCBTVkdFcnJvciAtPiBPanMuc3RyaW5nX3RvX2pzIFwiU1ZHRXJyb3JcIlxuICAgICAgICB8IFNWR0xvYWQgLT4gT2pzLnN0cmluZ190b19qcyBcIlNWR0xvYWRcIlxuICAgICAgICB8IFNWR1Jlc2l6ZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwiU1ZHUmVzaXplXCJcbiAgICAgICAgfCBTVkdTY3JvbGwgLT4gT2pzLnN0cmluZ190b19qcyBcIlNWR1Njcm9sbFwiXG4gICAgICAgIHwgU1ZHVW5sb2FkIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJTVkdVbmxvYWRcIlxuICAgICAgICB8IFNWR1pvb20gLT4gT2pzLnN0cmluZ190b19qcyBcIlNWR1pvb21cIlxuICAgICAgICB8IFRpbWVvdXQgLT4gT2pzLnN0cmluZ190b19qcyBcInRpbWVvdXRcIlxuICAgICAgICB8IFRpbWV1cGRhdGUgLT4gT2pzLnN0cmluZ190b19qcyBcInRpbWV1cGRhdGVcIlxuICAgICAgICB8IFRvdWNoY2FuY2VsIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJ0b3VjaGNhbmNlbFwiXG4gICAgICAgIHwgVG91Y2hlbmQgLT4gT2pzLnN0cmluZ190b19qcyBcInRvdWNoZW5kXCJcbiAgICAgICAgfCBUb3VjaG1vdmUgLT4gT2pzLnN0cmluZ190b19qcyBcInRvdWNobW92ZVwiXG4gICAgICAgIHwgVG91Y2hzdGFydCAtPiBPanMuc3RyaW5nX3RvX2pzIFwidG91Y2hzdGFydFwiXG4gICAgICAgIHwgVHJhbnNpdGlvbmVuZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwidHJhbnNpdGlvbmVuZFwiXG4gICAgICAgIHwgVW5sb2FkIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJ1bmxvYWRcIlxuICAgICAgICB8IFVwZGF0ZXJlYWR5IC0+IE9qcy5zdHJpbmdfdG9fanMgXCJ1cGRhdGVyZWFkeVwiXG4gICAgICAgIHwgVXBncmFkZW5lZWRlZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwidXBncmFkZW5lZWRlZFwiXG4gICAgICAgIHwgVXNlcnByb3hpbWl0eSAtPiBPanMuc3RyaW5nX3RvX2pzIFwidXNlcnByb3hpbWl0eVwiXG4gICAgICAgIHwgVmVyc2lvbmNoYW5nZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwidmVyc2lvbmNoYW5nZVwiXG4gICAgICAgIHwgVmlzaWJpbGl0eWNoYW5nZSAtPiBPanMuc3RyaW5nX3RvX2pzIFwidmlzaWJpbGl0eWNoYW5nZVwiXG4gICAgICAgIHwgVm9pY2VzY2hhbmdlZCAtPiBPanMuc3RyaW5nX3RvX2pzIFwidm9pY2VzY2hhbmdlZFwiXG4gICAgICAgIHwgVm9sdW1lY2hhbmdlIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJ2b2x1bWVjaGFuZ2VcIlxuICAgICAgICB8IFdhaXRpbmcgLT4gT2pzLnN0cmluZ190b19qcyBcIndhaXRpbmdcIlxuICAgICAgICB8IFdoZWVsIC0+IE9qcy5zdHJpbmdfdG9fanMgXCJ3aGVlbFwiXG4gICAgICAgIHwgTm9uU3RhbmRhcmQgeDEzNiAtPiBPanMuc3RyaW5nX3RvX2pzIHgxMzZcbiAgICBsZXQgKHRhcmdldCA6IHQgLT4gT2pzLnQpID0gZnVuIHgxNDAgLT4gT2pzLmdldCAodF90b19qcyB4MTQwKSBcInRhcmdldFwiXG4gICAgbGV0IChwcmV2ZW50X2RlZmF1bHQgOiB0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MTQxIC0+IGlnbm9yZSAoT2pzLmNhbGwgKHRfdG9fanMgeDE0MSkgXCJwcmV2ZW50RGVmYXVsdFwiIFt8fF0pXG4gICAgbGV0ICh0eXBlXyA6IHQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDE0MiAtPiBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNDIpIFwidHlwZVwiKVxuICAgIGxldCAoaW5pdF9ldmVudCA6IHQgLT4ga2luZCAtPiBib29sIC0+IGJvb2wgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgxNDYgLT5cbiAgICAgICAgZnVuIHgxNDMgLT5cbiAgICAgICAgICBmdW4geDE0NCAtPlxuICAgICAgICAgICAgZnVuIHgxNDUgLT5cbiAgICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgxNDYpIFwiaW5pdEV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICBbfChraW5kX3RvX2pzIHgxNDMpOyhPanMuYm9vbF90b19qcyB4MTQ0KTsoT2pzLmJvb2xfdG9fanNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MTQ1KXxdKVxuICAgIGxldCAoY2xpZW50X3ggOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHgxNDcgLT4gT2pzLmludF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MTQ3KSBcImNsaWVudFhcIilcbiAgICBsZXQgKGNsaWVudF95IDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4MTQ4IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE0OCkgXCJjbGllbnRZXCIpXG4gICAgbGV0IChwYWdlX3ggOiB0IC0+IGZsb2F0KSA9XG4gICAgICBmdW4geDE0OSAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE0OSkgXCJwYWdlWFwiKVxuICAgIGxldCAocGFnZV95IDogdCAtPiBmbG9hdCkgPVxuICAgICAgZnVuIHgxNTAgLT4gT2pzLmZsb2F0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNTApIFwicGFnZVlcIilcbiAgICBsZXQgKHNjcmVlbl94IDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4MTUxIC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE1MSkgXCJzY3JlZW5YXCIpXG4gICAgbGV0IChzY3JlZW5feSA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDE1MiAtPiBPanMuaW50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNTIpIFwic2NyZWVuWVwiKVxuICAgIGxldCAobW92ZW1lbnRfeCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDE1MyAtPiBPanMuaW50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNTMpIFwibW92ZW1lbnRYXCIpXG4gICAgbGV0IChtb3ZlbWVudF95IDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4MTU0IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE1NCkgXCJtb3ZlbWVudFlcIilcbiAgICBsZXQgKGJ1dHRvbnMgOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHgxNTUgLT4gT2pzLmludF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MTU1KSBcImJ1dHRvbnNcIilcbiAgICBsZXQgKGFsdF9rZXkgOiB0IC0+IGJvb2wpID1cbiAgICAgIGZ1biB4MTU2IC0+IE9qcy5ib29sX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNTYpIFwiYWx0S2V5XCIpXG4gICAgbGV0IChjdHJsX2tleSA6IHQgLT4gYm9vbCkgPVxuICAgICAgZnVuIHgxNTcgLT4gT2pzLmJvb2xfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE1NykgXCJjdHJsS2V5XCIpXG4gICAgbGV0IChzaGlmdF9rZXkgOiB0IC0+IGJvb2wpID1cbiAgICAgIGZ1biB4MTU4IC0+IE9qcy5ib29sX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNTgpIFwic2hpZnRLZXlcIilcbiAgICBsZXQgKHdoaWNoIDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4MTU5IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE1OSkgXCJ3aGljaFwiKVxuICAgIGxldCAoY29kZSA6IHQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDE2MCAtPiBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNjApIFwiY29kZVwiKVxuICAgIGxldCAoa2V5IDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4MTYxIC0+IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE2MSkgXCJrZXlcIilcbiAgICBsZXQgKGRlbHRhX3kgOiB0IC0+IGZsb2F0KSA9XG4gICAgICBmdW4geDE2MiAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE2MikgXCJkZWx0YVlcIilcbiAgICBsZXQgKGRlbHRhX3ggOiB0IC0+IGZsb2F0KSA9XG4gICAgICBmdW4geDE2MyAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE2MykgXCJkZWx0YVhcIilcbiAgICBsZXQgKGRhdGFfdHJhbnNmZXIgOiB0IC0+IERhdGFUcmFuc2Zlci50KSA9XG4gICAgICBmdW4geDE2NCAtPlxuICAgICAgICBEYXRhVHJhbnNmZXIudF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MTY0KSBcImRhdGFUcmFuc2ZlclwiKVxuICAgIGxldCAoZGF0YSA6IHQgLT4gT2pzLnQpID0gZnVuIHgxNjUgLT4gT2pzLmdldCAodF90b19qcyB4MTY1KSBcImRhdGFcIlxuICAgIGxldCAob3JpZ2luIDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4MTY2IC0+IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE2NikgXCJvcmlnaW5cIilcbiAgZW5kXG5tb2R1bGUgUmVjdCA9XG4gIHN0cnVjdFxuICAgIHR5cGUgdCA9IE9qcy50XG4gICAgbGV0IHJlYyAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gZnVuIHgxNjggLT4geDE2OFxuICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gZnVuIHgxNjcgLT4geDE2N1xuICAgIGxldCAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gdF9vZl9qc1xuICAgIGxldCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gdF90b19qc1xuICAgIGxldCAoaGVpZ2h0IDogdCAtPiBmbG9hdCkgPVxuICAgICAgZnVuIHgxNzEgLT4gT2pzLmZsb2F0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNzEpIFwiaGVpZ2h0XCIpXG4gICAgbGV0ICh3aWR0aCA6IHQgLT4gZmxvYXQpID1cbiAgICAgIGZ1biB4MTcyIC0+IE9qcy5mbG9hdF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MTcyKSBcIndpZHRoXCIpXG4gICAgbGV0IChsZWZ0IDogdCAtPiBmbG9hdCkgPVxuICAgICAgZnVuIHgxNzMgLT4gT2pzLmZsb2F0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNzMpIFwibGVmdFwiKVxuICAgIGxldCAocmlnaHQgOiB0IC0+IGZsb2F0KSA9XG4gICAgICBmdW4geDE3NCAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE3NCkgXCJyaWdodFwiKVxuICAgIGxldCAodG9wIDogdCAtPiBmbG9hdCkgPVxuICAgICAgZnVuIHgxNzUgLT4gT2pzLmZsb2F0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxNzUpIFwidG9wXCIpXG4gICAgbGV0IChib3R0b20gOiB0IC0+IGZsb2F0KSA9XG4gICAgICBmdW4geDE3NiAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE3NikgXCJib3R0b21cIilcbiAgZW5kXG5tb2R1bGUgU1ZHUmVjdCA9XG4gIHN0cnVjdFxuICAgIHR5cGUgdCA9IE9qcy50XG4gICAgbGV0IHJlYyAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gZnVuIHgxNzggLT4geDE3OFxuICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gZnVuIHgxNzcgLT4geDE3N1xuICAgIGxldCAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gdF9vZl9qc1xuICAgIGxldCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gdF90b19qc1xuICAgIGxldCAoeCA6IHQgLT4gZmxvYXQpID1cbiAgICAgIGZ1biB4MTgxIC0+IE9qcy5mbG9hdF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MTgxKSBcInhcIilcbiAgICBsZXQgKHkgOiB0IC0+IGZsb2F0KSA9XG4gICAgICBmdW4geDE4MiAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE4MikgXCJ5XCIpXG4gICAgbGV0IChoZWlnaHQgOiB0IC0+IGZsb2F0KSA9XG4gICAgICBmdW4geDE4MyAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDE4MykgXCJoZWlnaHRcIilcbiAgICBsZXQgKHdpZHRoIDogdCAtPiBmbG9hdCkgPVxuICAgICAgZnVuIHgxODQgLT4gT2pzLmZsb2F0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgxODQpIFwid2lkdGhcIilcbiAgZW5kXG5tb2R1bGUgU3R5bGUgPVxuICBzdHJ1Y3RcbiAgICB0eXBlIHQgPSBPanMudFxuICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4MTg2IC0+IHgxODZcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4MTg1IC0+IHgxODVcbiAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICBsZXQgc2V0IHN0eWxlIHByb3AgdmFsdWUgPVxuICAgICAgT2pzLnNldCAodF90b19qcyBzdHlsZSkgcHJvcCAoT2pzLnN0cmluZ190b19qcyB2YWx1ZSlcbiAgICBsZXQgKHNldF9jb2xvciA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MTg5IC0+XG4gICAgICAgIGZ1biB4MTkwIC0+IE9qcy5zZXQgKHRfdG9fanMgeDE4OSkgXCJjb2xvclwiIChPanMuc3RyaW5nX3RvX2pzIHgxOTApXG4gICAgbGV0IChzZXRfYm9yZGVyIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgxOTEgLT5cbiAgICAgICAgZnVuIHgxOTIgLT4gT2pzLnNldCAodF90b19qcyB4MTkxKSBcImJvcmRlclwiIChPanMuc3RyaW5nX3RvX2pzIHgxOTIpXG4gICAgbGV0IChzZXRfYmFja2dyb3VuZCA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MTkzIC0+XG4gICAgICAgIGZ1biB4MTk0IC0+XG4gICAgICAgICAgT2pzLnNldCAodF90b19qcyB4MTkzKSBcImJhY2tncm91bmRcIiAoT2pzLnN0cmluZ190b19qcyB4MTk0KVxuICAgIGxldCAoc2V0X2JhY2tncm91bmRfY29sb3IgOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDE5NSAtPlxuICAgICAgICBmdW4geDE5NiAtPlxuICAgICAgICAgIE9qcy5zZXQgKHRfdG9fanMgeDE5NSkgXCJiYWNrZ3JvdW5kQ29sb3JcIiAoT2pzLnN0cmluZ190b19qcyB4MTk2KVxuICAgIGxldCAoc2V0X2hlaWdodCA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MTk3IC0+XG4gICAgICAgIGZ1biB4MTk4IC0+IE9qcy5zZXQgKHRfdG9fanMgeDE5NykgXCJoZWlnaHRcIiAoT2pzLnN0cmluZ190b19qcyB4MTk4KVxuICAgIGxldCAoc2V0X3dpZHRoIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgxOTkgLT5cbiAgICAgICAgZnVuIHgyMDAgLT4gT2pzLnNldCAodF90b19qcyB4MTk5KSBcIndpZHRoXCIgKE9qcy5zdHJpbmdfdG9fanMgeDIwMClcbiAgICBsZXQgKHNldF9ib3R0b20gOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDIwMSAtPlxuICAgICAgICBmdW4geDIwMiAtPiBPanMuc2V0ICh0X3RvX2pzIHgyMDEpIFwiYm90dG9tXCIgKE9qcy5zdHJpbmdfdG9fanMgeDIwMilcbiAgICBsZXQgKHNldF9sZWZ0IDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgyMDMgLT5cbiAgICAgICAgZnVuIHgyMDQgLT4gT2pzLnNldCAodF90b19qcyB4MjAzKSBcImxlZnRcIiAoT2pzLnN0cmluZ190b19qcyB4MjA0KVxuICAgIGxldCAoc2V0X3RvcCA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjA1IC0+XG4gICAgICAgIGZ1biB4MjA2IC0+IE9qcy5zZXQgKHRfdG9fanMgeDIwNSkgXCJ0b3BcIiAoT2pzLnN0cmluZ190b19qcyB4MjA2KVxuICAgIGxldCAoc2V0X3JpZ2h0IDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgyMDcgLT5cbiAgICAgICAgZnVuIHgyMDggLT4gT2pzLnNldCAodF90b19qcyB4MjA3KSBcInJpZ2h0XCIgKE9qcy5zdHJpbmdfdG9fanMgeDIwOClcbiAgICBsZXQgKHNldF9wb3NpdGlvbiA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjA5IC0+XG4gICAgICAgIGZ1biB4MjEwIC0+IE9qcy5zZXQgKHRfdG9fanMgeDIwOSkgXCJwb3NpdGlvblwiIChPanMuc3RyaW5nX3RvX2pzIHgyMTApXG4gICAgbGV0IChzZXRfY3Vyc29yIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgyMTEgLT5cbiAgICAgICAgZnVuIHgyMTIgLT4gT2pzLnNldCAodF90b19qcyB4MjExKSBcImN1cnNvclwiIChPanMuc3RyaW5nX3RvX2pzIHgyMTIpXG4gICAgbGV0IChzZXRfZGlzcGxheSA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjEzIC0+XG4gICAgICAgIGZ1biB4MjE0IC0+IE9qcy5zZXQgKHRfdG9fanMgeDIxMykgXCJkaXNwbGF5XCIgKE9qcy5zdHJpbmdfdG9fanMgeDIxNClcbiAgICBsZXQgZ2V0IHN0eWxlIHByb3AgPSBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHN0eWxlKSBwcm9wKVxuICBlbmRcbm1vZHVsZSBFbGVtZW50ID1cbiAgc3RydWN0XG4gICAgdHlwZSB0ID0gT2pzLnRcbiAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBmdW4geDIxNiAtPiB4MjE2XG4gICAgYW5kICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSBmdW4geDIxNSAtPiB4MjE1XG4gICAgbGV0ICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSB0X29mX2pzXG4gICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgbGV0IG51bGwgPSB0X29mX2pzIE9qcy5udWxsXG4gICAgbGV0IChjbG9uZV9ub2RlIDogdCAtPiBib29sIC0+IHQpID1cbiAgICAgIGZ1biB4MjIwIC0+XG4gICAgICAgIGZ1biB4MjE5IC0+XG4gICAgICAgICAgdF9vZl9qc1xuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgyMjApIFwiY2xvbmVOb2RlXCIgW3woT2pzLmJvb2xfdG9fanMgeDIxOSl8XSlcbiAgICBsZXQgKGNvbnRhaW5zIDogdCAtPiB0IC0+IGJvb2wpID1cbiAgICAgIGZ1biB4MjIyIC0+XG4gICAgICAgIGZ1biB4MjIxIC0+XG4gICAgICAgICAgT2pzLmJvb2xfb2ZfanNcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MjIyKSBcImNvbnRhaW5zXCIgW3wodF90b19qcyB4MjIxKXxdKVxuICAgIGxldCAoYXBwZW5kX2NoaWxkIDogdCAtPiB0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjI0IC0+XG4gICAgICAgIGZ1biB4MjIzIC0+XG4gICAgICAgICAgaWdub3JlIChPanMuY2FsbCAodF90b19qcyB4MjI0KSBcImFwcGVuZENoaWxkXCIgW3wodF90b19qcyB4MjIzKXxdKVxuICAgIGxldCAoaW5zZXJ0X2JlZm9yZSA6IHQgLT4gdCAtPiB0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjI3IC0+XG4gICAgICAgIGZ1biB4MjI1IC0+XG4gICAgICAgICAgZnVuIHgyMjYgLT5cbiAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDIyNykgXCJpbnNlcnRCZWZvcmVcIlxuICAgICAgICAgICAgICAgICBbfCh0X3RvX2pzIHgyMjUpOyh0X3RvX2pzIHgyMjYpfF0pXG4gICAgbGV0IChyZXBsYWNlX2NoaWxkIDogdCAtPiB0IC0+IHQgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgyMzAgLT5cbiAgICAgICAgZnVuIHgyMjggLT5cbiAgICAgICAgICBmdW4geDIyOSAtPlxuICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MjMwKSBcInJlcGxhY2VDaGlsZFwiXG4gICAgICAgICAgICAgICAgIFt8KHRfdG9fanMgeDIyOCk7KHRfdG9fanMgeDIyOSl8XSlcbiAgICBsZXQgKHJlbW92ZV9jaGlsZCA6IHQgLT4gdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDIzMiAtPlxuICAgICAgICBmdW4geDIzMSAtPlxuICAgICAgICAgIGlnbm9yZSAoT2pzLmNhbGwgKHRfdG9fanMgeDIzMikgXCJyZW1vdmVDaGlsZFwiIFt8KHRfdG9fanMgeDIzMSl8XSlcbiAgICBsZXQgKGZpcnN0X2NoaWxkIDogdCAtPiB0KSA9XG4gICAgICBmdW4geDIzMyAtPiB0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyMzMpIFwiZmlyc3RDaGlsZFwiKVxuICAgIGxldCAobGFzdF9jaGlsZCA6IHQgLT4gdCkgPVxuICAgICAgZnVuIHgyMzQgLT4gdF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MjM0KSBcImxhc3RDaGlsZFwiKVxuICAgIGxldCAobmV4dF9zaWJsaW5nIDogdCAtPiB0KSA9XG4gICAgICBmdW4geDIzNSAtPiB0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyMzUpIFwibmV4dFNpYmxpbmdcIilcbiAgICBsZXQgcmVtb3ZlX2FsbF9jaGlsZHJlbiB4ID1cbiAgICAgIGxldCByZWMgbG9vcCBjaGlsZCA9XG4gICAgICAgIGlmIGNoaWxkID0gbnVsbFxuICAgICAgICB0aGVuICgpXG4gICAgICAgIGVsc2UgKHJlbW92ZV9jaGlsZCB4IGNoaWxkOyBsb29wIChmaXJzdF9jaGlsZCB4KSkgaW5cbiAgICAgIGxvb3AgKGZpcnN0X2NoaWxkIHgpXG4gICAgbGV0IChoYXNfY2hpbGRfbm9kZXMgOiB0IC0+IGJvb2wpID1cbiAgICAgIGZ1biB4MjM2IC0+XG4gICAgICAgIE9qcy5ib29sX29mX2pzIChPanMuY2FsbCAodF90b19qcyB4MjM2KSBcImhhc0NoaWxkTm9kZXNcIiBbfHxdKVxuICAgIGxldCAoYWRkX2V2ZW50X2xpc3RlbmVyIDpcbiAgICAgIHQgLT4gRXZlbnQua2luZCAtPiAoRXZlbnQudCAtPiB1bml0KSAtPiBib29sIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjQxIC0+XG4gICAgICAgIGZ1biB4MjM3IC0+XG4gICAgICAgICAgZnVuIHgyMzggLT5cbiAgICAgICAgICAgIGZ1biB4MjQwIC0+XG4gICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MjQxKSBcImFkZEV2ZW50TGlzdGVuZXJcIlxuICAgICAgICAgICAgICAgICAgIFt8KEV2ZW50LmtpbmRfdG9fanMgeDIzNyk7KE9qcy5mdW5fdG9fanMgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZ1biB4MjM5IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4MjM4IChFdmVudC50X29mX2pzIHgyMzkpKSk7KFxuICAgICAgICAgICAgICAgICAgICAgT2pzLmJvb2xfdG9fanMgeDI0MCl8XSlcbiAgICBsZXQgKGlubmVyX3RleHQgOiB0IC0+IHN0cmluZykgPVxuICAgICAgZnVuIHgyNDIgLT4gT2pzLnN0cmluZ19vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MjQyKSBcImlubmVyVGV4dFwiKVxuICAgIGxldCAoZ2V0X2VsZW1lbnRzX2J5X3RhZ19uYW1lIDogdCAtPiBzdHJpbmcgLT4gdCBhcnJheSkgPVxuICAgICAgZnVuIHgyNDQgLT5cbiAgICAgICAgZnVuIHgyNDMgLT5cbiAgICAgICAgICBPanMuYXJyYXlfb2ZfanMgdF9vZl9qc1xuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgyNDQpIFwiZ2V0RWxlbWVudHNCeVRhZ05hbWVcIlxuICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4MjQzKXxdKVxuICAgIGxldCAoZ2V0X2VsZW1lbnRzX2J5X2NsYXNzX25hbWUgOiB0IC0+IHN0cmluZyAtPiB0IGFycmF5KSA9XG4gICAgICBmdW4geDI0NyAtPlxuICAgICAgICBmdW4geDI0NiAtPlxuICAgICAgICAgIE9qcy5hcnJheV9vZl9qcyB0X29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDI0NykgXCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgIFt8KE9qcy5zdHJpbmdfdG9fanMgeDI0Nil8XSlcbiAgICBsZXQgKGhhc19hdHRyaWJ1dGUgOiB0IC0+IHN0cmluZyAtPiBib29sKSA9XG4gICAgICBmdW4geDI1MCAtPlxuICAgICAgICBmdW4geDI0OSAtPlxuICAgICAgICAgIE9qcy5ib29sX29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDI1MCkgXCJoYXNBdHRyaWJ1dGVcIlxuICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4MjQ5KXxdKVxuICAgIGxldCAoZ2V0X2F0dHJpYnV0ZSA6IHQgLT4gc3RyaW5nIC0+IHN0cmluZykgPVxuICAgICAgZnVuIHgyNTIgLT5cbiAgICAgICAgZnVuIHgyNTEgLT5cbiAgICAgICAgICBPanMuc3RyaW5nX29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDI1MikgXCJnZXRBdHRyaWJ1dGVcIlxuICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4MjUxKXxdKVxuICAgIGxldCAocmVtb3ZlX2F0dHJpYnV0ZSA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjU0IC0+XG4gICAgICAgIGZ1biB4MjUzIC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDI1NCkgXCJyZW1vdmVBdHRyaWJ1dGVcIlxuICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4MjUzKXxdKVxuICAgIGxldCAoc2V0X2F0dHJpYnV0ZSA6IHQgLT4gc3RyaW5nIC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDI1NyAtPlxuICAgICAgICBmdW4geDI1NSAtPlxuICAgICAgICAgIGZ1biB4MjU2IC0+XG4gICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgyNTcpIFwic2V0QXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4MjU1KTsoT2pzLnN0cmluZ190b19qcyB4MjU2KXxdKVxuICAgIGxldCAoZ2V0X2JvdW5kaW5nX2NsaWVudF9yZWN0IDogdCAtPiBSZWN0LnQpID1cbiAgICAgIGZ1biB4MjU4IC0+XG4gICAgICAgIFJlY3QudF9vZl9qcyAoT2pzLmNhbGwgKHRfdG9fanMgeDI1OCkgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBbfHxdKVxuICAgIGxldCAoZ2V0X2JvdW5kaW5nX2JveCA6IHQgLT4gU1ZHUmVjdC50KSA9XG4gICAgICBmdW4geDI1OSAtPiBTVkdSZWN0LnRfb2ZfanMgKE9qcy5jYWxsICh0X3RvX2pzIHgyNTkpIFwiZ2V0QkJveFwiIFt8fF0pXG4gICAgbGV0IChub3JtYWxpemUgOiB0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjYwIC0+IGlnbm9yZSAoT2pzLmNhbGwgKHRfdG9fanMgeDI2MCkgXCJub3JtYWxpemVcIiBbfHxdKVxuICAgIGxldCAodmFsdWUgOiB0IC0+IHN0cmluZykgPVxuICAgICAgZnVuIHgyNjEgLT4gT2pzLnN0cmluZ19vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MjYxKSBcInZhbHVlXCIpXG4gICAgbGV0IChzZXRfdmFsdWUgOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDI2MiAtPlxuICAgICAgICBmdW4geDI2MyAtPiBPanMuc2V0ICh0X3RvX2pzIHgyNjIpIFwidmFsdWVcIiAoT2pzLnN0cmluZ190b19qcyB4MjYzKVxuICAgIGxldCAoc2VsZWN0IDogdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDI2NCAtPiBpZ25vcmUgKE9qcy5jYWxsICh0X3RvX2pzIHgyNjQpIFwic2VsZWN0XCIgW3x8XSlcbiAgICBsZXQgKGZpbGVzIDogdCAtPiBGaWxlLnQgbGlzdCkgPVxuICAgICAgZnVuIHgyNjUgLT5cbiAgICAgICAgT2pzLmxpc3Rfb2ZfanMgRmlsZS50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyNjUpIFwiZmlsZXNcIilcbiAgICBsZXQgKHNlbGVjdGVkX2luZGV4IDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4MjY3IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDI2NykgXCJzZWxlY3RlZEluZGV4XCIpXG4gICAgbGV0IChjaGVja2VkIDogdCAtPiBib29sKSA9XG4gICAgICBmdW4geDI2OCAtPiBPanMuYm9vbF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MjY4KSBcImNoZWNrZWRcIilcbiAgICBsZXQgKHNldF9jaGVja2VkIDogdCAtPiBib29sIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjY5IC0+XG4gICAgICAgIGZ1biB4MjcwIC0+IE9qcy5zZXQgKHRfdG9fanMgeDI2OSkgXCJjaGVja2VkXCIgKE9qcy5ib29sX3RvX2pzIHgyNzApXG4gICAgbGV0IChub2RlX3ZhbHVlIDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4MjcxIC0+IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDI3MSkgXCJub2RlVmFsdWVcIilcbiAgICBsZXQgKHNldF9ub2RlX3ZhbHVlIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgyNzIgLT5cbiAgICAgICAgZnVuIHgyNzMgLT5cbiAgICAgICAgICBPanMuc2V0ICh0X3RvX2pzIHgyNzIpIFwibm9kZVZhbHVlXCIgKE9qcy5zdHJpbmdfdG9fanMgeDI3MylcbiAgICBsZXQgKHBhcmVudF9ub2RlIDogdCAtPiB0KSA9XG4gICAgICBmdW4geDI3NCAtPiB0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyNzQpIFwicGFyZW50Tm9kZVwiKVxuICAgIGxldCAobm9kZV9uYW1lIDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4Mjc1IC0+IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDI3NSkgXCJub2RlTmFtZVwiKVxuICAgIGxldCAoZGlzcGF0Y2hfZXZlbnQgOiB0IC0+IEV2ZW50LnQgLT4gYm9vbCkgPVxuICAgICAgZnVuIHgyNzcgLT5cbiAgICAgICAgZnVuIHgyNzYgLT5cbiAgICAgICAgICBPanMuYm9vbF9vZl9qc1xuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgyNzcpIFwiZGlzcGF0Y2hFdmVudFwiIFt8KEV2ZW50LnRfdG9fanMgeDI3Nil8XSlcbiAgICBsZXQgKHN0eWxlIDogdCAtPiBTdHlsZS50KSA9XG4gICAgICBmdW4geDI3OCAtPiBTdHlsZS50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyNzgpIFwic3R5bGVcIilcbiAgICBsZXQgKHNldF9pbm5lcl9IVE1MIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgyNzkgLT5cbiAgICAgICAgZnVuIHgyODAgLT5cbiAgICAgICAgICBPanMuc2V0ICh0X3RvX2pzIHgyNzkpIFwiaW5uZXJIVE1MXCIgKE9qcy5zdHJpbmdfdG9fanMgeDI4MClcbiAgICBsZXQgKHNldF90ZXh0X2NvbnRlbnQgOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDI4MSAtPlxuICAgICAgICBmdW4geDI4MiAtPlxuICAgICAgICAgIE9qcy5zZXQgKHRfdG9fanMgeDI4MSkgXCJ0ZXh0Q29udGVudFwiIChPanMuc3RyaW5nX3RvX2pzIHgyODIpXG4gICAgbGV0IChzZXRfY2xhc3NfbmFtZSA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MjgzIC0+XG4gICAgICAgIGZ1biB4Mjg0IC0+XG4gICAgICAgICAgT2pzLnNldCAodF90b19qcyB4MjgzKSBcImNsYXNzTmFtZVwiIChPanMuc3RyaW5nX3RvX2pzIHgyODQpXG4gICAgbGV0IChjbGFzc19uYW1lIDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4Mjg1IC0+IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDI4NSkgXCJjbGFzc05hbWVcIilcbiAgICBsZXQgKGNsaWVudF93aWR0aCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDI4NiAtPiBPanMuaW50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyODYpIFwiY2xpZW50V2lkdGhcIilcbiAgICBsZXQgKGNsaWVudF9oZWlnaHQgOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHgyODcgLT4gT2pzLmludF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4Mjg3KSBcImNsaWVudEhlaWdodFwiKVxuICAgIGxldCAoc2Nyb2xsX3dpZHRoIDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4Mjg4IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDI4OCkgXCJzY3JvbGxXaWR0aFwiKVxuICAgIGxldCAoc2Nyb2xsX2hlaWdodCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDI4OSAtPiBPanMuaW50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyODkpIFwic2Nyb2xsSGVpZ2h0XCIpXG4gICAgbGV0ICh3aWR0aCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDI5MCAtPiBPanMuaW50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyOTApIFwid2lkdGhcIilcbiAgICBsZXQgKGhlaWdodCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDI5MSAtPiBPanMuaW50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyOTEpIFwiaGVpZ2h0XCIpXG4gICAgbGV0IChvZmZzZXRfcGFyZW50IDogdCAtPiB0IG9wdGlvbikgPVxuICAgICAgZnVuIHgyOTIgLT5cbiAgICAgICAgT2pzLm9wdGlvbl9vZl9qcyB0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgyOTIpIFwib2Zmc2V0UGFyZW50XCIpXG4gICAgbGV0IChvZmZzZXRfdG9wIDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4Mjk0IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDI5NCkgXCJvZmZzZXRUb3BcIilcbiAgICBsZXQgKG9mZnNldF9sZWZ0IDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4Mjk1IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDI5NSkgXCJvZmZzZXRMZWZ0XCIpXG4gICAgbGV0IChvZmZzZXRfd2lkdGggOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHgyOTYgLT4gT2pzLmludF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4Mjk2KSBcIm9mZnNldFdpZHRoXCIpXG4gICAgbGV0IChvZmZzZXRfaGVpZ2h0IDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4Mjk3IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDI5NykgXCJvZmZzZXRIZWlnaHRcIilcbiAgICBsZXQgKHNjcm9sbF90b3AgOiB0IC0+IGZsb2F0KSA9XG4gICAgICBmdW4geDI5OCAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDI5OCkgXCJzY3JvbGxUb3BcIilcbiAgICBsZXQgKHNldF9zY3JvbGxfdG9wIDogdCAtPiBmbG9hdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDI5OSAtPlxuICAgICAgICBmdW4geDMwMCAtPiBPanMuc2V0ICh0X3RvX2pzIHgyOTkpIFwic2Nyb2xsVG9wXCIgKE9qcy5mbG9hdF90b19qcyB4MzAwKVxuICAgIGxldCAoZm9jdXMgOiB0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MzAxIC0+IGlnbm9yZSAoT2pzLmNhbGwgKHRfdG9fanMgeDMwMSkgXCJmb2N1c1wiIFt8fF0pXG4gICAgbGV0IChibHVyIDogdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDMwMiAtPiBpZ25vcmUgKE9qcy5jYWxsICh0X3RvX2pzIHgzMDIpIFwiYmx1clwiIFt8fF0pXG4gICAgbGV0IChzZWxlY3Rpb25fc3RhcnQgOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHgzMDMgLT4gT2pzLmludF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MzAzKSBcInNlbGVjdGlvblN0YXJ0XCIpXG4gICAgbGV0IChzZWxlY3Rpb25fZW5kIDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4MzA0IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDMwNCkgXCJzZWxlY3Rpb25FbmRcIilcbiAgICBsZXQgKHNldF9zZWxlY3Rpb25fc3RhcnQgOiB0IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDMwNSAtPlxuICAgICAgICBmdW4geDMwNiAtPlxuICAgICAgICAgIE9qcy5zZXQgKHRfdG9fanMgeDMwNSkgXCJzZWxlY3Rpb25TdGFydFwiIChPanMuaW50X3RvX2pzIHgzMDYpXG4gICAgbGV0IChzZXRfc2VsZWN0aW9uX2VuZCA6IHQgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MzA3IC0+XG4gICAgICAgIGZ1biB4MzA4IC0+XG4gICAgICAgICAgT2pzLnNldCAodF90b19qcyB4MzA3KSBcInNlbGVjdGlvbkVuZFwiIChPanMuaW50X3RvX2pzIHgzMDgpXG4gICAgbGV0IChyZW1vdmUgOiB0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MzA5IC0+IGlnbm9yZSAoT2pzLmNhbGwgKHRfdG9fanMgeDMwOSkgXCJyZW1vdmVcIiBbfHxdKVxuICAgIGxldCAoY2xpY2sgOiB0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MzEwIC0+IGlnbm9yZSAoT2pzLmNhbGwgKHRfdG9fanMgeDMxMCkgXCJjbGlja1wiIFt8fF0pXG4gIGVuZFxubW9kdWxlIERvY3VtZW50ID1cbiAgc3RydWN0XG4gICAgdHlwZSB0ID0gT2pzLnRcbiAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBmdW4geDMxMiAtPiB4MzEyXG4gICAgYW5kICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSBmdW4geDMxMSAtPiB4MzExXG4gICAgbGV0ICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSB0X29mX2pzXG4gICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgbGV0IChjcmVhdGVfZWxlbWVudCA6IHQgLT4gc3RyaW5nIC0+IEVsZW1lbnQudCkgPVxuICAgICAgZnVuIHgzMTYgLT5cbiAgICAgICAgZnVuIHgzMTUgLT5cbiAgICAgICAgICBFbGVtZW50LnRfb2ZfanNcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MzE2KSBcImNyZWF0ZUVsZW1lbnRcIlxuICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4MzE1KXxdKVxuICAgIGxldCAoY3JlYXRlX2VsZW1lbnRfbnMgOiB0IC0+IHN0cmluZyAtPiBzdHJpbmcgLT4gRWxlbWVudC50KSA9XG4gICAgICBmdW4geDMxOSAtPlxuICAgICAgICBmdW4geDMxNyAtPlxuICAgICAgICAgIGZ1biB4MzE4IC0+XG4gICAgICAgICAgICBFbGVtZW50LnRfb2ZfanNcbiAgICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgzMTkpIFwiY3JlYXRlRWxlbWVudE5TXCJcbiAgICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4MzE3KTsoT2pzLnN0cmluZ190b19qcyB4MzE4KXxdKVxuICAgIGxldCAoY3JlYXRlX3RleHRfbm9kZSA6IHQgLT4gc3RyaW5nIC0+IEVsZW1lbnQudCkgPVxuICAgICAgZnVuIHgzMjEgLT5cbiAgICAgICAgZnVuIHgzMjAgLT5cbiAgICAgICAgICBFbGVtZW50LnRfb2ZfanNcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MzIxKSBcImNyZWF0ZVRleHROb2RlXCJcbiAgICAgICAgICAgICAgIFt8KE9qcy5zdHJpbmdfdG9fanMgeDMyMCl8XSlcbiAgICBsZXQgKGNyZWF0ZV9ldmVudCA6IHQgLT4gc3RyaW5nIC0+IEV2ZW50LnQpID1cbiAgICAgIGZ1biB4MzIzIC0+XG4gICAgICAgIGZ1biB4MzIyIC0+XG4gICAgICAgICAgRXZlbnQudF9vZl9qc1xuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgzMjMpIFwiY3JlYXRlRXZlbnRcIlxuICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4MzIyKXxdKVxuICAgIGxldCAoZ2V0X2VsZW1lbnRfYnlfaWQgOiB0IC0+IHN0cmluZyAtPiBFbGVtZW50LnQgb3B0aW9uKSA9XG4gICAgICBmdW4geDMyNSAtPlxuICAgICAgICBmdW4geDMyNCAtPlxuICAgICAgICAgIE9qcy5vcHRpb25fb2ZfanMgRWxlbWVudC50X29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDMyNSkgXCJnZXRFbGVtZW50QnlJZFwiXG4gICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHgzMjQpfF0pXG4gICAgbGV0IChnZXRfZWxlbWVudHNfYnlfY2xhc3NfbmFtZSA6IHQgLT4gc3RyaW5nIC0+IEVsZW1lbnQudCBhcnJheSkgPVxuICAgICAgZnVuIHgzMjggLT5cbiAgICAgICAgZnVuIHgzMjcgLT5cbiAgICAgICAgICBPanMuYXJyYXlfb2ZfanMgRWxlbWVudC50X29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDMyOCkgXCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgIFt8KE9qcy5zdHJpbmdfdG9fanMgeDMyNyl8XSlcbiAgICBsZXQgKGJvZHkgOiB0IC0+IEVsZW1lbnQudCkgPVxuICAgICAgZnVuIHgzMzAgLT4gRWxlbWVudC50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgzMzApIFwiYm9keVwiKVxuICAgIGxldCAoZG9jdW1lbnRfZWxlbWVudCA6IHQgLT4gRWxlbWVudC50KSA9XG4gICAgICBmdW4geDMzMSAtPiBFbGVtZW50LnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDMzMSkgXCJkb2N1bWVudEVsZW1lbnRcIilcbiAgICBsZXQgKGFjdGl2ZV9lbGVtZW50IDogdCAtPiBFbGVtZW50LnQpID1cbiAgICAgIGZ1biB4MzMyIC0+IEVsZW1lbnQudF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MzMyKSBcImFjdGl2ZUVsZW1lbnRcIilcbiAgICBsZXQgKGNvb2tpZSA6IHQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDMzMyAtPiBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgzMzMpIFwiY29va2llXCIpXG4gICAgbGV0IChzZXRfY29va2llIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgzMzQgLT5cbiAgICAgICAgZnVuIHgzMzUgLT4gT2pzLnNldCAodF90b19qcyB4MzM0KSBcImNvb2tpZVwiIChPanMuc3RyaW5nX3RvX2pzIHgzMzUpXG4gICAgbGV0IChzZXRfdGl0bGUgOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDMzNiAtPlxuICAgICAgICBmdW4geDMzNyAtPiBPanMuc2V0ICh0X3RvX2pzIHgzMzYpIFwidGl0bGVcIiAoT2pzLnN0cmluZ190b19qcyB4MzM3KVxuICAgIGxldCAob3Blbl8gOlxuICAgICAgdCAtPiA/bWltZV90eXBlOnN0cmluZyAtPiA/aGlzdG9yeV9tb2RlOnN0cmluZyAtPiB1bml0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MzQzIC0+XG4gICAgICAgIGZ1biA/bWltZV90eXBlOngzMzggLT5cbiAgICAgICAgICBmdW4gP2hpc3RvcnlfbW9kZTp4MzM5IC0+XG4gICAgICAgICAgICBmdW4gKCkgLT5cbiAgICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgICAgKGxldCB4MzQ0ID0gdF90b19qcyB4MzQzIGluXG4gICAgICAgICAgICAgICAgIE9qcy5jYWxsIChPanMuZ2V0IHgzNDQgXCJvcGVuXCIpIFwiYXBwbHlcIlxuICAgICAgICAgICAgICAgICAgIFt8eDM0NDsoKGxldCB4MzQwID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9qcy5uZXdfb2JqIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJBcnJheVwiKSBbfHxdIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1hdGNoIHgzMzggd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNvbWUgeDM0MiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChPanMuY2FsbCB4MzQwIFwicHVzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt8KE9qcy5zdHJpbmdfdG9fanMgeDM0Mil8XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBOb25lIC0+ICgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF0Y2ggeDMzOSB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU29tZSB4MzQxIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKE9qcy5jYWxsIHgzNDAgXCJwdXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4MzQxKXxdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE5vbmUgLT4gKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgzNDApKXxdKVxuICAgIGxldCAod3JpdGUgOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDM0NiAtPlxuICAgICAgICBmdW4geDM0NSAtPlxuICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgzNDYpIFwid3JpdGVcIiBbfChPanMuc3RyaW5nX3RvX2pzIHgzNDUpfF0pXG4gICAgbGV0ICh3cml0ZWxuIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgzNDggLT5cbiAgICAgICAgZnVuIHgzNDcgLT5cbiAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MzQ4KSBcIndyaXRlbG5cIiBbfChPanMuc3RyaW5nX3RvX2pzIHgzNDcpfF0pXG4gICAgbGV0IChjbG9zZSA6IHQgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgzNDkgLT4gaWdub3JlIChPanMuY2FsbCAodF90b19qcyB4MzQ5KSBcImNsb3NlXCIgW3x8XSlcbiAgICBsZXQgKGV4ZWNfY29tbWFuZCA6IHQgLT4gc3RyaW5nIC0+IGJvb2wpID1cbiAgICAgIGZ1biB4MzUxIC0+XG4gICAgICAgIGZ1biB4MzUwIC0+XG4gICAgICAgICAgT2pzLmJvb2xfb2ZfanNcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MzUxKSBcImV4ZWNDb21tYW5kXCJcbiAgICAgICAgICAgICAgIFt8KE9qcy5zdHJpbmdfdG9fanMgeDM1MCl8XSlcbiAgICBsZXQgKHF1ZXJ5X3NlbGVjdG9yIDogdCAtPiBzdHJpbmcgLT4gRWxlbWVudC50KSA9XG4gICAgICBmdW4geDM1MyAtPlxuICAgICAgICBmdW4geDM1MiAtPlxuICAgICAgICAgIEVsZW1lbnQudF9vZl9qc1xuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgzNTMpIFwicXVlcnlTZWxlY3RvclwiXG4gICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHgzNTIpfF0pXG4gICAgbGV0IChyZW1vdmVfYWxsX3NlbGVjdGlvbl9yYW5nZXMgOiB0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MzU0IC0+XG4gICAgICAgIGlnbm9yZVxuICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4MzU0KSBcImdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlc1wiIFt8fF0pXG4gIGVuZFxubW9kdWxlIEhpc3RvcnkgPVxuICBzdHJ1Y3RcbiAgICB0eXBlIHQgPSBPanMudFxuICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4MzU2IC0+IHgzNTZcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4MzU1IC0+IHgzNTVcbiAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICBsZXQgKGxlbmd0aCA6IHQgLT4gaW50KSA9XG4gICAgICBmdW4geDM1OSAtPiBPanMuaW50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgzNTkpIFwibGVuZ3RoXCIpXG4gICAgbGV0IChiYWNrIDogdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDM2MCAtPiBpZ25vcmUgKE9qcy5jYWxsICh0X3RvX2pzIHgzNjApIFwiYmFja1wiIFt8fF0pXG4gICAgbGV0IChmb3J3YXJkIDogdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDM2MSAtPiBpZ25vcmUgKE9qcy5jYWxsICh0X3RvX2pzIHgzNjEpIFwiZm9yd2FyZFwiIFt8fF0pXG4gICAgbGV0IChnbyA6IHQgLT4gWyBgT2Zmc2V0IG9mIGludCAgfCBgVXJsIG9mIHN0cmluZyBdIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MzY1IC0+XG4gICAgICAgIGZ1biB4MzYyIC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDM2NSkgXCJnb1wiXG4gICAgICAgICAgICAgICBbfCgobWF0Y2ggeDM2MiB3aXRoXG4gICAgICAgICAgICAgICAgICAgfCBgT2Zmc2V0IHgzNjMgLT4gT2pzLmludF90b19qcyB4MzYzXG4gICAgICAgICAgICAgICAgICAgfCBgVXJsIHgzNjQgLT4gT2pzLnN0cmluZ190b19qcyB4MzY0KSl8XSlcbiAgICBsZXQgKHJlcGxhY2Vfc3RhdGUgOiB0IC0+IE9qcy50IC0+IHN0cmluZyAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgzNjkgLT5cbiAgICAgICAgZnVuIHgzNjYgLT5cbiAgICAgICAgICBmdW4geDM2NyAtPlxuICAgICAgICAgICAgZnVuIHgzNjggLT5cbiAgICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgzNjkpIFwicmVwbGFjZVN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICBbfHgzNjY7KE9qcy5zdHJpbmdfdG9fanMgeDM2Nyk7KE9qcy5zdHJpbmdfdG9fanMgeDM2OCl8XSlcbiAgICBsZXQgKHB1c2hfc3RhdGUgOiB0IC0+IE9qcy50IC0+IHN0cmluZyAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgzNzMgLT5cbiAgICAgICAgZnVuIHgzNzAgLT5cbiAgICAgICAgICBmdW4geDM3MSAtPlxuICAgICAgICAgICAgZnVuIHgzNzIgLT5cbiAgICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgzNzMpIFwicHVzaFN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICBbfHgzNzA7KE9qcy5zdHJpbmdfdG9fanMgeDM3MSk7KE9qcy5zdHJpbmdfdG9fanMgeDM3Mil8XSlcbiAgZW5kXG5tb2R1bGUgTG9jYXRpb24gPVxuICBzdHJ1Y3RcbiAgICB0eXBlIHQgPSBPanMudFxuICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4Mzc1IC0+IHgzNzVcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4Mzc0IC0+IHgzNzRcbiAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICBsZXQgKGdldF9oYXNoIDogdW5pdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biAoKSAtPlxuICAgICAgICBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0IChPanMuZ2V0IE9qcy5nbG9iYWwgXCJsb2NhdGlvblwiKSBcImhhc2hcIilcbiAgICBsZXQgKHNldF9oYXNoIDogc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4Mzc4IC0+XG4gICAgICAgIE9qcy5zZXQgKE9qcy5nZXQgT2pzLmdsb2JhbCBcImxvY2F0aW9uXCIpIFwiaGFzaFwiXG4gICAgICAgICAgKE9qcy5zdHJpbmdfdG9fanMgeDM3OClcbiAgICBsZXQgKGhvc3QgOiB0IC0+IHN0cmluZykgPVxuICAgICAgZnVuIHgzNzkgLT4gT2pzLnN0cmluZ19vZl9qcyAoT2pzLmdldCAodF90b19qcyB4Mzc5KSBcImhvc3RcIilcbiAgICBsZXQgKHNldF9ob3N0IDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgzODAgLT5cbiAgICAgICAgZnVuIHgzODEgLT4gT2pzLnNldCAodF90b19qcyB4MzgwKSBcImhvc3RcIiAoT2pzLnN0cmluZ190b19qcyB4MzgxKVxuICAgIGxldCAoaG9zdG5hbWUgOiB0IC0+IHN0cmluZykgPVxuICAgICAgZnVuIHgzODIgLT4gT2pzLnN0cmluZ19vZl9qcyAoT2pzLmdldCAodF90b19qcyB4MzgyKSBcImhvc3RuYW1lXCIpXG4gICAgbGV0IChzZXRfaG9zdG5hbWUgOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDM4MyAtPlxuICAgICAgICBmdW4geDM4NCAtPiBPanMuc2V0ICh0X3RvX2pzIHgzODMpIFwiaG9zdG5hbWVcIiAoT2pzLnN0cmluZ190b19qcyB4Mzg0KVxuICAgIGxldCAoaHJlZiA6IHVuaXQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4gKCkgLT5cbiAgICAgICAgT2pzLnN0cmluZ19vZl9qcyAoT2pzLmdldCAoT2pzLmdldCBPanMuZ2xvYmFsIFwibG9jYXRpb25cIikgXCJocmVmXCIpXG4gICAgbGV0IChzZXRfaHJlZiA6IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDM4NSAtPlxuICAgICAgICBPanMuc2V0IChPanMuZ2V0IE9qcy5nbG9iYWwgXCJsb2NhdGlvblwiKSBcImhyZWZcIlxuICAgICAgICAgIChPanMuc3RyaW5nX3RvX2pzIHgzODUpXG4gICAgbGV0IChwYXRobmFtZSA6IHQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDM4NiAtPiBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgzODYpIFwicGF0aG5hbWVcIilcbiAgICBsZXQgKHNldF9wYXRobmFtZSA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4Mzg3IC0+XG4gICAgICAgIGZ1biB4Mzg4IC0+IE9qcy5zZXQgKHRfdG9fanMgeDM4NykgXCJwYXRobmFtZVwiIChPanMuc3RyaW5nX3RvX2pzIHgzODgpXG4gICAgbGV0IChwb3J0IDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4Mzg5IC0+IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDM4OSkgXCJwb3J0XCIpXG4gICAgbGV0IChzZXRfcG9ydCA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4MzkwIC0+XG4gICAgICAgIGZ1biB4MzkxIC0+IE9qcy5zZXQgKHRfdG9fanMgeDM5MCkgXCJwb3J0XCIgKE9qcy5zdHJpbmdfdG9fanMgeDM5MSlcbiAgICBsZXQgKHByb3RvY29sIDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4MzkyIC0+IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDM5MikgXCJwcm90b2NvbFwiKVxuICAgIGxldCAoc2V0X3Byb3RvY29sIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgzOTMgLT5cbiAgICAgICAgZnVuIHgzOTQgLT4gT2pzLnNldCAodF90b19qcyB4MzkzKSBcInByb3RvY29sXCIgKE9qcy5zdHJpbmdfdG9fanMgeDM5NClcbiAgICBsZXQgKHNlYXJjaCA6IHQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDM5NSAtPiBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHgzOTUpIFwic2VhcmNoXCIpXG4gICAgbGV0IChzZXRfc2VhcmNoIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHgzOTYgLT5cbiAgICAgICAgZnVuIHgzOTcgLT4gT2pzLnNldCAodF90b19qcyB4Mzk2KSBcInNlYXJjaFwiIChPanMuc3RyaW5nX3RvX2pzIHgzOTcpXG4gICAgbGV0IChhc3NpZ24gOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDM5OSAtPlxuICAgICAgICBmdW4geDM5OCAtPlxuICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHgzOTkpIFwiYXNzaWduXCIgW3woT2pzLnN0cmluZ190b19qcyB4Mzk4KXxdKVxuICAgIGxldCAocmVsb2FkIDogdCAtPiA/Zm9yY2U6Ym9vbCAtPiB1bml0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDAzIC0+XG4gICAgICAgIGZ1biA/Zm9yY2U6eDQwMCAtPlxuICAgICAgICAgIGZ1biAoKSAtPlxuICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgIChsZXQgeDQwNCA9IHRfdG9fanMgeDQwMyBpblxuICAgICAgICAgICAgICAgT2pzLmNhbGwgKE9qcy5nZXQgeDQwNCBcInJlbG9hZFwiKSBcImFwcGx5XCJcbiAgICAgICAgICAgICAgICAgW3x4NDA0OygobGV0IHg0MDEgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9qcy5uZXdfb2JqIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJBcnJheVwiKSBbfHxdIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChtYXRjaCB4NDAwIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU29tZSB4NDAyIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoT2pzLmNhbGwgeDQwMSBcInB1c2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3woT2pzLmJvb2xfdG9fanMgeDQwMil8XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTm9uZSAtPiAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHg0MDEpKXxdKVxuICAgIGxldCAocmVwbGFjZSA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDA2IC0+XG4gICAgICAgIGZ1biB4NDA1IC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDQwNikgXCJyZXBsYWNlXCIgW3woT2pzLnN0cmluZ190b19qcyB4NDA1KXxdKVxuICBlbmRcbm1vZHVsZSBXaW5kb3cgPVxuICBzdHJ1Y3RcbiAgICB0eXBlIHQgPSBPanMudFxuICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4NDA4IC0+IHg0MDhcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4NDA3IC0+IHg0MDdcbiAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICB0eXBlIHRpbWVvdXRfaWQgPSBPanMudFxuICAgIGxldCByZWMgKHRpbWVvdXRfaWRfb2ZfanMgOiBPanMudCAtPiB0aW1lb3V0X2lkKSA9IGZ1biB4NDEyIC0+IHg0MTJcbiAgICBhbmQgKHRpbWVvdXRfaWRfdG9fanMgOiB0aW1lb3V0X2lkIC0+IE9qcy50KSA9IGZ1biB4NDExIC0+IHg0MTFcbiAgICB0eXBlIGludGVydmFsX2lkID0gT2pzLnRcbiAgICBsZXQgcmVjIChpbnRlcnZhbF9pZF9vZl9qcyA6IE9qcy50IC0+IGludGVydmFsX2lkKSA9IGZ1biB4NDE0IC0+IHg0MTRcbiAgICBhbmQgKGludGVydmFsX2lkX3RvX2pzIDogaW50ZXJ2YWxfaWQgLT4gT2pzLnQpID0gZnVuIHg0MTMgLT4geDQxM1xuICAgIGxldCAoYWRkX2V2ZW50X2xpc3RlbmVyIDpcbiAgICAgIHQgLT4gRXZlbnQua2luZCAtPiAoRXZlbnQudCAtPiB1bml0KSAtPiBib29sIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDE5IC0+XG4gICAgICAgIGZ1biB4NDE1IC0+XG4gICAgICAgICAgZnVuIHg0MTYgLT5cbiAgICAgICAgICAgIGZ1biB4NDE4IC0+XG4gICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NDE5KSBcImFkZEV2ZW50TGlzdGVuZXJcIlxuICAgICAgICAgICAgICAgICAgIFt8KEV2ZW50LmtpbmRfdG9fanMgeDQxNSk7KE9qcy5mdW5fdG9fanMgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZ1biB4NDE3IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4NDE2IChFdmVudC50X29mX2pzIHg0MTcpKSk7KFxuICAgICAgICAgICAgICAgICAgICAgT2pzLmJvb2xfdG9fanMgeDQxOCl8XSlcbiAgICBsZXQgKGRvY3VtZW50IDogdCAtPiBEb2N1bWVudC50KSA9XG4gICAgICBmdW4geDQyMCAtPiBEb2N1bWVudC50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg0MjApIFwiZG9jdW1lbnRcIilcbiAgICBsZXQgKHNldF9vbmxvYWQgOiB0IC0+ICh1bml0IC0+IHVuaXQpIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDIxIC0+XG4gICAgICAgIGZ1biB4NDIyIC0+XG4gICAgICAgICAgT2pzLnNldCAodF90b19qcyB4NDIxKSBcIm9ubG9hZFwiXG4gICAgICAgICAgICAoT2pzLmZ1bl90b19qcyAxIChmdW4gXyAtPiB4NDIyICgpKSlcbiAgICBsZXQgKHNldF9pbnRlcnZhbCA6IHQgLT4gKHVuaXQgLT4gdW5pdCkgLT4gaW50IC0+IGludGVydmFsX2lkKSA9XG4gICAgICBmdW4geDQyNSAtPlxuICAgICAgICBmdW4geDQyMyAtPlxuICAgICAgICAgIGZ1biB4NDI0IC0+XG4gICAgICAgICAgICBpbnRlcnZhbF9pZF9vZl9qc1xuICAgICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDQyNSkgXCJzZXRJbnRlcnZhbFwiXG4gICAgICAgICAgICAgICAgIFt8KE9qcy5mdW5fdG9fanMgMSAoZnVuIF8gLT4geDQyMyAoKSkpOyhPanMuaW50X3RvX2pzIHg0MjQpfF0pXG4gICAgbGV0IChzZXRfdGltZW91dCA6IHQgLT4gKHVuaXQgLT4gdW5pdCkgLT4gaW50IC0+IHRpbWVvdXRfaWQpID1cbiAgICAgIGZ1biB4NDI4IC0+XG4gICAgICAgIGZ1biB4NDI2IC0+XG4gICAgICAgICAgZnVuIHg0MjcgLT5cbiAgICAgICAgICAgIHRpbWVvdXRfaWRfb2ZfanNcbiAgICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg0MjgpIFwic2V0VGltZW91dFwiXG4gICAgICAgICAgICAgICAgIFt8KE9qcy5mdW5fdG9fanMgMSAoZnVuIF8gLT4geDQyNiAoKSkpOyhPanMuaW50X3RvX2pzIHg0MjcpfF0pXG4gICAgbGV0IChjbGVhcl90aW1lb3V0IDogdCAtPiB0aW1lb3V0X2lkIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDMwIC0+XG4gICAgICAgIGZ1biB4NDI5IC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDQzMCkgXCJjbGVhclRpbWVvdXRcIlxuICAgICAgICAgICAgICAgW3wodGltZW91dF9pZF90b19qcyB4NDI5KXxdKVxuICAgIGxldCAoY2xlYXJfaW50ZXJ2YWwgOiB0IC0+IGludGVydmFsX2lkIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDMyIC0+XG4gICAgICAgIGZ1biB4NDMxIC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDQzMikgXCJjbGVhckludGVydmFsXCJcbiAgICAgICAgICAgICAgIFt8KGludGVydmFsX2lkX3RvX2pzIHg0MzEpfF0pXG4gICAgbGV0IChyZXF1ZXN0X2FuaW1hdGlvbl9mcmFtZSA6IHQgLT4gKGZsb2F0IC0+IHVuaXQpIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDM1IC0+XG4gICAgICAgIGZ1biB4NDMzIC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDQzNSkgXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIlxuICAgICAgICAgICAgICAgW3woT2pzLmZ1bl90b19qcyAxIChmdW4geDQzNCAtPiB4NDMzIChPanMuZmxvYXRfb2ZfanMgeDQzNCkpKXxdKVxuICAgIGxldCAob3Blbl8gOlxuICAgICAgdCAtPlxuICAgICAgICA/dXJsOnN0cmluZyAtPlxuICAgICAgICAgID9uYW1lOnN0cmluZyAtPiA/ZmVhdHVyZXM6c3RyaW5nIC0+ID9yZXBsYWNlOmJvb2wgLT4gdW5pdCAtPiB0KVxuICAgICAgPVxuICAgICAgZnVuIHg0NDUgLT5cbiAgICAgICAgZnVuID91cmw6eDQzNiAtPlxuICAgICAgICAgIGZ1biA/bmFtZTp4NDM3IC0+XG4gICAgICAgICAgICBmdW4gP2ZlYXR1cmVzOng0MzggLT5cbiAgICAgICAgICAgICAgZnVuID9yZXBsYWNlOng0MzkgLT5cbiAgICAgICAgICAgICAgICBmdW4gKCkgLT5cbiAgICAgICAgICAgICAgICAgIHRfb2ZfanNcbiAgICAgICAgICAgICAgICAgICAgKGxldCB4NDQ2ID0gdF90b19qcyB4NDQ1IGluXG4gICAgICAgICAgICAgICAgICAgICBPanMuY2FsbCAoT2pzLmdldCB4NDQ2IFwib3BlblwiKSBcImFwcGx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3x4NDQ2OygobGV0IHg0NDAgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9qcy5uZXdfb2JqIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJBcnJheVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3x8XSBpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF0Y2ggeDQzNiB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNvbWUgeDQ0NCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKE9qcy5jYWxsIHg0NDAgXCJwdXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt8KE9qcy5zdHJpbmdfdG9fanMgeDQ0NCl8XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTm9uZSAtPiAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXRjaCB4NDM3IHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU29tZSB4NDQzIC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoT2pzLmNhbGwgeDQ0MCBcInB1c2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4NDQzKXxdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBOb25lIC0+ICgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1hdGNoIHg0Mzggd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTb21lIHg0NDIgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChPanMuY2FsbCB4NDQwIFwicHVzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHg0NDIpfF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE5vbmUgLT4gKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF0Y2ggeDQzOSB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNvbWUgeDQ0MSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKE9qcy5jYWxsIHg0NDAgXCJwdXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt8KE9qcy5ib29sX3RvX2pzIHg0NDEpfF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE5vbmUgLT4gKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4NDQwKSl8XSlcbiAgICBsZXQgKGFsZXJ0IDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg0NDggLT5cbiAgICAgICAgZnVuIHg0NDcgLT5cbiAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NDQ4KSBcImFsZXJ0XCIgW3woT2pzLnN0cmluZ190b19qcyB4NDQ3KXxdKVxuICAgIGxldCAoc2Vzc2lvbl9zdG9yYWdlIDogdCAtPiBTdG9yYWdlLnQgb3B0aW9uKSA9XG4gICAgICBmdW4geDQ0OSAtPlxuICAgICAgICBPanMub3B0aW9uX29mX2pzIFN0b3JhZ2UudF9vZl9qc1xuICAgICAgICAgIChPanMuZ2V0ICh0X3RvX2pzIHg0NDkpIFwic2Vzc2lvblN0b3JhZ2VcIilcbiAgICBsZXQgKGxvY2FsX3N0b3JhZ2UgOiB0IC0+IFN0b3JhZ2UudCBvcHRpb24pID1cbiAgICAgIGZ1biB4NDUxIC0+XG4gICAgICAgIE9qcy5vcHRpb25fb2ZfanMgU3RvcmFnZS50X29mX2pzXG4gICAgICAgICAgKE9qcy5nZXQgKHRfdG9fanMgeDQ1MSkgXCJsb2NhbFN0b3JhZ2VcIilcbiAgICBsZXQgKGlubmVyX3dpZHRoIDogdCAtPiBmbG9hdCkgPVxuICAgICAgZnVuIHg0NTMgLT4gT2pzLmZsb2F0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg0NTMpIFwiaW5uZXJXaWR0aFwiKVxuICAgIGxldCAoaW5uZXJfaGVpZ2h0IDogdCAtPiBmbG9hdCkgPVxuICAgICAgZnVuIHg0NTQgLT4gT2pzLmZsb2F0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg0NTQpIFwiaW5uZXJIZWlnaHRcIilcbiAgICBsZXQgKHBhZ2VfeF9vZmZzZXQgOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHg0NTUgLT4gT2pzLmludF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NDU1KSBcInBhZ2VYT2Zmc2V0XCIpXG4gICAgbGV0IChwYWdlX3lfb2Zmc2V0IDogdCAtPiBpbnQpID1cbiAgICAgIGZ1biB4NDU2IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDQ1NikgXCJwYWdlWU9mZnNldFwiKVxuICAgIGxldCAoc2Nyb2xsX2J5IDogdCAtPiBpbnQgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDU5IC0+XG4gICAgICAgIGZ1biB4NDU3IC0+XG4gICAgICAgICAgZnVuIHg0NTggLT5cbiAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDQ1OSkgXCJzY3JvbGxCeVwiXG4gICAgICAgICAgICAgICAgIFt8KE9qcy5pbnRfdG9fanMgeDQ1Nyk7KE9qcy5pbnRfdG9fanMgeDQ1OCl8XSlcbiAgICBsZXQgKHNjcm9sbF90byA6IHQgLT4gaW50IC0+IGludCAtPiB1bml0KSA9XG4gICAgICBmdW4geDQ2MiAtPlxuICAgICAgICBmdW4geDQ2MCAtPlxuICAgICAgICAgIGZ1biB4NDYxIC0+XG4gICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg0NjIpIFwic2Nyb2xsVG9cIlxuICAgICAgICAgICAgICAgICBbfChPanMuaW50X3RvX2pzIHg0NjApOyhPanMuaW50X3RvX2pzIHg0NjEpfF0pXG4gICAgbGV0IChoaXN0b3J5IDogdCAtPiBIaXN0b3J5LnQpID1cbiAgICAgIGZ1biB4NDYzIC0+IEhpc3RvcnkudF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NDYzKSBcImhpc3RvcnlcIilcbiAgICBsZXQgKGxvY2F0aW9uIDogdCAtPiBMb2NhdGlvbi50KSA9XG4gICAgICBmdW4geDQ2NCAtPiBMb2NhdGlvbi50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg0NjQpIFwibG9jYXRpb25cIilcbiAgICBsZXQgKGZyYW1lX2VsZW1lbnQgOiB0IC0+IEVsZW1lbnQudCkgPVxuICAgICAgZnVuIHg0NjUgLT4gRWxlbWVudC50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg0NjUpIFwiZnJhbWVFbGVtZW50XCIpXG4gICAgbGV0IChnZXRfY29tcHV0ZWRfc3R5bGUgOiB0IC0+IEVsZW1lbnQudCAtPiBTdHlsZS50KSA9XG4gICAgICBmdW4geDQ2NyAtPlxuICAgICAgICBmdW4geDQ2NiAtPlxuICAgICAgICAgIFN0eWxlLnRfb2ZfanNcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NDY3KSBcImdldENvbXB1dGVkU3R5bGVcIlxuICAgICAgICAgICAgICAgW3woRWxlbWVudC50X3RvX2pzIHg0NjYpfF0pXG4gICAgbGV0IChkZWNvZGVfVVJJX2NvbXBvbmVudCA6IHQgLT4gc3RyaW5nIC0+IHN0cmluZykgPVxuICAgICAgZnVuIHg0NjkgLT5cbiAgICAgICAgZnVuIHg0NjggLT5cbiAgICAgICAgICBPanMuc3RyaW5nX29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDQ2OSkgXCJkZWNvZGVVUklDb21wb25lbnRcIlxuICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4NDY4KXxdKVxuICAgIGxldCAoZXZlbnRfc291cmNlIDogRXZlbnQudCAtPiB0KSA9XG4gICAgICBmdW4geDQ3MCAtPiB0X29mX2pzIChPanMuZ2V0IChFdmVudC50X3RvX2pzIHg0NzApIFwic291cmNlXCIpXG4gICAgbGV0IChwb3N0X21lc3NhZ2UgOiB0IC0+IE9qcy50IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDQ3MyAtPlxuICAgICAgICBmdW4geDQ3MSAtPlxuICAgICAgICAgIGZ1biB4NDcyIC0+XG4gICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg0NzMpIFwicG9zdE1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICBbfHg0NzE7KE9qcy5zdHJpbmdfdG9fanMgeDQ3Mil8XSlcbiAgZW5kXG5tb2R1bGUgSUZyYW1lID1cbiAgc3RydWN0XG4gICAgbGV0IChjb250ZW50X3dpbmRvdyA6IEVsZW1lbnQudCAtPiBXaW5kb3cudCBvcHRpb24pID1cbiAgICAgIGZ1biB4NDc0IC0+XG4gICAgICAgIE9qcy5vcHRpb25fb2ZfanMgV2luZG93LnRfb2ZfanNcbiAgICAgICAgICAoT2pzLmdldCAoRWxlbWVudC50X3RvX2pzIHg0NzQpIFwiY29udGVudFdpbmRvd1wiKVxuICAgIGxldCAoY29udGVudF9kb2N1bWVudCA6IEVsZW1lbnQudCAtPiBEb2N1bWVudC50IG9wdGlvbikgPVxuICAgICAgZnVuIHg0NzYgLT5cbiAgICAgICAgT2pzLm9wdGlvbl9vZl9qcyBEb2N1bWVudC50X29mX2pzXG4gICAgICAgICAgKE9qcy5nZXQgKEVsZW1lbnQudF90b19qcyB4NDc2KSBcImNvbnRlbnREb2N1bWVudFwiKVxuICBlbmRcbm1vZHVsZSBKU09OID1cbiAgc3RydWN0XG4gICAgbGV0IChwYXJzZSA6IHN0cmluZyAtPiBPanMudCkgPVxuICAgICAgZnVuIHg0NzggLT5cbiAgICAgICAgT2pzLmNhbGwgKE9qcy5nZXQgT2pzLmdsb2JhbCBcIkpTT05cIikgXCJwYXJzZVwiXG4gICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4NDc4KXxdXG4gICAgbGV0IChzdHJpbmdpZnkgOiBPanMudCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4NDc5IC0+XG4gICAgICAgIE9qcy5zdHJpbmdfb2ZfanNcbiAgICAgICAgICAoT2pzLmNhbGwgKE9qcy5nZXQgT2pzLmdsb2JhbCBcIkpTT05cIikgXCJzdHJpbmdpZnlcIiBbfHg0Nzl8XSlcbiAgZW5kXG5tb2R1bGUgRmlsZVJlYWRlciA9XG4gIHN0cnVjdFxuICAgIHR5cGUgc3RhdGUgPVxuICAgICAgfCBFbXB0eSBcbiAgICAgIHwgTG9hZGluZyBcbiAgICAgIHwgRG9uZSBcbiAgICBsZXQgcmVjIChzdGF0ZV9vZl9qcyA6IE9qcy50IC0+IHN0YXRlKSA9XG4gICAgICBmdW4geDQ4MSAtPlxuICAgICAgICBsZXQgeDQ4MiA9IHg0ODEgaW5cbiAgICAgICAgbWF0Y2ggT2pzLmludF9vZl9qcyB4NDgyIHdpdGhcbiAgICAgICAgfCAwIC0+IEVtcHR5XG4gICAgICAgIHwgMSAtPiBMb2FkaW5nXG4gICAgICAgIHwgMiAtPiBEb25lXG4gICAgICAgIHwgXyAtPiBhc3NlcnQgZmFsc2VcbiAgICBhbmQgKHN0YXRlX3RvX2pzIDogc3RhdGUgLT4gT2pzLnQpID1cbiAgICAgIGZ1biB4NDgwIC0+XG4gICAgICAgIG1hdGNoIHg0ODAgd2l0aFxuICAgICAgICB8IEVtcHR5IC0+IE9qcy5pbnRfdG9fanMgMFxuICAgICAgICB8IExvYWRpbmcgLT4gT2pzLmludF90b19qcyAxXG4gICAgICAgIHwgRG9uZSAtPiBPanMuaW50X3RvX2pzIDJcbiAgICB0eXBlIHQgPSBPanMudFxuICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4NDg0IC0+IHg0ODRcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4NDgzIC0+IHg0ODNcbiAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICBsZXQgKGNyZWF0ZSA6IHVuaXQgLT4gdCkgPVxuICAgICAgZnVuICgpIC0+IHRfb2ZfanMgKE9qcy5uZXdfb2JqIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJGaWxlUmVhZGVyXCIpIFt8fF0pXG4gICAgbGV0IChyZWFkeV9zdGF0ZSA6IHQgLT4gc3RhdGUpID1cbiAgICAgIGZ1biB4NDg3IC0+IHN0YXRlX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg0ODcpIFwicmVhZHlTdGF0ZVwiKVxuICAgIGxldCAocmVzdWx0IDogdCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4NDg4IC0+IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDQ4OCkgXCJyZXN1bHRcIilcbiAgICBsZXQgKHNldF9vbmxvYWQgOiB0IC0+ICh1bml0IC0+IHVuaXQpIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDg5IC0+XG4gICAgICAgIGZ1biB4NDkwIC0+XG4gICAgICAgICAgT2pzLnNldCAodF90b19qcyB4NDg5KSBcIm9ubG9hZFwiXG4gICAgICAgICAgICAoT2pzLmZ1bl90b19qcyAxIChmdW4gXyAtPiB4NDkwICgpKSlcbiAgICBsZXQgKHJlYWRfYXNfYmluYXJ5X3N0cmluZyA6IHQgLT4gRmlsZS50IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NDkyIC0+XG4gICAgICAgIGZ1biB4NDkxIC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDQ5MikgXCJyZWFkQXNCaW5hcnlTdHJpbmdcIlxuICAgICAgICAgICAgICAgW3woRmlsZS50X3RvX2pzIHg0OTEpfF0pXG4gICAgbGV0IChyZWFkX2FzX3RleHQgOiB0IC0+IEZpbGUudCAtPiB1bml0KSA9XG4gICAgICBmdW4geDQ5NCAtPlxuICAgICAgICBmdW4geDQ5MyAtPlxuICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg0OTQpIFwicmVhZEFzVGV4dFwiIFt8KEZpbGUudF90b19qcyB4NDkzKXxdKVxuICBlbmRcbm1vZHVsZSBYSFIgPVxuICBzdHJ1Y3RcbiAgICB0eXBlIHQgPSBPanMudFxuICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4NDk2IC0+IHg0OTZcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4NDk1IC0+IHg0OTVcbiAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICBsZXQgKGNyZWF0ZSA6IHVuaXQgLT4gdCkgPVxuICAgICAgZnVuICgpIC0+XG4gICAgICAgIHRfb2ZfanMgKE9qcy5uZXdfb2JqIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJYTUxIdHRwUmVxdWVzdFwiKSBbfHxdKVxuICAgIGxldCAob3Blbl8gOiB0IC0+IHN0cmluZyAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg1MDEgLT5cbiAgICAgICAgZnVuIHg0OTkgLT5cbiAgICAgICAgICBmdW4geDUwMCAtPlxuICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NTAxKSBcIm9wZW5cIlxuICAgICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHg0OTkpOyhPanMuc3RyaW5nX3RvX2pzIHg1MDApfF0pXG4gICAgbGV0IChzZW5kIDogdCAtPiBPanMudCAtPiB1bml0KSA9XG4gICAgICBmdW4geDUwMyAtPlxuICAgICAgICBmdW4geDUwMiAtPiBpZ25vcmUgKE9qcy5jYWxsICh0X3RvX2pzIHg1MDMpIFwic2VuZFwiIFt8eDUwMnxdKVxuICAgIGxldCAoc2V0X3JlcXVlc3RfaGVhZGVyIDogdCAtPiBzdHJpbmcgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NTA2IC0+XG4gICAgICAgIGZ1biB4NTA0IC0+XG4gICAgICAgICAgZnVuIHg1MDUgLT5cbiAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDUwNikgXCJzZXRSZXF1ZXN0SGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4NTA0KTsoT2pzLnN0cmluZ190b19qcyB4NTA1KXxdKVxuICAgIGxldCAoZ2V0X3Jlc3BvbnNlX2hlYWRlciA6IHQgLT4gc3RyaW5nIC0+IHN0cmluZyBvcHRpb24pID1cbiAgICAgIGZ1biB4NTA4IC0+XG4gICAgICAgIGZ1biB4NTA3IC0+XG4gICAgICAgICAgT2pzLm9wdGlvbl9vZl9qcyBPanMuc3RyaW5nX29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDUwOCkgXCJnZXRSZXNwb25zZUhlYWRlclwiXG4gICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHg1MDcpfF0pXG4gICAgbGV0IChzZXRfcmVzcG9uc2VfdHlwZSA6IHQgLT4gc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NTEwIC0+XG4gICAgICAgIGZ1biB4NTExIC0+XG4gICAgICAgICAgT2pzLnNldCAodF90b19qcyB4NTEwKSBcInJlc3BvbnNlVHlwZVwiIChPanMuc3RyaW5nX3RvX2pzIHg1MTEpXG4gICAgbGV0IChvdmVycmlkZV9taW1lX3R5cGUgOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDUxMyAtPlxuICAgICAgICBmdW4geDUxMiAtPlxuICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg1MTMpIFwib3ZlcnJpZGVNaW1lVHlwZVwiXG4gICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHg1MTIpfF0pXG4gICAgbGV0IChzZXRfd2l0aF9jcmVkZW50aWFscyA6IHQgLT4gYm9vbCAtPiB1bml0KSA9XG4gICAgICBmdW4geDUxNCAtPlxuICAgICAgICBmdW4geDUxNSAtPlxuICAgICAgICAgIE9qcy5zZXQgKHRfdG9fanMgeDUxNCkgXCJ3aXRoQ3JlZGVudGlhbHNcIiAoT2pzLmJvb2xfdG9fanMgeDUxNSlcbiAgICB0eXBlIHJlYWR5X3N0YXRlID1cbiAgICAgIHwgVW5zZW50IFxuICAgICAgfCBPcGVuZWQgXG4gICAgICB8IEhlYWRlcnNfcmVjZWl2ZWQgXG4gICAgICB8IExvYWRpbmcgXG4gICAgICB8IERvbmUgXG4gICAgICB8IE90aGVyIG9mIGludCBcbiAgICBsZXQgcmVjIChyZWFkeV9zdGF0ZV9vZl9qcyA6IE9qcy50IC0+IHJlYWR5X3N0YXRlKSA9XG4gICAgICBmdW4geDUxOCAtPlxuICAgICAgICBsZXQgeDUxOSA9IHg1MTggaW5cbiAgICAgICAgbWF0Y2ggT2pzLmludF9vZl9qcyB4NTE5IHdpdGhcbiAgICAgICAgfCAwIC0+IFVuc2VudFxuICAgICAgICB8IDEgLT4gT3BlbmVkXG4gICAgICAgIHwgMiAtPiBIZWFkZXJzX3JlY2VpdmVkXG4gICAgICAgIHwgMyAtPiBMb2FkaW5nXG4gICAgICAgIHwgNCAtPiBEb25lXG4gICAgICAgIHwgeDUyMCAtPiBPdGhlciB4NTIwXG4gICAgYW5kIChyZWFkeV9zdGF0ZV90b19qcyA6IHJlYWR5X3N0YXRlIC0+IE9qcy50KSA9XG4gICAgICBmdW4geDUxNiAtPlxuICAgICAgICBtYXRjaCB4NTE2IHdpdGhcbiAgICAgICAgfCBVbnNlbnQgLT4gT2pzLmludF90b19qcyAwXG4gICAgICAgIHwgT3BlbmVkIC0+IE9qcy5pbnRfdG9fanMgMVxuICAgICAgICB8IEhlYWRlcnNfcmVjZWl2ZWQgLT4gT2pzLmludF90b19qcyAyXG4gICAgICAgIHwgTG9hZGluZyAtPiBPanMuaW50X3RvX2pzIDNcbiAgICAgICAgfCBEb25lIC0+IE9qcy5pbnRfdG9fanMgNFxuICAgICAgICB8IE90aGVyIHg1MTcgLT4gT2pzLmludF90b19qcyB4NTE3XG4gICAgbGV0IChzdGF0dXMgOiB0IC0+IGludCkgPVxuICAgICAgZnVuIHg1MjEgLT4gT2pzLmludF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NTIxKSBcInN0YXR1c1wiKVxuICAgIGxldCAocmVhZHlfc3RhdGUgOiB0IC0+IHJlYWR5X3N0YXRlKSA9XG4gICAgICBmdW4geDUyMiAtPiByZWFkeV9zdGF0ZV9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NTIyKSBcInJlYWR5U3RhdGVcIilcbiAgICBsZXQgKHJlc3BvbnNlX3RleHQgOiB0IC0+IHN0cmluZykgPVxuICAgICAgZnVuIHg1MjMgLT4gT2pzLnN0cmluZ19vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NTIzKSBcInJlc3BvbnNlVGV4dFwiKVxuICAgIGxldCAocmVzcG9uc2UgOiB0IC0+IE9qcy50KSA9XG4gICAgICBmdW4geDUyNCAtPiBPanMuZ2V0ICh0X3RvX2pzIHg1MjQpIFwicmVzcG9uc2VcIlxuICAgIGxldCAoc2V0X29ucmVhZHlzdGF0ZWNoYW5nZSA6IHQgLT4gKHVuaXQgLT4gdW5pdCkgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg1MjUgLT5cbiAgICAgICAgZnVuIHg1MjYgLT5cbiAgICAgICAgICBPanMuc2V0ICh0X3RvX2pzIHg1MjUpIFwib25yZWFkeXN0YXRlY2hhbmdlXCJcbiAgICAgICAgICAgIChPanMuZnVuX3RvX2pzIDEgKGZ1biBfIC0+IHg1MjYgKCkpKVxuICBlbmRcbm1vZHVsZSBXZWJTb2NrZXQgPVxuICBzdHJ1Y3RcbiAgICB0eXBlIHQgPSBPanMudFxuICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4NTI4IC0+IHg1MjhcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4NTI3IC0+IHg1MjdcbiAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICB0eXBlIHJlYWR5X3N0YXRlID1cbiAgICAgIHwgQ29ubmVjdGluZyBcbiAgICAgIHwgT3BlbiBcbiAgICAgIHwgQ2xvc2luZyBcbiAgICAgIHwgQ2xvc2VkIFxuICAgIGxldCByZWMgKHJlYWR5X3N0YXRlX29mX2pzIDogT2pzLnQgLT4gcmVhZHlfc3RhdGUpID1cbiAgICAgIGZ1biB4NTMyIC0+XG4gICAgICAgIGxldCB4NTMzID0geDUzMiBpblxuICAgICAgICBtYXRjaCBPanMuaW50X29mX2pzIHg1MzMgd2l0aFxuICAgICAgICB8IDAgLT4gQ29ubmVjdGluZ1xuICAgICAgICB8IDEgLT4gT3BlblxuICAgICAgICB8IDIgLT4gQ2xvc2luZ1xuICAgICAgICB8IDMgLT4gQ2xvc2VkXG4gICAgICAgIHwgXyAtPiBhc3NlcnQgZmFsc2VcbiAgICBhbmQgKHJlYWR5X3N0YXRlX3RvX2pzIDogcmVhZHlfc3RhdGUgLT4gT2pzLnQpID1cbiAgICAgIGZ1biB4NTMxIC0+XG4gICAgICAgIG1hdGNoIHg1MzEgd2l0aFxuICAgICAgICB8IENvbm5lY3RpbmcgLT4gT2pzLmludF90b19qcyAwXG4gICAgICAgIHwgT3BlbiAtPiBPanMuaW50X3RvX2pzIDFcbiAgICAgICAgfCBDbG9zaW5nIC0+IE9qcy5pbnRfdG9fanMgMlxuICAgICAgICB8IENsb3NlZCAtPiBPanMuaW50X3RvX2pzIDNcbiAgICBsZXQgKGNyZWF0ZSA6IHN0cmluZyAtPiA/cHJvdG9jb2xzOnN0cmluZyBsaXN0IC0+IHVuaXQgLT4gdCkgPVxuICAgICAgZnVuIHg1MzQgLT5cbiAgICAgICAgZnVuID9wcm90b2NvbHM6eDUzNSAtPlxuICAgICAgICAgIGZ1biAoKSAtPlxuICAgICAgICAgICAgdF9vZl9qc1xuICAgICAgICAgICAgICAoT2pzLm5ld19vYmpfYXJyIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJXZWJTb2NrZXRcIilcbiAgICAgICAgICAgICAgICAgKGxldCB4NTM2ID0gT2pzLm5ld19vYmogKE9qcy5nZXQgT2pzLmdsb2JhbCBcIkFycmF5XCIpIFt8fF0gaW5cbiAgICAgICAgICAgICAgICAgIGlnbm9yZSAoT2pzLmNhbGwgeDUzNiBcInB1c2hcIiBbfChPanMuc3RyaW5nX3RvX2pzIHg1MzQpfF0pO1xuICAgICAgICAgICAgICAgICAgKG1hdGNoIHg1MzUgd2l0aFxuICAgICAgICAgICAgICAgICAgIHwgU29tZSB4NTM3IC0+XG4gICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgIChPanMuY2FsbCB4NTM2IFwicHVzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3woT2pzLmxpc3RfdG9fanMgT2pzLnN0cmluZ190b19qcyB4NTM3KXxdKVxuICAgICAgICAgICAgICAgICAgIHwgTm9uZSAtPiAoKSk7XG4gICAgICAgICAgICAgICAgICB4NTM2KSlcbiAgICBsZXQgKHNlbmQgOiB0IC0+IHN0cmluZyAtPiB1bml0KSA9XG4gICAgICBmdW4geDU0MCAtPlxuICAgICAgICBmdW4geDUzOSAtPlxuICAgICAgICAgIGlnbm9yZSAoT2pzLmNhbGwgKHRfdG9fanMgeDU0MCkgXCJzZW5kXCIgW3woT2pzLnN0cmluZ190b19qcyB4NTM5KXxdKVxuICAgIGxldCAoY2xvc2UgOiB0IC0+ID9jb2RlOmludCAtPiA/cmVhc29uOnN0cmluZyAtPiB1bml0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NTQ2IC0+XG4gICAgICAgIGZ1biA/Y29kZTp4NTQxIC0+XG4gICAgICAgICAgZnVuID9yZWFzb246eDU0MiAtPlxuICAgICAgICAgICAgZnVuICgpIC0+XG4gICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgIChsZXQgeDU0NyA9IHRfdG9fanMgeDU0NiBpblxuICAgICAgICAgICAgICAgICBPanMuY2FsbCAoT2pzLmdldCB4NTQ3IFwiY2xvc2VcIikgXCJhcHBseVwiXG4gICAgICAgICAgICAgICAgICAgW3x4NTQ3OygobGV0IHg1NDMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2pzLm5ld19vYmogKE9qcy5nZXQgT2pzLmdsb2JhbCBcIkFycmF5XCIpIFt8fF0gaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF0Y2ggeDU0MSB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU29tZSB4NTQ1IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKE9qcy5jYWxsIHg1NDMgXCJwdXNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3woT2pzLmludF90b19qcyB4NTQ1KXxdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE5vbmUgLT4gKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXRjaCB4NTQyIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTb21lIHg1NDQgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoT2pzLmNhbGwgeDU0MyBcInB1c2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHg1NDQpfF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTm9uZSAtPiAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDU0MykpfF0pXG4gICAgbGV0IChiaW5hcnlfdHlwZSA6IHQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDU0OCAtPiBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg1NDgpIFwiYmluYXJ5VHlwZVwiKVxuICAgIGxldCAoc2V0X2JpbmFyeV90eXBlIDogdCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg1NDkgLT5cbiAgICAgICAgZnVuIHg1NTAgLT5cbiAgICAgICAgICBPanMuc2V0ICh0X3RvX2pzIHg1NDkpIFwiYmluYXJ5VHlwZVwiIChPanMuc3RyaW5nX3RvX2pzIHg1NTApXG4gICAgbGV0IChyZWFkeV9zdGF0ZSA6IHQgLT4gcmVhZHlfc3RhdGUpID1cbiAgICAgIGZ1biB4NTUxIC0+IHJlYWR5X3N0YXRlX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg1NTEpIFwicmVhZHlTdGF0ZVwiKVxuICAgIGxldCAoYWRkX2V2ZW50X2xpc3RlbmVyIDpcbiAgICAgIHQgLT4gRXZlbnQua2luZCAtPiAoRXZlbnQudCAtPiB1bml0KSAtPiBib29sIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NTU2IC0+XG4gICAgICAgIGZ1biB4NTUyIC0+XG4gICAgICAgICAgZnVuIHg1NTMgLT5cbiAgICAgICAgICAgIGZ1biB4NTU1IC0+XG4gICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NTU2KSBcImFkZEV2ZW50TGlzdGVuZXJcIlxuICAgICAgICAgICAgICAgICAgIFt8KEV2ZW50LmtpbmRfdG9fanMgeDU1Mik7KE9qcy5mdW5fdG9fanMgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZ1biB4NTU0IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4NTUzIChFdmVudC50X29mX2pzIHg1NTQpKSk7KFxuICAgICAgICAgICAgICAgICAgICAgT2pzLmJvb2xfdG9fanMgeDU1NSl8XSlcbiAgICBtb2R1bGUgQ2xvc2VFdmVudCA9XG4gICAgICBzdHJ1Y3RcbiAgICAgICAgdHlwZSB0ID0gRXZlbnQudFxuICAgICAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBFdmVudC50X29mX2pzXG4gICAgICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gRXZlbnQudF90b19qc1xuICAgICAgICBsZXQgKGNvZGUgOiB0IC0+IGludCkgPVxuICAgICAgICAgIGZ1biB4NTU5IC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDU1OSkgXCJjb2RlXCIpXG4gICAgICBlbmRcbiAgZW5kXG5sZXQgKHdpbmRvdyA6IFdpbmRvdy50KSA9IFdpbmRvdy50X29mX2pzIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJ3aW5kb3dcIilcbmxldCAoZG9jdW1lbnQgOiBEb2N1bWVudC50KSA9XG4gIERvY3VtZW50LnRfb2ZfanMgKE9qcy5nZXQgT2pzLmdsb2JhbCBcImRvY3VtZW50XCIpXG5tb2R1bGUgQ2FudmFzID1cbiAgc3RydWN0XG4gICAgdHlwZSBjb250ZXh0ID0gT2pzLnRcbiAgICBsZXQgcmVjIChjb250ZXh0X29mX2pzIDogT2pzLnQgLT4gY29udGV4dCkgPSBmdW4geDU2MSAtPiB4NTYxXG4gICAgYW5kIChjb250ZXh0X3RvX2pzIDogY29udGV4dCAtPiBPanMudCkgPSBmdW4geDU2MCAtPiB4NTYwXG4gICAgbGV0IChjb250ZXh0X29mX2pzIDogT2pzLnQgLT4gY29udGV4dCkgPSBjb250ZXh0X29mX2pzXG4gICAgbGV0IChjb250ZXh0X3RvX2pzIDogY29udGV4dCAtPiBPanMudCkgPSBjb250ZXh0X3RvX2pzXG4gICAgdHlwZSBncmFkaWVudCA9IE9qcy50XG4gICAgbGV0IHJlYyAoZ3JhZGllbnRfb2ZfanMgOiBPanMudCAtPiBncmFkaWVudCkgPSBmdW4geDU2NSAtPiB4NTY1XG4gICAgYW5kIChncmFkaWVudF90b19qcyA6IGdyYWRpZW50IC0+IE9qcy50KSA9IGZ1biB4NTY0IC0+IHg1NjRcbiAgICBsZXQgKGdyYWRpZW50X29mX2pzIDogT2pzLnQgLT4gZ3JhZGllbnQpID0gZ3JhZGllbnRfb2ZfanNcbiAgICBsZXQgKGdyYWRpZW50X3RvX2pzIDogZ3JhZGllbnQgLT4gT2pzLnQpID0gZ3JhZGllbnRfdG9fanNcbiAgICB0eXBlIGNzc19jb2xvciA9IHN0cmluZ1xuICAgIGxldCByZWMgKGNzc19jb2xvcl9vZl9qcyA6IE9qcy50IC0+IGNzc19jb2xvcikgPSBPanMuc3RyaW5nX29mX2pzXG4gICAgYW5kIChjc3NfY29sb3JfdG9fanMgOiBjc3NfY29sb3IgLT4gT2pzLnQpID0gT2pzLnN0cmluZ190b19qc1xuICAgIHR5cGUgY29udGV4dF9hdHRyaWJ1dGUgPSB7XG4gICAgICBhbHBoYTogYm9vbCB9XG4gICAgbGV0IHJlYyAoY29udGV4dF9hdHRyaWJ1dGVfb2ZfanMgOiBPanMudCAtPiBjb250ZXh0X2F0dHJpYnV0ZSkgPVxuICAgICAgZnVuIHg1NzEgLT4geyBhbHBoYSA9IChPanMuYm9vbF9vZl9qcyAoT2pzLmdldCB4NTcxIFwiYWxwaGFcIikpIH1cbiAgICBhbmQgKGNvbnRleHRfYXR0cmlidXRlX3RvX2pzIDogY29udGV4dF9hdHRyaWJ1dGUgLT4gT2pzLnQpID1cbiAgICAgIGZ1biB4NTcwIC0+IE9qcy5vYmogW3woXCJhbHBoYVwiLCAoT2pzLmJvb2xfdG9fanMgeDU3MC5hbHBoYSkpfF1cbiAgICBsZXQgKGdldF9jb250ZXh0X2ludGVybmFsIDpcbiAgICAgIEVsZW1lbnQudCAtPiBzdHJpbmcgLT4gY29udGV4dF9hdHRyaWJ1dGUgLT4gY29udGV4dCBvcHRpb24pID1cbiAgICAgIGZ1biB4NTc0IC0+XG4gICAgICAgIGZ1biB4NTcyIC0+XG4gICAgICAgICAgZnVuIHg1NzMgLT5cbiAgICAgICAgICAgIE9qcy5vcHRpb25fb2ZfanMgY29udGV4dF9vZl9qc1xuICAgICAgICAgICAgICAoT2pzLmNhbGwgKEVsZW1lbnQudF90b19qcyB4NTc0KSBcImdldENvbnRleHRcIlxuICAgICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHg1NzIpOyhjb250ZXh0X2F0dHJpYnV0ZV90b19qcyB4NTczKXxdKVxuICAgIGxldCBnZXRfY29udGV4dCA/KGFscGhhPSB0cnVlKSAgY2FudmFzID1cbiAgICAgIGdldF9jb250ZXh0X2ludGVybmFsIGNhbnZhcyBcIjJkXCIgeyBhbHBoYSB9XG4gICAgbGV0ICh0b19kYXRhX1VSTCA6IEVsZW1lbnQudCAtPiBzdHJpbmcpID1cbiAgICAgIGZ1biB4NTc2IC0+XG4gICAgICAgIE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5jYWxsIChFbGVtZW50LnRfdG9fanMgeDU3NikgXCJ0b0RhdGFVUkxcIiBbfHxdKVxuICAgIGxldCAoc2V0X2ZpbGxfc3R5bGUgOlxuICAgICAgY29udGV4dCAtPiBbIGBDb2xvciBvZiBjc3NfY29sb3IgIHwgYEdyYWRpZW50IG9mIGdyYWRpZW50IF0gLT4gdW5pdCkgPVxuICAgICAgZnVuIHg1NzcgLT5cbiAgICAgICAgZnVuIHg1NzggLT5cbiAgICAgICAgICBPanMuc2V0IChjb250ZXh0X3RvX2pzIHg1NzcpIFwiZmlsbFN0eWxlXCJcbiAgICAgICAgICAgIChtYXRjaCB4NTc4IHdpdGhcbiAgICAgICAgICAgICB8IGBDb2xvciB4NTc5IC0+IGNzc19jb2xvcl90b19qcyB4NTc5XG4gICAgICAgICAgICAgfCBgR3JhZGllbnQgeDU4MCAtPiBncmFkaWVudF90b19qcyB4NTgwKVxuICAgIGxldCAoc2V0X3N0cm9rZV9zdHlsZSA6XG4gICAgICBjb250ZXh0IC0+IFsgYENvbG9yIG9mIGNzc19jb2xvciAgfCBgR3JhZGllbnQgb2YgZ3JhZGllbnQgXSAtPiB1bml0KSA9XG4gICAgICBmdW4geDU4MSAtPlxuICAgICAgICBmdW4geDU4MiAtPlxuICAgICAgICAgIE9qcy5zZXQgKGNvbnRleHRfdG9fanMgeDU4MSkgXCJzdHJva2VTdHlsZVwiXG4gICAgICAgICAgICAobWF0Y2ggeDU4MiB3aXRoXG4gICAgICAgICAgICAgfCBgQ29sb3IgeDU4MyAtPiBjc3NfY29sb3JfdG9fanMgeDU4M1xuICAgICAgICAgICAgIHwgYEdyYWRpZW50IHg1ODQgLT4gZ3JhZGllbnRfdG9fanMgeDU4NClcbiAgICBsZXQgKHNldF9saW5lX3dpZHRoIDogY29udGV4dCAtPiBmbG9hdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDU4NSAtPlxuICAgICAgICBmdW4geDU4NiAtPlxuICAgICAgICAgIE9qcy5zZXQgKGNvbnRleHRfdG9fanMgeDU4NSkgXCJsaW5lV2lkdGhcIiAoT2pzLmZsb2F0X3RvX2pzIHg1ODYpXG4gICAgbGV0IChjcmVhdGVfbGluZWFyX2dyYWRpZW50IDpcbiAgICAgIGNvbnRleHQgLT4gZmxvYXQgLT4gZmxvYXQgLT4gZmxvYXQgLT4gZmxvYXQgLT4gZ3JhZGllbnQpID1cbiAgICAgIGZ1biB4NTkxIC0+XG4gICAgICAgIGZ1biB4NTg3IC0+XG4gICAgICAgICAgZnVuIHg1ODggLT5cbiAgICAgICAgICAgIGZ1biB4NTg5IC0+XG4gICAgICAgICAgICAgIGZ1biB4NTkwIC0+XG4gICAgICAgICAgICAgICAgZ3JhZGllbnRfb2ZfanNcbiAgICAgICAgICAgICAgICAgIChPanMuY2FsbCAoY29udGV4dF90b19qcyB4NTkxKSBcImNyZWF0ZUxpbmVhckdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgIFt8KE9qcy5mbG9hdF90b19qcyB4NTg3KTsoT2pzLmZsb2F0X3RvX2pzIHg1ODgpOyhcbiAgICAgICAgICAgICAgICAgICAgICAgT2pzLmZsb2F0X3RvX2pzIHg1ODkpOyhPanMuZmxvYXRfdG9fanMgeDU5MCl8XSlcbiAgICBsZXQgKGFkZF9jb2xvcl9zdG9wIDogZ3JhZGllbnQgLT4gZmxvYXQgLT4gY3NzX2NvbG9yIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NTk0IC0+XG4gICAgICAgIGZ1biB4NTkyIC0+XG4gICAgICAgICAgZnVuIHg1OTMgLT5cbiAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAoT2pzLmNhbGwgKGdyYWRpZW50X3RvX2pzIHg1OTQpIFwiYWRkQ29sb3JTdG9wXCJcbiAgICAgICAgICAgICAgICAgW3woT2pzLmZsb2F0X3RvX2pzIHg1OTIpOyhjc3NfY29sb3JfdG9fanMgeDU5Myl8XSlcbiAgICBsZXQgKGJlZ2luX3BhdGggOiBjb250ZXh0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NTk1IC0+IGlnbm9yZSAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDU5NSkgXCJiZWdpblBhdGhcIiBbfHxdKVxuICAgIGxldCAoY2xvc2VfcGF0aCA6IGNvbnRleHQgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg1OTYgLT4gaWdub3JlIChPanMuY2FsbCAoY29udGV4dF90b19qcyB4NTk2KSBcImNsb3NlUGF0aFwiIFt8fF0pXG4gICAgbGV0IChhcmMgOiBjb250ZXh0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IHVuaXQpXG4gICAgICA9XG4gICAgICBmdW4geDYwMiAtPlxuICAgICAgICBmdW4geDU5NyAtPlxuICAgICAgICAgIGZ1biB4NTk4IC0+XG4gICAgICAgICAgICBmdW4geDU5OSAtPlxuICAgICAgICAgICAgICBmdW4geDYwMCAtPlxuICAgICAgICAgICAgICAgIGZ1biB4NjAxIC0+XG4gICAgICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgKE9qcy5jYWxsIChjb250ZXh0X3RvX2pzIHg2MDIpIFwiYXJjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3woT2pzLmZsb2F0X3RvX2pzIHg1OTcpOyhPanMuZmxvYXRfdG9fanMgeDU5OCk7KFxuICAgICAgICAgICAgICAgICAgICAgICAgIE9qcy5mbG9hdF90b19qcyB4NTk5KTsoT2pzLmZsb2F0X3RvX2pzIHg2MDApOyhcbiAgICAgICAgICAgICAgICAgICAgICAgICBPanMuZmxvYXRfdG9fanMgeDYwMSl8XSlcbiAgICBsZXQgKG1vdmVfdG8gOiBjb250ZXh0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NjA1IC0+XG4gICAgICAgIGZ1biB4NjAzIC0+XG4gICAgICAgICAgZnVuIHg2MDQgLT5cbiAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDYwNSkgXCJtb3ZlVG9cIlxuICAgICAgICAgICAgICAgICBbfChPanMuZmxvYXRfdG9fanMgeDYwMyk7KE9qcy5mbG9hdF90b19qcyB4NjA0KXxdKVxuICAgIGxldCAobGluZV90byA6IGNvbnRleHQgLT4gZmxvYXQgLT4gZmxvYXQgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg2MDggLT5cbiAgICAgICAgZnVuIHg2MDYgLT5cbiAgICAgICAgICBmdW4geDYwNyAtPlxuICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgIChPanMuY2FsbCAoY29udGV4dF90b19qcyB4NjA4KSBcImxpbmVUb1wiXG4gICAgICAgICAgICAgICAgIFt8KE9qcy5mbG9hdF90b19qcyB4NjA2KTsoT2pzLmZsb2F0X3RvX2pzIHg2MDcpfF0pXG4gICAgbGV0IChmaWxsIDogY29udGV4dCAtPiB1bml0KSA9XG4gICAgICBmdW4geDYwOSAtPiBpZ25vcmUgKE9qcy5jYWxsIChjb250ZXh0X3RvX2pzIHg2MDkpIFwiZmlsbFwiIFt8fF0pXG4gICAgbGV0IChzdHJva2UgOiBjb250ZXh0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NjEwIC0+IGlnbm9yZSAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDYxMCkgXCJzdHJva2VcIiBbfHxdKVxuICAgIGxldCAoc3Ryb2tlX3JlY3QgOiBjb250ZXh0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NjE1IC0+XG4gICAgICAgIGZ1biB4NjExIC0+XG4gICAgICAgICAgZnVuIHg2MTIgLT5cbiAgICAgICAgICAgIGZ1biB4NjEzIC0+XG4gICAgICAgICAgICAgIGZ1biB4NjE0IC0+XG4gICAgICAgICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAgICAgICAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDYxNSkgXCJzdHJva2VSZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgIFt8KE9qcy5mbG9hdF90b19qcyB4NjExKTsoT2pzLmZsb2F0X3RvX2pzIHg2MTIpOyhcbiAgICAgICAgICAgICAgICAgICAgICAgT2pzLmZsb2F0X3RvX2pzIHg2MTMpOyhPanMuZmxvYXRfdG9fanMgeDYxNCl8XSlcbiAgICBsZXQgKGZpbGxfcmVjdCA6IGNvbnRleHQgLT4gZmxvYXQgLT4gZmxvYXQgLT4gZmxvYXQgLT4gZmxvYXQgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg2MjAgLT5cbiAgICAgICAgZnVuIHg2MTYgLT5cbiAgICAgICAgICBmdW4geDYxNyAtPlxuICAgICAgICAgICAgZnVuIHg2MTggLT5cbiAgICAgICAgICAgICAgZnVuIHg2MTkgLT5cbiAgICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAgIChPanMuY2FsbCAoY29udGV4dF90b19qcyB4NjIwKSBcImZpbGxSZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgIFt8KE9qcy5mbG9hdF90b19qcyB4NjE2KTsoT2pzLmZsb2F0X3RvX2pzIHg2MTcpOyhcbiAgICAgICAgICAgICAgICAgICAgICAgT2pzLmZsb2F0X3RvX2pzIHg2MTgpOyhPanMuZmxvYXRfdG9fanMgeDYxOSl8XSlcbiAgICBsZXQgKHNldF9mb250IDogY29udGV4dCAtPiBzdHJpbmcgLT4gdW5pdCkgPVxuICAgICAgZnVuIHg2MjEgLT5cbiAgICAgICAgZnVuIHg2MjIgLT5cbiAgICAgICAgICBPanMuc2V0IChjb250ZXh0X3RvX2pzIHg2MjEpIFwiZm9udFwiIChPanMuc3RyaW5nX3RvX2pzIHg2MjIpXG4gICAgbGV0IChmaWxsX3RleHQgOiBjb250ZXh0IC0+IHN0cmluZyAtPiBmbG9hdCAtPiBmbG9hdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDYyNiAtPlxuICAgICAgICBmdW4geDYyMyAtPlxuICAgICAgICAgIGZ1biB4NjI0IC0+XG4gICAgICAgICAgICBmdW4geDYyNSAtPlxuICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDYyNikgXCJmaWxsVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgW3woT2pzLnN0cmluZ190b19qcyB4NjIzKTsoT2pzLmZsb2F0X3RvX2pzIHg2MjQpOyhcbiAgICAgICAgICAgICAgICAgICAgIE9qcy5mbG9hdF90b19qcyB4NjI1KXxdKVxuICAgIGxldCAoc3Ryb2tlX3RleHQgOiBjb250ZXh0IC0+IHN0cmluZyAtPiBmbG9hdCAtPiBmbG9hdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDYzMCAtPlxuICAgICAgICBmdW4geDYyNyAtPlxuICAgICAgICAgIGZ1biB4NjI4IC0+XG4gICAgICAgICAgICBmdW4geDYyOSAtPlxuICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDYzMCkgXCJzdHJva2VUZXh0XCJcbiAgICAgICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHg2MjcpOyhPanMuZmxvYXRfdG9fanMgeDYyOCk7KFxuICAgICAgICAgICAgICAgICAgICAgT2pzLmZsb2F0X3RvX2pzIHg2MjkpfF0pXG4gICAgbW9kdWxlIFRleHRNZXRyaWNzID1cbiAgICAgIHN0cnVjdFxuICAgICAgICB0eXBlIHQgPSBPanMudFxuICAgICAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBmdW4geDYzMiAtPiB4NjMyXG4gICAgICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gZnVuIHg2MzEgLT4geDYzMVxuICAgICAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICAgICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgICAgIGxldCAod2lkdGggOiB0IC0+IGZsb2F0KSA9XG4gICAgICAgICAgZnVuIHg2MzUgLT4gT2pzLmZsb2F0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg2MzUpIFwid2lkdGhcIilcbiAgICAgIGVuZFxuICAgIGxldCAobWVhc3VyZV90ZXh0IDogY29udGV4dCAtPiBzdHJpbmcgLT4gVGV4dE1ldHJpY3MudCkgPVxuICAgICAgZnVuIHg2MzcgLT5cbiAgICAgICAgZnVuIHg2MzYgLT5cbiAgICAgICAgICBUZXh0TWV0cmljcy50X29mX2pzXG4gICAgICAgICAgICAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDYzNykgXCJtZWFzdXJlVGV4dFwiXG4gICAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHg2MzYpfF0pXG4gICAgbGV0IChyb3RhdGUgOiBjb250ZXh0IC0+IGZsb2F0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NjM5IC0+XG4gICAgICAgIGZ1biB4NjM4IC0+XG4gICAgICAgICAgaWdub3JlXG4gICAgICAgICAgICAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDYzOSkgXCJyb3RhdGVcIlxuICAgICAgICAgICAgICAgW3woT2pzLmZsb2F0X3RvX2pzIHg2MzgpfF0pXG4gICAgbGV0ICh0cmFuc2xhdGUgOiBjb250ZXh0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NjQyIC0+XG4gICAgICAgIGZ1biB4NjQwIC0+XG4gICAgICAgICAgZnVuIHg2NDEgLT5cbiAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDY0MikgXCJ0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgICBbfChPanMuZmxvYXRfdG9fanMgeDY0MCk7KE9qcy5mbG9hdF90b19qcyB4NjQxKXxdKVxuICAgIGxldCAoc2NhbGUgOiBjb250ZXh0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NjQ1IC0+XG4gICAgICAgIGZ1biB4NjQzIC0+XG4gICAgICAgICAgZnVuIHg2NDQgLT5cbiAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAoT2pzLmNhbGwgKGNvbnRleHRfdG9fanMgeDY0NSkgXCJzY2FsZVwiXG4gICAgICAgICAgICAgICAgIFt8KE9qcy5mbG9hdF90b19qcyB4NjQzKTsoT2pzLmZsb2F0X3RvX2pzIHg2NDQpfF0pXG4gICAgbGV0IChjbGVhcl9yZWN0IDogY29udGV4dCAtPiBmbG9hdCAtPiBmbG9hdCAtPiBmbG9hdCAtPiBmbG9hdCAtPiB1bml0KSA9XG4gICAgICBmdW4geDY1MCAtPlxuICAgICAgICBmdW4geDY0NiAtPlxuICAgICAgICAgIGZ1biB4NjQ3IC0+XG4gICAgICAgICAgICBmdW4geDY0OCAtPlxuICAgICAgICAgICAgICBmdW4geDY0OSAtPlxuICAgICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgICAgKE9qcy5jYWxsIChjb250ZXh0X3RvX2pzIHg2NTApIFwiY2xlYXJSZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgIFt8KE9qcy5mbG9hdF90b19qcyB4NjQ2KTsoT2pzLmZsb2F0X3RvX2pzIHg2NDcpOyhcbiAgICAgICAgICAgICAgICAgICAgICAgT2pzLmZsb2F0X3RvX2pzIHg2NDgpOyhPanMuZmxvYXRfdG9fanMgeDY0OSl8XSlcbiAgZW5kXG5tb2R1bGUgUGVyZm9ybWFuY2UgPVxuICBzdHJ1Y3RcbiAgICBsZXQgKG5vdyA6IHVuaXQgLT4gZmxvYXQpID1cbiAgICAgIGZ1biAoKSAtPlxuICAgICAgICBPanMuZmxvYXRfb2ZfanNcbiAgICAgICAgICAoT2pzLmNhbGwgKE9qcy5nZXQgT2pzLmdsb2JhbCBcInBlcmZvcm1hbmNlXCIpIFwibm93XCIgW3x8XSlcbiAgZW5kXG5tb2R1bGUgQ29uc29sZSA9XG4gIHN0cnVjdFxuICAgIHR5cGUgdCA9IE9qcy50XG4gICAgbGV0IHJlYyAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gZnVuIHg2NTIgLT4geDY1MlxuICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gZnVuIHg2NTEgLT4geDY1MVxuICAgIGxldCAobG9nIDogdCAtPiBPanMudCAtPiB1bml0KSA9XG4gICAgICBmdW4geDY1NCAtPiBmdW4geDY1MyAtPiBpZ25vcmUgKE9qcy5jYWxsICh0X3RvX2pzIHg2NTQpIFwibG9nXCIgW3x4NjUzfF0pXG4gIGVuZFxubGV0IChjb25zb2xlIDogQ29uc29sZS50KSA9IENvbnNvbGUudF9vZl9qcyAoT2pzLmdldCBPanMuZ2xvYmFsIFwiY29uc29sZVwiKVxubW9kdWxlIEFycmF5QnVmZmVyID1cbiAgc3RydWN0XG4gICAgdHlwZSB0ID0gT2pzLnRcbiAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBmdW4geDY1NiAtPiB4NjU2XG4gICAgYW5kICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSBmdW4geDY1NSAtPiB4NjU1XG4gICAgbGV0IChjcmVhdGUgOiBpbnQgLT4gdCkgPVxuICAgICAgZnVuIHg2NTcgLT5cbiAgICAgICAgdF9vZl9qc1xuICAgICAgICAgIChPanMubmV3X29iaiAoT2pzLmdldCBPanMuZ2xvYmFsIFwiQXJyYXlCdWZmZXJcIilcbiAgICAgICAgICAgICBbfChPanMuaW50X3RvX2pzIHg2NTcpfF0pXG4gIGVuZFxubW9kdWxlIFVpbnQ4QXJyYXkgPVxuICBzdHJ1Y3RcbiAgICB0eXBlIHQgPSBPanMudFxuICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4NjU5IC0+IHg2NTlcbiAgICBhbmQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IGZ1biB4NjU4IC0+IHg2NThcbiAgICBsZXQgKGZyb21fYnVmZmVyIDogQXJyYXlCdWZmZXIudCAtPiB0KSA9XG4gICAgICBmdW4geDY2MCAtPlxuICAgICAgICB0X29mX2pzXG4gICAgICAgICAgKE9qcy5uZXdfb2JqIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJVaW50OEFycmF5XCIpXG4gICAgICAgICAgICAgW3woQXJyYXlCdWZmZXIudF90b19qcyB4NjYwKXxdKVxuICAgIGxldCAoc2V0IDogdCAtPiBpbnQgYXJyYXkgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgIGZ1biB4NjY0IC0+XG4gICAgICAgIGZ1biB4NjYxIC0+XG4gICAgICAgICAgZnVuIHg2NjMgLT5cbiAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDY2NCkgXCJzZXRcIlxuICAgICAgICAgICAgICAgICBbfChPanMuYXJyYXlfdG9fanMgT2pzLmludF90b19qcyB4NjYxKTsoT2pzLmludF90b19qcyB4NjYzKXxdKVxuICBlbmRcbm1vZHVsZSBCbG9iID1cbiAgc3RydWN0XG4gICAgdHlwZSBvcHRpb25zID0gT2pzLnRcbiAgICBsZXQgcmVjIChvcHRpb25zX29mX2pzIDogT2pzLnQgLT4gb3B0aW9ucykgPSBmdW4geDY2NiAtPiB4NjY2XG4gICAgYW5kIChvcHRpb25zX3RvX2pzIDogb3B0aW9ucyAtPiBPanMudCkgPSBmdW4geDY2NSAtPiB4NjY1XG4gICAgbGV0IChvcHRpb25zIDogP3R5cGVfOnN0cmluZyAtPiA/ZW5kaW5nczpzdHJpbmcgLT4gdW5pdCAtPiBvcHRpb25zKSA9XG4gICAgICBmdW4gP3R5cGVfOng2NjcgLT5cbiAgICAgICAgZnVuID9lbmRpbmdzOng2NjggLT5cbiAgICAgICAgICBmdW4gKCkgLT5cbiAgICAgICAgICAgIGxldCB4NjY5ID0gT2pzLmVtcHR5X29iaiAoKSBpblxuICAgICAgICAgICAgKG1hdGNoIHg2Njcgd2l0aFxuICAgICAgICAgICAgIHwgU29tZSB4NjcxIC0+IE9qcy5zZXQgeDY2OSBcInR5cGVcIiAoT2pzLnN0cmluZ190b19qcyB4NjcxKVxuICAgICAgICAgICAgIHwgTm9uZSAtPiAoKSk7XG4gICAgICAgICAgICAobWF0Y2ggeDY2OCB3aXRoXG4gICAgICAgICAgICAgfCBTb21lIHg2NzAgLT4gT2pzLnNldCB4NjY5IFwiZW5kaW5nc1wiIChPanMuc3RyaW5nX3RvX2pzIHg2NzApXG4gICAgICAgICAgICAgfCBOb25lIC0+ICgpKTtcbiAgICAgICAgICAgIG9wdGlvbnNfb2ZfanMgeDY2OVxuICAgIHR5cGUgdCA9IE9qcy50XG4gICAgbGV0IHJlYyAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gZnVuIHg2NzMgLT4geDY3M1xuICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gZnVuIHg2NzIgLT4geDY3MlxuICAgIGxldCAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gdF9vZl9qc1xuICAgIGxldCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gdF90b19qc1xuICAgIGxldCAoY3JlYXRlIDpcbiAgICAgIFsgYEFycmF5QnVmZmVyIG9mIEFycmF5QnVmZmVyLnQgIHwgYE90aGVyIG9mIE9qcy50IF0gbGlzdCAtPlxuICAgICAgICA/b3B0aW9uczpvcHRpb25zIC0+IHVuaXQgLT4gdClcbiAgICAgID1cbiAgICAgIGZ1biB4Njc2IC0+XG4gICAgICAgIGZ1biA/b3B0aW9uczp4Njc3IC0+XG4gICAgICAgICAgZnVuICgpIC0+XG4gICAgICAgICAgICB0X29mX2pzXG4gICAgICAgICAgICAgIChPanMubmV3X29ial9hcnIgKE9qcy5nZXQgT2pzLmdsb2JhbCBcIkJsb2JcIilcbiAgICAgICAgICAgICAgICAgKGxldCB4Njc4ID0gT2pzLm5ld19vYmogKE9qcy5nZXQgT2pzLmdsb2JhbCBcIkFycmF5XCIpIFt8fF0gaW5cbiAgICAgICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAoT2pzLmNhbGwgeDY3OCBcInB1c2hcIlxuICAgICAgICAgICAgICAgICAgICAgICBbfChPanMubGlzdF90b19qc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmdW4geDY4MCAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoIHg2ODAgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYEFycmF5QnVmZmVyIHg2ODEgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXlCdWZmZXIudF90b19qcyB4NjgxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBgT3RoZXIgeDY4MiAtPiB4NjgyKSB4Njc2KXxdKTtcbiAgICAgICAgICAgICAgICAgIChtYXRjaCB4Njc3IHdpdGhcbiAgICAgICAgICAgICAgICAgICB8IFNvbWUgeDY3OSAtPlxuICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmUgKE9qcy5jYWxsIHg2NzggXCJwdXNoXCIgW3wob3B0aW9uc190b19qcyB4Njc5KXxdKVxuICAgICAgICAgICAgICAgICAgIHwgTm9uZSAtPiAoKSk7XG4gICAgICAgICAgICAgICAgICB4Njc4KSlcbiAgICBsZXQgKHRleHQgOiB0IC0+IHVuaXQgLT4gc3RyaW5nIFByb21pc2UudCkgPVxuICAgICAgZnVuIHg2ODMgLT5cbiAgICAgICAgZnVuICgpIC0+XG4gICAgICAgICAgUHJvbWlzZS50X29mX2pzIE9qcy5zdHJpbmdfb2ZfanNcbiAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NjgzKSBcInRleHRcIiBbfHxdKVxuICBlbmRcbm1vZHVsZSBPYmplY3RVUkwgPVxuICBzdHJ1Y3RcbiAgICBsZXQgKG9mX2Jsb2IgOiBCbG9iLnQgLT4gc3RyaW5nKSA9XG4gICAgICBmdW4geDY4NSAtPlxuICAgICAgICBPanMuc3RyaW5nX29mX2pzXG4gICAgICAgICAgKE9qcy5jYWxsIChPanMuZ2V0IE9qcy5nbG9iYWwgXCJVUkxcIikgXCJjcmVhdGVPYmplY3RVUkxcIlxuICAgICAgICAgICAgIFt8KEJsb2IudF90b19qcyB4Njg1KXxdKVxuICAgIGxldCAocmV2b2tlIDogc3RyaW5nIC0+IHVuaXQpID1cbiAgICAgIGZ1biB4Njg2IC0+XG4gICAgICAgIGlnbm9yZVxuICAgICAgICAgIChPanMuY2FsbCAoT2pzLmdldCBPanMuZ2xvYmFsIFwiVVJMXCIpIFwicmV2b2tlT2JqZWN0VVJMXCJcbiAgICAgICAgICAgICBbfChPanMuc3RyaW5nX3RvX2pzIHg2ODYpfF0pXG4gIGVuZFxubW9kdWxlIFN2ZyA9XG4gIHN0cnVjdFxuICAgIG1vZHVsZSBMZW5ndGggPVxuICAgICAgc3RydWN0XG4gICAgICAgIHR5cGUgdCA9IE9qcy50XG4gICAgICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4Njg4IC0+IHg2ODhcbiAgICAgICAgYW5kICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSBmdW4geDY4NyAtPiB4Njg3XG4gICAgICAgIGxldCAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gdF9vZl9qc1xuICAgICAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICAgICAgbGV0ICh1bml0X3R5cGUgOiB0IC0+IGludCkgPVxuICAgICAgICAgIGZ1biB4NjkxIC0+IE9qcy5pbnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDY5MSkgXCJ1bml0VHlwZVwiKVxuICAgICAgICBsZXQgKHZhbHVlIDogdCAtPiBmbG9hdCkgPVxuICAgICAgICAgIGZ1biB4NjkyIC0+IE9qcy5mbG9hdF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NjkyKSBcInZhbHVlXCIpXG4gICAgICAgIGxldCAodmFsdWVfYXNfc3RyaW5nIDogdCAtPiBzdHJpbmcpID1cbiAgICAgICAgICBmdW4geDY5MyAtPlxuICAgICAgICAgICAgT2pzLnN0cmluZ19vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NjkzKSBcInZhbHVlQXNTdHJpbmdcIilcbiAgICAgICAgbGV0ICh2YWx1ZV9pbl9zcGVjaWZpZWRfdW5pdHMgOiB0IC0+IGZsb2F0KSA9XG4gICAgICAgICAgZnVuIHg2OTQgLT5cbiAgICAgICAgICAgIE9qcy5mbG9hdF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4Njk0KSBcInZhbHVlSW5TcGVjaWZpZWRVbml0c1wiKVxuICAgICAgZW5kXG4gICAgbW9kdWxlIEFuaW1hdGVkTGVuZ3RoID1cbiAgICAgIHN0cnVjdFxuICAgICAgICB0eXBlIHQgPSBPanMudFxuICAgICAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBmdW4geDY5NiAtPiB4Njk2XG4gICAgICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gZnVuIHg2OTUgLT4geDY5NVxuICAgICAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICAgICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgICAgIGxldCAoYW5pbV92YWwgOiB0IC0+IExlbmd0aC50KSA9XG4gICAgICAgICAgZnVuIHg2OTkgLT4gTGVuZ3RoLnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDY5OSkgXCJhbmltVmFsXCIpXG4gICAgICAgIGxldCAoYmFzZV92YWwgOiB0IC0+IExlbmd0aC50KSA9XG4gICAgICAgICAgZnVuIHg3MDAgLT4gTGVuZ3RoLnRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDcwMCkgXCJiYXNlVmFsXCIpXG4gICAgICBlbmRcbiAgICB0eXBlIHBhdGhfc2VnX3R5cGUgPVxuICAgICAgfCBVbmtub3duIFxuICAgICAgfCBDbG9zZV9wYXRoIFxuICAgICAgfCBNb3ZldG9fYWJzIFxuICAgICAgfCBNb3ZldG9fcmVsIFxuICAgICAgfCBMaW5ldG9fYWJzIFxuICAgICAgfCBMaW5ldG9fcmVsIFxuICAgICAgfCBDdXJ2ZXRvX2N1YmljX2FicyBcbiAgICAgIHwgQ3VydmV0b19jdWJpY19yZWwgXG4gICAgICB8IEN1cnZldG9fcXVhZHJhdGljX2FicyBcbiAgICAgIHwgQ3VydmV0b19xdWFkcmF0aWNfcmVsIFxuICAgIGxldCByZWMgKHBhdGhfc2VnX3R5cGVfb2ZfanMgOiBPanMudCAtPiBwYXRoX3NlZ190eXBlKSA9XG4gICAgICBmdW4geDcwMiAtPlxuICAgICAgICBsZXQgeDcwMyA9IHg3MDIgaW5cbiAgICAgICAgbWF0Y2ggT2pzLmludF9vZl9qcyB4NzAzIHdpdGhcbiAgICAgICAgfCAwIC0+IFVua25vd25cbiAgICAgICAgfCAxIC0+IENsb3NlX3BhdGhcbiAgICAgICAgfCAyIC0+IE1vdmV0b19hYnNcbiAgICAgICAgfCAzIC0+IE1vdmV0b19yZWxcbiAgICAgICAgfCA0IC0+IExpbmV0b19hYnNcbiAgICAgICAgfCA1IC0+IExpbmV0b19yZWxcbiAgICAgICAgfCA2IC0+IEN1cnZldG9fY3ViaWNfYWJzXG4gICAgICAgIHwgNyAtPiBDdXJ2ZXRvX2N1YmljX3JlbFxuICAgICAgICB8IDggLT4gQ3VydmV0b19xdWFkcmF0aWNfYWJzXG4gICAgICAgIHwgOSAtPiBDdXJ2ZXRvX3F1YWRyYXRpY19yZWxcbiAgICAgICAgfCBfIC0+IGFzc2VydCBmYWxzZVxuICAgIGFuZCAocGF0aF9zZWdfdHlwZV90b19qcyA6IHBhdGhfc2VnX3R5cGUgLT4gT2pzLnQpID1cbiAgICAgIGZ1biB4NzAxIC0+XG4gICAgICAgIG1hdGNoIHg3MDEgd2l0aFxuICAgICAgICB8IFVua25vd24gLT4gT2pzLmludF90b19qcyAwXG4gICAgICAgIHwgQ2xvc2VfcGF0aCAtPiBPanMuaW50X3RvX2pzIDFcbiAgICAgICAgfCBNb3ZldG9fYWJzIC0+IE9qcy5pbnRfdG9fanMgMlxuICAgICAgICB8IE1vdmV0b19yZWwgLT4gT2pzLmludF90b19qcyAzXG4gICAgICAgIHwgTGluZXRvX2FicyAtPiBPanMuaW50X3RvX2pzIDRcbiAgICAgICAgfCBMaW5ldG9fcmVsIC0+IE9qcy5pbnRfdG9fanMgNVxuICAgICAgICB8IEN1cnZldG9fY3ViaWNfYWJzIC0+IE9qcy5pbnRfdG9fanMgNlxuICAgICAgICB8IEN1cnZldG9fY3ViaWNfcmVsIC0+IE9qcy5pbnRfdG9fanMgN1xuICAgICAgICB8IEN1cnZldG9fcXVhZHJhdGljX2FicyAtPiBPanMuaW50X3RvX2pzIDhcbiAgICAgICAgfCBDdXJ2ZXRvX3F1YWRyYXRpY19yZWwgLT4gT2pzLmludF90b19qcyA5XG4gICAgbW9kdWxlIFBhdGhTZWcgPVxuICAgICAgc3RydWN0XG4gICAgICAgIHR5cGUgdCA9IE9qcy50XG4gICAgICAgIGxldCByZWMgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IGZ1biB4NzA1IC0+IHg3MDVcbiAgICAgICAgYW5kICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSBmdW4geDcwNCAtPiB4NzA0XG4gICAgICAgIGxldCAodF9vZl9qcyA6IE9qcy50IC0+IHQpID0gdF9vZl9qc1xuICAgICAgICBsZXQgKHRfdG9fanMgOiB0IC0+IE9qcy50KSA9IHRfdG9fanNcbiAgICAgICAgbGV0ICh4IDogdCAtPiBmbG9hdCkgPVxuICAgICAgICAgIGZ1biB4NzA4IC0+IE9qcy5mbG9hdF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NzA4KSBcInhcIilcbiAgICAgICAgbGV0ICh5IDogdCAtPiBmbG9hdCkgPVxuICAgICAgICAgIGZ1biB4NzA5IC0+IE9qcy5mbG9hdF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NzA5KSBcInlcIilcbiAgICAgICAgbGV0ICh4MSA6IHQgLT4gZmxvYXQpID1cbiAgICAgICAgICBmdW4geDcxMCAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDcxMCkgXCJ4MVwiKVxuICAgICAgICBsZXQgKHkxIDogdCAtPiBmbG9hdCkgPVxuICAgICAgICAgIGZ1biB4NzExIC0+IE9qcy5mbG9hdF9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NzExKSBcInkxXCIpXG4gICAgICAgIGxldCAoeDIgOiB0IC0+IGZsb2F0KSA9XG4gICAgICAgICAgZnVuIHg3MTIgLT4gT2pzLmZsb2F0X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg3MTIpIFwieDJcIilcbiAgICAgICAgbGV0ICh5MiA6IHQgLT4gZmxvYXQpID1cbiAgICAgICAgICBmdW4geDcxMyAtPiBPanMuZmxvYXRfb2ZfanMgKE9qcy5nZXQgKHRfdG9fanMgeDcxMykgXCJ5MlwiKVxuICAgICAgICBsZXQgKHBhdGhfc2VnX3R5cGUgOiB0IC0+IHBhdGhfc2VnX3R5cGUpID1cbiAgICAgICAgICBmdW4geDcxNCAtPlxuICAgICAgICAgICAgcGF0aF9zZWdfdHlwZV9vZl9qcyAoT2pzLmdldCAodF90b19qcyB4NzE0KSBcInBhdGhTZWdUeXBlXCIpXG4gICAgICAgIGxldCAocGF0aF9zZWdfdHlwZV9hc19sZXR0ZXIgOiB0IC0+IHN0cmluZykgPVxuICAgICAgICAgIGZ1biB4NzE1IC0+XG4gICAgICAgICAgICBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg3MTUpIFwicGF0aFNlZ1R5cGVBc0xldHRlclwiKVxuICAgICAgZW5kXG4gICAgbW9kdWxlIFBhdGhTZWdMaXN0ID1cbiAgICAgIHN0cnVjdFxuICAgICAgICB0eXBlIHQgPSBPanMudFxuICAgICAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBmdW4geDcxNyAtPiB4NzE3XG4gICAgICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gZnVuIHg3MTYgLT4geDcxNlxuICAgICAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICAgICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgICAgIGxldCAobnVtYmVyX29mX2l0ZW1zIDogdCAtPiBpbnQpID1cbiAgICAgICAgICBmdW4geDcyMCAtPiBPanMuaW50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg3MjApIFwibnVtYmVyT2ZJdGVtc1wiKVxuICAgICAgICBsZXQgKGdldF9pdGVtIDogdCAtPiBpbnQgLT4gUGF0aFNlZy50KSA9XG4gICAgICAgICAgZnVuIHg3MjIgLT5cbiAgICAgICAgICAgIGZ1biB4NzIxIC0+XG4gICAgICAgICAgICAgIFBhdGhTZWcudF9vZl9qc1xuICAgICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NzIyKSBcImdldEl0ZW1cIiBbfChPanMuaW50X3RvX2pzIHg3MjEpfF0pXG4gICAgICAgIGxldCAoaW5zZXJ0X2l0ZW1fYmVmb3JlIDogdCAtPiBQYXRoU2VnLnQgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgICAgICBmdW4geDcyNSAtPlxuICAgICAgICAgICAgZnVuIHg3MjMgLT5cbiAgICAgICAgICAgICAgZnVuIHg3MjQgLT5cbiAgICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NzI1KSBcImluc2VydEl0ZW1CZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgW3woUGF0aFNlZy50X3RvX2pzIHg3MjMpOyhPanMuaW50X3RvX2pzIHg3MjQpfF0pXG4gICAgICAgIGxldCAocmVwbGFjZV9pdGVtIDogdCAtPiBQYXRoU2VnLnQgLT4gaW50IC0+IHVuaXQpID1cbiAgICAgICAgICBmdW4geDcyOCAtPlxuICAgICAgICAgICAgZnVuIHg3MjYgLT5cbiAgICAgICAgICAgICAgZnVuIHg3MjcgLT5cbiAgICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NzI4KSBcInJlcGxhY2VJdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgIFt8KFBhdGhTZWcudF90b19qcyB4NzI2KTsoT2pzLmludF90b19qcyB4NzI3KXxdKVxuICAgICAgICBsZXQgKHJlbW92ZV9pdGVtIDogdCAtPiBpbnQgLT4gdW5pdCkgPVxuICAgICAgICAgIGZ1biB4NzMwIC0+XG4gICAgICAgICAgICBmdW4geDcyOSAtPlxuICAgICAgICAgICAgICBpZ25vcmVcbiAgICAgICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDczMCkgXCJyZW1vdmVJdGVtXCJcbiAgICAgICAgICAgICAgICAgICBbfChPanMuaW50X3RvX2pzIHg3MjkpfF0pXG4gICAgICAgIGxldCAoYXBwZW5kX2l0ZW0gOiB0IC0+IFBhdGhTZWcudCAtPiB1bml0KSA9XG4gICAgICAgICAgZnVuIHg3MzIgLT5cbiAgICAgICAgICAgIGZ1biB4NzMxIC0+XG4gICAgICAgICAgICAgIGlnbm9yZVxuICAgICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NzMyKSBcImFwcGVuZEl0ZW1cIlxuICAgICAgICAgICAgICAgICAgIFt8KFBhdGhTZWcudF90b19qcyB4NzMxKXxdKVxuICAgICAgZW5kXG4gICAgbW9kdWxlIFBhdGhFbGVtZW50ID1cbiAgICAgIHN0cnVjdFxuICAgICAgICB0eXBlIHQgPSBPanMudFxuICAgICAgICBsZXQgcmVjICh0X29mX2pzIDogT2pzLnQgLT4gdCkgPSBmdW4geDczNCAtPiB4NzM0XG4gICAgICAgIGFuZCAodF90b19qcyA6IHQgLT4gT2pzLnQpID0gZnVuIHg3MzMgLT4geDczM1xuICAgICAgICBsZXQgKHRfb2ZfanMgOiBPanMudCAtPiB0KSA9IHRfb2ZfanNcbiAgICAgICAgbGV0ICh0X3RvX2pzIDogdCAtPiBPanMudCkgPSB0X3RvX2pzXG4gICAgICAgIGxldCAocGF0aF9zZWdfbGlzdCA6IHQgLT4gUGF0aFNlZ0xpc3QudCkgPVxuICAgICAgICAgIGZ1biB4NzM3IC0+XG4gICAgICAgICAgICBQYXRoU2VnTGlzdC50X29mX2pzIChPanMuZ2V0ICh0X3RvX2pzIHg3MzcpIFwicGF0aFNlZ0xpc3RcIilcbiAgICAgICAgbGV0IChub3JtYWxpemVkX3BhdGhfc2VnX2xpc3QgOiB0IC0+IFBhdGhTZWdMaXN0LnQpID1cbiAgICAgICAgICBmdW4geDczOCAtPlxuICAgICAgICAgICAgUGF0aFNlZ0xpc3QudF9vZl9qc1xuICAgICAgICAgICAgICAoT2pzLmdldCAodF90b19qcyB4NzM4KSBcIm5vcm1hbGl6ZWRQYXRoU2VnTGlzdFwiKVxuICAgICAgICBsZXQgKGFuaW1hdGVkX3BhdGhfc2VnX2xpc3QgOiB0IC0+IFBhdGhTZWdMaXN0LnQpID1cbiAgICAgICAgICBmdW4geDczOSAtPlxuICAgICAgICAgICAgUGF0aFNlZ0xpc3QudF9vZl9qc1xuICAgICAgICAgICAgICAoT2pzLmdldCAodF90b19qcyB4NzM5KSBcImFuaW1hdGVkUGF0aFNlZ0xpc3RcIilcbiAgICAgICAgbGV0IChhbmltYXRlZF9ub3JtYWxpemVkX3BhdGhfc2VnX2xpc3QgOiB0IC0+IFBhdGhTZWdMaXN0LnQpID1cbiAgICAgICAgICBmdW4geDc0MCAtPlxuICAgICAgICAgICAgUGF0aFNlZ0xpc3QudF9vZl9qc1xuICAgICAgICAgICAgICAoT2pzLmdldCAodF90b19qcyB4NzQwKSBcImFuaW1hdGVkTm9ybWFsaXplZFBhdGhTZWdMaXN0XCIpXG4gICAgICAgIGxldCAoY3JlYXRlX2Nsb3NlX3BhdGggOiB0IC0+IHVuaXQgLT4gUGF0aFNlZy50KSA9XG4gICAgICAgICAgZnVuIHg3NDEgLT5cbiAgICAgICAgICAgIGZ1biAoKSAtPlxuICAgICAgICAgICAgICBQYXRoU2VnLnRfb2ZfanNcbiAgICAgICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDc0MSkgXCJjcmVhdGVTVkdQYXRoU2VnQ2xvc2VQYXRoXCIgW3x8XSlcbiAgICAgICAgbGV0IChjcmVhdGVfbW92ZXRvX2FicyA6IHQgLT4gZmxvYXQgLT4gZmxvYXQgLT4gUGF0aFNlZy50KSA9XG4gICAgICAgICAgZnVuIHg3NDQgLT5cbiAgICAgICAgICAgIGZ1biB4NzQyIC0+XG4gICAgICAgICAgICAgIGZ1biB4NzQzIC0+XG4gICAgICAgICAgICAgICAgUGF0aFNlZy50X29mX2pzXG4gICAgICAgICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDc0NCkgXCJjcmVhdGVTVkdQYXRoU2VnTW92ZXRvQWJzXCJcbiAgICAgICAgICAgICAgICAgICAgIFt8KE9qcy5mbG9hdF90b19qcyB4NzQyKTsoT2pzLmZsb2F0X3RvX2pzIHg3NDMpfF0pXG4gICAgICAgIGxldCAoY3JlYXRlX21vdmV0b19yZWwgOiB0IC0+IGZsb2F0IC0+IGZsb2F0IC0+IFBhdGhTZWcudCkgPVxuICAgICAgICAgIGZ1biB4NzQ3IC0+XG4gICAgICAgICAgICBmdW4geDc0NSAtPlxuICAgICAgICAgICAgICBmdW4geDc0NiAtPlxuICAgICAgICAgICAgICAgIFBhdGhTZWcudF9vZl9qc1xuICAgICAgICAgICAgICAgICAgKE9qcy5jYWxsICh0X3RvX2pzIHg3NDcpIFwiY3JlYXRlU1ZHUGF0aFNlZ01vdmV0b1JlbFwiXG4gICAgICAgICAgICAgICAgICAgICBbfChPanMuZmxvYXRfdG9fanMgeDc0NSk7KE9qcy5mbG9hdF90b19qcyB4NzQ2KXxdKVxuICAgICAgICBsZXQgKGNyZWF0ZV9saW5ldG9fYWJzIDogdCAtPiBmbG9hdCAtPiBmbG9hdCAtPiBQYXRoU2VnLnQpID1cbiAgICAgICAgICBmdW4geDc1MCAtPlxuICAgICAgICAgICAgZnVuIHg3NDggLT5cbiAgICAgICAgICAgICAgZnVuIHg3NDkgLT5cbiAgICAgICAgICAgICAgICBQYXRoU2VnLnRfb2ZfanNcbiAgICAgICAgICAgICAgICAgIChPanMuY2FsbCAodF90b19qcyB4NzUwKSBcImNyZWF0ZVNWR1BhdGhTZWdMaW5ldG9BYnNcIlxuICAgICAgICAgICAgICAgICAgICAgW3woT2pzLmZsb2F0X3RvX2pzIHg3NDgpOyhPanMuZmxvYXRfdG9fanMgeDc0OSl8XSlcbiAgICAgICAgbGV0IChjcmVhdGVfbGluZXRvX3JlbCA6IHQgLT4gZmxvYXQgLT4gZmxvYXQgLT4gUGF0aFNlZy50KSA9XG4gICAgICAgICAgZnVuIHg3NTMgLT5cbiAgICAgICAgICAgIGZ1biB4NzUxIC0+XG4gICAgICAgICAgICAgIGZ1biB4NzUyIC0+XG4gICAgICAgICAgICAgICAgUGF0aFNlZy50X29mX2pzXG4gICAgICAgICAgICAgICAgICAoT2pzLmNhbGwgKHRfdG9fanMgeDc1MykgXCJjcmVhdGVTVkdQYXRoU2VnTGluZXRvUmVsXCJcbiAgICAgICAgICAgICAgICAgICAgIFt8KE9qcy5mbG9hdF90b19qcyB4NzUxKTsoT2pzLmZsb2F0X3RvX2pzIHg3NTIpfF0pXG4gICAgICBlbmRcbiAgZW5kXG4iXX0=
