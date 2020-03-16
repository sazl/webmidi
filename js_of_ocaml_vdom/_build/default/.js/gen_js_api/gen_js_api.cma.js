(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_get=runtime.caml_js_get,
     caml_js_set=runtime.caml_js_set,
     caml_js_to_string=runtime.caml_js_to_string,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_new_string(""),
     cst_to_js=caml_new_string("to_js"),
     shared=[0,caml_new_string("to_js")],
     cst_Ojs_exn_Error=caml_new_string("Ojs_exn.Error"),
     cst_jsError=caml_new_string("jsError"),
     CamlinternalOO=global_data.CamlinternalOO,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_printexc=global_data.Stdlib__printexc;
    function type_of(x){return caml_js_to_string(typeof x)}
    var null$0=null,undefined$0=undefined,global=joo_global_object;
    function array_make(n){return new (global.Array)(n)}
    var array_get=caml_js_get,array_set=caml_js_set;
    function array_of_js_from(f,objs,start)
     {var n=objs.length;
      function _o_(i){return caml_call1(f,objs[start + i | 0])}
      return caml_call2(Stdlib_array[2],n - start | 0,_o_)}
    function array_of_js(f,objs){return array_of_js_from(f,objs,0)}
    function array_to_js(f,arr)
     {var n=arr.length - 1,a=array_make(n),_m_=n - 1 | 0,_l_=0;
      if(! (_m_ < 0))
       {var i=_l_;
        for(;;)
         {a[i] = caml_call1(f,runtime.caml_check_bound(arr,i)[1 + i]);
          var _n_=i + 1 | 0;
          if(_m_ !== i){var i=_n_;continue}
          break}}
      return a}
    function list_of_js_from(f,objs,start)
     {var _k_=array_of_js_from(f,objs,start);
      return caml_call1(Stdlib_array[11],_k_)}
    function list_of_js(f,objs){return list_of_js_from(f,objs,0)}
    function list_to_js(f,l)
     {return array_to_js(f,caml_call1(Stdlib_array[12],l))}
    function option_of_js(f,x)
     {if(x != null$0)if(x !== undefined$0)return [0,caml_call1(f,x)];return 0}
    function option_to_js(f,param)
     {if(param){var x=param[1];return caml_call1(f,x)}return null$0}
    function _a_(_c_)
     {var
       _d_=caml_call2(CamlinternalOO[3],_c_,cst),
       _e_=caml_call2(CamlinternalOO[7],_c_,cst_to_js);
      function _f_(self_1){return self_1[1 + _d_]}
      caml_call3(CamlinternalOO[10],_c_,_e_,_f_);
      return function(_i_,_h_,_g_)
       {var _j_=caml_call2(CamlinternalOO[24],_h_,_c_);
        _j_[1 + _d_] = _g_;
        return _j_}}
    var obj=caml_call2(CamlinternalOO[19],shared,_a_);
    function has_property(o,x){return 1 - (o[x] === undefined$0?1:0)}
    function empty_obj(param){return new (global.Object)()}
    function apply_arr(o,arr){return o.apply(null$0,arr)}
    function call_arr(o,s,arr){return o[s].apply(o,arr)}
    function is_null(x){return x == null$0?1:0}
    function obj_type(x)
     {return caml_js_to_string(Object.prototype.toString.call(x))}
    var
     Ojs=
      [0,
       array_of_js,
       array_to_js,
       list_of_js,
       list_to_js,
       array_of_js_from,
       list_of_js_from,
       option_of_js,
       option_to_js,
       empty_obj,
       has_property,
       call_arr,
       apply_arr,
       array_make,
       array_get,
       array_set,
       global,
       null$0,
       type_of,
       obj,
       is_null,
       obj_type];
    caml_register_global(21,Ojs,"Ojs");
    function name(x){return caml_js_to_string(x.name)}
    function message(x){return caml_js_to_string(x.message)}
    function stack(x){return option_of_js(caml_js_to_string,x.stack)}
    function to_string(x){return caml_js_to_string(x.toString())}
    var Error=[248,cst_Ojs_exn_Error,runtime.caml_fresh_oo_id(0)];
    caml_call2(Stdlib_callback[2],cst_jsError,[0,Error,{}]);
    function _b_(param)
     {if(param[1] === Error){var x=param[2];return [0,to_string(x)]}return 0}
    caml_call1(Stdlib_printexc[9],_b_);
    var Ojs_exn=[0,name,message,stack,to_string,Error];
    caml_register_global(24,Ojs_exn,"Ojs_exn");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJnZW5fanNfYXBpLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJ0eXBlX29mIiwieCIsIm51bGwkMCIsIm51bGwiLCJ1bmRlZmluZWQkMCIsInVuZGVmaW5lZCIsImdsb2JhbCIsImpvb19nbG9iYWxfb2JqZWN0IiwiYXJyYXlfbWFrZSIsIm4iLCJhcnJheV9nZXQiLCJhcnJheV9zZXQiLCJhcnJheV9vZl9qc19mcm9tIiwiZiIsIm9ianMiLCJzdGFydCIsImkiLCJhcnJheV9vZl9qcyIsImFycmF5X3RvX2pzIiwiYXJyIiwiYSIsImxpc3Rfb2ZfanNfZnJvbSIsImxpc3Rfb2ZfanMiLCJsaXN0X3RvX2pzIiwibCIsIm9wdGlvbl9vZl9qcyIsIm9wdGlvbl90b19qcyIsInNlbGZfMSIsImhhc19wcm9wZXJ0eSIsIm8iLCJlbXB0eV9vYmoiLCJhcHBseV9hcnIiLCJjYWxsX2FyciIsInMiLCJpc19udWxsIiwib2JqX3R5cGUiLCJPYmplY3QiLCJuYW1lIiwibWVzc2FnZSIsInN0YWNrIiwidG9fc3RyaW5nIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUEyQ0lBLFFBQVFDLEdBQWlCLGdDQUFqQkEsRUFBcUM7SUFHdEMsZ0JBQ0ssc0JBSUg7YUFPVE8sV0FBV0MsR0FBWSxZQVB2QkgsY0FPV0csRUFBZ0Q7SUFQbEQ7YUFXVEcsaUJBQWlCQyxFQUFFQyxLQUFLQztNQUMxQixJQUFJTixFQURpQks7TUFDckIsYUFDNEJFLEdBQU8sa0JBRmhCSCxFQUFFQyxLQUFLQyxRQUVFQyxPQUFtQztNQUQvRCxrQ0FBSVAsSUFEc0JNLGNBRXNDO0lBYnJELFNBZVRFLFlBQVlKLEVBQUVDLE1BQU8sd0JBQVRELEVBQUVDLE9BQWdDO0lBZnJDLFNBaUJUSSxZQUFZTCxFQUFFTTtNQUNoQixNQURnQkEsZUFFUixhQURKVixHQUNJLElBREpBLFVBQ0k7O1lBQ1JPO1FBQ0U7WUFERkEsS0FDZ0IsV0FKRkgsRUFJSyx5QkFKSE0sSUFHaEJIO1VBQ0UsUUFERkE7OztNQUdBLE9BSklJLENBSUg7SUF2QlUsU0F5QlRDLGdCQUFnQlIsRUFBRUMsS0FBS0M7TUFBc0IseUJBQTdCRixFQUFFQyxLQUFLQztNQUFzQix1Q0FBK0I7SUF6Qm5FLFNBMkJUTyxXQUFXVCxFQUFFQyxNQUFPLHVCQUFURCxFQUFFQyxPQUErQjtJQTNCbkMsU0E2QlRTLFdBQVdWLEVBQUVXO01BQ0QsbUJBRERYLEVBQ0MsNEJBRENXLEdBQ2dCO0lBOUJwQixTQWdDVEMsYUFBYVosRUFBRVo7TUFDZCxHQURjQSxLQXJDZkMsVUFxQ2VELE1BcENmRyxzQkFzQ1EsV0FGS1MsRUFBRVosSUFDdUIsUUFDekI7SUFsQ0osU0FvQ1R5QixhQUFhYjtNLFVBQ0gsSUFBTFosV0FBSyxrQkFER1ksRUFDUlosR0FDRyxPQTNDUkM7SUFLUzs7OzttQkF5Q0x5QixRQUNXLE9BRFhBLGVBQ1k7OztROzs7SUExQ1A7YUFnRFRDLGFBQWFDLEVBQUU1QixHQUFTLFlBQVg0QixFQUFFNUIsT0FwRGZHLGdCQW9ENkM7YUFHN0MwQixpQkFBdUIsWUFuRHZCeEIsZ0JBbURpRDthQUVqRHlCLFVBQVVGLEVBQUVWLEtBQU0sZUExRGxCakIsT0EwRFlpQixJQUFvQzthQUNoRGEsU0FBU0gsRUFBRUksRUFBRWQsS0FBVyxTQUFiYyxTQUFGSixFQUFJVixJQUF5QzthQUt0RGUsUUFBUWpDLEdBQ1YsT0FEVUEsS0FoRVJDLFVBaUVXO2FBRVhpQyxTQUFTbEM7TUFDa0Qsd0RBRGxEQSxHQUNnRTs7OztPQWhEekVnQjtPQUVBQztPQVVBSTtPQUVBQztPQWxCQVg7T0FjQVM7T0FPQUk7T0FJQUM7T0FlQUk7T0FIQUY7T0FNQUk7T0FEQUQ7T0E5Q0F2QjtPQUNBRTtPQUNBQztPQVRBTDtPQUxBSjtPQUhBRjs7T0FtRUFrQztPQUdBQzs7YUMzR0FFLEtBQUtwQyxHQUFxQix5QkFBckJBLE9BQXVDO2FBQzVDcUMsUUFBUXJDLEdBQXFCLHlCQUFyQkEsVUFBMEM7YUFDbERzQyxNQUFNdEMsR0FBc0Msc0NBQXRDQSxRQUF5RDthQUMvRHVDLFVBQVV2QyxHQUFxQixzQ0FBNEI7O0lBSXREOztNQU9tQix1QkFDVCxJQUFMQSxXQUFVLG9CQUFWQSxJQUNELFFBQ1I7SUFISDttQkFkRW9DLEtBQ0FDLFFBQ0FDLE1BQ0FDO0lBV0Y7VSIsInNvdXJjZXMiOlsiL2hvbWUvc2FtaS8ub3BhbS80LjA5LjAvLm9wYW0tc3dpdGNoL2J1aWxkL2dlbl9qc19hcGkuMS4wLjYvX2J1aWxkL2RlZmF1bHQvbGliL29qcy5tbCIsIi9ob21lL3NhbWkvLm9wYW0vNC4wOS4wLy5vcGFtLXN3aXRjaC9idWlsZC9nZW5fanNfYXBpLjEuMC42L19idWlsZC9kZWZhdWx0L2xpYi9vanNfZXhuLm1sIl0sInNvdXJjZXNDb250ZW50IjpbIigqIFRoZSBnZW5fanNfYXBpIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiBhbiBNSVQtbGlrZSBsaWNlbnNlLiAgICAgKilcbigqIFNlZSB0aGUgYXR0YWNoZWQgTElDRU5TRSBmaWxlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqIENvcHlyaWdodCAyMDE1IGJ5IExleGlGaS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcblxuKCogVGhpcyBtb2R1bGUgKG1vc3RseSkgYWJzdHJhY3RzIGF3YXkgZnJvbSBqc19vZl9vY2FtbCBlbmNvZGluZyBvZlxuICAgT0NhbWwgdmFsdWVzLiAgSXQgc2VydmVzIGFzIGEgc3VwcG9ydCBsaWJyYXJ5IGZvciB0aGUgY29kZSBnZW5lcmF0ZWRcbiAgIGJ5IGdlbl9qc19hcGkuXG5cbiAgIFRoZSBtb2R1bGUgY291bGQgbW9zdGx5IGJlIGltcGxlbWVudGVkIG9uIHRvcCBvZiBqc19vZl9vY2FtbCdzIEpzIG1vZHVsZVxuICAgKGFuZCBpbiBwYXJ0aWN1bGFyIEpzLlVuc2FmZSksIGJ1dCB3ZSBwcmVmZXIgdG8gZHJvcCB0aGUgZGVwZW5kZW5jeVxuICAgdG8ganNfb2Zfb2NhbWwncyBsaWJyYXJ5IGFuZCB0byByZWx5IG9ubHkgb24gaXRzIGNvbXBpbGVyIGFuZCBKU1xuICAgcnVudGltZSBjb2RlLlxuKilcblxuXG50eXBlIHRcblxuZXh0ZXJuYWwgdF9vZl9qczogdCAtPiB0ID0gXCIlaWRlbnRpdHlcIlxuZXh0ZXJuYWwgdF90b19qczogdCAtPiB0ID0gXCIlaWRlbnRpdHlcIlxuXG5leHRlcm5hbCBzdHJpbmdfb2ZfanM6IHQgLT4gc3RyaW5nID0gXCJjYW1sX2pzX3RvX3N0cmluZ1wiXG5leHRlcm5hbCBzdHJpbmdfdG9fanM6IHN0cmluZyAtPiB0ID0gXCJjYW1sX2pzX2Zyb21fc3RyaW5nXCJcblxuZXh0ZXJuYWwgaW50X29mX2pzOiB0IC0+IGludCA9IFwiJWlkZW50aXR5XCJcbmV4dGVybmFsIGludF90b19qczogaW50IC0+IHQgPSBcIiVpZGVudGl0eVwiXG5cbmV4dGVybmFsIGJvb2xfb2ZfanM6IHQgLT4gYm9vbCA9IFwiY2FtbF9qc190b19ib29sXCJcbmV4dGVybmFsIGJvb2xfdG9fanM6IGJvb2wgLT4gdCA9IFwiY2FtbF9qc19mcm9tX2Jvb2xcIlxuXG5leHRlcm5hbCBmbG9hdF9vZl9qczogdCAtPiBmbG9hdCA9IFwiJWlkZW50aXR5XCJcbmV4dGVybmFsIGZsb2F0X3RvX2pzOiBmbG9hdCAtPiB0ID0gXCIlaWRlbnRpdHlcIlxuXG5leHRlcm5hbCBvYmo6IChzdHJpbmcgKiB0KSBhcnJheSAtPiB0ID0gXCJjYW1sX2pzX29iamVjdFwiXG5cbmV4dGVybmFsIHZhcmlhYmxlOiBzdHJpbmcgLT4gdCA9IFwiY2FtbF9qc192YXJcIlxuXG5leHRlcm5hbCBpbnRlcm5hbF9nZXQ6IHQgLT4gdCAtPiB0ID0gXCJjYW1sX2pzX2dldFwiXG5leHRlcm5hbCBpbnRlcm5hbF9zZXQ6IHQgLT4gdCAtPiB0IC0+IHVuaXQgPSBcImNhbWxfanNfc2V0XCJcblxuZXh0ZXJuYWwgZ2V0OiB0IC0+IHN0cmluZyAtPiB0ID0gXCJjYW1sX2pzX2dldFwiXG5leHRlcm5hbCBzZXQ6IHQgLT4gc3RyaW5nIC0+IHQgLT4gdW5pdCA9IFwiY2FtbF9qc19zZXRcIlxuXG5leHRlcm5hbCBpbnRlcm5hbF90eXBlX29mOiB0IC0+IHQgPSBcImNhbWxfanNfdHlwZW9mXCJcbmxldCB0eXBlX29mIHggPSBzdHJpbmdfb2ZfanMgKGludGVybmFsX3R5cGVfb2YgeClcblxuZXh0ZXJuYWwgcHVyZV9qc19leHByOiBzdHJpbmcgLT4gdCA9IFwiY2FtbF9wdXJlX2pzX2V4cHJcIlxubGV0IG51bGwgPSBwdXJlX2pzX2V4cHIgXCJudWxsXCJcbmxldCB1bmRlZmluZWQgPSBwdXJlX2pzX2V4cHIgXCJ1bmRlZmluZWRcIlxuXG5leHRlcm5hbCBlcXVhbHM6IHQgLT4gdCAtPiBib29sID0gXCJjYW1sX2pzX2VxdWFsc1wiXG5cbmxldCBnbG9iYWwgPSBwdXJlX2pzX2V4cHIgXCJqb29fZ2xvYmFsX29iamVjdFwiXG5cbmV4dGVybmFsIG5ld19vYmo6IHQgLT4gdCBhcnJheSAtPiB0ID0gXCJjYW1sX2pzX25ld1wiXG5cbmV4dGVybmFsIGNhbGw6IHQgLT4gc3RyaW5nIC0+IHQgYXJyYXkgLT4gdCA9IFwiY2FtbF9qc19tZXRoX2NhbGxcIlxuZXh0ZXJuYWwgYXBwbHk6IHQgLT4gdCBhcnJheSAtPiB0ID0gXCJjYW1sX2pzX2Z1bl9jYWxsXCJcblxubGV0IGFycmF5X21ha2UgbiA9IG5ld19vYmogKGdldCBnbG9iYWwgXCJBcnJheVwiKSBbfGludF90b19qcyBufF1cbmxldCBhcnJheV9nZXQgdCBpID0gaW50ZXJuYWxfZ2V0IHQgKGludF90b19qcyBpKVxubGV0IGFycmF5X3NldCB0IGkgeCA9IGludGVybmFsX3NldCB0IChpbnRfdG9fanMgaSkgeFxuXG5sZXQgYXJyYXlfb2ZfanNfZnJvbSBmIG9ianMgc3RhcnQgPVxuICBsZXQgbiA9IGludF9vZl9qcyAoZ2V0IG9ianMgXCJsZW5ndGhcIikgaW5cbiAgQXJyYXkuaW5pdCAobiAtIHN0YXJ0KSAoZnVuIGkgLT4gZiAoYXJyYXlfZ2V0IG9ianMgKHN0YXJ0ICsgaSkpKVxuXG5sZXQgYXJyYXlfb2ZfanMgZiBvYmpzID0gYXJyYXlfb2ZfanNfZnJvbSBmIG9ianMgMFxuXG5sZXQgYXJyYXlfdG9fanMgZiBhcnIgPVxuICBsZXQgbiA9IEFycmF5Lmxlbmd0aCBhcnIgaW5cbiAgbGV0IGEgPSBhcnJheV9tYWtlIG4gaW5cbiAgZm9yIGkgPSAwIHRvIG4gLSAxIGRvXG4gICAgYXJyYXlfc2V0IGEgaSAoZiBhcnIuKGkpKVxuICBkb25lO1xuICBhXG5cbmxldCBsaXN0X29mX2pzX2Zyb20gZiBvYmpzIHN0YXJ0ID0gQXJyYXkudG9fbGlzdCAoYXJyYXlfb2ZfanNfZnJvbSBmIG9ianMgc3RhcnQpXG5cbmxldCBsaXN0X29mX2pzIGYgb2JqcyA9IGxpc3Rfb2ZfanNfZnJvbSBmIG9ianMgMFxuXG5sZXQgbGlzdF90b19qcyBmIGwgPVxuICBhcnJheV90b19qcyBmIChBcnJheS5vZl9saXN0IGwpXG5cbmxldCBvcHRpb25fb2ZfanMgZiB4ID1cbiAgaWYgZXF1YWxzIHggbnVsbCB8fCB4ID09IHVuZGVmaW5lZCB0aGVuIE5vbmVcbiAgZWxzZSBTb21lIChmIHgpXG5cbmxldCBvcHRpb25fdG9fanMgZiA9IGZ1bmN0aW9uXG4gIHwgU29tZSB4IC0+IGYgeFxuICB8IE5vbmUgLT4gbnVsbFxuXG5jbGFzcyBvYmogKHg6dCkgPVxuICBvYmplY3RcbiAgICBtZXRob2QgdG9fanMgPSB4XG4gIGVuZFxuXG5leHRlcm5hbCBmdW5fdG9fanM6IGludCAtPiAodCAtPiAnYSkgLT4gdCA9IFwiY2FtbF9qc193cmFwX2NhbGxiYWNrX3N0cmljdFwiXG5leHRlcm5hbCBmdW5fdG9fanNfYXJnczogKHQgLT4gJ2EpIC0+IHQgPSBcImNhbWxfb2pzX3dyYXBfZnVuX2FyZ3VtZW50c1wiXG5cbmxldCBoYXNfcHJvcGVydHkgbyB4ID0gbm90IChnZXQgbyB4ID09IHVuZGVmaW5lZClcbmV4dGVybmFsIGl0ZXJfcHJvcGVydGllczogdCAtPiAoc3RyaW5nIC0+IHVuaXQpIC0+IHVuaXQgPSBcImNhbWxfb2pzX2l0ZXJhdGVfcHJvcGVydGllc1wiXG5cbmxldCBlbXB0eV9vYmogKCkgPSBuZXdfb2JqIChnZXQgZ2xvYmFsIFwiT2JqZWN0XCIpIFt8fF1cblxubGV0IGFwcGx5X2FyciBvIGFyciA9IGNhbGwgbyBcImFwcGx5XCIgW3wgbnVsbDsgYXJyIHxdXG5sZXQgY2FsbF9hcnIgbyBzIGFyciA9IGNhbGwgKGdldCBvIHMpIFwiYXBwbHlcIiBbfCBvOyBhcnIgfF1cbmV4dGVybmFsIG5ld19vYmpfYXJyOiB0IC0+IHQgLT4gdCA9IFwiY2FtbF9vanNfbmV3X2FyclwiXG5cbmV4dGVybmFsIGRlbGV0ZTogdCAtPiBzdHJpbmcgLT4gdW5pdCA9IFwiY2FtbF9qc19kZWxldGVcIlxuXG5sZXQgaXNfbnVsbCB4ID1cbiAgZXF1YWxzIHggbnVsbFxuXG5sZXQgb2JqX3R5cGUgeCA9XG4gIHN0cmluZ19vZl9qcyAoY2FsbCAocHVyZV9qc19leHByIFwiT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1wiKSBcImNhbGxcIiBbfHh8XSlcbiIsIigqIFRoZSBnZW5fanNfYXBpIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiBhbiBNSVQtbGlrZSBsaWNlbnNlLiAgICAgKilcbigqIFNlZSB0aGUgYXR0YWNoZWQgTElDRU5TRSBmaWxlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcbigqIENvcHlyaWdodCAyMDE1IGJ5IExleGlGaS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKilcblxudHlwZSB0ID0gT2pzLnRcblxubGV0IG5hbWUgeCA9IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5nZXQgeCBcIm5hbWVcIilcbmxldCBtZXNzYWdlIHggPSBPanMuc3RyaW5nX29mX2pzIChPanMuZ2V0IHggXCJtZXNzYWdlXCIpXG5sZXQgc3RhY2sgeCA9IE9qcy5vcHRpb25fb2ZfanMgT2pzLnN0cmluZ19vZl9qcyAoT2pzLmdldCB4IFwic3RhY2tcIilcbmxldCB0b19zdHJpbmcgeCA9IE9qcy5zdHJpbmdfb2ZfanMgKE9qcy5jYWxsIHggXCJ0b1N0cmluZ1wiIFt8fF0pXG5cbmV4Y2VwdGlvbiBFcnJvciBvZiB0XG5cbmxldCAoKSA9IENhbGxiYWNrLnJlZ2lzdGVyX2V4Y2VwdGlvbiBcImpzRXJyb3JcIiAoRXJyb3IgKE9qcy5vYmogW3x8XSkpXG5cbigqIFRoZSBqc19vZl9vY2FtbCBydW50aW1lIGV4cGVjdHMgdG8gaGF2ZSB0aGlzIHJlZ2lzdGVyZWQuXG4gICBTbyBpdCdzIHByb2JhYmx5IGEgYmFkIGlkZWEgdG8gdXNlIGJvdGggdGhpcyBPanNfZXhuIG1vZHVsZVxuICAgYW5kIHRoZSBqc19vZl9vY2FtbCBzdGFuZGFyZCBsaWJyYXJ5LiAqKVxuXG5sZXQgKCkgPVxuICBQcmludGV4Yy5yZWdpc3Rlcl9wcmludGVyIChmdW5jdGlvblxuICAgICAgfCBFcnJvciB4IC0+IFNvbWUgKHRvX3N0cmluZyB4KVxuICAgICAgfCBfIC0+IE5vbmVcbiAgICApXG4iXX0=
