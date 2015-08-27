var DATA = {
    tiny_mce: {
        advanced:{
            selector: ".tinymce_textarea",
            plugins: [
                "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "insertdatetime media nonbreaking save table contextmenu directionality",
                "emoticons template paste textcolor colorpicker textpattern filemanager"
            ],
            menubar: "edit insert view format table tools",
            image_advtab: true,
            statusbar: true,
            paste: true,
            toolbar_items_size: 'small',
            //forced_root_block: '',
            toolbar: "bold italic | alignleft aligncenter alignright alignjustify | fontselect fontsizeselect | bullist numlist | outdent indent | undo redo | link unlink image media | forecolor backcolor | styleselect template",
            language: "es",
            relative_urls: false,
            remove_script_host: false,
            browser_spellcheck : true,
            file_browser_callback: function(field_name, url, type, win) {
                $.fn.upload_elfinder({
                    selected: function(res){
                        var file = _.first(res)
                        if(type == 'media') type = 'video';
                        if(file.mime && (file.mime.indexOf(type) > -1 || type == "file")){
                            $('#'+field_name).val(file.url.to_url());
                        }else{
                            alert("You must upload a valid format: "+type)
                        }
                    }
                });
            },
            setup: function (editor) {
                editor.on('blur', function () {
                    tinymce.triggerSave();
                    $('textarea#'+editor.id).trigger('change');
                });

                editor.addMenuItem('append_line', {
                    text: 'New line at the end',
                    context: 'insert',
                    onclick: function () { editor.dom.add(editor.getBody(), 'p', {}, '-New line-');  }
                });
                editor.addMenuItem('add_line', {
                    text: 'New line',
                    context: 'insert',
                    onclick: function () { editor.insertContent('<p>-New line-</p>');  }
                });
                editor.on('postRender', function(e) { editor.settings.onPostRender(editor); });
            },
            onPostRender: function(editor){}
        }
    },
    tiny_mce3: {
        advanced:{
                // General options
                mode : "textareas",
                editor_selector : "tinymce_advanced",
                theme : "advanced",
                plugins : "autolink,lists,spellchecker,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",

                // Theme options
                theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
                theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
                theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
                theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak,|,insertfile,insertimage",
                theme_advanced_toolbar_location : "top",
                theme_advanced_toolbar_align : "left",
                theme_advanced_statusbar_location : "bottom",
                theme_advanced_resizing : true,

                // Skin options
                skin : "bootstrap",
                language: "en"
            }
        }
}