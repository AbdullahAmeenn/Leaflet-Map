

var WorkPlaces = L.layerGroup();

var myIcon = L.icon({
    iconUrl: 'img/my-icon2.png',
    iconSize: [47, 52],
    iconAnchor: [15, 25],
    popupAnchor: [-3, -36]
});
var myIcon2 = L.icon({
    iconUrl: 'img/my-icon3.png',
    iconSize: [47, 52],
    iconAnchor: [15, 25],
    popupAnchor: [-3, -36],
});

L.marker([43.09757513681959,-89.3542957305908],{icon:myIcon2}).bindPopup("<h6 class='h1'><b>Math/Science Instructor-Upward Bound Program</b> </h6> <h6 class='h7'> <b>Forward Service Corporation - May 2018 - Sep-2019</b></h6> <ul class='details'> <li>Developed Upward Bound academic year curriculum for high school students</li><li>Guided students on 5-week summer program to one of Wisconsin's universities</li><li>Conducted ACT prep training in math and science sections</li><li>Tutored 60 students in math/science on regular basis</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlaces),
L.marker([43.10984994346575,-89.3089342117309],{icon:myIcon2}).bindPopup("<h6 class='h1'><b>Case Manager</b> </h6> <h6 class='h7'> <b>Porchlight Inc. - Aug-2016 - Mar-2018</b></h6> <ul class='details'> <li>Helped clients obtain stable housing and employment</li><li>Referred clients to available community resources</li><li>Provided daily advocacy and case management to up to 15 clients</li><li>Assisted clients in maintaining stable housing and employment</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlaces),
L.marker([43.070596384405306,-89.3952476978302],{icon:myIcon2}).bindPopup("<h6 class='h1'><b>Substitute Teacher</b> </h6> <h6 class='h7'> <b>Madison Metropolitan School District - Sep-2015 - Feb-2018</b></h6> <ul class='details'> <li>Provided classroom support to teachers and students</li><li>Facilitated tutorial sessions for students in math and science</li><li>Taught and managed a class of 25- 30 students</li><li>Tutored students in math/science on regular basis</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlaces),
L.marker([43.07241858824732,-89.52495664358139],{icon:myIcon2}).bindPopup("<h6 class='h1'><b>GIS Intern</b> </h6> <h6 class='h7'> <b>Telephone and Data Systems (TDS) - Oct 2019 - Present</b></h6> <ul class='details'> <li>Add easements and the Right of Way permits to databases</li><li>Upload/draw subdivision plats and certify survey maps into geodatabases</li><li>Created a web map to visualize and track the Right of Way (ROW) workflow</li><li>Searched and downloaded over 3000 subdivision plats and certify survey maps</li><li>Digitiz public utility easement on plats and CSM in ArcGIS and in ArcGIS online</li></ul>",{
  maxWidth : 460
}).addTo(WorkPlaces);


var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    topograph = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution: mbAttr});

var map = L.map('map', {
  center: [43.0731, -89.4012],
  measureControl:true,
  zoomSnap: 0.25,
  zoomControl:true, maxZoom:45, minZoom:1,
  zoomDelta: 2,
  zoom: 11,
  layers: [WorkPlaces, grayscale]
});

var baseLayers = {
  "Streets": streets,
  "Grayscale": grayscale,
  "Topography": topograph
};

var overlays = {
  "Work-Places": WorkPlaces
};

L.control.layers(baseLayers, overlays,{
  collapsed:false,
}).addTo(map);




// Next map frame starts from here



var WorkPlace = L.layerGroup();

var myIcon2 = L.icon({
    iconUrl: 'img/my-icon3.png',
    iconSize: [42, 52],
    iconAnchor: [15, 25],
    popupAnchor: [-3, -36],
});
L.marker([34.540782791277174,69.18048977851868],{icon:myIcon}).bindPopup("<h6 class='h1'>AECOM International Development - USAID Funded Project (SKA-East)</h6> <a href='https://www.usaid.gov/afghanistan/fact-sheets/stability-key-areas-sika' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([34.528152921422559,69.1943836212158],{icon:myIcon}).bindPopup("<h6 class='h1'>International Rescue Committee Main Office-Kabul</h6>").addTo(WorkPlace),
L.marker([34.53786633646289,69.16690707206726],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asia Foundation-Afghanistan Performance Based Governors Fund Program</h6> <a href='https://www.usaid.gov/news-information/fact-sheets/performance-based-governance-fund-pbgf#:~:text=The%20Performance%2DBased%20Governance%20Fund,improve%20their%20overall%20management%20capacity.'target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([34.81401251871912,67.82458752393723],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asia Foundation-Bamian Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([36.26552168534952,68.01760196685791],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asian Foundation-Samangan Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([36.71298328509708,67.10573673248291],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asia Foundation-Balkh Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([36.71666428208896, 68.8677978515625],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asia Foundation-Kunduz Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([36.73525578137582,69.52416658401489],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asian Foundation-Takhar Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([34.00073124300159,69.01834487915039],{icon:myIcon}).bindPopup("<h6 class='h1'>International RescueCommittee-Logar Province</h6> <a href='https://www.rescue.org/country/afghanistan' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([33.33610374104741,69.91782903671263],{icon:myIcon}).bindPopup("<h6 class='h1'>Intenational Rescume Comittee-Khost Province</h6> <a href='https://www.rescue.org/country/afghanistan' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([34.42739015929333,70.45643806457521],{icon:myIcon}).bindPopup("<h6 class='h1'>International Rescue Committee-Nangarhar Province</h6> <a href='https://www.rescue.org/country/afghanistan' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([34.3388950120101, 62.21166810200001],{icon:myIcon}).bindPopup("<h6 class='h1'>International Rescue Committee-Herat Province</h6> <a href='https://www.rescue.org/country/afghanistan' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([34.830026976201005,71.8407583236694],{icon:myIcon}).bindPopup("<h6 class='h1'>DACAAR - Pakistan </h6> <a href='https://dacaar.org/' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlace),
L.marker([34.553410745087284,69.1652977466583],{icon:myIcon}).bindPopup("<h6 class='h1'>DACAAR Main Office-Kabul</h6> <a href='https://dacaar.org/' target=_blank><h6>Click here for more details.</h6></a>").addTo(WorkPlace);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streetss  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    grayscalee   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    topography = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution: mbAttr});

var mapy = L.map('mapy', {
  center: [33.5553, 66.9875],
  measureControl:true,
  zoomSnap: 0.25,
  zoomControl:true, maxZoom:45, minZoom:1,
  zoomDelta: 2,
  zoom: 6,
  layers: [WorkPlace, grayscalee]
});

var baseLayers = {
  "Streets": streetss,
  "Grayscale": grayscalee,
  "Topography": topography
};

var overlays = {
  "Work-Place": WorkPlace
};

L.control.layers(baseLayers, overlays,{
  collapsed:false,
}).addTo(mapy);

L.control.scale().addTo(map);
L.control.scale().addTo(mapy);

// Start adding title for the map.
L.Control.textbox = L.Control.extend({
  onAdd: function(map) {
    
  var text = L.DomUtil.create('div');
  text.id = "info_text";
  text.innerHTML = "<div class='Title'> <h4>Places I Have Worked </h4></div>"
  return text;
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});
L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'topleft' }).addTo(map);

L.Control.textbox = L.Control.extend({
  onAdd: function(map) {
    
  var text = L.DomUtil.create('div');
  text.id = "info_text";
  text.innerHTML = "<div class='Title'> <h4>Places I Have Worked </h4></div>"
  return text;
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});

L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'topleft' }).addTo(mapy);


// Adding Popup to Show the Coordinates of a Clicked Point

var popup = L.popup();
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("<h5>Hello!</h5><p class ='coordinates'>The coordinates of the clicked point are:" + e.latlng+"</p>")
    .openOn(map);
};
map.on('click', onMapClick);


var popup = L.popup();
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("<h5>Hello!</h5><p class ='coordinates'>The coordinates of the clicked point are:" + e.latlng+"</p>")
    .openOn(mapy);
};
mapy.on('click', onMapClick);
