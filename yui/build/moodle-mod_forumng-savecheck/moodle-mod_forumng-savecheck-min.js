YUI.add("moodle-mod_forumng-savecheck",function(e,t){M.mod_forumng=M.mod_forumng||{},M.mod_forumng.savecheck={init:function(t){var n=e.all("#id_submitbutton, #id_savedraft");n.on("click",function(r){function i(){var t=M.util.get_string("savefailnetwork","forumng"),i={title:M.util.get_string("savefailtitle","forumng"),message:t,plugins:[e.Plugin.Drag],modal:!0},s=e.one("body").get("winWidth");s<450&&(i.width=s-50);var o=new M.core.alert(i);o.show(),r.preventDefault(),M.mod_forumng_form.finterval&&clearInterval(M.mod_forumng_form.finterval),n.set("disabled","disabled");var u=e.one("#id_cancel");u.on("click",function(t){var n=e.one("#region-main #mform1"),r=n.one("#fitem_id_message"),i=n.one("#fitem_id_attachments");r.remove(),i.remove(),n.set("method","get")})}function s(e,t,n){t.responseText!="ok"&&i()}var o={method:"POST",data:"sesskey="+M.cfg.sesskey+"&contextid="+t,on:{success:s,failure:i},sync:!0,timeout:1e4};e.io("confirmloggedin.php",o)})}}},"@VERSION@",{requires:["base","node","io","moodle-core-notification-alert"]});
