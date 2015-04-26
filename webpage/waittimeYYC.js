

initialize();
function initialize()
{
localStorage.setItem("link", 'homeLi');	
loadClinicTable();
//drawMap();
}

function markActive(link)
{
	
	localStorage.setItem("link", link);
	console.log(link);
	document.getElementById('homeLi').removeAttribute('class');
	document.getElementById('clinicLi').removeAttribute('class');
	document.getElementById('doctorLi').removeAttribute('class');
	
	var li = document.getElementById(link);
	li.setAttribute('class','active')
	
	
	
	//hide the inactive div
	
	if(link=='homeLi')
	{
	 //document.getElementById('map-canvas').style.display = 'block';
	 //document.getElementById('list-div').style.display = 'none';
	}
	else 
	{
		
		
	}
	
	loadClinicTable();
	
}



function drawMap()
{

    // var searchBox = new google.maps.places.SearchBox(
    // /** @type {HTMLInputElement} */(input));

    // Get the user's location, try HTML5 first
  if(navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      // display the user's current location 
      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Your location.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation :(
    handleNoGeolocation(false);
  } 
  //finished getting location 

// clinic data 
   var clinics = [{"Name":"Horizon Square Medicentre","Address":"401-3508 32 Ave NE, Calgary, AB T1Y 6J2","LAT":"51.0825682","LON":"-113.985171","waitingtime":"77"},
{"Name":"Drs Young & Wouters","Address":"515-10333 Southport Rd SW, Calgary, AB T2W 3X6","LAT":"50.9630499","LON":"-114.0732958","waitingtime":"59"},
{"Name":"Chinook Medical Centre","Address":"280-5920 1A St SW, Calgary, AB T2H 0G3","LAT":"51.000231","LON":"-114.0666152","waitingtime":"68"},
{"Name":"Western Medical Assessments","Address":"400-7015 MacLeod Trail SW, Calgary, AB T2H 2K6","LAT":"50.9907312","LON":"-114.0722191","waitingtime":"55"},
{"Name":"Elle' Ambiance Vein & Skin Rejuvenation Centre","Address":"302 Crowchild Trail NW, Calgary, AB T2N 2R5","LAT":"51.0545654","LON":"-114.1175756","waitingtime":"55"},
{"Name":"Preventous Collaborative Health","Address":"1635 17 Ave SW, Calgary, AB T2T 0E5","LAT":"51.0376807","LON":"-114.0996778","waitingtime":"79"},
{"Name":"Perron Wayne R Dr","Address":"300-333 24 Ave SW, Calgary, AB T2S 3E6","LAT":"51.0315531","LON":"-114.0713949","waitingtime":"63"},
{"Name":"Smart Health Medical Clinic  Clinics","Address":"101-178 96 Ave NE, Calgary, AB T3K 6G4","LAT":"51.1420595","LON":"-114.0660498","waitingtime":"74"},
{"Name":"Woodbine Medical Centre","Address":"202A-2525 Woodview Dr SW, Calgary, AB T2W 4N4","LAT":"50.9403328","LON":"-114.1201414","waitingtime":"75"},
{"Name":"Dr Hegde Pediatric Clinic","Address":"210-5401 Temple Dr NE, Calgary, AB T1Y 3R7","LAT":"51.085003","LON":"-113.9571736","waitingtime":"63"},
{"Name":"Dr. William De Haas","Address":"200-2004 14 St NW, Calgary, AB T2M 3N3","LAT":"51.0698576","LON":"-114.0939737","waitingtime":"73"},
{"Name":"Frank Ryan C Dr","Address":"300-333 24 Ave SW, Calgary, AB T2S 3E6","LAT":"51.0315531","LON":"-114.0713949","waitingtime":"70"},
{"Name":"Fivecees Medical Centre  Medical Clinics","Address":"635 Shawcliffe Gate SW, Calgary, AB T2Y 1W1","LAT":"50.9114605","LON":"-114.0752931","waitingtime":"58"},
{"Name":"Sante Cosmetic Laser & Vein Centre","Address":"3-1504 15 Ave SW, Calgary, AB T3C 0X9","LAT":"51.0396778","LON":"-114.0950228","waitingtime":"70"},
{"Name":"Madigan Medical Centre","Address":"6060 Memorial Dr NE, Calgary, AB T2A 5Z5","LAT":"51.0524993","LON":"-113.9418919","waitingtime":"80"},
{"Name":"Face & Body Renewal A Div of H R S of Calgary  Clinics","Address":"268- 1665 14 Ave NW, Calgary, AB T2N 1M5","LAT":"51.0644119","LON":"-114.0947775","waitingtime":"84"},
{"Name":"Dr May Siu","Address":"2128 Kensington Rd NW, Calgary, AB T2N 3R7","LAT":"51.0527387","LON":"-114.1096471","waitingtime":"83"},
{"Name":"Falconridge Medical Clinic","Address":"929-5075 Falconridge Blvd NE, Calgary, AB T3J 3K9","LAT":"51.0970236","LON":"-113.9629586","waitingtime":"74"},
{"Name":"TotalCardiology Rapid Consultation Clinic","Address":"110-2891 Sunridge Way NE, Calgary, AB T1Y 7K7","LAT":"51.0699942","LON":"-113.9991605","waitingtime":"53"},
{"Name":"Dr John B Kortbeek Professional Corporation","Address":"1004 8 Ave SE, Calgary, AB T2G 0M4","LAT":"51.0438307","LON":"-114.0386463","waitingtime":"80"},
{"Name":"South Calgary Medical Clinic  Medical Clinics","Address":"118-40 Sunpark Plaza SE, Calgary, AB T2X 3X7","LAT":"50.9018575","LON":"-114.05757","waitingtime":"82"},
{"Name":"TotalCardiology CardioDiagnostic Clinic   -","Address":"110-2891 Sunridge Way NE, Calgary, AB T1Y 7K7","LAT":"51.0699942","LON":"-113.9991605","waitingtime":"64"},
{"Name":"Odyssey Travel Clinic  Clinics","Address":"122-4935 40 Ave NW, Calgary, AB T3A 2N1","LAT":"51.0879322","LON":"-114.1578281","waitingtime":"71"},
{"Name":"TotalCardiology Rapid Access Chest Pain Clinic","Address":"110-2891 Sunridge Way NE, Calgary, AB T1Y 7K7","LAT":"51.0699942","LON":"-113.9991605","waitingtime":"75"},
{"Name":"Rockyview Maternity & Family Practice","Address":"258-1011 Glenmore Trail SW, Calgary, AB T2V 4R6","LAT":"50.9937135","LON":"-114.0854861","waitingtime":"60"},
{"Name":"Centre For Sleep & Human Performance","Address":"106-51 Sunpark Dr SE, Calgary, AB T2X 3V4","LAT":"50.903087","LON":"-114.0560246","waitingtime":"78"},
{"Name":"Dr John Nesbitt","Address":"417-1011 Glenmore Trail SW, Calgary, AB T2V 4R6","LAT":"50.9937135","LON":"-114.0854861","waitingtime":"85"},
{"Name":"Savage Paul R G Dr Professional Corp","Address":"7808 Elbow Dr SW, Calgary, AB T2V 1K4","LAT":"50.9841981","LON":"-114.083158","waitingtime":"79"},
{"Name":"Bowness Family Medical Centre  Medical Clinics","Address":"52-7930 Bowness Rd NW, Calgary, AB T3B 0H3","LAT":"51.0889666","LON":"-114.2011761","waitingtime":"62"},
{"Name":"Brentwood Family Medical Centre","Address":"810-3630 Brentwood Rd NW, Calgary, AB T2L 1K8","LAT":"51.0850945","LON":"-114.1274415","waitingtime":"58"},
{"Name":"Hoffman Centre For Integrative Medicine","Address":"1133 17th Ave NW, Calgary, AB T2M 0P7","LAT":"51.0678481","LON":"-114.0872171","waitingtime":"76"},
{"Name":"Signal Hill Medical Centre","Address":"2-5986 Signal Hill Ctr SW, Calgary, AB T3H 3P8","LAT":"51.0179859","LON":"-114.1744711","waitingtime":"61"},
{"Name":"Midpark Family Medical Centre","Address":"100-290 Midpark Way SE, Calgary, AB T2X 1P1","LAT":"50.9097249","LON":"-114.0634384","waitingtime":"69"},
{"Name":"Copeman Healthcare Centre","Address":"400-628 12 Ave SW, Calgary, AB T2R 0H6","LAT":"51.0419689","LON":"-114.075949","waitingtime":"77"},
{"Name":"Kensington Clinic  Clinics","Address":"2431 5 Ave NW, Calgary, AB T2N 0T3","LAT":"51.0571086","LON":"-114.1172177","waitingtime":"70"},
{"Name":"Properties Medical Clinic","Address":"5102 Rundlehorn Dr NE, Calgary, AB T1Y 1C1","LAT":"51.07166","LON":"-113.9612799","waitingtime":"69"},
{"Name":"Keith G Redding Prof Corp","Address":"308-8180 MacLeod Trail SE, Calgary, AB T2H 2B8","LAT":"50.9802036","LON":"-114.069634","waitingtime":"75"},
{"Name":"Aspen Medical Clinic  Medical Clinics","Address":"220 Aspen Glen Landng SW, Calgary, AB T3H 0N5","LAT":"51.0391333","LON":"-114.2059846","waitingtime":"60"},
{"Name":"Richmond Road Family Medical Centre","Address":"290-5255 Richmond Rd SW, Calgary, AB T3E 7C4","LAT":"51.016738","LON":"-114.1612315","waitingtime":"54"},
{"Name":"Dr Linda Lambert","Address":"201-6628 Crowchild Trail SW, Calgary, AB T3E 5R8","LAT":"50.9946675","LON":"-114.1175127","waitingtime":"81"},
{"Name":"Lang Robert M Dr","Address":"1428 20 Ave NW, Calgary, AB T2M 1G5","LAT":"51.070746","LON":"-114.093833","waitingtime":"77"},
{"Name":"Dr Allan R Behm","Address":"315-401 9 Ave SW, Calgary, AB T2P 3C5","LAT":"51.0444589","LON":"-114.0708842","waitingtime":"60"},
{"Name":"Acadia Surgical Group","Address":"202-8330 Fairmount Dr SE, Calgary, AB T2H 0Y8","LAT":"50.9784282","LON":"-114.0597062","waitingtime":"60"},
{"Name":"Meadows Maternity & Family Practice","Address":"100-20 Heritage Meadows Way SE, Calgary, AB T2H 0B5","LAT":"50.986358","LON":"-114.042172","waitingtime":"91"},
{"Name":"Westglen Medical Centre  Clinics","Address":"30 Springborough Blvd SW, Calgary, AB T3H 0N9","LAT":"51.0346835","LON":"-114.1916842","waitingtime":"75"},
{"Name":"Soriano Jeannette MD","Address":"272D-1600 90 Ave SW, Calgary, AB T2S 1V8","LAT":"51.033025","LON":"-114.068824","waitingtime":"72"},
{"Name":"The ECM Group  Clinics","Address":"880 16 Ave SW, Calgary, AB T2R 1J9","LAT":"51.0382744","LON":"-114.0873821","waitingtime":"62"},
{"Name":"MedStop Medical Clinics Ltd","Address":"8330 MacLeod Trail SE, Calgary, AB T2H 2V2","LAT":"50.9777439","LON":"-114.071475","waitingtime":"69"},
{"Name":"Dr Jason Chau Professional Corp","Address":"103-49 Richard Way SW, Calgary, AB T3E 7M8","LAT":"51.00603","LON":"-114.1319432","waitingtime":"64"}];

    //var obj = JSON.parse(clinics);
    // console.log(clinics[1].Name);
    // console.log(clinics[1].Address);
    // console.log(clinics[1].waitingtime);
    // console.log(clinics[1].LAT);
    // console.log(clinics[1].LON);

 
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 14,
      center: new google.maps.LatLng(51.045596, -114.056440),
      //center: pos,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    // Looping through all the entries from the JSON data
    for(var i = 0; i < clinics.length; i++) {
    
    // Current object
    var obj = clinics[i];
    //console.log(clinics[i].Name);
    
    // Adding a new marker for the object
    var marker = new MarkerWithLabel({
      position: new google.maps.LatLng(obj.LAT,obj.LON),
      map: map,
      labelContent: "20",
      //labelAnchor: new google.maps.Point(22, 0),
      //labelClass: "labels",
      labelInBackground: false,
      title: obj.title 
    });
    
    // Adding a new info window for the object
    //var clicker = addClicker(marker, obj.title);
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(clinics[i].Name + "</br>"+ clinics[i].Address + "</br> Wait Time: " + clinics[i].waitingtime + " minutes" );
          infowindow.open(map, marker);
        }
      })(marker, i));

  } // end loop

  // Add City KML Layers
  //city limits
  // var kmzLayer = new google.maps.KmlLayer('citylimits.kml');
  // kmzLayer.setMap(map);

  // // city quadrants
  // // var kmzQuadrants = new google.maps.KmlLayer('qudrants.kml');
  // var kmzQuadrants = new google.maps.KmlLayer('https://data.calgary.ca/_layouts/OpenData/DownloadDataset.ashx?Format=KML&DatasetId=PDC0-99999-99999-00004-P(CITYonlineDefault)&VariantId=2(CITYonlineDefault)');
  //kmzQuadrants.setMap(map);
  var kmzQuadrants = new google.maps.KmlLayer(
                  'https://data.calgary.ca/_layouts/OpenData/DownloadDataset.ashx?Format=KML&DatasetId=PDC0-99999-99999-00004-P(CITYonlineDefault)&VariantId=2(CITYonlineDefault)',
                  {
                      suppressInfoWindows: true,
                      map: map,
                      preserveViewport: true
                  });
	
	

}



function mapList(option)
{
	 console.log(option)
	
	
	localStorage.setItem("mapList", option);
	
	
	if(option=='map')
	{
	 document.getElementById('map-canvas').style.display = 'block';
	 document.getElementById('list-div').style.display = 'none';
	 drawMap();
	}
	else if(link='list')
	{
		document.getElementById('map-canvas').style.display = 'none';
	   document.getElementById('list-div').style.display = 'block';
	}
	else
	{
		document.getElementById('map-canvas').style.display = 'block';
	   document.getElementById('list-div').style.display = 'none';
	}
	
	
	
}



function loadClinicTable()
{
	var clinicTableHeader = document.getElementById("clinicsTableHeader");
	var allClinicsData = JSON.parse(localStorage.getItem('allClinics'));
	
	
	//console.log(allClinicsData[0]);

	var allClinicsHeader = document.getElementById("allClinicHeader");
	var allDoctorsHeader = document.getElementById("allDoctorHeader");
	
	
		while (clinicTableHeader.firstChild) 
		{
			clinicTableHeader.removeChild(clinicTableHeader.firstChild);
		}
	
	//console.log(allClinicsData[0]);

	if(localStorage.getItem("link") == "clinicLi")
	{
		allClinicsHeader.style.visibility = "visible";
		allDoctorsHeader.style.visibility = "hidden";
		
		
		for(var i = 0; i < allClinicsData.length; i++)
		{
		var row = document.createElement("tr");
		row.setAttribute("class","odd");
		row.setAttribute("role","row");
		
		var col1 = document.createElement("td");
		col1.setAttribute("class","sorting_1");
		col1.innerHTML = allClinicsData[i].name;
		row.appendChild(col1);
		
		var col2 = document.createElement("td");
		col2.setAttribute("class","sorting_1");
		col2.innerHTML = allClinicsData[i].address;
		row.appendChild(col2);
		
		var col3 = document.createElement("td");
		col3.setAttribute("class","sorting_1");
		col3.innerHTML = allClinicsData[i].waitingtime;
		row.appendChild(col3);
		
		var col4 = document.createElement("td");
		col4.setAttribute("class","sorting_1");
		col4.innerHTML = allClinicsData[i].waitingtime;
		row.appendChild(col4);
		clinicTableHeader.appendChild(row);
		}	
	}
	
	
	else if(localStorage.getItem("link") == "doctorLi")
	{
		allClinicsHeader.style.visibility = "hidden";
		allDoctorsHeader.style.visibility = "visible";
		
		for(var i = 0; i < allClinicsData.length; i++)
		{
			
			for(var j = 0; j < allClinicsData[i].doctors.length; j++)
			{
			var row = document.createElement("tr");
			row.setAttribute("class","odd");
			row.setAttribute("role","row");
			
			var col1 = document.createElement("td");
			col1.setAttribute("class","sorting_1");
			col1.innerHTML = allClinicsData[i].doctors[j].name;
			row.appendChild(col1);
			
			var col2 = document.createElement("td");
			col2.setAttribute("class","sorting_1");
			col2.innerHTML = allClinicsData[i].doctors[j].rating;
			row.appendChild(col2);
			
			var col3 = document.createElement("td");
			col3.setAttribute("class","sorting_1");
			col3.innerHTML = allClinicsData[i].doctors[j].speciality;
			row.appendChild(col3);
			
			var col4 = document.createElement("td");
			col4.setAttribute("class","sorting_1");
			col4.innerHTML = allClinicsData[i].doctors[j].rating;
			row.appendChild(col4);
			clinicTableHeader.appendChild(row);
			}
		
		}	
	}
	
	
	
	
	
	
	
	
	else
	{
		allClinicsHeader.style.visibility = "visible";
		allDoctorsHeader.style.visibility = "hidden";
		for(var i = 0; i < allClinicsData.length; i++)
		{
		var row = document.createElement("tr");
		row.setAttribute("class","odd");
		row.setAttribute("role","row");
		
		var col1 = document.createElement("td");
		col1.setAttribute("class","sorting_1");
		col1.innerHTML = allClinicsData[i].name;
		row.appendChild(col1);
		
		var col2 = document.createElement("td");
		col2.setAttribute("class","sorting_1");
		col2.innerHTML = allClinicsData[i].address;
		row.appendChild(col2);
		
		var col3 = document.createElement("td");
		col3.setAttribute("class","sorting_1");
		col3.innerHTML = allClinicsData[i].waitingtime;
		row.appendChild(col3);
		
		var col4 = document.createElement("td");
		col4.setAttribute("class","sorting_1");
		col4.innerHTML = allClinicsData[i].waitingtime;
		row.appendChild(col4);
		clinicTableHeader.appendChild(row);
		}
		
	}
	
	
		
	
	
	

	
}
