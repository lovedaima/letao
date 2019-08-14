//配置的字段和input 框中制定的name 关联，所有必须要给inout 加上name
$("#form").bootstrapValidator({
    
    //配置图标
    feedbackIcons: {
        valid: 'glyphicon glyphicon-heart',  //校验成功
        invalid: 'glyphicon glyphicon-remove',  //校验失败
        validating: 'glyphicon glyphicon-refresh' //校验中
      },
    //配置字段
    fields: {
        username: {
            //配置校验规则
            validators: {
                //非空
                notEmpty: {
                    //提示信息
                      message: "用户名不能为空"
                },
                //长度校验
                stringLength: {
                    min: 2, 
                    max: 6,
                    message: "用户名长度必须在2-6位"
                },
                callback: {
                    message: "用户名不存在"
                }
            }
        },
        password: {
            validators: {
                notEmpty: {
                    message: "密码不能为空"
                },
                stringLength: {
                    min: 6,
                    max: 12,
                    message: "用户名长度必须在6-12位"
                },
                callback: {
                    message: "密码不正确"
                }
            }
        }
    }
})

// 2. 登陆功能
//    表单校验插件会在提交表单是进行校验
//    (1) 校验成功, 默认就提交表单，会发生页面跳转,注册表单校验成功事件，
       // 阻止默认的提交 通过ajax发送请求
//    (2) 校验失败, 不会提交表单，配置插件提示用户即可

//注册表单校验成功事件
$("#form").on("success.form.bv",function(e){
    //阻止默认的表单提交
    e.preventDefault();
    console.log("表单校验成功后的 表单提交 被阻止了");
    //通过 ajax 进行提交
    $.ajax({
        type: "post",
        url: "/employee/employeeLogin",
        data: $('#form').serialize(),
        dataType: "json",
        success: function( info ){
            console.log( info );
            if(info.success){
                location.href = "index.html"
            }
            if( info.error === 1000 ){
                // alert("当前用户名不存在")
                $('#form').data("bootstrapValidator").updateStatus("username","INVALID","callback");

            }
            if( info.error === 1001){
                // alert('用户密码错误');
                $('#form').data("bootstrapValidator").updateStatus()
            }
        }
    })
})
