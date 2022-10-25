$(function(){
    $('#form1').on('submit',function(e){
        e.preventDefault();

        var name =$('input#name').val();
        // console.log(name)

        var hobbies=[];
        var checked_elements =$('input[name="hobby"]:checked');
        $.each(checked_elements,function(i,v){
            // console.log(checked_elements);
            hobbies.push($(this).val());
            // console.log(hobbies)
        })

        // alert 
        if(hobbies.length==1){
            alert(`${name}'s hobby is ${hobbies[0]}.`);
        }else if(hobbies.length==2){
            alert(`${name}'s hobby are ${hobbies.join(' and ')}.`)
        }else if(hobbies.length>=3){
            alert(`${name}'s hobby are ${hobbies[0]}, ${hobbies[1]} and ${hobbies[hobbies.length-1]}`);
        }
    });
})