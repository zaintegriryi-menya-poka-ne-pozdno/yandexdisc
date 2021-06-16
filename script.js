define(['jquery', 'underscore', 'twigjs'], function ($, _, Twig) {
    var CustomWidget = function () {
        var self = this;

        this.getTemplate = _.bind(function (template, params, callback) {
            params = (typeof params == 'object') ? params : {};
            template = template || '';

            return this.render({
                href: '/templates/' + template + '.twig',
                base_path: this.params.path,
                v: this.get_version(),
                load: callback
            }, params);
        }, this);

        this.callbacks = {
            render: function () {
                console.log('render');
                return true;
            },
            init: function () {
                var settings = self.get_settings();
                if ($('link[href="' + settings.path + '/css/divstyle.css?v=' + settings.version + '"').length < 1) {
                    //  Подключаем файл style.css передавая в качестве параметра версию виджета
                    $("head").append('<link href="' + settings.path + '/css/divstyle.css?v=' + settings.version + '" type="text/css" rel="stylesheet">');
                }
                var settings = self.get_settings();
                //   Проверяем подключен ли наш файл css
                if ($('script[href="' + settings.path + '/js/api.js?v=' + settings.version + '"').length < 1) {
                    //  Подключаем файл style.css передавая в качестве параметра версию виджета
                    $("head").append('<script href="' + settings.path + '/js/api.js?v=' + settings.version + '" type="text/javascript" charset="utf-8" data-requiremodule="' + settings.path + '/js/api.js?v=' + settings.version + '" src="' + settings.path + '/js/api.js?v=' + settings.version + '">');
                }
                // var settings = self.get_settings();
                // //   Проверяем подключен ли наш файл css
                // if ($('script[href="' + settings.path + '/india/main.js"').length < 1) {
                //     //  Подключаем файл style.css передавая в качестве параметра версию виджета
                //     $("head").append('<script href="' + settings.path + '/india/main.js" type="text/javascript" charset="utf-8" data-requiremodule="' + settings.path + '/india/main.js" src="' + settings.path + '/india/main.js">');
                // }

                // $("#files").on("click", function (e) {
                //     var currentDate = new Date();
                //     var currentMonth = currentDate.getMonth() + 1;
                //     var currentY = currentDate.getFullYear();
                //     var date =  currentMonth+' '+currentY;
                //     $.ajax({
                //         url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                //         type: 'POST',
                //         datatype: 'json',
                //         data: {
                //             "action": "adddate",
                //             "data": {
                //                 "idlaed":curr_card,
                //                 "date":date,
                //                 "file": 'file'
                //             }
                //         },
                //         success: (d)=>{
                //             console.log(d);
                //             urlup = d.href;
                //             alert("success");
                //             var file = $("#files")[0].files[0];
                //             console.log(file);
                //             // var formData = new FormData();
                //             // formData.append("file", this.file, this.getName());
                //             // formData.append("upload_file", true);
                //             alert('upload');
                //             console.log(urlup);
                //             var currentDate = new Date();
                //             var currentMonth = currentDate.getMonth() + 1;
                //             var currentY = currentDate.getFullYear();
                //             var date =  currentMonth+' '+currentY;
                //             $.ajax({
                //                 url: urlup,
                //                 type: 'PUT',
                //                 data: file,
                //                 cache: false,
                //                 contentType: false,
                //                 processData: false,
                //                 dataType : 'json',
                //                 success: function(ss){
                //                     // if(response != 0){
                //                     //     $("#img").attr("src",response);
                //                     //     $(".preview img").show(); // Display image element
                //                     // }else{
                //                     //     alert('file not uploaded');
                //                     // }
                //                     console.log(ss);
                //                     alert("success");
                //                     // https://cloud-api.yandex.net/v1/disk/resources/last-uploaded
                //
                //                 },
                //                 error:function (tt) {
                //                     console.log(tt);
                //                     alert("error");
                //                     $.ajax({
                //                         url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                //                         type: 'POST',
                //                         datatype: 'json',
                //                         data: {
                //                             "action": "geturl",
                //                             "data": {
                //                                 "idlaed":curr_card,
                //                                 "date":date,
                //                             }
                //                         },
                //                         success: (d)=>{
                //                             console.log(d);
                //                             urlup = d.items[0].path;
                //                             alert("success");
                //                             $.ajax({
                //                                 url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                //                                 type: 'POST',
                //                                 datatype: 'json',
                //                                 data: {
                //                                     "action": "geturl1",
                //                                     "data": {
                //                                         "idlaed": curr_card,
                //                                         "date": date,
                //                                         "urlup":urlup
                //                                     }
                //                                 },
                //                                 success: (d) => {
                //                                     console.log(d);
                //                                     alert('ss');
                //                                     $.ajax({
                //                                         url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                //                                         type: 'POST',
                //                                         datatype: 'json',
                //                                         data: {
                //                                             "action": "geturl",
                //                                             "data": {
                //                                                 "idlaed": curr_card,
                //                                                 "date": date,
                //                                             }
                //                                         },
                //                                         success: (d) => {
                //                                             console.log(d);
                //                                             var urlup1 = d.items[0].public_url;
                //                                             console.log(urlup1);
                //                                             alert("success");
                //                                             $.ajax({
                //                                                 url: "/api/v2/leads",
                //                                                 datatype: "json",
                //                                                 type: "post",
                //                                                 data: {
                //                                                     update: [{
                //                                                         id: curr_card,
                //                                                         updated_at: Date.now(),
                //                                                         custom_fields: [{
                //                                                             id: "287755",
                //                                                             values: [{
                //                                                                 value: urlup1
                //                                                             }]
                //                                                         }
                //                                                         ]
                //                                                     }]
                //                                                 },
                //                                                 success: (d)=>{
                //                                                     console.log(d);
                //                                                     alert("success /api/v2/leads");
                //                                                 },
                //                                                 error: function(d){
                //                                                     console.log(d);
                //                                                     alert(" error /api/v2/leads");
                //                                                 }
                //                                             });
                //
                //                                         },
                //                                         error: function(d){
                //                                             console.log(d);
                //                                             alert(" error /api/v2/leads");
                //                                         }
                //                                     });
                //                                 },
                //                                 error: function(d){
                //                                     console.log(d);
                //                                     alert(" error /api/v2/leads");
                //                                 }
                //                             });
                //
                //                         },
                //                         error: function(d){
                //                             console.log(d);
                //                             alert(" error");
                //                         }
                //                     });
                //                 }
                //             });
                //         },
                //         error: function(d){
                //             console.log(d);
                //             alert(" error");
                //         }
                //     });
                //     // $("#upload").on("click", function (e) {
                //     //
                //     // });
                // });
                console.log('init');
                if (AMOCRM.data.current_entity == 'leads') {
                    var curr_card = AMOCRM.data.current_card.id;
                    console.log('да leads');
                    $("input[name='CFV[580529]']").parent().parent().parent().append("<input type='file' id='files' name='files' multiple accept='.pdf,.docx,.image/*\'>");
                    $("input[name='CFV[580531]']").parent().parent().parent().append("<input type='file' id='files1' name='files1' multiple accept='.pdf,.docx,.image/*\'>");
                    $("input[name='CFV[580533]']").parent().parent().parent().append("<input type='file' id='files2' name='files2' multiple accept='.pdf,.docx,.image/*\'>");
                    $("input[name='CFV[580535]']").parent().parent().parent().append("<input type='file' id='files3' name='files3' multiple accept='.pdf,.docx,.image/*\'>");

                    $("input[name='CFV[580529]']").parent().parent().parent().append("<div class='min'><img src='https://ru.seaicons.com/wp-content/uploads/2017/02/delete-icon-1.png'></div>");
                    $("input[name='CFV[580531]']").parent().parent().parent().append("<div class='min1'><img src='https://ru.seaicons.com/wp-content/uploads/2017/02/delete-icon-1.png'></div>");
                    $("input[name='CFV[580533]']").parent().parent().parent().append("<div class='min2'><img src='https://ru.seaicons.com/wp-content/uploads/2017/02/delete-icon-1.png'></div>");
                    $("input[name='CFV[580535]']").parent().parent().parent().append("<div class='min3'><img src='https://ru.seaicons.com/wp-content/uploads/2017/02/delete-icon-1.png'></div>");

                    // $("input[name='CFV[580529]']").parent().parent().parent().parent().append("<div class='faildisk' id='login'><img src='https://img.icons8.com/color/452/folder-invoices--v1.png'></div>");

                    var files;
                    $('input[type=file]').on('change', function () {
                        files = this.files;
                    });
                    var urlup;
                    $("#files").change(function() {
                        var currentDate = new Date();
                        var currentMonth = currentDate.getMonth() + 1;
                        var currentY = currentDate.getFullYear();
                        var date =  currentMonth+' '+currentY;
                        var file = new FormData();
                        // formData.append('file', $("#js-file")[0].files[0]);
                        var file = $("#files")[0].files[0];
                        console.log(file);
                        $.ajax({
                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                            type: 'POST',
                            datatype: 'json',
                            data: {
                                "action": "adddate",
                                "data": {
                                    "idlaed":curr_card,
                                    "date":date,
                                    "file": 'file'
                                }
                            },
                            success: (d)=>{
                                console.log(d);
                                urlup = d.href;
                                // var file = $("#files")[0].files[0];
                                // console.log(file);
                                // var formData = new FormData();
                                // formData.append("file", this.file, this.getName());
                                // formData.append("upload_file", true);
                                console.log(urlup);
                                var currentDate = new Date();
                                var currentMonth = currentDate.getMonth() + 1;
                                var currentY = currentDate.getFullYear();
                                var date =  currentMonth+' '+currentY;
                                $.ajax({
                                    url: urlup,
                                    type: 'PUT',
                                    data: file,
                                    cache: false,
                                    contentType: false,
                                    processData: false,
                                    dataType : 'json',
                                    success: function(ss){
                                        // if(response != 0){
                                        //     $("#img").attr("src",response);
                                        //     $(".preview img").show(); // Display image element
                                        // }else{
                                        //     alert('file not uploaded');
                                        // }
                                        console.log(ss);
                                        // https://cloud-api.yandex.net/v1/disk/resources/last-uploaded

                                    },
                                    error:function (tt) {
                                        console.log(tt);
                                        $.ajax({
                                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                            type: 'POST',
                                            datatype: 'json',
                                            data: {
                                                "action": "geturl",
                                                "data": {
                                                    "idlaed":curr_card,
                                                    "date":date,
                                                }
                                            },
                                            success: (d)=>{
                                                console.log(d);
                                                urlup = d.items[0].path;
                                                $.ajax({
                                                    url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                                    type: 'POST',
                                                    datatype: 'json',
                                                    data: {
                                                        "action": "geturl1",
                                                        "data": {
                                                            "idlaed": curr_card,
                                                            "date": date,
                                                            "urlup":urlup
                                                        }
                                                    },
                                                    success: (d) => {
                                                        console.log(d);
                                                        $.ajax({
                                                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                                            type: 'POST',
                                                            datatype: 'json',
                                                            data: {
                                                                "action": "geturl",
                                                                "data": {
                                                                    "idlaed": curr_card,
                                                                    "date": date,
                                                                }
                                                            },
                                                            success: (d) => {
                                                                console.log(d);
                                                                var urlup1 = d.items[0].public_url;
                                                                console.log(urlup1);

                                                                $.ajax({
                                                                    url: "/api/v2/leads",
                                                                    datatype: "json",
                                                                    type: "post",
                                                                    data: {
                                                                        update: [{
                                                                            id: curr_card,
                                                                            updated_at: Date.now(),
                                                                            custom_fields: [{
                                                                                id: "580529",
                                                                                values: [{
                                                                                    value: urlup1
                                                                                }]
                                                                            }
                                                                            ]
                                                                        }]
                                                                    },
                                                                    success: (d)=>{
                                                                        console.log(d);
                                                                    },
                                                                    error: function(d){
                                                                        console.log(d);
                                                                    }
                                                                });

                                                            },
                                                            error: function(d){
                                                                console.log(d);
                                                            }
                                                        });
                                                    },
                                                    error: function(d){
                                                        console.log(d);
                                                    }
                                                });

                                            },
                                            error: function(d){
                                                console.log(d);
                                            }
                                        });
                                    }
                                });
                            },
                            error: function(d){
                                console.log(d);
                            }
                        });
                        // $("#upload").on("click", function (e) {
                        //
                        // });
                    });
                    $("#files1").change(function() {
                        var currentDate = new Date();
                        var currentMonth = currentDate.getMonth() + 1;
                        var currentY = currentDate.getFullYear();
                        var date =  currentMonth+' '+currentY;
                        var file = new FormData();
                        // formData.append('file', $("#js-file")[0].files[0]);
                        var file = $("#files1")[0].files[0];
                        console.log(file);
                        $.ajax({
                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                            type: 'POST',
                            datatype: 'json',
                            data: {
                                "action": "adddate",
                                "data": {
                                    "idlaed":curr_card,
                                    "date":date,
                                    "file": 'file'
                                }
                            },
                            success: (d)=>{
                                console.log(d);
                                urlup = d.href;

                                // var file = $("#files")[0].files[0];
                                // console.log(file);
                                // var formData = new FormData();
                                // formData.append("file", this.file, this.getName());
                                // formData.append("upload_file", true);
                                console.log(urlup);
                                var currentDate = new Date();
                                var currentMonth = currentDate.getMonth() + 1;
                                var currentY = currentDate.getFullYear();
                                var date =  currentMonth+' '+currentY;
                                $.ajax({
                                    url: urlup,
                                    type: 'PUT',
                                    data: file,
                                    cache: false,
                                    contentType: false,
                                    processData: false,
                                    dataType : 'json',
                                    success: function(ss){
                                        // if(response != 0){
                                        //     $("#img").attr("src",response);
                                        //     $(".preview img").show(); // Display image element
                                        // }else{
                                        //     alert('file not uploaded');
                                        // }
                                        console.log(ss);
                                        // https://cloud-api.yandex.net/v1/disk/resources/last-uploaded

                                    },
                                    error:function (tt) {
                                        console.log(tt);

                                        $.ajax({
                                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                            type: 'POST',
                                            datatype: 'json',
                                            data: {
                                                "action": "geturl",
                                                "data": {
                                                    "idlaed":curr_card,
                                                    "date":date,
                                                }
                                            },
                                            success: (d)=>{
                                                console.log(d);
                                                urlup = d.items[0].path;
                                                $.ajax({
                                                    url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                                    type: 'POST',
                                                    datatype: 'json',
                                                    data: {
                                                        "action": "geturl1",
                                                        "data": {
                                                            "idlaed": curr_card,
                                                            "date": date,
                                                            "urlup":urlup
                                                        }
                                                    },
                                                    success: (d) => {
                                                        console.log(d);
                                                        $.ajax({
                                                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                                            type: 'POST',
                                                            datatype: 'json',
                                                            data: {
                                                                "action": "geturl",
                                                                "data": {
                                                                    "idlaed": curr_card,
                                                                    "date": date,
                                                                }
                                                            },
                                                            success: (d) => {
                                                                console.log(d);
                                                                var urlup1 = d.items[0].public_url;
                                                                console.log(urlup1);
                                                                $.ajax({
                                                                    url: "/api/v2/leads",
                                                                    datatype: "json",
                                                                    type: "post",
                                                                    data: {
                                                                        update: [{
                                                                            id: curr_card,
                                                                            updated_at: Date.now(),
                                                                            custom_fields: [{
                                                                                id: "580531",
                                                                                values: [{
                                                                                    value: urlup1
                                                                                }]
                                                                            }
                                                                            ]
                                                                        }]
                                                                    },
                                                                    success: (d)=>{
                                                                        console.log(d);
                                                                    },
                                                                    error: function(d){
                                                                        console.log(d);
                                                                    }
                                                                });

                                                            },
                                                            error: function(d){
                                                                console.log(d);
                                                            }
                                                        });
                                                    },
                                                    error: function(d){
                                                        console.log(d);
                                                    }
                                                });

                                            },
                                            error: function(d){
                                                console.log(d);
                                            }
                                        });
                                    }
                                });
                            },
                            error: function(d){
                                console.log(d);
                            }
                        });
                        // $("#upload").on("click", function (e) {
                        //
                        // });
                    });
                    $("#files2").change(function() {
                        var currentDate = new Date();
                        var currentMonth = currentDate.getMonth() + 1;
                        var currentY = currentDate.getFullYear();
                        var date =  currentMonth+' '+currentY;
                        var file = new FormData();
                        // formData.append('file', $("#js-file")[0].files[0]);
                        var file = $("#files2")[0].files[0];
                        console.log(file);
                        $.ajax({
                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                            type: 'POST',
                            datatype: 'json',
                            data: {
                                "action": "adddate",
                                "data": {
                                    "idlaed":curr_card,
                                    "date":date,
                                    "file": 'file'
                                }
                            },
                            success: (d)=>{
                                console.log(d);
                                urlup = d.href;
                                // var file = $("#files")[0].files[0];
                                // console.log(file);
                                // var formData = new FormData();
                                // formData.append("file", this.file, this.getName());
                                // formData.append("upload_file", true);
                                console.log(urlup);
                                var currentDate = new Date();
                                var currentMonth = currentDate.getMonth() + 1;
                                var currentY = currentDate.getFullYear();
                                var date =  currentMonth+' '+currentY;
                                $.ajax({
                                    url: urlup,
                                    type: 'PUT',
                                    data: file,
                                    cache: false,
                                    contentType: false,
                                    processData: false,
                                    dataType : 'json',
                                    success: function(ss){
                                        // if(response != 0){
                                        //     $("#img").attr("src",response);
                                        //     $(".preview img").show(); // Display image element
                                        // }else{
                                        //     alert('file not uploaded');
                                        // }
                                        console.log(ss);
                                        // https://cloud-api.yandex.net/v1/disk/resources/last-uploaded

                                    },
                                    error:function (tt) {
                                        console.log(tt);
                                        $.ajax({
                                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                            type: 'POST',
                                            datatype: 'json',
                                            data: {
                                                "action": "geturl",
                                                "data": {
                                                    "idlaed":curr_card,
                                                    "date":date,
                                                }
                                            },
                                            success: (d)=>{
                                                console.log(d);
                                                urlup = d.items[0].path;
                                                $.ajax({
                                                    url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                                    type: 'POST',
                                                    datatype: 'json',
                                                    data: {
                                                        "action": "geturl1",
                                                        "data": {
                                                            "idlaed": curr_card,
                                                            "date": date,
                                                            "urlup":urlup
                                                        }
                                                    },
                                                    success: (d) => {
                                                        console.log(d);
                                                        $.ajax({
                                                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                                            type: 'POST',
                                                            datatype: 'json',
                                                            data: {
                                                                "action": "geturl",
                                                                "data": {
                                                                    "idlaed": curr_card,
                                                                    "date": date,
                                                                }
                                                            },
                                                            success: (d) => {
                                                                console.log(d);
                                                                var urlup1 = d.items[0].public_url;
                                                                console.log(urlup1);
                                                                $.ajax({
                                                                    url: "/api/v2/leads",
                                                                    datatype: "json",
                                                                    type: "post",
                                                                    data: {
                                                                        update: [{
                                                                            id: curr_card,
                                                                            updated_at: Date.now(),
                                                                            custom_fields: [{
                                                                                id: "580533",
                                                                                values: [{
                                                                                    value: urlup1
                                                                                }]
                                                                            }
                                                                            ]
                                                                        }]
                                                                    },
                                                                    success: (d)=>{
                                                                        console.log(d);
                                                                    },
                                                                    error: function(d){
                                                                        console.log(d);
                                                                    }
                                                                });

                                                            },
                                                            error: function(d){
                                                                console.log(d);
                                                            }
                                                        });
                                                    },
                                                    error: function(d){
                                                        console.log(d);
                                                    }
                                                });

                                            },
                                            error: function(d){
                                                console.log(d);
                                            }
                                        });
                                    }
                                });
                            },
                            error: function(d){
                                console.log(d);
                            }
                        });
                        // $("#upload").on("click", function (e) {
                        //
                        // });
                    });
                    $("#files3").change(function() {
                        var currentDate = new Date();
                        var currentMonth = currentDate.getMonth() + 1;
                        var currentY = currentDate.getFullYear();
                        var date =  currentMonth+' '+currentY;
                        var file = new FormData();
                        // formData.append('file', $("#js-file")[0].files[0]);
                        var file = $("#files3")[0].files[0];
                        console.log(file);
                        $.ajax({
                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                            type: 'POST',
                            datatype: 'json',
                            data: {
                                "action": "adddate",
                                "data": {
                                    "idlaed":curr_card,
                                    "date":date,
                                    "file": 'file'
                                }
                            },
                            success: (d)=>{
                                console.log(d);
                                urlup = d.href;
                                // var file = $("#files")[0].files[0];
                                // console.log(file);
                                // var formData = new FormData();
                                // formData.append("file", this.file, this.getName());
                                // formData.append("upload_file", true);
                                console.log(urlup);
                                var currentDate = new Date();
                                var currentMonth = currentDate.getMonth() + 1;
                                var currentY = currentDate.getFullYear();
                                var date =  currentMonth+' '+currentY;
                                $.ajax({
                                    url: urlup,
                                    type: 'PUT',
                                    data: file,
                                    cache: false,
                                    contentType: false,
                                    processData: false,
                                    dataType : 'json',
                                    success: function(ss){
                                        // if(response != 0){
                                        //     $("#img").attr("src",response);
                                        //     $(".preview img").show(); // Display image element
                                        // }else{
                                        //     alert('file not uploaded');
                                        // }
                                        console.log(ss);
                                        // https://cloud-api.yandex.net/v1/disk/resources/last-uploaded

                                    },
                                    error:function (tt) {
                                        console.log(tt);
                                        $.ajax({
                                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                            type: 'POST',
                                            datatype: 'json',
                                            data: {
                                                "action": "geturl",
                                                "data": {
                                                    "idlaed":curr_card,
                                                    "date":date,
                                                }
                                            },
                                            success: (d)=>{
                                                console.log(d);
                                                urlup = d.items[0].path;
                                                $.ajax({
                                                    url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                                    type: 'POST',
                                                    datatype: 'json',
                                                    data: {
                                                        "action": "geturl1",
                                                        "data": {
                                                            "idlaed": curr_card,
                                                            "date": date,
                                                            "urlup":urlup
                                                        }
                                                    },
                                                    success: (d) => {
                                                        console.log(d);
                                                        $.ajax({
                                                            url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                                                            type: 'POST',
                                                            datatype: 'json',
                                                            data: {
                                                                "action": "geturl",
                                                                "data": {
                                                                    "idlaed": curr_card,
                                                                    "date": date,
                                                                }
                                                            },
                                                            success: (d) => {
                                                                console.log(d);
                                                                var urlup1 = d.items[0].public_url;
                                                                console.log(urlup1);
                                                                $.ajax({
                                                                    url: "/api/v2/leads",
                                                                    datatype: "json",
                                                                    type: "post",
                                                                    data: {
                                                                        update: [{
                                                                            id: curr_card,
                                                                            updated_at: Date.now(),
                                                                            custom_fields: [{
                                                                                id: "580535",
                                                                                values: [{
                                                                                    value: urlup1
                                                                                }]
                                                                            }
                                                                            ]
                                                                        }]
                                                                    },
                                                                    success: (d)=>{
                                                                        console.log(d);
                                                                    },
                                                                    error: function(d){
                                                                        console.log(d);
                                                                    }
                                                                });

                                                            },
                                                            error: function(d){
                                                                console.log(d);
                                                            }
                                                        });
                                                    },
                                                    error: function(d){
                                                        console.log(d);
                                                    }
                                                });

                                            },
                                            error: function(d){
                                                console.log(d);
                                            }
                                        });
                                    }
                                });
                            },
                            error: function(d){
                                console.log(d);
                            }
                        });
                        // $("#upload").on("click", function (e) {
                        //
                        // });
                    });
                    $(".min").click(function () {
                        $.ajax({
                            url: '/api/v2/leads',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                update: [{
                                    id: curr_card,
                                    updated_at: Date.now(),
                                    custom_fields: [{
                                        id: "580529",
                                        values: [{
                                            value: ''
                                        }]
                                    }
                                    ]
                                }]
                            }
                        });
                    });
                    $(".min1").click(function () {
                        $.ajax({
                            url: '/api/v2/leads',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                update: [{
                                    id: curr_card,
                                    updated_at: Date.now(),
                                    custom_fields: [{
                                        id: "580531",
                                        values: [{
                                            value: ''
                                        }]
                                    }
                                    ]
                                }]
                            }
                        });
                    });
                    $(".min2").click(function () {
                        $.ajax({
                            url: '/api/v2/leads',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                update: [{
                                    id: curr_card,
                                    updated_at: Date.now(),
                                    custom_fields: [{
                                        id: "580533",
                                        values: [{
                                            value: ''
                                        }]
                                    }
                                    ]
                                }]
                            }
                        });
                    });
                    $(".min3").click(function () {
                        $.ajax({
                            url: '/api/v2/leads',
                            type: 'POST',
                            dataType: 'json',
                            data: {
                                update: [{
                                    id: curr_card,
                                    updated_at: Date.now(),
                                    custom_fields: [{
                                        id: "580535",
                                        values: [{
                                            value: ''
                                        }]
                                    }
                                    ]
                                }]
                            }
                        });
                    });
                    // $(".image-upload").change(function(){
                    //     if (window.FormData === undefined) {
                    //         alert('В вашем браузере FormData не поддерживается')
                    //     } else {
                    //         var formData = new FormData();
                    //         // formData.append('file', $("#js-file")[0].files[0]);
                    //         formData = $("#js-file")[0].files[0];
                    //         console.log(formData);
                    //         $.ajax({
                    //             type: "POST",
                    //             url: 'https://mt-webapp.ru/handler/apigoogledrive/index.php',
                    //             cache: false,
                    //             contentType: false,
                    //             processData: false,
                    //             data: formData,
                    //             dataType : 'json',
                    //             success: function(msg){
                    //                 console.log(msg['href']);
                    //                 console.log('sss');
                    //                 alert(msg);
                    //                 var urll = msg['href'];
                    //                 console.log(urll);
                    //                 console.log(formData);
                    //                 var xhr = new XMLHttpRequest();
                    //                 // xhr.upload.onprogress = function (event) {
                    //                 //     console.log(event.loaded + ' / ' + event.total);
                    //                 // }
                    //                 xhr.onload = xhr.onerror = function () {
                    //                     if (this.status == 200) {
                    //                         console.log("success");
                    //                     } else {
                    //                         console.log("error " + this.status);
                    //                     }
                    //
                    //                 };
                    //                 xhr.open("PUT", ""+urll+"", true);
                    //                 xhr.setRequestHeader("Content-Type", "multipart/form-data");
                    //                 xhr.send(formData);
                    //                 console.log(xhr);
                    //
                    //             },
                    //             error:function (vv) {
                    //                 console.log(vv);
                    //                 console.log('err');
                    //                 alert(vv);
                    //             }
                    //         });
                    //     }
                    // });
                    // $(".iconbut2").click(function () {
                    //     console.log(Date.now());
                    //     // var file_data = $('.iconbut1').prop('files')[0];
                    //     // var form_data = new FormData();
                    //     // form_data.append('file', file_data);
                    //     // alert(form_data);
                    //     // console.log(form_data);
                    //     $.ajax({
                    //         type: "GET",
                    //         beforeSend: function (request) {
                    //             request.setRequestHeader("Authorization", "Bearer " + token);
                    //         },
                    //         // url: "https://www.googleapis.com/drive/v2/files/18qxc3YgnQ_Yg8n4Q18WCZahE9EPtOZWhoKJuAx6SEHI/permissions",
                    //         url: "https://www.googleapis.com/drive/v3/files/AIzaSyCl8vJeJrcLvrZW0GnxPpScourQj7vfvLI/permissions",
                    //         dataType: 'application/json',
                    //         processData: true,
                    //         success: function (msg) {
                    //             console.log('Got File Metadata: ' + msg) + console.log(msg);
                    //         },
                    //         error: function (jqXHR, textStatus, errorThrown) {
                    //             console.log('Error: ' + errorThrown + ' / ' + textStatus) + console.log(jqXHR);
                    //         }
                    //     });
                    //     // $.ajax({
                    //     //   url: '/api/v2/leads',
                    //     //   type: 'POST',
                    //     //   dataType: 'json',
                    //     //   data: {
                    //     //     update: [{
                    //     //       id: curr_card,
                    //     //       updated_at: Date.now(),
                    //     //       custom_fields: [{
                    //     //         id: "903679",
                    //     //         values: [{
                    //     //           value: '+'
                    //     //         }]
                    //     //       }
                    //     //       ]
                    //     //     }]
                    //     //   }
                    //     // });
                    // });
                    // // $(".iconbut2").click(function () {
                    // //   $.ajax({
                    // //     url: '/api/v2/leads',
                    // //     type: 'POST',
                    // //     dataType: 'json',
                    // //     data: {
                    // //       update: [{
                    // //         id: curr_card,
                    // //         updated_at: Date.now(),
                    // //         custom_fields: [{
                    // //           id: "903681",
                    // //           values: [{
                    // //             value: '+'
                    // //           }]
                    // //         }
                    // //         ]
                    // //       }]
                    // //     },
                    // //     success: (data) => {
                    // //       console.log('success');
                    // //       console.log(data);
                    // //     },
                    // //     error: function (data) {
                    // //       console.log('users error');
                    // //       console.log(data);
                    // //     }
                    // //   });
                    // // });
                    // $("#files1").click(function () {
                    //     if (window.FormData === undefined) {
                    //         alert('В вашем браузере FormData не поддерживается')
                    //     } else {
                    //         var formData = new FormData();
                    //         // formData.append('file', $("#js-file")[0].files[0]);
                    //         formData = $("#files1")[0].files[0];
                    //         console.log(formData);
                    //     }
                    //
                    // });
                    // $(".iconbut4").click(function () {
                    //     $.ajax({
                    //         url: '/api/v2/leads',
                    //         type: 'POST',
                    //         dataType: 'json',
                    //         data: {
                    //             update: [{
                    //                 id: curr_card,
                    //                 updated_at: Date.now(),
                    //                 custom_fields: [{
                    //                     id: "287759",
                    //                     values: [{
                    //                         value: '+'
                    //                     }]
                    //                 }
                    //                 ]
                    //             }]
                    //         }
                    //     });
                    // });
                }
                return true;
            },
            bind_actions: function () {
                console.log('bind_actions');
                return true;
            },
            settings: function () {
                return true;
            },
            onSave: function () {
                alert('click');
                return true;
            },
            destroy: function () {

            },
            contacts: {
                //select contacts in list and clicked on widget name
                selected: function () {
                    console.log('contacts');
                }
            },
            leads: {
                //select leads in list and clicked on widget name
                selected: function () {
                    console.log('leads');
                }
            },
            tasks: {
                //select taks in list and clicked on widget name
                selected: function () {
                    console.log('tasks');
                }
            },
            advancedSettings: _.bind(function () {
                var $work_area = $('#work-area-' + self.get_settings().widget_code),
                    $save_button = $(
                        Twig({ref: '/tmpl/controls/button.twig'}).render({
                            text: 'Сохранить',
                            class_name: 'button-input_blue button-input-disabled js-button-save-' + self.get_settings().widget_code,
                            additional_data: ''
                        })
                    ),
                    $cancel_button = $(
                        Twig({ref: '/tmpl/controls/cancel_button.twig'}).render({
                            text: 'Отмена',
                            class_name: 'button-input-disabled js-button-cancel-' + self.get_settings().widget_code,
                            additional_data: ''
                        })
                    );

                console.log('advancedSettings');

                $save_button.prop('disabled', true);
                $('.content__top__preset').css({float: 'left'});

                $('.list__body-right__top').css({display: 'block'})
                    .append('<div class="list__body-right__top__buttons"></div>');
                $('.list__body-right__top__buttons').css({float: 'right'})
                    .append($cancel_button)
                    .append($save_button);

                self.getTemplate('advanced_settings', {}, function (template) {
                    var $page = $(
                        template.render({
                            title: self.i18n('advanced').title,
                            widget_code: self.get_settings().widget_code
                        })
                    );

                    $work_area.append($page);
                });
            }, self),

            /**
             * Метод срабатывает, когда пользователь в конструкторе Salesbot размещает один из хендлеров виджета.
             * Мы должны вернуть JSON код salesbot'а
             *
             * @param handler_code - Код хендлера, который мы предоставляем. Описан в manifest.json, в примере равен handler_code
             * @param params - Передаются настройки виджета. Формат такой:
             * {
             *   button_title: "TEST",
             *   button_caption: "TEST",
             *   text: "{{lead.cf.10929}}",
             *   number: "{{lead.price}}",
             *   url: "{{contact.cf.10368}}"
             * }
             *
             * @return {{}}
             */
            onSalesbotDesignerSave: function (handler_code, params) {
                var salesbot_source = {
                        question: [],
                        require: []
                    },
                    button_caption = params.button_caption || "",
                    button_title = params.button_title || "",
                    text = params.text || "",
                    number = params.number || 0,
                    handler_template = {
                        handler: "show",
                        params: {
                            type: "buttons",
                            value: text + ' ' + number,
                            buttons: [
                                button_title + ' ' + button_caption,
                            ]
                        }
                    };

                console.log(params);

                salesbot_source.question.push(handler_template);

                return JSON.stringify([salesbot_source]);
            },
        };
        return this;
    };

    return CustomWidget;
});