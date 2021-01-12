$(document).ready(function () {
    
    $("#idCountry").change(function() {
        var id = $(this).val();
        
         $.ajax({
                    type: "GET",
                    url: "https://c273lesson9.azurewebsites.net/getCountryDetails..php",
                    data: "id=" + id,
                    cache: false,
                    dataType: "JSON",
                    success: function (response) {
                        console.log(response);
                        var message = "<tbody><tr><th>Population</th><th>Obese</th></tr><td>" + response.population + "</td>" + "<td>" + response.obese + "</td></tr></tbody>";
                        $("#obeseTable").html(message);
                    }
                    
                    
                   
                    
                });
        
    });

    
});
