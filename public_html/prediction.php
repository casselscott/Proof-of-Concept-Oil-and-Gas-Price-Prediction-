<?php
?>
<?php
$error="";
	if(isset($_POST["upload"])) {
		$target_dir = "uploads/";
		$target_file = $target_dir . basename($_FILES["csv_file"]["name"]);
		$uploadOk = 1;
		$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
	    if($imageFileType != "csv") {
		    $error="Only CSV File Allowed";
		    $uploadOk = 0;
		}
		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
		// if everything is ok, try to upload file
		} else {
		    if (move_uploaded_file($_FILES["csv_file"]["tmp_name"], $target_file)) {
		      //  echo "The file ". basename( $_FILES["csv_file"]["name"]). " has been uploaded.";
		    	$data = csv_to_array($filename="uploads/".$_FILES["csv_file"]["name"], $delimiter=',');
		    	if (is_array ($data )) {
		    		//var_dump($data);
		    		$temp_array=array();
		    		for ($i=0; $i <count($data) ; $i++) { 
		    		//	echo $data[$i]->Value;
		    			//var_dump($data[$i]);
		    			foreach ($data[$i] as $key => $value) {
		    				if ($key=='Value') {
		    					array_push($temp_array, $value);
		    				}
						}
		    			//
		    		}
		    		$data=$temp_array;
		    	}
		    } else {
		        $error="There was an error uploading your file.";
		    }
		}
	}

	function csv_to_array($filename='', $delimiter=','){
	    if(!file_exists($filename) || !is_readable($filename))
	        return FALSE;

	    $header = NULL;
	    $data = array();
	    if (($handle = fopen($filename, 'r')) !== FALSE)
	    {
	        while (($row = fgetcsv($handle, 1000, $delimiter)) !== FALSE)
	        {
	            if(!$header)
	                $header = $row;
	            else
	                $data[] = array_combine($header, $row);
	        }
	        fclose($handle);
	    }
	    return $data;
	}
?>
<!doctype html>
<head>
        
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
            
        </style>
        <script>
            
            function readfile()
            {
                var file = document.getElementById("browsfile").value;
                 var rawFile = new XMLHttpRequest();
                rawFile.open("GET", file, true);
                rawFile.onreadystatechange = function ()
                {
                    if(rawFile.readyState === 4)
                    {
                        if(rawFile.status === 200 || rawFile.status == 0)
                        {
                            var allText = rawFile.responseText;
                           // alert(allText);
                        }
                    }
                }
                rawFile.send(null);   
            }
            
    function predicting_prices()
        {
            var array = new Array();
            <?php foreach($data as $key => $val){ ?>
        array.push('<?php echo $val; ?>');
    <?php } ?>
            
            //alert(array);
            var a={name:23,value:0};
            var b={name:27,value:0};
            var c={name:33,value:0};
            var d={name:37,value:0};
            var e={name:43,value:0};
            var f={name:47,value:0};
            var g={name:52,value:0};
            var h={name:57,value:0};
            var i_i={name:63,value:0};
            var j={name:67,value:0};
            var k={name:73,value:0};
            var l={name:77,value:0};
            var m={name:83,value:0};
            var n={name:88,value:0};
            var o={name:93,value:0};
            var p={name:97,value:0};
            var q={name:102,value:0};
            var r={name:107,value:0};

            for(var i = 0;i<=array.length;i++)
                {
                    var ll = array[i];
                        if(array[i]>=20 && array[i]<25)
                        {
                            a.value = a.value+1;//a++;
                        }
                    else if(array[i]>= 25 && array[i]<30)
                        {
                            b.value = b.value+1;
                        }
                    else if(array[i]>=30 && array[i]<35)
                        {
                            c.value=c.value+1;
                        }
                    else if(array[i]>=35 && array[i]<40)
                        {
                            d.value=d.value+1;
                        }
                    else if(array[i]>=40 && array[i]<45)
                        {
                            e.value=e.value+1;
                        }
                    else if(array[i]>=45 && array[i]<50)
                        {
                            f.value=f.value+1;
                        }
                    else if(array[i]>=50 && array[i]<55)
                        {
                            g.value=g.value+1;
                        }
                    else if(array[i]>=55 && array[i]<60)
                        {
                            h.value=h.value+1;
                        }
                    else if(array[i]>=60 && array[i]<65)
                        {
                            i_i.value=i_i.value+1;
                        }
                    else if(array[i]>=65 && array[i]<70)
                        {
                            j.value=j.value+1;
                        }
                    else if(array[i]>=70 && array[i]<75)
                        {
                            k.value=k.value+1;
                        }
                    else if(array[i]>=75 && array[i]<80)
                        {
                            l.value=l.value+1;
                        }
                    else if(array[i]>=80 && array[i]<85)
                        {
                            m.value=m.value+1;
                        }
                    else if(array[i]>=85 && array[i]<90)
                        {
                            n.value=n.value+1;
                        }
                    else if(array[i]>=90 && array[i]<95)
                        {
                            o.value=o.value+1;
                        }
                    else if(array[i]>=95 && array[i]<100)
                        {
                            p.value=p.value+1;
                        }
                    else if(array[i]>=100 && array[i]<105)
                        {
                            q.value=q.value+1;
                        }
                    else if(array[i]>=105 && array[i]<110)
                        {
                            r.value=r.value+1;
                        }
                }
            var array_of_array = new Array(18);
            array_of_array = [a,b,c,d,e,f,g,h,i_i,j,k,l,m,n,o,p,q,r];
            for(var ll =0;ll <array_of_array.length;ll++)
            {
              //  alert(JSON.stringify(array_of_array[ll].value));
            }
            
    var two=0;
    var three=0;
    var hi=0;
    var five =0;        
            
            for(var k_k = 0;k_k < array_of_array.length;k_k++)
                    {            
                        var one = array_of_array[k_k].value;
                        var four = array_of_array[k_k].name;
                        for(var inctoo=0;inctoo<array_of_array.length;inctoo++)
                            {
                                five = array_of_array[inctoo].value;
                                if(one>five)
                                    {
                                        two=array_of_array[k_k].name;
                                    }
                            }
                    }
            
          //  alert("Most repeated value = "+two);
            
        var last_value = array[array.length-1];
       //     alert(last_value);
        var new_values = new Array(4);
        var increament=0;    
            for(var val = 0;val<array.length;val++)
            {
                if(array[val]>last_value)
                {
                    new_values[increament] = array[val]; 
                    increament=increament+1;
                }
            }
            
            var top = two;
            var first_ = new_values[0];
            var second_ = new_values[1];
            var third_ = new_values[2];
            var fourth_ = new_values[3];
            
            
        alert("Predicted value for next years are = "+ top+"\n"+first_+"\n"+second_+"\n"+third_+"\n"+fourth_);
          assigning_values(array,top,first_,second_,third_,fourth_);
};

        </script>
        <script src="js/d3.v3.min.js"></script>
        <script src="js/eventDrops.js"></script>
        <script src="js/cubism.v1.min.js"></script>
        <script src="js/demo_eventDroup.js"></script>
        <script src="js/dimple.v2.1.6.min.js"></script>
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">        
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
<!--
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">Home</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">

                </div>/.navbar-collapse 
            </div>
        </nav>
-->

        <!-- Main jumbotron for a primary marketing message or call to action -->


        <div class="container col-md-12" style="margin-top:-50px;">
            <!-- Example row of columns -->
            <div class="well midPane" style="left: 72px; right: 0px; height:500px; margin:-20px;">
                
                <div class='row' style="heigh:500px;" class="midPane" style="left: 72px; right: 0px; bottom: 0px;">
                    
                    <div class='col-md-2 thumbnail leftPane paneContent' >
                        <div class="category_selection" style="margin-top: 5px;display1:none;background-color;gray;">
                            <div>
                                  <div class="dropdown list-group">
                                    <div class="left_options" type="button"  style="cursor:pointer" data-toggle="dropdown">
                                        <div class="image_class zd icon"><img class="image" src="img/bar.gif"> </div>
                                        <div class="text1">Charts</div>
                                    <span class="caret"></span>
                                      </div>
                                    <ul class="dropdown-menu bar_style">
                                      <li class="dropdown-header options_chart"><div style="background-color:#333;"class="glyphicon glyphicon-th image_of_chart"></div>
                                         <div class="text">charts</div> 
                                        </li>
                                        <li class="lil"><a href="#" id='drops' class="list-group-item"> <div class="thumbnail vis-icon"><img class="image"                                                    src="img/eve.png"> </div>EventDrops</a></li>
                                      <li><a href="#" class="list-group-item" id='cubism'><div class="thumbnail vis-icon"><img                                                  class="image" src="img/eve.png"> </div>Cubism</a></li>
                                      <li><a href="#" class="list-group-item" id='line'><div class="thumbnail vis-icon"><img                                                    class="image" src="img/eve.png"> </div>Line Chart</a></li>
                                      <li><a href="#" class="list-group-item" id='scatter'><div class="thumbnail vis-icon"><img                                                     class="image" src="img/eve.png"> </div>Scatter Chart</a></li>
                                      <li><a href="#" class="list-group-item" id='bar'><div class="thumbnail vis-icon"><img                                                     class="image" src="img/eve.png"> </div>Bar Chart</a></li>
                                    </ul>
  </div>
        <div class="list-group">
            <button class="btn btn-default" onclick="predicting_prices();">Predict Prices</button>
                                </div>                        
                        <div class="list-group">
	<form method="post" enctype="multipart/form-data">
		<h3 style="color: red;">
			<?php
				if(isset($_POST["upload"]))
					echo $error;
			?>
		</h3>
		<br>
    	<input type="file" required name="csv_file" id="browsfile" accept=".csv"/><br>
    	<button type="submit" name="upload"> Upload File</button>
    </form>
                        </div>

                            </div>
                            
                        </div>
                    
                    
                    </div> <!-- terminating left -->
                    <div class='col-md-11 thumbnail' style="margin-left:130px;">
                        <div id="container">
                        
                        </div>
                    </div>                    
                </div>

<!--
                <div class='row'>
                    <div class='col-lg-4'>

                    </div>
                    <div class='col-lg-8 thumbnail'>
                        <div>
                            <img src="img/cub.png" style='width:100px; height: 100px' id='drops'alt='charts'/>
                            <img src='img/eve.png' style='width:100px; height: 100px' alt='charts'/>
                            <img src='img/hil.png' style='width:100px; height: 100px' alt='charts'/>
                            <img src='img/leng.gif' style='width:100px; height: 100px' alt='charts'/>
                            <img src='img/lin.jpg' style='width:100px; height: 100px' alt='charts'/>
                            <img src='img/sca.gif' style='width:100px; height: 100px' alt='charts'/>
                            <img src='img/bar.gif' style='width:100px; height: 100px' alt='charts'/>
                        </div>
                    </div>
                </div>
-->

        </div> <!-- /container -->        
        <script src="js/jquery.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.js"><\/script>')</script>
        <!--script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script-->
        <script src="js/highcharts.js"></script>
        <script src="js/highstock.js"></script>
        <script src="js/highcharts-more.js"></script>
        <script src="js/exporting.js"></script>
        <link href="css/line.css"/>
        <script src="js/vendor/bootstrap.min.js"></script>

        <script src="js/main.js"></script>
        <script type="text/javascript" language="javascript" src="graph.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    </body>
</html>
