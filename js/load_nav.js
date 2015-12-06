/**
 * Created by Vlad on 14.11.2015.
 */
//--------------------arr
var weekday = {};
var monday = {
    'first' : [{'one': '11'},{'two': '12'},{'three': '13'},{'four': '14'},{'five': '15'},{'six': '16'}],
    'two': [{'one': '21'},{'two': '22'},{'three': '23'},{'four': '24'},{'five': '25'},{'six': '26'}]
};
var group_array =['KS-12(I)', 'KI-12','KI-11']; //group
var lesson_array = {
    'KS-12(I)': ['mvc', 'qaz', 'wsx', 'fgh', 'vbn'],
    'KI-12': ['qaz', 'wsx', 'fgh', 'vbn'],
    'KI-11': ['qaz', 'wsx', 'fgh', 'vbdedjhdgfhgsdjkjsd']

};
var global_click;
var room_array = ['201(I)', '202(P)', '203(L)', '204(I)', '205(P)', '206(L)'];
//------------------///arr
jQuery(function ($) {
    //$('#table_content_load').slideUp(1);

    //-------------------------------------------------append
    function apend_group (){     //load group_arrey
        for(var i=0; i<group_array.length; i++){
            $("#group_load").append('<li class='+ group_array[i]+'>'+group_array[i]+'</li>');
        }
    }
    function append_room (room_array){
        console.log(lesson_array);
        $("#room_load").html('');
        for(var i=0; i<room_array.length; i++){
            $("#room_load").append('<li class='+ room_array[i]+'>'+room_array[i]+'</li>');
        }

    }
    function append_lesson(lesson_array){
        $("#lesson_load").html('');
        for(var i=0; i<lesson_array.length; i++){
            $("#lesson_load").append('<li class='+ lesson_array[i]+'>'+lesson_array[i]+'</li>');
        }
    }

    function append_content(){
        console.log('append_content()');
        $("#append_first").html('');
        $("#append_two").html('');
        $('#num').html('');
        $('#num').append('<div>num</div>');
        var num = 1;
        //monday['first'][0].one
        for(var i=0; i < monday['first'].length; i++){
            for(var element in monday['first'][i]){
                $('#num').append('<div>'+num+'</div>');
                num+=1;
                $("#append_first")
                    .append('<li class='+'lesson'+i+'>'+monday['first'][i][element]+'</li>');
            }
        }
        for(var i=0; i < monday['two'].length; i++){
            for(var element in monday['two'][i]){
                $("#append_two")
                    .append('<li class='+'room'+i+'>'+monday['two'][i][element]+'</li>');
            }
        }
    }

    function global_click_f (target){
        console.log('++');
        console.log(target);
        console.log(global_click);
        $('.' + global_click).html('');
        $('.' + global_click).append(target);
    }
    apend_group ();

    //--------------------------------------------///append
    $(window).load( function () {
        $('#whirlpool').hide(2000);
    });

//-----------------------------slide up/down
    var step = 0;
    $(document).on('click', '#group_click', function (event) {
        event.preventDefault();
        step +=1;
        console.log(step);
        if (step == 1){
            $('.hidden_content_group').slideUp(1000);
        }else{
            $('.hidden_content_group').slideDown(1000);
            step = 0;
        }
    });

///////////////slide up/down

var group_load_onClick_lesson_array;
var group_load_onClick_room_array;
    $(document).on('click', '#group_load', function (event) {
        console.log(event.target.className);
        for(var i=0; i<group_array.length; i++) {
            if(event.target.className == group_array[i]){
                group_load_onClick_lesson_array = lesson_array[event.target.className];
                group_load_onClick_room_array = room_array;
            }

        }
        append_content();
    });

    $(document).on('click', '#wrapper_content_week', function (event) {
        event.preventDefault();

        //console.log(event.target.className);
        global_click = event.target.className;
    });


    $(document).on('click', '#lessons_onClick', function (event) {
        append_lesson(group_load_onClick_lesson_array);
        console.log(event.target.className+'globalclick');
        global_click = event.target.className;
        $('#lesson_load').show();
    });
    $(document).on('click', '#room_onClick', function (event) {
        append_room(group_load_onClick_room_array);
        console.log(event.target.className+'globalclick');
        global_click = event.target.className;
        $('#room_load').show();
    });


    $(document).on('click', '#room_load', function (event) {
        event.preventDefault();
        $('#room_load').hide();
        global_click_f(event.target.className);
    });

    $(document).on('click', '#lesson_load', function (event) {
        event.preventDefault();
        $('#lesson_load').hide();
        global_click_f(event.target.className);
        console.log(event.target.className);
    });

});
//

