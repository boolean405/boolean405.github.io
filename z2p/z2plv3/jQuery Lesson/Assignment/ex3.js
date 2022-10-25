const GET_URL = 'https://api.imgflip.com/get_memes';
const POST_URL = 'https://api.imgflip.com/caption_image';
const USERNAME = 'maungbo404';
const PASSWORD = 'zFpRf8AKftWG@Wm';
var id;

// ready function
$(function () {

    // ajax getting data
    $.get(GET_URL, function (response) {
        if (response.success) {
            // console.log(response);

            var data = '';
            var memes = response.data.memes;
            // console.log(memes);

            $.each(memes, function (i, v) {
                data += `<img src='${v.url}' alt='' class='meme' data-boxcount='${v.box_count}' data-id='${v.id}' data-name='${v.name}'>`;
                // console.log(data);
            });
            $("#scroll_bar").html(data)
            // console.log(data)
        } else {
            console.log('Getting Data Fail!')
        }

        // click on scroll bar image
        $('#scroll_bar').on('click', '.meme', function () {
            id = $(this).data('id');
            var name = $(this).data('name');
            var url = $(this).attr('src');
            var boxcount = $(this).data('boxcount');

            // showing photo on left side
            $('#left_side').html(`<img src='${url}'>`);
            $('#meme_name').html(`${name}`);

            if (boxcount == 1) {
                $('#myform').html(`<input type="text" name="text1" id="text1" placeholder="Text 1"><br> <input type="submit" name="generate" id="generate" value="Generate">`);

            }
            else if (boxcount == 2) {
                $('#myform').html(`<input type="text" name="text1" id="text1" placeholder="Text 1"><br> <input type="text" name="text2" id="text2" placeholder="Text 2"><br> <input type="submit" name="generate" id="generate" value="Generate">`);

            }
            else if (boxcount == 3) {
                $('#myform').html(`<input type="text" name="text1" id="text1" placeholder="Text 1"><br> <input type="text" name="text2" id="text2" placeholder="Text 2"><br> <input type="text" name="text3" id="text3" placeholder="Text 3"><br> <input type="submit" name="generate" id="generate" value="Generate">`);

            }
            else if (boxcount == 4) {
                $('#myform').html(`<input type="text" name="text1" id="text1" placeholder="Text 1"><br> <input type="text" name="text2" id="text2" placeholder="Text 2"><br> <input type="text" name="text3" id="text3" placeholder="Text 3"><br> <input type="text" name="text4" id="text4" placeholder="Text 4"><br> <input type="submit" name="generate" id="generate" value="Generate">`);

            }
            else if (boxcount == 5) {
                $('#myform').html(`<input type="text" name="text1" id="text1" placeholder="Text 1"><br> <input type="text" name="text2" id="text2" placeholder="Text 2"><br> <input type="text" name="text3" id="text3" placeholder="Text 3"><br> <input type="text" name="text4" id="text4" placeholder="Text 4"><br> <input type="text" name="text5" id="text5" placeholder="Text 5"><br> <input type="submit" name="generate" id="generate" value="Generate">`);

            }
            else {
                console.log('Box Count satement error!')
            }
            // boc preventDefault when click submit
            $('#myform').on('submit', function (e) {
                console.log(id)

                var inp_val = [];
                var inp_text = $('#myform input[type="text"]');
                // console.log(inp_text)
                $(inp_text).each(function () {
                    // console.log(this.value);
                    inp_val.push(this.value);
                    console.log(inp_val)

                })

                // ajax post method
                $.post(POST_URL, {

                    template_id: id,
                    username: USERNAME,
                    password: PASSWORD,

                    boxes: [{
                        'text': inp_val[0]
                    },
                    {
                        'text': inp_val[1]
                    },
                    {
                        'text': inp_val[2]
                    },
                    {
                        'text': inp_val[3]
                    },
                    {
                        'text': inp_val[4]
                    }
                    ]
                }, function (response) {
                    console.log(response);
                    var url = response.data.url;


                    $('#left_side').html(`<img src='${url}'>`);

                });
                e.preventDefault();
            });


        });
    });





});