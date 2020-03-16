(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
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
     cst=caml_new_string("+"),
     cst$0=caml_new_string("-"),
     cst_New_counter=caml_new_string("New counter"),
     Vdom_blit=global_data.Vdom_blit,
     Js_browser=global_data.Js_browser,
     Stdlib=global_data.Stdlib,
     Vdom=global_data.Vdom,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_map=global_data.Stdlib__map,
     compare=runtime.caml_int_compare,
     IntMap=caml_call1(Stdlib_map[1],[0,compare]);
    function update(param,_q_)
     {var _r_=param[1];
      if(typeof _q_ === "number")
       {var _s_=caml_call1(IntMap[18],_r_);
        return [0,caml_call3(IntMap[4],_s_,0,_r_)]}
      var
       match=_q_[2],
       diff=match[2],
       pos=match[1],
       _t_=caml_call2(IntMap[27],pos,_r_) + diff | 0;
      return [0,caml_call3(IntMap[4],pos,_t_,_r_)]}
    var init=[0,IntMap[1]];
    function button(txt,msg)
     {var _m_=[0,caml_call1(Vdom[28],txt),0],_l_=0,_n_=[0,Vdom[27],_m_];
      function _o_(param){return msg}
      var _p_=[0,[0,caml_call1(Vdom[4],_o_),_n_]];
      return caml_call3(Vdom[49],0,_p_,_l_)}
    function view(param)
     {var counters=param[1];
      function row(param)
       {var
         value=param[2],
         pos=param[1],
         _h_=[0,button(cst,[0,999946793,[0,pos,1]]),0],
         _i_=caml_call1(Stdlib[33],value),
         _j_=[0,caml_call2(Vdom[43],0,_i_),_h_],
         _k_=[0,button(cst$0,[0,999946793,[0,pos,-1]]),_j_];
        return caml_call3(Vdom[48],0,0,_k_)}
      var
       _d_=caml_call1(IntMap[19],counters),
       _e_=caml_call2(Stdlib_list[17],row,_d_),
       _f_=[0,button(cst_New_counter,107991229),0],
       _g_=[0,caml_call3(Vdom[48],0,0,_f_),_e_];
      return caml_call3(Vdom[48],0,0,_g_)}
    var app=caml_call4(Vdom[53],init,update,view,0);
    function run(param)
     {var
       _a_=caml_call3(Vdom_blit[8],0,0,app),
       _b_=caml_call1(Vdom_blit[9],_a_),
       _c_=caml_call1(Js_browser[13][9],Js_browser[23]);
      return caml_call2(Js_browser[12][6],_c_,_b_)}
    caml_call2(Js_browser[16][5],Js_browser[22],run);
    var Dune_exe_Counters=[0,IntMap,update,init,button,view,app,run];
    runtime.caml_register_global(9,Dune_exe_Counters,"Dune__exe__Counters");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuY291bnRlcnMuZW9ianMvYnl0ZS9kdW5lX19leGVfX0NvdW50ZXJzLmNtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJjb21wYXJlIiwidXBkYXRlIiwiZGlmZiIsInBvcyIsImluaXQiLCJidXR0b24iLCJ0eHQiLCJtc2ciLCJ2aWV3IiwiY291bnRlcnMiLCJyb3ciLCJ2YWx1ZSIsImFwcCIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBUWlEQTs7YUFNN0NDO007O1FBQ3dDO1FBQVg7TUFDdUI7O09BQXRDQztPQUFMQztPQUEyQywwQkFBM0NBLFdBQUtEO01BQXNCLCtCQUEzQkM7UUFFVEM7YUFFQUMsT0FBT0MsSUFBSUM7TUFBd0QsK0JBQTVERCxRQUFVLE1BQWtEOzBCQUFuQixPQUFyQ0MsR0FBd0M7TUFBckI7MkNBQStDO2FBRTdFQztNLElBQU9DO2VBQ0xDO1FBQytEO1NBRHJEQztTQUFMUjtTQUMwRCxrQ0FEMURBO1NBQ21DLDBCQUQ5QlE7U0FDeUI7U0FBaEMsb0NBREVSO1FBQ0Y7TUFFMEM7aUNBSnhDTTtPQUl1QywrQkFINUNDO09BR007T0FBTDs7SUFHRyxJQUFORSxJQUFNLG9CQVhOUixLQUpBSCxPQVFBTztJQU9NLFNBS05LO01BQVM7dUNBTFREO09BS1M7T0FBMkQ7a0RBQXdCO0lBQ3ZGLDRDQURMQztJQUNLLGdDQXJCTFosT0FJQUcsS0FFQUMsT0FFQUcsS0FPQUksSUFLQUM7SUFDSztVIiwic291cmNlcyI6WyIvbW50L2MvVXNlcnMvc2FtaXovRGVza3RvcC9TeW50aC93ZWJtaWRpL2pzX29mX29jYW1sX3Zkb20vX2J1aWxkL2RlZmF1bHQvY291bnRlcnMubWwiXSwic291cmNlc0NvbnRlbnQiOlsiKCogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIG9jYW1sLXZkb20gcGFja2FnZSwgcmVsZWFzZWQgdW5kZXIgdGhlIHRlcm1zIG9mIGFuIE1JVC1saWtlIGxpY2Vuc2UuICAgICAqKVxuKCogU2VlIHRoZSBhdHRhY2hlZCBMSUNFTlNFIGZpbGUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuKCogQ29weXJpZ2h0IDIwMTYgYnkgTGV4aUZpLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKVxuXG4oKiBJbnNwaXJlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5lc3RyZWV0L2luY3JfZG9tL2Jsb2IvbWFzdGVyL2V4YW1wbGUvaW5jcl9kZWNyL2NvdW50ZXJzLm1sICopXG5cbm9wZW4gVmRvbVxuXG5tb2R1bGUgSW50TWFwID0gTWFwLk1ha2Uoc3RydWN0IHR5cGUgdCA9IGludCBsZXQgY29tcGFyZSA6IGludCAtPiBpbnQgLT4gaW50ID0gY29tcGFyZSBlbmQpXG5cbnR5cGUgbW9kZWwgPSB7XG4gIGNvdW50ZXJzIDogaW50IEludE1hcC50O1xufVxuXG5sZXQgdXBkYXRlIHsgY291bnRlcnMgfSA9IGZ1bmN0aW9uXG4gIHwgYE5ld19jb3VudGVyIC0+IHsgY291bnRlcnMgPSBJbnRNYXAuYWRkIChJbnRNYXAuY2FyZGluYWwgY291bnRlcnMpIDAgY291bnRlcnMgfVxuICB8IGBVcGRhdGUgKHBvcywgZGlmZikgLT4geyBjb3VudGVycyA9IEludE1hcC5hZGQgcG9zIChJbnRNYXAuZmluZCBwb3MgY291bnRlcnMgKyBkaWZmKSBjb3VudGVycyB9XG5cbmxldCBpbml0ID0geyBjb3VudGVycyA9IEludE1hcC5lbXB0eSB9XG5cbmxldCBidXR0b24gdHh0IG1zZyA9IGlucHV0IFtdIH5hOltvbmNsaWNrIChmdW4gXyAtPiBtc2cpOyB0eXBlX2J1dHRvbjsgdmFsdWUgdHh0XVxuXG5sZXQgdmlldyB7IGNvdW50ZXJzIH0gPVxuICBsZXQgcm93IChwb3MsIHZhbHVlKSA9XG4gICAgZGl2IFtidXR0b24gXCItXCIgKGBVcGRhdGUgKHBvcywgLTEpKTsgdGV4dCAoc3RyaW5nX29mX2ludCB2YWx1ZSk7IGJ1dHRvbiBcIitcIiAoYFVwZGF0ZSAocG9zLCAxKSldXG4gIGluXG4gIGRpdiAoZGl2IFtidXR0b24gXCJOZXcgY291bnRlclwiIGBOZXdfY291bnRlcl0gOjogKEludE1hcC5iaW5kaW5ncyBjb3VudGVycyB8PiBMaXN0Lm1hcCByb3cpKVxuXG5cbmxldCBhcHAgPSBzaW1wbGVfYXBwIH5pbml0IH52aWV3IH51cGRhdGUgKClcblxuXG5vcGVuIEpzX2Jyb3dzZXJcblxubGV0IHJ1biAoKSA9IFZkb21fYmxpdC5ydW4gYXBwIHw+IFZkb21fYmxpdC5kb20gfD4gRWxlbWVudC5hcHBlbmRfY2hpbGQgKERvY3VtZW50LmJvZHkgZG9jdW1lbnQpXG5sZXQgKCkgPSBXaW5kb3cuc2V0X29ubG9hZCB3aW5kb3cgcnVuIl19
